# Matriz de Rastreabilidade – Projeto SinPatinhas

## Introdução

A **rastreabilidade de requisitos é uma prática essencial no gerenciamento de projetos de software**, permitindo o acompanhamento do ciclo de vida de cada requisito — desde sua origem até a implementação e validação.  

No contexto do **Projeto SinPatinhas**, a matriz de rastreabilidade foi elaborada com o propósito de garantir que todos os requisitos definidos sejam devidamente atendidos, testados e validados, assegurando a consistência e a qualidade do produto final.  

De acordo com Sayão e Leite <a id="anchor_1" href="#REF1">[1]</a>, a rastreabilidade auxilia tanto em aspectos técnicos quanto gerenciais, oferecendo suporte à análise de impacto, controle de mudanças, validação e verificação de requisitos.

---

## Conceito e Classificação da Rastreabilidade

A rastreabilidade é definida como a **capacidade de estabelecer e seguir o vínculo entre os requisitos e seus artefatos associados**, como documentos, modelos, código e casos de teste.  

Ela permite compreender as relações de dependência entre os elementos do sistema, garantindo que modificações sejam devidamente propagadas.  

Segundo Sayão e Leite <a id="anchor_1" href="#REF1">[1]</a>, a rastreabilidade se divide em duas grandes categorias:

- **Pré-rastreabilidade**: documenta o contexto e as fontes das quais os requisitos emergem (como atas, entrevistas, normas).  
- **Pós-rastreabilidade**: vincula os requisitos à arquitetura, código e casos de teste, permitindo a verificação de sua implementação.  

Essas relações podem ser classificadas ainda como:
- **Forward-to / Backward-from** (antes da implementação): ligação entre fontes e requisitos.  
- **Forward-from / Backward-to** (depois da implementação): ligação entre requisitos e artefatos de projeto, código e testes.  

---

# **Metodologia**

Para a construção da **matriz de rastreabilidade** do projeto **SinPatinhas**, foi adotado um modelo inspirado no formato utilizado no repositório da disciplina de Requisitos de Software, tomando como referência o projeto [Bilheteria Digital](https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/rastreabilidade/matriz-geral/)<a id="anchor_2" href="#REF2">[2]</a>.

O objetivo dessa matriz é facilitar a visualização das conexões entre os requisitos levantados e os artefatos produzidos, demonstrando como cada requisito foi tratado ao longo do desenvolvimento do sistema. Dessa forma, é possível acompanhar a origem, a implementação e os vínculos entre as partes que compõem o projeto.

A matriz foi estruturada com **seis colunas principais**, descritas a seguir:

- **ID**: identifica de forma única cada requisito;
- **Descrição**: apresenta um resumo do que o requisito propõe;
- **Pré-Rastreabilidade**: indica a técnica de elicitação ou fonte que originou o requisito;
- **Implementado?**: informa se o requisito foi implementado no sistema (Sim, Não ou Parcialmente);
- **Artefatos**: relaciona os artefatos criados com base no requisito (como diagramas, protótipos e documentos);
- **Elos**: mostra as conexões entre os requisitos e os artefatos correspondentes.

---

# **Matriz Geral**

Com base nessa estrutura, foi elaborada a matriz de rastreabilidade representada a seguir.

<p style="text-align: center">**Tabela 1** - Matriz de rastreabilidade do projeto SinPatinhas.</p>

| **ID** | **Descrição** | **Pré-Rastreabilidade** | **Implementado?** | **Artefatos Criados** | **Elos** |
|:------:|----------------|-------------------------|-------------------|------------------------|-----------|

**Autor:** Antonio Carvalho

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.
A base conceitual foi desenvolvida com base nos fundamentos de **Sayão e Leite (2005)** e **Melo (2023)**.
 
---

## Referências Bibliográficas

<a id="REF1"></a>

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.

<a id="REF2"></a>

> [2] MELO, Arthur. Matriz Geral. Repositório do Grupo Bilheteria Digital da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: <https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/rastreabilidade/matriz-geral/>. Acesso em: 28/10/2025.

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 28/10/2025 | Criação da página de matriz de rastreabilidade | Antonio Carvalho |  |

---