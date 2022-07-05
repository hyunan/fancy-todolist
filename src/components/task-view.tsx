import {
  Box,
  Icon,
  IconButton,
  ScrollView,
  useColorModeValue,
  VStack
} from 'native-base'
import React from 'react'
import Task from './task-tile'

interface Props {
  listOfTasks: string[]
}

export default function TaskView({ listOfTasks }: Props) {
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
