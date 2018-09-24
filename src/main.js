import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

$(function(){
  $("ul li:odd").css("background-color", 'lightgreen')
  $("ul li:even").css("background-color", 'lightyellow')
})

class Person {
  static info = { name: 'syq', age: 20 }
}
console.log(Person.info);