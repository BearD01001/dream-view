function saveSetting (comp, peop, descriptor) {
  console.log('====================================')
  console.log(arguments)
  console.log('====================================')
  let { initializer, ...otherDes } = descriptor

  return {
    ...otherDes,
    initializer: function () {
      console.log(1)
    }
  }
  // let compName = context.__proto__.constructor.name.toLowerCase()

  // return function () {
  //   this.setState(state => {
  //     console.log(state)
  //     localStorage.setItem(`setting-${compName}`, JSON.stringify(state))
  //     return state
  //   })
  // }.bind(context)
}

export default saveSetting
