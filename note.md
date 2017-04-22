## note
#### REACT.render is not a function
react 15.0以后,react package 分成了react & react-dom两个package,需要使用ReactDOM.render

#### ES6中this的绑定
在事件调用时或在constructor中定义，使用bind绑定
``` js
onChange={this.handleEvent.bind(this)}
```
或
``` js
constructor() {
  super();
  this.handleEvent = this.handleEvent.bind(this);
}
```
另一种使用箭头函数

在内部正常定义
``` js
handleEvent(e) {
  //do something
}
```
然后在使用时
``` js
onChange={(e) => {this.handleEvents(e)}}
```
因为箭头函数的this指向其定义时的上下文

### ES6中class methods如果采用 handleevents = () => {}时会报错
参考 ：[React js 箭头函数报错](http://react-china.org/t/react-js/5544/5)

### redux中的reducer使用纯函数。（建议将State 对象设成只读，得到新的state）
控制输入和输出。输入和输出一一对应，并对应到UI。天然的纯函数思想
### React.Component已经取消直接设置propTypes,如果使用会报错
> warning.js:36 Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.

解决办法：按照官网提供的方案，利用prop-types的包来使用
> ``` js
>  const PropTypes = require('prop-types');
>  class Button extends React.Component {
>    render() {
>      return (
>        <button style={{background: this.context.color}}>
>          {this.props.children}
>        </button>
>      );
>    }
>  }
>  Button.contextTypes = {
>    color: PropTypes.string
>  };
> ```
### 疑惑：
> 注意，即便你使用支持 cursor 的不可变库，也不应在 Redux 的应用中使用。整个 state tree 应被视为只读，并需通过 Redux 来更新 state 和订阅更新。因此，通过 cursor 来改写，对 Redux 来说没有意义。而如果只是想用 cursor 把 state tree 从 UI tree 解耦并逐步细化 cursor，应使用 selector 来替代。 Selector 是可组合的 getter 函数组。具体可参考 reselect，这是一个优秀、简洁的可组合 selector 的实现。

### go top-down in simple examples and it's easy to go bottom-up and write tests as you build on large projects
### Don't Repeat Yourself!