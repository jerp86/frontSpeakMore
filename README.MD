<h2 align="center">Speak More - VxTel®</h2>

___

<p align="center">
  <img src="https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/vortx-1558635133-logo-horiz-coloridopng.png" width="150" heigth="150">
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#computer-projeto">Projeto</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#link-como-executar">Como Executar</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<p align="center">
  <img src="https://user-images.githubusercontent.com/54115624/104667515-05203c00-56b5-11eb-8c69-2ba2003bcd2e.gif" width="600">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/54115624/104667678-65af7900-56b5-11eb-892e-90175b7f038b.png" width="600">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/54115624/104667706-752ec200-56b5-11eb-8831-7632e733487a.png" width="600">
</p>

## :information_source: Sobre

Teste técnico para ser avaliado alguns conceitos!

Em um cenário próximo do real, como é a organização e clareza do código, como foi abstraído os conceitos, etc.

## :interrobang: Motivo

A Vórtx® é a primeira fintech B2B de infraestrutura do mercado de capitais, utilizando tecnologia para viabilizar as transações de investimento. Em outras palavras, somos os caras por trás de toda operação de investimentos de confiança, como um sistema operacional - o iOS/Android do mercado de capitais.

## :computer: Projeto

A empresa de telefonia **VxTel**, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado **FaleMais**.

Normalmente um cliente **VxTel** pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino:

| Origem | Destino |  $/min  |
| :----: | :-----: | :-----: |
| 011 | 016 | 1.90 |
| 016 | 011 | 2.90 |
| 011 | 017 | 1.70 |
| 017 | 011 | 2.70 |
| 011 | 018 | 0.90 |
| 018 | 011 | 1.90 |

Com o novo produto **FaleMais** da **VxTel** o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A **VxTel**, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano **FaleMais**. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema.

### Exemplo de Valores:

| Origem | Destino | Tempo | Plano FaleMais | Com FaleMais | Sem FaleMais |
| :----: | :-----: | :---: | :---: | :---: | :---: |
| 011 | 016 | 20 | FaleMais 30 | $ 0,00 | $ 38,00 |
| 011 | 017 | 80 | FaleMais 60 | $ 37,40 | $ 136,00 |
| 018 | 011 | 200 | FaleMais 120 | $ 167,20 | $ 380,00 |
| 018 | 017 | 100 | FaleMais 30 | - | - |

## :seedling: Requisitos Mínimos

Node v12

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- ReactJS
- TypeScript
- Styled-Components
- React Icons
- Axios
- Polished
- React Router DOM
- Json-Server
- EditorConfig
- ESLint
- Prettier

## :link: Como executar

Teste efetuado utilizando ReactJS, para rodar a aplicação localmente basta descompactar os arquivos, acessar a pasta e executar os comandos no terminal:

Instalar as dependências:

```
yarn

```

Rodar o servidor fake:


```
yarn server

```

Rodar a aplicação:

```
yarn start
```

> Todos esses comandos podem ser executados com o gerenciador de pacotes npm, para isso siga os passos:

Instalar as dependências:

```
npm i

```

Rodar o servidor fake:


```
npm run server

```

Rodar a aplicação:

```
npm start
```

---

<h4 align="center">
  Feito com ❤️ por Jerp86 👋️ <a href="mailto:jerp4@hotmail.com">Entre em contato!</a>
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/jerpbtu">
    <img alt="Perfil do Facebook de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/Facebook-jerpbtu-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/jerpbtu/">
    <img alt="Perfil do Instagram de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/Instagram-@jerpbtu-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
  <a href="https://twitter.com/jerpbtu">
    <img alt="Perfil do Twitter de José Eduardo Rodrigues Pinto" src="https://img.shields.io/twitter/follow/jerpbtu?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
