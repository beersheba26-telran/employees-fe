import { FC } from "react";
import { Employee } from "../models/Employee";
import { Box, Card, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";
import { MdClose } from "react-icons/md";
import { useUserData } from "../state-management/auth-store";
type Props = {
  employee: Employee;
  onClose: () => void;
};
const EmployeeCard: FC<Props> = ({ employee, onClose }) => {
  const role = useUserData((s) => s.role);
  return (
    <Card.Root maxW="sm" overflow="hidden">
      {employee.avatar ? (
        <Image
          src={employee.avatar}
          alt="No image provided"
          width="100%"
          aspectRatio={4 / 3}
          objectFit="cover"
        />
      ) : (
        <Box
          width="100%"
          aspectRatio={4 / 3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaUserCircle} boxSize="40%" color="fg.muted" />
        </Box>
      )}
      <Card.Body gap="2">
        <Card.Title>{employee.fullName}</Card.Title>
        <Card.Description>
          <Text as="p"><Box as="span" fontWeight={"bold"} >Department</Box>: {employee.department}</Text>
          <Text as="p"><Box as="span" fontWeight={"bold"}>Salary</Box>: {employee.salary}</Text>
          <Text as="p"><Box as="span" fontWeight={"bold"}>Birthdate</Box>: {employee.birthdate}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2" justifyContent="space-between" alignItems="center">
        {role == "ADMIN" && (
          <Box display="flex" gap="2" alignItems="center">
            <DeleteEmployee empl={employee} />
            <EditEmployee employee={employee} />
          </Box>
        )}
        <IconButton
          marginLeft="auto"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <MdClose />
        </IconButton>
      </Card.Footer>
    </Card.Root>
  );
};

export default EmployeeCard;
