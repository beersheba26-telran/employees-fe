import { VStack } from '@chakra-ui/react';
import useEmployees from '../../services/hooks/useEmployees';
import Employees from '../Employees'
import Filters from '../Filters';
const HomePage = () => {
  const { employees, isLoading } = useEmployees();
  return (
    <VStack>
      <Filters/>
      <Employees employees={employees} isLoading={isLoading}/>
    </VStack>
  )
}

export default HomePage
