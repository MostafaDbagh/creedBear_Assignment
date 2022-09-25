import React, { useState } from "react";
import './index.css'

export const Pagination = ({paginationDetails,numberofCell,setlimit,limit,setchange})=>{
 
    return(
        <div>
  <div class="pagination">
      {
          numberofCell.map((item,index) =>(
            <a onClick={()=>{
                setlimit({...limit,start:index*6,end:(index+1)*6});
                setchange(true);
            }}>{index+1}</a>
          ))
      }
 
</div>   
<p style={{textAlign:'center',margin:'4px  0 32px 0'}}>Max item{paginationDetails.perPage} Per Page from {paginationDetails.total} </p>
        </div>
    )
}