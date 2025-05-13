import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'

import Form from '../Components/form'
import { Modal } from 'react-modal-message'
import 'react-modal-message/dist/index.css'

import { useState } from 'react'
import {
    employeeFields,
    initialFormData,
} from '../formConfig/employeeFormConfig'
import Header from '../Components/Header'

/**
 * CreateEmployee – Page de création d’un nouvel employé.
 *
 * Ce composant affiche :
 * - Un en-tête de page
 * - Un formulaire dynamique pour la saisie des informations d’un nouvel employé
 * - Une fenêtre modale de confirmation à la soumission du formulaire
 *
 * Il utilise Redux pour envoyer les données à l'état global via `addEmployee`.
 *
 * @returns {JSX.Element} Composant de page CreateEmployee
 */

export function CreateEmployee() {
    const [showModal, setShowModal] = useState(false) //contrôler l'affichage de la modale
    const dispatch = useDispatch()

    /**
     * handleSubmit – fonction appelée à la soumission du formulaire
     * Envoie les données à Redux et affiche une modale de confirmation
     *
     * @param {Object} employeedata - Données du formulaire saisies par l’utilisateur
     */

    const handleSubmit = (employeedata) => {
        dispatch(addEmployee(employeedata))
        setShowModal(true)
    }
    return (
        <div className="main">
            <Header link="/EmployeeList" page="View Current Employees" />
            <div className="container">
                <h1 className="title">Create Employee</h1>
                <Form
                    fields={employeeFields}
                    initialFormData={initialFormData}
                    onSubmit={handleSubmit}
                />
                {/* Modale affichée après la création de l'employé */}
                {showModal && (
                    <Modal
                        message="Employe created !"
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
        </div>
    )
}
