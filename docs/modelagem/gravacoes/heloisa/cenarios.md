# Cenários – Heloisa Silva

## Cenário 05 —	Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. (RFNI001)


<a id="cnr005"></a>

A seguir, o cenário para o requisito **Mapa interativo com a localização das clínicas e hospitais veterinários cadastrados** é detalhado, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.  

**Tabela 5 –  Mapa interativo com a localização das clínicas e hospitais veterinários cadastrados.**  

**Autor:** Heloisa Silva

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Mapa interativo com geolocalização de clínica e hospitais veterinários |
| **Código** | CNR005 |
| **Caso de uso trabalhado** | [#UC009](...)|
| **Metas/Objetivos** | Permitir que o tutor pessoa física e jurídica localize de forma visual com base em sua localização clinicas e hospitais veterinários. |
| **Contexto** | **Local:** Acesso ao site via navegador web, em computador ou smartphone.<br>**Tempo:** Ao requerer atendimento para castração ou microchipagem.<br>**Pré-condição:** O tutor deve estar autenticado no sistema e possuir um animal cadastrado com informações válidas, e a clínica ou hospital deve possuir convênio com o MMA. |
| **Ator(es)** | Roberto, 58 anos, é tutor de duas cadelas, não possui recursos para transportá-las por longas distâncias e é criterioso em relação ao atendimento que seus animais recebem. |
| **Recursos** | Dispositivo com acesso à internet, dados do animal. |
| **Episódios** | 1. Roberto acessa o sistema e visualizando o mapa, vê quais clínicas ou hospitais prestam o serviço perto de sua casa. <br> 2. Ao selecionar o hospital ou clínica desejada, é apresentado um cronograma de dias e horários disponíveis para realizar o procedimento . <br> 3. Após selecionado dia e horário, o sistema valida os dados obrigatórios (nome, espécie, sexo do animal, idade e dados do tutor responsável). <br> 4. O sistema gera um ID para o agendamento e o registra no perfil do prestador do serviço e tutor <br> 5. Após realizado o procedimento, o sistema marca o agendamento como realizado |
| **Exceção** | Caso a clínica não tenha horários disponíveis ou haja algum imprevisto o tutor deve ser notificado |

---

## Cenário 06 — Sistema de avaliação numérica para estabelecimentos. ( RFNI010)

<a id="cnr006"></a>

**Tabela 6 –  Sistema de avaliação numérica para estabelecimentos.**  

**Autor:** Heloisa Silva

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Sistema de avaliação para estabelecimentos |
| **Código** | CNR006 |
| **Caso de uso trabalhado** | [#UC010](...)|
| **Metas/Objetivos** | Permitir que o tutor avalie a clínica ou hospital que realizou o procedimento veterinário após sua execução |
| **Contexto** | **Local:** Portal do tutor, acessado pelo navegador.<br>**Tempo:** Em qualquer momento após a realização do procedimento.<br>**Pré-condição:** O tutor deve estar logado e possuir um animal em seu perfil que tenha realizado procedimento veterinário por meio do sistema. |
| **Ator(es)** | Roberto, 58 anos, é tutor de duas cadelas, não possui recursos para transportá-las por longas distâncias e é criterioso em relação ao atendimento que seus animais recebem. |
| **Recursos** | Dispositivo com navegador web e acesso à internet. |
| **Episódios** | 1. Roberto, tutor, acessa o seu perfil no sistema e seleciona o animal que realizou o procedimento. <br> 2. Ele seleciona a aba *procedimentos*. <br> 3. O sistema exibe todos os procedimentos veterinários realizados pelo animal. <br> 4. Ao selecionar o procedimento, pode ver os detalhes do procedimento e opção para avaliação numérica <br> 6. Ao avaliar e apertar enviar, recebe uma notificação de sucesso |
| **Exceção** | Caso Roberto tenha faltado ao procedimento ou o cancelado não poderá dar sua avaliação |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Heloisa Silva** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Cenários** própria | Heloisa | - |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---