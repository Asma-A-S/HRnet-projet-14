import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: 'employees',
    initialState:{
        employees: JSON.parse(localStorage.getItem('employees')) || []
    },
    reducers:{
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
            localStorage.setItem('employees', JSON.stringify(state.employees))
        }
    }
})
export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer