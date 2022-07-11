import {
  Avatar,
  Box,
  Center,
  Container,
  Text,
  useColorModeValue,
  VStack
} from 'native-base'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'

const AboutScreen = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='About the app'>
        <Navbtn />
      </MastHead>
      <Box
        bg={useColorModeValue('gray.100', 'gray.800')}
        p={5}
        mt={6}
        borderRadius={12}
        ml={16}
        mr={16}
      >
        <Box>
          <VStack space={5} alignItems='center'>
            <Text pl={2} fontWeight='normal' fontSize='16px'>
              A simple todo and notes app that respects user privacy. No data is
              stored or shared anywhere!
            </Text>
            <Avatar source={require('../assets/pfp.png')} size='xl' />
            <Center>
              <Text fontWeight='medium'>Created by Ray An</Text>
            </Center>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutScreen
