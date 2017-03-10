class Setting {
    static get(keys, cb) {
        if (typeof keys === 'function') {
            cb = keys;
            keys = null;
        }

        return chrome.storage.sync.get(keys, cb);
    }

    static set(items, cb) {
        if (items === void(0)) {
            throw new Error('The parameter items is required!');
        }
        
        return chrome.storage.sync.get(items, cb);
    }
}

export default Setting;