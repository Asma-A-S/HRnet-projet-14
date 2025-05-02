export default function Input({ id, label, value, type, onChange }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
            ></input>
        </>
    )
}
