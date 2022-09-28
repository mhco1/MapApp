import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native'
import { modifyState, convertToPrototypeName } from './logic.js'
import style from './style.js'

function Submit(props) {
    var [log, setLog] = useState('');
    var { data, setData } = props;

    var handle = {
        press() {
            var andress = formatAndress(data);
            setLog(andress);
        }
    };

    return (<>
        <Button title='Calcular distancia' onPress={(event) => handle.press(event)} />
        <Text > Log: {log} </Text>
    </>)
}

function Item(props) {
    var { name, data, modifyData } = props;
    var propName = convertToPrototypeName(name);
    var val = data[propName];
    val = val ? val : '';

    var handle = {
        change(event = {}, propName = '') {
            var val = event.target.value;
            modifyData(propName)(val);
        }
    };

    return (<>
        <Text>{name}</Text>
        <TextInput
            name={propName}
            style={style.input}
            onChange={(event) => handle.change(event, propName)}
            value={val}
        />
    </>)
}

export default function (props) {
    var [data, setData] = useState({});

    var send = {
        data: data,
        setData: setData,
        ...modifyState`data`(setData)
    };

    return (<>
        {[
            'Rua',
            'Bairro',
            'Numero'
        ].map((el, id) => (
            <Item key={id} name={el} {...send} />
        ))}
        <Text>Dados dos campos: {JSON.stringify(data)}</Text>
        <Submit {...send} />
    </>)
}