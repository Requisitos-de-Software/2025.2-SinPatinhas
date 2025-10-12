# Léxicos – Projeto SinPatinhas

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

---

## Artefatos e Gravações Unitários

| Participante | Página Específica |
|---------------|------------------|
| Antonio Carvalho | [Modelagem dos léxicos - Léxico 01, 02, 03, 04, 05, 06 e 07](/modelagem/gravacoes/antonio/lexicos.md) |
| Letícia Paiva | [Modelagem dos léxicos - Léxico 08 e 09 ](/modelagem/gravacoes/leticia/lexicos.md) |
| Pedro Gomes | [Modelagem dos léxicos - Léxico 10 e 11](/modelagem/gravacoes/pedro/lexicos.md) |
---

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

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| **Antonio Carvalho**   | 33%                 | Autor da página de léxicos  |
| **Letícia Paiva**   | 33%                 | Contribuição da página  |
| **Mateus Santos Negrini**   | 33%                 | Adição de léxico LXN12 e LXN13 | 

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 10/10/2025 | Criação da página de léxicos  | Antonio | Letícia       |
| 1.1    | 10/10/2025 | Adiciona léxicos LX008 e LX009 | Letícia | Antonio       |1
| 1.2    | 12/10/2025 | Adiciona LXN12 e LXN13.| Mateus | - |


---

## Referências

SERRANO M., SERRANO M. Requisitos -  - Disponível em: . Acesso em 19 de Junho de 2025.
