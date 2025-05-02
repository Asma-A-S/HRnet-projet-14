export default function Select({ id, label, value, data, onChange, keyValue }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                required
            >
                {data.map((d) => (
                    <option
                        key={keyValue ? d[keyValue] : d}
                        value={keyValue ? d[keyValue] : d}
                    >
                        {keyValue ? d.name : d}
                    </option>
                ))}
            </select>
        </>
    )
}
