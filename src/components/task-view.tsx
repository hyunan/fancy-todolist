import {
  Box,
  Icon,
  ScrollView,
  Text,
  useColorModeValue,
  VStack
} from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import Task from './task-tile'

interface Props {
  listOfTasks: string[]
}

export default function TaskView({ listOfTasks }: Props) {
  let empty = Object.keys(listOfTasks).length === 0
  if (empty) {
    return (
      <ScrollView
        bg={useColorModeValue('gray.100', 'gray.800')}
        borderRadius={15}
        ml={'16px'}
        mr={'16px'}
        flex={1}
      >
        <Box justifyContent='center' alignItems='center' mt={'60%'}>
          <Icon
            as={Feather}
            name={'check'}
            size={'80px'}
            opacity={0.4}
            color={useColorModeValue('black', 'white')}
          />
          <Text fontSize='30px' opacity={0.4} fontWeight='semibold'>
            All done with your work!
          </Text>
        </Box>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView
        bg={useColorModeValue('gray.100', 'gray.800')}
        borderRadius={15}
        ml={'16px'}
        mr={'16px'}
      >
        <VStack space={2} pt={'20px'} pl={'20px'}>
          {listOfTasks.map((item, index) => {
            return <Task key={index} active={true} taskDetails={item} />
          })}
        </VStack>
      </ScrollView>
    )
  }
}
