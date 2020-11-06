//DESAFIO CONSTRUÇÃO DE OBJETOS
const usuário = {
    nome: "Mateus",
    empresa: {
      nome: "Rocketseat",
      cor: "roxo",
      foco: "Programação",
      endereco: "Rua Guilherme Gembala, Nº 260"
    }
};

console.log(`A empresa ${usuário.empresa.nome} está localizada em ${usuário.empresa.endereco}.`);


//DESAFIO VETORES E OBJETOS
const usuario = [
    {
        nome: "Mateus",
        idade: 19
    },
    {
        nome: "Artur",
        idade: 14
    },
    {
        nome: "Pedro",
        idade: 20
    }
];

const objeto = {
  tecnologias: [
    {nome: 'C++', especialidade: 'Desktop'},
    {nome: 'Python', especialidade: 'Data Science'},
    {nome: 'JavaScript', especialidade: 'WebMobile'}
  ]
};

console.log(`O usuário ${usuario[0].nome} tem ${usuario[0].idade} anos e usa a tecnologia ${objeto.tecnologias[2].nome} com especialidade em ${objeto.tecnologias[2].especialidade}.`);
console.log(`O usuário ${usuario[1].nome} tem ${usuario[1].idade} anos e usa a tecnologia ${objeto.tecnologias[0].nome} com especialidade em ${objeto.tecnologias[0].especialidade}.`);
console.log(`O usuário ${usuario[2].nome} tem ${usuario[2].idade} anos e usa a tecnologia ${objeto.tecnologias[1].nome} com especialidade em ${objeto.tecnologias[1].especialidade}.`);


