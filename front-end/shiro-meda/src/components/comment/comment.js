import React from 'react';
import CommentBox from './CommentBox';
import Rating from './Rating';
import Aux from '../../hoc/Auxilary';
class Comment extends React.Component{

state={
     products:[
     { id: '1', type: 'Kemis', comments:[{userId:1, text: 'comment from the krmis'}], rates:[{userId:1, rate: 2}]},
	{ id: '2', type: 'shurt', comments:[{userId:1, text: 'comment from the array'}], rates:[{userId:3, rate: 4}]}
     ]
}

   setComment = (pid,uid,comment)=>{
        const copyprd = [ ...this.state.products ];
        const index = copyprd.findIndex(p=> p.id === pid );
        const prd = copyprd.filter(item=>item.id===pid)[0];
              prd.comments.push({userId:uid, text:comment});
              copyprd[index]=prd;
          this.setState({products:copyprd});
           console.log(copyprd);
   }

   setRating = (pid,uid,rate)=>{
     const copyprd = [ ...this.state.products ];
     const index = copyprd.findIndex(p=> p.id === pid );
     const prd = copyprd.filter(item=>item.id===pid)[0];
           prd.rates.push({userId:uid, rate:rate});
           copyprd[index]=prd;
           this.setState({products:copyprd});
          //  console.log(copyprd);
   }

render(){
return(
<Aux>
     <CommentBox setComment={this.setComment}/>
     <Rating setRating={this.setRating}/>
<div>seble component comment list</div>
</Aux>

 )
}
}
export default Comment;