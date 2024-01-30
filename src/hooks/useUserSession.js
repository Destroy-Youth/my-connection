export function useSessionStorage(key) {
  const setSessionStorageItem = value => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      window.console.error(error)
    }
  }

  const getSessionStorageItem = () => {
    try {
      const item = window.sessionStorage.getItem(key)

      if (item === null) return undefined

      return JSON.parse(item)
    } catch (error) {
      window.console.error(error)

      return undefined
    }
  }

  const removeSessionStorageItem = () => {
    try {
      window.sessionStorage.removeItem(key)
    } catch (error) {
      window.console.error(error)
    }
  }

  return [
    getSessionStorageItem,
    setSessionStorageItem,
    removeSessionStorageItem,
  ]
}
