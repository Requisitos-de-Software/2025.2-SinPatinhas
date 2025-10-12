# Casos de uso - Antonio Carvalho

---

* [Link para validação de critérios de backlog com tutor de animal](https://www.youtube.com/watch?v=9qqIvI8YABc)

---

## #UC001 – Emissão de Documento Oficial de Identificação (RG Pet)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<a id="uc001"></a>

<font><p style="text-align: center">**Tabela 01** – Caso de Uso 01 – Emissão de Documento Oficial de Identificação (RG Pet)</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC001 |
| **Descrição** | O sistema deve permitir que o tutor gere um documento oficial de identificação (RG Pet) para o animal, contendo informações básicas e um número único. |
| **Ator** | Tutor (Douglas, 23 anos) |
| **Pré-condições** | O tutor deve estar autenticado e possuir um animal cadastrado com todas as informações obrigatórias preenchidas. |
| **Ação** | O tutor acessa o perfil do animal e solicita a emissão do RG Pet. |
| **Fluxo principal** | <ul><li>O tutor acessa sua conta no sistema.</li><li>Seleciona o animal cadastrado.</li><li>Clica em “Gerar RG Pet”.</li><li>O sistema valida os dados obrigatórios do animal.</li><li>O sistema gera um número único de identificação.</li><li>O documento é exibido na tela e disponibilizado para download em PDF.</li></ul> |
| **Fluxo alternativo** | <ul><li>O tutor cancela a geração do documento antes da finalização.</li><li>O sistema retorna à tela de perfil do animal sem gerar o RG Pet.</li></ul> |
| **Fluxo de exceção** | <ul><li>O tutor tenta gerar o RG Pet sem todas as informações obrigatórias preenchidas.</li><li>O sistema exibe uma mensagem solicitando a correção dos dados antes da emissão.</li></ul> |
| **Pós-condições** | O RG Pet é salvo no sistema e disponível para consulta e impressão pelo tutor. |
| **Data de Criação** | 10/10/2025 |
| **Rastreabilidade** | #RF05 — Emissão de Documento Oficial de Identificação |
| **Cenário relacionado** | [#CNR003](/modelagem/gravacoes/antonio/cenarios.md) |
| **Léxico relacionado** | [#LX001](/modelagem/gravacoes/antonio/lexicos.md) |


---

## #UC002 – Atualização do Status do Animal

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<a id="uc002"></a>

<font><p style="text-align: center">**Tabela 02** – Caso de Uso 02 – Atualização do Status do Animal</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC002 |
| **Descrição** | O sistema deve permitir que o tutor atualize o status do animal, informando situações como “Perdido”, “Encontrado”, “Transferido” ou “Óbito”. |
| **Ator** | Tutor (Douglas, 23 anos) |
| **Pré-condições** | O tutor deve estar autenticado e possuir o animal registrado no sistema. |
| **Ação** | O tutor acessa o perfil do animal e seleciona a opção de atualização de status. |
| **Fluxo principal** | <ul><li>O tutor faz login no sistema.</li><li>Acessa o perfil do animal.</li><li>Clica em “Atualizar Status”.</li><li>Seleciona o novo status entre as opções disponíveis.</li><li>Confirma a atualização.</li><li>O sistema registra a alteração e exibe mensagem de sucesso.</li></ul> |
| **Fluxo alternativo** | <ul><li>O tutor decide não alterar o status e cancela a operação.</li><li>O sistema mantém o status anterior do animal.</li></ul> |
| **Fluxo de exceção** | <ul><li>O tutor tenta aplicar um status incompatível (ex: marcar como “Encontrado” sem estar “Perdido”).</li><li>O sistema exibe mensagem de erro e bloqueia a ação.</li></ul> |
| **Pós-condições** | O status do animal é atualizado e registrado com data e hora da alteração. |
| **Data de Criação** | 10/10/2025 |
| **Rastreabilidade** | #RF07 — Atualização do Status do Animal |
| **Cenário relacionado** | [#CNR004](/modelagem/gravacoes/antonio/cenarios.md) |
| **Léxico relacionado** | [#LX002](/modelagem/gravacoes/antonio/lexicos.md) |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Antonio Carvalho** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Casos de Uso** própria | Antonio | - |

---

## Referências  

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos.* Brasília: Universidade de Brasília, 2025.

---
