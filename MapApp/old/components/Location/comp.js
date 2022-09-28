import { Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { useRef } from 'react/cjs/react.development'

import loc from '~/api/location.js'
//import {getCurrentPositionAsync} from 'expo-location'
import useIdRegister from '~/hooks/useIdRegister.js'

export default function () {
    var res;
    var ref = useRef();
    var query = useQuery(useIdRegister(ref), loc);

    if (query.isLoading) {
        res = <Text>Loading...</Text>
    }

    if (query.isError) {
        res = <Text>Error: {error.message}</Text>
    }

    if (query.isSuccess) {
        res = <Text>Sucess</Text>
        console.log(query.data)
    }

    return (<>
        <View ref={ref}>
            {res}
        </View>
    </>)
}