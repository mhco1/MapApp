import * as location from 'expo-location'

export default async function () {
    var res;
    var { status } = await location.requestForegroundPermissionsAsync();
    if (status == 'granted') {
        res = await location.getCurrentPositionAsync({});
    } else {
        res = 'error'
    };

    return res
}