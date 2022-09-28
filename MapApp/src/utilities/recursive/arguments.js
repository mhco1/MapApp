export default function rec(arg, arg1 = []) {
    var newArg;

    if (typeof arg !== 'undefined') {
        newArg = [...arg1, arg]
        return function (_arg, _arg1 = newArg) {
            return rec(_arg,_arg1)
        }
    }

    return arg1
}