import axios from 'axios'
// import LocalStorage from './localStorage'

class ImgUtil {
  async get () {
  }

  async fetch (url) {
    await axios.get(url, { responseType: 'blob' })
  }

  async save (imgData) {
    let fileReader = new FileReader()

    fileReader.readAsDataURL(imgData)
  }

  async getUrl () {
    let imgArr = [
      'http://drscdn.500px.org/photo/205613287/q%3D80_m%3D1500/beb5aa133727c092229160e5e9dd3f10',
    ]
    let random = Math.floor(Math.random() * 100) % imgArr.length

    return await imgArr[random]
  }
}

export default new ImgUtil()
