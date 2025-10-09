<div class="plan-hero">
  <div class="plan-hero__title">Cenários</div>
  <div class="plan-hero__chips">
    <span class="chip">Modelagem de Requisitos</span>
    <span class="chip">Elicitação</span>
    <span class="chip">Fluxos Comportamentais</span>
  </div>
</div>

#  Introdução aos Cenários

A **modelagem de requisitos** é a atividade de criar modelos que representam características ou comportamentos de um software [1].  
Uma das estratégias utilizadas para isso são os **Cenários**, reconhecidos por ajudar a compreender as interações entre ambientes e sistemas [1].

Essa técnica é usada para **elicitar a parte comportamental do software**, assim como sua **dinâmica e fluxo**.

---

##  Estrutura para Criação de um Cenário

A construção de um cenário faz uso de um conjunto de abstrações específicas para estruturar a narrativa.  
A tabela abaixo detalha cada um desses componentes.

**Tabela 1 – Estrutura para Criação de um Cenário**  
*Autoria: Letícia Paiva*

| **Componente**     | **Descrição**                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------|
| **Título**         | Nome que identifica o cenário.                                                                     |
| **Metas/Objetivos**| Descreve a finalidade ou o propósito a ser alcançado no cenário.                                   |
| **Contexto**       | Define as condições em que o cenário ocorre, como local, tempo e pré-condições.                   |
| **Ator(es)**       | As pessoas, sistemas ou entidades que participam das interações descritas.                         |
| **Recursos**       | Os objetos ou ferramentas necessários para a execução das ações no cenário.                        |
| **Episódios**      | A sequência de ações ou eventos que descrevem o fluxo principal do cenário.                        |
| **Exceção**        | Descreve o tratamento para situações anormais, inesperadas ou de erro que podem ocorrer.           |

---

## 👥 Integrantes do Grupo

A **Tabela 2** apresenta todos os integrantes da equipe que participaram da construção dos Cenários, juntamente com a descrição das atividades que cada um desenvolveu durante o projeto.

**Tabela 2 – Integrantes do Grupo Envolvidos**  
*Autoria: Letícia Paiva*

| **Nome**            | **Quais etapas participou** |
|---------------------|------------------------------|
| **Antonio Carvalho**| —                            |
| **Heloisa Santos**  | —                            |
| **Isaac Menezes**   | —                            |
| **Letícia Paiva**   | Criou os cenários 01 e 02, referentes aos requisitos **Sistema de Adoção (RF03)** e **Alertas e Notificações Automáticas (RF04)**. |
| **Luciano Machado** | —                            |
| **Matheus Negrini** | —                            |
| **Pedro Gomes**     | —                            |

---

## 📄 Cenário 01 — Sistema de Adoção (RF03)

A seguir, o cenário para o requisito **Sistema de Adoção (RF03)** é detalhado, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.

**Tabela 3 – Cenário 01: Sistema de Adoção (RF03)**  
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

## 📄 Cenário 02 — Alertas e Notificações Automáticas (RF04)

**Tabela 4 – Cenário 02: Alertas e Notificações Automáticas (RF04)**  
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

## 📘 Referências

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---

## 📆 Histórico de Versão

| Versão | Data       | Descrição                                                        | Autores | Revisores |
|------:|------------|--------------------------------------------------------------------|---------|-----------|
| 1.0   | 09/10/2025 | Criação da página de **Cenários** e adição dos requisitos RF03 e RF04. | Letícia Paiva | — |

---

<style>
:root{
  --sp-blue: #3766ae;
  --sp-blue-600:#2f5a9b;
  --sp-blue-100:#e8f0fb;
  --muted: #475569;
  --bg-card: #ffffff;
  --ring: rgba(55,102,174,.25);
}

/* ====== Hero ====== */
.plan-hero{
  background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
  border-radius: 14px;
  padding: 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(99,102,241,.18);
}
.plan-hero__title{
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: .3px;
}
.plan-hero__chips{
  margin-top: .5rem;
  display:flex;
  gap:.5rem;
  flex-wrap: wrap;
}
.chip{
  font-size: .8rem;
  background: rgba(255,255,255,.18);
  border: 1px solid rgba(255,255,255,.35);
  padding: .25rem .55rem;
  border-radius: 999px;
  backdrop-filter: blur(2px);
}
</style>
