import { useState } from 'react'
import Input from './Input'
import Select from './Select'

/**
 * Composant Formulaire Générique
 *
 * @param {Array} fields - Liste des champs à afficher, avec leurs propriétés :
 *    - id: identifiant unique du champ
 *    - label: étiquette affichée
 *    - type: "text", "email", "date", "select", etc.
 *    - required: booléen pour champ obligatoire
 *    - data: données pour les selects
 *    - keyValue: pour les selects : { label: "nom", value: "id" }
 *
 * @param {Object} initialFormData - Valeurs par défaut des champs
 * @param {Function} onSubmit - Fonction déclenchée à la soumission du formulaire
 */

export default function Form({ fields, initialFormData, onSubmit }) {
    const [formData, setFormData] = useState(initialFormData)
    // Gère le changement de valeur dans les champs
    const handleChange = (key, inputValue) => {
        setFormData((rest) => ({ ...rest, [key]: inputValue }))
    }
    //soumission et réinitilistion du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData(initialFormData)
    }

    return (
        <>
            <form onSubmit={handleSubmit} aria-label="Formulaire de saisie">
                {fields.map((field) => {
                    if (field.type === 'select') {
                        return (
                            <Select
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                value={formData[field.id]}
                                data={field.data}
                                required={field.required}
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
