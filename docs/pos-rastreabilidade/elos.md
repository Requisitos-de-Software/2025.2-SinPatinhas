# Elos de Rastreabilidade de Toranzo – Projeto SinPatinhas

## Introdução

Este artefato tem como objetivo **demonstrar a ligação entre os requisitos levantados para o sistema SinPatinhas e as funcionalidades que foram implementadas na aplicação**. 

Além disso, ele **evidencia como cada requisito serviu de base para a criação dos artefatos desenvolvidos ao longo do projeto, como diagramas, protótipos e documentos de validação**. A matriz de rastreabilidade apresenta essas conexões, permitindo visualizar de forma clara a relação entre os requisitos, suas implementações e os demais componentes do sistema.

---

## Níveis de Informação de Toranzo

O modelo de **Toranzo (2002)**, conforme interpretado por Sayão e Leite <a id="anchor_1" href="#REF1">[1]</a>, organiza as informações rastreadas em quatro **níveis de informação**:

1. **Ambiental** – envolve o contexto externo (leis, normas, fatores socioambientais) que influencia o projeto.  
2. **Organizacional** – abrange a missão, metas e padrões da organização, que impactam os requisitos do sistema.  
3. **Gerencial** – relaciona tarefas, papéis e responsabilidades dentro do projeto, facilitando o acompanhamento de atividades.  
4. **Desenvolvimento** – engloba os artefatos técnicos do ciclo de vida (documentos, diagramas, código, casos de teste, etc.).  

Essa estrutura hierárquica permite ao Projeto SinPatinhas estabelecer uma rastreabilidade completa — desde as condições externas até os elementos técnicos internos.

---

## Elos de Rastreabilidade de Toranzo

Toranzo propõe um **meta-modelo** que define os principais **tipos de elos** de rastreabilidade, também descritos por Sayão e Leite <a id="anchor_4" href="#REF1">[4]</a>. São eles:

- **Satisfação** – indica que um requisito é atendido por determinado componente do sistema.  
- **Recurso** – expressa dependências entre elementos que compartilham recursos (tempo, hardware, etc.).  
- **Responsabilidade** – associa artefatos e tarefas a pessoas ou papéis específicos.  
- **Representação** – vincula diferentes formas de modelar um mesmo requisito (por exemplo, texto ↔ diagrama UML).  
- **Alocado** – mostra a distribuição de requisitos em subsistemas ou módulos.  
- **Agregação** – indica composição entre elementos.  

Esses elos permitem traçar com clareza as relações entre requisitos, seus responsáveis e os artefatos derivados, oferecendo transparência e controle durante o desenvolvimento do **SinPatinhas**.

---

## Metodologia de Construção

A construção da matriz seguiu um processo em quatro etapas, conforme o **modelo de rastreabilidade descrito por Sayão e Leite <a href="#REF1">[1]</a>**:

1. **Definição** – identificação das entidades e tipos de elos a rastrear, com base nas necessidades do projeto.  
2. **Registro dos Elos** – documentação dos vínculos entre requisitos, artefatos e responsáveis.  
3. **Recuperação** – análise dos relacionamentos para fins de validação, impacto e cobertura.  
4. **Evolução** – atualização contínua da matriz conforme o sistema evolui e novos requisitos são adicionados.  

O uso de planilhas e ferramentas de controle de versão complementa o processo, garantindo rastreabilidade entre requisitos e código-fonte, além de facilitar auditorias e revisões internas.


<font><p style="text-align: center">- Estrutura do cartão utilizado para elaboração dos elos.</p></font>

| Requisito Analisado | Classificação do Artefato Analisado |
|---------------------|--------------------------------------|
| **Tipo de Elo**     | **Artefato Relacionado**             |
| Satisfação          |                 -                     |
| Recurso             |                  -                    |
| Representação       |                   -                   |
| Alocado             |                    -                  |
| Agregação           |                    -                  |

---

## Artefatos Unitários

| **Participantes**    | **Página Específica**                                 | **Descrição**    |
|----------------------|-------------------------------------------------------|------------------|
| **Antonio Carvalho** | [#EL001](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL001**: #RF017 - Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos)        |
|                      | [#EL002](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL002**: #RF018 - Envio de notificações/campanhas e publicação de materiais educativos        |
|                      | [#EL003](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL003**: #RFNI005 - Informações sobre horários de funcionamento de clínicas/hospitais        |
|                      | [#EL004](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL004**: #RNF014 - Integração com clínicas, ONGs e pet shops        |
|                      | [#EL005](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL005**: #RFNI016 - Sistema de adoção de animais (facilitar a adoção de animais)        |
|                      | [#EL006](../pos-rastreabilidade/unitarios/antonio/elos.md) | **EL006**: #RFNI018 - Integração direta com parceiros (clínicas, ONGs, pet shops)        |
| **Leticia**          | [#EL007](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL008](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL009](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL010](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL011](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL012](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Pedro Gomes**      | [#EL013](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL014](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL015](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL016](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL017](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL018](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Mateus Negrini**   | [#EL019](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL019	Satisfação	CNFR07	RNF021   |
|                      | [#EL020](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL020	Recurso	BL008	RFNI021      |
|                      | [#EL021](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) | EL021	Representação	CEN07	UC007|
|                      | [#EL022](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) | EL022	Alocado	HU019	BL007        |
|                      | [#EL023](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) | EL023	Agregação	RFNI020	RFNI021  |
|                      | [#EL024](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) | EL024	Satisfação	CNFR08	RNF023   |
| **Isaac Menezes**    | [#EL025](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL026](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      | [#EL027](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL028](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL029](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL030](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Heloisa Silva**    | [#EL031](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      | [#EL032](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      | [#EL033](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL034](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL035](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      | [#EL036](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |

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

## Referências Bibliográficas

<a id="REF1"></a>

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.

<a id="REF2"></a>

> [2] Toranzo, M.; Castro, J. & Mello, E. **Uma proposta para melhorar o rastreamento de requisito**. In: WER02 - Workshop em Engenharia de Requisitos, Valencia, Espanha, Novembro 11-12, 2002. Anais. pp. 194-209.---

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 28/10/2025 | Criação da página de elo | Antonio Carvalho |  |
| 1.1 | 28/10/2025 | Adição do modelo de cartão | Heloisa |  |

---