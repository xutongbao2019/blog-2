(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{808:function(v,_,e){"use strict";e.r(_);var p=e(7),t=Object(p.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("1.编写js代码实现冒泡排序")]),v._v(" "),e("p",[v._v("2.编写js代码实现数组去重（考虑性能）")]),v._v(" "),e("p",[v._v("3.编写css代码实现div水平垂直居中")]),v._v(" "),e("p",[v._v("4.编写js代码实现在一个数组中删除另一个数组存在的值")]),v._v(" "),e("p",[v._v("var arr = [1, 2, 3, 4, '1', 0, 1, 2, 'a', 'b'];")]),v._v(" "),e("p",[v._v("var brr = [1, 2, 'a'];")]),v._v(" "),e("p",[v._v('结果：[3, 4, "1", 0, "b"]')]),v._v(" "),e("p",[v._v("5.下面代码输出的是什么，并简单解释一下")]),v._v(" "),e("p",[v._v("var name = 'World!';")]),v._v(" "),e("p",[v._v("(function () {")]),v._v(" "),e("p",[v._v("if (typeof name === 'undefined') {")]),v._v(" "),e("p",[v._v("var name = 'Jack'")]),v._v(" "),e("p",[v._v("console.log('Goodbye ' + name)")]),v._v(" "),e("p",[v._v("} else {")]),v._v(" "),e("p",[v._v("console.log('Hello ' + name)")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("})()")]),v._v(" "),e("p",[v._v("6.React性能优化，渲染20000多条checkbox组件，点击选择checkbox组件的时候特别卡，如何解决")]),v._v(" "),e("p",[v._v("import React, { Component } from 'react'")]),v._v(" "),e("p",[v._v("import { Checkbox } from 'antd'")]),v._v(" "),e("p",[v._v("class App extends Component {")]),v._v(" "),e("p",[v._v("constructor(props) {")]),v._v(" "),e("p",[v._v("super(props)")]),v._v(" "),e("p",[v._v("this.state = {")]),v._v(" "),e("p",[v._v("checked: []")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("render() {")]),v._v(" "),e("p",[v._v("let list = this.list()")]),v._v(" "),e("p",[v._v("return (")]),v._v(" "),e("div",[e("p",[v._v("{list}")])]),v._v(" "),e("p",[v._v(");")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("Object.assign(App.prototype, {")]),v._v(" "),e("p",[v._v("componentDidMount() {")]),v._v(" "),e("p",[v._v("let arr = []")]),v._v(" "),e("p",[v._v("for (let i = 0; i < 20000; i++) {")]),v._v(" "),e("p",[v._v("arr.push(i)")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("this.setState({")]),v._v(" "),e("p",[v._v("checked: arr")]),v._v(" "),e("p",[v._v("})")]),v._v(" "),e("p",[v._v("},")]),v._v(" "),e("p",[v._v("list() {")]),v._v(" "),e("p",[v._v("let { checked } = this.state")]),v._v(" "),e("p",[v._v("let arr = []")]),v._v(" "),e("p",[v._v("for (let i = 0; i < 20000; i++) {")]),v._v(" "),e("p",[v._v("arr.push("),e("Checkbox",{key:"{i}",attrs:{checked:"{checked.indexOf(i)"}},[v._v("= 0} onChange={this.handleChange.bind(this, i)}>{i}")]),v._v(")")],1),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("return arr")]),v._v(" "),e("p",[v._v("},")]),v._v(" "),e("p",[v._v("handleChange(index, e) {")]),v._v(" "),e("p",[v._v("let { checked } = this.state")]),v._v(" "),e("p",[v._v("let tempIndex = checked.indexOf(index)")]),v._v(" "),e("p",[v._v("if (e.target.checked) {")]),v._v(" "),e("p",[v._v("if (tempIndex < 0) {")]),v._v(" "),e("p",[v._v("checked.push(index)")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("} else {")]),v._v(" "),e("p",[v._v("if (tempIndex >= 0) {")]),v._v(" "),e("p",[v._v("checked.splice(tempIndex, 1)")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("this.setState({")]),v._v(" "),e("p",[v._v("checked: checked")]),v._v(" "),e("p",[v._v("})")]),v._v(" "),e("p",[v._v("}")]),v._v(" "),e("p",[v._v("})")]),v._v(" "),e("p",[v._v("export default App")]),v._v(" "),e("p",[v._v("7.如何实现React父组件控制子组件执行不同的方法进行渲染")])])}),[],!1,null,null,null);_.default=t.exports}}]);