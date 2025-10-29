# Especificações Suplementares - Antonio Carvalho

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VDm2lGHywDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de especificação suplementar. |

---

<a id="es001"></a>

## #ES001 - Usabilidade (U)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Usabilidade** definem a facilidade com que o usuário final (cidadão, tutor ou profissional) consegue interagir com o sistema, sendo crucial para a adoção de um sistema de utilidade pública como o **SinPatinhas**.  
Foco em **intuitividade**, **clareza** e **eficiência da interface**.

<p align="center"><b>Tabela 1 - Requisitos de Usabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | A interface deve ser intuitiva para cidadãos, facilitando o uso por pessoas de diferentes níveis de afinidade tecnológica. | Análise Doc |
| [RNF005](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf005) | O sistema deve suportar os navegadores principais e ser responsivo em dispositivos móveis (prioridade no mobile). | Análise Doc |
| [RNF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) (E1) | O sistema deve ser fácil e intuitivo de operar. | Entrevista 01 |
| [RNF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) (E1) | O layout deve ser limpo e organizado. | Entrevista 01 |
| [RF012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf012) | O sistema deve permitir login integrado via Gov.br, possibilitando autenticação única e segura para tutores e profissionais. | Análise Doc |
| [RF013](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf013) | O sistema deve habilitar preenchimento automático de dados pessoais do tutor (quando autorizado via Gov.br), reduzindo a duplicidade e agilizando a entrada de dados. | Análise Doc |

---

## #ES002 - Segurança (S)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

A **Segurança** trata da proteção dos dados do sistema e prevenção de acessos não autorizados, garantindo **conformidade com a LGPD** e proteção da privacidade de tutores e animais.

<p align="center"><b>Tabela 2 - Requisitos de Segurança.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF001](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | O sistema deve estar em total conformidade com a Lei Geral de Proteção de Dados (LGPD). | Análise Doc |
| [RNF002](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) (E3) | O sistema deve alertar o usuário sobre tentativas de acesso não autorizado. | Entrevista 03 |
| [RNF017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf017) | O sistema deve gerar alertas de acesso não autorizado e tentativas de violação. | Entrevista 03 |
| [RNF019](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) | Segurança na integração entre clínicas, ONGs e SinPatinhas. | Análise Doc |

---

## #ES003 - Confiabilidade (R)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

A **Confiabilidade** garante que o sistema funcione de forma **estável e contínua**, evitando perda de dados e mantendo integridade das informações, mesmo em falhas ou interrupções.

<p align="center"><b>Tabela 3 - Requisitos de Confiabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) (E1) | O sistema deve garantir a fidelidade contra perda de dados. | Entrevista 01 |
| [RNF003](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) (E3) | O sistema deve evitar perda de dados e garantir cópias de segurança automáticas. | Entrevista 03 |
| [RNF009](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | O sistema deve registrar logs detalhados de acesso e modificações nos prontuários e cadastros. | Entrevista 03 |
| [RF006](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006) | O acesso à consulta pública via RGA ou microchip deve ser restrito, exibindo apenas dados não sensíveis do animal. | Análise Doc |

---

---

## Referência para elaboração desses artefatos em específico: Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos.

![Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos. (Especificado em "Referências")](../../../assets/images/modelagem/antonio_esp_sup.png)

---

## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Antonio Carvalho** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Especificações Suplementares** própria | Antonio | - |

---

## Referências  

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos.* Brasília: Universidade de Brasília, 2025.