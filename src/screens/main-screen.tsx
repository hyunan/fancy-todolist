import {
  Box,
  ScrollView,
  useColorModeValue,
  KeyboardAvoidingView,
  Input,
  Text,
  IconButton,
  HStack,
  Container
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import MastHead from '../components/mast'
import Navbtn from '../components/navbtn'
import { Platform, Keyboard } from 'react-native'
import Task from '../components/task-tile'
import TaskView from '../components/task-view'

const MainScreen = () => {
  const [task, setTask] = useState('')
  const [listOfTasks, setListOfTasks] = useState(['do work', 'do more work'])
  const [listOfCompleted, setListOfCompleted] = useState([
    'completed work',
    'more completed work'
  ])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setListOfTasks([...listOfTasks, task])
    setTask('')
  }
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title="Today's Tasks">
        <Navbtn />
      </MastHead>
      <TaskView listOfCompleted={listOfCompleted} listOfTasks={listOfTasks} />
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
          <Container w='100%'>
            <Input
              placeholder='What needs to be done?'
              color={useColorModeValue('black', 'white')}
              placeholderTextColor={useColorModeValue('gray.600', 'gray.400')}
              fontSize='14px'
              borderRadius={8}
              w='100%'
              h={'43px'}
              value={task}
              onChangeText={text => setTask(text)}
            />
          </Container>
          <Container>
            <IconButton
              p={3.5}
              borderRadius={7}
              size='md'
              backgroundColor='blue.500'
              _icon={{
                as: Feather,
                size: '14px',
                name: 'plus',
                color: useColorModeValue('white', 'black')
              }}
              _pressed={{
                backgroundColor: 'blue.400'
              }}
              onPress={handleAddTask}
            />
          </Container>
        </HStack>
      </KeyboardAvoidingView>
    </Box>
  )
}

export default MainScreen
