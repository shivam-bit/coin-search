import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from 'styles/modules/paginated-footer.module.scss';
import { ITEMS_PER_PAGE } from 'config/constants';

const PaginatedFooter = (props) => {
  return (
    <div>
      <ReactPaginate
        containerClassName={styles['paginated-footer-wrapper']}
        pageClassName={styles['paginated-footer__page']}
        activeClassName={styles['paginated-footer__page--active']}
        disabledClassName={styles['disabled-button']}
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.pageClickHandler}
        pageRangeDisplayed={3}
        pageCount={props.pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export { PaginatedFooter };
