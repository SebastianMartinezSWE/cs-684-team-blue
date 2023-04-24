import Pagination from "react-bootstrap/Pagination";

interface PaginationProps {
  totalArticles: number;
  articlesPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const ArticlePagination = ({
  totalArticles,
  articlesPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  let items = [];

  for (
    let page = 1;
    page <= Math.ceil(totalArticles / articlesPerPage);
    page++
  ) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        href="#top"
        active={page === currentPage}
        onClick={() => {
          onPageChange(page);
        }}
      >
        {page}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination className="justify-content-center mt-4">{items}</Pagination>
  );
};
