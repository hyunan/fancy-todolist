import {
  Box,
  useColorModeValue,
  KeyboardAvoidingView,
  Input,
  IconButton,
  HStack,
  Container
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
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

  const handleAddTask = () => {
    if (task !== '') {
      listOfTasks.push(task)
    }
    setTask('')
  }

  const deleteAllTasks = () => {
    Alert.alert('About to delete the list', 'Are you sure you want to?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => setListOfTasks([])
      }
    ])
  }

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} flex={1}>
      <MastHead title="Today's Tasks">
        <Navbtn />
      </MastHead>
      <TaskView listOfTasks={listOfTasks} />
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
                  color: useColorModeValue('white', 'black')
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
                backgroundColor='red.500'
                _icon={{
                  as: Feather,
                  size: '14px',
                  name: 'trash-2',
                  color: useColorModeValue('white', 'black')
                }}
                _pressed={{
                  backgroundColor: 'red.400'
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
function target(target: any): (target: number) => void {
  throw new Error('Function not implemented.')
}
