# Validação com Portótipos

## Introdução

A prototipação é uma técnica essencial dentro da Engenharia de Requisitos e do processo de desenvolvimento de software, pois permite representar de forma tangível e interativa os requisitos de um sistema antes de sua implementação definitiva. Segundo Vazquez e Simões (2016), a prototipação é uma técnica que busca simular para o usuário o funcionamento dos seus requisitos antes que o produto final esteja pronto <a href="assets/images/analise/prototip.png" target="_blank">1</a>. Essa abordagem iterativa possibilita a verificação antecipada da adequação dos requisitos, bem como o descobrimento de novas necessidades por parte dos usuários.

O *Guide to the Software Engineering Body of Knowledge* – SWEBOK v4.0 (2025) complementa essa visão ao afirmar que a construção de um protótipo pode demonstrar dimensões importantes da implementação e ajudar a expor pressupostos incorretos dos engenheiros de software. Além disso, o SWEBOK destaca que protótipos são úteis para compreender melhor o comportamento dinâmico de interfaces e para coletar feedback precoce, reduzindo desperdícios associados a requisitos incorretos.<a href="assets/images/analise/prototip2.png" target="_blank">2</a> <a href="assets/images/analise/prototip3.png" target="_blank">2</a>

Dessa forma, a prototipação desempenha um papel estratégico na comunicação entre usuários e desenvolvedores, fortalecendo a compreensão mútua e aumentando a qualidade do produto final.

## Objetivos

O objetivo desta seção é apresentar o processo de prototipação realizado no contexto da Engenharia de Requisitos, utilizando o Figma como ferramenta de apoio à modelagem visual e à validação dos requisitos junto aos stakeholders.

Os objetivos específicos são:

- Representar graficamente as principais funcionalidades e fluxos de navegação do sistema;

- Possibilitar a validação dos requisitos elicitados com os usuários;

- Coletar feedback sobre aspectos de usabilidade e design da interface;

- Identificar possíveis falhas ou inconsistências nos requisitos antes da implementação;

- Fornecer uma base sólida para o desenvolvimento do produto final.

## Metodologia (Figma)

A prototipação foi desenvolvida utilizando o Figma, uma ferramenta online de design colaborativo que permite criar interfaces interativas e de fácil compartilhamento. O processo metodológico adotado seguiu as seguintes etapas:

Elicitação de requisitos: Com base nas informações obtidas junto aos usuários, foram definidos os requisitos funcionais e não funcionais do sistema.

Elaboração de wireframes: Foram criadas representações iniciais das telas, com foco na organização de elementos e na experiência do usuário.

Construção do protótipo interativo: Os wireframes foram refinados e conectados no Figma para simular o fluxo de navegação entre as telas.

Validação com usuários: O protótipo foi apresentado aos stakeholders para análise e coleta de feedback, permitindo ajustes e melhorias antes do desenvolvimento definitivo.

Conforme afirmam Vazquez e Simões (2016), a prototipação “permite ao usuário analisar se os seus requisitos estão sendo atendidos e até mesmo descobrir novos requisitos”, reforçando seu papel essencial na validação e evolução contínua do projeto.

