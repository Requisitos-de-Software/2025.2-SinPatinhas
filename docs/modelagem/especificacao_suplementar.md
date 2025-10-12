# Especificação Suplementar – Projeto SinPatinhas

## Introdução

O **Artefato Suplementar** é um documento escrito em dialeto comum que compila a totalidade dos requisitos de um sistema que não foram integralmente capturados pelos **casos de uso** <a id="anchor_1" href="#REF1">[1]</a>.  
Ele adiciona valor ao modelo de casos de uso ao detalhar exigências adicionais, tais como:

- Requisitos estatutários e normativos, englobando conformidade com diretrizes e padrões de aplicativos;  
- Características de qualidade, como **Facilidade de Uso**, **Fidelidade**, **Performance**, **Manutenibilidade (Apoio)** e **Segurança da Informação**;  
- Outras demandas técnicas, abrangendo plataformas e ambientes operacionais suportados, exigências de compatibilidade e restrições de arquitetura.

A adoção do paradigma **FURPS+** (*Funcionalidade, Usabilidade, Confiabilidade, Desempenho, Suportabilidade*, mais fatores) direciona a descoberta e a estrutura desses requisitos, garantindo a abrangência completa dos aspectos operacionais e de qualidade da aplicação <a id="anchor_2" href="#REF2">[2]</a>.

---

## Objetivo do Documento

A finalidade deste artefato é estabelecer, de modo claro e organizado, as **exigências adicionais do sistema**, assegurando que características de qualidade, limitações de projeto e normas de negócio estejam registradas para nortear o desenvolvimento e a confirmação do sistema.

---

## Estratégia e Etapas de Elaboração

A modelagem das exigências do sistema foi executada com foco na separação entre **requisitos operacionais** e **requisitos não operacionais**.

A criação do Artefato Suplementar deve observar as seguintes etapas primárias:

1. **Elicitação de Requisitos Não Funcionais:** descobrir as necessidades que não são funções diretas do sistema, como parâmetros de velocidade, proteção e simplicidade de manuseio.  
2. **Classificação FURPS+:** estruturar os requisitos não operacionais e limitações técnicas nas categorias da abordagem FURPS+:  
   - **Funcionalidade (F):** normas de negócio e funções não abrangidas por casos de uso;  
   - **Usabilidade (U)**;  
   - **Reliability (R) – Confiabilidade/Fidelidade**;  
   - **Performance (P) – Celeridade**;  
   - **Supportability (S) – Apoio/Manutenibilidade**;  
   - **+ (Plus):** limitações de arquitetura, execução, interface, etc.  
3. **Especificação Detalhada:** descrever cada exigência em linguagem natural, de forma inequívoca, singular e mensurável, atribuindo um código único (ID).  
4. **Associação de Elementos:** para cada categoria FURPS+, elaborar uma tabela consolidando os códigos e suas descrições.  
5. **Rastreabilidade:** se pertinente, mencionar o **Caso de Uso (UC)** que está diretamente ligado à exigência.

Essa metodologia visa garantir que todos os elementos essenciais à construção do sistema estejam adequadamente documentados e acessíveis a todos os participantes do projeto.

---

## Artefatos e Gravações Unitários

| **Participante** | **Página Específica** |
|------------------|------------------------|
| Antonio Carvalho | [Modelagem das especificações suplementares - Especificações 01 e 02 ](/modelagem/gravacoes/antonio/especificacao.md) |
| Letícia Paiva | [Modelagem das especificações suplementares - Especificações 03 e 04](/modelagem/gravacoes/leticia/especificacao.md) |
| Pedro Gomes | [Modelagem das especificações suplementares - Especificações 05 e 06](/modelagem/gravacoes/pedro/especificacao.md) |
| Mateus Santos Negrini | [Modelagem das especificações suplementares - Especificações 07 e 08](/modelagem/gravacoes/mateus/especificacao.md) |

---

### Finalidade

O objetivo deste documento é **complementar os elementos de requisitos operacionais do SinPatinhas**, assegurando que os **atributos de qualidade**, **limitações de arquitetura** e **demandas técnicas** estejam devidamente registrados.  
Dessa forma, ele serve de **referencial para o desenvolvimento, testes e manutenção do sistema**, garantindo que as expectativas dos utilizadores e dos administradores sejam satisfeitas de maneira consistente e segura.

---

## Metodologia

A elaboração do Artefato Suplementar do SinPatinhas seguiu as seguintes etapas:

1. **Identificação dos Requisitos Não Funcionais:** com base nas narrativas de utilizador, foram analisados os aspectos de celeridade, proteção e facilidade de uso que influenciam o sistema.  
2. **Classificação FURPS+:** as exigências descobertas foram organizadas nas categorias **Funcionalidade**, **Usabilidade**, **Confiabilidade**, **Desempenho** e **Suportabilidade**.  
3. **Revisão e Consolidação:** as exigências foram revistas em função dos demais elementos produzidos pelo grupo, como o **registro de pendências**, o **diagrama de interações do utilizador** e os **cenários de interação**.

Essa estratégia assegura que as exigências adicionais estejam em conformidade com o contexto e os objetivos do SinPatinhas, além de proporcionar apoio à construção de uma aplicação acessível, protegida e eficiente.

---

## Tabela 1 – Estrutura para Criação de Especificação Suplementar (FURPS+)
*Autoria: Antonio Carvalho*

| **Categoria** | **Requisito (Código)** | **Descrição** |
|----------------|------------------------|----------------|
| Funcionalidade (F) | | |
| Usabilidade (U) | | |
| Confiabilidade (R) | | |
| Desempenho (P) | | |
| Suportabilidade (S) | | |
| + (Plus) | | |

---

## Tabela de Contribuições

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Antonio Carvalho | 100% | Autor da página de Especificação Suplementar |

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|:----------:|:---------:|:---------------|:-------------|:---------------|
| 1.0 | 10/10/2025 | Criação do documento de Especificação Suplementar | Antonio | Letícia |


---

## Referências

Grady, R. B. *Practical Software Metrics for Project Management and Process Improvement.* Prentice Hall, 1992.
Pressman, R. S. *Engenharia de Software: uma abordagem profissional.* 8ª edição. McGraw Hill, 2016.
