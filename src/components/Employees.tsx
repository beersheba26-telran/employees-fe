import { Spinner } from "@chakra-ui/react";
import useEmployees from "../services/hooks/useEmployees";

const Employees = () => {
  const {employees, isLoading} = useEmployees();
  return (
    <>
    {isLoading && <Spinner></Spinner>}
    <ul>
      {employees.map(empl => <li key={empl.id}>{JSON.stringify(empl)}</li>)}
    </ul>
      
    </>
  )
}

export default Employees
