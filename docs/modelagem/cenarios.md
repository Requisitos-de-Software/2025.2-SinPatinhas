# Cenários - Projeto SinPatinhas

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

| **Nome**            | **Cenário** | **Descrição do requisito** |
|---------------------|-------------|-----------------------------|
| **Letícia Paiva**   | [Cenário 01](/modelagem/gravacoes/leticia/cenarios.md)  | Sistema de Adoção - [**RF030**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|    | [Cenário 02](/modelagem/gravacoes/leticia/cenarios.md)  | Alertas e Notificações Automáticas - [**RF031**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Antonio Carvalho**| [Cenário 03](/modelagem/gravacoes/antonio/cenarios.md)  | Emissão de documento oficial de identificação (RG Pet) - [**RF005**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| | [Cenário 04](/modelagem/gravacoes/antonio/cenarios.md)  | Atualização do status do animal (perdido, encontrado, óbito, transferência) - [**RF007**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Heloisa Santos**  | [Cenário 05](/modelagem/gravacoes/heloisa/cenarios.md)  | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados - [**RFNI001**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|   | [Cenário 06](/modelagem/gravacoes/heloisa/cenarios.md)  | Sistema de avaliação numérica para estabelecimentos - [**RFNI010**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Pedro Gomes**     | [Cenário 07](/modelagem/gravacoes/pedro/cenarios.md)  | Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) - [**RF05**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|      | [Cenário 08](/modelagem/gravacoes/pedro/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Isaac Menezes**   | [Cenário 09](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos na clínica/hospital - [**RFNI014**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|    | [Cenário 10](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos por médico - [**RFNI015**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Luciano Machado** | —           | — |
| **Matheus Negrini** | [Cenário 11](/modelagem/gravacoes/mateus/cenarios.md)  | Acesso à Área de Instruções Integradas - [**RF033**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|  | [Cenário 12](/modelagem/gravacoes/mateus/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |


## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

---

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