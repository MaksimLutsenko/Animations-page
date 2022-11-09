import {title} from '../../Data/Content.js'
const sectionTitle  = `Section`
let nav =`
	<section class="nav-section">
		<div class="nav-section-item">
			<h3 class="section-title">${sectionTitle}</h3>
			<ul class="section-item">`
			
title.forEach(item => {nav+=`<li>${item}</li>`})

nav +=`		</ul>
		</div>
	</section>`
	
export {nav}