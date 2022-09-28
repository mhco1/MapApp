import { createElement } from 'react';
import { Text } from 'react-native-web';

function Comp({ children, name }) {
    return (<>
        <Text>test name: {name}</Text>
        { children }
    </>)
}

var exp = (...props) => (children) => createElement(Comp, props, children);
exp.comp = Comp;
export default exp