import React from 'react'

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="comment-author">
          {this.props.author} 评论说道：
        </h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Comment;