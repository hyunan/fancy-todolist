import { Feather } from '@expo/vector-icons'
import { Box, IconButton, HStack, useColorModeValue } from 'native-base'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

const Navbtn = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  const handleOpenButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])
  return (
    <Box>
      <HStack justifyContent='flex-start' ml={2}>
        <IconButton
          borderRadius={100}
          borderColor={'black'}
          _icon={{
            as: Feather,
            name: 'menu',
            size: 6,
            color: useColorModeValue('gray.800', 'blue.50')
          }}
          onPress={handleOpenButton}
        />
      </HStack>
    </Box>
  )
}

export default Navbtn
