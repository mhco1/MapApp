
import { useState, createElement } from 'react'
import { Text, View } from 'react-native'
import style from './style.js'
import iniImp from '~/import/initialize.js'
var { CompLoc } = iniImp('components/form/components');

export default function ({ data }) {
    var obj = {};
    var [dataState, setDataState] = useState({});

    return <>
        {data.map((el, id) =>
            <CompLoc
                comp='item'
                key={id}
                name={el}
                data={{
                    get:dataState,
                    set:setDataState
                }}
            />
        )}
        <CompLoc comp='submit'/>
        <Text>Dados dos campos: {JSON.stringify(dataState)}</Text>
    </>
}