# Casos de uso – Antonio Carvalho

---

## Validação com tutora de animal

A validação com o usuário foi feita de forma presencial, no dia 12 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/veQV-Rdvk44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de casos de uso. |

---

<a id="uc001"></a>

## UC001 – Sistema de Adoção de Animais ([RFNI016](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016))

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

## #UC002 – Notificação Periódica para Atualização de Dados e Fotos do Animal ([RFNI021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021))

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

<a id="uc013"></a>

## UC013 – Acesso via Web e Mobile ([RNFNI001](#rnfni001))

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

## UC014 – Funcionalidades Offline ([RNFNI002](#rnfni002))

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

## UC015 – Integração Direta com Parceiros ([RNFNI003](#rnfni003))

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

## Referência para elaboração desses artefatos em específico: Requisitos de Software – Aula 11: Especificação e Casos de Uso em Requisitos. 

[Requisitos de Software – Aula 11: Especificação e Casos de Uso em Requisitos. (Especificado em "Referências")](../../../assets/PDFs/user_cases_e_especificacao.pdf)

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Antonio Carvalho | 100% | Autor desta página |

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|-------------|-----------|----------------|--------------|----------------|
| 1.0 | 11/10/2025 | Adição dos casos de uso referentes aos requisitos funcionais não implementados RFNI016 e RFNI021 | Antonio | - |
| 1.1 | 04/11/2025 | Adição dos casos de uso referentes aos requisitos não funcionais não implementados RNFNI001, RNFNI002 e RNFNI003 | Antonio | - |

---

## Referências  

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 11: Especificação e Casos de Uso em Requisitos.* Brasília: Universidade de Brasília, 2025.  
