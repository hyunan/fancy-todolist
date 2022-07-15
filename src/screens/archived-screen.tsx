import { Box, useColorModeValue } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'
import TaskView from '../components/task-view'
import { useEffect, useState } from 'react'

export default function ArchiveScreen() {
  const [listOfTasks, setListOfTasks] = useState([''])

  const getData = async () => {
    let vals = await AsyncStorage.getItem('@archived_tasks')
    if (vals !== null) {
      setListOfTasks(...listOfTasks, JSON.parse(vals))
    }
  }

  useEffect(() => {
    getData()
    console.log(listOfTasks)
  }, [])

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title='Recently Deleted'>
        <Navbtn />
      </MastHead>
      <TaskView listOfTasks={listOfTasks} isActive={false} />
    </Box>
  )
}
