import { Box, Text, ScrollView, useColorModeValue } from 'native-base'
import Navbtn from '../components/navbtn'
import MastHead from '../components/mast'

export default function NotesScreen() {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='Dates'>
        <Navbtn />
      </MastHead>
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </Box>
  )
}
