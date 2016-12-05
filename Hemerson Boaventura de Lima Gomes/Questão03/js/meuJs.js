	var botao = document.getElementById("botao")
	var id = 1
	var i = 1
	var cont=0
	
	botao.addEventListener("click", function(){
		var b = document.createElement('button')
		//var q = document.createElement('br')
		b.textContent = "botao "+i
		b.id = id
		id++
		i++
		cont++
		document.body.appendChild(b)
		b.addEventListener("click", function(){
			var teste = document.getElementById(b.id-1)
			
			console.log(teste)
			console.log(b)
			if(teste){
			if(teste.id<b.id){
			teste.remove()
			}}else{
				this.remove()
			}
			
		})
	})