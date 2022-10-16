export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const getFechedData = (key: string) => {
  const data = getLocalStorageItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};