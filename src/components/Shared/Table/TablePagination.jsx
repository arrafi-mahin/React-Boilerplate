import React from 'react';

export default function TablePagination({ pagination }) {
    const { page = 1, total = 0, totalPages = 0, limit = 10, onClick = () => ({}) } = pagination;
    const endIndex = Math.min(page * limit, total);
    const rangeText = `Showing ${endIndex} of ${total} results`;
    // const rangeText = `${startIndex}-${endIndex} of ${totalDocs}`;


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onClick(newPage);
        }
    };
    return (
        <div className="my-8 mx-3 flex justify-between items-center">
            <div> <h6>{rangeText}</h6></div>
            <div className="flex justify-center items-center">
                <div
                    onClick={() => handlePageChange(page - 1)}
                    className="cursor-pointer p-2 bg-gradient-to-r from-white via-white to-gray-300 border border-[#E2E8F0]"
                >
                    Left
                </div>
                <div
                    onClick={() => handlePageChange(page + 1)}
                    className="cursor-pointer p-2 bg-gradient-to-r from-white via-white to-gray-300 border border-[#E2E8F0]">
                    Right
                </div>
            </div>
        </div >
    );
}


