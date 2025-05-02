export default function SortArrows({
    sortKey,
    currentSortKey,
    currentSortDirection,
    onSort,
}) {
    return (
        <span
            style={{
                marginLeft: '5px',
                display: 'inline-flex',
                flexDirection: 'column',
                cursor: 'pointer',
            }}
        >
            <span
                onClick={() => onSort(sortKey, 'asc')}
                style={{
                    color:
                        currentSortKey === sortKey &&
                        currentSortDirection === 'asc'
                            ? '#45a049'
                            : 'lightgray',
                    lineHeight: '0.8',
                }}
            >
                ▲
            </span>
            <span
                onClick={() => onSort(sortKey, 'desc')}
                style={{
                    color:
                        currentSortKey === sortKey &&
                        currentSortDirection === 'desc'
                            ? '#45a049'
                            : 'lightgray',
                    lineHeight: '0.8',
                }}
            >
                ▼
            </span>
        </span>
    )
}
