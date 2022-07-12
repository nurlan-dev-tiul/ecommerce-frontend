export const getLocalStorage = (key) => {
    return window.localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value)
}

export const removeLocalStorage = () => {
    window.localStorage.clear();
}