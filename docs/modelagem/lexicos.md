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

## Gravações 



---

## Estrutura Padrão dos Léxicos

Cada entrada léxica segue o formato padronizado abaixo:

- **ID:** identificador único do termo.  
- **Noção:** significado literal ou definição do termo.  
- **Impacto:** resultado ou consequência do uso do termo no sistema.  
- **Classificação:** categoria do símbolo (Sujeito, Verbo, Objeto ou Estado).  
- **Dicionário:** sinônimos ou expressões equivalentes.  
- **Rastreamento:** vínculo com **Requisitos Funcionais (RF)** ou **Casos de Uso**.

---

## Exemplos de Léxicos do SinPatinhas

| **ID** | **Termo** | **Classificação** | **Noção** | **Impacto** | **Dicionário** | **Rastreamento** |
|:------:|------------|------------------|------------|--------------|----------------|------------------|
| LX001 | Tutor | Sujeito | Pessoa responsável pelo cadastro e cuidado do animal. | Realiza ações como cadastrar, editar e consultar informações do animal. | Dono, Responsável | RF001, RF002 |
| LX002 | Animal | Objeto | Ser cadastrado no sistema com informações de identificação. | Pode ser vinculado a um tutor e receber número de registro. | Pet, Animal de estimação | RF002, RF003 |
| LX003 | RGA | Objeto | Registro Geral do Animal emitido pelo sistema. | Garante a identificação única e oficial do animal. | Registro, Identificação | RF003, RF005 |
| LX004 | Cadastrar | Verbo | Ação de inserir novas informações no sistema. | Cria um novo registro de tutor ou animal. | Registrar, Inserir | RF001, RF002 |
| LX005 | Consultar | Verbo | Ação de buscar informações já registradas. | Permite a verificação de dados de animais e tutores. | Pesquisar, Visualizar | RF006 |
| LX006 | Carteirinha Digital | Objeto | Documento eletrônico com informações e QR Code do animal. | Facilita a identificação e autenticação do registro. | Identificação Digital | RF014 |
| LX007 | Veterinário | Sujeito | Profissional autorizado a emitir laudos e atualizar histórico. | Alimenta o sistema com dados médicos e vacinações. | Médico Veterinário | RF008, RF016 |
| LX008 | Animal Adotado | Estado | Situação em que o animal foi vinculado a um novo tutor. | Altera o status e transfere a titularidade no sistema. | Pet Adotado | RF009 |
| LX009 | Animal Perdido | Estado | Situação em que o animal está desaparecido. | Gera alertas e consultas públicas para ajudar na localização. | Desaparecido | RF007, RF018 |

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                  |
|------------------------|----------------------|-----------------------------|
| **Antonio Carvalho**   | 100%                 | Autor da página de léxicos  |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 10/10/2025 | Criação da página de léxicos  | Antonio | -          |

---

## Referências

SERRANO M., SERRANO M. Requisitos -  - Disponível em: . Acesso em 19 de Junho de 2025.
