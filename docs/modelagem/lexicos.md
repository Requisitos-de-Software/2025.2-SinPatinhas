# Léxicos – Projeto SinPatinhas

## Introdução

O **léxico** é uma notação utilizada para definir, de forma padronizada, os **termos e expressões** empregados na linguagem do sistema.  
Na **Engenharia de Requisitos**, ele desempenha um papel essencial ao identificar **palavras específicas do domínio de aplicação**, assegurando que todos os envolvidos no projeto compartilhem o mesmo entendimento dos conceitos <a id="anchor_1" href="#REF1">[1]</a>.

Cada termo léxico é composto por dois elementos principais:

- **Noção:** o significado literal do termo, ou aquilo que ele representa no sistema <a id="anchor_2" href="#REF2">[2]</a>.  
- **Impacto:** a consequência prática ou efeito produzido pela utilização desse termo no contexto do projeto.

No **projeto SinPatinhas**, o léxico foi construído com base no modelo do **Léxico Ampliado da Linguagem (LAL)**, categorizando os símbolos conforme suas funções no domínio do sistema:

- **Sujeito:** identifica quem executa as ações no sistema, como **Tutor**, **Veterinário** ou **Órgão Público**.  
- **Verbo:** descreve as ações realizadas, como **Cadastrar**, **Consultar**, **Emitir**, **Atualizar**.  
- **Objeto:** define os elementos manipulados ou gerados pelo sistema, como **Animal**, **Carteirinha**, **Registro Geral do Animal (RGA)**.  
- **Estado:** indica situações específicas do sistema, como **Animal Adotado**, **Animal Perdido** ou **Cadastro Pendente**.

---

## Estrutura para Criação de um Léxico

A criação de um léxico tem como objetivo **padronizar e esclarecer os termos utilizados no sistema**, garantindo um entendimento comum entre os participantes do projeto.  
A tabela a seguir apresenta os componentes utilizados.

**Tabela 1 – Estrutura para Criação de um Léxico**  
*Autoria: Antonio Carvalho*

## Exemplo de Estrutura de Léxico

#### #LX000 - Léxico para #UC00 e #CEN00 (Título descritivo do caso)

| ID        | Noção      | Impacto                                                                 | Classificação | Dicionário         | Rastreamento |
| ---------- | ---------- | ------------------------------------------------------------------------ | ------------- | ------------------ | ------------- |
| LX000-01   | [Termo 1]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-02   | [Termo 2]  | [Descrição do impacto ou efeito do termo no contexto do sistema]        | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-03   | [Termo 3]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-04   | [Termo 4]  | [Descrição do impacto ou efeito do termo no contexto do sistema]        | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-05   | [Termo 5]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |

---

