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
| **Letícia Paiva**   | [CNR001](#cnr001) | [Cenário 01](/modelagem/gravacoes/leticia/cenarios.md)  | Sistema de Adoção de Animais - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)  | [Cenário 01](/modelagem/gravacoes/leticia/cenarios.md)  | Sistema de Adoção - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR002](#cnr002) | [Cenário 02](/modelagem/gravacoes/leticia/cenarios.md)  | Sistema de Adoção de Animais - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) | [Cenário 02](/modelagem/gravacoes/leticia/cenarios.md)  | Alertas e Notificações Automáticas - [**RNFI017**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Antonio Carvalho**| [CNR003](#cnr003) | [Cenário 03](/modelagem/gravacoes/antonio/cenarios.md)  | Sistema de Adoção de Animais - [**RNFI016**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR004](#cnr004) | [Cenário 04](/modelagem/gravacoes/antonio/cenarios.md)  | Notificação Periódica para Atualização de Dados e Fotos do Animal - [**RNFI021**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR013](#cnr013) | [Cenário 13](/modelagem/gravacoes/antonio/cenarios.md)  | Acesso via Web e Mobile - [**RNFNI001**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR014](#cnr014) | [Cenário 14](/modelagem/gravacoes/antonio/cenarios.md)  | Funcionalidades Offline - [**RNFNI002**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR015](#cnr015) | [Cenário 15](/modelagem/gravacoes/antonio/cenarios.md)  | Integração Direta com Parceiros - [**RNFNI003**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Heloisa Santos**  | [CNR005](#cnr005) | [Cenário 05](/modelagem/gravacoes/heloisa/cenarios.md)  | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados - [**RFNI001**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR006](#cnr006) | [Cenário 06](/modelagem/gravacoes/heloisa/cenarios.md)  | Sistema de avaliação numérica para estabelecimentos - [**RFNI010**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Pedro Gomes**     | [CNR007](#cnr007) | [Cenário 07](/modelagem/gravacoes/pedro/cenarios.md)  | Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) - [**RF05**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR008](#cnr008) | [Cenário 08](/modelagem/gravacoes/pedro/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Isaac Menezes**   | [CNR009](#cnr009) | [Cenário 09](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos na clínica/hospital - [**RFNI014**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR010](#cnr010) | [Cenário 10](/modelagem/gravacoes/isaac/cenarios.md)  | Indicador visual da média de atendimentos por médico - [**RFNI015**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
| **Luciano Machado** | —           | — |
| **Mateus Negrini**  | [CNR011](#cnr011) | [Cenário 11](/modelagem/gravacoes/mateus/cenarios.md)  | Acesso à Área de Instruções Integradas - [**RF033**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |
|                     | [CNR012](#cnr012) | [Cenário 12](/modelagem/gravacoes/mateus/cenarios.md)  | Notificação Periódica de Atualização - [**RF044**](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md) |

---

## Artefatos

<a id="cnr001"></a>

### #CNR001 – Cenário 01 — Sistema de Adoção ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))

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

<a id="cnr002"></a>

### #CNR002 – Cenário 02 — Alertas e Notificações Automáticas ([RFNI017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni017))

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

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/loBusGtCcjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de cenários. |

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

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/loBusGtCcjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de cenários. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr005"></a>

### #CNR005 – 

---

<a id="cnr006"></a>

### #CNR006 – 

---

<a id="cnr007"></a>

### #CNR007 – Cenário 07 — Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001)

**Autor:** Pedro Gomes

**Tabela – Cenário 07: Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001)**

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) |
| **Código** | CNR007 |
| **Caso de uso trabalhado** | — |

**Ambiente/Contexto**  
Local: Via pública.  
Tempo: Ao se deparar com um animal perdido.  
Pré-condição: O tutor que encontrou o animal possui o aplicativo SINPatinhas instalado e acesso à internet; o animal encontrado possui identificação RGA visível.

**Atores**  
Ana Beatriz, 22 anos, estudante de Engenharia Aeroespacial na UnB e tutora de um cão.

**Objetivos**  
Permitir que qualquer pessoa identifique rapidamente um animal perdido e contate seu tutor usando o aplicativo móvel “SINPatinhas”.

**Planejamento**  
O ator deseja agir de forma rápida ao encontrar um animal perdido, permitindo contato imediato com o tutor para facilitar a devolução.

**Ações**  
1. Ana Beatriz encontra o cão perdido e identifica o número de RGA em sua coleira.  
2. Ela abre o aplicativo “SINPatinhas” em seu smartphone.  
3. Na tela inicial, seleciona a opção “Consultar Animal”.  
4. Digita o número de RGA e confirma a busca.  
5. O aplicativo exibe a ficha pública do animal, incluindo nome e telefone do tutor.  
6. Ela toca no número exibido e inicia uma chamada para o tutor.

**Eventos**  
- Consulta do RGA no sistema.  
- Exibição de informações públicas do animal no aplicativo.  
- Contato direto via telefone com o tutor.

**Avaliação**  
A usuária confirma que a ficha do animal está correta e que o contato com o tutor foi realizado com sucesso.

**Exceção**  
Caso Ana Beatriz não tenha o aplicativo instalado, ela precisa baixar o app na loja de aplicativos, o que pode atrasar o contato com o tutor.


---

<a id="cnr008"></a>

### #CNR008 – Cenário 08 — Acesso Offline à Ficha do Próprio Animal (RNF06)

**Autor:** Pedro Gomes

**Tabela – Cenário 08: Acesso Offline à Ficha do Próprio Animal (RNF06)**

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Acesso Offline à Ficha do Próprio Animal |
| **Código** | CNR008 |
| **Caso de uso trabalhado** | [UC00](...) |

**Ambiente/Contexto**  
Local: Portal do tutor acessado pelo aplicativo móvel.  
Tempo: A qualquer momento após o cadastro do animal.  
Pré-condição: O tutor deve estar logado, possuir o animal no perfil e ter utilizado a função “Salvar Ficha Offline”.

**Atores**  
Ana Beatriz, 22 anos, estudante de Engenharia Aeroespacial na UnB e tutora de um cão.

**Objetivos**  
Permitir que o tutor acesse informações essenciais de seu animal mesmo sem conexão à internet.

**Planejamento**  
O ator quer garantir disponibilidade dos dados de seu animal em locais remotos, como viagens, áreas rurais ou ambientes sem sinal.

**Ações**  
1. (Com internet) Ana Beatriz abre o aplicativo SINPatinhas.  
2. Acessa o perfil de seu cão, Logan.  
3. Seleciona a opção “Disponibilizar offline”.  
4. O aplicativo baixa e armazena os dados de Logan localmente e confirma a operação.  
5. (Sem internet) Em uma área sem sinal, ela precisa consultar a carteira de vacinação.  
6. Abre o app, que identifica ausência de conexão e exibe “Animais Salvos”.  
7. Ela abre o perfil de Logan e acessa a ficha completa offline.

**Eventos**  
- Download e armazenamento local da ficha do animal.  
- Acesso offline aos dados.  
- Exibição automática de seção offline ao detectar ausência de internet.

**Avaliação**  
A usuária verifica que a ficha completa de Logan está disponível offline e pode ser exibida quando necessário.

**Exceção**  
Caso Ana Beatriz esqueça de salvar a ficha antes da viagem, o aplicativo exibe:  
“Sem conexão com a internet. Conecte-se a uma rede para acessar os dados.”

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aQEyRPqPqsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
---

<a id="cnr009"></a>

### #CNR009 – Indicador visual da média de atendimentos na clínica/hospital – [RFNI014](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)
**Autor:** Isaac Menezes


**Tabela 3 – Cenário 09: Sistema de Avaliação Numérica para Estabelecimentos ([RFNI014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni014))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Sistema de Avaliações Numérica para Estabelecimentos |
| **Código** | CNR009 |
| **Caso de uso trabalhado** | [UC011](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc011) |

**Ambiente/Contexto**  
Local: Portal do tutor ou aplicativo SinPatinhas.  
Tempo: A qualquer momento.  
Pré-condição: Tutor possui o aplicativo e acessou um perfil de clínica que existe.

**Atores**  
Dono de pet.

**Objetivos**  
Informar ao usuário as avaliações oriundas de outros clientes sobre a clínica em questão.

**Planejamento**  
O ator deseja visualizar as avaliações da clínica feitas por outros clientes.

**Ações**  
1. O ator baixa o aplicativo.  
2. O ator se cadastra na sua conta.  
3. O ator pesquisa uma clínica que possua conta no aplicativo.  
4. O ator visualiza as avaliações.  

**Eventos**  
- Visualização de avaliações.  
- Apresentação da média de avaliações.  

**Avaliação**  
O ator visualiza as avaliações e suas médias.

**Exceção**  
Caso a clínica não possua perfil no aplicativo, uma mensagem com a informação é exibida.

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/11jM07-XxTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr010"></a>

### #CNR010 – Indicador visual da média de atendimentos por médico (Clínica/Hospital) – [RFNI015](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)
**Autor:** Isaac Menezes


**Tabela 4 – Cenário 10:  ([RFNI015](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni015))**

| **Componente** | **Descrição** |
|-----------------|----------------|
| **Título** | Indicador visual da média de atendimentos por médico |
| **Código** | CNR010 |
| **Caso de uso trabalhado** | [UC011](../../../modelagem/gravacoes/antonio/caso_de_uso.md#uc011) |

**Ambiente/Contexto**  
Local: Perfil do médico cadastrado no aplicativo SinPatinhas.  
Tempo: A qualquer momento.  
Pré-condição: Tutor possui o aplicativo e acessou um perfil de médico existente.

**Atores**  
Dono de pet.

**Objetivos**  
Informar ao usuário as avaliações oriundas de outros clientes sobre o médico em questão.

**Planejamento**  
O ator deseja visualizar as avaliações do médico feitas por outros clientes.

**Ações**  
1. O ator baixa o aplicativo.  
2. O ator se cadastra na sua conta.  
3. O ator pesquisa um médico que possua conta no aplicativo.  
4. O ator visualiza as avaliações.  

**Eventos**  
- Visualização de avaliações.  
- Apresentação da média de avaliações.  

**Avaliação**  
O ator visualiza as avaliações e suas médias.

**Exceção**  
Caso o médico não possua perfil no aplicativo, uma mensagem com a informação é exibida.

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 23 de novembro.

<iframe width="560" height="315" src="https://youtu.be/11jM07-XxTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Isaac Menezes | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Rebecca Menezes | Estudante de Direito tutora de pet. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

[Voltar para tabela de artefatos](#tabela_artefatos)

---

<a id="cnr011"></a>

### #CNR011 – Indicador Visual da Média de Atendimentos por Médico – [RFNI015](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

**Tabela 1 – Cenário 07: Acesso à Área de Instruções Integradas (RF033)**  
*Autoria: Mateus Santos Negrini*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#CEN11` |
| **Título** | Usuário Acessa a Área de Instruções Integradas |
| **Metas/Objetivos** | Disponibilizar um ambiente centralizado onde tutores, veterinários e ONGs possam acessar instruções, orientações e materiais educativos relacionados à saúde, bem-estar e regulamentação de animais. |
| **Contexto** | **Local:** Portal web ou aplicativo do SinPatinhas.<br>**Tempo:** A qualquer momento, mediante acesso autenticado.<br>**Pré-condição:** O usuário deve possuir um cadastro ativo no sistema e estar logado em sua conta. |
| **Ator(es)** | Tutor do Animal; Veterinário; Representante de ONG; Sistema SinPatinhas. |
| **Recursos** | Computador ou smartphone com acesso à internet; base de dados com documentos e materiais de instrução. |
| **Episódios** | 1. O usuário acessa o sistema SinPatinhas e realiza login com suas credenciais.<br>2. No menu principal, ele seleciona a opção "Área de Instruções Integradas".<br>3. O sistema exibe uma página com seções temáticas (ex: cuidados básicos, legislação, vacinação, adoção responsável).<br>4. O usuário escolhe uma categoria e visualiza os materiais disponíveis, como artigos, vídeos ou manuais.<br>5. O sistema permite realizar buscas por palavras-chave e filtrar o conteúdo por tipo de material.<br>6. O usuário pode abrir, baixar ou compartilhar os conteúdos disponíveis.<br>7. O sistema registra o acesso para fins de acompanhamento e melhoria dos conteúdos. |
| **Exceção** | O usuário tenta acessar a área sem estar autenticado. O sistema redireciona automaticamente para a tela de login e exibe a mensagem “É necessário estar logado para acessar esta funcionalidade.” |
---

<a id="cnr012"></a>

### #CNR012 – Acesso à Área de Instruções Integradas – [RF033](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

**Tabela 2 – Cenário 08: Notificação Periódica de Atualização (RF044)**  
*Autoria: Mateus Santos Negrini*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#CEN12` |
| **Título** | Sistema Envia Notificação de Atualização Cadastral ao Tutor |
| **Metas/Objetivos** | Garantir que os tutores mantenham atualizadas as informações e fotos dos animais cadastrados, reforçando a confiabilidade do sistema. |
| **Contexto** | **Local:** Acesso ao e-mail ou sistema web do SinPatinhas.<br>**Tempo:** Periodicamente a cada 1 ano.<br>**Pré-condição:** O tutor possui cadastro ativo e um ou mais animais registrados no sistema. |
| **Ator(es)** | Tutor do Animal; Sistema SinPatinhas. |
| **Recursos** | Servidor de notificações automáticas, banco de dados dos registros dos animais, e-mail cadastrado do tutor. |
| **Episódios** | 1. O sistema verifica periodicamente os cadastros de animais e identifica aqueles com mais de 6 meses sem atualização.<br>2. O sistema gera uma notificação automática para o tutor, enviada por e-mail ou exibida no painel do usuário.<br>3. O tutor acessa o link da notificação e é direcionado para o perfil do animal no sistema.<br>4. O tutor revisa as informações, podendo atualizar fotos, endereço, dados de saúde ou status do animal.<br>5. O sistema registra a atualização e emite mensagem de confirmação. |
| **Exceção** | O tutor não realiza a atualização dentro de 30 dias. O sistema envia um segundo lembrete automático e marca o cadastro do animal como “pendente de atualização”. |
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

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/loBusGtCcjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de cenários. |

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

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/loBusGtCcjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de cenários. |

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

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/loBusGtCcjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de cenários. |

[Voltar para tabela de artefatos](#tabela_artefatos)

---

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
| Mateus Santos Negrini | 16,6% | Criador dos artefatos CNR011 e CNR012 |
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
| **1.3** | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio | Letícia |