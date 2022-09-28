import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';
import { getCurrentPosition } from './logic.js';

export default function (props) {
    var res;
    var [position, setPosition] = useState({
        err: true,
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    });

    useEffect(() => {
        getCurrentPosition(position, setPosition);
    }, []);

    if (position.err) {
        res = (<Text style={{ padding: 20 }}>Erro na localização</Text>)
    } else {
        res = (<>
            <MapView
                style={{
                    width: '100%',
                    height: '50%',
                }}
                initialRegion={position}
                showsUserLocation={true}
                loadingEnable={true}
            />
            <Text>{JSON.stringify(position)}</Text>
        </>)
    }

    return res
}