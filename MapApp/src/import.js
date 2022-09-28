import { useQuery } from 'react-query';
import useIdRegister from '~/hooks/useIdRegister.js'

export default (callback = ()=>{})=>(arg)=>{
    function validatePath(path){
        path = [...path.slice(-1)[0].matchAll(/\.jsx|\.js/g)].length < 1 ?
            [...path.slice(0, -1), path.slice(-1) + '.js'] :
            [...path];
        path = path.join('/');
        path = path.replaceAll(/\/+\//g, '/');
        return path
    }
    
    function validateArg(arg){
        arg = arg.flat();
        arg = arg.map(el => el.split(/\ |\,/))
        arg = arg.flat();
        return arg;
    }
    
    function rec(arg, arg1 = []){
        if (typeof arg !== 'undefined') {
    
            var newArg = validateArg([...arg1, arg]);
    
            return function (_arg) {
                return rec(_arg, newArg)
            }
        }
    
        return imp(arg1)
    }
    
    function imp(path){
        var id, query;

        path =  validatePath(path);
        id = useIdRegister(path);   
        query = useQuery(id, async () => await import(`~/${path}`));
    
        return callback(query)
    }

    return rec(arg)
}

function aaa(arg, arg1 = []) {
    var res, path, id, query;

    if (typeof arg !== 'undefined') {

        var newArg = [...arg1, arg];
        newArg = newArg.flat();
        newArg = newArg.map(el => el.split(' '))
        newArg = newArg.flat();

        return function (_arg, _arg1 = newArg) {
            return imp(_arg, _arg1)
        }
    }

    path = [...arg1.slice(-1)[0].matchAll(/\.jsx|\.js/g)].length < 1 ?
        [...arg1.slice(0, -1), arg1.slice(-1) + '.js'] :
        [...arg1];
    path = path.join('/');
    path = path.replaceAll(/\/+\//g, '/');

    id = useIdRegister(path);

    query = useQuery(id, async () => await import(`~/${path}`));

    if (typeof query.data !== 'undefined') {
        res = query.data.default;
        for (var i in query) {
            res[i] = query[i];
        }
    } else {
        res = query;
    }

    return res
}