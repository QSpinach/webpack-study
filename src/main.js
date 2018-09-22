import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function(){
  $("ul li:odd").css("background-color", 'lightgreen')
  $("ul li:even").css("background-color", 'lightyellow')
})