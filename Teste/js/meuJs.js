	var botao = document.getElementById("botao")
	var id = 0
	var i = 0
	botao.addEventListener("click", function(){
		var b = document.createElement('div')
		b.id = "teste"+i
		b.textContent = "teste"+i
		i++
		document.body.appendChild(b)
		
		var t = document.createElement('input')
		t.type = "checkbox"
		t.id = id
		id++
		t.addEventListener("click", function(){
			b.remove()
			this.remove()
		})
		b.appendChild(t)
	})