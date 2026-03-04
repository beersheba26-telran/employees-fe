import { Box, Text } from '@chakra-ui/react'
import DepartmentsTable from '../DepartmentsTable'
import useEmployees from '../../services/hooks/useEmployees'
import { DepartmentInfo } from '../../models/DepartmentInfo'
import { Employee } from '../../models/Employee'
import { useMemo } from 'react'
/**
 * 
 * @param employees
 * returns arry of DepartmentInfo objects 
 */
function getDepartmentsInfo(employees: Employee[]): DepartmentInfo[] {
  //TODO
  // Applying the following lodash functions
  // groupBy ; meanBy ;  round
  return []
  
}
const DepartmentStatisticsPage = () => {
 const {employees} = useEmployees()
 const data: DepartmentInfo[] = useMemo(() => getDepartmentsInfo(employees), [employees])
  return (
    <Box w="100%" as="div" >
      <Text fontSize="1.2rem" as="h1" textAlign={"center"} fontWeight={"bold"}>Departments Statistsics Page</Text>
      <DepartmentsTable departmentsInfo={data}></DepartmentsTable>
    </Box>
  )
}

export default DepartmentStatisticsPage
