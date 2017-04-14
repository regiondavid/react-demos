import React from 'react'
import CommentList from './commentList.jsx'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      message: "this is message",
      date: new Date(),
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
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
    this.timeID = setInterval(
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

  render() {
    return (
      <div className="commentBox">
        Hello Comment {this.props.name} CommentBox.
        <h1>{this.state.date.toLocaleString()}</h1>
        <h2>{this.state.message}</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}
CommentBox.defaultProps = {
  name: 'region',
  data: [
    {
      id: 1,
      author: "Peter Hunt",
      text: "This is one comment"
    },
    {
      id: 2,
      author: "Jordan",
      text: "This is a comment again"
    }
  ]
}

export default CommentBox;