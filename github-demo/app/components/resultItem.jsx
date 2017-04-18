import React from 'react'

export default class ResultItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="result-item">
        <div className="row-left">
          <img src={this.props.data.avatar_url} alt="logo"/>
        </div>
        <div className="row-left">
          <p>用户名：{this.props.data.login}</p>
          <p>用户主页：<a href={this.props.data.html_url}>Github</a></p>
        </div>
      </div>
    )
  }
}