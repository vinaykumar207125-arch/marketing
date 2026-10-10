// Robust IndexedDB photo storage for high-resolution images to prevent QuotaExceededError from localStorage

const DB_NAME = "aura_captures_db";
const STORE_NAME = "founder_photos";
const KEY_NAME = "aura_founder_real_photo";
const SERVER_PATH_KEY = "aura_founder_photo_url";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB not supported"));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Retrieve the saved founder photo.
 * Tries IndexedDB first (high-resolution original), then falls back to server URL or local cache.
 */
export async function getFounderPhoto(): Promise<string | null> {
  try {
    const db = await openDB();
    const photo = await new Promise<string | null>((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY_NAME);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
    if (photo) return photo;
  } catch {
    // IndexedDB access may fail in private mode or non-browser environments
  }

  // Fallback to server URL if stored
  try {
    const serverUrl = localStorage.getItem(SERVER_PATH_KEY);
    if (serverUrl) return serverUrl;
  } catch {
    // Ignore localStorage errors
  }

  return null;
}

/**
 * Save founder photo to IndexedDB without localStorage quota limits.
 * Also stores server URL if available.
 */
export async function saveFounderPhoto(dataUrl: string, serverUrl?: string): Promise<void> {
  // 1. Save to IndexedDB (safe for arbitrary large images, 10MB+)
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, KEY_NAME);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Graceful degradation if IndexedDB is blocked
  }

  // 2. If a tiny server URL is provided, store that in localStorage safely (~40 bytes)
  if (serverUrl) {
    try {
      localStorage.setItem(SERVER_PATH_KEY, serverUrl);
    } catch {
      // Ignore quota issues
    }
  }

  // 3. Clean up any obsolete large data in localStorage to free quota
  try {
    localStorage.removeItem("aura_founder_real_photo");
  } catch {
    // Ignore
  }
}

/**
 * Remove stored founder photo from both IndexedDB and localStorage
 */
export async function clearFounderPhoto(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(KEY_NAME);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  } catch {
    // Ignore
  }

  try {
    localStorage.removeItem(SERVER_PATH_KEY);
    localStorage.removeItem("aura_founder_real_photo");
  } catch {
    // Ignore
  }
}
