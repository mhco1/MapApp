export default function (name) {
    return (setState) => {
        var res = {};
        name = Array.isArray(name) ?
            name[0] : typeof name == 'string' ?
                name : '';
        name = name.toLowerCase()
        name = String(name[0].toUpperCase() + name.slice(1));
        res['modify' + name] = (name = '') => (val) => {
            name = Array.isArray(name) ?
                name[0] : typeof name == 'string' ?
                    name : '';
            setState(prev => {
                var res = {};
                res[name] = val;
                return {
                    ...prev,
                    ...res
                }
            })
        }
        return res
    }
}