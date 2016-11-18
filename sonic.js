// arquivo: sonic.js
var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;

function Sonic(context, teclado,imagem) {
	this.context = context;
	this.teclado = teclado;
	this.x = 50;
	this.y = 50;

	//criando spritesheet a partir da imagem que recebi
	this.sheet = new Spritesheet(context,imagem,11,4);
	this.sheet.intervalo = 60;

	//estado inicial
	this.andando = false;
	this.direcao = SONIC_DIREITA;
	this.velocidade = 20;
}

Sonic.prototype = {

	atualizar: function() {

		if (this.teclado.pressionada(SETA_DIREITA)) {
		// Se já não estava neste estado...
			if (! this.andando || this.direcao != SONIC_DIREITA) {
			// Seleciono o quadro da spritesheet
				this.sheet.linha = 5;
				this.sheet.coluna = 0;
			}

			this.andando = true;
			this.direcao = SONIC_DIREITA;
			// Neste estado, a animação da spritesheet deve rodar
			this.sheet.proximoQuadro();
			// Desloco o Sonic
			this.x += this.velocidade;

				}

		else if (this.teclado.pressionada(SETA_ESQUERDA)) {

			if (! this.andando || this.direcao != SONIC_ESQUERDA) {
				this.sheet.linha = 4; // Atenção, aqui será 2,ou não,depende do sprite!
				this.sheet.coluna = 0;
			}

			this.andando = true;
			this.direcao = SONIC_ESQUERDA;
			this.sheet.proximoQuadro();
			this.x -= this.velocidade; // E aqui é sinal de menos!
		}
		else {
			if (this.direcao == SONIC_DIREITA){
				this.sheet.coluna = 0;
				this.sheet.linha = 9;
			}
			else if (this.direcao == SONIC_ESQUERDA){
				this.sheet.coluna = 0;
				this.sheet.linha = 1;
			}
			//this.sheet.linha = 9;
			this.andando = false;
		}

	},

desenhar: function() {
	this.sheet.desenhar(this.x, this.y);
	}
}