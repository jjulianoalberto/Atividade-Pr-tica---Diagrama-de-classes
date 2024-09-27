interface FormatoDeElemento {
    desenhar(): void;
    redimensionar(novoValor1: number, novoValor2?: number): void; 
  }
  
  class Circulo implements FormatoDeElemento {
    constructor(public raio: number) {}
  
    desenhar(): void {
      console.log(`Desenhando um círculo com raio ${this.raio}`);
    }
  
    redimensionar(novoRaio: number): void {
      this.raio = novoRaio;
      console.log(`Círculo redimensionado para raio ${this.raio}`);
    }
  }
  
  class Retangulo implements FormatoDeElemento {
    constructor(public comprimento: number, public altura: number) {}
  
    desenhar(): void {
      console.log(`Desenhando um retângulo de ${this.comprimento} x ${this.altura}`);
    }
  
    redimensionar(novoComprimento: number, novaAltura: number): void {
      this.comprimento = novoComprimento;
      this.altura = novaAltura;
      console.log(`Retângulo redimensionado para ${this.comprimento} x ${this.altura}`);
    }
  }
  
  const circulo = new Circulo(5);
  circulo.desenhar();
  circulo.redimensionar(10);
  circulo.desenhar();
  
  const retangulo = new Retangulo(4, 6);
  retangulo.desenhar();
  retangulo.redimensionar(8, 3);
  retangulo.desenhar();
  