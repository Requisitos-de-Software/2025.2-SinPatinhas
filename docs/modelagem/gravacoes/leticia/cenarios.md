# Cenários - Letícia Paiva

## Cenário 01 — Sistema de Adoção (RF03)  

A seguir, o cenário para o requisito **Sistema de Adoção (RF03)** é detalhado, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.  

**Tabela 1 – Cenário 01: Sistema de Adoção (RF03)**  
*Autoria: Letícia Paiva*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Busca por Animal no Site de Adoção |
| **Metas/Objetivos** | Um usuário do site deve conseguir buscar um animal com um perfil específico e manifestar interesse para iniciar o processo de adoção. |
| **Contexto** | **Local:** Acesso ao site via navegador web, em um computador ou smartphone.<br>**Tempo:** Indeterminado.<br>**Pré-condição:** O usuário tem acesso à internet e conhece o endereço do site. |
| **Ator(es)** | Candidato a Adotante. |
| **Recursos** | Computador ou smartphone com navegador web e conexão com a internet. |
| **Episódios** | 1. O candidato a adotante acessa o site e navega para a área *"Adoção"*. <br> 2. Ele utiliza os filtros de busca para refinar os resultados (ex: espécie, porte, idade). <br> 3. O sistema exibe os perfis compatíveis na página. <br> 4. O candidato clica e visualiza o perfil completo de um animal. <br> 5. Após ler as informações, ele clica no botão *"Tenho Interesse em Adotar"*. <br> 6. O site processa a solicitação, notifica a ONG responsável e exibe uma mensagem de confirmação na tela do usuário. |
| **Exceção** | Ao tentar manifestar interesse, o sistema verifica que o animal selecionado já foi adotado. Uma mensagem é exibida informando a indisponibilidade, e o sistema sugere perfis de animais semelhantes. |

---

## Cenário 02 — Alertas e Notificações Automáticas (RF04)  

**Tabela 2 – Cenário 02: Alertas e Notificações Automáticas (RF04)**  
*Autoria: Letícia Paiva*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Tutor Agenda Notificação de Saúde no Site |
| **Metas/Objetivos** | Um tutor deve conseguir agendar um lembrete no site para ser notificado sobre um evento de saúde futuro de seu pet. |
| **Contexto** | **Local:** Em casa, utilizando um computador.<br>**Tempo:** Após uma consulta veterinária.<br>**Pré-condição:** O tutor possui um cadastro no site e já tem o perfil do seu animal registrado em sua área pessoal. |
| **Ator(es)** | Tutor do Animal. |
| **Recursos** | Computador com navegador web e informações sobre a data da vacina ou medicação. |
| **Episódios** | 1. O tutor acessa o site, faz login e seleciona o perfil do seu pet. <br> 2. Ele navega até a funcionalidade *"Lembretes de Saúde"* e clica em *"Novo Agendamento"*. <br> 3. Ele seleciona o tipo de lembrete (ex: *"Vacina"*). <br> 4. O tutor preenche as informações necessárias (nome da vacina, data, hora). <br> 5. O site salva as informações e exibe uma mensagem de sucesso. <br> 6. Na data definida, o sistema envia uma notificação por e-mail para o endereço cadastrado do tutor. |
| **Exceção** | O tutor tenta salvar um agendamento sem preencher o campo obrigatório *"Data"*. O site exibe um alerta na tela, destacando o campo que precisa ser preenchido antes de prosseguir. |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---

## Histórico de Versão  

| **Versão** | **Data**   | **Descrição**                                                        | **Autores** | **Revisores** |
|-----------:|------------|--------------------------------------------------------------------|--------------|---------------|
| **1.0**    | 09/10/2025 | Adição dos cenários com requisitos RF03 e RF04. | Letícia Paiva | Antonio |