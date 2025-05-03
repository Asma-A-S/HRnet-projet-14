import { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function Form({ fields, initialFormData, onSubmit }) {
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
                {fields.map((field) => {
                    if (field.type === 'select') {
                        return (
                            <Select
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                value={formData[field.id]}
                                data={field.data}
                                keyValue={field.keyValue}
                                onChange={handleChange}
                            />
                        )
                    }

                    return (
                        <Input
                            key={field.id}
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            value={formData[field.id]}
                            required={field.required}
                            onChange={handleChange}
                        />
                    )
                })}
                <button type="submit" className="button-submit">
                    Save
                </button>
            </form>
        </>
    )
}
