/*
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let listHeroes = [
  [10, 9], //Ferro
  [40, 21], //Bronze
  [50, 25], //Prata
  [60, 8], //Ouro
  [87, 3], //Diamante
  [97, 2], //Lendário
  [120, 3] //Imortal
];

let level;

for (let i = 0; i < listHeroes.length; i++) {
  level = balance(listHeroes[i][0], listHeroes[i][1]);
}

function balance(win, lose) {
  let balance = win - lose;
  verifyLevel(balance);
}

function verifyLevel(level) {
  let levelName;
  if (level <= 10) {
    levelName = "Ferro";
  } else if (level >= 11 && level <= 20) {
    levelName = "Bronze";
  } else if (level >= 21 && level <= 50) {
    levelName = "Prata";
  } else if (level >= 51 && level <= 80) {
    levelName = "Ouro";
  } else if (level >= 81 && level <= 90) {
    levelName = "Diamante";
  } else if (level >= 91 && level <= 100) {
    levelName = "Lendário";
  } else if (level > 100) {
    levelName = "Imortal";
  }
  showLevel(level, levelName);
}

function showLevel(level, levelName) {
  console.log(`O Herói tem de saldo de **${level}** está no nível de **${levelName}**`);
}