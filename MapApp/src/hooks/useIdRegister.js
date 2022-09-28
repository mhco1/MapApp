import generateId from '~/utilities/generate/id.js'
import { useGlobal } from '~/context/Global.js'

export default function (ref) {
    var res, id;
    var [ global, setGlobal ] = useGlobal();

    typeof global`id` === 'undefined' && setGlobal`id`([]);
    id = global`id`;

    var pos = id.findIndex((el)=> el[0] === ref);

    if(pos === -1){
        res = generateId();
        id.push([ref,res]);
    } else {
        res = id[pos][1];
    }

    return res
}