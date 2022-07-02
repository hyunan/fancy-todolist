import { NativeBaseProvider, Text } from 'native-base'
import MainScreen from './src/screens/main-screen'
import Main from './src/index'
import theme from './src/theme'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
