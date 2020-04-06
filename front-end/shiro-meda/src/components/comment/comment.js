import React from 'react';
import NewComment from '../newcomment/newcomment';
import Aux from '../../hoc/Auxilary';
import CommentList from '../commentlist/commentlist';
class Comment extends React.Component{

state={
     products:[
     { id: '1', type: 'Kemis', comments:[{userId:'dis', text: 'comment from the kemis. I really like this dress'}], rates:[{userId:1, rate: 2}]},
	{ id: '2', type: 'shurt', comments:[{userId:1, text: 'comment from the array'}], rates:[{userId:3, rate: 4}]}
     ]
}     


render(){
     const prod=this.state.products.map((val)=>{
          return <CommentList rates={val.rates[0].rate} type={val.type} comment={val.comments[0].text} ></CommentList>
     })
     
     return(
       
         <Aux>
          <NewComment/>
          {prod}
         </Aux>
     )
}
}
export default Comment;