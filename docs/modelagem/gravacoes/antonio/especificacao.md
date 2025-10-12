# Especificações Suplementares - Antonio Carvalho

---

* [Link para validação de critérios utilizados para especificação suplementar com tutor de animal](https://www.youtube.com/watch?v=VDm2lGHywDw)

---

## Especificações Suplementares Desenvolvidas

<a id="es001"></a>

## #ES001 - Usabilidade (U)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

Os requisitos de **Usabilidade** definem a facilidade com que o usuário final (cidadão, tutor ou profissional) consegue interagir com o sistema, sendo crucial para a adoção de um sistema de utilidade pública como o **SinPatinhas**.  
Esses requisitos focam na **intuitividade**, **clareza** e **eficiência da interface**.

<p align="center"><b>Tabela 1 - Requisitos de Usabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF003](#rnf003) | A interface deve ser intuitiva para cidadãos, facilitando o uso por pessoas de diferentes níveis de afinidade tecnológica. | Análise Doc |
| [RNF005](#rnf005) | O sistema deve suportar os navegadores principais e ser responsivo em dispositivos móveis (prioridade no mobile). | Análise Doc |
| [RNF001](#rnf001) (E1) | O sistema deve ser fácil e intuitivo de operar. | Entrevista 01 |
| [RNF002](#rnf002) (E1) | O layout deve ser limpo e organizado. | Entrevista 01 |
| [RF012](#rf012) | O sistema deve permitir login integrado via Gov.br, possibilitando autenticação única e segura para tutores e profissionais. | Análise Doc |
| [RF013](#rf013) | O sistema deve habilitar preenchimento automático de dados pessoais do tutor (quando autorizado via Gov.br), reduzindo a duplicidade e agilizando a entrada de dados. | Análise Doc |

---

<a id="es002"></a>

## #ES002 - Segurança e Confiabilidade (R)

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

A **Segurança e Confiabilidade (Reliability)** são essenciais para um sistema que lida com **dados pessoais (LGPD)** e **informações de saúde animal**.  
Esta seção detalha as exigências para **proteção de dados**, **integridade do sistema** e **prevenção de falhas**.

<p align="center"><b>Tabela 2 - Requisitos de Segurança e Confiabilidade.</b></p>

| **ID** | **Descrição** | **Rastreamento** |
|:-------|:---------------|:-----------------|
| [RNF001](#rnf001) | O sistema deve estar em total conformidade com a Lei Geral de Proteção de Dados (LGPD). | Análise Doc |
| [RNF003](#rnf003) (E1) | O sistema deve garantir a fidelidade contra perda de dados. | Entrevista 01 |
| [RNF003](#rnf003) (E3) | O sistema deve evitar perda de dados e garantir cópias de segurança automáticas. | Entrevista 03 |
| [RNF002](#rnf002) (E3) | O sistema deve alertar o usuário sobre tentativas de acesso não autorizado, similar a sistemas bancários. | Entrevista 03 |
| [RNF009](#rnf009) | O sistema deve registrar logs detalhados de acesso e modificações nos prontuários e cadastros. | Entrevista 03 |
| [RF006](#rf006) | O acesso à consulta pública via RGA ou microchip deve ser restrito, exibindo apenas dados não sensíveis do animal (ex.: status e contato de recuperação). | Análise Doc |

---

## Referência para elaboração desses artefatos em específico:

![Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos. (Especificado em "Referências")](../assets/images/modelagem/antonio_esp_sup.png)

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