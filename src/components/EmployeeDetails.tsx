import {useState} from 'react'
import { type Employee } from '../models/Employee'
import { Box } from '@chakra-ui/react' 
import DialogShaper from './DialogShaper'
import EmployeeCard from './EmployeeCard'
import {BsThreeDots} from "react-icons/bs"
type EmployeeDetailsProps = {
    employee: Employee
    
}
const EmployeeDetails = ({employee:empl}: EmployeeDetailsProps) => {
    const [open, setOpen] = useState(false)
  return (
     <Box
                      onClick={() => setOpen(true)}
                    >
                      <DialogShaper
                        content={
                          <EmployeeCard
                            employee={empl}
                            onClose={() => setOpen(false)}
                          />
                        }
                        buttonName={<BsThreeDots />}
                        open={open}
                      />
                    </Box>
  )
}

export default EmployeeDetails
