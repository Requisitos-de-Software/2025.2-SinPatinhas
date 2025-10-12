# Cenários - Mateus Santos Negrini

## Cenário 07 — Sistema de Adoção (RF030)  

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

**Tabela 1 – Cenário 07: Acesso à Área de Instruções Integradas (RF033)**  
*Autoria: Mateus Santos Negrini*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#CEN07` |
| **Título** | Usuário Acessa a Área de Instruções Integradas |
| **Metas/Objetivos** | Disponibilizar um ambiente centralizado onde tutores, veterinários e ONGs possam acessar instruções, orientações e materiais educativos relacionados à saúde, bem-estar e regulamentação de animais. |
| **Contexto** | **Local:** Portal web ou aplicativo do SinPatinhas.<br>**Tempo:** A qualquer momento, mediante acesso autenticado.<br>**Pré-condição:** O usuário deve possuir um cadastro ativo no sistema e estar logado em sua conta. |
| **Ator(es)** | Tutor do Animal; Veterinário; Representante de ONG; Sistema SinPatinhas. |
| **Recursos** | Computador ou smartphone com acesso à internet; base de dados com documentos e materiais de instrução. |
| **Episódios** | 1. O usuário acessa o sistema SinPatinhas e realiza login com suas credenciais.<br>2. No menu principal, ele seleciona a opção "Área de Instruções Integradas".<br>3. O sistema exibe uma página com seções temáticas (ex: cuidados básicos, legislação, vacinação, adoção responsável).<br>4. O usuário escolhe uma categoria e visualiza os materiais disponíveis, como artigos, vídeos ou manuais.<br>5. O sistema permite realizar buscas por palavras-chave e filtrar o conteúdo por tipo de material.<br>6. O usuário pode abrir, baixar ou compartilhar os conteúdos disponíveis.<br>7. O sistema registra o acesso para fins de acompanhamento e melhoria dos conteúdos. |
| **Exceção** | O usuário tenta acessar a área sem estar autenticado. O sistema redireciona automaticamente para a tela de login e exibe a mensagem “É necessário estar logado para acessar esta funcionalidade.” |

---

## Cenário 08 — Notificação Periódica de Atualização (RF044)  

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

**Tabela 2 – Cenário 08: Notificação Periódica de Atualização (RF044)**  
*Autoria: Mateus Santos Negrini*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#CEN08` |
| **Título** | Sistema Envia Notificação de Atualização Cadastral ao Tutor |
| **Metas/Objetivos** | Garantir que os tutores mantenham atualizadas as informações e fotos dos animais cadastrados, reforçando a confiabilidade do sistema. |
| **Contexto** | **Local:** Acesso ao e-mail ou sistema web do SinPatinhas.<br>**Tempo:** Periodicamente a cada 1 ano.<br>**Pré-condição:** O tutor possui cadastro ativo e um ou mais animais registrados no sistema. |
| **Ator(es)** | Tutor do Animal; Sistema SinPatinhas. |
| **Recursos** | Servidor de notificações automáticas, banco de dados dos registros dos animais, e-mail cadastrado do tutor. |
| **Episódios** | 1. O sistema verifica periodicamente os cadastros de animais e identifica aqueles com mais de 6 meses sem atualização.<br>2. O sistema gera uma notificação automática para o tutor, enviada por e-mail ou exibida no painel do usuário.<br>3. O tutor acessa o link da notificação e é direcionado para o perfil do animal no sistema.<br>4. O tutor revisa as informações, podendo atualizar fotos, endereço, dados de saúde ou status do animal.<br>5. O sistema registra a atualização e emite mensagem de confirmação. |
| **Exceção** | O tutor não realiza a atualização dentro de 30 dias. O sistema envia um segundo lembrete automático e marca o cadastro do animal como “pendente de atualização”. |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---

## Histórico de Versão  

| **Versão** | **Data**   | **Descrição**                                                        | **Autores** | **Revisores** |
|-----------:|------------|--------------------------------------------------------------------|--------------|---------------|
| **1.0**    | 12/10/2025 | Criação da página | Mateus | - |