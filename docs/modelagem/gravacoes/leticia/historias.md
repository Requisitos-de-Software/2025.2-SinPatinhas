# Histórias de Usuário - Letícia Paiva

---

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
| **Rastreabilidade** | RFNI016 |

---

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
| **Rastreabilidade** | RFNI017 |

---

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
| **Rastreabilidade** | RF025 |

---

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
| **Rastreabilidade** | RF026 |

---

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
| **Rastreabilidade** | RF027 |

---

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
| **Rastreabilidade** | RF031 |

---

## **Agradecimentos**
Agradeço o apoio das ferramentas de IA generativa (ChatGPT – OpenAI) utilizadas para revisão, padronização técnica e formatação textual.
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, Letícia Paiva, com base nos fundamentos de Serrano & Serrano (2025).

---

## **Tabela de Versionamento**

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|:----------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 21/10/2025 | Inclusão das histórias e atualização completa do documento. | Letícia Paiva | Antonio |

---

## **Referências**

[1] SERRANO, Milene; SERRANO, Maurício. Product Backlog e User Stories – Aula 15. Universidade de Brasília (UnB), 2025.
[2] LEFFINGWELL, Dean. Agile Software Requirements. Addison-Wesley, 2011.
[3] PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software: uma abordagem profissional. 9ª ed. AMGH, 2021.
[4] SOMMERVILLE, Ian. Engenharia de Software. 10ª ed. Pearson, 2019.