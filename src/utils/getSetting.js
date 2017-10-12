export default key => {
  const _s = localStorage.getItem(`setting-${key}`)

  if (_s) return JSON.parse(_s)
}
