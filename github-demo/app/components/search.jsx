import React from 'react'
import SearchUser from './searchUser.jsx'
import SearchResult from './searchResult.jsx'

class Search extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       data: {
         items: []
       },
     }
   }

  render() {
    return (
      <div className="search">
        <SearchUser changeData={this.changeData.bind(this)} />
        <SearchResult items={this.state.data.items} count={this.state.data.total_count} />
      </div>
    )
  }

  changeData(item) {
    this.setState(prevState => ({
      data: item,
    }))
  }

}

export default Search;