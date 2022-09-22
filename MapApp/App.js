import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import index from './index.js'

import style from './style/style.js';

export default function App() {
  return (
    <>
      <View style={style.container}>
        {index}
      </View>
      <StatusBar style="auto" />
    </>
  );
}