<a id="tabela_artefatos"></a>
## Artefatos e gravações unitários 

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|--------------|------------------|------------------|
| **Antonio Carvalho** | [LX001](#lx001) | [#LX001](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 E #CEN03 - Cadastro de Tutor |
|                      | [LX002](#lx002) | [#LX002](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 e #CEN03 - Consulta de Dados |
|                      | [LX003](#lx003) | [#LX003](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Gerenciamento de Adoções |
|                      | [LX004](#lx004) | [#LX004](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Atualização Veterinária |
|                      | [LX005](#lx005) | [#LX005](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Atualização de Status do Animal |
|                      | [LX006](#lx006) | [#LX006](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 e #CEN03 - Gerenciamento de Cadastro |
|                      | [LX007](#lx007) | [#LX007](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Monitoramento e Acompanhamento |
|                      | [LX023](#lx023) | [#LX023](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC13 e #CNR005 (Carteirinha Digital com QR Code) |
|                      | [LX024](#lx024) | [#LX024](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC13 e #CNR006 (Registro de Microchip) |
|                      | [LX025](#lx025) | [#LX025](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC13 e #CNR007 (Registro Veterinário) |
|                      | [LX026](#lx026) | [#LX026](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC14 e #CNR008 (Notificações e Campanhas) |
|                      | [LX027](#lx027) | [#LX027](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC14 e #CNR009 (Busca de Animais Perdidos) |
|                      | [LX028](#lx028) | [#LX028](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC15 e #CNR010 (Gerenciamento de ONGs e Associações) |
|                      | [LX029](#lx029) | [#LX029](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC15 e #CNR011 (Rastreamento de Doações e Adoções) |
| **Letícia Paiva**    | [LX008](#lx008) | [#LX008](/modelagem/gravacoes/leticia/lexicos.md) | Léxico para #UC03 e #CEN01 - Sistema de Adoção (RFNI016) |
|                      | [LX009](#lx009)  | [#LX009](/modelagem/gravacoes/leticia/lexicos.md) | Léxico para #UC04 e #CEN02 - Alertas e Notificações Automáticas (RFNI017) |
| **Pedro Gomes**      |[LX010](#lx010) | [#LX010](/modelagem/gravacoes/pedro/lexicos.md)   | Léxico para Cenário 07 |
|                      | [LX011](#lx011) | [#LX011](/modelagem/gravacoes/pedro/lexicos.md)   | Léxico para Cenário 08 |
| **Mateus Santos Negrini** |[LX012](#lx012) | [#LX012](/modelagem/gravacoes/mateus/lexicos.md) | Léxico para #UC03 e #CEN01 - Sistema de Adoção (RF030) |
|                           |[LX013](#lx013) | [#LX013](/modelagem/gravacoes/mateus/lexicos.md) | Léxico para #UC04 e #CEN02 - Alertas de Notificações Automáticas (RF31) |
| **Heloisa Silva**         | | [#LX014](/modelagem/gravacoes/heloisa/lexicos.md) | Léxico para #UC09 e #CEN05 - Sistema de Adoção (RFNI001) |
|                           | | [#LX015](/modelagem/gravacoes/heloisa/lexicos.md) | Léxico para #UC010 e #CEN06 - Alertas e Notificações Automáticas (RFNI10) |
| **Isaac Menezes**         | [LX016](#lx016) | [#LX016](/modelagem/gravacoes/isaac/lexicos.md) | Indicador Visual da Média (RNFI014 e RNFI015) |
|                           | [LX017](#lx017) | [#LX017](/modelagem/gravacoes/isaac/lexicos.md) | Usuário (RNFI014 e RNFI015) |
|                           | [LX018](#lx018) | [#LX018](/modelagem/gravacoes/isaac/lexicos.md) | Página da Clínica (RNFI014 e RNFI015) |
|                           | [LX019](#lx019) | [#LX019](/modelagem/gravacoes/isaac/lexicos.md) | Profissional da área (RNFI014 e RNFI015) |
|                           | [LX020](#lx020) | [#LX020](/modelagem/gravacoes/isaac/lexicos.md) | Navegar (RNFI014 e RNFI015) |
|                           | [LX021](#lx021) | [#LX021](/modelagem/gravacoes/isaac/lexicos.md) | Média da clínica (RNFI014 e RNFI015) |
|                           | [LX022](#lx022) | [#LX022](/modelagem/gravacoes/isaac/lexicos.md) | Média do profissional (RNFI014 e RNFI015) |

---

## Artefatos

<a id="lx001"></a>

### #LX001 - Léxico para #UC01 e #CNR003 (Cadastro de Tutor)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção    | Impacto                                                                 | Classificação | Dicionário         | Rastreamento |
| ---------- | -------- | ------------------------------------------------------------------------ | ------------- | ------------------ | ------------- |
| LX001-01   | Tutor    | Pessoa responsável pelo cadastro e cuidado do animal.                   | Sujeito       | Dono, Responsável  | [RF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf001), [RF002](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf002), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |
| LX001-02   | Cadastrar | Ação de inserir novas informações no sistema.                          | Verbo         | Registrar, Inserir | [RF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf001), [RF002](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf002), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx002"></a>

## #LX002 - Léxico para #UC01 e #CNR003 (Consulta de Dados)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção     | Impacto                                                                 | Classificação | Dicionário             | Rastreamento |
| ---------- | ---------- | ------------------------------------------------------------------------ | ------------- | ---------------------- | ------------- |
| LX002-01   | Consultar  | Ação de buscar informações já registradas.                              | Verbo         | Pesquisar, Visualizar  | [RF006](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc001), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |
| LX002-02   | Carteirinha Digital | Documento eletrônico com informações e QR Code do animal.      | Objeto        | Identificação Digital  | [RF004](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc001), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx003"></a>

### #LX003 - Léxico para #UC02 e #CNR004 (Gerenciamento de Adoções)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário           | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | -------------------- | ------------- |
| LX003-01   | Animal Adotado  | Situação em que o animal foi vinculado a um novo tutor.                  | Estado        | Pet Adotado          | [RF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |
| LX003-02   | Tutor           | Pessoa responsável pelo cuidado do animal adotado.                      | Sujeito       | Dono, Responsável    | [RF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx004"></a>

### #LX004 - Léxico para #UC02 e #CNR004 (Atualização Veterinária)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção         | Impacto                                                                 | Classificação | Dicionário            | Rastreamento |
| ---------- | -------------- | ------------------------------------------------------------------------ | ------------- | --------------------- | ------------- |
| LX004-01   | Veterinário    | Profissional autorizado a emitir laudos e atualizar histórico.           | Sujeito       | Médico Veterinário    | [RF008](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf008), [RF016](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf016), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |
| LX004-02   | Carteirinha Digital | Documento com histórico de vacinação e QR Code do animal.           | Objeto        | Identificação Digital | [RF014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014), [RF016](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf016), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx005"></a>

### #LX005 - Léxico para #UC02 e #CNR004 (Atualização de Status do Animal)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário         | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ------------------ | ------------- |
| LX005-01   | Animal Perdido  | Situação em que o animal está desaparecido.                              | Estado        | Desaparecido       | [RF007](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf007), [RF018](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |
| LX005-02   | Animal Adotado  | Situação em que o animal foi vinculado a um novo tutor.                  | Estado        | Pet Adotado        | [RF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |

[Voltar para tabela de artefatos](#tabela_artefatos)

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 


### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx006"></a>

### #LX006 - Léxico para #UC01 e #CNR003 (Gerenciamento de Cadastro)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção     | Impacto                                                                 | Classificação | Dicionário        | Rastreamento |
| ---------- | ---------- | ------------------------------------------------------------------------ | ------------- | ----------------- | ------------- |
| LX006-01   | Cadastrar  | Ação de inserir novas informações no sistema.                           | Verbo         | Registrar, Inserir | [RF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc00), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |
| LX006-02   | Consultar  | Ação de buscar informações já registradas.                               | Verbo         | Pesquisar, Visualizar | [RF006](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006), [UC01](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc00), [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#CNR003) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx007"></a>

### #LX007 - Léxico para #UC02 e #CNR004 (Monitoramento e Acompanhamento)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX007-01   | Tutor           | Pessoa responsável por acompanhar o animal cadastrado ou adotado.        | Sujeito       | Dono, Responsável       | [RF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |
| LX007-02   | Veterinário     | Profissional que fornece dados de acompanhamento e histórico médico.     | Sujeito       | Médico Veterinário      | [RF008](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RF016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [UC02](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002), [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#CNR004) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx008"></a>

## #LX008 - Léxico para #UC03 e #CEN01 — Sistema de Adoção (RFNI016)  

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

| **ID** | **Noção** | **Impacto** | **Classificação** | **Dicionário** | **Rastreamento** |
|---------|------------|-------------|-------------------|----------------|------------------|
| `LX008-01` | Candidato a Adotante | Pessoa que busca ativamente por um animal para adoção no site.| Sujeito | Interessado, Adotante |  UC03, CEN01 |
| `LX008-02` | Perfil do Animal | Página no site com as informações de um animal disponível para adoção. | Objeto | Cadastro do Pet, Página do Animal | UC03, CEN01 |
| `LX008-03` | Manifestar Interesse | Ação realizada pelo candidato para iniciar formalmente o processo de adoção. | Verbo | Aplicar, Candidatar-se | RFNI016, UC03, CEN01 |

---

<a id="lx009"></a>

## #LX009 - Léxico para #UC04 e #CEN02 — Alertas e Notificações Automáticas (RFNI017)

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

| **ID** | **Noção** | **Impacto** | **Classificação** | **Dicionário** | **Rastreamento** |
|---------|------------|-------------|-------------------|----------------|------------------|
| `LX009-01` | Tutor do Animal | Pessoa que já possui um animal e utiliza as funcionalidades de gerenciamento do site | RF04, UC04, CEN02 |
| `LX009-02` | Lembrete de Saúde | Registro de um evento de saúde futuro (vacina, medicação) de um pet. | Objeto | Alerta, Agendamento | RF04, UC04, CEN02 |
| `LX009-03` | Agendar | Ação de criar um novo lembrete de saúde, definindo o tipo, a data e o motivo. | Verbo | Programar, Marcar | RFNI017, UC04, CEN02 |


---

### #LX010 - Léxico para Cenário 07 — Aplicativo Móvel "SINPatinhas Agente" 

**Autor:** [Pedro]

| ID        | Noção         | Impacto                                                                 | Classificação | Dicionário            | Rastreamento | Exemplo de Uso |
|----------|---------------|-------------------------------------------------------------------------|---------------|-----------------------|--------------|----------------|
| LX010-01 | Aplicativo SINPatinhas: software móvel (iOS/Android) utilizado por tutores e agentes de apoio para cadastro, consulta e atualização de animais. | Permite interação entre usuários e o sistema, possibilitando cadastro, atualização e consulta de animais. Facilita comunicação e rastreabilidade. | Objeto | App, Software Móvel | CNR005, [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Ana Beatriz abre o aplicativo em seu smartphone para consultar o RGA de um animal perdido. |
| LX010-02 | Tutor: pessoa responsável pelo animal, registrada no sistema com informações de contato e identificação do animal. | Permite que o sistema associe animais a responsáveis, viabilizando consultas e comunicação rápida. | Sujeito | Dono, Proprietário | CNR005, [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Ana Beatriz é tutora de Logan e acessa suas informações no app. |
| LX010-03 | RGA: Registro Geral Animal, código único de identificação visível na coleira do animal. | Identifica o animal de forma única, permitindo consultas rápidas e evitando duplicidades. | Objeto | Código do Animal, Registro | CNR005, [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Ana Beatriz digita o número do RGA de um cão perdido para localizar o tutor. |
| LX010-04 | Consulta Rápida de Animal Perdido: funcionalidade que permite localizar o tutor do animal via RGA. | Permite identificar rapidamente o responsável por um animal encontrado. | Verbo | Localização de Tutor, Busca de Animal | CNR005, [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Ao digitar o RGA, o app exibe nome e telefone do tutor. |
| LX010-05 | Chamada Telefônica via App: ação de iniciar ligação para o tutor diretamente pelo aplicativo. | Facilita comunicação imediata entre quem encontra o animal e o tutor. | Verbo | Ligação pelo App, Contato Telefônico | CNR005, [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Ana Beatriz toca no número exibido pelo app para ligar ao tutor. |

---

### #LX011 - Léxico para Cenário 08 — Acesso Offline

| ID        | Noção         | Impacto                                                                 | Classificação | Dicionário            | Rastreamento | Exemplo de Uso |
|----------|---------------|-------------------------------------------------------------------------|---------------|-----------------------|--------------|----------------|
| LX011-01 | Ficha do Animal: conjunto de informações (identificação, vacinação, histórico, fotos) armazenadas no app. | Permite acesso detalhado e confiável ao histórico e status do animal. | Objeto | Perfil do Animal, Registro do Animal | CNR006, [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) | Ana Beatriz acessa a ficha de Logan para verificar vacinas. |
| LX011-02 | Disponibilizar Offline: funcionalidade que salva dados do animal localmente no smartphone. | Garante acesso mesmo sem internet, evitando indisponibilidade das informações. | Verbo | Salvar Offline, Download de Dados | CNR006, [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) | Antes de viajar, Ana Beatriz salva a ficha de Logan no dispositivo. |
| LX011-03 | Acesso Offline: operação de visualizar informações salvas sem conexão ativa. | Permite consultas em locais sem internet, garantindo continuidade. | Verbo | Visualização Offline, Consulta Offline | CNR006, [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) | Na chácara, Ana Beatriz abre a ficha de Logan mesmo sem sinal. |
| LX011-04 | Mensagem de Erro Sem Conexão: alerta exibido quando o app não acessa dados online. | Informa o usuário sobre impossibilidade de acessar dados não salvos offline. | Objeto | Alerta de Conexão, Notificação Offline | CNR006, [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) | O app exibe: "Sem conexão com a internet. Conecte-se a uma rede para acessar os dados." |


---

<a id="lx012"></a>

### #LX012 – Léxico para #UC03 e #CEN01 – Sistema de Adoção (RF030)
**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

| **ID** | **Noção** | **Impacto** | **Classificação** | **Dicionário** | **Rastreamento** |
|---------|------------|-------------|-------------------|----------------|------------------|
| `LX012-01` | Instruções Integradas | Área do sistema que centraliza tutoriais, guias e orientações para o usuário. | Objeto | Manual Digital, Tutoriais | RF33, UC07, CEN07 |
| `LX012-02` | Buscar Conteúdo | Ação de localizar instruções ou tutoriais dentro da Área de Instruções. | Verbo | Pesquisar, Consultar | RF33, UC07, CEN07 |
| `LX012-03` | Categoria de Conteúdo | Classificação ou agrupamento de instruções/tutoriais dentro do sistema. | Objeto | Seção, Tema | RF33, UC07, CEN07 |
| `LX012-04` | Tutorial Passo a Passo | Documento ou instrução que guia o usuário em uma tarefa específica no sistema. | Objeto | Guia, Manual Interativo | RF33, UC07, CEN07 |
| `LX012-05` | Feedback de Conclusão | Mensagem que confirma ao usuário que a ação foi executada corretamente. | Objeto | Confirmação, Resultado | RF33, UC07, CEN07 |
---

<a id="lx013"></a>

### #LX013 – Léxico para #UC04 e #CEN02 – Alertas de Notificações Automáticas (RF31)
**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

| **ID** | **Noção** | **Impacto** | **Classificação** | **Dicionário** | **Rastreamento** |
|---------|------------|-------------|-------------------|----------------|------------------|
| `LX013-01` | Notificação Automática | Mensagem enviada pelo sistema ao tutor para atualizar informações do animal. | Objeto | Aviso, Alerta | RF44, UC08, CEN02 |
| `LX013-02` | Atualizar Dados | Ação do tutor de revisar ou modificar informações do animal no sistema. | Verbo | Editar, Corrigir | RF44, UC08, CEN02 |
| `LX013-03` | Atualizar Foto | Ação do tutor de anexar uma nova imagem do animal. | Verbo | Inserir Foto, Trocar Imagem | RF44, UC08, CEN02 |
| `LX013-04` | Periodicidade | Intervalo de tempo definido para envio de notificações. | Objeto | Frequência, Intervalo | RF44, UC08, CEN02 |
| `LX013-05` | Formato de Arquivo | Tipo de arquivo aceito pelo sistema para fotos ou documentos. | Objeto | JPEG, PNG, PDF | RF44, UC08, CEN02 |
---

<a id="lx014"></a>

### #LX014 – Léxico para #UC09 e #CEN05 – Sistema de Adoção (RFNI001)

---

<a id="lx015"></a>

### #LX015 – Léxico para #UC010 e #CEN06 – Alertas e Notificações Automáticas (RFNI10)

---

<a id="lx016"></a>

### #LX016 – Indicador Visual da Média (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX016   | Indicação visual da média  | Resultado do cálculo da média ponderada.  | Número       | Cálculo, resultado  | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx017"></a>

### #LX017 – Usuário (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX017   | Usuário  | Pessoa que acessou o sistema, não necessariamente um profissional ou tutor de pet.  | Sujeito  | Indivíduo, interessado | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx018"></a>

### #LX018 – Página da Clínica (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX018   | Página da clínica  | A página correspondente à clínica no sistema.   | Local  | Site, aba | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx019"></a>

### #LX019 – Profissional da Área (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX019   | Profissional da área  | Veterinário(a) ou técnico da área.  | Sujeito  | Médico, doutor | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx020"></a>

### #LX020 – Navegar (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX020   | Navegar  | No sistema, localizar o perfil da clínica/hospital.  | Ação  | Procurar, localizar | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx021"></a>

### #LX021 – Média da Clínica (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX021   | Média da clínica  | A média ponderada das consultas totais da clínica. | Número  | Cálculo | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx022"></a>

### #LX022 – Média do Profissional (RNFI014 e RNFI015)
**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX02   | Média do profissional  | A média ponderada das consultas totais de cada médico. | Número  | Cálculo | [RFNFI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md), [RFNFI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/PmhP4X9l34k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="lx023"></a>

### #LX023 – Léxico para #UC13 e #CNR005 (Carteirinha Digital com QR Code)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção              | Impacto                                                                 | Classificação | Dicionário             | Rastreamento |
| ---------- | ----------------- | ------------------------------------------------------------------------ | ------------- | ---------------------- | ------------- |
| LX023-01   | Carteirinha Digital | Documento eletrônico com dados do animal, tutor e QR Code identificador. | Objeto        | Identificação Digital  | [RF014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014), [UC03](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR005](../../../modelagem/gravacoes/antonio/cenarios.md#cnr005) |
| LX023-02   | QR Code            | Código bidimensional que redireciona para o prontuário digital do animal. | Objeto        | Código Digital         | [RF014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014), [UC03](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR005](../../../modelagem/gravacoes/antonio/cenarios.md#cnr005) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx024"></a>

### #LX024 – Léxico para #UC13 e #CNR006 (Registro de Microchip)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção        | Impacto                                                                | Classificação | Dicionário      | Rastreamento |
| ---------- | ------------ | ----------------------------------------------------------------------- | ------------- | --------------- | ------------- |
| LX024-01   | Microchip    | Dispositivo eletrônico implantado no animal que permite sua identificação. | Objeto        | Chip, Identificador | [RF015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf015), [UC13](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR006](../../../modelagem/gravacoes/antonio/cenarios.md#cnr006) |
| LX024-02   | Identificação | Processo de vincular o microchip ao registro do animal.                | Verbo         | Registrar, Associar | [RF015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf015), [UC13](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR006](../../../modelagem/gravacoes/antonio/cenarios.md#cnr006) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx025"></a>

### #LX025 – Léxico para #UC13 e #CNR007 (Registro Veterinário)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção             | Impacto                                                                 | Classificação | Dicionário             | Rastreamento |
| ---------- | ---------------- | ------------------------------------------------------------------------ | ------------- | ---------------------- | ------------- |
| LX025-01   | Procedimento Veterinário | Ação médica aplicada ao animal, como castração, vacinação ou exames.   | Objeto        | Atendimento, Tratamento | [RF016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf016), [UC13](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR007](../../../modelagem/gravacoes/antonio/cenarios.md#cnr007) |
| LX025-02   | Registro Clínico  | Histórico médico do animal armazenado no sistema.                       | Objeto        | Prontuário, Histórico | [RF029](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf029), [UC13](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR007](../../../modelagem/gravacoes/antonio/cenarios.md#cnr007) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx026"></a>

### #LX026 – Léxico para #UC14 e #CNR008 (Notificações e Campanhas)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção           | Impacto                                                               | Classificação | Dicionário             | Rastreamento |
| ---------- | ---------------- | ---------------------------------------------------------------------- | ------------- | ---------------------- | ------------- |
| LX026-01   | Notificação      | Mensagem automática enviada para lembrar ou informar o usuário.       | Objeto        | Alerta, Aviso          | [RF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018), [RF026](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026), [UC14](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR008](../../../modelagem/gravacoes/antonio/cenarios.md#cnr008) |
| LX026-02   | Campanha Educativa | Conteúdo digital voltado à conscientização sobre cuidado animal.     | Objeto        | Material Informativo   | [RF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018), [UC14](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR008](../../../modelagem/gravacoes/antonio/cenarios.md#cnr008) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx027"></a>

### #LX027 – Léxico para #UC14 e #CNR009 (Busca de Animais Perdidos)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção          | Impacto                                                                 | Classificação | Dicionário              | Rastreamento |
| ---------- | --------------- | ------------------------------------------------------------------------ | ------------- | ----------------------- | ------------- |
| LX027-01   | Animal Perdido  | Animal cadastrado que foi reportado como desaparecido.                  | Estado        | Desaparecido, Extraviado | [RF028](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf028), [UC14](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR009](../../../modelagem/gravacoes/antonio/cenarios.md#cnr009) |
| LX027-02   | Localização     | Posição geográfica informada para facilitar busca do animal.            | Objeto        | Endereço, Ponto de Referência | [RF027](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027), [UC14](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR009](../../../modelagem/gravacoes/antonio/cenarios.md#cnr009) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx028"></a>

### #LX028 – Léxico para #UC15 e #CNR010 (Gerenciamento de ONGs e Associações)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção        | Impacto                                                                | Classificação | Dicionário         | Rastreamento |
| ---------- | ------------ | ----------------------------------------------------------------------- | ------------- | ------------------ | ------------- |
| LX028-01   | ONG          | Organização que atua no resgate e adoção de animais.                    | Sujeito       | Associação, Entidade | [RF040](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf040), [UC15](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR010](../../../modelagem/gravacoes/antonio/cenarios.md#cnr010) |
| LX028-02   | Animal Resgatado | Animal que foi retirado de situação de risco por uma ONG ou protetor. | Estado        | Recuperado, Recolhido | [RF040](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf040), [UC15](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR010](../../../modelagem/gravacoes/antonio/cenarios.md#cnr010) |

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de léxicos. |

---

<a id="lx029"></a>

### #LX029 – Léxico para #UC15 e #CNR011 (Rastreamento de Doações e Adoções)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| ID        | Noção        | Impacto                                                                 | Classificação | Dicionário             | Rastreamento |
| ---------- | ------------ | ------------------------------------------------------------------------ | ------------- | ---------------------- | ------------- |
| LX029-01   | Doação       | Transferência voluntária de recursos ou bens para apoiar ações da ONG.  | Verbo         | Contribuir, Oferecer  | [RF041](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041), [UC15](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR011](../../../modelagem/gravacoes/antonio/cenarios.md#cnr011) |
| LX029-02   | Adoção       | Processo de vincular permanentemente um animal a um tutor.              | Verbo         | Adquirir, Assumir Cuidado | [RF030](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf030), [RF041](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041), [UC15](../../../modelagem/gravacoes/antonio/caso_de_uso.md), [CNR011](../../../modelagem/gravacoes/antonio/cenarios.md#cnr011) |

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 


### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de léxicos. |

---

## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| Antonio Carvalho | 16,6% | Autor da página de apresentação de léxicos e criador dos artefatos LX001, LX002, LX003, LX004, LX005, LX006, LX007, LX023, LX024, LX025, LX026, LX027, LX028, LX029 |
| Letícia Paiva| 16,6% | Criador dos artefatos LX008 e LX009 |
| Mateus Santos Negrini| 16,6% | Criador dos artefatos LX012 e LX013 |

---

## Referências

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 10: Cenários e Léxicos de Requisitos.* Brasília: Universidade de Brasília, 2025.

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 10/10/2025 | Criação da página de léxicos  | Antonio |  |
| 1.1 | 19/10/2025 | Refatoração da tabela de artefatos | Isaac | Antonio |
| 1.2 | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio | Letícia |

---