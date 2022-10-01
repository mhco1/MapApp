import { Text, TextInput } from 'react-native'
import style from './style.js'
import iniImp from '~/import/initialize.js'
var { CompStd, fn } = iniImp('components/form/components/item');

export default function ({ name, data, setData }) {
    var [convertPrototype, loading] = fn`convert prototype`();
    var propName = convertPrototype(name);

    var handle = {
        change(event = {}) {
            setData(prev => ({
                ...prev,
                [propName]: event.target.value
            }));
        }
    };

    if (loading) { return <Text>Loading...</Text> }

    return (<>
        <CompStd comp='input'
            label = {name}
            value = {data[propName]}
            change = {handle.change}
        ></CompStd>
    </>)
}
