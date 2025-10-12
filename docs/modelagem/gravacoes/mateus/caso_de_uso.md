# Casos de uso - Mateus Santos Negrini

## #UC007 – Acesso à Área de Instruções Integradas

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

<a id="uc003"></a>

<font><p style="text-align: center">**Tabela 01** – Caso de Uso 07 – Acesso à Área de Instruções Integradas (RF33)</p></font>

# Caso de Uso – Acesso à Área de Instruções Integradas (RF33)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC007` |
| **Descrição** | Permitir que o usuário acesse uma área de instruções integrada ao sistema, com tutoriais e orientações interativas sobre o uso das principais funcionalidades. |
| **Ator(es)** | Médico Veterinário / Funcionário em Treinamento |
| **Pré-condições** | 1. O usuário deve estar autenticado no sistema.<br>2. O sistema deve possuir o módulo de Instruções Integradas habilitado. |
| **Ação** | Consultar o Manual Digital |
| **Fluxo Principal** | 1. O ator acessa o sistema de gestão veterinária.<br>2. O ator navega até o menu principal e seleciona a aba “Instruções”.<br>3. O sistema exibe a tela da Área de Instruções Integradas.<br>4. O ator utiliza a barra de busca ou o menu de categorias para selecionar o tema desejado (ex: “Cadastrar Tutor”, “Registrar Exames”, “Inserir Foto do Animal”).<br>5. O sistema exibe um tutorial passo a passo, com imagens, ícones e explicações curtas.<br>6. O ator segue as instruções apresentadas e executa a ação correspondente no sistema.<br>7. O sistema exibe uma mensagem de conclusão ou feedback de sucesso. |
| **Fluxos Alternativos** | - O ator acessa a aba “Instruções” sem conexão à internet.<br>→ O sistema exibe uma versão resumida offline ou informa a indisponibilidade do conteúdo. |
| **Fluxos de Exceção** | 1. O sistema não consegue carregar o conteúdo do manual.<br>→ Exibe mensagem: “Não foi possível carregar as instruções no momento.”<br>2. O ator busca por um tema inexistente.<br>→ O sistema exibe “Nenhum resultado encontrado” e sugere tópicos relacionados. |
| **Pós-condições** | O ator compreende o procedimento desejado e executa corretamente as operações, reduzindo erros e perda de dados. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RF33` |
| **Cenário Relacionado** | `#CEN07` |
| **Léxico Relacionado** | `#LX010` |



---

## #UC008 – Notificação Periódica para Atualização de Dados e Fotos do Animal

**Autor:** [Mateus Santos Negrini](https://github.com/14luke08)

<a id="uc004"></a>

<font><p style="text-align: center">**Tabela 02** – Caso de Uso 08 – Notificação Periódica para Atualização de Dados e Fotos do Animal (RF44)</p></font>

# Caso de Uso – Notificação Periódica para Atualização de Dados e Fotos do Animal (RF44)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC008` |
| **Descrição** | Permitir que o sistema envie notificações periódicas aos tutores para que atualizem as informações e fotos de seus animais, garantindo que os registros permaneçam atuais e completos. |
| **Ator(es)** | Tutor do Animal |
| **Pré-condições** | 1. O tutor deve possuir um perfil ativo no sistema.<br>2. O perfil do animal deve estar cadastrado e associado ao tutor.<br>3. O tutor deve ter autorizado o recebimento de notificações. |
| **Ação** | Receber e responder a notificações de atualização de dados/fotos. |
| **Fluxo Principal** | 1. O sistema identifica automaticamente que um determinado período (ex: 6 meses) se passou desde a última atualização dos dados do animal.<br>2. O sistema gera uma notificação automática solicitando a atualização das informações e fotos.<br>3. O tutor recebe a notificação por e-mail, aplicativo ou SMS.<br>4. O tutor acessa o link ou o painel do sistema indicado na notificação.<br>5. O tutor revisa os dados do animal (nome, idade, endereço, estado de saúde, etc.).<br>6. O tutor anexa uma nova foto atual do animal, se necessário.<br>7. O tutor confirma a atualização.<br>8. O sistema registra a data da nova atualização e substitui as informações antigas. |
| **Fluxos Alternativos** | - O tutor ignora a notificação.<br>→ O sistema reenvia um lembrete após um prazo definido (ex: 15 dias).<br><br>- O tutor opta por não alterar nenhuma informação.<br>→ O sistema apenas atualiza a data de verificação. |
| **Fluxos de Exceção** | 1. O tutor tenta enviar uma foto em formato ou tamanho inválido.<br>→ O sistema exibe uma mensagem de erro e solicita nova tentativa.<br>2. O sistema falha ao registrar a atualização.<br>→ O sistema exibe mensagem de erro e orienta o tutor a tentar novamente mais tarde. |
| **Pós-condições** | O perfil do animal é atualizado com informações recentes, fortalecendo a confiabilidade dos registros e a rastreabilidade do histórico. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RF44` |
| **Cenário Relacionado** | `#CEN08` |
| **Léxico Relacionado** | `#LX011` |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Mateus Santos Negrini** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 12/10/2025 | Página de **Casos de Uso** própria | Mateus | - |

---

## Referências  


---
