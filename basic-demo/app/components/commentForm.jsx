import React from 'react'

class CommentForm extends  React.Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: '',
      state: 2
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author}onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say something" value={this.state.text} onChange={(e) => this.handleTextChange(e)} />
        <input type="submit" value="Post" />
      </form>
    )
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleTextChange(e) {
    console.log(this.state.text)
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    console.log(author)
    if(!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({
      author: '',
      text: ''
    })
  }

  setTheState() {
    let s = "haha"
    if (this.state.author != s) {
      this.setState({
        author: s
      })
    }
  }

  shouldComponentUpdate() {
    console.log('should update')
    return true;
  }

}


export default CommentForm;