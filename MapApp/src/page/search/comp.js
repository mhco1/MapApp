import { View, Text } from 'react-native'
import style from './style.js'
import iniImp from '~/import/initialize'
var { Comp } = iniImp('page/search/components');

export default function () {
    return (<>
        <View style={style.container}>
            <Comp comp='form' data={['Rua', 'Bairro', 'Numero']} />
        </View>
    </>)
}