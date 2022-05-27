# mamboo-api

Api para criação de tasks em um kaban board

## Scripts dispóniveis

No diretório do projeto você pode rodar:

### `yarn dev`

Executa a api em modo de desnvolvimento , na url http://localhost:1337 por padrão , a porta você pode escolher alterando no .env ou vai rodar na porta padrão 3000

### `yarn build`

Esse comando builda o app.

## `yarn start`

Executa o app buildado

## Envs

`DB_URI` : env com a uri do mongodb
`PORT`: porta que você deseja rodar a api

## Endpoints da api

`/create` : Cria a task com os seguintes parâmetros no body de request.

    {
        name:"teste",
        description:"testando",
        status:"pending"
    }

`/list?status=pending`: Retorna um array de tasks, o parâmetro status é opcional, se não passar nenhum parâmetro ele retorna todos, retorna um array de objetos no formato abaixo.

    [ {
    	"_id": "628e8ba6c25de3af04358a61",
    	"description": "value2",
    	"name": "value1",
    	"status": "peding",
    	"createdAt": "2022-05-25T20:03:50.976Z",
    	"updatedAt": "2022-05-25T20:03:50.976Z",
    	"__v": 0
    }]

`/update/:id` : Edita a task do id passado como parâmetro, o único argumento obrigatório é o id , pode passar no body da request as keys que você deseja editar.

    {
       status:"done"
    }

`/delete:id` : Deleta a task com id passado pelo parâmetro
