import { Text } from 'react-native';
import style from './style'

export default function ({ children }) {
    return <>
        <Text style={style.information} >{children}</Text>
    </>
}