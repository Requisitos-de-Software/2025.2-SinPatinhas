# Cenários – Pedro Gomes

## Cenário 05: Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) (RF05)

<a id="cnr007"></a>

A seguir, o cenário para o requisito **Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) (RF05)** é detalhado, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.  

**Tabela 01 – Cenário 07: Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) (RF05)**  

**Autor:** Pedro Gomes

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Consulta Rápida de Animal Perdido via Aplicativo |
| **Código** | CNR007 |
| **Caso de uso trabalhado** | |
| **Metas/Objetivos** | Permitir que um tutor possa identificar e contatar o tutor de um animal perdido de forma ágil, utilizando o aplicativo dedicado em seu smartphone (iOS ou Android). |
| **Contexto** | **Local:**  Via pública. <br>**Tempo:** Ao se deparar com um animal perdido. <br>**Pré-condição:** O tuto que encontrou o animal possui um smartphone com o aplicativo SINPatinhas instalado e acesso à internet. O animal encontrado possui identificação RGA visível. |
| **Ator(es)** | Ana Beatriz, 22 anos, é estudante de engenharia de Aeroespacial na Universidade de Brasília e tutora de um cão. |
| **Recursos** | Smartphone com aplicativo SINPatinhas instalado e acesso à internet (4G/5G). |
| **Episódios** | 1. Ana Beatriz encontra o cão perdido e localiza o número do RGA em sua coleira. <br>2. Ela pega seu smartphone e abre o aplicativo "SINPatinhas". <br>3. Na tela inicial, ela toca na opção "Consultar Animal". <br>4. Ela digita o número do RGA no campo de busca e confirma. <br>5. O aplicativo exibe a ficha pública do animal, com o nome e o telefone do tutor. <br>6. Ana Beatriz toca no número de telefone dentro do app para iniciar a chamada e contata o tutor para organizar a devolução. |
| **Exceção** | Ana Beatriz não tem o aplicativo instalado. Ela precisa abrir a loja de aplicativos (Google Play/App Store), procurar, baixar e instalar o app, o que atrasa o contato com o tutor.
 |

---

## Cenário 06: Acesso Offline (RNF06)

<a id="cnr008"></a>

**Tabela 02 – Cenário 08: Acesso Offline (RNF06)**  

**Autor:** Pedro Gomes

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Acesso Offline à Ficha do Próprio Animal |
| **Código** | CNR008 |
| **Caso de uso trabalhado** | [#UC00](...)|
| **Metas/Objetivos** | Permitir que o tutor possa acessar as informações vitais de seu animal de estimação (ficha de identificação, vacinas, contato) diretamente no aplicativo, mesmo em locais sem conexão com a internet. |
| **Contexto** | **Local:** Portal do tutor, acessado pelo aplicativo.<br>**Tempo:** Em qualquer momento após o cadastro do animal.<br>**Pré-condição:** O tutor deve ter o aplicativo instalado e estar logado e possuir o animal em seu perfil. Funcionalidade "Salvar Ficha Offline" do aplicativo.|
| **Ator(es)** | Ana Beatriz, 22 anos, é estudante de engenharia de Aeroespacial na Universidade de Brasília e tutora de um cão. |
| **Recursos** | Dispositivo com aplicativo móvel. |
| **Episódios** |1. (Preparação - Com Internet): Antes de sair de casa para a viagem, Ana Beatriz abre o aplicativo SINPatinhas. <br>2. Ela navega até o perfil do seu cão, "Logan". <br>3. Ela toca na opção "Disponibilizar offline". <br>4. O aplicativo baixa os dados e a foto de Logan para o armazenamento local do celular. Uma mensagem confirma: "Ficha de Logan salva para acesso offline". <br>5. (Utilização - Sem Internet): Já na chácara, um caseiro pergunta se o cão está com a vacinação em dia. A área não tem sinal de celular. <br>6. Ana Beatriz abre o aplicativo. O app detecta a falta de conexão e mostra a seção "Animais Salvos". <br>7. Ela toca no perfil de Logan e consegue exibir na tela a ficha completa, incluindo a carteira de vacinação digital, para o caseiro.
| **Exceção** | Ana Beatriz se esqueceu de salvar a ficha do animal antes da viagem. Ao chegar na chácara e tentar abrir o perfil de Logan, o aplicativo exibe a mensagem: "Sem conexão com a internet. Conecte-se a uma rede para acessar os dados." |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Pedro Gomes** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Cenários** própria | Antonio | - |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---