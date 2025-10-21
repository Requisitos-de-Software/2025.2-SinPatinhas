# Casos de Uso – Projeto SinPatinhas

## Introdução

Os **casos de uso** são um dos principais artefatos da **UML (Unified Modeling Language)**, permitindo descrever as **interações entre usuários (atores)** e o **sistema**. Por meio deles, é possível compreender **como o sistema deve se comportar** em diferentes situações, garantindo que os **requisitos funcionais** sejam bem representados e validados junto aos stakeholders.

No contexto do **projeto SinPatinhas**, os casos de uso representam ações essenciais como **cadastro de tutores e animais (RF001 e RF002)**, **geração de registro oficial (RF003)**, **emissão de documento de identificação (RF005)** e **atualização de status (RF007)**. Essa modelagem contribui para o entendimento funcional do sistema e auxilia na documentação das regras de negócio.

---

### Diagrama de Casos de Uso do SinPatinhas:

Com base nos requisitos elicitados anteriormente para o projeto SinPatinhas, **foi desenvolvido o Diagrama de Casos de Uso UML apresentado abaixo**. O modelo representa as principais interações entre o ator Usuário e o sistema SinPatinhas, incluindo diferentes tipos de perfis — **Pessoa Física, Pessoa Jurídica e Clínicas/Hospitais Veterinários** — que executam ações específicas no sistema.

O diagrama contempla **funcionalidades como cadastro de usuários e animais**, recebimento de tutelas, visualização e edição de registros, além de histórico de transferências e confirmação de alterações. Também **há interação com o servidor do SinPatinhas, responsável pelo processamento das operações e pela comunicação entre os módulos do sistema**.

Assim, **o diagrama sintetiza o comportamento esperado do sistema em relação aos usuários e demais entidades envolvidas, servindo como base para a modelagem e implementação das funcionalidades descritas nos requisitos**.

![Casos-de-uso](../assets/images/casos_de_uso-SinPatinhas.png)

* [Link para o diagrama de casos de uso](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=v2_caso_de_uso_sinpatinhas.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1JOocwPjoZbvNTRfiIlNnfZpdQCFAApOf%26export%3Ddownload)

## Estrutura para Criação de um Caso de Uso

A criação de um caso de uso deve seguir uma estrutura organizada que descreva de forma clara as **ações, condições e resultados esperados**.  
A tabela a seguir apresenta os componentes utilizados.

**Tabela 1 – Estrutura para Criação de um Caso de Uso**  
*Autoria: Antonio Carvalho*

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | Identificador único do caso de uso (ex.: #UC001). |
| **Descrição** | Breve explicação sobre a funcionalidade tratada. |
| **Ator(es)** | Usuário(s) ou sistema(s) que interagem com o caso. |
| **Pré-condições** | Condições que devem ser atendidas antes da execução do caso. |
| **Ação** | A operação principal realizada. |
| **Fluxo principal** | Sequência de passos que descrevem o comportamento esperado. |
| **Fluxos alternativos** | Caminhos opcionais que podem ocorrer durante a execução. |
| **Fluxos de exceção** | Tratamento de erros ou situações inesperadas. |
| **Pós-condições** | Estado do sistema após a execução. |
| **Data de Criação** | Data em que o caso foi documentado. |
| **Rastreabilidade** | Código dos requisitos relacionados. |
| **Cenário Relacionado** | Link para o cenário correspondente. |
| **Léxico Relacionado** | Termos do léxico utilizados no caso de uso. |

---

## Artefatos e Gravações Unitários

| **Participantes** | **Página Específica** | **Descrição** |
|---------------|------------------|------------------|
| **Antonio Carvalho** | [#UC001](/modelagem/gravacoes/antonio/caso_de_uso.md) | Sistema de Adoção de Animais (RNFI016) |
|                      | [#UC002](/modelagem/gravacoes/antonio/caso_de_uso.md) | Notificação Periódica para Atualização de Dados e Fotos do Animal (RNFI021) |
| **Letícia Paiva**    | [#UC003](/modelagem/gravacoes/leticia/caso_de_uso.md) | Sistema de adoção (RNFI016) |
|                      | [#UC004](/modelagem/gravacoes/leticia/caso_de_uso.md) | Alertas e Notificações Automáticas (RNFI017) |
| **Pedro Gomes**      | [#UC005](/modelagem/gravacoes/pedro/caso_de_uso.md)   | Aplicativo Móvel |
|                      | [#UC006](/modelagem/gravacoes/pedro/caso_de_uso.md)   | Acesso Offline à Ficha do Animal |
| **Mateus Santos Negrini** | [#UC007](/modelagem/gravacoes/mateus/caso_de_uso.md) | Acesso à Área de Instruções Integradas (RF33) |
|                           | [#UC008](/modelagem/gravacoes/mateus/caso_de_uso.md) | Notificação Periódica para Atualização de Dados e Fotos do Animal (RF44) |
| **Heloisa Silva**         | [#UC009](/modelagem/gravacoes/heloisa/casos_de_uso.md) | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados (RFNI001) |
|                           | [#UC010](/modelagem/gravacoes/heloisa/casos_de_uso.md) | Sistema de avaliação numérica para estabelecimentos (RFNI010) |
| **Isaac Menezes**         | [#UC011](/modelagem/gravacoes/isaac/caso_de_uso.md) | Exibir média de consultas da clínica/hospital (RNFI014) |
|                           | [#UC012](/modelagem/gravacoes/isaac/caso_de_uso.md) | Exibir média de consultas do profissional (RNFI015) |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| Antonio Carvalho | 80% | Autor da página de apresentação de casos de uso |
| Isaac Menezes | 20% | Refatoração da tabela de artefatos |
 

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 10/10/2025 | Criação da página de **Casos de Uso** e exemplo explicativo | Antonio | Leticia |
| 1.1 | 19/10/2025 | Refatoração da tabela de artefatos | Isaac | Antonio |

---

## Referências

Pressman, R. S. *Engenharia de Software: uma abordagem profissional*. 8ª Ed. AMGH, 2016.  
Sommerville, I. *Engenharia de Software*. 10ª Ed. Pearson, 2019.
