import React from 'react';
import './commentlist.css';
const CommentList=(props)=>{
return(
     
     <div>
      <button className='btn' >Write your comment</button>
     <div className='comment'>
          <h3>{props.rates}</h3>
          <h3>{props.type}</h3>
         <p>{props.comment}</p> 
     </div>
     </div>
)


}
export default CommentList;