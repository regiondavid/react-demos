import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello.jsx'
import CommentBox from './components/commentBox.jsx'

function main(){
  ReactDOM.render(
    <div>
      <Hello />
      <Hello />
    </div>, 
    document.getElementById('app')
  );
  ReactDOM.render(<CommentBox  url="/comments.json" />, document.getElementById('comment'));
}
main();