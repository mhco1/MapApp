
import { useState, createElement } from 'react'
import { Text, View } from 'react-native'
import style from './style.js'
import iniImp from '~/import/initialize.js'
var { CompLoc } = iniImp('components/form/components');

export default function ({ data }) {
    var res;
    var obj = {};

    [obj.data, obj.setData] = useState({});

    res = (<>
        {data.map((el, id) =>
            <CompLoc
                comp='item'
                key={id}
                name={el}
                {...obj}
            />
        )}
        <CompLoc comp='submit'/>
        <Text>Dados dos campos: {JSON.stringify(obj.data)}</Text>
    </>)

    return res
}