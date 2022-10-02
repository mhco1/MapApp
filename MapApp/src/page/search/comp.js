import { View } from 'react-native'
import style from './style.js'
import iniImp from '~/import/initialize'
var { CompLoc } = iniImp('page/search/components');

export default function () {
    return (<>
        <View style={style.container}>
            <CompLoc comp='current'></CompLoc>
            <CompLoc comp='destination'></CompLoc>
        </View>
    </>)
}