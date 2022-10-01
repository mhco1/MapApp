import {Text, TextInput} from 'react-native'
import style from './style.js'

export default function ({label='', value='', change=()=>{}}) {
    return (<>
        <Text>{label}</Text>
        <TextInput
            style={style.input}
            onChange={(event) => change(event)}
            value={value}
        />
    </>)
}