# Casos de Uso – Projeto SinPatinhas

## Introdução

Os **casos de uso** são um dos principais artefatos da **UML (Unified Modeling Language)**, permitindo descrever as **interações entre usuários (atores)** e o **sistema**. Por meio deles, é possível compreender **como o sistema deve se comportar** em diferentes situações, garantindo que os **requisitos funcionais** sejam bem representados e validados junto aos stakeholders.

No contexto do **projeto SinPatinhas**, os casos de uso representam ações essenciais como **cadastro de tutores e animais (RF001 e RF002)**, **geração de registro oficial (RF003)**, **emissão de documento de identificação (RF005)** e **atualização de status (RF007)**. Essa modelagem contribui para o entendimento funcional do sistema e auxilia na documentação das regras de negócio.

---

### Diagrama de Casos de Uso do SinPatinhas:

Com base nos requisitos elicitados anteriormente para o projeto SinPatinhas, **foi desenvolvido o Diagrama de Casos de Uso UML apresentado abaixo**. O modelo representa as principais interações entre o ator Usuário e o sistema SinPatinhas, incluindo diferentes tipos de perfis — **Pessoa Física, Pessoa Jurídica e Clínicas/Hospitais Veterinários** — que executam ações específicas no sistema.

O diagrama contempla **funcionalidades como cadastro de usuários e animais**, recebimento de tutelas, visualização e edição de registros, além de histórico de transferências e confirmação de alterações. Também **há interação com o servidor do SinPatinhas, responsável pelo processamento das operações e pela comunicação entre os módulos do sistema**.

Assim, **o diagrama sintetiza o comportamento esperado do sistema em relação aos usuários e demais entidades envolvidas, servindo como base para a modelagem e implementação das funcionalidades descritas nos requisitos**.
<br>
*Figura 1: Diagrama de casos de uso*
<br>
![Casos-de-uso](../assets/images/casos_de_uso-SinPatinhas.png)
<br>*Figura 2: Legenda do diagrama de casos de uso*
<br>
![Legenda](../assets/images/legenda_casos_de_uso.png)


* [Link para o diagrama de casos de uso](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=v2_caso_de_uso_sinpatinhas.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1JOocwPjoZbvNTRfiIlNnfZpdQCFAApOf%26export%3Ddownload)

## Estrutura para Criação de um Caso de Uso

A criação de um caso de uso deve seguir uma estrutura organizada que descreva de forma clara as **ações, condições e resultados esperados**.  
A tabela a seguir apresenta os componentes utilizados.

