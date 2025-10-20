# Léxicos – Projeto SinPatinhas

---

## Validação com tutor de animal

A validação com o usuário foi feita de forma presencial, no dia 10 de outubro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3XY4oEoQQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

### Participantes da validação

| Participante | Papel |
| ------------ | ----- |
| Antonio Carvalho | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| Maria Clara | Estudante de Gestão Pública de 19 anos de idade, responsável por validar o artefato de léxicos. |

---

## Introdução

O **léxico** é uma notação utilizada para definir, de forma padronizada, os **termos e expressões** empregados na linguagem do sistema.  
Na **Engenharia de Requisitos**, ele desempenha um papel essencial ao identificar **palavras específicas do domínio de aplicação**, assegurando que todos os envolvidos no projeto compartilhem o mesmo entendimento dos conceitos <a id="anchor_1" href="#REF1">[1]</a>.

Cada termo léxico é composto por dois elementos principais:

- **Noção:** o significado literal do termo, ou aquilo que ele representa no sistema <a id="anchor_2" href="#REF2">[2]</a>.  
- **Impacto:** a consequência prática ou efeito produzido pela utilização desse termo no contexto do projeto.

No **projeto SinPatinhas**, o léxico foi construído com base no modelo do **Léxico Ampliado da Linguagem (LAL)**, categorizando os símbolos conforme suas funções no domínio do sistema:

- **Sujeito:** identifica quem executa as ações no sistema, como **Tutor**, **Veterinário** ou **Órgão Público**.  
- **Verbo:** descreve as ações realizadas, como **Cadastrar**, **Consultar**, **Emitir**, **Atualizar**.  
- **Objeto:** define os elementos manipulados ou gerados pelo sistema, como **Animal**, **Carteirinha**, **Registro Geral do Animal (RGA)**.  
- **Estado:** indica situações específicas do sistema, como **Animal Adotado**, **Animal Perdido** ou **Cadastro Pendente**.

## Estrutura para Criação de um Léxico

A criação de um léxico tem como objetivo **padronizar e esclarecer os termos utilizados no sistema**, garantindo um entendimento comum entre os participantes do projeto.  
A tabela a seguir apresenta os componentes utilizados.

**Tabela 1 – Estrutura para Criação de um Léxico**  
*Autoria: Antonio Carvalho*

## Exemplo de Estrutura de Léxico

### #LX000 - Léxico para #UC00 e #CEN00 (Título descritivo do caso)

| ID        | Noção      | Impacto                                                                 | Classificação | Dicionário         | Rastreamento |
| ---------- | ---------- | ------------------------------------------------------------------------ | ------------- | ------------------ | ------------- |
| LX000-01   | [Termo 1]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-02   | [Termo 2]  | [Descrição do impacto ou efeito do termo no contexto do sistema]        | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-03   | [Termo 3]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-04   | [Termo 4]  | [Descrição do impacto ou efeito do termo no contexto do sistema]        | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |
| LX000-05   | [Termo 5]  | [Descrição literal do termo no sistema]                                 | [Categoria]   | [Sinônimos]        | [RF/UC/CEN]  |

## Artefatos e Gravações Unitários

| **Participantes** | **Página Específica** | **Descrição** |
|---------------|------------------|------------------|
| **Antonio Carvalho** | [#LX001](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 E #CEN03 - Cadastro de Tutor |
|                      | [#LX002](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 e #CEN03 - Consulta de Dados |
|                      | [#LX003](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Gerenciamento de Adoções |
|                      | [#LX004](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Atualização Veterinária |
|                      | [#LX005](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Atualização de Status do Animal |
|                      | [#LX006](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC01 e #CEN03 - Gerenciamento de Cadastro |
|                      | [#LX007](/modelagem/gravacoes/antonio/lexicos.md) | Léxico para #UC02 e #CEN04 - Monitoramento e Acompanhamento |
| **Letícia Paiva**    | [#LX008](/modelagem/gravacoes/leticia/lexicos.md) | Léxico para #UC03 e #CEN01 - Sistema de Adoção (RFNI016) |
|                      | [#LX009](/modelagem/gravacoes/leticia/lexicos.md) | Léxico para #UC04 e #CEN02 - Alertas e Notificações Automáticas (RFNI017) |
| **Pedro Gomes**      | [#LX010](/modelagem/gravacoes/pedro/lexicos.md)   | Léxico para Cenário 07 |
|                      | [#LX011](/modelagem/gravacoes/pedro/lexicos.md)   | Léxico para Cenário 08 |
| **Mateus Santos Negrini** | [#LX012](/modelagem/gravacoes/mateus/lexicos.md) | Léxico para #UC03 e #CEN01 - Sistema de Adoção (RF030) |
|                           | [#LX013](/modelagem/gravacoes/mateus/lexicos.md) | Léxico para #UC04 e #CEN02 - Alertas de Notificações Automáticas (RF31) |
| **Heloisa Silva**         | [#LX014](/modelagem/gravacoes/heloisa/lexicos.md) | Léxico para #UC09 e #CEN05 - Sistema de Adoção (RFNI001) |
|                           | [#LX015](/modelagem/gravacoes/heloisa/lexicos.md) | Léxico para #UC010 e #CEN06 - Alertas e Notificações Automáticas (RFNI10) |
| **Isaac Menezes**         | [#LX016](/modelagem/gravacoes/isaac/lexicos.md) | Indicador Visual da Média (RNFI014 e RNFI015) |
|                           | [#LX017](/modelagem/gravacoes/isaac/lexicos.md) | Usuário (RNFI014 e RNFI015) |
|                           | [#LX018](/modelagem/gravacoes/isaac/lexicos.md) | Página da Clínica (RNFI014 e RNFI015) |
|                           | [#LX019](/modelagem/gravacoes/isaac/lexicos.md) | Profissional da área (RNFI014 e RNFI015) |
|                           | [#LX020](/modelagem/gravacoes/isaac/lexicos.md) | Navegar (RNFI014 e RNFI015) |
|                           | [#LX021](/modelagem/gravacoes/isaac/lexicos.md) | Média da clínica (RNFI014 e RNFI015) |
|                           | [#LX022](/modelagem/gravacoes/isaac/lexicos.md) | Média do profissional (RNFI014 e RNFI015) |

---

## Agradecimentos

Agradeço o apoio das ferramentas de Inteligência Artificial (IA) Generativa, em especial o uso do ChatGPT (OpenAI), que contribuiu para *formatação textual, revisão linguística, padronização e aprimoramento da clareza técnica deste documento*.
Ressalta-se que *todo o conteúdo conceitual e as decisões de modelagem aqui descritos — incluindo a definição dos cenários, requisitos e estruturas — foram elaborados por mim, Antonio*, sendo a IA utilizada como apoio redacional e organizacional no processo de documentação dos Léxicos, Especificação Suplementar e Cenários.

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| **Antonio Carvalho**   | 50%                 | Autor da página de léxicos  |
| **Letícia Paiva**   | 25%               | Contribuição na página  |
| **Isaac Menezes** | 25% | Refatoração da tabela de artefatos |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 10/10/2025 | Criação da página de léxicos  | Antonio | Letícia       |
| 1.1 | 19/10/2025 | Refatoração da tabela de artefatos | Isaac | Antonio |


---

## Referências

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 10: Cenários e Léxicos de Requisitos.* Brasília: Universidade de Brasília, 2025.