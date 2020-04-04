import React from 'react';
import CommentBox from './CommentBox';
import Aux from '../../hoc/Auxilary';
class Comment extends React.Component{

state={
     products:[
     { id: '1', type: 'Kemis', comments:[{userId:1, text: 'comment from the krmis'},{}], rates:[{userId:1, rate: 2}]},
	{ id: '2', type: 'shurt', comments:[{userId:1, text: 'comment from the array'}], rates:[{userId:3, rate: 4}]}
     ]
}     

render(){
return(
<Aux>
     <CommentBox />
     <div>seble component comment list</div>
</Aux>

 )
}
}
export default Comment;