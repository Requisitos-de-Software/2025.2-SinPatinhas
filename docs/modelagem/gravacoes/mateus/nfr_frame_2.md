# Lista de Verificação e Operacionalização de Requisitos Não Funcionais  
### *Baseado no NFR Framework – Mateus Santos Negrini (2025)*  

---

## 8° Cartão de Especificação NFR – Confiabilidade  

| **Campo** | **Detalhamento** |
|------------|------------------|
| **Nr Requisito** | CNFR08 |
| **Cartão de Especificação** | Confiabilidade |
| **Descrição** | Veterinários devem poder acessar dados clínicos de um animal cadastrado e acessar exames, mas **não poderão editar exames que não foram realizados por eles**. |
| **Justificativa** | Garantir que cada profissional tenha acesso apenas às informações que pode modificar aumenta a segurança dos dados e evita erros ou alterações indevidas nos registros clínicos. |
| **Origem** | [RNF023](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023) / Entrevista 3 |
| **Critério de Ajuste** | Somente o veterinário responsável pelo exame pode alterá-lo; outros usuários podem apenas visualizar. |
| **Dependências** | Sistema de autenticação; Banco de dados com controle de usuários; Módulo de permissões e roles; Interface de acesso controlado. |
| **Prioridade** | Alta (9/10) |
| **Conflitos** | Restrições de acesso podem impactar **desempenho** em consultas simultâneas ([RNF021](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021)); auditoria detalhada pode impactar **usabilidade**. |
| **Histórias Relacionadas** | [HU019](../../../modelagem/gravacoes/mateus/historias.md#hu019--acesso-à-area-de-instruções-integradas)  |
| **Softgoals Relacionados** | Confiabilidade (MAKE ++), Segurança (MAKE ++), Desempenho (HURT -) |
| **Propagação de Impactos** | O fortalecimento da confiabilidade **reduz risco de erros clínicos** e aumenta a confiança no sistema, mas pode aumentar complexidade na implementação e impacto no desempenho. |

---

## Tema: **Confiabilidade e Integridade de Dados Clínicos no Sistema SinPatinhas**  

---

## Requisito Não Funcional – RNF023  

### **Identificação**
| **Código** | **Descrição** | **Fonte** |
|-------------|---------------|------------|
| **RNF023** | **Confiabilidade: controle de acesso e integridade de exames veterinários.** | Entrevista 3 |

---

### **1. Categoria (Softgoal Type)**  
**Confiabilidade (Reliability)**  
> Garante que os dados clínicos e exames só possam ser alterados por profissionais autorizados, mantendo a integridade das informações.

---

### **2. Softgoal Refinements (Refinamentos do Softgoal)**  

| **Tipo de Refinamento** | **Softgoal Derivado** | **Descrição** |
|--------------------------|-----------------------|----------------|
| **Operationalization** | *Controle de Acesso a Exames* | Apenas o veterinário responsável pelo exame pode editar seus dados. |
| **Operationalization** | *Visualização Segura de Dados Clínicos* | Outros veterinários podem visualizar, mas não alterar informações críticas. |
| **Operationalization** | *Registro de Alterações* | Todas alterações de exames devem ser registradas com timestamp, usuário e histórico da modificação. |

---

### **3. Operationalizations (Mecanismos de Implementação)**  

| **Operacionalização** | **Descrição Técnica** | **Ferramenta/Solução Potencial** |
|------------------------|------------------------|----------------------------------|
| **O1. Sistema de Permissões por Usuário** | Atribuição de roles e permissões específicas para cada veterinário. | Banco de dados com tabelas de roles + middleware de autenticação |
| **O2. Registro de Auditoria de Exames** | Logs de alterações de exames, indicando usuário, timestamp e detalhes da modificação. | SQL Server / PostgreSQL + ORM com triggers |
| **O3. Interface de Visualização Controlada** | Diferencia opções de edição e visualização de acordo com permissões. | React / Angular |
| **O4. Verificação de Propriedade de Exame** | Validação no backend para impedir alterações de exames de outro veterinário. | Middleware de validação no servidor |

---

### **4. Mecanismos de Avaliação (Claims e Métricas)**  

| **Claim** | **Métrica de Avaliação** | **Meta** |
|------------|--------------------------|-----------|
| "Somente veterinários autorizados podem editar exames" | Percentual de tentativas de edição bloqueadas corretamente | 100% |
| "Outros usuários só podem visualizar dados" | Número de acessos ilegítimos permitidos | 0 casos |
| "Alterações são auditáveis" | Cobertura de registro de alterações de exames | 100% |

---

### **5. Interdependências (Softgoal Interactions)**  

| **Relacionamento** | **Softgoal Associado** | **Tipo de Influência** |
|---------------------|-------------------------|-------------------------|
| RNF023 ↔ RNF021 | Desempenho | **-** (Verificação de permissões pode impactar tempo de resposta) |
| RNF023 ↔ RNF024 | Auditabilidade | **+** (Logs reforçam confiabilidade e rastreabilidade) |

---

### **6. Rastreabilidade**  
| **Relação** | **Elemento Relacionado** |
|--------------|---------------------------|
| **Requisito Funcional Relacionado** | RFNI019	 – Área de instruções integradas (manual digital) explicando passo a passo o uso das funções |
| **Histórias Relacionadas** | HU019 – Acesso à Área de Instruções Integradas  |
| **Fonte** | Entrevista 3 |

---

## Conclusão  

| **Aspecto Avaliado** | **RNF023 (Confiabilidade)** |
|-----------------------|-------------------------|
| **Softgoal Type** | Reliability |
| **Objetivo** | Garantir integridade de dados clínicos e exames |
| **Mecanismo Principal** | Controle de acesso baseado em roles e registro de auditoria |
| **Métrica-chave** | 100% de bloqueio de edições não autorizadas |
| **Interdependência Positiva** | Aumenta segurança e rastreabilidade geral do sistema |

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| **Mateus Santos Negrini** | 100% | Autor desta página |

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 21/10/2025 | Criação dos cards | Mateus Santos Negrini | Antonio |

---
## Referências  

| **Código** | **Referência Completa** |
|-------------|--------------------------|
| [REF1] | SERRANO, Milene; SERRANO, Maurício. *NFR Framework e Requisitos Não Funcionais – Aula 11*. Universidade de Brasília (UnB), 2025. |
| [REF2] | CHUNG, L.; NIXON, B.; YU, E.; MYLOPOULOS, J. *Non-Functional Requirements in Software Engineering.* Springer, 2000. |
| [REF3] | PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021. |
