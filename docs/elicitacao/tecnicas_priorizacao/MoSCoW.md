# Primeiros Resultados da Priorização dos Requisitos – Metodologia MoSCoW

> Esta página apresenta os **resultados iniciais da priorização dos requisitos** elicitados para o sistema **SinPatinhas**, obtidos por meio da aplicação da metodologia **MoSCoW**.  
> 
> A técnica foi aplicada antes da consolidação de requisitos funcionais, não funcionais, não implementados e agora, nesta página, está em alinhamento ao conjunto consolidado descritos na [página de Consolidação dos Requisitos Elicitados](../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md).  
>  
> A priorização MoSCoW classifica os requisitos conforme seu nível de importância para o produto, auxiliando a equipe no planejamento das entregas e na definição de escopo mínimo viável (MVP).

---

## Metodologia MoSCoW

A técnica **MoSCoW** agrupa os requisitos em quatro categorias de prioridade:

| Prioridade | Significado | Descrição |
|-------------|--------------|-----------|
| **Must have (M)** | Deve ter | Requisitos indispensáveis para o funcionamento do sistema. Devem estar presentes no MVP. |
| **Should have (S)** | Deveria ter | Requisitos importantes, mas que podem ser adiados se houver limitação de tempo ou recursos. |
| **Could have (C)** | Poderia ter | Requisitos desejáveis, de menor prioridade. Implementação opcional. |
| **Won’t have (W)** | Não terá agora | Requisitos que não serão implementados na versão atual, mas podem ser considerados futuramente. |

![Must have (M)](../../assets/images/priorizacao/must.png)
![Should have (S)](../../assets/images/priorizacao/should.png)
![Could have (C)](../../assets/images/priorizacao/could.png)
![Won’t have (W)](../../assets/images/priorizacao/wont.png)

---

## Requisitos Funcionais – Resultados da Priorização

**Tabela 1 – Classificação MoSCoW dos requisitos funcionais implementados.**

| Código | Descrição | Prioridade | Fonte |
|---------|------------|-------------|--------|
| [RF001](#rf001) | Cadastro de tutores com dados pessoais. | Must | Documentos/Entrevistas |
| [RF002](#rf002) | Cadastro de animais vinculados ao tutor. | Must | Documentos/Entrevistas |
| [RF003](#rf003) | Geração de número de Registro Geral do Animal (RGA). | Should | Documentos |
| [RF004](#rf004) | Associação de microchip ao cadastro. | Must | Documentos |
| [RF005](#rf005) | Emissão de documento oficial de identificação (RG Pet). | Must | Documentos |
| [RF006](#rf006) | Consulta pública via RGA ou microchip. | Could | Documentos |
| [RF007](#rf007) | Atualização do status do animal (perdido, encontrado, óbito, transferência). | Should | Documentos |
| [RF008](#rf008) | Registro do histórico de saúde por veterinários. | Should | Documentos |
| [RF009](#rf009) | Transferência de titularidade do animal. | Must | Documentos |
| [RF010](#rf010) | Perfis de acesso distintos (Tutor e Veterinário). | Must | Documentos |
| [RF011](#rf011) | Relatórios e estatísticas para órgãos públicos. | Could | Documentos |
| [RF012](#rf012) | Permitir login integrado via Gov.br. | Won’t | Documentos |
| [RF013](#rf013) | Preenchimento automático de dados via Gov.br. | Could | Documentos |

---

## Requisitos Funcionais Não Implementados

**Tabela 2 – Classificação MoSCoW dos requisitos funcionais não implementados.**

| Código | Descrição | Prioridade | Fonte |
|---------|------------|-------------|--------|
| [RFNI016](#rfni016) | Sistema de adoção de animais. | Must | Entrevista 2 |
| [RFNI018](#rfni018) | Integração direta com parceiros (clínicas, ONGs, pet shops). | Could | Entrevista 2 |
| [RFNI019](#rfni019) | Área de instruções integradas (manual digital). | Must | Entrevista 3 |
| [RFNI020](#rfni020) | Emissão de alertas de acesso suspeito. | Should | Entrevista 3 |
| [RFNI021](#rfni021) | Notificação periódica para atualização de dados e fotos do animal. | Could | Entrevista 3 |
| [RFNI022](#rfni022) | Vincular foto do tutor ao registro de adoção. | Must | Entrevista 3 |

---

## Requisitos Não Funcionais

**Tabela 3 – Classificação MoSCoW dos requisitos não funcionais.**

| Código | Descrição | Prioridade | Fonte |
|---------|------------|-------------|--------|
| [RNF001](#rnf001) | Conformidade com a LGPD. | Must | Documentos |
| [RNF002](#rnf002) | Disponibilidade: 99,8% de uptime (24/7). | Should | Documentos |
| [RNF003](#rnf003) | Usabilidade: interface intuitiva para cidadãos. | Must | Documentos |
| [RNF004](#rnf004) | Desempenho: resposta em consultas públicas < 2s. | Must | Documentos |
| [RNF005](#rnf005) | Compatibilidade: suporte a navegadores principais e mobile. | Must | Documentos |
| [RNF006](#rnf006) | Integração: APIs com clínicas e órgãos públicos. | Must | Documentos |
| [RNF008](#rnf008) | Design de interface limpo e organizado. | Should | Entrevista 1 |
| [RNF009](#rnf009) | Confiabilidade: garantia contra perda de dados. | Must | Entrevista 1 |
| [RNF024](#rnf024) | Auditabilidade: logs de acesso e modificações. | Must | Entrevista 3 |

---

## Análise dos Resultados

Com base na classificação MoSCoW:

- **Requisitos Must** representam aproximadamente **60%** do total, refletindo foco em funcionalidades essenciais de cadastro, identificação e segurança.  
- **Requisitos Should e Could** totalizam cerca de **35%**, sugerindo oportunidades de evolução incremental (ex.: relatórios, alertas, melhorias visuais).  
- **Requisitos Won’t (5%)** foram postergados por dependerem de integrações externas (ex.: login Gov.br).  

A aplicação da técnica permitiu **estabelecer o escopo mínimo viável (MVP)** do sistema, priorizando o atendimento às necessidades básicas de registro, rastreamento e confiabilidade das informações.

---

## Tabela de Contribuição

| **Nome**           | **Contribuição (%)** | **Função**                                      |
|---------------------|----------------------|-------------------------------------------------|
| Antonio Carvalho       | 100%                  | Autor da página de aplicação do método MoSCoW     |


---

## Referências  

WIEGERS, Karl; BEATTY, Joy. *Software Requirements*. 3. ed. Redmond, WA: Microsoft Press, 2013.

---

## Histórico de Versão

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:------:|:------------|:------------|:-----------|
| 1.0 | 18/10/2025 | Criação da página de priorização MoSCoW | Antonio Carvalho | --- |
