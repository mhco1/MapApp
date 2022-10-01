import { Button } from "react-native";
import style from './style.js'

export default function ({ name, press }) {
    return <>
        <Button
            title={name}
            onPress={press}
        />
    </>
}