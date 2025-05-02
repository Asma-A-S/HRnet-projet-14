export default function Pagination({
    data,
    currentPage,
    itemsPerPage,
    totalPages,
    setPage,
}) {
    return (
        <div style={{ marginTop: '10px' }}>
            <span>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, data.length)} of{' '}
                {data.length} entries
            </span>
            <button
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        style={{
                            fontWeight:
                                currentPage === pageNumber ? 'bold' : 'normal',
                            backgroundColor:
                                currentPage === pageNumber
                                    ? '#45a049'
                                    : 'transparent',
                        }}
                    >
                        {pageNumber}
                    </button>
                )
            )}
            <button
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    )
}
