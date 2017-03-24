class Chrome {
    /**
     * 读取本地化语言包字段
     * @param  {String} fieldName 字段名称
     * @return {[type]}           本地化字段译文
     */
    static i18n(fieldName) {
        return chrome.i18n.getMessage(fieldName);
    }

    static _storageCURD(storageType, method, data) {
        if (storageType === void(0)) {
            throw new Error('The parameter storageType[String<local|sync>] is required!');
        } else if (storageType !== 'local' && storageType !== 'sync') {
            throw new Error('The value of parameter storageType should be `local` or `sync`.');
        }

        return new Promise((resolve, reject) => {
            chrome.storage[storageType][method](data ? data : resolve, data ? resolve : null);
        });
    }

    static save(data) {
        if (data === void(0)) {
            throw new Error('The parameter data[Object] is required!');
        } else if (Object.prototype.toString.call(data) !== '[object Object]') {
            throw new TypeError('The type of data must be object!');
        }

        return {
            to: storageType => {
                return this._storageCURD(storageType, 'set', data);
            }
        }
    }

    static read(keys = null) {
        if (keys !== null &&
            typeof keys !== 'string' &&
            Object.prototype.toString.call(keys) !== '[object Array]') {
            throw new TypeError('The parameter keys should be null, string or array.');
        }

        return {
            from: storageType => {
                return this._storageCURD(storageType, 'get', keys);
            }
        }
    }
}

export default Chrome;