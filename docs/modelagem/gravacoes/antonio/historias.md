# Histórias de Usuário – Antonio Carvalho  

---

## Validação com tutora de animal  

A validação com o usuário foi feita de forma presencial, no dia **21 de outubro de 2025**.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/IaoZqXPLfGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

---

## Participantes da validação  

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável pela criação e modelagem das histórias HU003 a HU008. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o artefato histórias de usuário. |

---

## Histórias de Usuário implementadas

<a id="hu003"></a>

### **HU003 – Cadastro e Gerenciamento de Perfis Ampliados**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU003 |
| **Tema** | Perfis de Usuário |
| **Descrição** | Como **gestor de ONG ou protetor independente**, quero **cadastrar e gerenciar meu perfil institucional** para **oferecer transparência nas ações e facilitar o contato com tutores e parceiros**. |
| **Critérios de Aceitação** | - O sistema deve permitir o cadastro de perfis com informações institucionais (CNPJ, missão, contatos, endereço). <br> - Deve permitir atualização e edição de dados. <br> - Perfis devem ser vinculados a campanhas e adoções. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** |  [RF017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf017) |

---

<a id="hu004"></a>

### **HU004 – Publicação de Campanhas e Materiais Educativos**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU004 |
| **Tema** | Comunicação e Educação |
| **Descrição** | Como **gestor de ONG**, desejo **publicar campanhas de adoção e materiais educativos sobre bem-estar animal**, para **aumentar o engajamento e promover adoções responsáveis**. |
| **Critérios de Aceitação** | - O sistema deve permitir o envio de campanhas com imagens e textos. <br> - Deve permitir categorizar o tipo de campanha (adoção, vacinação, eventos). <br> - O conteúdo deve ser validado antes da publicação. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RF018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) |

---

<a id="hu005"></a>

### **HU005 – Exibição de Horários de Clínicas Parceiras**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU005 |
| **Tema** | Serviços e Parcerias |
| **Descrição** | Como **usuário tutor**, quero **visualizar os horários de funcionamento de clínicas veterinárias e hospitais parceiros**, para **planejar atendimentos e emergências**. |
| **Critérios de Aceitação** | - O sistema deve exibir os horários de abertura e fechamento das clínicas cadastradas. <br> - Deve indicar feriados e horários de plantão. <br> - A informação deve ser atualizada automaticamente a partir das integrações. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI005](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni005) |

---

<a id="hu006"></a>

### **HU006 – Integração Direta com Parceiros**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU006 |
| **Tema** | Integrações |
| **Descrição** | Como **administrador do sistema**, quero **integrar o SinPatinhas com sistemas de clínicas, ONGs e pet shops**, para **sincronizar informações e melhorar a gestão das parcerias**. |
| **Critérios de Aceitação** | - O sistema deve possibilitar integração via API REST. <br> - Deve permitir autenticação segura (token). <br> - As atualizações de dados devem ocorrer em tempo real. |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) / [RNF014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf014) |

---

<a id="hu007"></a>

### **HU007 – Acesso Simplificado para Usuários com Baixa Afinidade Tecnológica**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU007 |
| **Tema** | Usabilidade |
| **Descrição** | Como **protetor ou voluntário com pouca experiência tecnológica**, desejo **acessar o sistema de forma intuitiva e simples**, para **realizar cadastros e publicações sem dificuldade**. |
| **Critérios de Aceitação** | - A interface deve ter ícones descritivos e botões visíveis. <br> - Deve haver tutoriais curtos em vídeo ou texto. <br> - O sistema deve suportar acessibilidade (tamanho de fonte e contraste). |
| **Prioridade** | Alta |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) |

---

<a id="hu008"></a>

### **HU008 – Sincronização de Dados entre ONGs e Clínicas**  
*Autoria: Antonio Carvalho*  

| **Campo** | **Descrição** |
|------------|----------------|
| **Identificação** | HU008 |
| **Tema** | Integração e Comunicação |
| **Descrição** | Como **ONG cadastrada**, quero **sincronizar dados de adoção e atendimentos veterinários** com as clínicas parceiras, para **garantir a atualização das informações de cada animal**. |
| **Critérios de Aceitação** | - O sistema deve integrar registros de atendimento veterinário ao perfil do animal. <br> - Deve haver sincronização automática semanal. <br> - Em caso de falha, o sistema deve registrar o erro e notificar o administrador. |
| **Prioridade** | Média |
| **Status** | Não validada |
| **Rastreabilidade** | [RFNI018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) |

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Antonio Carvalho**, com base nos fundamentos de **Serrano & Serrano (2025)**.

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Antonio Carvalho | 100% | Autor desta página |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 20/10/2025 | Criação das histórias HU003–HU008 | Antonio Carvalho | - |

---

## Referências  

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[2] LEFFINGWELL, Dean. *Agile Software Requirements.* Addison-Wesley, 2011.  
<a id="REF3"></a>[3] PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  
<a id="REF4"></a>[4] SOMMERVILLE, Ian. *Engenharia de Software.* 10ª ed. Pearson, 2019.  

---