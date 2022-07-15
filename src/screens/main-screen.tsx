import { useState, useEffect } from 'react'
import {
  Box,
  useColorModeValue,
  KeyboardAvoidingView,
  Input,
  IconButton,
  HStack,
  Container
} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'
import { Platform, Alert } from 'react-native'
import TaskView from '../components/task-view'

const MainScreen = () => {
  const [task, setTask] = useState('')
  const [listOfTasks, setListOfTasks] = useState([
    'Finish math homework',
    'Do the dishes',
    'Go grocery shopping'
  ])

  useEffect(() => {
    getData()
  }, [])

  const handleAddTask = () => {
    if (task !== '') {
      listOfTasks.push(task)
      storeData(listOfTasks)
    }
    setTask('')
  }

  const getData = async () => {
    let vals = await AsyncStorage.getItem('@storage_tasks')
    if (vals !== null) {
      setListOfTasks(JSON.parse(vals))
    }
  }

  const storeData = async (value: string[]) => {
    try {
      await AsyncStorage.setItem('@storage_tasks', JSON.stringify(value))
      let vals = await AsyncStorage.getItem('@storage_tasks')
      if (vals !== null) {
        setListOfTasks(JSON.parse(vals))
        console.log('from ' + vals)
      }
    } catch (e) {
      //saving error
      console.log('lmao get trolled: ' + e)
    }
  }

  const backUpTasks = async (vale: string[]) => {
    await AsyncStorage.setItem('@archived_tasks', JSON.stringify(vale))
  }

  const deleteAllTasks = () => {
    Alert.alert('About to archive the list', 'Are you sure you want to?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => {
          backUpTasks(listOfTasks)
          setListOfTasks([])
          AsyncStorage.removeItem('@storage_tasks')
        }
      }
    ])
  }

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title="Today's Tasks">
        <Navbtn />
      </MastHead>
      <TaskView listOfTasks={listOfTasks} isActive={true} />
      <KeyboardAvoidingView
        pb={3}
        justifyContent='center'
        mt={3}
        pr={2}
        pl={2}
        mb={8}
        alignItems='center'
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <HStack space={3} alignItems='center'>
          <Container w='66%'>
            <Input
              placeholder='What needs to be done?'
              color={useColorModeValue('black', 'white')}
              placeholderTextColor={useColorModeValue('gray.600', 'gray.400')}
              fontSize='14px'
              borderRadius={15}
              h={'43px'}
              value={task}
              onChangeText={text => setTask(text)}
              onSubmitEditing={handleAddTask}
            />
          </Container>
          <Container>
            <HStack space={3}>
              <IconButton
                p={3.5}
                borderRadius={15}
                size='md'
                backgroundColor='blue.500'
                _icon={{
                  as: Feather,
                  size: '14px',
                  name: 'plus',
                  color: useColorModeValue('white', 'gray.800')
                }}
                _pressed={{
                  backgroundColor: 'blue.400'
                }}
                onPress={handleAddTask}
              />
              <IconButton
                p={3.5}
                borderRadius={15}
                size='md'
                backgroundColor='green.500'
                _icon={{
                  as: Feather,
                  size: '14px',
                  name: 'archive',
                  color: useColorModeValue('white', 'gray.800')
                }}
                _pressed={{
                  backgroundColor: 'green.400'
                }}
                onPress={deleteAllTasks}
              />
            </HStack>
          </Container>
        </HStack>
      </KeyboardAvoidingView>
    </Box>
  )
}

export default MainScreen
