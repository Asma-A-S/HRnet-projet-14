import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'
import { NavLink } from 'react-router-dom'
import Form from '../Components/form'
export function CreateEmployee() {
    const dispatch = useDispatch()

    const handleSubmit = (employeedata) => {
        dispatch(addEmployee(employeedata))
    }
    return (
        <>
            <h1>HRnet</h1>
            <NavLink to="/EmployeeList">View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <Form onSubmit={handleSubmit} />
        </>
    )
}
