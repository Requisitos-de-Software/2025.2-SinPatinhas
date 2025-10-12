# Especificações Suplementares - Antonio Carvalho

---

<a id="es005"></a>

## #ES005 - Aplicativo Móvel

**Autor:** Pedro Gomes
# Especificação Suplementar ES005 – Requisito RNF05: Aplicativo Móvel "SINPatinhas Agente" (iOS/Android)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `RNF05` |
| **Título** | Aplicativo Móvel "SINPatinhas Agente" (iOS/Android) |
| **Descrição** | Desenvolver e disponibilizar um aplicativo móvel multiplataforma destinado aos agentes de apoio e tutores para consulta, registro e comunicação sobre animais cadastrados no sistema SINPatinhas, operando em dispositivos iOS e Android. |
| **Justificativa / Objetivo** | Fornecer uma solução móvel prática e responsiva que permita o uso em campo, especialmente durante campanhas e mutirões, garantindo o acesso rápido a informações, cadastros e consultas de animais, com ou sem conectividade constante. |
| **Ator(es)** | Agente de Apoio, Tutor |
| **Pré-condições** | - O usuário deve possuir um smartphone compatível com o aplicativo (Android 10+ ou iOS 14+).<br>- O aplicativo deve estar instalado e atualizado.<br>- O usuário deve possuir credenciais válidas para autenticação, quando aplicável. |
| **Entradas** | - Acesso do usuário ao aplicativo.<br>- Dados inseridos pelo agente (RGA, nome do tutor, informações do animal, etc.).<br>- Comandos de consulta ou sincronização. |
| **Saídas** | - Exibição de fichas de animais.<br>- Mensagens de confirmação (cadastro, atualização, consulta).<br>- Alertas de falha de conexão ou sincronização pendente. |
| **Regras de Negócio** | 1. O aplicativo deve permitir o uso básico mesmo com conectividade limitada, armazenando os dados localmente até que a sincronização seja possível.<br>2. Apenas agentes autenticados podem cadastrar ou editar informações em campo.<br>3. O aplicativo deve operar em conformidade com a LGPD, garantindo o sigilo de dados pessoais. |
| **Requisitos de Desempenho** | - Tempo máximo de resposta para consultas: **até 3 segundos** em conexão 4G ou superior.<br>- Tempo máximo de carregamento inicial do aplicativo: **até 5 segundos**.<br>- Capacidade de operar com **mínimo de 100 cadastros offline** por agente. |
| **Requisitos de Usabilidade** | - Interface intuitiva, com ícones representativos e navegação simplificada.<br>- Uso de notificações claras e acessíveis.<br>- Compatibilidade com **modo escuro** e fontes de acessibilidade (A11y). |
| **Requisitos de Portabilidade** | - Compatível com **Android (versão 10 ou superior)** e **iOS (versão 14 ou superior)**.<br>- Disponível nas lojas oficiais (Google Play e App Store). |
| **Requisitos de Segurança** | - Autenticação obrigatória para funções de cadastro e sincronização.<br>- Dados armazenados localmente devem ser criptografados.<br>- Comunicação com o servidor deve usar **HTTPS** e **token de sessão seguro**. |
| **Tratamento de Erros / Exceções** | - Falha na conexão: armazenar dados em **Fila de Sincronização** até reconexão.<br>- Erro de autenticação: solicitar novo login.<br>- Atualizações pendentes: exibir alerta até sincronização completa. |
| **Dependências** | - Servidor central do SINPatinhas.<br>- API REST de comunicação e sincronização de dados.<br>- Armazenamento local (SQLite, Room ou CoreData). |
| **Critérios de Aceitação** | 1. Aplicativo disponível para download nas lojas oficiais (Google Play / App Store).<br>2. O agente consegue realizar consultas e cadastros de animais com sucesso.<br>3. Dados inseridos offline são sincronizados corretamente quando há conexão.<br>4. O desempenho do aplicativo atende aos tempos máximos estabelecidos. |
| **Rastreabilidade** | `CNR005`, `#UC005`, `#LX005-01`, `#LX005-02`, `#LX005-03`, `#LX005-04`, `#LX005-05` |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | - Recomenda-se o uso de arquitetura **MVVM** para modularidade e testes.<br>- O aplicativo deve permitir atualizações automáticas de versão via loja.<br>- Implementar logs locais para auditoria de ações do agente. |

## #ES005 - Funcionalidade Offline
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
