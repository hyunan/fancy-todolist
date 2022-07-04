import { useColorModeValue } from 'native-base'
import { StatusBar } from 'native-base'

export default function AdaptiveStatusBar() {
  return (
    <StatusBar barStyle={useColorModeValue('dark-content', 'light-content')} />
  )
}
