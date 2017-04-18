import React from 'react'
import ResultItem from './resultItem.jsx'


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var itemsNodes = this.props.items.map((item) => (
      <ResultItem data={item} key={item.id} />
    ));
    return (
      <div className="search-result">
        <p>共搜索到{this.props.count}条结果</p>
        {itemsNodes}
      </div> 
    )
  }
}