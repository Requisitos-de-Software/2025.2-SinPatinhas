# Cenários – Projeto SinPatinhas

## Introdução

No contexto de desenvolvimento do **SinPatinhas**, sistema voltado ao **registro, identificação e gestão de animais domésticos**, a utilização de **cenários** desempenha papel essencial na compreensão das interações entre usuários e o sistema.  
Esses cenários permitem representar **situações reais ou plausíveis** de uso, tornando possível compreender de forma contextualizada as **necessidades, objetivos e ações** dos principais atores envolvidos — como tutores, veterinários e órgãos públicos parceiros.

Em **Engenharia de Requisitos**, um **cenário** é uma narrativa que descreve como um ou mais atores interagem com o sistema para alcançar um objetivo específico <a id="anchor_1" href="#REF1">[1]</a>.  
Essa abordagem permite validar requisitos funcionais e não funcionais de forma prática e centrada no usuário, garantindo que as funcionalidades modeladas — como **cadastro de tutor (RF001)**, **emissão do RGA (RF003)** ou **consulta pública de registros (RF006)** — estejam alinhadas ao uso real da aplicação.

> “Um cenário é basicamente uma história sobre pessoas realizando uma atividade. É uma narrativa, textual ou pictórica, concreta, rica em detalhes contextuais, de uma situação de uso da aplicação, envolvendo usuários, processos e dados reais ou potenciais.”  
> *(Rosson e Carroll, 2002)* <a id="anchor_2" href="#REF2">[2]</a>  

---

## Gravações



--- 

## Metodologia

A metodologia aplicada neste projeto baseia-se na abordagem de **Design Baseado em Cenários**, conforme proposta por **Rosson e Carroll (2002)**.  
No caso do **SinPatinhas**, o processo teve início com a elaboração do **perfil dos usuários** — identificando tutores, veterinários e agentes públicos — e a análise de suas interações com o sistema.

A partir disso, foram construídos **cenários narrativos**, descrevendo situações reais de uso, com base em dados dos **requisitos funcionais (RFs)** e **casos de uso** previamente definidos.  
Cada cenário foi estruturado com os seguintes elementos:

- **Ambiente (Contexto):** situação que motiva ou explica as ações dos atores.  
- **Atores:** usuários que interagem com o sistema (ex.: tutor, veterinário, órgão público).  
- **Objetivos:** resultados esperados da interação.  
- **Planejamento:** ações planejadas para atingir o objetivo.  
- **Ações:** comportamentos observáveis dos atores no sistema.  
- **Eventos:** reações do sistema ou do ambiente às ações realizadas.  
- **Avaliação:** análise dos resultados e impactos da interação.

Essa metodologia possibilitou compreender não apenas as **funcionalidades desejadas**, mas também **as limitações e expectativas dos usuários**, permitindo o refinamento dos requisitos e o fortalecimento da modelagem centrada no ser humano.

---

## Estrutura de Cenário

<font><p style="text-align: center">**Tabela 01** - Template para construção dos cenários.</p></font>

| **Item** | **Descrição** |
|-----------|:-------------------------------------------------------------:|
| **Título** | - |
| **Código** | - |
| **Caso de uso trabalhado** | - |
| **Atores** | - |
| **Ambiente (Contexto)** | - |
| **Objetivos** | - |
| **Planejamento** | - |
| **Ações** | - |
| **Eventos** | - |
| **Avaliação** | - |

---

## Exemplos de Cenários do SinPatinhas

### Cenário 1 – Cadastro de Tutor e Animal
| **Item** | **Descrição** |
|-----------|---------------------------------------------------------------|
| **Título** | Cadastro de Tutor e Animal |
| **Código** | CEN001 |
| **Caso de uso trabalhado** | RF001 – Cadastro de Tutor / RF002 – Cadastro de Animal |
| **Atores** | Tutor |
| **Ambiente (Contexto)** | O tutor acessa o sistema SinPatinhas para cadastrar-se e registrar seu animal de estimação. |
| **Objetivos** | Permitir que o tutor insira seus dados e os do animal, criando um vínculo formal no sistema. |
| **Planejamento** | O tutor planeja utilizar o sistema para obter o Registro Geral do Animal (RGA). |
| **Ações** | O tutor acessa a página de cadastro, preenche os formulários e envia as informações. |
| **Eventos** | O sistema valida os dados e cria o registro, emitindo um número de protocolo. |
| **Avaliação** | O tutor confirma o cadastro ao visualizar o RGA provisório e recebe confirmação por e-mail. |

---

### Cenário 2 – Emissão de Registro Geral do Animal (RGA)
| **Item** | **Descrição** |
|-----------|---------------------------------------------------------------|
| **Título** | Emissão de RGA |
| **Código** | CEN002 |
| **Caso de uso trabalhado** | RF003 – Geração do RGA / RF005 – Emissão de Documento |
| **Atores** | Tutor, Órgão Público |
| **Ambiente (Contexto)** | Após o cadastro, o tutor solicita a emissão do documento oficial do animal. |
| **Objetivos** | Garantir a identificação única e legal do animal. |
| **Planejamento** | O tutor acessa a funcionalidade “Emitir RGA” no painel do sistema. |
| **Ações** | O tutor solicita a emissão e o órgão público valida os dados do cadastro. |
| **Eventos** | O sistema gera o número RGA e disponibiliza a carteirinha digital. |
| **Avaliação** | O tutor acessa o documento com QR Code e confirma a autenticidade. |

---

### Cenário 3 – Atualização de Status de Animal
| **Item** | **Descrição** |
|-----------|---------------------------------------------------------------|
| **Título** | Atualização de Status do Animal |
| **Código** | CEN003 |
| **Caso de uso trabalhado** | RF007 – Atualização de Status |
| **Atores** | Tutor, Veterinário |
| **Ambiente (Contexto)** | O tutor acessa o sistema para informar que o animal foi perdido ou adotado. |
| **Objetivos** | Atualizar o status do animal no banco de dados, informando a comunidade. |
| **Planejamento** | O tutor planeja atualizar os dados para emitir um alerta público. |
| **Ações** | O tutor acessa o perfil do animal e seleciona a opção de atualização de status. |
| **Eventos** | O sistema envia a alteração ao órgão público e atualiza o registro. |
| **Avaliação** | O novo status é exibido publicamente e o tutor recebe confirmação por e-mail. |

---

## Tabela de Contribuição

| **Nome**              | **Contribuição (%)** | **Função**                       |
|------------------------|----------------------|----------------------------------|
| **Antonio Carvalho**   | 100%                 | Autor da página de cenários      |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 01/10/2025 | Criação da página de cenários | Antonio | -          |

---

## Referências

[1] Barbosa, S. D. J.; Silva, B. S. *Interação Humano-Computador.* 2ª Ed. Elsevier, 2021.  
