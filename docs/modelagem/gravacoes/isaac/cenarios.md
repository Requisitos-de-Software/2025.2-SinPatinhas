## Cenários - Isaac Menezes

<a id="cnr009"></a>

A seguir, os cenários para os requisitos **Indicador visual da média de avaliações na clínica/hospital** e **Indicador visual da média de avaliações por médico** são detalhados, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.  

---

### Cenário 09 – Indicador visual da média de avaliações na clínica/hospital (RFNI011)

**Autor:** Isaac Menezes

**Tabela 7 – Indicador visual da média de avaliações na clínica/hospital**

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Indicador visual da média de avaliações na clínica/hospital |
| **Código** | CNR007a |
| **Caso de uso trabalhado** | [#UC011](...) |
| **Metas/Objetivos** | A página da clínica ou hospital deve conter a média ponderada de atendimentos na clínica |
| **Contexto** | **Local:** página da clínica/hospital<br>**Tempo:** indeterminado<br>**Pré-condição:** o usuário deve estar na página da clínica/hospital |
| **Ator(es)** | Usuário visitando o site, não necessariamente tutor de pet ou profissional da área |
| **Recursos** | Computador ou smartphone com navegador web com conexão com a internet |
| **Episódios** | 1. O usuário acessa o site <br> 2. Ele navega até a página da clínica ou hospital <br> 3. O sistema calcula a média ponderada de atendimentos <br> 4. Na página correspondente, o usuário vê a média ponderada calculada |
| **Exceção** | Caso a clínica ou hospital ainda não tenha feito nenhum atendimento, o sistema exibe uma mensagem com essa informação no lugar onde deveria aparecer a média |

---

### Cenário 10 – Indicador visual da média de avaliações por médico (RFNI012)

**Autor:** Isaac Menezes

**Tabela 8 – Indicador visual da média de avaliações por médico**

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Indicador visual da média de avaliações por médico |
| **Código** | CNR007b |
| **Caso de uso trabalhado** | [#UC011](...) |
| **Metas/Objetivos** | A página do perfil do médico exibe a média ponderada da quantidade de suas avaliações |
| **Contexto** | **Local:** página de perfil do médico<br>**Tempo:** indeterminado<br>**Pré-condição:** o usuário está visualizando o perfil do médico |
| **Ator(es)** | Usuário do site, não necessariamente um tutor de pet ou profissional da área |
| **Recursos** | Computador ou smartphone com navegador web com conexão com a internet |
| **Episódios** | 1. O usuário acessa o site <br> 2. Ele procura pelo perfil do médico <br> 3. Ao encontrar o perfil desejado, ele o seleciona <br> 4. O sistema carrega o perfil do médico e calcula a média ponderada de suas consultas <br> 5. O sistema exibe a média calculada para o usuário |
| **Exceção** | Caso o médico ainda não tenha feito consultas, o sistema exibe uma mensagem com essa informação no lugar onde deveria aparecer a média |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Isaac Menezes** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.2 | 12/10/2025 | Unificação dos Cenários 08 e 09: média de avaliações de clínicas e médicos | Isaac | Antônio |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).
