function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination( {totalPages, currentPage, handlePageChange}   ) {
  console.log(totalPages,"totalpages")
  let pages = createArrayOfSize(totalPages).map((a,i) => {
    // console.log(currentPage,i+1,"currentPage","i+1")
    return <button key={i} disabled={currentPage==i+1}  onClick={()=>handlePageChange(i+1)} data-testid="page-btn">{i+1}</button>
  });
  return <div>{pages}</div>;
}

export default Pagination;
