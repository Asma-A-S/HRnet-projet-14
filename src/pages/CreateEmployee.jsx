import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'
import { NavLink } from 'react-router-dom'
import Form from '../Components/form'
export function CreateEmployee() {
    const dispatch = useDispatch()

    const handleSubmit = (employeedata) => {
        console.log('formulaire', employeedata)
        dispatch(addEmployee(employeedata))
    }
    return (
        <div className="main">
            <div className="header">
                <h1>HRnet</h1>
                <NavLink to="/EmployeeList">View Current Employees</NavLink>
            </div>
            <div className="container">
                <h2>Create Employee</h2>
                <Form onSubmit={handleSubmit} />
            </div>
        </div>
    )
}
