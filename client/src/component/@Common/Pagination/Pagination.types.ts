export interface PaginationPaging {
  current_page: number;
  last_page: number;
}

export interface PaginationProps {
  paging: PaginationPaging;
  onPageChange?: (page: number) => void;
}
