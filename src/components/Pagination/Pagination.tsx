import React from "react";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};

const Pagination = ({count, currentPage,updateCurrentPage}: PaginationProps) => {
 
  let arr = [];
  for(let i =1;i<=count;i++) {
    arr.push(i)
  }
  return <div>Pagination
    <button onClick={()=>{
      updateCurrentPage=currentPage - 1;
    }} disabled={currentPage<=1} >Previous</button>

   {arr?.map((el,index)=>(
    <button key = {index} onClick={()=>{
      updateCurrentPage= el
    }} >{el}</button>
   ))}

 <button onClick={()=>{
      updateCurrentPage=currentPage + 1;
    }} >Next</button>
  </div>;
};

export default Pagination;
