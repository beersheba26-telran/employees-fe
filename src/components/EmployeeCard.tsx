import {FC} from 'react'
import { Employee } from '../models/Employee'
import {  Card, IconButton, Image, Text } from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";
import DeleteEmployee from './DeleteEmployee';
import EditEmployee from './EditEmployee';
import { MdClose } from 'react-icons/md';
type Props = {
    employee: Employee,
    onClose: () => void
}
const EmployeeCard: FC<Props> = ({employee, onClose}) => {
  return  (
    <Card.Root maxW="sm" overflow="hidden">
     { employee.avatar ? <Image
        src={employee.avatar}
        alt="No image provided"
      /> : <FaUserCircle></FaUserCircle>}
      <Card.Body gap="2">
        <Card.Title>{employee.fullName}</Card.Title>
        <Card.Description>
          <Text as="p">Department: {employee.department}</Text>
          <Text as="p">Salary: {employee.salary}</Text>
          <Text as="p">Birthdate: {employee.birthdate}</Text>
        </Card.Description>
        
      </Card.Body>
      <Card.Footer gap="2">
        <DeleteEmployee empl={employee}/>
        <EditEmployee employee={employee}/>
        <IconButton onClick={() => onClose()}><MdClose/></IconButton>
      </Card.Footer>
    </Card.Root>
  )
}

export default EmployeeCard
