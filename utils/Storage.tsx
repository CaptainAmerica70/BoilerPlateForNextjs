// utils.js
export function manageLocalStorage(fieldw: any, data = null) {
  if (typeof window !== 'undefined') {
    if (data) {
      // If data is provided, set it in localStorage
      localStorage.setItem(fieldw, (data));
    } else {
      // If no data is provided, get the data from localStorage
      const storedData = localStorage.getItem(fieldw);
      return storedData ? (storedData) : null;
    }
  }
}
