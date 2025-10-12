# Cenários – Antonio Carvalho

## Cenário 03 — Emissão de Documento Oficial de Identificação (RF05)



<a id="cnr003"></a>

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

**Tabela 3 – Cenário 03: Emissão de Documento Oficial de Identificação (RF05)**  

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Emissão do RG Pet |
| **Código** | CNR003 |
| **Caso de uso trabalhado** | [#UC001](...) |
| **Ambiente/Contexto** | **Local:** Portal do tutor acessado por navegador web, em computador ou smartphone.<br> **Tempo:** Após o cadastro completo do animal.<br> **Pré-condição:** Tutor autenticado e com animal cadastrado. |
| **Atores** | Douglas, 23 anos, estudante de engenharia de software na UnB, tutor de um cão. |
| **Objetivos** | Gerar um documento oficial de identificação do animal contendo dados básicos e um número único (RG Pet). |
| **Planejamento** | O ator deseja ter um documento oficial do seu animal para comprovar sua tutela e facilitar processos de identificação. |
| **Ações** | 1. Douglas acessa sua área pessoal. <br> 2. Seleciona o animal cadastrado. <br> 3. Clica em *“Gerar RG Pet”*. <br> 4. O sistema valida as informações e gera o RG Pet. <br> 5. O documento é exibido em formato digital com opção de download. |
| **Eventos** | - Sistema valida dados obrigatórios. <br> - Sistema gera número único de identificação. <br> - Exibição do documento. |
| **Avaliação** | O ator verifica se as informações estão corretas e se o documento foi gerado adequadamente. |
| **Exceção** | Caso falte informação obrigatória, o sistema exibe uma mensagem de erro solicitando o preenchimento. |

---

## Cenário 04 — Atualização do Status do Animal (RF07)

<a id="cnr004"></a>

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

**Tabela 4 – Cenário 04: Atualização do Status do Animal (RF07)**  

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Atualização de Status do Animal |
| **Código** | CNR004 |
| **Caso de uso trabalhado** | [#UC002](...) |
| **Ambiente/Contexto** | **Local:** Portal do tutor acessado pelo navegador web.<br> **Tempo:** A qualquer momento após o cadastro do animal.<br> **Pré-condição:** Tutor autenticado com animal em seu perfil. |
| **Atores** | Douglas, 23 anos, estudante de engenharia de software na UnB, tutor de um cão. |
| **Objetivos** | Permitir ao tutor atualizar o status do animal, informando se foi perdido, encontrado, transferido ou se ocorreu óbito. |
| **Planejamento** | O ator deseja manter o status do animal atualizado para facilitar sua gestão e comunicação com outros usuários. |
| **Ações** | 1. Douglas acessa o perfil do animal. <br> 2. Seleciona *“Atualizar Status”*. <br> 3. Escolhe a nova opção de status. <br> 4. Confirma a atualização. <br> 5. O sistema salva e exibe mensagem de confirmação. |
| **Eventos** | - Exibição das opções de status. <br> - Registro da data de atualização. <br> - Atualização do perfil do animal. |
| **Avaliação** | O ator verifica se o status foi alterado corretamente e aparece no perfil do animal. |
| **Exceção** | Caso o tutor selecione uma opção incompatível (por exemplo, marcar *“Encontrado”* sem estar *“Perdido”*), o sistema bloqueia a ação e exibe uma mensagem de erro. |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Antonio Carvalho** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Cenários** atualizada conforme estrutura de Rosson e Carroll (2002) | Antonio | - |

---

## Referências  

Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021). *Interação Humano-Computador e Experiência do Usuário.* Autopublicação. ISBN: 978-65-00-19677-1.
