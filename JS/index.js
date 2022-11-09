import * as Date from '../Data/Content.js'
//module
import {nav} from './page-elem/nav.js'
import * as Content from './page-elem/addContent.js'


function render(){
	//add nav elements in block the class "nav"
	document.querySelectorAll('.nav').forEach(item => {item.innerHTML = nav})
	//add content in webPage
	document.querySelector(`.content`).innerHTML = Content.add(Date.title, Date.description)	
}
render()