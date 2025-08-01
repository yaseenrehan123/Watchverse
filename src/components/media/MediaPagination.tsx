import React from 'react'
import MediaPaginationButton from './MediaPaginationButton'
import { useSearchParams } from 'react-router-dom';
import { usePaginationStore } from '../../zustand-stores/usePaginationStore';

const MediaPagination = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const totalPages = usePaginationStore((state)=>state.totalPages);
    const rawPage: number = Number(searchParams.get('page'));
    const currentPage:number = rawPage && Number(rawPage) > 0 ? Number(rawPage) : 1;
    const visiblePageCount = 5;
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);
    const pageNumbers: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    };

    const onButtonClick = (value:number)=>{
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page',String(value));
        setSearchParams(newParams);
    }
    return (
        <div className='flex items-center justify-center w-screen'>
            <div className='min-h-10 flex items-center justify-center gap-2'>
                {currentPage > 1 && (
                    <MediaPaginationButton content='<-' selected={false} onClick={() => onButtonClick(currentPage - 1)} />
                )}
                {pageNumbers.map((num) => (
                    <MediaPaginationButton
                        key={num}
                        content={num.toString()}
                        selected={num === currentPage}
                        onClick={() => onButtonClick(num)}
                    />
                ))}
                {currentPage < totalPages && (
                    <MediaPaginationButton content="→" selected={false} onClick={() => onButtonClick(currentPage + 1)} />
                )}
            </div>
        </div>
    )
}

export default MediaPagination