**Tabela 1 – Estrutura para Criação de um Caso de Uso**  
*Autoria: Antonio Carvalho*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | Identificador único do caso de uso (ex.: #UC001). |
| **Descrição** | Breve explicação sobre a funcionalidade tratada. |
| **Ator(es)** | Usuário(s) ou sistema(s) que interagem com o caso. |
| **Pré-condições** | Condições que devem ser atendidas antes da execução do caso. |
| **Ação** | A operação principal realizada. |
| **Fluxo principal** | Sequência de passos que descrevem o comportamento esperado. |
| **Fluxos alternativos** | Caminhos opcionais que podem ocorrer durante a execução. |
| **Fluxos de exceção** | Tratamento de erros ou situações inesperadas. |
| **Pós-condições** | Estado do sistema após a execução. |
| **Data de Criação** | Data em que o caso foi documentado. |
| **Rastreabilidade** | Código dos requisitos relacionados. |
| **Cenário Relacionado** | Link para o cenário correspondente. |
| **Léxico Relacionado** | Termos do léxico utilizados no caso de uso. |

---

## Artefatos e Gravações Unitários

| **Participantes** | **Visualizar artefato nesta página** | **Página Específica** | **Descrição** |
|---------------|--------------|------------------|------------------|
| **Antonio Carvalho** | [UC001](#uc001) | [#UC001](/modelagem/gravacoes/antonio/caso_de_uso.md) | Sistema de Adoção de Animais (RFNI016) |
|                    | [UC002](#uc002) | [#UC002](/modelagem/gravacoes/antonio/caso_de_uso.md) | Notificação Periódica para Atualização de Dados e Fotos do Animal (RFNI021) |
|                    | [UC013](#uc013) | [#UC013](/modelagem/gravacoes/antonio/caso_de_uso.md) | Acesso via Web e Mobile (RNFNI001) |
|                    | [UC014](#uc014) | [#UC014](/modelagem/gravacoes/antonio/caso_de_uso.md) | Funcionalidades Offline (RNFNI002) |
|                    | [UC015](#uc015) | [#UC015](/modelagem/gravacoes/antonio/caso_de_uso.md) | Integração Direta com Parceiros (RNFNI003) |
| **Letícia Paiva**    | | [#UC003](/modelagem/gravacoes/leticia/caso_de_uso.md) | Sistema de adoção (RNFI016) |
|                      | | [#UC004](/modelagem/gravacoes/leticia/caso_de_uso.md) | Alertas e Notificações Automáticas (RNFI017) |
| **Pedro Gomes**      | | [#UC005](/modelagem/gravacoes/pedro/caso_de_uso.md)   | Aplicativo Móvel |
|                      | | [#UC006](/modelagem/gravacoes/pedro/caso_de_uso.md)   | Acesso Offline à Ficha do Animal |
| **Mateus Santos Negrini** | | [#UC007](/modelagem/gravacoes/mateus/caso_de_uso.md) | Acesso à Área de Instruções Integradas (RF33) |
|                           | | [#UC008](/modelagem/gravacoes/mateus/caso_de_uso.md) | Notificação Periódica para Atualização de Dados e Fotos do Animal (RF44) |
| **Heloisa Silva**         | | [#UC009](/modelagem/gravacoes/heloisa/casos_de_uso.md) | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados (RFNI001) |
|                           | | [#UC010](/modelagem/gravacoes/heloisa/casos_de_uso.md) | Sistema de avaliação numérica para estabelecimentos (RFNI010) |
| **Isaac Menezes**         | | [#UC011](/modelagem/gravacoes/isaac/caso_de_uso.md) | Exibir média de consultas da clínica/hospital (RNFI014) |
|                           | | [#UC012](/modelagem/gravacoes/isaac/caso_de_uso.md) | Exibir média de consultas do profissional (RNFI015) |

---

## Artefatos

<a id="uc001"></a>

### #UC001 – Sistema de Adoção de Animais ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)


<font><p style="text-align: center">**Tabela 01** – Caso de Uso 01 – Sistema de Adoção de Animais ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC001 |
| **Descrição** | O sistema deve permitir que tutores e ONGs disponibilizem animais para adoção e que usuários interessados possam visualizar e solicitar adoção. |
| **Ator** | Tutor/ONG (Douglas, 23 anos) e Adotante |
| **Pré-condições** | O tutor/ONG deve estar autenticado e possuir animais cadastrados. O adotante também deve estar autenticado. |
| **Ação** | O tutor cadastra o animal para adoção e o adotante acessa a listagem para enviar solicitação. |
| **Fluxo principal** | <ul><li>O tutor acessa sua conta e cadastra o animal para adoção.</li><li>O adotante acessa o módulo “Adoção”.</li><li>Visualiza lista de animais disponíveis com fotos e informações.</li><li>Filtra por espécie, idade e localização.</li><li>Seleciona um animal e envia solicitação de adoção.</li><li>O sistema notifica o responsável pelo animal.</li></ul> |
| **Fluxo alternativo** | <ul><li>O adotante cancela a solicitação de adoção antes da confirmação.</li><li>O tutor decide remover o animal da listagem antes da adoção.</li></ul> |
| **Fluxo de exceção** | <ul><li>O animal já foi adotado antes da solicitação.</li><li>O sistema exibe mensagem informando indisponibilidade do animal.</li></ul> |
| **Pós-condições** | O sistema registra a solicitação e atualiza o status do animal para “Em processo de adoção”. |
| **Data de Criação** | 11/10/2025 |
| **Rastreabilidade** | [RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) — Sistema de Adoção de Animais |
| **Cenário relacionado** | [CNR003](../../../modelagem/gravacoes/antonio/cenarios.md#cnr003) |
| **Léxico relacionado** | [LX001](../../../modelagem/gravacoes/antonio/lexicos.md#lx001) |
| **Origem** | Entrevista 2 |

---

<a id="uc002"></a>

### #UC002 – Notificação Periódica para Atualização de Dados e Fotos do Animal ([RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021))

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<font><p style="text-align: center">**Tabela 02** – Caso de Uso 02 – Notificação Periódica para Atualização de Dados e Fotos do Animal ([RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021))</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC002 |
| **Descrição** | O sistema deve enviar notificações automáticas aos tutores para que atualizem periodicamente os dados e fotos de seus animais. |
| **Ator** | Tutor (Douglas, 23 anos) |
| **Pré-condições** | O tutor deve estar autenticado e possuir animal cadastrado no sistema. |
| **Ação** | O tutor recebe uma notificação e acessa o sistema para atualizar as informações. |
| **Fluxo principal** | <ul><li>O sistema envia notificação automática ao tutor a cada período determinado (ex: 6 meses).</li><li>O tutor acessa o link contido na notificação.</li><li>Visualiza as informações atuais do animal.</li><li>Atualiza dados ou envia nova foto.</li><li>O sistema salva e confirma a atualização.</li></ul> |
| **Fluxo alternativo** | <ul><li>O tutor visualiza os dados mas não altera nenhuma informação.</li><li>O sistema apenas atualiza a data de última verificação.</li></ul> |
| **Fluxo de exceção** | <ul><li>O tutor ignora a notificação por um longo período.</li><li>O sistema envia lembretes adicionais ou exibe alerta no perfil do animal.</li></ul> |
| **Pós-condições** | O cadastro do animal é atualizado e a data da última modificação é registrada. |
| **Data de Criação** | 11/10/2025 |
| **Rastreabilidade** | [RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021) — Notificação Periódica para Atualização de Dados e Fotos do Animal |
| **Cenário relacionado** | [CNR004](../../../modelagem/gravacoes/antonio/cenarios.md#cn004) |
| **Léxico relacionado** | [LX002](../../../modelagem/gravacoes/antonio/lexicos.md#lx002) |
| **Origem** | Entrevista 3 |

---

<a id="uc003"></a>

### #UC003 – Sistema de Adoção (RNFI016)

---

<a id="uc004"></a>

### #UC004 – Alertas e Notificações Automáticas (RNFI017)

---

<a id="uc005"></a>

### #UC005 – Aplicativo Móvel

---

<a id="uc006"></a>

### #UC006 – Acesso Offline à Ficha do Animal

---

<a id="uc007"></a>

### #UC007 – Acesso à Área de Instruções Integradas (RF33)

---

<a id="uc008"></a>

### #UC008 – Notificação Periódica para Atualização de Dados e Fotos do Animal (RF44)

---

<a id="uc009"></a>

### #UC009 – Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados (RFNI001)

---

<a id="uc010"></a>

### #UC010 – Sistema de avaliação numérica para estabelecimentos (RFNI010)

---

<a id="uc011"></a>

### #UC011 – Exibir média de consultas da clínica/hospital (RNFI014)

---

<a id="uc012"></a>

### #UC012 – Exibir média de consultas do profissional (RNFI015)

---


<a id="uc013"></a>

### #UC013 – Acesso via Web e Mobile ([RNFNI001](#rnfni001))

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<font><p style="text-align: center">**Tabela 03** – Caso de Uso 13 – Acesso via Web e Mobile ([RNFNI001](#rnfni001))</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC013 |
| **Descrição** | O sistema deve permitir o acesso e uso das funcionalidades principais tanto em navegadores web quanto em dispositivos móveis, com prioridade para o uso mobile. |
| **Ator** | Usuário (Tutor, ONG ou Adotante) |
| **Pré-condições** | O usuário deve possuir conexão à internet e dispositivo compatível (celular, tablet ou computador). |
| **Ação** | O usuário acessa o sistema por meio do navegador no dispositivo desejado. |
| **Fluxo principal** | <ul><li>O usuário abre o navegador web ou mobile.</li><li>Digita o endereço da aplicação.</li><li>O sistema adapta automaticamente a interface conforme o dispositivo.</li><li>O usuário autentica-se e acessa suas funcionalidades normalmente.</li></ul> |
| **Fluxo alternativo** | <ul><li>O usuário tenta acessar o sistema em um dispositivo com resolução muito baixa.</li><li>O sistema exibe uma interface simplificada, garantindo usabilidade mínima.</li></ul> |
| **Fluxo de exceção** | <ul><li>O navegador não é compatível com o sistema.</li><li>O sistema exibe mensagem informando a incompatibilidade e sugere navegadores suportados.</li></ul> |
| **Pós-condições** | O sistema permite que o usuário realize suas atividades independentemente da plataforma utilizada. |
| **Data de Criação** | 04/11/2025 |
| **Rastreabilidade** | [RNFNI001](#rnfni001) — Acesso via web e mobile |
| **Cenário relacionado** | [CNR005](../../../modelagem/gravacoes/antonio/cenarios.md#cnr005) |
| **Léxico relacionado** | [LX003](../../../modelagem/gravacoes/antonio/lexicos.md#lx003) |
| **Origem** | Entrevista com usuários sobre acessibilidade e dispositivos utilizados |

---

<a id="uc014"></a>

### #UC14 – Funcionalidades Offline ([RNFNI002](#rnfni002))

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<font><p style="text-align: center">**Tabela 04** – Caso de Uso 14 – Funcionalidades Offline ([RNFNI002](#rnfni002))</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC014 |
| **Descrição** | O sistema deve oferecer funcionalidades básicas (como visualização de informações e preenchimento de formulários) em modo offline, sincronizando dados automaticamente quando a conexão for restabelecida. |
| **Ator** | Tutor/Adotante |
| **Pré-condições** | O usuário deve ter feito login anteriormente e possuir cache local de dados. |
| **Ação** | O usuário acessa o sistema sem conexão à internet. |
| **Fluxo principal** | <ul><li>O usuário tenta acessar o sistema sem internet.</li><li>O sistema identifica o modo offline.</li><li>Permite acesso a dados armazenados localmente.</li><li>O usuário visualiza informações ou preenche formulários offline.</li><li>Ao reconectar, o sistema sincroniza automaticamente os dados.</li></ul> |
| **Fluxo alternativo** | <ul><li>O usuário tenta acessar uma funcionalidade indisponível no modo offline.</li><li>O sistema exibe aviso e bloqueia a ação até reconexão.</li></ul> |
| **Fluxo de exceção** | <ul><li>O cache local foi corrompido ou está vazio.</li><li>O sistema informa a impossibilidade de uso offline e orienta a reconexão.</li></ul> |
| **Pós-condições** | As informações criadas ou modificadas offline são sincronizadas com o servidor central. |
| **Data de Criação** | 04/11/2025 |
| **Rastreabilidade** | [RNFNI002](#rnfni002) — Funcionalidades offline |
| **Cenário relacionado** | [CNR006](../../../modelagem/gravacoes/antonio/cenarios.md#cnr006) |
| **Léxico relacionado** | [LX004](../../../modelagem/gravacoes/antonio/lexicos.md#lx004) |
| **Origem** | Discussão técnica sobre usabilidade e acesso remoto em áreas sem internet |

---

<a id="uc015"></a>

### #UC015 – Integração Direta com Parceiros ([RNFNI003](#rnfni003))

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

<font><p style="text-align: center">**Tabela 05** – Caso de Uso 15 – Integração Direta com Parceiros ([RNFNI003](#rnfni003))</p></font>

| **Item** | **Informações** |
|-----------|----------------|
| **Código** | #UC015 |
| **Descrição** | O sistema deve possibilitar integração direta com parceiros externos (como clínicas veterinárias, ONGs e pet shops) para troca de informações sobre animais, eventos e adoções. |
| **Ator** | Administrador, Parceiro (ONG, clínica ou pet shop) |
| **Pré-condições** | O parceiro deve estar cadastrado e possuir permissão de integração via API. |
| **Ação** | O administrador autoriza a integração e o parceiro conecta seu sistema via API. |
| **Fluxo principal** | <ul><li>O administrador acessa o painel de integrações.</li><li>Seleciona “Adicionar novo parceiro”.</li><li>Define chaves de autenticação (API Key).</li><li>O parceiro utiliza a chave para conectar seu sistema.</li><li>O sistema sincroniza automaticamente os dados relevantes (animais disponíveis, eventos, etc.).</li></ul> |
| **Fluxo alternativo** | <ul><li>O parceiro ainda não possui infraestrutura técnica para integração.</li><li>O sistema oferece exportação/importação manual via planilhas.</li></ul> |
| **Fluxo de exceção** | <ul><li>Erro de autenticação na integração.</li><li>O sistema invalida a chave e notifica o administrador.</li></ul> |
| **Pós-condições** | A comunicação e sincronização de dados entre sistemas é estabelecida com sucesso. |
| **Data de Criação** | 04/11/2025 |
| **Rastreabilidade** | [RNFNI003](#rnfni003) — Integração direta com parceiros |
| **Cenário relacionado** | [CNR007](../../../modelagem/gravacoes/antonio/cenarios.md#cnr007) |
| **Léxico relacionado** | [LX005](../../../modelagem/gravacoes/antonio/lexicos.md#lx005) |
| **Origem** | Reunião de definição de integrações externas com parceiros potenciais |

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| Antonio Carvalho | 16,6% | Autor da página de apresentação de casos de uso e criador dos artefatos UC001, UC002, UC013, UC014, UC015 |
 

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 10/10/2025 | Criação da página de **Casos de Uso** e exemplo explicativo | Antonio |  |
| 1.1 | 19/10/2025 | Refatoração da tabela de artefatos | Isaac | Antonio |
| 1.2 | 04/11/2025 | Criando novo estilo de apresentação de artefatos | Antonio |  |

---

## Referências

Pressman, R. S. *Engenharia de Software: uma abordagem profissional*. 8ª Ed. AMGH, 2016.  
Sommerville, I. *Engenharia de Software*. 10ª Ed. Pearson, 2019.
