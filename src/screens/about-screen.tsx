import {
  Avatar,
  Box,
  Center,
  Container,
  ScrollView,
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
      <ScrollView>
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
              <Text
                pl={2}
                fontWeight='normal'
                fontSize='16px'
                textAlign='center'
              >
                A simple todo and notes app that respects user privacy. Data is
                stored locally and is not shared anywhere!
              </Text>
              <Avatar source={require('../assets/pfp.png')} size='xl' />
              <Center>
                <Text fontWeight='medium'>Created by Ray An</Text>
              </Center>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default AboutScreen
