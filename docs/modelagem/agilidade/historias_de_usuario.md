# Histórias de Usuário – Projeto SinPatinhas

## Introdução

Este artefato documenta as **Histórias de Usuário do Sistema SinPatinhas**, conforme os princípios da **modelagem ágil de requisitos** utilizados em metodologias como **Scrum** e **Extreme Programming (XP)** <a id="anchor_1" href="#REF2">[2]</a>. 

![User_Stories_5](../../assets/PDFs/user_stories/user_stories_3.png) 
*PRESSMAN, R. S.; MAXIM, B. R. Engenharia de Software: uma abordagem profissional. 8ª ed. Porto Alegre: AMGH, 2016. Capítulo 3 – Desenvolvimento*

---

De acordo com **Serrano e Serrano (2025)**, as histórias de usuário são **itens do Product Backlog** que descrevem funcionalidades sob a perspectiva do cliente, com foco em *“o que deve ser feito”* e não em *“como deve ser feito”* e contendo questionamentos como: Como [persona], quero [função], para [benefício]. <a id="anchor_2" href="#REF1">[1]</a>.  

![User_Stories_4](../../assets/PDFs/user_stories/user_stories_1.png)


*SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.*

---

## Objetivo

O objetivo deste artefato é **registrar, organizar e rastrear** as histórias de usuário que representam os requisitos funcionais do sistema **SinPatinhas**. Assim, busca-se:

- Traduzir necessidades reais em funcionalidades compreensíveis; <a id="anchor_4" href="#REF1">[1]</a>;  
- Apoiar o desenvolvimento iterativo e incremental <a id="anchor_4" href="#REF2">[2]</a>;  
- Estabelecer critérios claros de aceitação <a id="anchor_5" href="#REF2">[2]</a>;  
- Promover rastreabilidade com os requisitos funcionais e o backlog do produto.

---

## Metodologia

As histórias de usuário foram estruturadas com base na **Extreme Programming (XP)** e nos conceitos de **Product Backlog Item (PBI)** do **Scrum** <a id="anchor_6" href="#REF1">[1]</a>.  

O processo seguiu as seguintes etapas:

1. **Criação das Histórias:** elaboradas a partir da visão do usuário (*Como [persona], quero [função], para [benefício]*) <a id="anchor_7" href="#REF1">[1]</a>.  
2. **Priorização:** conforme o valor de negócio atribuído pelo Product Owner.  
3. **Estimativa:** em pontos de história ou esforço relativo <a id="anchor_8" href="#REF1">[1]</a>.  
4. **Planejamento das Sprints:** seleção das histórias priorizadas para cada iteração. <a id="anchor_8" href="#REF2">[2]</a>.  
5. **Implementação e Testes de Aceitação:** execução e validação das funcionalidades. <a id="anchor_8" href="#REF2">[2]</a>.  
---

## Estrutura de História de Usuário

**Tabela 1 – Estrutura para criação de uma história de usuário
*Autoria: Antonio Carvalho*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU00X – Identificador da História |
| **Tema** | Módulo ou funcionalidade principal |
| **Descrição** | *Quem* [tipo_de_usuário], *o que* [ação], *para que* [finalidade]. |
| **Critérios de Aceitação** | Itens observáveis para validar o sucesso da história. |
| **Prioridade** | Alta / Média / Baixa |
| **Status** | Não validada / Validada |
| **Rastreabilidade** | Código do requisito relacionado |

![Backlog_4](../../assets/PDFs/backlog/backlog_3.png)

*SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.*

---

