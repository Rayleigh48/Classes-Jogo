class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Definindo o ataque baseado no tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibir a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe Heroi
let heroi1 = new Heroi("Aragorn", 30, "Guerreiro");
heroi1.atacar(); // O guerreiro atacou usando espada.

let heroi2 = new Heroi("Gandalf", 100, "Mago");
heroi2.atacar(); // O mago atacou usando magia.

let heroi3 = new Heroi("Li", 25, "Monge");
heroi3.atacar(); // O monge atacou usando artes marciais.

let heroi4 = new Heroi("Shinobi", 22, "Ninja");
heroi4.atacar(); // O ninja atacou usando shuriken.
