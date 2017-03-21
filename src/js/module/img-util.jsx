class ImgUtil {
    static get() {
        // TODO
        // get a image from localStorage and return its base code.
        let imgArr = [
                'http://drscdn.500px.org/photo/201770877/q%3D80_m%3D2000/1497934ccca4d2bf5e0f827cbc95e82c',
                'http://drscdn.500px.org/photo/203901899/q%3D80_m%3D1500/77b15c809808aa8be31c53c34b6cd7e0',
                'http://drscdn.500px.org/photo/203981097/q%3D80_m%3D1500/b97b38c63219e52a3f50edfc79d478e3',
                'http://drscdn.500px.org/photo/203952215/q%3D80_m%3D1500/1b7704000384f38995db706d17e68d92',
                'http://drscdn.500px.org/photo/203967705/q%3D80_m%3D1500/fc1daead83c1fdb904c93715b5009c7b',
                'http://drscdn.500px.org/photo/203899787/q%3D80_m%3D1500_k%3D1/4f5eb830a65f597ca871d01b24ce3049',
                'http://drscdn.500px.org/photo/203978799/q%3D80_m%3D1500/4cf026200cbf13ca3121db1444f47b21',
            ],
            random = Math.floor(Math.random() * 10) % imgArr.length;

            console.log(random)

        return imgArr[random];
    }

    static fetch() {
        // TODO
        // fetch several images from the Internet.
    }

    static _save(imgs) {
        // TODO
        // save images data into localStorage, the type of parameter imgs maybe array.
    }
}

export default ImgUtil;