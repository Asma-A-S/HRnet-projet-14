import states from '../data/states'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-dropdown-select'

const Departments = [
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Engineering', value: 'Engineering' },
    { label: 'Human Resources', value: 'Human Resources' },
    { label: 'Legal', value: 'Legal' },
]

export default function Form({ onSubmit }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(states[0].abbreviation)
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState(Departments[0].label)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            firstName,
            lastName,
            birthDate,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        })
        setFirstName('')
        setLastName('')
        setBirthDate(null)
        setStartDate(null)
        setStreet('')
        setCity('')
        setState('')
        setZipCode('')
        setDepartment('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="birthDay">Date of Birth</label>
                <DatePicker
                    id="birthDay"
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                />
            </div>
            <div>
                <label htmlFor="startDay">Start Date</label>
                <DatePicker
                    id="startDay"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />

                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="state">State</label>
                <Select
                    options={states}
                    values={[states[0]]}
                    labelField="name"
                    valueField="abbreviation"
                    name="states"
                    id="state"
                    onChange={(values) => setState(values[0].abbreviation)}
                />
                <label htmlFor="zip-code">Zip Code</label>
                <input
                    id="zip-code"
                    type="number"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <label htmlFor="department">Departement</label>
                <Select
                    options={Departments}
                    name="department"
                    id="departement"
                    values={[Departments[0]]}
                    onChange={(values) => setDepartment(values[0].label)}
                />
            </fieldset>
            <button type="submit">Save</button>
        </form>
    )
}
