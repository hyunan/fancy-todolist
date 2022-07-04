import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'
import Main from './src/index'
import theme from './src/theme'
import { NavigationContainer } from '@react-navigation/native'
import AdaptiveStatusBar from './src/components/adaptive-status-bar'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AdaptiveStatusBar />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
