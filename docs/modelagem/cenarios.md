# Cenários - Projeto SinPatinhas

## Introdução aos Cenários  

A **modelagem de requisitos** é a atividade de elaborar modelos capazes de representar características ou comportamentos de um software [1].  
O principal objetivo da modelagem é **tratar aspectos — sejam eles muito abstratos ou muito técnicos — com um apelo visual** [1].  
Essa abordagem busca tornar mais concretos e claros os conceitos abstratos e, ao mesmo tempo, simplificar os aspectos técnicos que podem ser complexos e pouco conhecidos pelos clientes de um software [1].

Existem diversas propostas de modelagem, cada uma focada em um aspecto chave do sistema, como **requisitos funcionais ou não funcionais** [1].  
Dentro deste contexto, a **técnica de Cenários** se destaca como uma estratégia reconhecida para compreender as interações entre ambientes e sistemas [1].

O foco desta técnica é **elicitar a parte comportamental do software**, descrevendo sua dinâmica e seu fluxo de interações [1].  
Ao transformar o uso do sistema em uma narrativa concreta, os **cenários oferecem uma visão prática de como ele funcionará**, facilitando o entendimento, a comunicação e a descoberta de novos requisitos.



## Metodologia de Criação de Cenários 

A metodologia para a criação de um cenário consiste em estruturar uma narrativa por meio de abstrações específicas, garantindo que a descrição da interação seja clara e completa [1]. As etapas, baseadas nos componentes definidos no material de aula, são as seguintes:

**Tabela 1 – Estrutura para Criação de um Cenário**  
*Autoria: Letícia Paiva*

| **Componente**     | **Descrição**                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------|
| **Título**         | Nome que identifica o cenário.                                                                     |
| **Código** | Código do Cenário |
| **Caso de uso trabalhado** | #UC00X |
| **Metas/Objetivos**| Descreve a finalidade ou o propósito a ser alcançado no cenário.                                   |
| **Contexto**       | Define as condições em que o cenário ocorre, como local, tempo e pré-condições.                   |
| **Ator(es)**       | As pessoas, sistemas ou entidades que participam das interações descritas.                         |
| **Recursos**       | Os objetos ou ferramentas necessários para a execução das ações no cenário.                        |
| **Episódios**      | A sequência de ações ou eventos que descrevem o fluxo principal do cenário.                        |
| **Exceção**        | Descreve o tratamento para situações anormais, inesperadas ou de erro que podem ocorrer.           |

---

<a id="tabela_artefatos"></a>
## Artefatos e gravações unitários 

A **Tabela 2** apresenta todos os integrantes da equipe que participaram da construção dos Cenários, juntamente com uma descrição do cenário que cada um desenvolveu no projeto.

**Tabela 2 – Integrantes do Grupo Envolvidos**  
*Autoria: Antonio Carvalho*

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|--------------|------------------|------------------|
| **Letícia Paiva**   |  | [Cenário 01](/modelagem/gravacoes/leticia/cenarios.md)  | Sistema de Adoção - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|    |  | [Cenário 02](/modelagem/gravacoes/leticia/cenarios.md)  | Alertas e Notificações Automáticas - [**RNFI017**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Antonio Carvalho**| [CNR003](#cnr003) | [Cenário 03](/modelagem/gravacoes/antonio/cenarios.md)  | Sistema de Adoção de Animais - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| | [CNR004](#cnr004) | [Cenário 04](/modelagem/gravacoes/antonio/cenarios.md)  | Notificação Periódica para Atualização de Dados e Fotos do Animal - [**RNFI021**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| | [CNR013](#cnr013) | [Cenário 13](/modelagem/gravacoes/antonio/cenarios.md)  | Acesso via Web e Mobile - [**RNFNI001**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| | [CNR014](#cnr014) | [Cenário 14](/modelagem/gravacoes/antonio/cenarios.md)  | Funcionalidades Offline - [**RNFNI002**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| | [CNR015](#cnr015) | [Cenário 15](/modelagem/gravacoes/antonio/cenarios.md)  | Integração Direta com Parceiros - [**RNFNI003**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Heloisa Santos**  |  | [Cenário 05](/modelagem/gravacoes/heloisa/cenarios.md)  | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados - [**RFNI001**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|   |  | [Cenário 06](/modelagem/gravacoes/heloisa/cenarios.md)  | Sistema de avaliação numérica para estabelecimentos - [**RFNI010**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Pedro Gomes**     |  | [Cenário 07](/modelagem/gravacoes/pedro/cenarios.md)  | Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) - [**RF05**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|      |  | [Cenário 08](/modelagem/gravacoes/pedro/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Isaac Menezes**   |  | [Cenário 09](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos na clínica/hospital - [**RFNI014**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|    |  | [Cenário 10](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos por médico - [**RFNI015**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Luciano Machado** | —           | — |
| **Mateus Negrini** |  | [Cenário 11](/modelagem/gravacoes/mateus/cenarios.md)  | Acesso à Área de Instruções Integradas - [**RF033**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|  |  | [Cenário 12](/modelagem/gravacoes/mateus/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Artefatos

<a id="cen001"></a>

### #CEN001 – Cenário 01 — Sistema de Adoção ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))

**Autora:** Letícia Paiva  

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Busca por Animal no Site de Adoção |
| **Código** | CEN001 |
| **Caso de uso trabalhado** | [UC003](../../../modelagem/casos_de_uso.md#uc003) |

### **Ambiente/Contexto**
Local: Site de adoção acessado via navegador web em computador ou smartphone.  
Tempo: Indeterminado.  
Pré-condição: Usuário com acesso à internet e conhecimento do endereço do site.

### **Atores**
Candidato a Adotante.

### **Objetivos**
Permitir que um candidato busque um animal com características específicas e manifeste interesse pela adoção.

### **Planejamento**
O adotante deseja encontrar um animal adequado ao seu perfil usando filtros detalhados.

### **Ações**
1. O adotante acessa o site e navega até **“Adoção”**.  
2. Utiliza filtros como espécie, porte e idade.  
3. O sistema exibe os animais compatíveis.  
4. O adotante abre o perfil de um animal.  
5. Clica em **“Tenho Interesse em Adotar”**.  
6. O sistema processa e envia a solicitação para a ONG responsável.  
7. Mensagem de confirmação é exibida.

### **Eventos**
- Exibição de perfis filtrados.  
- Visualização de detalhes.  
- Envio de notificação à ONG.  
- Registro da intenção de adoção.

### **Avaliação**
O ator confirma se conseguiu buscar, visualizar e enviar solicitação por um animal.

### **Exceção**
Se o animal já tiver sido adotado, o sistema informa indisponibilidade e sugere animais similares.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

---

<a id="cen002"></a>

### #CEN002 – Cenário 02 — Alertas e Notificações Automáticas ([RFNI017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni017))

**Autora:** Letícia Paiva  

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Tutor Agenda Notificação de Saúde no Site |
| **Código** | CEN002 |
| **Caso de uso trabalhado** | [UC004](../../../modelagem/casos_de_uso.md#uc004) |

### **Ambiente/Contexto**
Local: Casa do tutor, usando um computador.  
Tempo: Após consulta veterinária.  
Pré-condição: Tutor autenticado e pet cadastrado.

### **Atores**
Tutor do Animal.

### **Objetivos**
Agendar lembretes de saúde e receber notificações automáticas por e-mail.

### **Planejamento**
O ator deseja organizar compromissos de saúde do pet de forma segura e automatizada.

### **Ações**
1. O tutor acessa o site e faz login.  
2. Seleciona o perfil do pet.  
3. Acessa **“Lembretes de Saúde”** e clica em **“Novo Agendamento”**.  
4. Escolhe o tipo de lembrete (ex.: vacina).  
5. Preenche nome, data e hora.  
6. O sistema salva e confirma o agendamento.  
7. Na data definida, o sistema envia e-mail ao tutor.

### **Eventos**
- Criação do agendamento.  
- Programação da notificação.  
- Envio automático do lembrete.

### **Avaliação**
O tutor confirma se recebeu a notificação e se o lembrete foi registrado corretamente.

### **Exceção**
Se a **data** não for preenchida, o sistema destaca o campo obrigatório e bloqueia o salvamento.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr003"></a>

### #CNR003 - Cenário 03 — Sistema de Adoção de Animais ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))

**Autor:** Antonio Carvalho


**Tabela 1 – Cenário 03: Sistema de Adoção de Animais ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Sistema de Adoção de Animais |
| **Código** | CNR003 |
| **Caso de uso trabalhado** | [UC001](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc001) |

**Ambiente/Contexto**  
Local: Portal do SinPatinhas acessado via navegador web ou aplicativo móvel.  
Tempo: Quando o tutor ou ONG deseja disponibilizar um animal para adoção.  
Pré-condição: Usuário autenticado (tutor ou ONG) com animal cadastrado.

**Atores**  
Douglas, 23 anos, estudante de engenharia de software na UnB, tutor de um cão, deseja adotar outro animal.

**Objetivos**  
Permitir a divulgação de animais disponíveis para adoção e facilitar o contato entre tutores/ONGs e adotantes interessados.

**Planejamento**  
O ator deseja encontrar um novo animal para adoção, com informações seguras e verificadas.

**Ações**  
1. Douglas acessa o módulo “Adoção”.  
2. Visualiza lista de animais disponíveis com fotos e informações básicas.  
3. Filtra por espécie, idade e localização.  
4. Seleciona um animal de interesse.  
5. Envia solicitação de adoção.  
6. O sistema notifica o responsável pelo animal.

**Eventos**  
- Exibição de perfis de animais disponíveis.  
- Envio de notificações entre usuários.  
- Atualização do status de “Disponível” para “Em processo de adoção”.

**Avaliação**  
O ator confirma se conseguiu visualizar e solicitar a adoção com sucesso.

**Exceção**  
Caso o animal seja adotado antes da solicitação, o sistema exibe uma mensagem informando indisponibilidade.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr004"></a>

### #CNR004 - Cenário 04 — Notificação Periódica para Atualização de Dados e Fotos do Animal ([RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021))

**Autor:** Antonio Carvalho


**Tabela 2 – Cenário 04: Notificação Periódica para Atualização de Dados e Fotos do Animal ([RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Notificação Periódica para Atualização de Dados e Fotos |
| **Código** | CNR004 |
| **Caso de uso trabalhado** | [UC002](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc002) |

**Ambiente/Contexto**  
Local: Portal do tutor ou aplicativo SinPatinhas.  
Tempo: Periodicamente (a cada 6 meses, por exemplo).  
Pré-condição: Tutor autenticado com animal registrado no sistema.

**Atores**  
Douglas, 23 anos, estudante de engenharia de software na UnB, tutor de um cão.

**Objetivos**  
Manter os registros do animal atualizados, garantindo precisão das informações e fotos recentes.

**Planejamento**  
O ator deseja manter o cadastro de seu animal sempre atualizado, evitando inconsistências e facilitando sua identificação.

**Ações**  
1. O sistema envia notificação automática ao tutor.  
2. Douglas acessa o link da notificação.  
3. Verifica os dados atuais do animal.  
4. Atualiza informações ou envia nova foto.  
5. O sistema salva as alterações e confirma a atualização.

**Eventos**  
- Envio de notificações automáticas.  
- Registro da data da última atualização.  
- Atualização da base de dados do animal.

**Avaliação**  
O ator verifica se a atualização foi concluída e se as novas informações estão visíveis no perfil do animal.

**Exceção**  
Caso o tutor ignore a notificação por um longo período, o sistema envia novo lembrete ou alerta visual no perfil.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr005"></a>

### #CNR005 – Acesso via Web e Mobile – [RNFNI001](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr006"></a>

### #CNR006 – Funcionalidades Offline – [RNFNI002](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr007"></a>

### #CNR007 – Integração Direta com Parceiros – [RNFNI003](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr008"></a>

### #CNR008 – Exibir Mapa Interativo de Clínicas e Hospitais – [RFNI001](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr009"></a>

### #CNR009 – Sistema de Avaliação Numérica para Estabelecimentos – [RFNI010](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr010"></a>

### #CNR010 – Indicador Visual da Média de Atendimentos (Clínica/Hospital) – [RFNI014](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr011"></a>

### #CNR011 – Indicador Visual da Média de Atendimentos por Médico – [RFNI015](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr012"></a>

### #CNR012 – Acesso à Área de Instruções Integradas – [RF033](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

---

<a id="cnr013"></a>

### #CNR013 - Cenário 13 — Acesso via Web e Mobile ([RNFNI001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001))

**Autor:** Antonio Carvalho

**Tabela 3 – Cenário 13: Acesso via Web e Mobile ([RNFNI001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Acesso via Web e Mobile |
| **Código** | CNR013 |
| **Requisito associado** | [RNFNI001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) |

**Ambiente/Contexto**  
Local: Portal SinPatinhas e aplicativo móvel.  
Tempo: Quando o usuário deseja acessar o sistema em diferentes dispositivos.  
Pré-condição: Sistema hospedado com suporte responsivo e autenticação unificada.

**Atores**  
Douglas, 23 anos, estudante de engenharia de software, deseja acessar sua conta tanto no computador quanto no celular.

**Objetivos**  
Garantir que o usuário tenha acesso total ao sistema, independentemente da plataforma utilizada.

**Planejamento**  
O ator deseja usar o SinPatinhas no celular para facilitar o acompanhamento de notificações e, em outros momentos, no computador para atualizar informações mais detalhadas.

**Ações**  
1. Douglas acessa o SinPatinhas via navegador no desktop.  
2. Faz login e utiliza as funcionalidades normalmente.  
3. Posteriormente, acessa o aplicativo no celular.  
4. Verifica que seus dados e preferências estão sincronizados.  
5. Recebe notificações push no mobile.  

**Eventos**  
- Sincronização automática de dados entre web e mobile.  
- Autenticação compartilhada via conta única.  
- Adaptação de interface responsiva.  

**Avaliação**  
O ator confirma que conseguiu acessar todas as funcionalidades tanto pelo navegador quanto pelo aplicativo.

**Exceção**  
Caso o dispositivo móvel não seja compatível, o sistema exibe instruções para instalação de versão alternativa (PWA ou web responsiva).

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr014"></a>

### #CNR014 - Cenário 14 — Funcionalidades Offline ([RNFNI002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002))

**Autor:** Antonio Carvalho

**Tabela 4 – Cenário 14: Funcionalidades Offline ([RNFNI002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Funcionalidades Offline |
| **Código** | CNR014 |
| **Requisito associado** | [RNFNI002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) |

**Ambiente/Contexto**  
Local: Aplicativo móvel SinPatinhas.  
Tempo: Quando o usuário não possui conexão à internet.  
Pré-condição: Dados principais sincronizados previamente com o servidor.

**Atores**  
Douglas, tutor de um cão, precisa visualizar o histórico de adoções e informações do animal mesmo sem conexão.

**Objetivos**  
Permitir acesso limitado a dados essenciais, como fichas de animais e histórico, mesmo em modo offline.

**Planejamento**  
O ator deseja consultar informações sobre seu animal durante uma viagem sem internet.

**Ações**  
1. Douglas abre o aplicativo em modo offline.  
2. O sistema exibe aviso informando o modo limitado.  
3. Ele acessa os dados sincronizados localmente.  
4. Consulta informações de contato e registros do animal.  
5. Quando a conexão é restabelecida, o sistema atualiza automaticamente as informações.

**Eventos**  
- Armazenamento temporário de dados localmente.  
- Sincronização automática pós-reconexão.  
- Indicação visual do modo offline.  

**Avaliação**  
O ator confirma que conseguiu consultar os dados mesmo sem internet e que tudo foi atualizado corretamente após reconexão.

**Exceção**  
Caso o usuário nunca tenha sincronizado antes, o sistema exibe mensagem indicando que o acesso offline não está disponível.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr015"></a>

### #CNR015 - Cenário 15 — Integração Direta com Parceiros ([RNFNI003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003))

**Autor:** Antonio Carvalho

**Tabela 5 – Cenário 15: Integração Direta com Parceiros ([RNFNI003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Integração Direta com Parceiros |
| **Código** | CNR015 |
| **Requisito associado** | [RNFNI003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) |

**Ambiente/Contexto**  
Local: Portal SinPatinhas, módulo de parcerias.  
Tempo: Quando clínicas, ONGs ou pet shops integram seus dados diretamente à plataforma.  
Pré-condição: Parceiro cadastrado e autenticado via API segura.

**Atores**  
Clínica “Pet Vida”, parceira cadastrada no sistema, deseja atualizar automaticamente suas informações de serviços e horários.

**Objetivos**  
Garantir integração automatizada e segura de informações entre o sistema SinPatinhas e plataformas parceiras.

**Planejamento**  
O ator (clínica parceira) deseja reduzir retrabalho e manter as informações de contato sempre atualizadas na plataforma.

**Ações**  
1. A clínica autentica-se na API do SinPatinhas.  
2. Envia dados atualizados de serviços e disponibilidade.  
3. O sistema valida e atualiza automaticamente o cadastro da clínica.  
4. As informações ficam visíveis para os usuários.  
5. Notificações são enviadas em caso de inconsistência.  

**Eventos**  
- Comunicação via API REST segura (HTTPS).  
- Atualização automática de dados de parceiros.  
- Registro de logs de integração.  

**Avaliação**  
O parceiro confirma que as informações foram integradas corretamente e exibidas no portal.

**Exceção**  
Em caso de falha na autenticação ou envio de dados incorretos, o sistema rejeita a atualização e envia notificação de erro.

[Voltar para tabela de artefatos](#tabela_artefatos)

---

## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| Antonio Carvalho | 16,6% | Editor da página de apresentação de cenários e criador dos artefatos CNR003, CNR004, CNR013, CNR014, CNR015 |
| Letícia Paiva | 16,6% | Editora da página de apresentação de cenários e criador dos artefatos CNR001 e CNR002 |
---

## Referências  

Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---

## Tabela de Versionamento

| **Versão** | **Data**   | **Descrição**                                                        | **Autores** | **Revisores** |
|-----------:|------------|--------------------------------------------------------------------|--------------|---------------|
| **1.0**    | 09/10/2025 | Criação da página de **Cenários**.| Letícia Paiva | Antonio Carvalho |
| **1.1**    | 11/10/2025 | Alteração da página de **Cenários**.| Antonio Carvalho | Letícia Paiva |
| **1.2**    | 18/10/2025 | Melhoria na exibição das **tabelas**. | Isaac Menezes Pereira | Antonio Carvalho
| **1.3** | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio |  |