import React from 'react'

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.state = {
      q: '',
      data: {},
      name: ''
    }
  }

  searchName(name) {
    fetch("https://api.github.com/search/users?q="+name)
      .then((res)=>{
        if(res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          data: data
        })
        this.props.changeData(data);
      })
      .catch((e) => {
        console.log(e.message)
      })
  }

  changeName() {
    let name = this.refs.userInput.value;
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <div className="search-box">
        <label htmlFor="searchInput">用户名：</label>
        <input type="text" ref="userInput" id="searchInput" onChange={this.changeName.bind(this)} />
        <button onClick={this.searchName.bind(this, this.state.name)}>搜索</button>
      </div>
    )
  }
}

export default SearchUser;