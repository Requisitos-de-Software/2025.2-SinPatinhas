# NFR Framework – Antonio Carvalho  

---

## Validação com tutora de animal  

A validação com o usuário foi feita de forma presencial, no dia **20 de outubro de 2025**.  

<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

---

## Participantes da validação  

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável pela criação e modelagem dos artefatos CNFR01 e CNFR02. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o artefato NFR Framework. |

---

## Introdução  

O **NFR Framework** é uma metodologia utilizada para representar e analisar **Requisitos Não Funcionais (RNFs)** de um sistema.  
No contexto do **SinPatinhas**, ele auxilia a equipe a identificar, registrar e avaliar as decisões de projeto que influenciam aspectos como **usabilidade**, **segurança**, **confiabilidade** e **desempenho** da aplicação.  

O uso do NFR Framework permite que cada decisão de desenvolvimento seja documentada de forma lógica e visual, garantindo **rastreabilidade** e **justificativa técnica** para as escolhas feitas durante o ciclo de vida do sistema <a id="anchor_1" href="#REF1">[1]</a>.

![NFR_Framework_1](../../../assets/PDFs/nfr/nfr_1.png)
![NFR_Framework_2](../../../assets/PDFs/nfr/nfr_2.png)

*SERRANO, M.; SERRANO, M. *Requisitos – Aula 17*. Material de aula, Universidade de Brasília (UnB), 2025.*

---

## Artefatos e Gravações Unitários  

| **Participantes** | **Página Específica** | **Descrição** |
|--------------------|----------------------|----------------|
| **Antonio Carvalho** | [#CNFR01](/modelagem/gravacoes/antonio/nfr_framework.md) | Artefato baseado em RFNI005 / HU005 / BL005 |
|                    | [#CNFR02](/modelagem/gravacoes/antonio/nfr_framework.md) | Artefato baseado em RFNI018 / HU006 / HU008 / BL006 |

---

## Softgoal Interdependency Graph (SIG)  

O **Softgoal Interdependency Graph (SIG)** representa os **softgoals** — objetivos qualitativos que não possuem critérios de satisfação precisamente definidos.  
No **SinPatinhas**, o SIG foi utilizado para compreender como decisões como **exibição de horários de clínicas** e **integração com parceiros externos** impactam simultaneamente **usabilidade**, **desempenho** e **segurança** do sistema.  

---

## Modelagem de Artefato NFR  

### **CNFR01 – Exibição de Horários de Clínicas Parceiras**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR01 |
| **Cartão de Especificação** | Disponibilidade e Desempenho |
| **Descrição** | O sistema deve exibir informações sobre **horários de funcionamento de clínicas e hospitais parceiros** de forma rápida e confiável. |
| **Justificativa** | Permite ao tutor planejar atendimentos veterinários e emergências, aumentando a confiabilidade do serviço. |
| **Origem** | RFNI005 / HU005 / BL005 |
| **Critério de Ajuste** | O tempo de resposta da consulta aos horários deve ser inferior a **3 segundos** em média. |
| **Dependências** | Banco de dados atualizado das clínicas; integração com APIs externas de parceiros. |
| **Prioridade** | Alta (8/10) |
| **Conflitos** | Pode afetar o desempenho geral se houver consultas simultâneas em larga escala. |
| **História Relacionada** | [HU005 – Como tutor, quero visualizar os horários de funcionamento de clínicas veterinárias e hospitais parceiros.] |
| **Softgoals Relacionados** | Desempenho (MAKE ++), Usabilidade (HELP +), Confiabilidade (HELP +) |
| **Propagação de Impactos** | A melhoria no desempenho e na disponibilidade contribui positivamente para a **usabilidade**, porém pode impactar negativamente a **segurança** em caso de exposição de APIs públicas. |

---

### **CNFR02 – Integração Direta com Parceiros e Sincronização de Dados**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR02 |
| **Cartão de Especificação** | Integração e Segurança |
| **Descrição** | O sistema deve permitir **integração direta via API REST com ONGs, clínicas e pet shops**, garantindo a **sincronização segura de dados** de animais, adoções e atendimentos. |
| **Justificativa** | Facilita o fluxo de informações entre parceiros e mantém os registros dos animais sempre atualizados. |
| **Origem** | RFNI018 / HU006 / HU008 / BL006 |
| **Critério de Ajuste** | Autenticação de API via token seguro (OAuth 2.0) e logs de requisições criptografados. |
| **Dependências** | Disponibilidade de APIs externas; estabilidade do servidor de integração. |
| **Prioridade** | Alta (9/10) |
| **Conflitos** | Pode impactar a **usabilidade** em caso de falhas de conexão e afetar o **desempenho** quando múltiplas integrações ocorrem simultaneamente. |
| **Histórias Relacionadas** | [HU006 – Integração direta com parceiros.] <br> [HU008 – Sincronização de dados entre ONGs e clínicas.] |
| **Softgoals Relacionados** | Segurança (MAKE ++), Desempenho (HURT -), Confiabilidade (HELP +), Usabilidade (HURT -) |
| **Propagação de Impactos** | O aumento da **segurança** e **confiabilidade** melhora a integridade dos dados, mas pode reduzir a **usabilidade** devido à complexidade de autenticação e retardar o **desempenho** em sincronizações múltiplas. |

---

## Análise de Interdependências  

As interdependências entre os softgoals dos artefatos CNFR01 e CNFR02 foram mapeadas para avaliar os efeitos cruzados entre desempenho, usabilidade e segurança.

**Tabela 1 – Relações entre Softgoals CNFR01 e CNFR02**

| **Softgoal 1** | **Softgoal 2** | **Tipo de Contribuição** | **Descrição do Impacto** |
|----------------|----------------|---------------------------|--------------------------|
| Desempenho (CNFR01) | Usabilidade (CNFR01) | HELP (+) | Um sistema mais rápido melhora a experiência do usuário. |
| Segurança (CNFR02) | Desempenho (CNFR01) | HURT (-) | A autenticação segura pode aumentar o tempo de resposta. |
| Confiabilidade (CNFR02) | Usabilidade (CNFR01) | HELP (+) | Dados sincronizados corretamente aumentam a confiança do usuário. |

---

## Agradecimentos  

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Antonio Carvalho**, com base nos fundamentos de **Serrano & Serrano (2025)** e **Chung et al. (2000)**.

---

## Tabela de Contribuições  

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Antonio Carvalho** | 100% | Autor da página NFR Framework |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 20/10/2025 | Criação dos artefatos CNFR01 e CNFR02 | Antonio Carvalho | Letícia Paiva |

---

## Referência Bibliográfica  

<a id="REF1"></a>[1] SERRANO, M.; SERRANO, M. *Requisitos – Aula 17*. Material de aula, Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[2] CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Kluwer Academic Publishers, 2000.  
<a id="REF3"></a>[3] PRESSMAN, R. S.; MAXIM, B. R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  
<a id="REF4"></a>[4] SOMMERVILLE, Ian. *Engenharia de Software.* 10ª ed. Pearson, 2019.

---
