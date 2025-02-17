// Classe abstrata Pessoa
function Pessoa(nome) {                                          
    this.nome = nome;
}
// Classe Funcionário herdará de Pessoa
function Funcionario(nome, cargo, salario, tempo) {              
    Pessoa.call(this, nome); // Chamando o construtor de Pessoa
    this.cargo = cargo;
    this.tempo = tempo; // Adicionando tempo de contratação corretamente

    let _salario = salario; // Encapsula Salário (privado)

    // Getter e Setter - proteger os dados internos contra acesso ou modificação direta
    this.getSalario = function() {
        return _salario;
    };
    this.setSalario = function(valor) {
        if (typeof valor === 'number' && valor > 0) {
            _salario = valor;
        }
    };
}

// Configurando a herança de Funcionario para Pessoa Leia o README para saber mais
Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;


function Estagiario(nome, tempo) {
    Funcionario.call(this, nome, "Estagiário", 2000, tempo);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.05;
        this.setSalario(novoSalario);
        console.log(`Os estágiarios receberam um aumento de 5%! Novo salário base: R$${this.getSalario().toFixed(2)}`);
    };
}
Estagiario.prototype = Object.create(Funcionario.prototype);
Estagiario.prototype.constructor = Estagiario;

function Junior(nome, tempo) {
    Funcionario.call(this, nome, "Júnior", 3200, tempo);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        console.log(`Os Juniores receberam um aumento de 7%! Novo salário base: R$${this.getSalario().toFixed(2)}`);
    };
}
Junior.prototype = Object.create(Funcionario.prototype);
Junior.prototype.constructor = Junior;

function Analista(nome, tempo) {
    Funcionario.call(this, nome, "Analista", 4900, tempo);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        console.log(`Os Analistas receberam um aumento de 7%! Novo salário base: R$${this.getSalario().toFixed(2)}`);
    };
}
Analista.prototype = Object.create(Funcionario.prototype);
Analista.prototype.constructor = Analista;

function Gerente(nome, tempo) {
    Funcionario.call(this, nome, "Gerente", 15000, tempo);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        console.log(`Os Gerentes receberam um aumento de 10%! Novo salário base: R$${this.getSalario().toFixed(2)}`);
    };
}
Gerente.prototype = Object.create(Funcionario.prototype);
Gerente.prototype.constructor = Gerente;


//instâncias dos funcionário
const funcionario0 = new Estagiario("Pedro", "08/12/2024");
const funcionario1 = new Junior("Ivana", "12/06/2024");
const funcionario2 = new Analista("Alex", "08/01/2024");
const funcionario3 = new Gerente("Luis", "20/01/2023");

//Logs
console.log("\n--- Painel de Funcionários 2024 ---");
console.log(`${funcionario0.nome}, ${funcionario0.cargo} | Salário base 2024: R$${funcionario0.getSalario().toFixed(2)} | Data de contratação: ${funcionario0.tempo}`);
console.log(`${funcionario1.nome}, ${funcionario1.cargo} | Salário base 2024: R$${funcionario1.getSalario().toFixed(2)} | Data de contratação: ${funcionario1.tempo}`);
console.log(`${funcionario2.nome}, ${funcionario2.cargo} | Salário base 2024: R$${funcionario2.getSalario().toFixed(2)} | Data de contratação: ${funcionario2.tempo}`);
console.log(`${funcionario3.nome}, ${funcionario3.cargo} | Salário base 2024: R$${funcionario3.getSalario().toFixed(2)} | Data de contratação: ${funcionario3.tempo}`);
console.log("\n--- Ajuste de salário anual ---");
funcionario0.aumento();
funcionario1.aumento();
funcionario2.aumento();
funcionario3.aumento();
console.log("\n--- Painel de Funcionários 2025 ---");
console.log(`${funcionario0.nome}, ${funcionario0.cargo} | Salário base 2025: R$${funcionario0.getSalario().toFixed(2)} | Data de contratação: ${funcionario0.tempo}`);
console.log(`${funcionario1.nome}, ${funcionario1.cargo} | Salário base 2025: R$${funcionario1.getSalario().toFixed(2)} | Data de contratação: ${funcionario1.tempo}`);
console.log(`${funcionario2.nome}, ${funcionario2.cargo} | Salário base 2025: R$${funcionario2.getSalario().toFixed(2)} | Data de contratação: ${funcionario2.tempo}`);
console.log(`${funcionario3.nome}, ${funcionario3.cargo} | Salário base 2025: R$${funcionario3.getSalario().toFixed(2)} | Data de contratação: ${funcionario3.tempo}`);

