# Matriz de Rastreabilidade – Projeto SinPatinhas

## Introdução

A **Matriz de Rastreabilidade** é um instrumento essencial da **Engenharia de Requisitos**, que permite **identificar, relacionar e controlar a consistência** entre os diversos artefatos gerados ao longo do ciclo de desenvolvimento de software <a id="anchor_1" href="#REF1">[1]</a>.  

Ela garante que **cada requisito seja atendido** e **implementado**, promovendo a **transparência** e a **verificabilidade** do processo <a id="anchor_2" href="#REF2">[2]</a>.  

Por meio dessa matriz, é possível **rastrear o impacto de mudanças**, **validar implementações** e **garantir cobertura de testes**. A estrutura é construída a partir dos **elos de rastreabilidade de Toranzo (2012)**, que definem o tipo de relação entre os elementos do projeto.

![matriz_1](../../assets/PDFs/rastreabilidade/matriz_1.png)
![matriz_2](../../assets/PDFs/rastreabilidade/matriz_2.png)

*TORANZO, Raquel S. (2012). Gestão da Rastreabilidade de Requisitos de Software: uma abordagem baseada em ontologias.*


---

## Conceito de Rastreabilidade

A **rastreabilidade de requisitos** é a capacidade de **seguir a vida de um requisito** desde sua origem até a sua implementação e validação final <a id="anchor_3" href="#REF1">[1]</a>.  
Ela assegura que todos os elementos do sistema mantenham **coerência lógica**, possibilitando a **análise de impacto** de mudanças e o **gerenciamento de versões**.

A matriz é construída de forma bidirecional:
- **Rastreabilidade para frente:** acompanha o requisito até o código e os testes.
- **Rastreabilidade para trás:** permite retornar à origem do requisito (por exemplo, uma necessidade do usuário ou requisito do cliente).

---

## Elos de Rastreabilidade de Toranzo

Os **elos de rastreabilidade de Toranzo** representam **relações semânticas** entre artefatos de software. Eles descrevem **como e por que um artefato se conecta a outro**, garantindo uma rastreabilidade rica e interpretável.  

**Tabela 1 – Tipos de Elos de Toranzo**

| **Tipo de Elo** | **Descrição** | **Exemplo Prático no SinPatinhas** |
|------------------|----------------|------------------------------------|
| **Dependência** | Um artefato depende de outro para existir ou ser válido. | Um requisito funcional depende de um requisito não funcional de segurança. |
| **Satisfação** | Um artefato satisfaz ou implementa outro. | O código do módulo de notificações satisfaz o requisito RF044. |
| **Verificação** | Um artefato é verificado ou validado por outro. | O caso de teste CT044 verifica o requisito RF044. |
| **Derivação** | Um artefato foi derivado a partir de outro. | A história de usuário HU020 foi derivada do requisito RNF021. |
| **Racionalidade (ou Justificativa)** | Representa a motivação ou decisão por trás de uma modificação. | Uma decisão de design justifica a alteração de RF012. |
| **Evolução** | Indica versões sucessivas ou refinamentos de um mesmo artefato. | RF004 v1.0 → RF004 v2.0 após refinamento. |
| **Refinamento** | Mostra o detalhamento progressivo de um requisito mais abstrato. | O requisito geral de "Adoção de Animais" é refinado em subrequisitos sobre cadastro, notificação e controle. |

Esses elos são aplicados dentro da matriz de rastreabilidade para explicitar **as conexões e a lógica do projeto**.

---

## Estrutura da Matriz de Rastreabilidade

A **Matriz de Rastreabilidade** é organizada para relacionar os artefatos em diferentes níveis:  
**Requisitos → Casos de Uso → Histórias de Usuário → Código → Testes.**

**Tabela 2 – Exemplo de Matriz de Rastreabilidade**

| **Requisito** | **História de Usuário** | **Caso de Uso**  | **Tipo de Elo** | **Status** |
|---------------|-------------------------|------------------|-----------------|------------|
| RF001 – Nome do requisito | HU001 – Historia de usuário | UC001 – caso de uso | Satisfação / Verificação  | Implementado |
| RF002 – Nome do requisito | HU002 – Historia de usuário | UC002 – caso de uso | Dependência / Verificação | Em validação |
| RF003 – Nome do requisito | HU003 – Historia de usuário | UC003 – caso de uso | Satisfação / Refinamento  | Concluído |

---

## Metodologia de Construção

A criação da matriz foi baseada nas etapas propostas por **Pressman & Maxim (2021)** <a id="anchor_4" href="#REF2">[2]</a> e na **abordagem de rastreabilidade ontológica de Toranzo (2012)** <a id="anchor_5" href="#REF3">[3]</a>:

1. 
2. 
3. 
4. 
5. 

---

## Artefatos e Gravações Unitários

| **Participantes**    | **Página Específica**                                 | **Descrição**    |
|----------------------|-------------------------------------------------------|------------------|
| **Antonio Carvalho** | [#MR001](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
|                      | [#MR002](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
|                      | [#MR003](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
|                      | [#MR004](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
|                      | [#MR005](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
|                      | [#MR006](../pos-rastreabilidade/unitarios/antonio/matriz_geral.md) | DESCRICAO        |
| **Leticia**          | [#MR007](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR008](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR009](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR010](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR011](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR012](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Pedro Gomes**      | [#MR013](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR014](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR015](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR016](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR017](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR018](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Mateus Negrini**   | [#MR019](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | DESCRICAO        |
|                      | [#MR020](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | DESCRICAO        |
|                      | [#MR021](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR022](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR023](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR024](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Isaac Menezes**    | [#MR025](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR026](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      | [#MR027](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR028](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR029](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR030](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Heloisa Silva**    | [#MR031](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      | [#MR032](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      | [#MR033](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR034](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR035](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#MR036](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |

---

## Benefícios da Matriz e dos Elos

- **aaaaaaa:** 

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.  
A base conceitual foi desenvolvida com base nos fundamentos de **Toranzo (2012)**, **Pressman & Maxim (2021)** e **Serrano & Serrano (2025)**.

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|------------|----------------|-------------|--------------|
| 1.0 | 27/10/2025 | Criação da página de matriz de rastreabilidade | Mateus Santos Negrini | — |

---

## Referências Bibliográficas

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Engenharia de Requisitos – Aula 10*. Material de aula, Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[2] PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  
<a id="REF3"></a>[3] TORANZO, Raquel S. *Gestão da Rastreabilidade de Requisitos de Software: uma abordagem baseada em ontologias.* Tese (Doutorado em Engenharia de Software) — COPPE/UFRJ, 2012.  
