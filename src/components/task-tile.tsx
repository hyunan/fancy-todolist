import { Box, Text } from 'native-base'

interface Props {
  active: boolean
  taskDetails: string
}

export default function Task({ active, taskDetails }: Props) {
  return (
    <Box justifyContent='center' alignItems='center'>
      <Text strikeThrough={active === false}>{taskDetails}</Text>
    </Box>
  )
}
