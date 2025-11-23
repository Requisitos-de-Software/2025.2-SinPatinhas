# Backlog do Produto - Antonio

---

## Validação com tutora de animal

A validação com a tutora foi feita de forma presencial, no dia **21 de outubro de 2025**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ClPEkjUv-jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

---

## Participantes da validação

| **Participante** | **Papel** |
|------------------|-----------|
| **Antonio Carvalho** | Integrante do grupo, responsável por coordenar a validação com a tutora. |
| **Maria Clara** | Estudante de Gestão Pública, 19 anos, responsável por validar o artefato backlog. |

---

Com base nas histórias HU005 e HU006, foram gerados **itens de backlog derivados de requisitos não implementados (RFNI)**.

---

## Tema: **Integração e Serviços Parceiros**

### Épico: **Gestão de Clínicas e Parceiros**

**Tabela 1 – Itens de backlog derivados de requisitos não implementados**
*Autoria: Antonio Carvalho*  

| **Identificação** | **Item do Backlog** | **Descrição** | **Prioridade (MoSCoW)** | **Status** | **Responsável** | **Rastreabilidade** |
|--------------------|--------------------|----------------|---------------------------|-------------|------------------|---------------------|
| **BL001**  | Exibição de horários de funcionamento | Exibir automaticamente os horários de funcionamento das clínicas e hospitais parceiros, integrando dados de disponibilidade. | Should have | Não iniciado | Antonio Carvalho | [RFNI005](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni005) / [HU005](../../../modelagem/gravacoes/antonio/historias.md#hu005--exibição-de-horários-de-clínicas-parceiras) | 
| **BL002** | Integração com ONGs, clínicas e pet shops | Implementar integração via API entre o SinPatinhas e os sistemas externos de parceiros para sincronização de dados de animais, adoções e atendimentos. | Must have | Não iniciado | Antonio Carvalho | [RFNI018](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) / [HU006](../../../modelagem/gravacoes/antonio/historias.md#hu006--integração-direta-com-parceiros) / [HU008](../../../modelagem/gravacoes/antonio/historias.md#hu008--sincronização-de-dados-entre-ongs-e-clínicas) |
| **BL015** | Desempenho em Consultas Públicas | Garantir que consultas públicas do sistema retornem resultados em até 2 segundos, exibindo mensagens informativas em casos de lentidão, conforme requisitos de desempenho. | Must have | Não iniciado | Antonio Carvalho | [RNF004](../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) / [HU041](../../../modelagem/gravacoes/antonio/historias.md#hu041--desempenho-em-consultas-públicas) |
| **BL016** | Integração Direta com Parceiros | Implementar integração via APIs seguras (REST) com sistemas de parceiros como clínicas, ONGs e pet shops, utilizando autenticação por tokens e padrões JSON/XML. | Must have | Não iniciado | Antonio Carvalho | [RNFNI003](../../../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) / [HU044](../../../modelagem/gravacoes/antonio/historias.md#hu044--integração-direta-com-parceiros-clínicas-ongs-e-pet-shops) |


---

## Representação Hierárquica  

**Tema:** Integração e Parcerias  
**Épico:** Comunicação e Colaboração entre Entidades  

**Histórias Relacionadas:**  
- **HU005:** Exibição de horários de clínicas e hospitais.  
- **HU006:** Integração direta com sistemas de parceiros.  
- **HU008:** Sincronização de dados entre ONGs e clínicas.  

---

✅ **Observações Finais**  
- As histórias seguem o padrão de escrita *“Como [persona], quero [função], para [benefício]”*.  
- Há **rastreabilidade direta** com os requisitos RF017, RF018, RFNI005, RFNI018, RNF014 e RNF016.  
- O artefato está **padronizado com o modelo oficial do projeto SinPatinhas**, pronto para inclusão em `/modelagem/gravacoes/antonio/historias.md`.

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, padronização técnica e formatação textual**.  
O conteúdo conceitual e as decisões de modelagem foram elaborados por mim, **Antonio Carvalho**, com base nos fundamentos de **Serrano & Serrano (2025)**.

---

## Tabela de Contribuição

| **Nome** | **Contribuição (%)** | **Função** |
|-----------|----------------------|-------------|
| Antonio Carvalho | 100% | Autor desta página |

---

## Referências  

<a id="REF1"></a>[1] SERRANO, Milene; SERRANO, Maurício. *Product Backlog e User Stories – Aula 15*. Universidade de Brasília (UnB), 2025.  
<a id="REF2"></a>[3] PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: uma abordagem profissional.* 9ª ed. AMGH, 2021.  

---

## Tabela de Versionamento  

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
|-------------|-----------|----------------|------------|-------------|
| **1.0** | 20/10/2025 | Criação dos itens de backlog | Antonio Carvalho | Letícia Paiva |
| **1.1** | 04/11/2025 | Criação dos itens de backlog de n° 15 e 16 | Antonio Carvalho | Letícia Paiva |

---