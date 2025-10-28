# Matriz de Rastreabilidade – Projeto SinPatinhas

## Introdução

A rastreabilidade de requisitos é uma prática essencial no gerenciamento de projetos de software, permitindo o acompanhamento do ciclo de vida de cada requisito — desde sua origem até a implementação e validação.  

No contexto do **Projeto SinPatinhas**, a matriz de rastreabilidade foi elaborada com o propósito de garantir que todos os requisitos definidos sejam devidamente atendidos, testados e validados, assegurando a consistência e a qualidade do produto final.  

De acordo com Sayão e Leite (2005) [1], a rastreabilidade auxilia tanto em aspectos técnicos quanto gerenciais, oferecendo suporte à análise de impacto, controle de mudanças, validação e verificação de requisitos.

---

## Conceito e Classificação da Rastreabilidade

A rastreabilidade é definida como a **capacidade de estabelecer e seguir o vínculo entre os requisitos e seus artefatos associados**, como documentos, modelos, código e casos de teste.  

Ela permite compreender as relações de dependência entre os elementos do sistema, garantindo que modificações sejam devidamente propagadas.  

Segundo Sayão e Leite (2005) [1], a rastreabilidade se divide em duas grandes categorias:

- **Pré-rastreabilidade**: documenta o contexto e as fontes das quais os requisitos emergem (como atas, entrevistas, normas).  
- **Pós-rastreabilidade**: vincula os requisitos à arquitetura, código e casos de teste, permitindo a verificação de sua implementação.  

Essas relações podem ser classificadas ainda como:
- **Forward-to / Backward-from** (antes da implementação): ligação entre fontes e requisitos.  
- **Forward-from / Backward-to** (depois da implementação): ligação entre requisitos e artefatos de projeto, código e testes.  

---

### Níveis de Informação de Toranzo

O modelo de **Toranzo (2002)**, conforme interpretado por Sayão e Leite (2005) [1], organiza as informações rastreadas em quatro **níveis de informação**:

1. **Ambiental** – envolve o contexto externo (leis, normas, fatores socioambientais) que influencia o projeto.  
2. **Organizacional** – abrange a missão, metas e padrões da organização, que impactam os requisitos do sistema.  
3. **Gerencial** – relaciona tarefas, papéis e responsabilidades dentro do projeto, facilitando o acompanhamento de atividades.  
4. **Desenvolvimento** – engloba os artefatos técnicos do ciclo de vida (documentos, diagramas, código, casos de teste, etc.).  

Essa estrutura hierárquica permite ao Projeto SinPatinhas estabelecer uma rastreabilidade completa — desde as condições externas até os elementos técnicos internos.

---

## Elos de Rastreabilidade de Toranzo

Toranzo propõe um **meta-modelo** que define os principais **tipos de elos** de rastreabilidade, também descritos por Sayão e Leite (2005) [1]. São eles:

- **Satisfação** – indica que um requisito é atendido por determinado componente do sistema.  
- **Recurso** – expressa dependências entre elementos que compartilham recursos (tempo, hardware, etc.).  
- **Responsabilidade** – associa artefatos e tarefas a pessoas ou papéis específicos.  
- **Representação** – vincula diferentes formas de modelar um mesmo requisito (por exemplo, texto ↔ diagrama UML).  
- **Alocado** – mostra a distribuição de requisitos em subsistemas ou módulos.  
- **Agregação** – indica composição entre elementos.  

Esses elos permitem traçar com clareza as relações entre requisitos, seus responsáveis e os artefatos derivados, oferecendo transparência e controle durante o desenvolvimento do SinPatinhas.

---

## Estrutura da Matriz de Rastreabilidade

A matriz de rastreabilidade do Projeto SinPatinhas foi construída com base nas recomendações de Sayão e Leite (2005), servindo como um **instrumento de referência cruzada** entre os artefatos do sistema.

| Requisito | Fonte | Caso de Uso | Componente | Caso de Teste | Responsável |
|------------|--------|-------------|-------------|----------------|--------------|
| RF0XX | Entrevistas com tutores | UCXX – Cadastrar Tutor | Módulo Cadastro | CTXX | - |
| RF0XX | Documento de visão | UCXX – Registrar Animal | Módulo Animal | CTXX | - |
| RNF0XX | Norma de usabilidade | - | Interface Web | CTXX | - |

Essa estrutura permite verificar a cobertura e a consistência entre os requisitos e os artefatos de desenvolvimento, além de apoiar auditorias, revisões e validações do sistema.

---

## Metodologia de Construção

A construção da matriz seguiu um processo em quatro etapas, conforme o **modelo de rastreabilidade descrito por Sayão e Leite (2005) [1]**:

1. **Definição** – identificação das entidades e tipos de elos a rastrear, com base nas necessidades do projeto.  
2. **Registro dos Elos** – documentação dos vínculos entre requisitos, artefatos e responsáveis.  
3. **Recuperação** – análise dos relacionamentos para fins de validação, impacto e cobertura.  
4. **Evolução** – atualização contínua da matriz conforme o sistema evolui e novos requisitos são adicionados.  

O uso de planilhas e ferramentas de controle de versão complementa o processo, garantindo rastreabilidade entre requisitos e código-fonte, além de facilitar auditorias e revisões internas.

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

**Verificação da Alocação:** A avaliação dos elos de rastreabilidade para artefatos de desenho e implementação ajuda a identificar requisitos que ainda não foram alocados ou implementados.
**Correção de Defeitos:** A análise dos elos pode indicar que a origem de um defeito não está no código, mas em outro artefato que deve ser revisto, e orienta a verificação/correção dos casos de teste.
**Análise de Impacto:** Os elos facilitam a identificação dos componentes e requisitos relacionados afetados por mudanças em um requisito ou por inclusão de novos requisitos.
**Gerenciamento de Riscos:** A rastreabilidade apoia a identificação dos artefatos atingidos por cada fator de risco, auxiliando na elaboração de estratégias de mitigação.

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.
A base conceitual foi desenvolvida com base nos fundamentos de **Sayão e Leite (2005) [1]** e **Toranzo (2002) [2]**.

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 27/10/2025 | Criação da página de matriz de rastreabilidade | Mateus Santos Negrini | Antonio Carvalho |
| 1.0 | 27/10/2025 | Edição da página com referências e estruturação | Antonio Carvalho | — |

---

## Referências Bibliográficas

<a id="REF1"></a>

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.

<a id="REF2"></a>

> [2] Toranzo, M.; Castro, J. & Mello, E. **Uma proposta para melhorar o rastreamento de requisito**. In: WER02 - Workshop em Engenharia de Requisitos, Valencia, Espanha, Novembro 11-12, 2002. Anais. pp. 194-209.