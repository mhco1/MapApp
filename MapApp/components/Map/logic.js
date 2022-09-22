import * as location from 'expo-location';

export function getCurrentPosition(state, setState){
    return (async () => {
        var res = {}, current;
        var { status } = await location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            res.err = true;
        } else {
            current = await location.getCurrentPositionAsync({});
            res.err = false;
            res.latitude = current.coords.latitude;
            res.longitude = current.coords.longitude;
        }

        setState({
            ...state,
            ...res
        });
    })();
}