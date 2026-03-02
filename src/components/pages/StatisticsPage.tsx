import { HStack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StatisticsPage = () => {
  return (

    <HStack justifyContent={"space-evenly"}>
        <VStack>
            <Text fontSize="lg">This statistics and you may select any out of the following</Text>
          <NavLink to="/statistics/age">Age Statistics</NavLink>
          <NavLink to="/statistics/salary">Salary Statistics</NavLink>
          <NavLink to="/statistics/department">Department Statistics</NavLink>
        </VStack>
        <Outlet></Outlet>
    </HStack>
  )
}

export default StatisticsPage
