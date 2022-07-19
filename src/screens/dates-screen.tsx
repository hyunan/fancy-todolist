import { Box, Text, ScrollView, useColorModeValue } from 'native-base'
import Navbtn from '../components/navbtn'
import MastHead from '../components/mast'

export default function DatesScreen() {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='Dates'>
        <Navbtn />
      </MastHead>
      <ScrollView>
        <Text>Coming Soon</Text>
      </ScrollView>
    </Box>
  )
}
