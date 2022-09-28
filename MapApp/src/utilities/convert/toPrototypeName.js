export default function (name = '') {
    var res = name.toLowerCase().split(/\ |\-|\_/);
    res = [res[0], ...res.slice(1).map(el => {
        if (el.length < 3) { return '' }
        return String(el[0].toUpperCase() + el.slice(1))
    })];
    return res.join('')
}