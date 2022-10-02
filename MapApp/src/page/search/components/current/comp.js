import { Text } from 'react-native';
import iniImp from '~/import/initialize.js'
var { CompStd } = iniImp('components/form/components');

export default function ({ data }) {
    return <>
        <Text>Sua localização atual é:</Text>
        <CompStd comp='information'>Rua tal,N tal, Guarulhos SP</CompStd>
    </>
}