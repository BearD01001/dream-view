import Chrome from './chrome.jsx';

class ImgUtil {
    // static get() {
    //     return new Promise((resolve, reject) => {
    //         Chrome.readLocal('imgCache1', data => {
    //             console.log(data);
    //         })
    //     });
    // }

    static get() {
        // TODO
        // get a image from localStorage and return its base code.
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
            ],
            random = Math.floor(Math.random() * 100) % imgArr.length;

        console.log(random);

        return new Promise((resolve, reject) => {
            Chrome.read('imgCache_1').from('local').then(data => {
                if (data.imgCache_1) {
                    resolve(data.imgCache_1);
                    this._getImg(imgArr[random]);
                } else {
                    let defaultImg = imgArr[0];

                    resolve(defaultImg);
                    this._getImg(imgArr[random]);
                }
            })
        });
    }

    static _ajax(uri, callback) {
        new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            }
            xhr.send();
        }).then(callback);
    }

    static fetch() {
        // TODO
        // fetch several images from the Internet.
    }

    static _getImgList() {
        // TODO
        // get images list from api(todo)
    }

    static _getImg(uri) {
        this._ajax(uri, this._save);
    }

    static _save(img) {
        // TODO
        // save images data into localStorage, the type of parameter imgs maybe array.
        let saveImgToIndex = index => {
            let fileReader = new FileReader();

            fileReader.readAsDataURL(img);
            fileReader.onload = e => {
                let data = {
                    [`imgCache_${index}`]: e.target.result
                };

                Chrome.save(data).to('local').then(() => {
                    console.info('Img saved.');
                    let imgCache = ['imgCache_1', 'imgCache_2', 'imgCache_3'];

                    Chrome.read(imgCache).from('local').then(data => {
                        console.log('Current images cache in local storage:');
                        console.log(data);
                    });
                })
            };
        }

        Chrome.read('imgCacheNum').from('local').then(data => {
            // 如果没有缓存，初始化并写入图片图片的 base 码
            if (data.imgCacheNum === 0 || data.imgCacheNum === void(0)) {
                Chrome.save({ imgCacheNum: 1 }).to('local');
                saveImgToIndex(1);
            // 如果缓存数 < 4，直接写入缓存
            } else if (data.imgCacheNum < 4) {
                Chrome.save({ imgCacheNum: ++data.imgCacheNum }).to('local');
                saveImgToIndex(data.imgCacheNum);
            // 如果缓存数已经达到阈值 3，则移动缓存后将新缓存写入最后一位，先进先出
            } else {
                Chrome.read(['imgCache_2', 'imgCache_3']).from('local').then(data => {
                    let newCache = {
                        imgCache_1: data.imgCache_2,
                        imgCache_2: data.imgCache_3,
                        imgCache_3: data.imgCache_1,
                    }

                    Chrome.save(newCache).to('local').then(() => {
                        console.info('Images cache shifted!');
                        saveImgToIndex(3);
                    })
                })
            }
        });
    }
}

export default ImgUtil;