# Introdução

A rastreabilidade é um dos aspectos fundamentais da engenharia de requisitos, pois permite acompanhar a origem e o impacto de cada requisito ao longo do projeto. De acordo com Vazquez e Simões (2016, sȩc. 9.6.1), “a rastreabilidade dos requisitos é o processo de identificar e documentar os elos (ou vínculos) que envolvem um determinado requisito, para que seja possível rastrear sua origem, os artefatos derivados e os demais requisitos relacionados”. <a href="assets/images/rastreabilidade/rastreabilidade.png" target="_blank">1</a>

Segundo Sayão e Leite (2005) a rastreabilidade pode ser dividida nos tipos: backward-from, forward-from, backward-to e forward-to onde: <a href="assets/images/rastreabilidade/rast_tipos.png" target="_blank">2</a>

- Rastreabilidade forward-from: liga os requisitos aos artefatos gerados a partir desse requisito.
- Rastreabilidade backward-from: liga os requisitos às suas fontes.
- Rastreabilidade forward-to: liga os documentos do plano de negócio aos requisitos.
- Rastreabilidade backward-to: liga os artefatos de desenho e implementação aos requisitos.

# Objetivos

A análise de rastreabilidade forward-from tem como objetivo acompanhar o destino e o desdobramento de cada requisito e seus artefatos gerados. Por meio da matriz de rastreabilidade, busca-se documentar como cada requisito se relaciona com artefatos posteriores — como por exemplo casos de uso, história de usuário ou cenários. 

# Metodologia

Para a execução da rastreabilidade forward-from, foi desenvolvida uma matriz de rastreabilidade estruturada da seguinte forma:
- Coluna 1: Identifica o código do requisito;
- Coluna 2: Contém a descrição do requisito e o respectivo léxico associado;
- Coluna 3: Especifica os casos de uso relacionados ao requisito;
- Coluna 4: Associa as histórias de usuário vinculadas ao requisito;
- Coluna 5: Indica os requisitos não funcionais (NFRs) correspondentes;
- Coluna 6: Apresenta as especificações suplementares associadas;
- Coluna 7: Define o cenário relacionado;
- Coluna 8: O elo de Toranzo relacionado ao requisito.

Essa estrutura permite a rastreabilidade direta entre os requisitos e seus artefatos derivados, assegurando a consistência e a completude do processo de engenharia de requisitos.
# Rastreabilidade Forward-from

## Legenda da matriz

<font><p style="text-align: center">**Tabela 1** - Legenda da matriz.</p></font>


| Sigla  |          Técnica de Modelagem       |                      
| ---- | --------------------------------- | 
| UCXX | Casos de uso (User case) |
| HUXX   | Histórias de Usuário |
| CNFRXX | NFR Framework |
| ESXX | Especificação Suplementar |
| CENXX | Cenário |
| LXXX | Léxico |
| ELXXX | Elo de Toranzo |

<font><p style="text-align: center">**Tabela 2** - Requisitos e seus artefatos.</p></font>

## Matriz de rastreabilidade

| ID | Descrição | UC | HU | CNFR | ES | CN | EL |
|:---|:---|:---|:---|:---|:---|:---|:---|
| RF001 | O sistema deve permitir o cadastro de usuários. | UC01 | HU01 |  |  |  |  |
| RF002 | O sistema deve possibilitar a recuperação de senhas. | UC02 | HU02 |  |  |  |  |
| RF003 | O sistema deve garantir a segurança dos dados dos usuários. | UC03 | HU03 |  |  |  |  |

Autor: Pedro Gomes

---

# Referência Bibliográfica

> SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. Rastreabilidade de Requisitos. Monografias em
Ciência da Computação, Rio de Janeiro, n. 20/05, p. 1-22, maio 2005.

> VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de Requisitos: Software Orientado ao Negócio. Rio de Janeiro : Brasport, 2016.

# Histórico de Versões

| Data       | Versão | Descrição                                 | Autor                                      | Revisor                                     |
| :--------: | :----: | :---------------------------------------- | :----------------------------------------: | :----------------------------------------: |
| 27/10/2025 |  1.0   |  Criação da documentação da matriz de rastreabilidade forward-from| Pedro Gomes   |   |
