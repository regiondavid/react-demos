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
