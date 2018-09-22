import $ from 'jquery'

import './css/index.css'

$(function(){
  $("ul li:odd").css("background-color", 'lightgreen')
  $("ul li:even").css("background-color", 'lightyellow')
})