# Especificação Suplementar – Projeto SinPatinhas

## Introdução

O **Artefato Suplementar** é um documento escrito em dialeto comum que compila a totalidade dos requisitos de um sistema que não foram integralmente capturados pelos **casos de uso** <a id="anchor_1" href="#REF1">[1]</a>.  
Ele adiciona valor ao modelo de casos de uso ao detalhar exigências adicionais, tais como:

- Requisitos estatutários e normativos, englobando conformidade com diretrizes e padrões de aplicativos;  
- Características de qualidade, como **Facilidade de Uso**, **Fidelidade**, **Performance**, **Manutenibilidade (Apoio)** e **Segurança da Informação**;  
- Outras demandas técnicas, abrangendo plataformas e ambientes operacionais suportados, exigências de compatibilidade e restrições de arquitetura.

A adoção do paradigma **FURPS+** (*Funcionalidade, Usabilidade, Confiabilidade, Desempenho, Suportabilidade*, mais fatores) direciona a descoberta e a estrutura desses requisitos, garantindo a abrangência completa dos aspectos operacionais e de qualidade da aplicação <a id="anchor_2" href="#REF2">[2]</a>.

---

## Visão geral

O sistema analisado (Sinpatinhas) pode ser acessado por navegador web por meio do endereço web  <a href="https://sinpatinhas.mma.gov.br/login" target="_blank">https://sinpatinhas.mma.gov.br/login</a>, para acessar o sistema é preciso efetuar o login único por meio do Gov.br. O cadastro no sistema é gratuito. O sistema não tem aplicativo nativo para smartphone, porém o sistema é responsivo e funciona bem quando acessado pelo navegador de tablets e smartphones[[1]](https://sinpatinhas.mma.gov.br/faq). A versão atual do sistema é **1.3.1f - 1.4.1b**

---

## Estratégia e Etapas de Elaboração

A modelagem das exigências do sistema foi executada com foco na separação entre **requisitos operacionais** e **requisitos não operacionais**.

A criação do Artefato Suplementar deve observar as seguintes etapas primárias:

1. **Classificação FURPS+:** estruturar os requisitos não operacionais e limitações técnicas nas categorias da abordagem FURPS+:  
   - **Funcionalidade (F):** normas de negócio e funções não abrangidas por casos de uso;  
   - **Usabilidade (U)**;  
   - **Reliability (R) – Confiabilidade/Fidelidade**;  
   - **Performance (P) – Celeridade**;  
   - **Supportability (S) – Apoio/Manutenibilidade**;  
   - **+ (Plus):** limitações de arquitetura, execução, interface, etc.  
2. **Especificação Detalhada:** descrever cada exigência em linguagem natural, de forma inequívoca, singular e mensurável, atribuindo um código único (ID).  
3. **Associação de Elementos:** para cada categoria FURPS+, elaborar uma tabela consolidando os códigos e suas descrições.  
4. **Rastreabilidade:** se pertinente, mencionar o **Caso de Uso (UC)** que está diretamente ligado à exigência.

Essa metodologia visa garantir que todos os elementos essenciais à construção do sistema estejam adequadamente documentados e acessíveis a todos os participantes do projeto.

---
## Metodologia

A elaboração do Artefato Suplementar do SinPatinhas seguiu as seguintes etapas:

1. **Identificação dos Requisitos Não Funcionais:** com base nas narrativas de utilizador, foram analisados os aspectos de celeridade, proteção e facilidade de uso que influenciam o sistema.  
2. **Classificação FURPS+:** as exigências descobertas foram organizadas nas categorias **Funcionalidade**, **Usabilidade**, **Confiabilidade**, **Desempenho** e **Suportabilidade**.  
3. **Revisão e Consolidação:** as exigências foram revistas em função dos demais elementos produzidos pelo grupo, como o **registro de pendências**, o **diagrama de interações do utilizador** e os **cenários de interação**.

Essa estratégia assegura que as exigências adicionais estejam em conformidade com o contexto e os objetivos do SinPatinhas, além de proporcionar apoio à construção de uma aplicação acessível, protegida e eficiente.

