	var botao = document.getElementById("botao")
	var id = 1
	var i = 1
	botao.addEventListener("click", function(){
		var b = document.createElement('button')
		var q = document.createElement('br')
		b.textContent = "botao "+i
		b.id = id
		id++
		i++
		document.body.appendChild(b)
		document.body.appendChild(q)
		b.addEventListener("click", function(){
			this.remove()
			q.remove()
		})
	})