import states from '../data/states'

/**
 * Configuration des champs pour le formulaire de création d'employé.
 * Chaque objet représente un champ à afficher.
 *
 *
 */
export const employeeFields = [
    {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
    },
    { id: 'lastName', label: 'Last Name', type: 'text' },
    { id: 'birthDate', label: 'Date of Birth', type: 'date' },
    { id: 'startDate', label: 'Start Date', type: 'date' },
    { id: 'street', label: 'Street', type: 'text' },
    { id: 'city', label: 'City', type: 'text' },
    {
        id: 'state',
        label: 'State',
        type: 'select',
        data: states,
        keyValue: 'abbreviation',
    },
    { id: 'zipCode', label: 'Zip Code', type: 'number' },
    {
        id: 'department',
        label: 'Department',
        type: 'select',
        data: [
            { name: 'Sales' },
            { name: 'Marketing' },
            { name: 'Engineering' },
            { name: 'Human Resources' },
            { name: 'Legal' },
        ],
        keyValue: 'name',
    },
]

/**
 * Valeurs initiales du formulaire pour chaque champ employé.
 * Sert à initialiser le state local du formulaire.
 *
 *
 */

export const initialFormData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: 'Al',
    zipCode: '',
    department: 'Sales',
}
