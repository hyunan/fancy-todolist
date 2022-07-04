import { Box, Heading, HStack } from 'native-base'
import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
}

export default function MastHead({ children, title }: Props) {
  return (
    <Box pt={'45px'} pb={1}>
      <HStack alignItems='center'>
        {children}
        <Heading pl={3}>{title}</Heading>
      </HStack>
    </Box>
  )
}
