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

## Benefícios da Matriz e dos Elos

**Verificação da Alocação:** A avaliação dos elos de rastreabilidade para artefatos de desenho e implementação ajuda a identificar requisitos que ainda não foram alocados ou implementados.
**Correção de Defeitos:** A análise dos elos pode indicar que a origem de um defeito não está no código, mas em outro artefato que deve ser revisto, e orienta a verificação/correção dos casos de teste.
**Análise de Impacto:** Os elos facilitam a identificação dos componentes e requisitos relacionados afetados por mudanças em um requisito ou por inclusão de novos requisitos.
**Gerenciamento de Riscos:** A rastreabilidade apoia a identificação dos artefatos atingidos por cada fator de risco, auxiliando na elaboração de estratégias de mitigação.

---

<a id="tabela_artefatos"></a>
## Artefatos Unitários

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|--------------|------------------|------------------|
| **Antonio Carvalho** | [EL001](#el001) | [#EL001](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL001**: RF017 - Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos) – *Relacionado à HU003 (Gestão de Perfis de Usuário)* |
|                      | [EL002](#el002)  | [#EL002](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL002**: RF018 - Envio de notificações/campanhas e publicação de materiais educativos – *Relacionado à HU004 (Envio de Notificações e Campanhas)* |
|                      | [EL003](#el003) | [#EL003](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL003**: RFNI005 - Informações sobre horários de funcionamento de clínicas/hospitais – *Relacionado à HU005 (Consulta de Clínicas e Horários)* |
|                      | [EL004](#el004) | [#EL004](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL004**: RNF014 - Integração com clínicas, ONGs e pet shops – *Relacionado à HU006 (Integração com Entidades Parceiras)* |
|                      | [EL005](#el005) | [#EL005](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL005**: RFNI016 - Sistema de adoção de animais (facilitar a adoção de animais) – *Relacionado à HU007 (Sistema de Adoção de Animais)* |
|                      | [EL006](#el006) | [#EL006](../pos-rastreabilidade/unitarios/antonio/elos.md) | #**EL006**: RFNI018 - Integração direta com parceiros (clínicas, ONGs, pet shops) – *Relacionado à HU008 (Integração Direta com Parceiros)* |
| **Letícia Paiva**    | [EL007](#el007) | [#EL007](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL007**: RFNI016 - Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais) – *Relacionado à HU001 (Sistema de Adoção)* |
|                      | [EL008](#el008) | [#EL008](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL008**: RF018 - Envio de notificações/campanhas e publicação de materiais educativos – *Relacionado à HU002 (Alertas e Notificações Automáticas)* |
|                      | [EL009](#el009) | [#EL009](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL009**: RF025 - Compartilhamento de informações com familiares – *Relacionado à HU003 (Compartilhamento de Informações com Familiares)* |
|                      | [EL010](#el010) | [#EL010](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL010**: RF026 - Notificações de vacinas futuras/atrasadas – *Relacionado à HU004 (Notificações de Vacinas Futuras/Atrasadas)* |
|                      | [EL011](#el011) | [#EL011](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL011**: RF027 - Registro da localização do animal ou tutor – *Relacionado à HU005 (Registro da Localização do Animal ou Tutor)* |
|                      | [EL012](#el012) | [#EL012](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | #**EL012**: RF031 - Registro de informações detalhadas do animal – *Relacionado à HU006 (Registro Detalhado de Informações do Animal)* |
| **Pedro Gomes**      |  | [#EL013](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL014](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL015](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL016](../pos-rastreabilidade/unitarios/pedro/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL017](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL018](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Mateus Negrini**   |  | [#EL019](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL019	Satisfação	CNFR07	RNF021   |
|                      |  | [#EL020](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL020	Recurso	BL008	RFNI021      |
|                      |  | [#EL021](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL021	Representação	CEN07	UC007|
|                      |  | [#EL022](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL022	Alocado	HU019	BL007        |
|                      |  | [#EL023](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL023	Agregação	RFNI020	RFNI021  |
|                      |  | [#EL024](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md)  | EL024	Satisfação	CNFR08	RNF023   |
| **Isaac Menezes**    |  | [#EL025](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL026](../pos-rastreabilidade/unitarios/isaac/matriz_geral.md)   | DESCRICAO        |
|                      |  | [#EL027](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL028](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL029](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL030](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
| **Heloisa Silva**    |  | [#EL031](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL032](../pos-rastreabilidade/unitarios/heloisa/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL033](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL034](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL035](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |
|                      |  | [#EL036](../pos-rastreabilidade/unitarios/leticia/matriz_geral.md) | DESCRICAO        |

---

## Artefatos

---

<a id="el001"></a>

### #**EL001**: RF017 - Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos)

<font><p style="text-align: center">**Tabela 2** - Elos para o requisito #RF017.</p></font>

| **RF017** | **Classificação do Artefato Analisado** |
|------------|-----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES001](../../../modelagem/gravacoes/antonio/especificacao.md) — Representa a evidência de que o requisito é contemplado na especificação suplementar, consolidando o vínculo de origem. |
| **Recurso** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md) — O cenário fornece o contexto necessário para o atendimento funcional do requisito. |
| **Representação** | – |
| **Alocado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [LX004](../../../modelagem/gravacoes/antonio/lexicos.md) — Artefatos de modelagem que representam a funcionalidade em nível de desenvolvimento. |
| **Agregação** | [HU003](../../../modelagem/gravacoes/antonio/historias.md) — História de usuário que consolida o comportamento esperado do requisito. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


---

<a id="el002"></a>

### #**EL002**: RF018 - Envio de notificações/campanhas e publicação de materiais educativos

<font><p style="text-align: center">**Tabela 3** - Elos para o requisito #RF018.</p></font>

| **RF018** | **Classificação do Artefato Analisado** |
|------------|-----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES002](../../../modelagem/gravacoes/antonio/especificacao.md), [LX007](../../../modelagem/gravacoes/antonio/lexicos.md) — Especificações e léxicos que sustentam semanticamente o requisito. |
| **Recurso** | [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md) — Contextualiza a comunicação e os fluxos de envio de campanhas. |
| **Representação** | – |
| **Alocado** | [UC002](../../../modelagem/gravacoes/antonio/caso_de_uso.md) — Modela as interações associadas ao envio de notificações. |
| **Agregação** | [HU004](../../../modelagem/gravacoes/antonio/historias.md) — História de usuário vinculada à entrega operacional da funcionalidade. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


---

<a id="el003"></a>

### #**EL003**: RFNI005 - Informações sobre horários de funcionamento de clínicas/hospitais

<font><p style="text-align: center">**Tabela 4** - Elos para o requisito #RFNI005.</p></font>

| **RFNI005** | **Classificação do Artefato Analisado** |
|--------------|----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES002](../../../modelagem/gravacoes/antonio/especificacao.md) — Documento que consolida a necessidade informacional do requisito. |
| **Recurso** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md) — Cenário que demonstra o uso da informação no fluxo de operação. |
| **Representação** | – |
| **Alocado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [LX002](../../../modelagem/gravacoes/antonio/lexicos.md) — Elementos de modelagem que formalizam o requisito. |
| **Agregação** | [HU005](../../../modelagem/gravacoes/antonio/historias.md) — História vinculada à funcionalidade de exibição de horários. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


---

<a id="el004"></a>

### #**EL004**: RNF014 - Integração com clínicas, ONGs e pet shops

<font><p style="text-align: center">**Tabela 5** - Elos para o requisito #RNF014.</p></font>

| **RNF014** | **Classificação do Artefato Analisado** |
|-------------|----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES002](../../../modelagem/gravacoes/antonio/especificacao.md) — Evidência da necessidade de interoperabilidade entre sistemas. |
| **Recurso** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md) — Define o fluxo de integração entre parceiros. |
| **Representação** | – |
| **Alocado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [LX006](../../../modelagem/gravacoes/antonio/lexicos.md) — Formaliza as interfaces e atores envolvidos na integração. |
| **Agregação** | [HU006](../../../modelagem/gravacoes/antonio/historias.md) — História que reflete a execução prática da integração. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


---

<a id="el005"></a>

### #**EL005**: RFNI016 - Sistema de adoção de animais (facilitar a adoção de animais)

<font><p style="text-align: center">**Tabela 6** - Elos para o requisito #RFNI016.</p></font>

| **RFNI016** | **Classificação do Artefato Analisado** |
|--------------|----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES001](../../../modelagem/gravacoes/antonio/especificacao.md) — A especificação confirma a implementação da funcionalidade de adoção. |
| **Recurso** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md) — Contextualiza o fluxo de adoção no ambiente operacional. |
| **Representação** | – |
| **Alocado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [LX003](../../../modelagem/gravacoes/antonio/lexicos.md) — Representam a interação e semântica do processo de adoção. |
| **Agregação** | [HU007](../../../modelagem/gravacoes/antonio/historias.md) — História que reflete o comportamento do usuário no ato da adoção. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


---

<a id="el006"></a>

### #**EL006**: RFNI018 - Integração direta com parceiros (clínicas, ONGs, pet shops)

<font><p style="text-align: center">**Tabela 7** - Elos para o requisito #RFNI018.</p></font>

| **RFNI018** | **Classificação do Artefato Analisado** |
|--------------|----------------------------------------|
| **Tipos de Elo** | **Artefatos Relacionados** |
| **Satisfação** | [ES003](../../../modelagem/gravacoes/antonio/especificacao.md) — Reforça o vínculo da interoperabilidade como atributo essencial do sistema. |
| **Recurso** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md) — Contextualiza as trocas de dados entre sistemas parceiros. |
| **Representação** | – |
| **Alocado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [LX001](../../../modelagem/gravacoes/antonio/lexicos.md) — Modelam a integração direta e os termos técnicos associados. |
| **Agregação** | [HU008](../../../modelagem/gravacoes/antonio/historias.md) — Representa a instância de uso do requisito em nível narrativo. |

**Autor:** Antonio Carvalho  

[Voltar para tabela de artefatos](#tabela_artefatos)


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
| 1.1 | 28/10/2025 | Adição do modelo de cartão | Heloisa | Antonio |

---