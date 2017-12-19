const ls = window.localStorage

class LocalStorage {
  has (key = '__all__') {
    if (key === '__all__') {
      return !!ls.length
    } else {
      return !!ls[key]
    }
  }
  async set (key, value) {
    try {
      return await ls.setItem(key, value)
    } catch (error) {
      throw new Error(error)
    }
  }
  async get (key) {
    try {
      return await ls.getItem(key)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default LocalStorage
