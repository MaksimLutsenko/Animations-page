class Content{
	constructor(title,descript){
		this.title = title
		this.descript = descript
	}
	createContent(){
		const title = this.title,
			descript = this.descript 
		return `
		<section class="section-content">
			<div class="title">
				<h2>${title}</h2>
			</div>
			<div class="scene">
				<div class="block" id="${title}"></div>
			</div>
			<div class="descript">
				<p>
					${descript}
				</p>
			</div>
		</section>
		`
	}
}
function addContent(title, description){
	let content = "" 
	for(let i = 0; i < title.length; i++){
		content += new Content(title[i], description[i]).createContent()
	} return content
}
export {addContent as add}