| **Participantes** | **Protótipo** | **Descrição** |
|--------------------|---------------|--------------|
| **Pedro Gomes** | [Protótipo 01](#prototipo01)  |Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) - [**RNFNI001**](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) |
|  | [Protótipo 02](#prototipo01)  | Acesso Offline aos Dados dos Pets - [**RNFNI002**](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) |
| **Antonio Carvalho** | [Protótipo 03](#prototipo03)  | Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais) - [**RFNI016**](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) |
|  | [Protótipo 04](#prototipo04) | Integração direta com parceiros (clínicas, ONGs, pet shops) - [**RFNI018**](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) |
| **Heloisa Santos** |   — | — |
| **Letícia Paiva** | — | — |
| | — | — |
| **Isaac Menezes** | — | — |
| — |  | — |
| **Mateus Negrini** | — | — |
| — |  | — |

---

<a id="prototipo01"></a>

## Protótipo 01 - Aplicativo Móvel "SINPatinhas Agente" e Acesso Offline aos Dados dos Pets

<iframe width="560" height="500" src="https://www.youtube.com/embed/GNzpGv44cuQ"
 title="Vídeo" frameborder="0" allowfullscreen></iframe>

---
<a id="prototipo02"></a>
# Protótipo 02 - Acesso Offline aos Dados dos Pets

<iframe width="560" height="500" src="https://www.youtube.com/embed/HWXnLrvC-zA"
 title="Vídeo" frameborder="0" allowfullscreen></iframe>


**Validação dos Protótipos 01 e 02 com Dono de Pet**

<iframe width="560" height="500" src="https://www.youtube.com/embed/lc6ecCUG4oo"
 title="Vídeo" frameborder="0" allowfullscreen></iframe>

---

<a id="prototipo03"></a>

## Protótipo 03 - Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais)

### 1. Fluxo RFNI016: Adoção de Animais

#### 1.1. Tela: Animais para Adoção (Visão Geral)

| Elemento            | Nome no Esboço                                            | Detalhe da Prototipagem                                                                                                |
| :------------------ | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Sub-Aba Ativa** | `Animais para Adoção`                                     | Permanece na mesma tela (Conteúdo da listagem de animais).                                                            |
| Sub-Aba Inativa     | `Rede de Integração com Parceiros`                        | **CLICÁVEL (Trigger: On Click) $\rightarrow$ Navegar para:** `Tela: Rede de Integração com Parceiros` |
| **Filtros** | `Localização Próxima`, `Espécie`, `Porte`, `Idade`, `Sexo`, `Vacinado?` | (Elementos de filtro para visualização, não clicáveis no protótipo básico de navegação).                             |

![Sistema de adoção de animais](../assets/images/prototipos/antonio/antonio-p5.png)

* [Link para o protótipo](https://www.figma.com/site/TAnLTJvdBwvF1lZ9r3rDZ0/SinPatinhas?node-id=0-3&t=ZlGFR8c1pH9uiOuQ-1)

## Vídeo de Validação com Tutora de Animal

A validação com o usuário foi feita de forma presencial, no dia **12 de novembro de 2025**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1DKhPI8m0YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

## Participantes da validação

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o protótipo 3. |

---

<a id="prototipo04"></a>

## Protótipo 04 - Integração direta com parceiros (clínicas, ONGs, pet shops)

### 2. Fluxo RFNI018: Rede de Integração com Parceiros

#### 2.1. Tela: Rede de Integração com Parceiros (Visão Geral)

| Elemento            | Nome no Esboço                                            | Detalhe da Prototipagem                                                                                                |
| :------------------ | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Sub-Aba Inativa     | `Animais para Adoção`                                     | Permanece na mesma tela (Conteúdo da listagem de parceiros)                   |
| **Sub-Aba Ativa** | `Rede de Integração com Parceiros`                        | Permanece na mesma tela (Conteúdo da listagem de parceiros).                                                          |
| **Filtros** | `Localização Parceiro`, `Espécie`, `Serviço`, `Ordenar por: Melhor Avaliação / Mais Próximo / Melhor Preço` | (Elementos de filtro para visualização, e o "Ordenar por" pode ter simulação de clique para mudar a ordem da lista). |

![Integração direta com parceiros](../assets/images/prototipos/antonio/antonio-p6.png)

* [Link para o protótipo](https://www.figma.com/site/TAnLTJvdBwvF1lZ9r3rDZ0/SinPatinhas?node-id=0-3&t=ZlGFR8c1pH9uiOuQ-1)

## Vídeo de Validação com Tutora de Animal

A validação com o usuário foi feita de forma presencial, no dia **12 de novembro de 2025**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pf19UmVtw-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

## Participantes da validação

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o protótipo 4. |

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.
A base conceitual foi desenvolvida com base nos fundamentos de **Barbosa (2005)** e **CTEC2402**.
 
---

## Referências Bibliográficas

1. VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de Requisitos: Software Orientado ao Negócio. Rio de Janeiro: Brasport, 2016.

2. IEEE COMPUTER SOCIETY. Guide to the Software Engineering Body of Knowledge (SWEBOK) v4.0. Piscataway, NJ: IEEE, 2025.

| Data       | Versão | Descrição                                 | Autor                                      | Revisor                                     |
| :--------: | :----: | :---------------------------------------- | :----------------------------------------: | :----------------------------------------: |
| 11/11/2025 |  1.0   |  Criação da página de prototipação  | Pedro Gomes |   |
| 12/11/2025   | 1.1 | Edição da página de protótipos com confirguração geral de estrutura e adição dos protótipos unitários | Antonio Carvalho |    |
---