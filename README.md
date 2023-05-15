# Microserviço de Timestamp

Este é um projeto desenvolvido como parte do curso de Backend e API Node.js da FreeCodeCamp. O objetivo é criar um microserviço que converte datas em formato Unix Timestamp e UTC.

## Tecnologias utilizadas

- Node.js
- Express

## Como utilizar

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado em seu computador.
3. Instale as dependências do projeto com o comando `npm install`.
4. Inicie o servidor com o comando `node server.js`.
5. Envie uma requisição para a API com um parâmetro de data no formato `YYYY-MM-DD` ou em formato Unix Timestamp.

## Endpoints da API

- `GET /api/:date?`: Retorna a data informada em formato Unix Timestamp e UTC. Se nenhum parâmetro de data for informado, a API retornará a data atual.

## Exemplos de requisições

- `GET /api/1451001600000`
  - Retorna: `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`

- `GET /api/2015-12-25`
  - Retorna: `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`

- `GET /api/`
  - Retorna: `{ "unix": <data atual em Unix Timestamp>, "utc": "<data atual em formato UTC>" }`

- `GET /api/xyz`
  - Retorna: `{ "error": "Invalid Date" }`

## Testes

Este projeto foi testado com os seguintes requisitos do FreeCodeCamp:

- Uma requisição para `/api/:date?` com uma data válida deve retornar um objeto JSON com uma chave `unix` que é um Unix Timestamp da data de entrada em milissegundos (como tipo Number)
- Uma requisição para `/api/:date?` com uma data válida deve retornar um objeto JSON com uma chave `utc` que é uma string da data de entrada no formato: Thu, 01 Jan 1970 00:00:00 GMT
- Uma requisição para `/api/1451001600000` deve retornar `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
- O projeto pode lidar com datas que podem ser analisadas com sucesso por `new Date (string_data)`
- Se a string de data de entrada for inválida, a API retorna um objeto com a estrutura `{ error: "Invalid Date" }`
- Um parâmetro de data vazio deve retornar a hora atual em um objeto JSON com uma chave `unix`
- Um parâmetro de data vazio deve retornar a hora atual em um objeto JSON com uma chave `utc`

## Autor

Se você tiver dúvidas ou sugestões para melhorias, sinta-se à vontade para entrar em contato.

- [@reginaldoLopesDev](https://github.com/reginaldoLopesDev)
