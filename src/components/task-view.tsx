import { Box, ScrollView, useColorModeValue } from 'native-base'
import React from 'react'
import Task from './task-tile'

interface Props {
  listOfTasks: string[]
  listOfCompleted: string[]
}

export default function TaskView({ listOfTasks, listOfCompleted }: Props) {
  return (
    <ScrollView
      bg={useColorModeValue('gray.100', 'gray.800')}
      borderRadius={15}
      ml={'16px'}
      mr={'16px'}
    >
      {listOfTasks.map((item, index) => {
        return <Task key={index} active={true} taskDetails={item} />
      })}
      {listOfCompleted.map((item, index) => {
        return <Task key={index} active={false} taskDetails={item} />
      })}
    </ScrollView>
  )
}
