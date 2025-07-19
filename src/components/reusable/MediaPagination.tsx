import React from 'react'
import MediaPaginationButton from './MediaPaginationButton'
import type { MediaPaginationProps } from '../../types';

const MediaPagination = ({ totalPages, currentPage, setPage }: MediaPaginationProps) => {
    const visiblePageCount = 5;
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);
    const pageNumbers: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    };

    return (
        <div className='flex items-center justify-center w-screen border-2 border-red-500'>
            <div className='border-2 border-green-500 min-h-10 flex items-center justify-center gap-2'>
                {currentPage > 1 && (
                    <MediaPaginationButton content='<-' selected={false} onClick={() => setPage(currentPage - 1)} />
                )}
                {pageNumbers.map((num) => (
                    <MediaPaginationButton
                        key={num}
                        content={num.toString()}
                        selected={num === currentPage}
                        onClick={() => setPage(num)}
                    />
                ))}
                {currentPage < totalPages && (
                    <MediaPaginationButton content="→" selected={false} onClick={() => setPage(currentPage + 1)} />
                )}
            </div>
        </div>
    )
}

export default MediaPagination