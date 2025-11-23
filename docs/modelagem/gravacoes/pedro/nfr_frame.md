# NFR Framework – Pedro Gomes

## Modelagem de Artefato NFR  

### **CNFR05 – Aplicativo Móvel SinPatinhas**  
*Autoria: Pedro Gomes*  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR05 |
| **Cartão de Especificação** | Usabilidade e Mobilidade |
| **Descrição** | O sistema deve disponibilizar um **aplicativo móvel multiplataforma (Android e iOS)** que permita ao usuário gerenciar cadastros, adoções e eventos de forma intuitiva e responsiva. |
| **Justificativa** | Facilita o acesso e amplia o alcance do sistema, garantindo conveniência e adesão por parte dos tutores. |
| **Origem** | [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) / [HU013](../../../modelagem/gravacoes/pedro/historias.md) / [BL005](../../../modelagem/gravacoes/pedro/backlog.md) / [BL006](../../../modelagem/gravacoes/pedro/backlog.md)|
| **Critério de Ajuste** | O aplicativo deve ser executável com tempo de carregamento inferior a **5 segundos** em dispositivos de desempenho médio. |
| **Dependências** | Framework de desenvolvimento multiplataforma (como Flutter ou React Native); infraestrutura de autenticação e backend. |
| **Prioridade** | Alta (9/10) |
| **Conflitos** | O aumento da usabilidade pode afetar a segurança caso as autenticações sejam simplificadas demais. |
| **História Relacionada** | HU013 – Como usuário do SINPatinhas, quero acessar um aplicativo móvel intuitivo, para gerenciar meus cadastros, acompanhar adoções e visualizar campanhas e eventos. |
| **Softgoals Relacionados** | Usabilidade (MAKE ++), Desempenho (HELP +), Segurança (HURT -), Mobilidade (MAKE ++) |
| **Propagação de Impactos** | A priorização da **usabilidade** e **mobilidade** melhora a experiência do usuário, mas pode gerar riscos à **segurança** se a autenticação não for suficientemente robusta. |

---

### **CNFR06 – Acesso Offline à Ficha do Próprio Animal**  
*Autoria: Pedro Gomes*  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR06 |
| **Cartão de Especificação** | Disponibilidade e Confiabilidade |
| **Descrição** | O aplicativo deve permitir que o tutor **acesse a ficha do animal mesmo sem conexão à internet**, incluindo informações de identificação, vacinação e contato. |
| **Justificativa** | Garante o acesso às informações essenciais em locais sem conexão, aumentando a confiabilidade e autonomia do tutor. |
| **Origem** | [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) / [#HU014](../../modelagem/gravacoes/pedro/historias.md)/ [#BL005](../../modelagem/gravacoes/pedro/backlog.md) / [#BL006](../../modelagem/gravacoes/pedro/backlog.md) |
| **Critério de Ajuste** | O sistema deve armazenar localmente a ficha do animal com sincronização automática ao restabelecer a conexão. |
| **Dependências** | Banco de dados local (SQLite, Realm ou IndexedDB) e sistema de sincronização segura. |
| **Prioridade** | Alta (8/10) |
| **Conflitos** | O armazenamento local pode impactar a **segurança** se os dados não forem criptografados. |
| **História Relacionada** | HU014 – Como tutor de um animal, quero acessar a ficha do meu animal mesmo sem internet, para consultar informações importantes, como vacinas e identificação.|
| **Softgoals Relacionados** | Disponibilidade (MAKE ++), Confiabilidade (HELP +), Segurança (HURT -), Usabilidade (HELP +) |
| **Propagação de Impactos** | O aumento da **disponibilidade** e **confiabilidade** melhora a experiência do usuário, mas exige **criptografia local** para não comprometer a **segurança** dos dados. |

---

## Análise de Interdependências  

As interdependências entre os softgoals dos artefatos CNFR03 e CNFR04 foram mapeadas para avaliar como as decisões sobre **mobilidade** e **acesso offline** influenciam a **usabilidade**, **segurança**, **desempenho** e **confiabilidade** do sistema.

**Tabela 1 – Relações entre Softgoals CNFR03 e CNFR04**

| **Softgoal 1** | **Softgoal 2** | **Tipo de Contribuição** | **Descrição do Impacto** |
|----------------|----------------|---------------------------|--------------------------|
| Usabilidade (CNFR05) | Mobilidade (CNFR05) | HELP (+) | O aumento da mobilidade melhora a experiência de uso em diferentes dispositivos. |
| Disponibilidade (CNFR06) | Confiabilidade (CNFR06) | HELP (+) | O acesso offline reforça a confiança do usuário no sistema. |
| Segurança (CNFR06) | Usabilidade (CNFR05) | HURT (-) | A implementação de criptografia local pode dificultar a navegação e aumentar o tempo de resposta. |
| Desempenho (CNFR05) | Disponibilidade (CNFR06) | HELP (+) | Uma boa otimização do aplicativo garante carregamento rápido mesmo em modo offline. |

---

## Agradecimentos  

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Pedro Gomes**, com base nos fundamentos de **Serrano & Serrano (2025)** e **Chung et al. (2000)**.

---

## Tabela de Contribuições  

| **Softgoal** | **Contribuição Positiva (HELP / MAKE)** | **Contribuição Negativa (HURT / BREAK)** |
|---------------|-----------------------------------------|------------------------------------------|
| Usabilidade | ++ | - |
| Mobilidade | ++ | — |
| Disponibilidade | ++ | — |
| Confiabilidade | + | — |
| Segurança | — | - |
| Desempenho | + | — |

---

## Agradecimentos  

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Pedro Gomes**, com base nos fundamentos de **Serrano & Serrano (2025)** e **Chung et al. (2000)**.

---

## Tabela de Contribuições  

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Pedro Gomes** | 100% | Autor da página NFR Framework |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 20/10/2025 | Criação dos artefatos CNFR05 e CNFR06 | Pedro Gomes | Antonio |

---

## Referência Bibliográfica  

<a id="REF1"></a>[1] SERRANO, M.; SERRANO, M. *Requisitos – Aula 17*. Material de aula, Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[2] CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Kluwer Academic Publishers, 2000.  
<a id="REF3"></a>[3] PRESSMAN, R. S.; MAXIM, B. R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  
<a id="REF4"></a>[4] SOMMERVILLE, Ian. *Engenharia de Software.* 10ª ed. Pearson, 2019.

---
