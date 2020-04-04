import React from 'react';

class Comment extends React.Component{

state={
     comments:[
     { id: '1', author: 'Connor Leech', text: 'comment from the array'},
	{ id: '2', author: 'Long John Silver', text: 'arrrrrrr'}
     ]
}     

render(){
return(
     <div className='comment'>
	     <div className='comment-body'>
		     {this.props.children}
		</div>
	     <div className='comment-author'>
		     {this.props.author}
		</div>
	</div>

 )
}
}
export default Comment;