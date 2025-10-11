# Especificação Suplementar

## Introdução

A **Especificação Suplementar** é um documento que reúne todos os requisitos de um sistema que não foram plenamente descritos nos casos de uso ou nas histórias de usuário <a id="anchor_1" href="#REF1">[1]</a>.  
Seu propósito é complementar o modelo de requisitos funcionais, abordando aspectos relacionados a desempenho, segurança, usabilidade e outros atributos de qualidade essenciais ao sucesso do sistema.

No projeto **SinPatinhas**, essa especificação descreve características adicionais que garantem a confiabilidade e a eficiência da plataforma, voltada ao processo de adoção de animais, cadastro de tutores e gestão de abrigos.

Entre os principais tipos de requisitos abordados estão:

- **Requisitos de qualidade**, como **usabilidade**, **desempenho**, **segurança**, **confiabilidade** e **manutenibilidade**;  
- **Requisitos legais e éticos**, relacionados à proteção de dados e ao consentimento do usuário;  
- **Restrições técnicas**, como compatibilidade com navegadores, suporte a dispositivos móveis e integração com bancos de dados.  

A classificação utilizada baseia-se no modelo **FURPS+** (Functionality, Usability, Reliability, Performance, Supportability, entre outros fatores), proposto por Grady (1992), que organiza os requisitos em categorias para facilitar sua análise e rastreabilidade <a id="anchor_2" href="#REF2">[2]</a>.

## Artefatos e Gravações Unitários

| Participante | Página Específica |
|---------------|------------------|
| Antonio Carvalho | [Página específica da modelagem das especificações suplementares](/modelagem/gravacoes/antonio/especificacao.md) |

## Finalidade

O objetivo deste documento é **complementar os artefatos de requisitos funcionais** do **SinPatinhas**, assegurando que os atributos de qualidade, restrições de projeto e requisitos técnicos estejam devidamente documentados.  
Dessa forma, ele serve de guia para o desenvolvimento, testes e manutenção do sistema, garantindo que as expectativas dos usuários e dos administradores sejam atendidas de forma consistente e segura.

---

## Metodologia

A elaboração da Especificação Suplementar do **SinPatinhas** seguiu os seguintes passos:

1. **Identificação dos Requisitos Não Funcionais:** a partir das histórias de usuário, foram analisados os aspectos de desempenho, segurança e usabilidade que influenciam o sistema.  
2. **Classificação FURPS+:** os requisitos identificados foram organizados nas categorias **Funcionalidade**, **Usabilidade**, **Confiabilidade**, **Desempenho** e **Suportabilidade**.  
3. **Revisão e Consolidação:** os requisitos foram revisados com base nos demais artefatos produzidos pelo grupo, como o **backlog**, o **diagrama de casos de uso** e os **cenários de interação**.  

Essa metodologia assegura que os requisitos complementares estejam alinhados com o contexto e os objetivos do SinPatinhas, além de oferecer suporte ao desenvolvimento de uma aplicação acessível, segura e eficiente.

---

## Exemplos de Requisitos Suplementares (FURPS+)

| Categoria | Requisito | Descrição |
|------------|------------|------------|
| **Funcionalidade (F)** | RFN01 | O sistema deve garantir que apenas usuários autenticados possam cadastrar ou editar informações sobre animais. |
| **Usabilidade (U)** | RFN02 | A interface deve ser intuitiva e permitir navegação fluida em dispositivos móveis. |
| **Confiabilidade (R)** | RFN03 | O sistema deve armazenar os dados dos usuários de forma segura e à prova de falhas. |
| **Desempenho (P)** | RFN04 | O carregamento das páginas deve ocorrer em até 3 segundos em conexões padrão. |
| **Suportabilidade (S)** | RFN05 | O sistema deve permitir fácil atualização do banco de dados e manutenção das funcionalidades sem interrupção prolongada do serviço. |

Fonte:

---

## Tabela de Contribuições

| **Nome**            | **Contribuição (%)** | **Função**                                 |
|----------------------|----------------------|--------------------------------------------|
| **Antonio Carvalho** | 100%                 | Autor da página de Especificação Suplementar |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                                      | Autores  | Revisores |
|-------:|------------|----------------------------------------------------------------|----------|-----------|
| 1.0    | 10/10/2025 | Criação do documento de Especificação Suplementar | Antonio | - |


---

## Referências

Grady, R. B. *Practical Software Metrics for Project Management and Process Improvement.* Prentice Hall, 1992. 

---
