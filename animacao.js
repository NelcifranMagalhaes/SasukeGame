// arquivo :animação.js


function Animacao(context){
	this.context = context;
	this.sprites = [];
	this.ligado = false;

}
Animacao.prototype= {
	novoSprite:function(sprite){

		this.sprites.push(sprite);

	},
	ligar:function(){
		this.ligado = true;
		this.proximoFrame();
	},

	desligar:function(){

		this.ligado = false;
	},
	proximoFrame:function(){
		//posso continuar?
		if(!this.ligado)return;
		// a cada ciclo,limpamos a tela ou desenhamos um fundo
		this.limparTela();
		//atualizamos o estado dos sprites
		for(var i in this.sprites)
			this.sprites[i].atualizar();	
		//desenhamos o sprite
		for(var i in this.sprites)
			this.sprites[i].desenhar();

		//chamamos o próximo ciclo
		var animacao = this;
		requestAnimationFrame(function(){

			animacao.proximoFrame();
		});

	},
	limparTela:function(){
		var ctx = this.context; //Só para facilitar a escrita
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
			

	}

}