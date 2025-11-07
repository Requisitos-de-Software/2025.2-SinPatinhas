# Elos de Rastreabilidade de Toranzo - Antonio Carvalho

## Metodologia de Aplicação dos Elos

Cada elo aqui documentado segue a **estrutura formal de rastreabilidade de Toranzo (2002)**, associando requisitos a seus artefatos correlatos de modelagem e validação.  
A abordagem adota princípios semelhantes à aplicada no modelo **LigaMagic**, garantindo:

- **Rastreabilidade bidirecional**, com elos *Backward-from* (ligando requisitos às suas fontes) e *Forward-from* (ligando-os a artefatos derivados de modelagem e implementação);  
- **Preservação de evidências** — cada requisito possui relação explícita com artefatos de origem (cenários, especificações) e destino (casos de uso, léxicos, histórias);  
- **Justificativa conceitual** — os elos de *Satisfação*, *Recurso*, *Representação*, *Alocação* e *Agregação* seguem a tipificação apresentada por **Sayão & Leite (2005)**, garantindo que cada vínculo represente corretamente o tipo de dependência existente.

A Tabela 1 resume a estrutura aplicada:

<p style="text-align: center"><b>Tabela 1:</b> Modelo de Elo de Rastreabilidade aplicado.</p>

| **Campo** | **Descrição** |
|------------|---------------|
| **Descrição do requisito** | Identificação formal do requisito (RFx, RNFx) e seu propósito funcional. |
| **Classificação do artefato analisado** | Nível de informação conforme meta-modelo de Toranzo (Ambiental, Organizacional, Gerencial ou Desenvolvimento). |
| **Tipos de Elo** | Relações rastreáveis entre o requisito e os artefatos correlatos, conforme classificação de Toranzo. |
| **Artefatos Relacionados** | Elementos de modelagem associados, garantindo a rastreabilidade forward e backward. |

<p style="text-align: left">Fonte: Estrutura adaptada de Sayão e Leite (2005) e Toranzo (2002), aplicada por Antonio Carvalho (2025).</p>

---

<a id="el001"></a>

### **EL001**: #RF017 - Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos)

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

---

<a id="el002"></a>

### **EL002**: #RF018 - Envio de notificações/campanhas e publicação de materiais educativos

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

---

<a id="el003"></a>

### **EL003**: #RFNI005 - Informações sobre horários de funcionamento de clínicas/hospitais

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

---

<a id="el004"></a>

### **EL004**: #RNF014 - Integração com clínicas, ONGs e pet shops

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

---

<a id="el005"></a>

### **EL005**: #RFNI016 - Sistema de adoção de animais (facilitar a adoção de animais)

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

---

<a id="el006"></a>

### **EL006**: #RFNI018 - Integração direta com parceiros (clínicas, ONGs, pet shops)

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

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.  
A base conceitual foi desenvolvida com base nos fundamentos de **Sayão e Leite (2005)** e **Toranzo (2002)**, conforme aplicado ao contexto do projeto **SinPatinhas (2025)**.  

---

## Referências Bibliográficas

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.  
> [2] TORANZO, M.; CASTRO, J.; MELLO, E. **Uma proposta para melhorar o rastreamento de requisito**. In: *WER02 - Workshop em Engenharia de Requisitos*, Valência, Espanha, 2002. pp. 194–209.  
> [3] SERRANO, Milene; SERRANO, Maurício. *Requisitos – Aula 26: Rastreabilidade e Meta-modelos.* Universidade de Brasília, 2025.

---

# Histórico de Versões

| **Data** | **Versão** | **Descrição** | **Autor** | **Revisor** |
|:--:|:--:|:--|:--:|:--:|
| 28/10/2025 | 1.0 | Criação da documentação e estruturação dos elos de rastreabilidade conforme o meta-modelo de Toranzo | Antonio Carvalho | – |
| 07/11/2025 | 1.1 | Organizando estrutura | Antonio Carvalho | – |
