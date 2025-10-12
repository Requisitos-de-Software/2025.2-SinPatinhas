# Casos de uso - Pedro Gomes

## #UC005 – Aplicativo Móvel

**Autor:** Pedro Gomes

<a id="uc005"></a>

<font><p style="text-align: center">**Tabela 01** –# Caso de Uso – Consulta Rápida e Contato de Tutor (RF05)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC005` |
| **Descrição** | Permitir que um usuário (tutor ou agente de apoio) consulte informações de um animal através do **RGA** no aplicativo SINPatinhas e entre em contato com o tutor. |
| **Ator(es)** | Tutor, Agente de Apoio |
| **Pré-condições** | - O usuário deve ter o aplicativo SINPatinhas instalado.<br>- Conexão com internet disponível para consulta online.<br>- O animal possui RGA visível. |
| **Ação** | Consultar Animal e Contatar Tutor |
| **Fluxo Principal** | 1. O ator abre o aplicativo SINPatinhas.<br>2. Seleciona a opção **"Consultar Animal"**.<br>3. Digita o **RGA** do animal.<br>4. O sistema exibe a **Ficha do Animal** (nome, tutor, histórico, vacinação).<br>5. O ator visualiza os dados e, se necessário, inicia a **Chamada Telefônica via App**.<br>6. O sistema registra a consulta e confirma a comunicação. |
| **Fluxos Alternativos** | - RGA não retorna animal.<br>→ Sistema exibe "Animal não encontrado" e sugere verificar o RGA.<br>- Animal já foi adotado.<br>→ Sistema exibe alerta de indisponibilidade. |
| **Fluxos de Exceção** | - Falha de conexão durante a consulta.<br>→ Sistema exibe mensagem de erro e sugere tentar novamente. |
| **Pós-condições** | Consulta registrada; comunicação com tutor iniciada se realizada a chamada. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RF05` |
| **Cenário Relacionado** | `#CNR005` |
| **Léxico Relacionado** | `#LX010-01`, `#LX010-02`, `#LX010-03`, `#LX010-04`, `#LX010-05` |

---

## #UC006 – Acesso Offline à Ficha do Animal

**Autor:** Pedro Gomes

<a id="uc006"></a>

<font><p style="text-align: center">**Tabela 02** – # Caso de Uso – Acesso Offline à Ficha do Animal (RNF06)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC006` |
| **Descrição** | Permitir que o tutor acesse informações vitais de seu animal (identificação, histórico, vacinação) diretamente no aplicativo SINPatinhas, mesmo sem conexão com a internet. |
| **Ator(es)** | Tutor |
| **Pré-condições** | - Aplicativo SINPatinhas instalado.<br>- Dados do animal previamente salvos offline no dispositivo. |
| **Ação** | Acessar Ficha do Animal Offline |
| **Fluxo Principal** | 1. O ator abre o aplicativo SINPatinhas.<br>2. Seleciona a seção **"Animais Salvos"**.<br>3. Escolhe o animal desejado.<br>4. O sistema exibe a **Ficha do Animal** completa, incluindo carteira de vacinação digital.<br>5. O ator visualiza as informações offline. |
| **Fluxos Alternativos** | - Dados não salvos offline.<br>→ Sistema exibe mensagem: "Sem conexão com a internet. Conecte-se a uma rede para acessar os dados." |
| **Fluxos de Exceção** | - Falha no armazenamento local ou corrupção de dados.<br>→ Sistema exibe alerta de erro e sugere sincronizar novamente quando houver conexão. |
| **Pós-condições** | Acesso às informações do animal realizado com sucesso; dados offline permanecem disponíveis para futuras consultas. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RF07` |
| **Cenário Relacionado** | `#CNR006` |
| **Léxico Relacionado** | `#LX011-01`, `#LX011-02`, `#LX011-03`, `#LX011-04` |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Pedro Gomes** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Casos de Uso** própria | Pedro | - |

---

## Referências  


---
