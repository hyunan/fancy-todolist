import { Button, IButtonProps, Icon } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  return (
    <Button
      bg={active ? 'blue.500' : 'transparent'}
      borderRadius={10}
      size={'lg'}
      _light={{
        _pressed: {
          bg: 'blue.400'
        },
        _text: {
          color: active ? 'white' : 'black'
        }
      }}
      _dark={{
        _pressed: {
          bg: 'blue.400'
        },
        _text: {
          color: active ? 'white' : undefined
        }
      }}
      variant={'solid'}
      justifyContent={'flex-start'}
      leftIcon={
        <Icon
          as={Feather}
          name={icon}
          size={'sm'}
          opacity={1}
          color={active ? 'blue.50' : 'blue.500'}
        />
      }
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton
