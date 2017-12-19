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
      'http://drscdn.500px.org/photo/201770877/q%3D80_m%3D2000/1497934ccca4d2bf5e0f827cbc95e82c',
      'http://drscdn.500px.org/photo/203981097/q%3D80_m%3D1500/b97b38c63219e52a3f50edfc79d478e3',
      'http://drscdn.500px.org/photo/203952215/q%3D80_m%3D1500/1b7704000384f38995db706d17e68d92',
      'http://drscdn.500px.org/photo/203967705/q%3D80_m%3D1500/fc1daead83c1fdb904c93715b5009c7b',
      'http://drscdn.500px.org/photo/203899787/q%3D80_m%3D1500_k%3D1/4f5eb830a65f597ca871d01b24ce3049',
      'http://drscdn.500px.org/photo/203978799/q%3D80_m%3D1500/4cf026200cbf13ca3121db1444f47b21',
      'http://drscdn.500px.org/photo/204273521/q%3D80_m%3D1500/f2fdb460835f17a79aa1017f4f47881c',
      'http://drscdn.500px.org/photo/204299989/q%3D80_m%3D1500/0b35a58f77a237088e348efdb251a6fb',
      'http://drscdn.500px.org/photo/204348975/q%3D80_m%3D1500/d8286d0c415d3fb805175237625ce6f3',
      'http://drscdn.500px.org/photo/204369769/q%3D80_m%3D1500/2286977504b8507e450ce0f6990e3d04',
      'http://drscdn.500px.org/photo/204326695/q%3D80_m%3D1500/1aa8de1d48c69f73bd7b8442d5cb4bb4',
      'http://drscdn.500px.org/photo/204303905/q%3D80_m%3D1500/0d8672e50b03310d384781c4d964bf39',
      'http://drscdn.500px.org/photo/204347173/q%3D80_m%3D1500/2d8095f33b82ba493726fc65f2fff083',
      'http://drscdn.500px.org/photo/22859181/q%3D80_m%3D1500/e83aad64d5a5d603e1e7b3dc38d8a343',
      'http://drscdn.500px.org/photo/64846081/q%3D80_m%3D1500/dc9c2674d582a5d29242d281ce1ed2cf',
      'http://drscdn.500px.org/photo/203971135/q%3D80_m%3D1000/a387aaaa04f658a98a9ec8a425bbec60',
      'http://drscdn.500px.org/photo/205620825/q%3D80_m%3D2000/9012d5d9233a5a5429c650da905bcf2f',
      'http://drscdn.500px.org/photo/205640447/q%3D80_m%3D1500/02be2ab1de34332bfd51e3383389aa51',
      'http://drscdn.500px.org/photo/205648235/q%3D80_m%3D1500/afa534567ab40d7186acf7568f5d92d6',
      'http://drscdn.500px.org/photo/205667905/q%3D80_m%3D1500/164b28f8298c897e5fc378089d61a0aa',
      'http://drscdn.500px.org/photo/205680927/q%3D80_m%3D1500/ca28d4b7764f6c93548d48078f9dfe1e',
      'http://drscdn.500px.org/photo/205644471/q%3D80_m%3D1500/8cf66c6ce71f86e85c448f50ae244f35',
      'http://drscdn.500px.org/photo/205631131/q%3D80_m%3D1500/a1cc34516415578597050231a611269e',
      'http://drscdn.500px.org/photo/205613287/q%3D80_m%3D1500/beb5aa133727c092229160e5e9dd3f10',
    ]
    let random = Math.floor(Math.random() * 100) % imgArr.length

    return await imgArr[random]
  }
}

export default new ImgUtil()
