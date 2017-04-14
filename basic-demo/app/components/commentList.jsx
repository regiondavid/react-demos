import React from 'react'
import Comment from './comment.jsx'

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment) => (
      <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    ));
    return (
      <div className="comment-list">  
        {commentNodes}
      </div>
    )
  }
}

export default CommentList;