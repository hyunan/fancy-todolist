import {
  Box,
  Text,
  Button,
  VStack,
  IconButton,
  useColorModeValue,
  HStack,
  Heading
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useCallback } from 'react'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { navigation } = props
  const handleBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box flex={1} p={7} mt={4}>
      <VStack flex={1} space={2}>
        <HStack justifyContent='flex-end'>
          <IconButton
            borderRadius={100}
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
            onPress={handleBackButton}
          />
        </HStack>
        <Heading>Get your things done!</Heading>
      </VStack>
    </Box>
  )
}

export default Sidebar
