# NFR Framework – Projeto SinPatinhas

## Introdução

O **NFR Framework** é uma metodologia usada para representar e analisar **Requisitos Não Funcionais (RNFs)** de um sistema.  
No contexto do **SinPatinhas**, ele auxilia a equipe a identificar, registrar e avaliar as decisões de projeto que influenciam aspectos como **usabilidade**, **segurança**, **confiabilidade** e **desempenho** da aplicação.  

O uso do NFR Framework permite que cada decisão de desenvolvimento seja documentada de forma lógica e visual, garantindo rastreabilidade e justificativa para as escolhas técnicas feitas durante o ciclo de vida do sistema <a id="anchor_1" href="#REF1">[1]</a>.  

---

## Artefatos e Gravações Unitários

| Participante | Página Específica |
|---------------|------------------|
| Antonio Carvalho | [Página específica da modelagem do NFR-framework](/modelagem/gravacoes/antonio/nfr_frame.md) |

---

## Softgoal Interdependency Graph (SIG)

O **Softgoal Interdependency Graph (SIG)** é um gráfico que representa os **softgoals** — objetivos que não possuem critérios de satisfação precisamente definidos.  
No **SinPatinhas**, o SIG permite visualizar como cada requisito não funcional se relaciona com outros e quais decisões contribuem positiva ou negativamente para sua satisfação <a id="anchor_2" href="#REF2">[2]</a>.

### Tipos de Softgoal

Os **softgoals** são divididos em três tipos principais:

- **NFR Softgoal:** representa um requisito não funcional, como “Usabilidade” ou “Segurança”.
- **Softgoal de Operacionalização:** detalha como o NFR será alcançado, por exemplo, “Autenticação via senha segura”.
- **Softgoal de Afirmação:** representa justificativas ou decisões do projeto, como “Uso de autenticação por senha é suficiente para o público-alvo”.

Esses tipos auxiliam o time do **SinPatinhas** a organizar visualmente as decisões relacionadas aos requisitos não funcionais.

### Interdependências entre Softgoals

Os softgoals no NFR Framework podem se **relacionar entre si** por meio de **decomposições** e **contribuições**.

#### Decomposições

As decomposições dividem um softgoal em outros mais específicos.  
Exemplo no **SinPatinhas**:
- “Usabilidade” → “Interface intuitiva”, “Tempo de resposta rápido”, “Feedback visual”.

#### Contribuições

As contribuições indicam como um softgoal influencia outro, podendo ser positivas ou negativas:

| Tipo de Contribuição | Significado                                                                 |
|----------------------|------------------------------------------------------------------------------|
| **MAKE (++)**        | Contribuição fortemente positiva.                                            |
| **HELP (+)**         | Contribuição parcialmente positiva.                                          |
| **HURT (-)**         | Contribuição parcialmente negativa.                                          |
| **BREAK (--)**       | Contribuição fortemente negativa.                                            |
| **UNKNOWN (?)**      | Contribuição de impacto indefinido.                                          |
| **AND / OR**         | Representa dependência lógica entre softgoals descendentes e ascendentes.    |

Fonte:

Essas relações ajudam o time do **SinPatinhas** a entender como decisões como “armazenar imagens de animais em nuvem” podem afetar tanto **desempenho** quanto **segurança**.

### Procedimento de Avaliação

O **procedimento de avaliação** do NFR Framework determina o nível de satisfação de cada softgoal a partir das decisões tomadas no projeto.  
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

## Tabela de Contribuições

| **Nome**            | **Contribuição (%)** | **Função**                                 |
|----------------------|----------------------|--------------------------------------------|
| **Antonio Carvalho** | 100%                 | Autor da página de Especificação Suplementar |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 10/10/2025 | Criação da página NFR Framework | Antonio |         |

## Referência Bibliográfica

SILVA, Reinaldo Antônio. NFR4ES: Um Catálogo de Requisitos Não-Funcionais para Sistemas Embarcados. Centro de Informática UFPE, Recife, p. 30, 2019. Disponível em: https://repositorio.ufpe.br/handle/123456789/34150. Acesso em: 10/10/2025.


---