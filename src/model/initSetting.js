function initSetting (comp) {
  const compName = comp.name.toLowerCase()
  const newConstructor = function () {
    let setting = localStorage.getItem(`setting-${compName}`)

    comp.call(this)
    setting = setting ? JSON.parse(setting) : void 0
    if (setting) this.state = setting
  }

  newConstructor.prototype = comp.prototype

  return newConstructor
}

export default initSetting
