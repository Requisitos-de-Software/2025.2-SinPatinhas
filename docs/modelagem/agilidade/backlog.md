# Backlog – Projeto SinPatinhas

## Introdução

O **Product Backlog** é uma **lista dinâmica e priorizada de funcionalidades**, criada e mantida pelo **Product Owner**, que representa tudo o que se deseja implementar no sistema <a id="anchor_1" href="#REF1">[1]</a>.  

O backlog evolui continuamente, sendo atualizado à medida que o conhecimento sobre o produto e seus usuários aumenta.  
Cada item do backlog — conhecido como **Product Backlog Item (PBI)** — representa uma **feature** ou **história de usuário** que agrega valor ao cliente <a id="anchor_2" href="#REF2">[2]</a>.

![Backlog_1](../../assets/PDFs/backlog/backlog_1.png)
![Backlog_2](../../assets/PDFs/backlog/backlog_2.png)

*SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.*

---

## Estrutura Hierárquica

Para melhor organização, o backlog do **SinPatinhas** foi estruturado nos seguintes níveis de abstração <a id="anchor_3" href="#REF1">[1]</a>:

- **Temas:** agrupamentos de funcionalidades relacionadas;  
- **Épicos:** grandes objetivos do sistema;  
- **Histórias de Usuário (PBIs):** unidades menores, detalhadas e mensuráveis, que podem ser concluídas em uma Sprint.

Para a criação do backlog, foi utilizado como base dois artefatos produzidos: as **Histórias de Usuário** <a id="anchor_4" href="#REF2">[2]</a> e a metodologia de **priorização MoSCoW**.

![Backlog_3](../../assets/PDFs/backlog/backlog_4.png)

*SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.*

---

## Metodologia de Construção

A elaboração do backlog baseou-se nos seguintes princípios do **Scrum** e **SAFe (Scaled Agile Framework)** <a id="anchor_6" href="#REF1">[1]</a>:

1. **Priorização contínua:** o Product Owner define os itens mais importantes;  
2. **Refinamento progressivo:** os PBIs são detalhados e decompostos em histórias menores;  
3. **Estimativa colaborativa:** o esforço de cada item é estimado pela equipe;  
4. **Transparência e rastreabilidade:** todos os itens são vinculados aos requisitos e histórias de usuário correspondentes.  

![Backlog_5](../../assets/PDFs/backlog/backlog_5.png)
*PRESSMAN, R. S.; MAXIM, B. R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.*



A priorização utilizou o método **MoSCoW**, que classifica os itens em:

- **Must have (Essencial)** – indispensáveis para o funcionamento básico;  
- **Should have (Importante)** – desejáveis, mas não críticos;  
- **Could have (Desejável)** – opcionais, caso haja tempo;  
- **Won’t have (Postergado)** – não planejados para o ciclo atual.  

---

## Modelo de Backlog

#### Definição de tema

Ao analisar as histórias de usuário criadas, organize os temas <a id="anchor_8" href="#REF1">[1]</a>.

#### Épicos

Após a definição dos temas, eles são divididos em épicos e, dessa forma, o nível de abstração das atividades que vão ser realizadas diminui <a id="anchor_9" href="#REF1">[1]</a>.

#### Histórias de Usuário

As histórias de usuário especificam ainda mais os épicos, elas apresentam descrições de uma determinada funcionalidade, geralmente seguem a forma *“Eu, como ___, desejo ___, para ___.”* <a id="anchor_10" href="#REF1">[1]</a>.

#### Exemplo de tabela para organização do backlog

**Tabela 1 – Histórias de usuário classificadas com o Épico X**

| **Identificação** | **História do usuário** | **Requisito do Backlog** | **Prioridade (MoSCoW)** | | **Status** | **Responsável** | **Rastreabilidade** |
|--------------------|--------------------------|--------------------------|---------------------------|----------------------|------------|------------|------------|
| BL00X | História de usuário utilizada | Breve descrição do item | Nome da funcionalidade | Must/Should/Could/Won’t | Status | Responsável pelo item | Código do requisito |

---

