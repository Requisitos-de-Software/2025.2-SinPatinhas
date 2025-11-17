# Lista de Verificação e Operacionalização de Requisitos Não Funcionais  

---

## CNFR09 - 3° Cartão de Especificação NFR – Integração

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR09 |
| **Cartão de Especificação** | Integração entre Clínicas, ONGs e Sistema SinPatinhas |
| **Descrição** | O sistema deve permitir **integração segura e padronizada** com plataformas externas de **clínicas veterinárias** e **ONGs parceiras**, garantindo **interoperabilidade de dados, sincronização automática** e **comunicação bidirecional** entre os sistemas. |
| **Justificativa** | A integração entre o SinPatinhas, ONGs e clínicas veterinárias promove **eficiência operacional**, reduz redundâncias de cadastro, melhora o **monitoramento de saúde dos animais** e fortalece a **rede colaborativa de adoção e atendimento**. |
| **Origem** | [RNF019](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) / Entrevista 4 |
| **Critério de Ajuste** | Comunicação entre sistemas com tempo de resposta ≤ **2 segundos**.<br>Suporte a formatos **JSON** e **XML** via **API RESTful** segura (HTTPS).<br>Taxa mínima de sincronização bem-sucedida ≥ **98%**.<br>Logs de integração armazenados por no mínimo **12 meses**. |
| **Dependências** | API de integração; middleware de comunicação; autenticação via tokens JWT; infraestrutura de rede segura. |
| **Prioridade** | Média (6/10) |
| **Conflitos** | Aumentar o número de integrações pode **elevar a complexidade técnica** e o custo de manutenção de APIs; conexões simultâneas podem afetar o **desempenho** (RNF012). |
| **Histórias Relacionadas** | [#HU008](../../../modelagem/gravacoes/antonio/historias) / [HU032](../../../modelagem/gravacoes/heloisa/historias) |
| **Softgoals Relacionados** | Interoperabilidade (MAKE ++), Segurança (MAKE ++), Desempenho (HURT -), Manutenibilidade (HURT -) |
| **Propagação de Impactos** | A integração entre sistemas amplia a **eficiência e colaboração interinstitucional**, mas pode **exigir mais infraestrutura, validações e testes de compatibilidade contínuos**. |

---

## Tema: **Interoperabilidade e Integração Institucional do Sistema SinPatinhas**

---

## Requisito Não Funcional – RNF019  

### **Identificação**
| **Código** | **Descrição** | **Fonte** |
|-------------|---------------|------------|
| **RNF019** | **Integração entre clínicas, ONGs e SinPatinhas.** | Entrevista 3 |

---

### **1. Categoria (Softgoal Type)**  
**Interoperabilidade (Interoperability)**  
> Garante que o sistema SinPatinhas seja capaz de se comunicar e trocar dados de forma eficiente, segura e padronizada com sistemas externos de clínicas e ONGs parceiras, promovendo colaboração e rastreabilidade de informações.

---

### **2. Softgoal Refinements (Refinamentos do Softgoal)**  

| **Tipo de Refinamento** | **Softgoal Derivado** | **Descrição** |
|--------------------------|-----------------------|----------------|
| **Operationalization** | *Comunicação Padronizada* | As integrações devem seguir padrões abertos (REST/HTTPS, JSON, XML) para facilitar interoperabilidade. |
| **Operationalization** | *Sincronização Automática de Dados* | Atualizações de informações sobre animais e atendimentos devem ocorrer de forma automatizada e segura. |
| **Operationalization** | *Segurança na Integração* | Toda troca de dados entre sistemas deve ser autenticada e criptografada, garantindo privacidade e integridade. |
| **Operationalization** | *Monitoramento de Conectividade* | O sistema deve registrar logs e status de todas as integrações para auditoria e diagnóstico. |

---

### **3. Operationalizations (Mecanismos de Implementação)**  

| **Operacionalização** | **Descrição Técnica** | **Ferramenta/Solução Potencial** |
|------------------------|------------------------|----------------------------------|
| **O1. API RESTful Segura** | Criação de endpoints protegidos com autenticação via JWT e comunicação HTTPS. | Node.js / Spring Boot / Django REST |
| **O2. Middleware de Integração** | Camada intermediária para transformar dados entre formatos e validar entradas/saídas. | Apache Camel / MuleSoft / Express Middleware |
| **O3. Webhooks e Notificações** | Notificações automáticas enviadas em tempo real para sincronizar eventos entre sistemas. | Webhooks / Firebase Cloud Messaging |
| **O4. Banco de Dados Compartilhado de Logs** | Registro de logs de integrações (data, origem, status, payload). |
| **O5. Monitoramento e Auditoria** | Painel de status com métricas de latência e taxa de sucesso das integrações. | Grafana / Prometheus |

---

### **4. Mecanismos de Avaliação (Claims e Métricas)**  

| **Claim** | **Métrica de Avaliação** | **Meta** |
|------------|--------------------------|-----------|
| "Os sistemas trocam informações com sucesso" | Taxa de integrações concluídas sem erro | ≥ 98% |
| "A comunicação é segura e criptografada" | Taxa de conexões HTTPS válidas | 100% |
| "As atualizações são sincronizadas em tempo real" | Tempo médio de sincronização | ≤ 2 segundos |
| "Os logs de integração são completos e acessíveis" | Percentual de eventos com log registrado | 100% |

---

### **5. Interdependências (Softgoal Interactions)**  

| **Relacionamento** | **Softgoal Associado** | **Tipo de Influência** |
|---------------------|-------------------------|-------------------------|
| RNF019 ↔ RNF017 | Segurança | **+** (A autenticação de APIs reforça a proteção de dados) |
| RNF019 ↔ RNF012 | Desempenho | **-** (Múltiplas conexões simultâneas podem impactar a performance) |
| RNF019 ↔ RF020 | Escalabilidade | **+** (Integração modular facilita a expansão futura) |

---

### **6. Rastreabilidade**  
| **Relação** | **Elemento Relacionado** |
|--------------|---------------------------|
| **Requisito Funcional Relacionado** | RF029 – Conexão com sistemas de clínicas e ONGs |
| **Histórias Relacionadas** | #HU008 – Sincronização de Dados entre ONGs e Clínicas <br> #HU032 – Mapa interatico com localização de estabelecimentos parceiros |
| **Fonte** | RNF027  / Entrevista 3 |

---

## Conclusão  

| **Aspecto Avaliado** | **RNF019 (Integração entre Clínicas, ONGs e SinPatinhas)** |
|-----------------------|-------------------------------------------------------------|
| **Softgoal Type** | Interoperability |
| **Objetivo** | Permitir integração segura e automatizada entre o SinPatinhas e instituições parceiras |
| **Mecanismo Principal** | API RESTful com middleware de comunicação e logs de auditoria |
| **Métrica-chave** | Tempo de sincronização ≤ 2s e taxa de sucesso ≥ 98% |
| **Interdependências Positivas** | Reforça segurança e escalabilidade do ecossistema |
| **Interdependências Negativas** | Pode aumentar a complexidade técnica e custos de manutenção |

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Letícia Paiva** | 100% | Autor desta página |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 21/10/2025 | Criação dos NFR | Letícia Paiva | - |

---

## Referências  

| **Código** | **Referência Completa** |
|-------------|--------------------------|
| [REF1] | SERRANO, Milene; SERRANO, Maurício. *NFR Framework e Requisitos Não Funcionais – Aula 11*. Universidade de Brasília (UnB), 2025. |
| [REF2] | CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Springer, 2000. |
| [REF3] | PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021. |