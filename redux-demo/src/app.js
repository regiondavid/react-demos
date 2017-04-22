// import * as reducers from './reducer'
import todoApp from './reducer'
import {createStore} from 'redux'
import {addTodo, toggleTodo, setVisibilityFilter, VISIBILITY} from './actions'

let store = createStore(todoApp);

let unSubscribe = store.subscribe(()=>{
  console.log(store.getState())
});

store.dispatch(addTodo("添加一个todo吧"))
store.dispatch(addTodo("添加第二个todo吧"))
store.dispatch(addTodo("添加第三个todo吧"))
store.dispatch(addTodo("添加第四个todo吧"))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(3))
store.dispatch(setVisibilityFilter(VISIBILITY.SHOW_COMPLETE))
store.dispatch(setVisibilityFilter(VISIBILITY.SHOW_ACTIVE))

unSubscribe();