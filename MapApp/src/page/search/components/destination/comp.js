import { Text } from 'react-native';
import iniImp from '~/import/initialize.js'
var { Comp } = iniImp('components/form/components');

export default function () {
    return <>
        <Text>Selecione seu destino:</Text>
        <Comp comp='form' data={['Rua', 'Bairro', 'Numero']} />
    </>
}