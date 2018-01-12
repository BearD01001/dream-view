import { defaultSetting } from '../config';

function initSetting (comp) {
  const compName = comp.name.toLowerCase()
  const newConstructor = function () {
    let setting = localStorage.getItem(`setting-${compName}`)
    comp.call(this)
    setting = setting ? JSON.parse(setting) : defaultSetting[compName]
    if (setting) this.state = setting
  }

  newConstructor.prototype = comp.prototype

  return newConstructor
}

export default initSetting
