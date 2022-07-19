import { Box, Center, IconButton, useColorModeValue } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'
import TaskView from '../components/task-view'
import { Feather } from '@expo/vector-icons'
import { Alert } from 'react-native'
import { useCallback, useEffect, useState } from 'react'

export default function ArchiveScreen() {
  const [listOfTasks, setListOfTasks] = useState([''])

  useEffect(() => {
    console.log('from archive: ' + listOfTasks)
  })

  const deleteAllTasks = () => {
    Alert.alert('About to delete history', 'Are you sure you want to?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => {
          setListOfTasks([''])
          AsyncStorage.removeItem('@archived_tasks')
        }
      }
    ])
  }

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='Recently Deleted'>
        <Navbtn />
      </MastHead>
      <TaskView listOfTasks={listOfTasks} isActive={false} />
      <Center p={4} pb={8}>
        <IconButton
          p={5}
          borderRadius={15}
          w={'100%'}
          size='md'
          backgroundColor='red.500'
          _icon={{
            as: Feather,
            size: '14px',
            name: 'trash-2',
            color: useColorModeValue('white', 'red.400')
          }}
          _pressed={{
            backgroundColor: 'red.400'
          }}
          onPress={deleteAllTasks}
        />
      </Center>
    </Box>
  )
}
