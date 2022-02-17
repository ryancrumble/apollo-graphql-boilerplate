type StorageLocation = "session" | "local";

const DEFAULT_STORAGE = "local";

const getStorage = (location: StorageLocation) =>
  (window as { [key: string]: any })[`${location}Storage`] as Storage;

const setItem = (
  key: string,
  value: any,
  location: StorageLocation = DEFAULT_STORAGE
) => {
  const storage = getStorage(location);
  storage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string, location: StorageLocation = DEFAULT_STORAGE) => {
  const storage = getStorage(location);
  try {
    return JSON.parse(storage.getItem(key) || "");
  } catch (err) {
    return null;
  }
};

const removeItem = (
  key: string,
  location: StorageLocation = DEFAULT_STORAGE
) => {
  const storage = getStorage(location);
  return storage.removeItem(key);
};

export { setItem, getItem, removeItem };
