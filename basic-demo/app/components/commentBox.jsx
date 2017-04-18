import React from 'react'
import CommentForm from './commentForm.jsx'
import CommentList from './commentList.jsx'

class CommentBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: props.initialCount,
      message: "this is message",
      date: new Date(),
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log(2)
  }

  componentWillRecieveProps(nextProps) {
    if(this.props.url != nextProps.url) {
      console.log("changed");
    }
  }

  handleClick() {
    alert(this.state.message);
  }

  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'post',
      data: comment,
      success: (data) => {
        this.setState({data: data});
      },
      error: function(xhr) {
        console.log('error')
      }
    })
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
        this.props.url = "2333";
      },
      error: (xhr, status, err) => {
        console.error(xhr.responseText);
      }
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    this.setState((prevState, props) => {
      return {
        message: prevState.message + props.name
      }
    })
    this.timeID = setTimeout(
      () => {
        this.tick();
        // this.loadCommentsFromServer();
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  changeProps() {
    console.log(666)
    this.refs.commentForm.setTheState();
  }

  render() {
    return (
      <div className="commentBox">
        Hello Comment {this.props.name} CommentBox.
        <h1>{this.state.date.toLocaleString()}</h1>
        <h2>{this.state.message}</h2>
        <CommentList data={this.state.data} />
        <button onClick={() => this.changeProps()}>test</button>
        <CommentForm ref="commentForm" onCommentSubmit={() => this.handleCommentSubmit()} />
      </div>
    );
  }
}
CommentBox.defaultProps = {
  name: 'region'
}

export default CommentBox;