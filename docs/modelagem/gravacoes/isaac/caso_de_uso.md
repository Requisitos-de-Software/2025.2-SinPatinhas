# Casos de Uso - Isaac Menezes

---

## #UC011 – Exibir a média de consultas da clínica/hospital (RNFI014)

**Autor:** Isaac Menezes

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC011` |
| **Descrição** | Exibir para o usuário a média de consultas da clínica/hospital em questão |
| **Ator(es)** | Usuário do sistema |
| **Pré-condições** | - O usuário deve estar no aplicativo <br> - O usuário deve estar na página da clínica/hospital correspondente |
| **Ação** | Visualizar a média ponderada |
| **Fluxo Principal** | 1. O ator abre o aplicativo SinPatinhas <br> 2. Ele procura a página de interesse <br> 3. O sistema calcula a média ponderada das consultas da clínica/hospital <br> 4. O valor é exibido |
| **Fluxos Alternativos** | - Sistema exibe "ainda não foram feitas consultas" <br> - A página em questão não existe |
| **Fluxos de Exceção** | - Falha de conexão de internet: aplicativo exibe mensagem de erro |
| **Pós-condições** | A página da clínica existe |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RNFI014` |
| **Cenário Relacionado** | [#CNR009](/modelagem/gravacoes/isaac/cenarios.md) |
| **Léxico Relacionado** | [#LX014, #LX015, #LX016, #LX017, #LX018, #LX019, #LX020](/modelagem/gravacoes/isaac/lexicos.md) |

---

<font><p style="text-align: center">**Tabela 03** – Caso de Uso 11 – Exibir a média de consultas da clínica/hospital (RNFI014)</p></font>

---

## #UC012 – Exibir a média de consultas do profissional (RNFI015)

**Autor:** Isaac Menezes

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC011` |
| **Descrição** | Exibir para o usuário a média de consultas do profissional |
| **Ator(es)** | Usuário do sistema |
| **Pré-condições** | - O usuário deve ter o aplicativo SinPatinhas instalado <br> - Deve ter acesso à internet <br> - Deve procurar o perfil do profissional em questão |
| **Ação** | Visualizar a média ponderada do total das consultas do profissional |
| **Fluxo Principal** | 1. O usuário acessa o aplicativo <br> 2. Procura o perfil de interesse <br> 3. O sistema calcula a média ponderada <br> 4. O sistema exibe para o usuário |
| **Fluxos Alternativos** | - O aplicativo exibe mensagem informando que o profissional ainda não fez consultas <br> - O sistema informa que o perfil não existe |
| **Fluxos de Exceção** | - Falha na conexão de internet: o sistema exibe mensagem de erro |
| **Pós-condições** | O perfil existe |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RNFI014` |
| **Cenário Relacionado** | [#CNR009](/modelagem/gravacoes/isaac/cenarios.md) |
| **Léxico Relacionado** | [#LX014, #LX015, #LX016, #LX017, #LX018, #LX019, #LX020](/modelagem/gravacoes/isaac/lexicos.md) |

---

<font><p style="text-align: center">**Tabela 04** – Caso de Uso 11 – Exibir a média de consultas do profissional (RNFI014)</p></font>

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Isaac Menezes** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.1 | 12/10/2025 | Adicionado Caso de Uso 11: Média de consultas do profissional | Isaac | - |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).
