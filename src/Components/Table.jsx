import { useState } from 'react'
import SortArrows from './SortArrows'
import Pagination from './Pagination'
const ITEMS_PER_PAGE = [10, 25, 50, 100]

export default function EmployeeTable({ data, columns }) {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortKey, setSortKey] = useState(null)
    const [sortDirection, setSortDirection] = useState('asc')
    const [itemsPerPage, setItemsPerPage] = useState(10)
    //filtrer les employees avec input
    const getFilteredEmployees = () => {
        console.log('data', data)
        return data.filter((emp) =>
            Object.values(emp).some((val) =>
                String(val).toLowerCase().includes(search.toLowerCase())
            )
        )
    }
    //tri ascendant ou descendant
    const getSortedEmployees = (employees) => {
        if (!sortKey) return employees

        return [...employees].sort((a, b) => {
            const aVal = a[sortKey]
            const bVal = b[sortKey]

            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
            return 0
        })
    }

    const filteredEmployees = getFilteredEmployees()
    const sortedEmployees = getSortedEmployees(filteredEmployees)
    const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage)

    const paginatedEmployees = sortedEmployees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handleSort = (key, direction) => {
        setSortKey(key)
        setSortDirection(direction)
    }
    const handleItemsPerPage = (e) => {
        setItemsPerPage(Number(e.target.value))
        setCurrentPage(1)
    }
    return (
        <div>
            <h1>Current Employees</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setCurrentPage(1)
                    }}
                    style={{ marginBottom: '10px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <span>Show</span>
                    <select value={itemsPerPage} onChange={handleItemsPerPage}>
                        {ITEMS_PER_PAGE.map((items) => (
                            <option key={items}>{items}</option>
                        ))}
                    </select>
                    <span>entries</span>
                </div>
            </div>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>
                                {col.label}
                                <SortArrows
                                    sortKey={col.key}
                                    currentSortKey={sortKey}
                                    currentSortDirection={sortDirection}
                                    onSort={handleSort}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedEmployees.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length}>No data found.</td>
                        </tr>
                    ) : (
                        paginatedEmployees.map((item, index) => (
                            <tr key={index}>
                                {columns.map((col) => (
                                    <td key={col.key}>{item[col.key]}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Pagination
                data={sortedEmployees}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                setPage={setCurrentPage}
            />
        </div>
    )
}
