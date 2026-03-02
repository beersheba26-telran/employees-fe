import { HStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const AppBar = () => {
  return (
    <HStack justifyContent={"space-around"}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add">Add Employee</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      
      
   </HStack>
  )
}

export default AppBar
