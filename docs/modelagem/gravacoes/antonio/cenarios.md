# Cenários – Antonio Carvalho

## Cenário 03 — Emissão de Documento Oficial de Identificação (RF05)

<a id="cnr003"></a>

A seguir, o cenário para o requisito **Emissão de Documento Oficial de Identificação (RF05)** é detalhado, utilizando a estrutura apresentada no material *Requisitos – Aula 10* de Milene Serrano e Maurício Serrano.  

**Tabela 3 – Cenário 03: Emissão de Documento Oficial de Identificação (RF05)**  

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Emissão do RG Pet |
| **Código** | CNR003 |
| **Caso de uso trabalhado** | [#UC001](...)|
| **Metas/Objetivos** | Permitir que o tutor gere um documento de identificação oficial do seu animal, contendo dados básicos e um código único (RG Pet). |
| **Contexto** | **Local:** Acesso ao site via navegador web, em computador ou smartphone.<br>**Tempo:** Após o cadastro completo do animal.<br>**Pré-condição:** O tutor deve estar autenticado no sistema e possuir um animal cadastrado com informações válidas. |
| **Ator(es)** | Douglas, 23 anos, é estudante de engenharia de software na Universidade de Brasília e tutor de um cão. |
| **Recursos** | Dispositivo com acesso à internet, dados do animal e impressora (opcional). |
| **Episódios** | 1. O Douglas, tutor, acessa sua área pessoal e seleciona o animal cadastrado. <br> 2. Ele clica na opção *“Gerar RG Pet”*. <br> 3. O sistema valida os dados obrigatórios (nome, espécie, idade, Douglas, tutor, responsável). <br> 4. O sistema gera automaticamente o número único de identificação. <br> 5. O RG Pet é exibido na tela em formato digital e com opção para download em PDF. <br> 6. O Douglas, tutor, pode salvar ou imprimir o documento. |
| **Exceção** | Se faltar alguma informação obrigatória no cadastro do animal, o sistema exibe uma mensagem solicitando o preenchimento antes de gerar o documento. |

---

## Cenário 04 — Atualização do Status do Animal (RF07)

<a id="cnr004"></a>

**Tabela 4 – Cenário 04: Atualização do Status do Animal (RF07)**  

**Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)

| **Componente** | **Descrição** |
|----------------|----------------|
| **Título** | Atualização de Status do Animal |
| **Código** | CNR004 |
| **Caso de uso trabalhado** | [#UC002](...)|
| **Metas/Objetivos** | Permitir que o tutor atualize o status do animal, informando se foi perdido, encontrado, transferido ou se ocorreu óbito. |
| **Contexto** | **Local:** Portal do tutor, acessado pelo navegador.<br>**Tempo:** Em qualquer momento após o cadastro do animal.<br>**Pré-condição:** O tutor deve estar logado e possuir o animal em seu perfil. |
| **Ator(es)** | Douglas, 23 anos, é estudante de engenharia de software na Universidade de Brasília e tutor de um cão. |
| **Recursos** | Dispositivo com navegador web e acesso à internet. |
| **Episódios** | 1. O Douglas, tutor, acessa o perfil do seu animal no sistema. <br> 2. Ele seleciona a opção *“Atualizar Status”*. <br> 3. O sistema exibe as opções de status disponíveis (Perdido, Encontrado, Óbito, Transferência). <br> 4. O Douglas, tutor, escolhe o novo status e confirma a atualização. <br> 5. O sistema salva a alteração e registra a data da atualização. <br> 6. Uma mensagem de confirmação é exibida na tela, e o status atualizado aparece no perfil do animal. |
| **Exceção** | Caso o Douglas, tutor, tente atualizar o status para uma opção incompatível (por exemplo, marcar como *“Encontrado”* um animal que não foi marcado como *“Perdido”*), o sistema exibe uma mensagem de erro e impede a operação. |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Antonio Carvalho** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Cenários** própria | Antonio | - |

---

## Referências  

[1] Serrano, M., Serrano, M. *Requisitos – Aula 10*, Material de aula, Universidade de Brasília (UnB).

---