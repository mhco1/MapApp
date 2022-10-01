import imp from './import.js'
import callback from './callback.js'

function loadComp(pathRoot = '') {
    var load = imp(callback.component, pathRoot);
    return (props) => {
        var Comp = load(props.comp)`comp`();

        return (<Comp {...props}>{props.children}</Comp>)
    }
}

export default function (pathLoc = '') {
    return {
        imp: imp,
        fn: imp(callback.function, 'utilities'),
        Comp: loadComp('components'),
        CompStd: loadComp('components/std'),
        CompLoc: loadComp(pathLoc),
    };
}