---

## Tabela 1 – Estrutura para Criação de Especificação Suplementar (FURPS+)
*Autoria: Antonio Carvalho*
<br>
**1. Definir classificação FURPS(+): Funcionalidade (F), Usabilidade (U), Confiabilidade (R), Desempenho (P) e Suportabilidade (S).**
| **Requisito (Código)** | **Descrição** | **Rastreamento** |
|----------------|------------------------|----------------|
|  | | |
|  | | |
|  | | |
|  | | |
|  | | |


---

<a id="tabela_artefatos"></a>
## Artefatos e gravações unitários 

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|--------------|------------------|------------------|
| **Antonio Carvalho** | [ES001](#es001) | [#ES001](/modelagem/gravacoes/antonio/especificacao.md) | Usabilidade (U) |
|                      | [ES002](#es002) | [#ES002](/modelagem/gravacoes/antonio/especificacao.md) | Confiabilidade (R)  |
|                      | [ES011](#es011) | [#ES011](/modelagem/gravacoes/antonio/especificacao.md) | Confiabilidade (R) |
|                      | [ES012](#es012) | [#ES012](/modelagem/gravacoes/antonio/especificacao.md) | Performance (P) |
|                      | [ES013](#es013) | [#ES013](/modelagem/gravacoes/antonio/especificacao.md) | Supportability (S) |
|                      | [ES014](#es014) | [#ES014](/modelagem/gravacoes/antonio/especificacao.md) | Funcionalidade (F) |
| **Letícia Paiva**    | [ES003](#es003) | [#ES003](/modelagem/gravacoes/leticia/especificacao.md) | |
|                      | [ES004](#es004)  | [#ES004](/modelagem/gravacoes/leticia/especificacao.md) | |
| **Pedro Gomes**      |  | [#ES005](/modelagem/gravacoes/pedro/especificacao.md)   |  |
|                      |  | [#ES006](/modelagem/gravacoes/pedro/especificacao.md)   |  |
| **Mateus Santos Negrini** | [ES007](#es007) | [#ES007](/modelagem/gravacoes/mateus/especificacao.md) |  |
|                           | [ES008](#es008) | [#ES008](/modelagem/gravacoes/mateus/especificacao.md) |  |
| **Isaac Menezes**         | [ES009](#es009) | [#ES009](/modelagem/gravacoes/isaac/especificacao.md) |  |
|                           | [ES010](#es010) | [#ES010](/modelagem/gravacoes/isaac/especificacao.md) |  |

---

## Artefatos

<a id="es001"></a>

### #ES001 - Usabilidade (U)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Usabilidade** definem a facilidade com que o usuário final (cidadão, tutor ou profissional) consegue interagir com o sistema, sendo crucial para a adoção de um sistema de utilidade pública como o **SinPatinhas**.  
Foco em **intuitividade**, **clareza** e **eficiência da interface**.

<p align="center"><b>Tabela 2 - Requisitos de Usabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | A interface deve ser intuitiva para cidadãos, facilitando o uso por pessoas de diferentes níveis de afinidade tecnológica. | Análise Doc |
| [RNF13](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf13) | O sistema deve suportar os navegadores principais e ser responsivo em dispositivos móveis (prioridade no mobile). | Análise Doc |
| [RNF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) (E1) | O sistema deve ser fácil e intuitivo de operar. | Entrevista 01 |
| [RNF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) (E1) | O layout deve ser limpo e organizado. | Entrevista 01 |
| [RF012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf012) | O sistema deve permitir login integrado via Gov.br, possibilitando autenticação única e segura para tutores e profissionais. | Análise Doc |
| [RF013](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf013) | O sistema deve habilitar preenchimento automático de dados pessoais do tutor (quando autorizado via Gov.br), reduzindo a duplicidade e agilizando a entrada de dados. | Análise Doc |

---

## Validação com tutor de animal

A validação com o tutor foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Douglas Wilson | Estudante de Engenharia de Software de 22 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="es002"></a>

### #ES002 - Confiabilidade (R)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

A **Segurança** trata da proteção dos dados do sistema e prevenção de acessos não autorizados, garantindo **conformidade com a LGPD** e proteção da privacidade de tutores e animais.

<p align="center"><b>Tabela 3 - Requisitos de Segurança.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | O sistema deve estar em total conformidade com a Lei Geral de Proteção de Dados (LGPD). | Análise Doc |
| [RNF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) (E3) | O sistema deve alertar o usuário sobre tentativas de acesso não autorizado. | Entrevista 03 |
| [RNF017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf017) | O sistema deve gerar alertas de acesso não autorizado e tentativas de violação. | Entrevista 03 |
| [RNF019](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) | Segurança na integração entre clínicas, ONGs e SinPatinhas. | Análise Doc |

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

### #ES003

<a id="es003"></a>

## **Funcionalidade (Funcionalidade – F)**  

### **Tabela F – Funcionalidades do Sistema de Adoção**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RF030](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf030) | O sistema deve disponibilizar uma seção dedicada à adoção, permitindo visualizar animais disponíveis e manifestar interesse formalmente. | Entrevista |
| [RF028](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf028) | O sistema deve permitir buscas e filtros para localizar animais disponíveis para adoção. | Entrevista |
| [RF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf021) | O sistema deve exibir perfis completos dos animais, contendo informações relevantes para decisão de adoção. | Entrevista |
| [RF041](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041) | O sistema deve registrar e atualizar o status do animal (ex: disponível/adotado) em tempo real. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Usabilidade (Usabilidade – U)**  

### **Tabela U – Usabilidade do Sistema de Adoção**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | A interface deve ser intuitiva, com filtros claros e experiência simples para usuários de diferentes níveis tecnológicos. | Entrevista |
| [RNF005](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf005) | O sistema deve ser responsivo e compatível com navegadores principais e dispositivos móveis. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Desempenho (Performance – P)**  

### **Tabela P – Desempenho do Sistema de Adoção**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF004](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | As buscas filtradas devem retornar resultados em até 3 segundos e carregar perfis em até 2 segundos. | Entrevista |
| [RNF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) | O sistema deve garantir respostas rápidas (tempo máximo de 2s em páginas principais). | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Confiabilidade (Reliability – R)**  

### **Tabela R – Confiabilidade do Sistema de Adoção**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | O sistema deve garantir conformidade com a LGPD no tratamento de dados durante o processo de adoção. | Entrevista |
| [RNF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | O sistema deve evitar perda de dados, garantindo cópias de segurança automáticas. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

### #ES004

<a id="es004"></a>

---

## **Funcionalidade (Funcionalidade – F)**  

### **Tabela F – Funcionalidades de Alertas e Notificações Automáticas**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RF031](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf031) | O sistema deve permitir que o tutor agende lembretes de vacinas e medicações. | Entrevista |
| [RF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) | O sistema deve enviar notificações automáticas por e-mail na data configurada. | Entrevista |
| [RF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf024) | O sistema deve permitir que o tutor visualize, edite e exclua lembretes. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Usabilidade (Usabilidade – U)**  

### **Tabela U – Usabilidade do Módulo de Notificações**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | O formulário de agendamento deve ser simples, claro e rápido de preencher. | Entrevista |
| [RNF012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf012) | As mensagens enviadas por e-mail devem ser claras, objetivas e responsivas. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Desempenho (Performance – P)**  

### **Tabela P – Desempenho do Módulo de Notificações**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF004](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | O sistema deve salvar lembretes em até 2 segundos. | Entrevista |
| [RNF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) | O e-mail deve ser enviado com no máximo 1 hora de atraso em relação ao horário programado. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## **Confiabilidade (Reliability – R)**  

### **Tabela R – Confiabilidade nas Notificações Automáticas**

| **ID** | **Descrição** | **Rastreamento** |
|--------|---------------|------------------|
| [RNF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf018) | O sistema deve registrar falhas e tentar reenviar e-mails até 3 vezes. | Entrevista |
| [RNF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) | O sistema deve registrar logs de entrega e erros (bounce). | Entrevista |
| [RNF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | O sistema deve garantir que os dados dos lembretes não sejam perdidos. | Entrevista |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

### #ES005

<a id="es005"></a>

---

### #ES006

<a id="es006"></a>

---

### #ES007

<a id="es007"></a>

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

| **Requisito (Código)** | **Classificação FURPS+** | **Especificação Detalhada** | **Rastreabilidade** |
| ---------------------- | ------------------------ | --------------------------- | ------------------- |
| RNF021 | Desempenho (P) | Todas as operações do sistema, incluindo consultas, atualizações e geração de relatórios, devem retornar resultados em **até 2 segundos** sob condições normais de uso (até 10000 usuários simultâneos). | |
---

### #ES008

<a id="es008"></a>

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

| **Requisito (Código)** | **Classificação FURPS+** | **Especificação Detalhada** | **Rastreabilidade** |
| ---------------------- | ------------------------ | --------------------------- | ------------------- |
| RNF023 | Confiabilidade (R) | Veterinários devem poder acessar dados clinicos de um animal cadastrado e acessar exames mas não poderá editar exames que não foram realizados por ele. | |
---

### #ES009

<a id="es009"></a>

**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | RNFI014 |
| **Título** | Exibição da média de atendimentos por clínica |
| **Descrição** | Exibir para o usuário a média de consultas por cada clínica |
| **Justificativa/Objetivo** | Conceder ao usuário uma informação útil que pode comunicar experiência e boa imagem da clínica |
| **Ator(es)** | Dono de pet, Administrador, Interessado na clínica, Profissional da área |
| **Pré-condições** | - O usuário deve ter acesso à internet <br> - O usuário deve estar com o aplicativo SinPatinhas instalado <br> - O usuário deve estar na página correspondente da clínica |
| **Entradas** | - Pesquisa do usuário <br> - Clicar no botão "pesquisar" <br> - Selecionar o perfil desejado |
| **Saídas** | - O sistema calcula a média ponderada <br> - Exibição do resultado do cálculo para o usuário |
| **Regras de Negócio** | 1. Apenas clínicas que já fizeram consultas exibirão resultado do cálculo <br> 2. Para clínicas que não possuem consultas, será exibido uma mensagem com essa informação |
| **Requisitos de Desempenho** | - Tempo máximo de resposta de 3 segundos <br> - Tempo máximo de carregamento da página de 2 segundos |
| **Requisitos de Usabilidade** | - Resultado do cálculo com duas casas decimais <br> - Resultado do cálculo exibido juntamente com as demais informações da clínica |
| **Requisitos de Portabilidade** | - Compatível com as versões mais recentes dos principais navegadores (Chrome, Firefox, Safari, Edge) |
| **Requisitos de Segurança** | - Conexão do tipo HTTPS |
| **Tratamento de Erros / Exceções** | - Clínica sem consultas: exibir mensagem informando que não foram feitas consultas <br> - Clínica inexistente: exibir mensagem informando que a clínica não existe |
| **Dependências** | - Informação no banco de dados de quantas consultas ocorreram <br> - Função simples capaz de calcular a média ponderada |
| **Critérios de Aceitação** | 1. O usuário consegue ver o resultado do cálculo <br> 2. O cálculo tem apenas duas casas decimais |
| **Rastreabilidade** | RNFI014, #UC009, LX014, LX015, LX016, LX017, LX018, LX019, LX020 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | - |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

### #ES010

<a id="es010"></a>

**Autor:** [Isaac Menezes](https://github.com/ispratamena250)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | RNFI015 |
| **Título** | Exibição da média de atendimentos por profissional |
| **Descrição** | Exibir para o usuário a média de consultas do médico |
| **Justificativa/Objetivo** | Informar ao usuário um dado útil que comunique experiência e transparência |
| **Ator(es)** | Dono de pet, Administrador, Interessado na clínica, Profissional da área |
| **Pré-condições** | - O usuário deve ter acesso à internet <br> - O usuário deve estar com o aplicativo SinPatinhas instalado <br> - O usuário deve estar na página correspondente da clínica |
| **Entradas** | - Pesquisa do usuário <br> - Clicar no botão "pesquisar" <br> - Selecionar o perfil desejado |
| **Saídas** | - O sistema calcula a média ponderada <br> - Exibição do resultado do cálculo para o usuário |
| **Regras de Negócio** | 1. Apenas profissionais que já fizeram consultas exibirão resultado do cálculo <br> 2. Para profissionais que não possuem consultas, será exibido uma mensagem com essa informação |
| **Requisitos de Desempenho** | - Tempo máximo de resposta de 3 segundos <br> - Tempo máximo de carregamento da página de 2 segundos |
| **Requisitos de Usabilidade** | - Resultado do cálculo com duas casas decimais <br> - Resultado do cálculo exibido juntamente com as demais informações da clínica |
| **Requisitos de Portabilidade** | - Compatível com as versões mais recentes dos principais navegadores (Chrome, Firefox, Safari, Edge) |
| **Requisitos de Segurança** | - Conexão do tipo HTTPS |
| **Tratamento de Erros / Exceções** | - Profissionais sem consultas: exibir mensagem informando que não foram feitas consultas <br> - Profissional inexistente: exibir mensagem informando que o profissional não existe |
| **Dependências** | - Informação no banco de dados de quantas consultas ocorreram <br> - Função simples capaz de calcular a média ponderada |
| **Critérios de Aceitação** | 1. O usuário consegue ver o resultado do cálculo <br> 2. O cálculo tem apenas duas casas decimais |
| **Rastreabilidade** | RNFI015, #UC010, LX014, LX015, LX016, LX017, LX018, LX019, LX020 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | - |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="es011"></a>

### #ES011 - Confiabilidade (R)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

A **Confiabilidade** garante que o sistema funcione de forma **estável e contínua**, evitando perda de dados e mantendo integridade das informações, mesmo em falhas ou interrupções.

<p align="center"><b>Tabela 4 - Requisitos de Confiabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) (E1) | O sistema deve garantir a fidelidade contra perda de dados. | Entrevista 01 |
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) (E3) | O sistema deve evitar perda de dados e garantir cópias de segurança automáticas. | Entrevista 03 |
| [RNF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | O sistema deve registrar logs detalhados de acesso e modificações nos prontuários e cadastros. | Entrevista 03 |
| [RF006](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006) | O acesso à consulta pública via RGA ou microchip deve ser restrito, exibindo apenas dados não sensíveis do animal. | Análise Doc |

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="es012"></a>

### #ES012 - Performance (P) 

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Performance (Celeridade)** garantem que o sistema **SinPatinhas** opere de forma **rápida, responsiva e estável**, mesmo sob alto volume de acessos.  
Tais requisitos asseguram **respostas em tempo hábil**, **otimização de consultas** e **eficiência no processamento**, fatores essenciais para a satisfação do usuário e confiabilidade do serviço.

<p align="center"><b>Tabela 12 - Requisitos de Performance (Celeridade).</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF004](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | O sistema deve responder a consultas públicas em menos de 2 segundos. | Análise Doc |
| [RNF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) | O sistema deve garantir respostas rápidas (até 2s) em todas as interfaces. | Entrevista / Benchmark |
| [RF020](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf020) | Garantir acesso nacional via internet com escalabilidade. | Análise Doc |
| [RF037](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf037) | Acesso via celular para consulta fora da clínica, com resposta imediata. | Protótipo |
| [RNF011](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf011) | O sistema deve possuir funcionalidades offline para garantir desempenho contínuo. | Entrevista |
| [RNF022](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf022) | O sistema deve manter disponibilidade de 99,8% (uptime). | Análise Técnica |

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="es013"></a>

### #ES013 - Suportabilidade (S) 

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Supportability (Apoio e Manutenibilidade)** estabelecem práticas que permitem a **manutenção eficiente, evolução contínua e suporte técnico simplificado** do sistema **SinPatinhas**, assegurando sua longevidade e qualidade em operação.

<p align="center"><b>Tabela 13 - Requisitos de Supportability (Apoio / Manutenibilidade).</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF006](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf006) | O sistema deve possuir APIs abertas para integração com clínicas e órgãos públicos. | Análise Doc |
| [RNF019](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) | O sistema deve garantir integração contínua entre clínicas, ONGs e SinPatinhas. | Entrevista / Doc |
| [RNF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) | O sistema deve registrar logs de acesso e modificações para auditoria. | Análise Doc |
| [RF033](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf033) | Disponibilizar área de instruções integradas (manual digital) para suporte ao usuário. | Protótipo |
| [RNF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) | O sistema deve manter documentação técnica atualizada e padronizada. | Engenharia de Software |
| [RNF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf018) | Implementar cópias de segurança automáticas e testes regulares de restauração. | Análise Técnica |

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="es014"></a>

### #ES014 - Funcionalidade (F)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Funcionalidade (F)** definem o **conjunto de serviços, comportamentos e operações essenciais** que o sistema **SinPatinhas** deve realizar para cumprir seus objetivos.  
Eles abrangem desde o **cadastro e gerenciamento de tutores e animais** até a **emissão de documentos oficiais e integração com plataformas externas**, assegurando o correto funcionamento do sistema em todos os níveis de uso.

<p align="center"><b>Tabela 14 - Requisitos de Funcionalidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf001) | Cadastro de tutores com dados pessoais. | Entrevista / Análise Doc |
| [RF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf002) | Cadastro de animais vinculados ao tutor. | Entrevista / Análise Doc |
| [RF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf003) | Geração de número de Registro Geral do Animal (RGA). | Análise Doc |
| [RF005](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf005) | Emissão de documento oficial de identificação (RG Pet). | Análise Doc |
| [RF007](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf007) | Atualização do status do animal (perdido, encontrado, óbito, transferência). | Entrevista / Protótipo |
| [RF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009) | Transferência de titularidade do animal. | Entrevista |
| [RF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) | Envio de notificações/campanhas e publicação de materiais educativos. | Entrevista |
| [RF020](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf020) | Garantir acesso nacional via internet, com escalabilidade. | Análise Doc |
| [RF028](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf028) | Permitir busca e recuperação de animais perdidos ou abandonados. | Entrevista |
| [RF029](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf029) | Prontuário digital centralizando histórico de saúde e vacinação. | Entrevista / Análise Doc |
| [RF039](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf039) | Integração entre clínicas veterinárias, permitindo visualização do prontuário. | Análise Doc |
| [RF041](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041) | Rastreamento de doações e adoções, registrando doadores, adotantes e datas. | Análise Doc |

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

### Finalidade

O objetivo deste documento é **complementar os elementos de requisitos operacionais do SinPatinhas**, assegurando que os **atributos de qualidade**, **limitações de arquitetura** e **demandas técnicas** estejam devidamente registrados.  
Dessa forma, ele serve de **referencial para o desenvolvimento, testes e manutenção do sistema**, garantindo que as expectativas dos utilizadores e dos administradores sejam satisfeitas de maneira consistente e segura.

---

## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| Antonio Carvalho | 16,6% | Autor da página de apresentação de especificação suplementar e criador dos artefatos ES001, ES002, ES011, ES012, ES013, ES014 |
| Letícia Paiva | 16,6% | Criador dos artefatos ES003 e ES004 |
| Mateus Santos Negrini | 16,6% | Criador dos artefatos ES007 e ES008 |


---

## Referências

Grady, R. B. *Practical Software Metrics for Project Management and Process Improvement.* Prentice Hall, 1992.
Pressman, R. S. *Engenharia de Software: uma abordagem profissional.* 8ª edição. McGraw Hill, 2016.
 
---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|:----------:|:---------:|:---------------|:-------------|:---------------|
| 1.0 | 10/10/2025 | Criação do documento de Especificação Suplementar | Antonio | Letícia |
| 2.0 | 12/10/2025 | Adição das especificações do sistema | Heloisa | Antonio |

[Voltar para tabela de artefatos](#tabela_artefatos)

---