# Histórias de Usuário – Pedro Gomes 

## Introdução  

Este documento apresenta as **histórias de usuário desenvolvidas por Pedro Gomes**, correspondentes aos requisitos [RNFNI001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001), [RNFNI002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002), [RF025](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf025), [RF026](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026), [RF027](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027), [RNF023](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023), [RNF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024), [RFNI011](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni011) e [RFNI012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni012) do sistema **SinPatinhas**.  

As histórias foram modeladas conforme os princípios de **Extreme Programming (XP)** e **Scrum**, priorizando a **clareza, rastreabilidade e valor agregado ao usuário final** <a id="anchor_1" href="#REF1">[1]</a><a id="anchor_2" href="#REF2">[2]</a>.  

---

## Histórias de Usuário  

---

### **HU013 – Aplicativo Móvel SinPatinhas**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU013 |
| **Tema** | Experiência do Usuário e Mobilidade |
| **Descrição** |Como usuário do SINPatinhas, quero acessar um aplicativo móvel intuitivo, para gerenciar meus cadastros, acompanhar adoções e visualizar campanhas e eventos de forma prática.|
| **Critérios de Aceitação** |- O aplicativo deve estar disponível para iOS e Android. <br>- A interface deve ser responsiva, acessível e intuitiva, adequada a diferentes tamanhos de tela. <br>- O usuário deve poder consultar seus animais cadastrados, acompanhar solicitações de adoção e visualizar campanhas e eventos locais. <br>- Deve existir autenticação segura por login. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNFNI001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) |


### **HU014 – Acesso Offline à Ficha do Próprio Animal”**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU014 |
| **Tema** | Acesso e Disponibilidade |
| **Descrição** |Como tutor de um animal, quero acessar a ficha do meu animal mesmo sem internet, para consultar informações importantes, como vacinas e identificação, em locais sem conexão.|
| **Critérios de Aceitação** |- O aplicativo deve permitir salvar a ficha do animal para acesso offline. <br>- A ficha deve incluir dados de identificação, vacinação e contato do tutor. <br>- O sistema deve exibir uma mensagem de confirmação após salvar os dados. <br>- Caso o tutor tente acessar sem ter salvo a ficha, deve aparecer o aviso: “Sem conexão com a internet. Conecte-se a uma rede para acessar os dados.” |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNFNI002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) |

### **HU015 – Compartilhamento de Informações com Familiares**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU015 |
| **Tema** | Comunicação e Acesso Compartilhado |
| **Descrição** | Como tutor de um animal, quero compartilhar as informações do meu animal com familiares, para que eles também possam acompanhar vacinas, consultas e dados de saúde. |
| **Critérios de Aceitação** | - O aplicativo deve permitir o compartilhamento da ficha do animal com outros usuários cadastrados. <br>- O tutor principal deve poder definir permissões de visualização e edição. <br>- O sistema deve notificar os familiares adicionados. <br>- O compartilhamento deve poder ser revogado a qualquer momento. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RF025](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf025) |

<br>

---

### **HU016 – Notificações de Vacinas Futuras e Atrasadas**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU016 |
| **Tema** | Lembretes e Saúde Animal |
| **Descrição** | Como tutor de um animal, quero receber notificações sobre vacinas futuras ou atrasadas, para manter a saúde do meu animal em dia. |
| **Critérios de Aceitação** | - O sistema deve gerar notificações automáticas próximas às datas de vacinação. <br>- Caso a vacina esteja atrasada, deve ser enviada uma notificação de alerta. <br>- O tutor deve poder configurar a antecedência das notificações. <br>- As notificações devem incluir o nome da vacina e a data prevista. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RF026](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026) |

<br>

---

### **HU017 – Registro da Localização do Animal ou Tutor**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU017 |
| **Tema** | Localização e Rastreamento |
| **Descrição** | Como tutor de um animal, quero registrar minha localização ou a do meu animal, para facilitar o rastreamento em caso de perda ou deslocamento. |
| **Critérios de Aceitação** | - O aplicativo deve permitir o registro manual ou automático da localização. <br>- A localização deve ser armazenada junto à data e hora. <br>- O tutor deve poder visualizar o histórico de localizações. <br>- O sistema deve solicitar permissão para uso da localização do dispositivo. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RF027](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027) |

<br>

---

### **HU018 – Restrição de Acesso a Dados Clínicos (Privacidade)**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU018 |
| **Tema** | Segurança e Privacidade |
| **Descrição** | Como tutor de um animal, quero restringir o acesso aos dados clínicos do meu animal, para garantir que apenas pessoas autorizadas possam visualizar essas informações. |
| **Critérios de Aceitação** | - O sistema deve permitir configurar quem pode acessar dados clínicos. <br>- Usuários não autorizados devem receber mensagem de acesso negado. <br>- O tutor deve poder alterar as permissões a qualquer momento. <br>- Todas as restrições devem ser aplicadas tanto online quanto offline. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNF023](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023) |

<br>

---

### **HU038 – Logs de Acesso e Modificações (Auditabilidade)**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU038 |
| **Tema** | Segurança e Controle |
| **Descrição** | Como administrador do sistema, quero que todos os acessos e modificações sejam registrados em logs, para garantir a rastreabilidade e auditoria de ações no sistema. |
| **Critérios de Aceitação** | - O sistema deve registrar data, hora, usuário e ação executada. <br>- Os logs devem ser acessíveis apenas por administradores autorizados. <br>- Os registros não devem poder ser alterados ou excluídos. <br>- Deve ser possível exportar os logs para auditoria externa. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RNF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) |

<br>

---

### **HU039 – Avaliação Numérica de Médicos Veterinários**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU039 |
| **Tema** | Avaliação e Qualidade de Serviço |
| **Descrição** | Como tutor de um animal, quero avaliar numericamente os médicos veterinários após o atendimento, para contribuir com a qualidade do serviço prestado e ajudar outros tutores em suas escolhas. |
| **Critérios de Aceitação** | - O sistema deve permitir avaliações em escala de 1 a 5 estrelas. <br>- O tutor só poderá avaliar após um atendimento registrado. <br>- As médias das avaliações devem ser visíveis para outros tutores. <br>- O veterinário não deve poder alterar suas próprias avaliações. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI011](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni011) |

<br>

---

### **HU040 – Envio de Comentários sobre Estabelecimentos**  
*Autoria: Pedro Gomes*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU040 |
| **Tema** | Feedback e Comunicação |
| **Descrição** | Como tutor de um animal, quero enviar comentários ou feedbacks sobre clínicas e pet shops, para compartilhar minha experiência com outros usuários. |
| **Critérios de Aceitação** | - O sistema deve permitir o envio de comentários textuais sobre estabelecimentos cadastrados. <br>- O tutor deve poder editar ou excluir seu comentário. <br>- Os comentários devem ser moderados antes da publicação. <br>- O sistema deve exibir data e nome do autor junto ao comentário. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni012) |


## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Pedro Gomes**, com base nos fundamentos de **Serrano & Serrano (2025)**.

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Pedro Gomes | 100% | Autor desta página |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 20/10/2025 | Criação das histórias HU013–HU018 e HU039–HU040 | Pedro Gomes | Antonio |

---

## Referências  

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[2] LEFFINGWELL, Dean. *Agile Software Requirements.* Addison-Wesley, 2011.  
<a id="REF3"></a>[3] PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  
<a id="REF4"></a>[4] SOMMERVILLE, Ian. *Engenharia de Software.* 10ª ed. Pearson, 2019.  

---