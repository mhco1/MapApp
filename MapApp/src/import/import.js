import { useQuery } from 'react-query';
import useIdRegister from '~/hooks/register.js'

export default (callback = () => { }, pathRoot='') => {

    function validatePath(path) {
        path = [...path.slice(-1)[0].matchAll(/\.jsx|\.js/g)].length < 1 ?
            [...path.slice(0, -1), path.slice(-1) + '.js'] :
            [...path];
        path = path.join('/');
        path = path.replaceAll(/\/+\//g, '/');
        return path
    }

    function validateArg(...arg) {
        var res = arg.flat();
        
        res = res.map(el => {
            var res;
            
            res = el.split(/\ +|\,|\:|\-+\>|\=+\>|\>+\>/);
            return res
        })
        res = res.flat();
        res = res.filter(el => !!(el));
        return res;
    }

    function rec(arg, arg1 = []) {
        if (typeof arg !== 'undefined') {
            
            var newArg = validateArg(arg1, arg);

            return function (_arg) {
                return rec(_arg, newArg)
            }
        }

        return imp(arg1)
    }

    function imp(path) {
        var id, query;

        path = validatePath(path);
        id = useIdRegister(path);
        query = useQuery(id, async () => await import(`~/${path}`));

        return callback(query)
    }

    var res = rec(pathRoot);
    return res
}