function escolha(){
	var escolhaU;
	var opcao = ["pedra", "papel", "tesoura"]
	var escolhaU = this.id;
	var escolhaC = opcao[Math.floor(Math.random()*3)]
	
	if(escolhaU == "pedra" && escolhaC == "tesoura"){
	        document.getElementById("resultado").innerHTML = "Usuario ganhou, Pedra amassa tesoura"
	    }else if(escolhaU == "papel" && escolhaC == "pedra"){
	        document.getElementById("resultado").innerHTML = "Usuario ganhou, papel enrola pedra"
	    }else if(escolhaU == "tesoura" && escolhaC == "papel"){
	        document.getElementById("resultado").innerHTML = "Usuario ganhou, tesoura corta papel"
	    }if(escolhaU == "tesoura" && escolhaC == "pedra"){
	        document.getElementById("resultado").innerHTML = "Computador ganhou, Pedra amassa tesoura"
	    }else if(escolhaC == "papel" && escolhaU == "pedra"){
	        document.getElementById("resultado").innerHTML = "Computador ganhou, papel enrola pedra"
	    }else if(escolhaC == "tesoura" && escolhaU == "papel"){
	        document.getElementById("resultado").innerHTML = "Computador ganhou, tesoura corta papel"
	    }else	
			document.getElementById("resultado").innerHTML = "Empate!"
}	

document.getElementById("pedra")
	.addEventListener("click", escolha)
	
document.getElementById("papel")
	.addEventListener("click", escolha)
	
document.getElementById("tesoura")
	.addEventListener("click", escolha)