# API-Restful_DWM_CD_G2
Utilização de API Restful (MongoDB)

### **Tema do trabalho:** Cenário 1

## Resumo

| Endereço/Rota | Método HTTP | Resultado | Estado |
| --- | --- | --- | --- |
| /eventos | GET | Lista de todos os eventos e toda a sua informação | Funciona |
| /eventos/`:idEvento` | GET | Obtenção de toda a informação de um determinado evento | Funciona |
| /eventos/`:idEvento`/listaInscricoes | GET | Lista de todos os inscritos e sua respetiva informação de um determinado evento (`idEvento` passado por URL) | Em desenvolvimento |
| /eventos | POST | Cria um novo evento | Funciona |
| /eventos/`:idEvento` | POST | Cria uma nova inscrição num determinado evento (`idEvento` passado por URL) | Funciona |
|  | POST |  |
| /eventos/`:idEvento` | PUT | Editar o evento (`idEvento` passado por URL) | Funciona |
| /inscricoes/`:idInscricao` | PUT | Editar a inscrição (`idInscricao` passado por URL) |
|  | PUT |  |
| /eventos/`:idEvento` | DELETE | Elimina um determinado evento (`idEvento` passado por URL) | Funciona |
| /eventos/`:idEvento`/`:idInscricao` | DELETE | Elimina um inscrito de um determinado evento (`idEvento` e `idInscricao` passados por URL) |
|  | DELETE |  |

(2ª fase - criar tabela de `Pessoa`; trocar campo `nome` por `idPessoa` na tabela `inscricaos`)

### **Elementos do grupo:**
- Hélder Carvalho, a15310
- Carlos Simões, a15321