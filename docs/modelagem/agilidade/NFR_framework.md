# NFR Framework – Projeto SinPatinhas

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia **20 de outubro de 2025**.

<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

## Participantes da validação

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o artefato NFR Framework. |

---

## Introdução

O **NFR Framework** é uma metodologia utilizada para representar e analisar **Requisitos Não Funcionais (RNFs)** de um sistema.  
No contexto do **SinPatinhas**, ele auxilia a equipe a identificar, registrar e avaliar as decisões de projeto que influenciam aspectos como **usabilidade**, **segurança**, **confiabilidade** e **desempenho** da aplicação.  

O uso do NFR Framework permite que cada decisão de desenvolvimento seja documentada de forma lógica e visual, garantindo **rastreabilidade** e **justificativa** para as escolhas técnicas feitas durante o ciclo de vida do sistema <a id="anchor_1" href="#REF1">[1]</a>.

---

## Artefatos e Gravações Unitários

| **Participantes** | **Página Específica** | **Descrição** |
|---------------|------------------|------------------|
| **Antonio Carvalho**    | [#CNFR01](/modelagem/gravacoes/antonio/nfr_framework.md) |  |
|                         | [#CNFR02](/modelagem/gravacoes/antonio/nfr_framework.md) |  |

---

## Softgoal Interdependency Graph (SIG)

O **Softgoal Interdependency Graph (SIG)** é um gráfico que representa os **softgoals** — objetivos que não possuem critérios de satisfação precisamente definidos.  
No **SinPatinhas**, o SIG permite visualizar como cada requisito não funcional se relaciona com outros e quais decisões contribuem positiva ou negativamente para sua satisfação <a id="anchor_2" href="#REF2">[2]</a>.

---

### Tipos de Softgoal

Os **softgoals** são divididos em três tipos principais:

- **NFR Softgoal:** representa um requisito não funcional, como “Usabilidade” ou “Segurança”.  
- **Softgoal de Operacionalização:** detalha como o NFR será alcançado, por exemplo, “Autenticação via senha segura”.  
- **Softgoal de Afirmação:** representa justificativas ou decisões do projeto, como “Uso de autenticação por senha é suficiente para o público-alvo”.

Esses tipos auxiliam o time do **SinPatinhas** a organizar visualmente as decisões relacionadas aos requisitos não funcionais.

---

### Interdependências entre Softgoals

Os softgoals no NFR Framework podem se **relacionar entre si** por meio de **decomposições** e **contribuições**.

#### Decomposições

As decomposições dividem um softgoal em outros mais específicos.  
**Exemplo (SinPatinhas):**
- “Usabilidade” → “Interface intuitiva”, “Tempo de resposta rápido”, “Feedback visual”.

#### Contribuições

As contribuições indicam como um softgoal influencia outro, podendo ser positivas ou negativas:

**Tabela 1 – Estrutura de registro de contribuições entre softgoals**

| Tipo de Contribuição | Significado |
|----------------------|-------------|
| **MAKE (++)** | Contribuição fortemente positiva |
| **HELP (+)** | Contribuição parcialmente positiva |
| **HURT (-)** | Contribuição parcialmente negativa |
| **BREAK (--)** | Contribuição fortemente negativa |
| **UNKNOWN (?)** | Contribuição de impacto indefinido |
| **SOME(+) / SOME(-)** | Contribuição positiva ou negativa de intensidade incerta |
| **AND / OR** | Dependência lógica entre softgoals descendentes e ascendentes |
| **EQUAL (=)** | Representa equivalência semântica entre softgoals |

📚 *Fonte: Slide nº 13 — Requisitos, Aula 17, Material de aula, Universidade de Brasília (UnB).*

Essas relações ajudam o time do **SinPatinhas** a compreender como decisões como “armazenar imagens de animais em nuvem” podem afetar tanto **desempenho** quanto **segurança**.

---

### Procedimento de Avaliação

O **procedimento de avaliação** do NFR Framework determina o **nível de satisfação de cada softgoal** a partir das decisões tomadas no projeto.  
No **SinPatinhas**, essa análise permite verificar se requisitos como **usabilidade** e **segurança dos dados dos tutores** estão sendo suficientemente atendidos.  

Os estados possíveis para cada softgoal são:

- **Satisfeito**  
- **Fracamente satisfeito**  
- **Negado**  
- **Fracamente negado**  
- **Indeterminado**  
- **Conflitante**

Esse processo garante que o produto final atenda aos **requisitos de qualidade** esperados pelos usuários e stakeholders.

---

## Modelagem de Artefato NFR

### CNFR0X – Exemplo 0X

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR0X |
| **Classificação** | Desempenho |
| **Descrição** | O sistema deve processar e gerar documento PDF em menos de 5 segundos |
| **Justificativa** | Garante agilidade no fluxo de trabalho do tutor ao conseguir informação |
| **Origem** | #RFNI00X |
| **Critério de Ajuste** | Tempo de geração de arquivo < 5 s |
| **Dependências** | #RNF08  |
| **Prioridade** | 8 |

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por **Antonio Carvalho** e **Letícia Paiva**, com base nos fundamentos de **Serrano & Serrano (2025)**.

---

## Tabela de Contribuições

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Antonio Carvalho** | 100% | Autor da página NFR Framework |

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|-------------|-----------|----------------|--------------|---------------|
| **1.0** | 10/10/2025 | Criação da página NFR Framework | Antonio | Letícia |
| **1.1** | 14/10/2025 | Edição e revisão da página | Antonio | Letícia |

---

## Referência Bibliográfica

<a id="REF1"></a>SERRANO, M.; SERRANO, M. *Requisitos – Aula 17*. Material de aula, Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Kluwer Academic Publishers, 2000.

---
