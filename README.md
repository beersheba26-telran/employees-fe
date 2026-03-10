# Reusable EmployeeForm (applying for adding new Employee and updating existing Employee)
- In the case there is property employee from a parent component, then the updating is implied<br>
- In the case there is no property employee from a parent component, then the adding new employee is implied
## Look & Feel for adding new employee
- Initially all input elements are the empty<br>
- Button "save" is the submit button<br>
- Button "reset" is the reset button
### Reset functionality
- return to the empty fields
## Look & Feel for updating existing employee
- Initiall all input elements are filled by the given employee<br>
- Input element for entering Birthdate should be "readOnly"<br>
- Button "OK" is the submit button<br>
- Button "Cancel" is the reset button
### Reset functionality
- return to the filled input elements with the given employee properties
## How to test
- Adding already exists <br>
- For updating you may introduce some workaround: inside AddEmployeePage to pass some dummy employee to see EmployeeForm functionality for "updating"


