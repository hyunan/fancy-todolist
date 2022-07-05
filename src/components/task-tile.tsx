import { Box, Text, Pressable, HStack } from 'native-base'
import { useState } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  active: boolean
  taskDetails: string
}

export default function Task({ active, taskDetails }: Props) {
  const [pres, setPres] = useState<boolean>(active === false)
  const [checked, setChecked] = useState<boolean>(pres)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      setPres(!pres)
      return !prev
    })
  }
  return (
    <Box>
      <HStack space={2}>
        <Pressable onPress={handleCheckboxPress} w={7} h={7}>
          <AnimatedCheckbox
            checked={checked}
            highlightColor='#3b82f6'
            checkmarkColor='#ffffff'
            boxOutlineColor='#3b82f6'
          />
        </Pressable>
        <Text
          strikeThrough={pres}
          color={pres ? 'gray.500' : undefined}
          fontSize={'18px'}
        >
          {taskDetails}
        </Text>
      </HStack>
    </Box>
  )
}
