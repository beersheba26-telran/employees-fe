import { useUserData } from '../../state-management/store'
import { Button, Center } from '@chakra-ui/react'

const LogoutPage = () => {
    const resetUserData = useUserData(s => s.resetUserData)
  return (
    <Center>
      <Button onClick={() => resetUserData()}>Logout</Button>
    </Center>
  )
}

export default LogoutPage
