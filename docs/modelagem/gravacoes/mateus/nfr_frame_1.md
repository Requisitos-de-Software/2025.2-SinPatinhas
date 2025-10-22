# Lista de Verificação e Operacionalização de Requisitos Não Funcionais  
### *Baseado no NFR Framework – Mateus Santos Negrini (2025)*  

---

## 7° Cartão de Especificação NFR – Desempenho  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR07 |
| **Cartão de Especificação** | Desempenho |
| **Descrição** | Todas as operações do sistema, incluindo consultas, atualizações e geração de relatórios, devem retornar resultados em **até 2 segundos** sob condições normais de uso (até 10000 usuários simultâneos). |
| **Justificativa** | Garantir respostas rápidas melhora a experiência do usuário e assegura eficiência operacional do sistema, mesmo sob alta carga. |
| **Origem** | [RNF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) / Entrevista 3 |
| **Critério de Ajuste** | Todas as consultas, atualizações e relatórios devem retornar em ≤ **2 segundos** para até 10000 usuários simultâneos. |
| **Dependências** | Infraestrutura de hardware adequada; Banco de dados otimizado; Servidores de aplicação dimensionados corretamente; Indexação e cache implementados. |
| **Prioridade** | Alta (9/10) |
| **Conflitos** | Otimizações de desempenho podem impactar a **consistência** dos dados ([RNF023](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023)); caching agressivo pode afetar **atualização em tempo real**. |
| **Histórias Relacionadas** | [HU019](../../../modelagem/gravacoes/mateus/historias.md#hu019--acesso-à-area-de-instruções-integradas) / [HU023](../../../modelagem/gravacoes/mateus/historias.md#hu023--emissão-de-alertas-de-acesso-suspeito-ou-tentativas-de-violação) / [HU024](../../../modelagem/gravacoes/mateus/historias.md#hu024--vincular-foto-do-tutor-ao-registro-de-adoção) |
| **Softgoals Relacionados** | Desempenho (MAKE ++), Disponibilidade (MAKE ++), Confiabilidade (HURT -) |
| **Propagação de Impactos** | Melhorar desempenho **aumenta satisfação do usuário** e produtividade, mas pode demandar maior custo de infraestrutura e complexidade na implementação. |

---

## Tema: **Desempenho Operacional do Sistema SinPatinhas**  

---

## Requisito Não Funcional – RNF021  

### **Identificação**
| **Código** | **Descrição** | **Fonte** |
|-------------|---------------|------------|
| **RNF021** | **Desempenho: respostas rápidas em todas as operações do sistema.** | Entrevista 3 |

---

### **1. Categoria (Softgoal Type)**  
**Desempenho (Performance)**  
> Garante que o sistema execute operações críticas rapidamente, mantendo tempo de resposta aceitável para consultas, atualizações e geração de relatórios.

---

### **2. Softgoal Refinements (Refinamentos do Softgoal)**  

| **Tipo de Refinamento** | **Softgoal Derivado** | **Descrição** |
|--------------------------|-----------------------|----------------|
| **Operationalization** | *Tempo de Resposta de Consultas* | Consultas aos dados devem retornar resultados em ≤ 2 segundos. |
| **Operationalization** | *Atualizações de Dados* | Inserções e alterações em registros devem ser aplicadas em ≤ 2 segundos. |
| **Operationalization** | *Geração de Relatórios* | Relatórios do sistema devem ser gerados em ≤ 2 segundos sob carga normal. |

---

### **3. Operationalizations (Mecanismos de Implementação)**  

| **Operacionalização** | **Descrição Técnica** | **Ferramenta/Solução Potencial** |
|------------------------|------------------------|----------------------------------|
| **O1. Indexação de Banco de Dados** | Criação de índices para consultas frequentes. | MySQL / PostgreSQL / SQL Server |
| **O2. Caching de Resultados** | Armazenamento temporário de resultados de consultas e relatórios pesados. | Redis / Memcached |
| **O3. Balanceamento de Carga** | Distribuição de requisições entre múltiplos servidores de aplicação. | NGINX / HAProxy |
| **O4. Otimização de Queries** | Reescrita de consultas SQL para reduzir tempo de execução. | Analisador de consultas + EXPLAIN |

---

### **4. Mecanismos de Avaliação (Claims e Métricas)**  

| **Claim** | **Métrica de Avaliação** | **Meta** |
|------------|--------------------------|-----------|
| "Consultas retornam rapidamente" | Tempo médio de resposta de consultas | ≤ 2 segundos |
| "Atualizações são aplicadas rapidamente" | Tempo médio de execução de atualização de registros | ≤ 2 segundos |
| "Relatórios são gerados rapidamente" | Tempo médio de geração de relatórios | ≤ 2 segundos |

---

### **5. Interdependências (Softgoal Interactions)**  

| **Relacionamento** | **Softgoal Associado** | **Tipo de Influência** |
|---------------------|-------------------------|-------------------------|
| RNF021 ↔ RNF023 | Confiabilidade | **-** (O desempenho pode afetar consistência de dados) |
| RNF021 ↔ RNF024 | Auditabilidade | **-** (Logs detalhados podem impactar performance) |

---

### **6. Rastreabilidade**  
| **Relação** | **Elemento Relacionado** |
|--------------|---------------------------|
| **Requisito Funcional Relacionado** | RFNI019 – Área de instruções integradas (manual digital) explicando passo a passo o uso das funções. / RFNI020 -	Emissão de alertas de acesso suspeito ou tentativas de violação. / RFNI022 - Vincular foto do tutor ao registro de adoção. |
| **Histórias Relacionadas** | HU019 – Acesso à Área de Instruções Integradas / HU023 – Emissão de Alertas de Acesso Suspeito ou Tentativas de Violação / HU024 – Vincular Foto do Tutor ao Registro de Adoção |
| **Fonte** | Entrevista 3 |

---

## Conclusão  

| **Aspecto Avaliado** | **RNF021 (Desempenho)** |
|-----------------------|-------------------------|
| **Softgoal Type** | Performance |
| **Objetivo** | Garantir respostas rápidas e eficiência operacional |
| **Mecanismo Principal** | Indexação, caching, balanceamento de carga e otimização de queries |
| **Métrica-chave** | Tempo de resposta ≤ 2 segundos |
| **Interdependência Positiva** | Melhora satisfação do usuário e produtividade, mas pode aumentar custo de infraestrutura |

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Mateus Santos Negrini** | 100% | Autor desta página |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 21/10/2025 | Criação dos cards | Mateus Santos Negrini | - |

---
## Referências  

| **Código** | **Referência Completa** |
|-------------|--------------------------|
| [REF1] | SERRANO, Milene; SERRANO, Maurício. *NFR Framework e Requisitos Não Funcionais – Aula 11*. Universidade de Brasília (UnB), 2025. |
| [REF2] | CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Springer, 2000. |
| [REF3] | PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021. |
