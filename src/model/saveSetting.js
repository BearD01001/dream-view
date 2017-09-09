function saveSetting (comp, prop, descriptor) {
  let compName = comp.constructor.name.toLowerCase()
  let { value, ...otherDesc } = descriptor

  return {
    ...otherDesc,
    initializer () {
      return function () {
        value.apply(this, arguments)
        this.setState(preState => {
          localStorage.setItem(`setting-${compName}`, JSON.stringify(preState))

          return preState
        })
      }
    }
  }
}

export default saveSetting
