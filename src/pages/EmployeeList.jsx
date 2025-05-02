import { useSelector } from 'react-redux'
import mockEmployees from '../data/mockEmployees.json'
//import DataTable from 'react-data-table-component'
import { NavLink } from 'react-router-dom'
import EmployeeTable from '../Components/Table'

const columns = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Start Date', key: 'startDate' },
    { label: 'Department', key: 'department' },
    { label: 'Birth Date', key: 'birthDate' },
    { label: 'Street', key: 'street' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Zip Code', key: 'zipCode' },
]
export function EmployeeList() {
    const employees = useSelector((state) => state.employee.employees)
    console.log(employees)
    return (
        <>
            <h1>page liste des employés</h1>
            <NavLink to="/">Home</NavLink>
            <EmployeeTable data={employees} columns={columns} />
        </>
    )
}
