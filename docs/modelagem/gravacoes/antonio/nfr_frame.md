# Lista de Verificação e Operacionalização de Requisitos Não Funcionais  
### *Baseado no NFR Framework – Antonio Carvalho (2025)*  

---

## 1° Cartão de Especificação NFR – Segurança e Auditabilidade  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR01 |
| **Cartão de Especificação** | Segurança e Auditabilidade |
| **Descrição** | O sistema deve detectar acessos não autorizados e registrar **logs de ações e modificações**, garantindo **alertas automáticos** e **transparência operacional**. |
| **Justificativa** | A presença de mecanismos de segurança e auditoria aumenta a confiança dos usuários e assegura o cumprimento de boas práticas de **governança de dados** e **conformidade institucional**. |
| **Origem** | [RNF017](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf017) / [RNF024](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) / Entrevista 3 |
| **Critério de Ajuste** | Geração de alerta em até **2 segundos** após tentativa de acesso indevido.<br>Registro de **100% das ações** críticas em log seguro.<br>Tempo de consulta a logs ≤ **5 segundos**. |
| **Dependências** | Módulo de autenticação; API de notificações; banco de dados seguro; infraestrutura de logs e auditoria. |
| **Prioridade** | Alta (9/10) |
| **Conflitos** | O excesso de registros pode afetar o **desempenho** ([RNF012](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf012)); bloqueios de segurança podem afetar a **disponibilidade** ([RNF014](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf014)). |
| **Histórias Relacionadas** | [HU010](../../../modelagem/gravacoes/antonio/historias.md#hu010--login-e-segurança-de-sessão) / [HU011](../../../modelagem/gravacoes/antonio/historias.md#hu011--visualização-de-logs-administrativos) |
| **Softgoals Relacionados** | Segurança (MAKE ++), Auditabilidade (MAKE ++), Disponibilidade (HURT -), Desempenho (HURT -) |
| **Propagação de Impactos** | O fortalecimento dos controles de auditoria e segurança **melhora a confiabilidade geral** do sistema, mas pode **aumentar o custo computacional** e reduzir o desempenho em picos de uso. |

---

## Tema: **Confiabilidade e Segurança Operacional do Sistema SinPatinhas**  

---

## Requisito Não Funcional – RNF017  

### **Identificação**
| **Código** | **Descrição** | **Fonte** |
|-------------|---------------|------------|
| **RNF017** | **Segurança: geração de alertas em caso de acesso não autorizado.** | Entrevista 3 |

---

### **1. Categoria (Softgoal Type)**  
**Segurança (Security)**  
> Garante que o sistema detecte e responda adequadamente a tentativas de acesso indevido, protegendo dados sensíveis de tutores, animais e parceiros.

---

### **2. Softgoal Refinements (Refinamentos do Softgoal)**  

| **Tipo de Refinamento** | **Softgoal Derivado** | **Descrição** |
|--------------------------|-----------------------|----------------|
| **Operationalization** | *Detecção de Acesso Indevido* | O sistema deve identificar padrões de login suspeitos (falhas repetidas, IP desconhecido, etc.). |
| **Operationalization** | *Geração de Alertas Automáticos* | Ao detectar tentativa de acesso não autorizado, deve enviar notificação imediata a administradores. |
| **Operationalization** | *Registro de Eventos Críticos* | Cada tentativa de violação deve ser registrada em log seguro para auditoria posterior. |

---

### **3. Operationalizations (Mecanismos de Implementação)**  

| **Operacionalização** | **Descrição Técnica** | **Ferramenta/Solução Potencial** |
|------------------------|------------------------|----------------------------------|
| **O1. Sistema de Monitoramento de Sessões** | Implementação de middleware que monitora autenticações e identifica acessos suspeitos. | JWT + Middleware Express / Spring Security |
| **O2. Alertas Automáticos** | Envio de e-mails ou mensagens via webhook (Slack/Discord) a cada tentativa falha acima de 3. | API de Notificação (SMTP, SendGrid, Webhooks) |
| **O3. Bloqueio Temporário de Conta** | Suspensão temporária do usuário após N tentativas mal-sucedidas. | Configuração no Backend com contador e tempo de bloqueio |
| **O4. Log Seguro de Acesso** | Registro criptografado dos eventos no banco de dados com timestamp e IP. | SQL Server + Hash SHA-256 |

---

### **4. Mecanismos de Avaliação (Claims e Métricas)**  

| **Claim** | **Métrica de Avaliação** | **Meta** |
|------------|--------------------------|-----------|
| "O sistema é capaz de identificar acessos não autorizados" | Percentual de tentativas suspeitas detectadas | ≥ 95% |
| "Alertas são gerados em tempo hábil" | Tempo médio entre detecção e notificação | ≤ 2 segundos |
| "Eventos críticos são auditáveis" | Presença de registro completo (timestamp, IP, usuário, tipo de evento) | 100% dos casos |

---

### **5. Interdependências (Softgoal Interactions)**  

| **Relacionamento** | **Softgoal Associado** | **Tipo de Influência** |
|---------------------|-------------------------|-------------------------|
| RNF017 ↔ RNF024 | Auditabilidade | **+** (Complementar: logs aumentam segurança) |
| RNF017 ↔ RNF014 | Disponibilidade | **-** (Bloqueios podem afetar disponibilidade momentânea) |

---

### **6. Rastreabilidade**  
| **Relação** | **Elemento Relacionado** |
|--------------|---------------------------|
| **Requisito Funcional Relacionado** | RF020 – Autenticação e controle de acesso |
| **Histórias Relacionadas** | HU010 – Login e segurança de sessão |
| **Fonte** | Entrevista 3 |

---

---

## Requisito Não Funcional – RNF024  

### **Identificação**
| **Código** | **Descrição** | **Fonte** |
|-------------|---------------|------------|
| **RNF024** | **Auditabilidade: logs de acesso e modificações realizadas no sistema.** | Entrevista 3 |

---

### **1. Categoria (Softgoal Type)**  
**Auditabilidade (Auditability)**  
> Garante a capacidade de rastrear ações, acessos e alterações feitas por usuários, assegurando a transparência e integridade do sistema.

---

### **2. Softgoal Refinements (Refinamentos do Softgoal)**  

| **Tipo de Refinamento** | **Softgoal Derivado** | **Descrição** |
|--------------------------|-----------------------|----------------|
| **Operationalization** | *Registro de Logs de Acesso* | Cada ação executada deve ser registrada com data, usuário e IP. |
| **Operationalization** | *Registro de Alterações de Dados* | Toda modificação em registros sensíveis (cadastro de tutores, animais, etc.) deve ser logada. |
| **Operationalization** | *Disponibilização de Relatórios de Auditoria* | Administradores podem consultar logs por data, usuário ou tipo de evento. |

---

### **3. Operationalizations (Mecanismos de Implementação)**  

| **Operacionalização** | **Descrição Técnica** | **Ferramenta/Solução Potencial** |
|------------------------|------------------------|----------------------------------|
| **O1. Log Centralizado** | Criação de tabela de logs com campos `usuario`, `ação`, `timestamp`, `entidade`, `ip`. | SQL Server / Elastic Stack |
| **O2. Versionamento de Dados** | Registro automático de versões anteriores antes de qualquer alteração. | Triggers SQL ou Auditoria ORM |
| **O3. Painel de Auditoria** | Interface administrativa com filtros de visualização de logs. | React + API RESTful |
| **O4. Backup e Retenção de Logs** | Armazenamento seguro por no mínimo 12 meses. | Azure Storage / AWS S3 Glacier |

---

### **4. Mecanismos de Avaliação (Claims e Métricas)**  

| **Claim** | **Métrica de Avaliação** | **Meta** |
|------------|--------------------------|-----------|
| "Todas as ações são registradas adequadamente" | Cobertura de log (ações logadas / ações executadas) | ≥ 98% |
| "Logs podem ser auditados e rastreados" | Tempo de resposta para consulta de log | ≤ 5 segundos |
| "Integridade dos logs é garantida" | Detecção de logs alterados ou corrompidos | 0 casos por mês |

---

### **5. Interdependências (Softgoal Interactions)**  

| **Relacionamento** | **Softgoal Associado** | **Tipo de Influência** |
|---------------------|-------------------------|-------------------------|
| RNF024 ↔ RNF017 | Segurança | **+** (Logs reforçam detecção de incidentes) |
| RNF024 ↔ RNF012 | Desempenho | **-** (Registro detalhado pode impactar performance) |

---

### **6. Rastreabilidade**  
| **Relação** | **Elemento Relacionado** |
|--------------|---------------------------|
| **Requisito Funcional Relacionado** | RF022 – Monitoramento administrativo |
| **Histórias Relacionadas** | HU011 – Visualização de logs administrativos |
| **Fonte** | Entrevista 3 |

---

## Conclusão  

| **Aspecto Avaliado** | **RNF017 (Segurança)** | **RNF024 (Auditabilidade)** |
|-----------------------|-------------------------|------------------------------|
| **Softgoal Type** | Security | Auditability |
| **Objetivo** | Prevenir e alertar acessos não autorizados | Registrar e rastrear ações e alterações |
| **Mecanismo Principal** | Middleware de detecção e alerta | Log centralizado e painel de auditoria |
| **Métrica-chave** | Tempo de resposta dos alertas ≤ 2s | Cobertura de logs ≥ 98% |
| **Interdependência Positiva** | Reforça a auditabilidade | Aumenta a segurança geral do sistema |

---

## Referências  

| **Código** | **Referência Completa** |
|-------------|--------------------------|
| [REF1] | SERRANO, Milene; SERRANO, Maurício. *NFR Framework e Requisitos Não Funcionais – Aula 11*. Universidade de Brasília (UnB), 2025. |
| [REF2] | CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Springer, 2000. |
| [REF3] | PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021. |
