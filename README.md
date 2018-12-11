# API-Restful_DWM_CD_G2
Utilização de API Restful (MongoDB)

### **Tema do trabalho:** Cenário 1

### **Elementos do grupo:**
- [Hélder Carvalho](https://github.com/HelderMCarvalho), a15310
- [Carlos Simões](https://github.com/CSCarlosSimoes), a15321

## Abordagem
A nossa abordagem na resolução deste projeto foi sempre fazer os objetivos por ordem de prioridade e de forma ordenada.

A prioridade que nós definimos para os objetivos foi desenvolver primeiro os que são mais simples (GETS, POSTS, PUTS, DELETES em geral) e depois os que requerem mais compexidade (GET '/eventos/`:idEvento`/listaInscricoes', POST '/eventos/`:idEvento`', DELETE '/eventos/`:idEvento`/`:idInscricao`').

## Objetivos
| Endereço/Rota | Método HTTP | Resultado | Estado |
| --- | --- | --- | --- |
| /eventos | GET | Lista de todos os eventos e toda a sua informação | Funciona |
| /eventos/`:idEvento` | GET | Obtenção de toda a informação de um determinado evento | Funciona |
| /eventos/`:idEvento`/listaInscricoes | GET | Lista de todas as inscrições e sua respetiva informação de um determinado evento (`idEvento` passado por URL) | Funciona |
| /eventos | POST | Cria um novo evento | Funciona |
| /eventos/`:idEvento` | POST | Cria uma nova inscrição num determinado evento (`idEvento` passado por URL) | Funciona |
| /pessoa | POST | Cria uma nova Pessoa | Funciona |
| /eventos/`:idEvento` | PUT | Editar o evento (`idEvento` passado por URL) | Funciona |
| /inscricoes/`:idInscricao` | PUT | Editar a inscrição (`idInscricao` passado por URL) | Funciona |
| /pessoa/`:idPessoa` | PUT | Editar a pessoa (`idPessoa` passado por URL) | Funciona |
| /eventos/`:idEvento` | DELETE | Elimina um determinado evento (`idEvento` passado por URL) | Funciona |
| /eventos/`:idEvento`/`:idInscricao` | DELETE | Elimina um inscrito de um determinado evento (`idEvento` e `idInscricao` passados por URL) | Funciona |
| /pessoa/`:idPessoa` | DELETE | Elimina uma determinada pessoa (`idPessoa` passado por URL) | Funciona |

- [x] 2ª fase - criar tabela `Pessoa`; trocar campo `nome` por `idPessoa` na tabela `inscricaos`; relação entre pessoa e evento é uma `inscricao`)

## Problemas Encontrados
No decorrer do desenvolvimento deste projeto os problemas que encotramos foram:
- **Rota** '/eventos/`:idEvento`/listaInscricoes'
   - **Descrição do que se queria:**  percorrer o `array` de inscrições do evento e para cada uma das inscrições, ir busca-la à BD e adiciona-la a um `array` para então ser devolvido.
   - **Descrição do problema:** a função devolvia uma resposta vazia porque o código da devolução do `array` (inicializado vazio) era executado ao mesmo tempo que o código que percorria o `array` das inscrições.
   - **Solução:** utilizar o módulo `async` para forçar que 1º seja percorrido o `array` de inscrições do evento e só no fim disso seja devolvida a resposta.

## Pontos de Valorização
Neste projeto, achamos que poderemos ser valorizados devido ao facto de termos concluido a 2ª fase e também porque tivemos de pesquisar e aprender a utilizar o módulo `async` que não conhecíamos, o que nos deu mais trabalho.

## Metodologia de Testes
1. Criar um evento (**POST** /eventos)
![Criar um evento](https://i.imgur.com/CXVKerh.png)

1. Criar uma pessoa (**POST** /pessoa)
![Criar uma pessoa](https://i.imgur.com/iIO4dWi.png)

1. Cria uma nova inscrição num determinado evento (**POST** /eventos/`:idEvento`)
![Cria uma nova inscrição num determinado evento](https://imgur.com/1uoLasi.png)

1. Obter informação de um determinado evento (**GET** /eventos/`:idEvento`)
![Obter informação de um determinado evento](https://imgur.com/AeX4mPD.png)

1. Editar o evento (**PUT** /eventos/`:idEvento`)
![Editar o evento](https://imgur.com/q1JlvTJ.png)

1. Editar a pessoa (**PUT** /pessoa/`:idPessoa`)
![Editar a pessoa](https://imgur.com/yWYzFrq.png)

1. Editar a inscrição (**PUT** /inscricoes/`:idInscricao`)
![Editar a inscrição](https://imgur.com/GqN1f8b.png)

1. Listar eventos (**GET** /eventos) (repetir o passo 1. para criar outro evento)
![Listar eventos](https://imgur.com/LjYLUvl.png)

1. Listar inscrições de um determinado evento (**GET** /eventos/`:idEvento`/listaInscricoes) (repetir o passo 2 e 3 para criar outra inscrição com uma nova pessoa)
![Listar inscrições de um determinado evento](https://imgur.com/bNEA3wO.png)

1. Remover inscriçao (**DELETE** /eventos/`:idEvento`/`:idInscricao`)
![Remover inscriçao](https://imgur.com/zoX3ONT.png)

1. Remover pessoa (**DELETE** /pessoa/`:idPessoa`)
![Remover pessoa](https://imgur.com/z1e0vbu.png)

1. Remover evento (**DELETE** /eventos/`:idEvento`)
![Remover evento](https://imgur.com/ubaPjLf.png)