<a id="tabela_artefatos"></a>
## Artefatos e gravações unitários 

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|-----------------------|------------------|------------------|
| **Antonio Carvalho** | [BL001](#bl001) | [#BL001](../../modelagem/gravacoes/antonio/backlog.md) | Exibição de horários de funcionamento |
|                      | [BL002](#bl002) | [#BL002](../../modelagem/gravacoes/antonio/backlog.md) | Integração com ONGs, clínicas e pet shops |
|                      | [BL015](#bl015) | [#BL015](../../modelagem/gravacoes/antonio/backlog.md) | Integração com ONGs, clínicas e pet shops |
|                      | [BL016](#bl016) | [#BL016](../../modelagem/gravacoes/antonio/backlog.md) | Integração com ONGs, clínicas e pet shops |
| **Leticia** | [BL003](#bl003)  | [#BL003](..2../modelagem/gravacoes/leticia/backlog.md) | Sistema de Adoção |
|                      | [BL004](#bl004) | [#BL004](../../modelagem/gravacoes/leticia/backlog.md) | Alertas e Notificações Automáticas |
| **Pedro Gomes** |  | [#BL005](../../modelagem/gravacoes/pedro/backlog.md) | Desenvolvimento do aplicativo móvel |
|                      |  | [#BL006](../../modelagem/gravacoes/pedro/backlog.md) | Interface responsiva e intuitiva |
|                      |  | [#BL011](../../modelagem/gravacoes/pedro/backlog.md) | Acesso offline à ficha do próprio animal |
|                      |  | [#BL012](../../modelagem/gravacoes/pedro/backlog.md) | Mensagens de aviso e confirmação offline |
| **Mateus Negrini**   |  | [#BL007](../../modelagem/gravacoes/mateus/backlog.md) | Acesso à área de instruções integradas |
|                      |  | [#BL008](../../modelagem/gravacoes/mateus/backlog.md) | Notificação periódica de atualização de dados e fotos |
| **Isaac Menezes** |  | [#BL009](../../modelagem/gravacoes/isaac/backlog.md) | Média de avaliações da clínica/hospital   |
|                   |  | [#BL010](../../modelagem/gravacoes/isaac/backlog.md) | Média de avaliação do médico |
| **Heloisa Silva** |  | [#BL011](../../modelagem/gravacoes/heloisa/backlog.md) | Mapa interativo |
|                      |  | [#BL012](../../modelagem/gravacoes/heloisa/backlog.md) | Filtro |

---

## Artefatos

### Tema: **Integração e Serviços Parceiros**

<a id="bl001"></a>
<a id="bl002"></a>

### Épico: **Gestão de Clínicas e Parceiros**
<a id="bl015"></a>
<a id="bl016"></a>

**Tabela 1 – Itens de backlog derivados de requisitos não implementados**
*Autoria: Antonio Carvalho*  


| **Identificação** | **Item do Backlog** | **Descrição** | **Prioridade (MoSCoW)** | **Status** | **Responsável** | **Rastreabilidade** |
|--------------------|--------------------|----------------|---------------------------|-------------|------------------|---------------------|
| #BL001  | Exibição de horários de funcionamento | Exibir automaticamente os horários de funcionamento das clínicas e hospitais parceiros, integrando dados de disponibilidade. | Should have | Não iniciado | Antonio Carvalho | [RFNI005](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni005) / [HU005](../../modelagem/gravacoes/antonio/historias.md#hu005--exibição-de-horários-de-clínicas-parceiras) | 
| #BL002 | Integração com ONGs, clínicas e pet shops | Implementar integração via API entre o SinPatinhas e os sistemas externos de parceiros para sincronização de dados de animais, adoções e atendimentos. | Must have | Não iniciado | Antonio Carvalho | [RFNI018](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) / [HU006](../../modelagem/gravacoes/antonio/historias.md#hu006--integração-direta-com-parceiros) / [HU008](../../modelagem/gravacoes/antonio/historias.md#hu008--sincronização-de-dados-entre-ongs-e-clínicas) |
| #BL015 | Desempenho em Consultas Públicas | Garantir que consultas públicas do sistema retornem resultados em até 2 segundos, exibindo mensagens informativas em casos de lentidão, conforme requisitos de desempenho. | Must have | Não iniciado | Antonio Carvalho | [RNF004](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) / [HU041](../../modelagem/gravacoes/antonio/historias.md#hu041--desempenho-em-consultas-públicas) |
| #BL016 | Integração Direta com Parceiros | Implementar integração via APIs seguras (REST) com sistemas de parceiros como clínicas, ONGs e pet shops, utilizando autenticação por tokens e padrões JSON/XML. | Must have | Não iniciado | Antonio Carvalho | [RNFNI003](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) / [HU044](../../modelagem/gravacoes/antonio/historias.md#hu044--integração-direta-com-parceiros-clínicas-ongs-e-pet-shops) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="bl001"></a>
<a id="bl002"></a>

**Tabela 2 – Itens de backlog derivados de requisitos não implementados**  
*Autoria: Letícia Paiva*

| **Identificação** | **Item do Backlog** | **Descrição** | **Prioridade (MoSCoW)** | **Status** | **Responsável** | **Rastreabilidade** |
|--------------------|--------------------|----------------|---------------------------|-------------|------------------|---------------------|
| BL001 | Sistema de Adoção | Implementar módulo que permita visualizar animais disponíveis para adoção, com filtros de busca e solicitação direta via ONG cadastrada. | Must have | Não iniciado | Letícia Paiva | [RFNI016](/elicitacao/tecnicas_elicitacao/requisitos_elicitados?id=rfni016) / [HU001](/modelagem/gravacoes/leticia/historias?id=hu001) |
| BL002 | Alertas e Notificações Automáticas | Implementar sistema de alertas automáticos para informar usuários sobre status de adoção, lembretes de vacinação e atualizações cadastrais. | Should have | Não iniciado | Letícia Paiva | [RFNI017](/elicitacao/tecnicas_elicitacao/requisitos_elicitados?id=rfni017) / [HU002](/modelagem/gravacoes/leticia/historias?id=hu002) |


[Voltar para tabela de artefatos](#tabela_artefatos)

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, formatação e padronização técnica do texto**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por **Antonio Carvalho** e **Letícia Paiva**, com base nos fundamentos de **Serrano & Serrano (2025)** <a id="anchor_11" href="#REF1">[1]</a>, **Pressman & Maxim (2021)** <a id="anchor_12" href="#REF2">[2]</a>
 
---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Antonio Carvalho** | 16,6% | Co-autor da página de apresentação de backlog do produto e criador dos artefatos BL001, BL002, BL015, BL016 |
| **Letícia Paiva** | 16,6% | Co-autor da página de apresentação de backlog do produto e criador dos artefatos BL003 e BL004 |

---

## Referências Bibliográficas

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[3] PRESSMAN, R. S.; MAXIM, B. R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|------------|----------------|-------------|--------------|
| 1.0 | 10/10/2025 | Criação da página de backlog | Antonio | Letícia |
| 1.1 | 14/10/2025 | Edição da página de backlog | Antonio | Letícia |
| 1.2 | 19/10/2025 | Edição e elaboração do modelo | Letícia | Antonio |
| 1.3 | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio | Letícia |
