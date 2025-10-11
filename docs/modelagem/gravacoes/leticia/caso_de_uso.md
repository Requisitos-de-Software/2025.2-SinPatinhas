# Casos de uso - Letícia Paiva

## #UC003 – Sistema de Adoção

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

<a id="uc003"></a>

<font><p style="text-align: center">**Tabela 01** – Caso de Uso 03 – ESistema de Adoção (RF30)</p></font>

# Caso de Uso – Sistema de Adoção (RF30)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC003` |
| **Descrição** | Permitir que um candidato a adotante busque por um animal e manifeste interesse em adotá-lo através do site. |
| **Ator(es)** | Candidato a Adotante |
| **Pré-condições** | O Candidato a Adotante deve ter acesso à internet e ao endereço do site. |
| **Ação** | Manifestar Interesse em Adoção |
| **Fluxo Principal** | 1. O ator acessa a página inicial do site.<br>2. O ator navega para a seção de **"Adoção"**.<br>3. O ator utiliza os filtros *(espécie, porte, idade)* para refinar a busca.<br>4. O sistema exibe os perfis de animais compatíveis.<br>5. O ator seleciona e visualiza o perfil de um animal.<br>6. O ator clica no botão **"Manifestar Interesse"**.<br>7. O sistema registra a solicitação e notifica a entidade responsável.<br>8. O sistema exibe uma mensagem de confirmação ao ator. |
| **Fluxos Alternativos** | - A busca realizada pelo ator não retorna nenhum resultado.<br>→ O sistema exibe uma mensagem informando e sugere a alteração dos filtros. |
| **Fluxos de Exceção** | 1. O animal selecionado já foi adotado.<br>→ O sistema exibe um alerta de indisponibilidade.<br><br>2. O sistema apresenta uma falha de conexão ao tentar registrar o interesse.<br>→ Uma mensagem de erro é exibida. |
| **Pós-condições** | A manifestação de interesse do candidato é registrada no sistema. |
| **Data de Criação** | 11/10/2025 |
| **Rastreabilidade** | `RF03` |
| **Cenário Relacionado** | `#CEN01` |
| **Léxico Relacionado** | `#LX008` |



---

## #UC004 – Atualização do Status do Animal

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

<a id="uc004"></a>

<font><p style="text-align: center">**Tabela 02** – Caso de Uso 02 – Alertas e Notificações Automáticas</p></font>

# Alertas e Notificações Automáticas (RF31)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC004` |
| **Descrição** | Permitir que o tutor de um animal agende um lembrete de saúde e seja notificado por e-mail na data programada. |
| **Ator(es)** | Tutor do Animal |
| **Pré-condições** | 1. O Tutor do Animal deve estar autenticado (logado) no site.<br>2. O perfil do animal para o qual o lembrete será criado já deve existir. |
| **Ação** | Agendar Lembrete de Saúde |
| **Fluxo Principal** | 1. O ator acessa a sua área pessoal no site.<br>2. O ator seleciona o perfil do animal desejado.<br>3. O ator navega para a seção **"Lembretes de Saúde"**.<br>4. O ator clica na opção **"Agendar Novo Lembrete"**.<br>5. O ator preenche o formulário com os dados do lembrete *(tipo, nome, data)*.<br>6. O ator submete o formulário.<br>7. O sistema valida e armazena o lembrete.<br>8. O sistema exibe uma mensagem de confirmação. |
| **Fluxos Alternativos** | O ator preenche o formulário, mas decide cancelar a operação antes de submeter. |
| **Fluxos de Exceção** | 1. O ator insere uma data inválida *(ex: uma data no passado).*<br>→ O sistema exibe uma mensagem de erro e não permite o agendamento.<br><br>2. O sistema falha ao tentar salvar o lembrete.<br>→ Uma mensagem de erro é exibida. |
| **Pós-condições** | Um novo lembrete de saúde é criado e associado ao perfil do animal no sistema. |
| **Data de Criação** | 11/10/2025 |
| **Rastreabilidade** | `RF04` |
| **Cenário Relacionado** | `#CEN02` |
| **Léxico Relacionado** | `#LX004` |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **´Letícia Paiva** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Casos de Uso** própria | Letícia | - |

---

## Referências  


---
