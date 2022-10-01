import { View, Text, Button } from 'react-native'
import style from './style.js'

import { useGlobal } from '~/context/Global.js'

export default function () {
    var [global, setGlobal] = useGlobal();

    return (<>
        <View style={style.container}>
            <Text>Calculador de</Text>
            <Text>Distancia</Text>
            <Button title='Iniciar' />
        </View>
    </>)
}