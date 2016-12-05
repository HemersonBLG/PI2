	var botao = document.getElementById("botao")
	var id = 1
	var i = 1
	botao.addEventListener("click", function(){
		var b = document.createElement('span')
		var a = document.createElement('br')
		b.id = "num"+i
		b.textContent = i
		i++
		document.body.appendChild(b)
		document.body.appendChild(a)
	})