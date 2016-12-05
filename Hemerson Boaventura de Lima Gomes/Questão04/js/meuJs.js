	var botao = document.getElementById("botao")
	var id = 1
	var i = 1
	var cont = 1
	botao.addEventListener("click", function(){
		var b = document.createElement('button')
		//var q = document.createElement('br')
		b.textContent = "botao "+i
		b.id = id
		id++
		i++
		document.body.appendChild(b)
		b.addEventListener("click", function(){
			var teste = document.getElementById(b.id+cont)
			console.log(teste)
			console.log(b)
			if(teste){
			if(teste.id>b.id){
			teste.remove()
			cont++
			}}else{
				this.remove()
				cont=1
			}
			
		})
	})