<a id="tabela_artefatos"></a>
## Artefatos e gravações unitários 

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|-----------------------|------------------|------------------|
| Letícia Paiva  | [HU001](#hu001)  | [#HU001](../../modelagem/gravacoes/leticia/historias.md) | Sistema de Adoção |
|                      | [HU002](#hu002) | [#HU002](../../modelagem/gravacoes/leticia/historias.md) | Alertas e Notificações Automáticas |
|                      | [HU009](#hu009)  | [#HU009](../../modelagem/gravacoes/leticia/historias.md) | Compartilhamento de Informações com Familiares |
|                      | [HU009](#hu009)  | [#HU010](../../modelagem/gravacoes/leticia/historias.md) | Notificações de Vacinas Futuras/Atrasadas |
|                      | [HU011](#hu011) | [#HU011](../../modelagem/gravacoes/leticia/historias.md) | Registro da Localização do Animal ou Tutor |
|                      | [HU012](#hu012)  | [#HU012](../../modelagem/gravacoes/leticia/historias.md) | Registro Detalhado de Informações do Animal |
| Antonio Carvalho | [HU003](#hu003) | [#HU003](../../modelagem/gravacoes/antonio/historias.md) | Cadastro e Gerenciamento de Perfis Ampliados |
|                      | [HU004](#hu004) | [#HU004](../../modelagem/gravacoes/antonio/historias.md) | Publicação de Campanhas e Materiais Educativos |
|                      | [HU005](#hu005) | [#HU005](../../modelagem/gravacoes/antonio/historias.md) | Exibição de Horários de Clínicas Parceiras |
|                      | [HU006](#hu006) | [#HU006](../../modelagem/gravacoes/antonio/historias.md) | Integração Direta com Parceiros |
|                      | [HU007](#hu007) | [#HU007](../../modelagem/gravacoes/antonio/historias.md) | Acesso Simplificado para Usuários com Baixa Afinidade Tecnológica |
|                      | [HU008](#hu008) | [#HU008](../../modelagem/gravacoes/antonio/historias.md) | Desempenho em Consultas Públicas |
|                      | [HU041](#hu041) | [#HU041](../../modelagem/gravacoes/antonio/historias.md) | Sincronização de Dados entre ONGs e Clínicas |
|                      | [HU042](#hu042) | [#HU042](../../modelagem/gravacoes/antonio/historias.md) | Acesso via Web e Mobile |
|                      | [HU043](#hu043) | [#HU043](../../modelagem/gravacoes/antonio/historias.md) | Funcionalidades Offline para o Aplicativo |
|                      | [HU044](#hu044) | [#HU044](../../modelagem/gravacoes/antonio/historias.md) | Integração Direta com Parceiros (Clínicas, ONGs e Pet Shops) |
| Pedro Gomes    | | [#HU013](../../modelagem/gravacoes/pedro/historias.md) | Aplicativo Móvel SinPatinhas |
|                      | | [#HU014](../../modelagem/gravacoes/pedro/historias.md) | Acesso Offline à Ficha do Próprio Animal |
|                      | | [#HU015](../../modelagem/gravacoes/pedro/historias.md) | Compartilhamento de Informações com Familiares |
|                      | | [#HU016](../../modelagem/gravacoes/pedro/historias.md) | Notificações de Vacinas Futuras e Atrasadas |
|                      | | [#HU017](../../modelagem/gravacoes/pedro/historias.md) | Registro da Localização do Animal ou Tutor |
|                      | | [#HU018](../../modelagem/gravacoes/pedro/historias.md) | Restrição de Acesso a Dados Clínicos (Privacidade) |
|                      | | [#HU038](../../modelagem/gravacoes/pedro/historias.md) | Logs de Acesso e Modificações (Auditabilidade) |
|                      | | [#HU039](../../modelagem/gravacoes/pedro/historias.md) | Avaliação Numérica de Médicos Veterinários |
|                      | | [#HU040](../../modelagem/gravacoes/pedro/historias.md) | Envio de Comentários sobre Estabelecimentos |
| Mateus Negrini | | [#HU019](../../modelagem/gravacoes/mateus/historias.md) | Acesso à Área de Instruções Integradas |
|                      | | [#HU020](../../modelagem/gravacoes/mateus/historias.md) | Notificação Periódica para Atualização de Dados e Fotos do Animal |
|                      | | [#HU021](../../modelagem/gravacoes/mateus/historias.md) | Indicador Visual da Média de Avaliações no Perfil de Médicos Veterinários |
|                      | | [#HU022](../../modelagem/gravacoes/mateus/historias.md) | Alertas e Notificações Automáticas para Vacinas e Lembretes de Medicação |
|                      | | [#HU023](../../modelagem/gravacoes/mateus/historias.md) | Emissão de Alertas de Acesso Suspeito ou Tentativas de Violação |
|                      | | [#HU024](../../modelagem/gravacoes/mateus/historias.md) | Vincular Foto do Tutor ao Registro de Adoção |
| Heloisa Silva  | | [#HU032](../../modelagem/gravacoes/heloisa/historias.md) | Mapa interatico com localização de estabelecimentos parceiros |
|                      | | [#HU033](../../modelagem/gravacoes/heloisa/historias.md) | Filtro de distância para o mapa |
|                      | | [#HU034](../../modelagem/gravacoes/heloisa/historias.md) |  Tema para o mapa |
|                      | | [#HU035](../../modelagem/gravacoes/heloisa/historias.md) | Sistema de avaliação de estabelecimentos parceiros |
|                      | | [#HU036](../../modelagem/gravacoes/heloisa/historias.md) | Validação visual para o avaliador de estabelecimentos |
|                      | | [#HU037](../../modelagem/gravacoes/heloisa/historias.md) | Notificação para o estabelecimento avaliado |
| Isaac Menezes  | | [#HU026](../../modelagem/gravacoes/isaac/historias.md) | Indicador visual da média de avaliações no perfil da clínica/hospital |
|                      | | [#HU027](../../modelagem/gravacoes/isaac/historias.md) | Indicador visual da média de avaliações no perfil do médico |
|                      | | [#HU028](../../modelagem/gravacoes/isaac/historias.md) | Prontuário digital centralizando histórico de saúde e vacinação |
|                      | | [#HU029](../../modelagem/gravacoes/isaac/historias.md) | Upload de foto do animal |
|                      | | [#HU030](../../modelagem/gravacoes/isaac/historias.md) | Vincular foto do tutor ao registro de dados e fotos do animal |
|                      | | [#HU031](../../modelagem/gravacoes/isaac/historias.md) | Permitir busca e recuperação de animais perdidos ou abandonados |

---

## Artefatos

<a id="hu001"></a>

### **HU001 – Sistema de Adoção**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU001 |
| **Tema** | Sistema de Adoção |
| **Descrição** | Como *tutor interessado em adotar um animal*, desejo *visualizar os animais disponíveis para adoção com informações detalhadas e filtros de busca* para *encontrar um animal que se adeque ao meu perfil e condições de cuidado*. |
| **Critérios de Aceitação** | - O sistema deve exibir uma lista com animais disponíveis para adoção. <br> - Deve ser possível filtrar os animais por espécie, porte, idade, sexo e localização. <br> - O sistema deve permitir que o usuário visualize o perfil completo do animal, incluindo histórico e status de saúde. <br> - O usuário deve poder enviar uma solicitação de adoção diretamente pela ONG cadastrada. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI016](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016)  |
| **Validação** | - |

---

<a id="hu002"></a>

### **HU002 – Alertas e Notificações Automáticas**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU002 |
| **Tema** | Alertas e Notificações Automáticas |
| **Descrição** | Como *usuário do sistema*, desejo *receber notificações automáticas sobre eventos relevantes, como status de adoção, vacinação e atualizações cadastrais*, para *manter-me informado e cumprir responsabilidades com o animal adotado*. |
| **Critérios de Aceitação** | - O sistema deve enviar alertas automáticos por e-mail e/ou aplicativo conforme as preferências do usuário. <br> - As notificações devem incluir mudanças de status de adoção, lembretes de vacinação e avisos administrativos. <br> - O sistema deve permitir configurar o tipo de alerta que o usuário deseja receber. <br> - O envio de notificações deve ocorrer de forma automática e rastreável. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI017](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfnif017)  |
| **Validação** | - |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu003"></a>

### #HU003 – Cadastro e Gerenciamento de Perfis Ampliados
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU003 |
| **Tema** | Perfis de Usuário |
| **Descrição** | Como **gestor de ONG ou protetor independente**, quero **cadastrar e gerenciar meu perfil institucional** para **oferecer transparência nas ações e facilitar o contato com tutores e parceiros**. |
| **Critérios de Aceitação** | - O sistema deve permitir o cadastro de perfis com informações institucionais (CNPJ, missão, contatos, endereço). <br> - Deve permitir atualização e edição de dados. <br> - Perfis devem ser vinculados a campanhas e adoções. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** |  [RF017](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf017) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu004"></a>

### #HU004 – Publicação de Campanhas e Materiais Educativos
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU004 |
| **Tema** | Comunicação e Educação |
| **Descrição** | Como **gestor de ONG**, desejo **publicar campanhas de adoção e materiais educativos sobre bem-estar animal**, para **aumentar o engajamento e promover adoções responsáveis**. |
| **Critérios de Aceitação** | - O sistema deve permitir o envio de campanhas com imagens e textos. <br> - Deve permitir categorizar o tipo de campanha (adoção, vacinação, eventos). <br> - O conteúdo deve ser validado antes da publicação. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RF018](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu005"></a>

### #HU005 – Exibição de Horários de Clínicas Parceiras
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU005 |
| **Tema** | Serviços e Parcerias |
| **Descrição** | Como **usuário tutor**, quero **visualizar os horários de funcionamento de clínicas veterinárias e hospitais parceiros**, para **planejar atendimentos e emergências**. |
| **Critérios de Aceitação** | - O sistema deve exibir os horários de abertura e fechamento das clínicas cadastradas. <br> - Deve indicar feriados e horários de plantão. <br> - A informação deve ser atualizada automaticamente a partir das integrações. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI005](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni005) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu006"></a>

### #HU006 – Integração Direta com Parceiros
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU006 |
| **Tema** | Integrações |
| **Descrição** | Como **administrador do sistema**, quero **integrar o SinPatinhas com sistemas de clínicas, ONGs e pet shops**, para **sincronizar informações e melhorar a gestão das parcerias**. |
| **Critérios de Aceitação** | - O sistema deve possibilitar integração via API REST. <br> - Deve permitir autenticação segura (token). <br> - As atualizações de dados devem ocorrer em tempo real. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNF014](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf014) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu007"></a>

### #HU007 – Acesso Simplificado para Usuários com Baixa Afinidade Tecnológica
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU007 |
| **Tema** | Usabilidade |
| **Descrição** | Como **protetor ou voluntário com pouca experiência tecnológica**, desejo **acessar o sistema de forma intuitiva e simples**, para **realizar cadastros e publicações sem dificuldade**. |
| **Critérios de Aceitação** | - A interface deve ter ícones descritivos e botões visíveis. <br> - Deve haver tutoriais curtos em vídeo ou texto. <br> - O sistema deve suportar acessibilidade (tamanho de fonte e contraste). |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI016](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu008"></a>

### #HU008 – Sincronização de Dados entre ONGs e Clínicas
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU008 |
| **Tema** | Integração e Comunicação |
| **Descrição** | Como **ONG cadastrada**, quero **sincronizar dados de adoção e atendimentos veterinários** com as clínicas parceiras, para **garantir a atualização das informações de cada animal**. |
| **Critérios de Aceitação** | - O sistema deve integrar registros de atendimento veterinário ao perfil do animal. <br> - Deve haver sincronização automática semanal. <br> - Em caso de falha, o sistema deve registrar o erro e notificar o administrador. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI018](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu009"></a>

### **HU009 – Compartilhamento de Informações com Familiares**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU003 |
| **Tema** | Compartilhamento de informações com familiares |
| **Descrição** | Como *tutor*, desejo *compartilhar informações do meu animal (dados cadastrais, histórico de saúde e status de adoção) com familiares autorizados*, para *que possam acompanhar e apoiar seus cuidados*. |
| **Critérios de Aceitação** | - O sistema deve permitir cadastrar familiares como “contatos autorizados”. <br> - Deve ser possível definir níveis de permissão (ex.: leitura geral, apenas vacinas/saúde). <br> - Compartilhamento por link seguro e/ou convite por e-mail. <br> - Possibilidade de revogar o acesso a qualquer momento. <br> - Registro de trilha de auditoria e consentimento conforme LGPD. |
| **Prioridade** | Baixa |
| **Status** | Não validada |
| **Rastreabilidade** | [RF025](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf025)  |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu010"></a>

### **HU010 – Notificações de Vacinas Futuras/Atrasadas**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU004 |
| **Tema** | Alertas de Vacinação |
| **Descrição** | Como *tutor*, desejo *receber notificações automáticas de vacinas futuras e alertas de vacinas atrasadas*, para *manter o calendário de vacinação do meu animal em dia*. |
| **Critérios de Aceitação** | - O sistema deve calcular e exibir o calendário vacinal. <br> - Enviar lembretes automáticos (e-mail e/ou app) antes e após a data prevista. <br> - Exibir status “No prazo”, “Próxima vacina” e “Atrasada”. <br> - Permitir configurar preferências de envio e horários. <br> - Registrar logs de envio e leitura das notificações. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RF026](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026)  |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu011"></a>

### **HU011 – Registro da Localização do Animal ou Tutor**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU005 |
| **Tema** | Geolocalização |
| **Descrição** | Como *usuário*, desejo *registrar a localização do animal ou do tutor (por GPS ou endereço)*, para *facilitar comunicações e ações em caso de perda*. |
| **Critérios de Aceitação** | - Captura de localização via GPS e/ou endereço manual. <br> - Armazenar data, hora e precisão. <br> - Histórico de localizações com filtros. <br> - Controle de permissão de visualização (tutor, ONG, familiares). <br> - Mensagens de consentimento de uso dos dados. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RF027](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027)  |

[Voltar para tabela de artefatos](#tabela_artefatos)
---

<a id="hu012"></a>

### **HU012 – Registro Detalhado de Informações do Animal**
*Autoria: Letícia Paiva*

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU006 |
| **Tema** | Cadastro detalhado do animal |
| **Descrição** | Como *usuário do sistema*, desejo *registrar informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie e endereço do tutor)*, para *manter um prontuário completo que apoie a adoção e os cuidados de saúde*. |
| **Critérios de Aceitação** | - Formulário com campos obrigatórios (nome, espécie, tutor, contato). <br> - Validações de formato e unidades (kg, cm, CEP). <br> - Upload de foto(s) do animal. <br> - Edição versionada com trilha de auditoria. <br> - Auto-preenchimento de endereço por CEP. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RF031](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf031)   |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu013"></a>

### #HU013 - Aplicativo Móvel SinPatinhas

---

<a id="hu014"></a>

### #HU014 - Acesso Offline à Ficha do Próprio Animal

---

<a id="hu015"></a>

### #HU015 - Compartilhamento de Informações com Familiares

---

<a id="hu016"></a>

### #HU016 - Notificações de Vacinas Futuras e Atrasadas

---

<a id="hu017"></a>

### #HU017 - Registro da Localização do Animal ou Tutor

---

<a id="hu018"></a>

### #HU018 - Restrição de Acesso a Dados Clínicos (Privacidade)

---

<a id="hu038"></a>

### #HU038 - Logs de Acesso e Modificações (Auditabilidade)

---

<a id="hu039"></a>

### #HU039 - Avaliação Numérica de Médicos Veterinários

---

<a id="hu040"></a>

### #HU040 - Envio de Comentários sobre Estabelecimentos

---

<a id="hu019"></a>

### #HU019 - Acesso à Área de Instruções Integradas

---

<a id="hu020"></a>

### #HU020 - Notificação Periódica para Atualização de Dados e Fotos do Animal

---

<a id="hu021"></a>

### #HU021 - Indicador Visual da Média de Avaliações no Perfil de Médicos Veterinários

---

<a id="hu022"></a>

### #HU022 - Alertas e Notificações Automáticas para Vacinas e Lembretes de Medicação

---

<a id="hu023"></a>

### #HU023 - Emissão de Alertas de Acesso Suspeito ou Tentativas de Violação

---

<a id="hu024"></a>

### #HU024 - Vincular Foto do Tutor ao Registro de Adoção

---

<a id="hu032"></a>

### #HU032 - Mapa Interativo com Localização de Estabelecimentos Parceiros

---

<a id="hu033"></a>

### #HU033 - Filtro de Distância para o Mapa

---

<a id="hu034"></a>

### #HU034 - Tema para o Mapa

---

<a id="hu035"></a>

### #HU035 - Sistema de Avaliação de Estabelecimentos Parceiros

---

<a id="hu036"></a>

### #HU036 - Validação Visual para o Avaliador de Estabelecimentos

---

<a id="hu037"></a>

### #HU037 - Notificação para o Estabelecimento Avaliado

---

<a id="hu026"></a>

### #HU026 - Indicador Visual da Média de Avaliações no Perfil da Clínica/Hospital

---

<a id="hu027"></a>

### #HU027 - Indicador Visual da Média de Avaliações no Perfil do Médico

---

<a id="hu028"></a>

### #HU028 - Prontuário Digital Centralizando Histórico de Saúde e Vacinação

---

<a id="hu029"></a>

### #HU029 - Upload de Foto do Animal

---

<a id="hu030"></a>

### #HU030 - Vincular Foto do Tutor ao Registro de Dados e Fotos do Animal

---

<a id="hu031"></a>

### #HU031 - Permitir Busca e Recuperação de Animais Perdidos ou Abandonados

---

<a id="hu041"></a>

### #HU041 – Desempenho em Consultas Públicas
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU041 |
| **Tema** | Performance |
| **Descrição** | Como **usuário do sistema**, quero **acessar consultas públicas em menos de 2 segundos**, para **obter informações de forma ágil e eficiente**. |
| **Critérios de Aceitação** | - As consultas públicas devem ter tempo de resposta inferior a 2 segundos. <br> - O sistema deve exibir mensagem informativa em caso de lentidão. <br> - Os testes de desempenho devem validar a velocidade mínima exigida. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNF004](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu042"></a>

### #HU042 – Acesso via Web e Mobile
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU042 |
| **Tema** | Portabilidade |
| **Descrição** | Como **usuário tutor ou voluntário**, quero **acessar o sistema tanto via web quanto pelo aplicativo móvel**, para **poder utilizá-lo em qualquer lugar, priorizando o uso no celular**. |
| **Critérios de Aceitação** | - O sistema deve ser responsivo e compatível com navegadores modernos. <br> - O aplicativo móvel deve possuir as mesmas funcionalidades principais do sistema web. <br> - O design deve priorizar a usabilidade em dispositivos móveis. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNFNI001](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu043"></a>

### #HU043 – Funcionalidades Offline para o Aplicativo
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU043 |
| **Tema** | Usabilidade e Disponibilidade |
| **Descrição** | Como **usuário do aplicativo móvel**, quero **acessar determinadas funcionalidades mesmo sem conexão com a internet**, para **registrar dados e consultas quando estiver em campo**. |
| **Critérios de Aceitação** | - O sistema deve permitir o uso offline de funcionalidades básicas (cadastro e consulta). <br> - As informações devem ser sincronizadas automaticamente quando a conexão for restabelecida. <br> - O aplicativo deve indicar claramente quando está operando em modo offline. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RNFNI002](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="hu044"></a>

### #HU044 – Integração Direta com Parceiros (Clínicas, ONGs e Pet Shops)
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU044 |
| **Tema** | Integração |
| **Descrição** | Como **administrador do sistema**, quero **integrar o SinPatinhas diretamente com sistemas de parceiros (clínicas, ONGs e pet shops)**, para **melhorar o fluxo de informações e reduzir redundâncias de dados**. |
| **Critérios de Aceitação** | - O sistema deve permitir integração via APIs seguras (REST). <br> - A autenticação deve ser feita com tokens ou chaves privadas. <br> - As informações trocadas devem seguir padrões definidos (JSON ou XML). |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNFNI003](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) |

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, formatação e padronização técnica do texto**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por **Antonio Carvalho** e **Letícia Paiva**, com base nos fundamentos de **Serrano & Serrano (2025)** <a id="anchor_10" href="#REF1">[1]</a> e **Pressman & Maxim (2016)** <a id="anchor_11" href="#REF2">[2]</a>.

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Antonio Carvalho | 16,6% | Autor da página de apresentação de histórias de usuário e criador dos artefatos HU003, HU004, HU005, HU006, HU007, HU008, HU041, HU042, HU043, HU043 |
| Letícia Paiva | 16,6% | Criador dos artefatos HU001, HU002, HU009, HU010, HU011, HU012 |

---

## Referências Bibliográficas

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Material de aula, Universidade de Brasília (UnB), 2025.
<a id="REF2"></a>[3] PRESSMAN, R. S.; MAXIM, B. R. *Engenharia de Software: uma abordagem profissional.* 8ª ed. Porto Alegre: AMGH, 2016. Capítulo 3 – Desenvolvimento Ágil, seção sobre Extreme Programming (XP) e Histórias de Usuário, p. 88–90.  

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 14/10/2025 | Criação da página de **Histórias de Usuário** e exemplo explicativo | Antonio | Letícia |
| 1.2 | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio | Letícia |
