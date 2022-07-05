import { Box, HStack, ScrollView, Text, useColorModeValue } from 'native-base'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'

const AboutScreen = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='Settings'>
        <Navbtn />
      </MastHead>
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </Box>
  )
}

export default AboutScreen
