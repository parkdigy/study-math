import React from 'react';
import { PaginationProps as Props } from './Pagination.types';
import './Pagination.scss';

const PAGE_LIMIT = 5;
const SIDE_PAGES = Math.floor(PAGE_LIMIT / 2);

export const Pagination = React.forwardRef<HTMLDivElement, Props>(({ paging, onChangePage }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const { current_page, last_page: lastPage } = paging;

  const currentPage = Math.min(current_page, lastPage);

  let startPage = currentPage - SIDE_PAGES;
  let endPage = currentPage + SIDE_PAGES;

  if (startPage < 1) {
    const adjustment = 1 - startPage;
    endPage += adjustment;
    startPage = 1;
  }

  if (endPage > lastPage) {
    endPage = lastPage;

    startPage = endPage - PAGE_LIMIT + 1;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div ref={ref} className='Pagination'>
      <div className='Pagination__NavigationBtn' data-disabled={currentPage === 1} onClick={() => onChangePage?.(1)}>
        <Icon size={20}>KeyboardDoubleArrowLeft</Icon>
      </div>
      <div
        className='Pagination__NavigationBtn'
        data-disabled={currentPage === 1}
        onClick={() => onChangePage?.(currentPage - 1)}
      >
        <Icon size={20}>KeyboardArrowLeft</Icon>
      </div>
      {new Array(endPage - startPage + 1).fill(0).map((_, idx) => {
        const page = startPage + idx;
        return (
          <div
            key={idx}
            className={classnames('Pagination__Page', page >= 1000 && 'Pagination__Page_over_1000')}
            data-active={page === currentPage}
          >
            {page}
          </div>
        );
      })}
      <div
        className='Pagination__NavigationBtn'
        data-disabled={currentPage >= lastPage}
        onClick={() => onChangePage?.(currentPage + 1)}
      >
        <Icon size={20}>KeyboardArrowRight</Icon>
      </div>
      <div
        className='Pagination__NavigationBtn'
        data-disabled={currentPage >= lastPage}
        onClick={() => onChangePage?.(lastPage)}
      >
        <Icon size={20}>KeyboardDoubleArrowRight</Icon>
      </div>
    </div>
  );
});

export default React.memo(Pagination) as typeof Pagination;
