# Cenários

* [Link para validação de cenários com tutora de animal](https://www.youtube.com/watch?v=loBusGtCcjI)

---

## Introdução aos Cenários  

A **modelagem de requisitos** é a atividade de elaborar modelos capazes de representar características ou comportamentos de um software [1].  
O principal objetivo da modelagem é **tratar aspectos — sejam eles muito abstratos ou muito técnicos — com um apelo visual** [1].  
Essa abordagem busca tornar mais concretos e claros os conceitos abstratos e, ao mesmo tempo, simplificar os aspectos técnicos que podem ser complexos e pouco conhecidos pelos clientes de um software [1].

Existem diversas propostas de modelagem, cada uma focada em um aspecto chave do sistema, como **requisitos funcionais ou não funcionais** [1].  
Dentro deste contexto, a **técnica de Cenários** se destaca como uma estratégia reconhecida para compreender as interações entre ambientes e sistemas [1].

O foco desta técnica é **elicitar a parte comportamental do software**, descrevendo sua dinâmica e seu fluxo de interações [1].  
Ao transformar o uso do sistema em uma narrativa concreta, os **cenários oferecem uma visão prática de como ele funcionará**, facilitando o entendimento, a comunicação e a descoberta de novos requisitos.



## Metodologia de Criação de Cenários 

A metodologia para a criação de um cenário consiste em estruturar uma narrativa por meio de abstrações específicas, garantindo que a descrição da interação seja clara e completa [1]. As etapas, baseadas nos componentes definidos no material de aula, são as seguintes:

**Tabela 1 – Estrutura para Criação de um Cenário**  
*Autoria: Letícia Paiva*

| **Componente**     | **Descrição**                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------|
| **Título**         | Nome que identifica o cenário.                                                                     |
| **Código** | Código do Cenário |
| **Caso de uso trabalhado** | #UC00X |
| **Metas/Objetivos**| Descreve a finalidade ou o propósito a ser alcançado no cenário.                                   |
| **Contexto**       | Define as condições em que o cenário ocorre, como local, tempo e pré-condições.                   |
| **Ator(es)**       | As pessoas, sistemas ou entidades que participam das interações descritas.                         |
| **Recursos**       | Os objetos ou ferramentas necessários para a execução das ações no cenário.                        |
| **Episódios**      | A sequência de ações ou eventos que descrevem o fluxo principal do cenário.                        |
| **Exceção**        | Descreve o tratamento para situações anormais, inesperadas ou de erro que podem ocorrer.           |

---

## Artefatos e Gravações Unitários

A **Tabela 2** apresenta todos os integrantes da equipe que participaram da construção dos Cenários, juntamente com uma descrição do cenário que cada um desenvolveu no projeto.

**Tabela 2 – Integrantes do Grupo Envolvidos**  
*Autoria: Letícia Paiva*

<table>
  <tr>
    <th>Nome</th>
    <th>Cenário</th>
    <th>Descrição do cenário</th>
  </tr>
  <tr>
    <td rowspan="2"><b>Letícia Paiva</b></td>
    <td><a href="(/modelagem/gravacoes/leticia/cenarios.md)">Cenário 01</a></td>
    <td>Sistema de Adoção - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF030</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/leticia/cenarios.md">Cenário 02</a></td>
    <td>Alertas e Notificações Automáticas - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF031</b></a></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Antonio Carvalho</b></td>
    <td><a href="/modelagem/gravacoes/antonio/cenarios.md">Cenário 03</a></td>
    <td>Emissão de documento oficial de identificação (RG Pet) - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF005</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/antonio/cenarios.md">Cenário 04</a></td>
    <td>Atualização do status do animal (perdido, encontrado, óbito, transferência) - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"> <b>#RF007</b></a></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Heloisa Santos</b></td>
    <td><a href="/modelagem/gravacoes/heloisa/cenarios.md">Cenário 05</a></td>
    <td>Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RFNI001</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/heloisa/cenarios.md">Cenário 06</a></td>
    <td>Sistema de avaliação numérica para estabelecimentos - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RFNI010</b></a></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Pedro Gomes</b></td>
    <td><a href="/modelagem/gravacoes/pedro/cenarios.md">Cenário 07</a></td>
    <td>Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF05</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/pedro/cenarios.md">Cenário 08</a></td>
    <td>Notificação Periódica de Atualização - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF044</b></a></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Isaac Menezes</b></td>
    <td><a href="/modelagem/gravacoes/isaac/cenarios.md">Cenário 09</a></td>
    <td>Indicador visual da média de atendimentos na clínica/hospital - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RFNI014</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/isaac/cenarios.md">Cenário 10</a></td>
    <td>Indicador visual da média de atendimentos por médico - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RFNI015</b></a></td>
  </tr>
  <tr>
    <td><b>Luciano Machado</b></td>
    <td>—</td>
    <td>—</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Matheus Negrini</b></td>
    <td><a href="/modelagem/gravacoes/mateus/cenarios.md">Cenário 11</a></td>
    <td>Acesso à Área de Instruções Integradas - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF033</b></a></td>
  </tr>
  <tr>
    <td><a href="/modelagem/gravacoes/mateus/cenarios.md">Cenário 12</a></td>
    <td>Notificação Periódica de Atualização - <a href="/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md"><b>#RF044</b></a></td>
  </tr>
</table>

## Tabela de Contribuição

| **Nome**           | **Contribuição (%)** | **Função**                                      |
|---------------------|----------------------|-------------------------------------------------|
| Letícia Paiva       | 33%                  | Autora da página de apresentação de cenário     |
| Antonio Carvalho    | 33%                  | Criação do modelo de apresentação de cenário    |
| Isaac Menezes Pereia | 33%                 | Refatoração das tabelas                         |


---

## Referências  

Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---

## Histórico de Versão  

| **Versão** | **Data**   | **Descrição**                                                        | **Autores** | **Revisores** |
|-----------:|------------|--------------------------------------------------------------------|--------------|---------------|
| **1.0**    | 09/10/2025 | Criação da página de **Cenários**.| Letícia Paiva | Antonio Carvalho |
| **1.1**    | 11/10/2025 | Alteração da página de **Cenários**.| Antonio Carvalho | Letícia Paiva |
| **1.2**    | 18/10/2025 | Melhoria na exibição das **tabelas**. | Isaac Menezes Pereira | Antonio Carvalho