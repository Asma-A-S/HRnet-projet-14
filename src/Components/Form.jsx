import states from '../data/states'
import { useState } from 'react'
import Input from './Input'
import Select from './Select'
const Departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
]

export default function Form({ onSubmit }) {
    const initialFormData = {
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: states[0].abbreviation,
        zipCode: '',
        department: Departments[0],
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (key, inputValue) => {
        setFormData((rest) => ({ ...rest, [key]: inputValue }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData(initialFormData)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    id="firstName"
                    label="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <Input
                    id="lastName"
                    label="Last Name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <Input
                    id="birthDate"
                    type="date"
                    label="Date of Birth"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                />
                <Input
                    id="startDate"
                    type="date"
                    label="Start Date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />

                <fieldset className="address">
                    <legend>Address</legend>
                    <Input
                        id="street"
                        type="text"
                        label="Street"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        id="city"
                        type="text"
                        label="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <Select
                        id="state"
                        label="State"
                        value={formData.state}
                        data={states}
                        keyValue="abbreviation"
                        onChange={handleChange}
                    />

                    <Input
                        id="zipCode"
                        type="number"
                        label="zip Code"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                </fieldset>
                <Select
                    id="department"
                    label="Department"
                    value={formData.department}
                    data={Departments}
                    onChange={handleChange}
                />

                <button type="submit" className="button-submit">
                    Save
                </button>
            </form>
        </>
    )
}
