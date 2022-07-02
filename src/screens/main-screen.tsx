import { Box, HStack, Text } from 'native-base'
import Navbtn from '../components/navbtn'

const MainScreen = () => {
  return (
    <Box flex={1}>
      <Navbtn />
      <Box flex={1} justifyItems='center' alignItems='center'>
        <Text>Hello</Text>
      </Box>
    </Box>
  )
}

export default MainScreen
