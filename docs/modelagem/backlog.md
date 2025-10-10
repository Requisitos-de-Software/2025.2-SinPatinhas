# Backlog

## Introdução

O backlog consiste em uma lista contendo as prioridades dos requisitos do projeto que fornecem valor tanto aos usuários quanto à equipe de desenvolvimento. Os itens podem ser adicionados, removidos ou atualizados conforme o andamento do projeto, garantindo flexibilidade e evolução contínua. O **gerente do produto** (ou equipe responsável pelo planejamento) revisa periodicamente o backlog para reavaliar as prioridades e alinhar as entregas com os objetivos do sistema <a id="anchor_1" href="#REF1">[1]</a>.

No contexto do projeto **SinPatinhas**, o backlog foi estruturado com base nos requisitos funcionais e não funcionais levantados nas etapas anteriores, representando as funcionalidades que garantem o bom funcionamento do sistema de adoção de animais e o suporte às atividades dos tutores, abrigos e administradores.

O backlog é composto por **épicos**, **temas** e **histórias de usuário**.  
- Os **épicos** representam grandes grupos de funcionalidades ou objetivos do sistema.  
- Os **temas** agrupam épicos relacionados por um mesmo propósito geral.  
- As **histórias de usuário** detalham funcionalidades específicas, pequenas o suficiente para serem desenvolvidas e testadas em uma única iteração <a id="anchor_2" href="#REF2">[2]</a>.

---

## Gravações

---

## Metodologia

A construção do backlog do **SinPatinhas** foi baseada nos artefatos previamente desenvolvidos: as **histórias de usuário** e a **priorização MoSCoW**.  
A partir das histórias elicitadas, cada uma foi classificada em um épico e tema correspondente.  
Em seguida, aplicou-se a técnica de priorização **MoSCoW**, que organiza os itens em quatro níveis:  
- **Must have** (Essenciais)  
- **Should have** (Importantes)  
- **Could have** (Desejáveis)  
- **Won’t have** (Postergados)

Esse processo assegura que o desenvolvimento priorize as funcionalidades que oferecem maior valor e impacto ao sistema, respeitando as necessidades dos principais atores: **tutores, abrigos e administradores**.

## Validação com Usuário

A validação do backlog foi realizada de forma colaborativa com os membros da equipe, considerando os resultados obtidos na elicitação de requisitos e o feedback dos potenciais usuários do sistema SinPatinhas.  
Durante a validação, discutiram-se a clareza das histórias, a coerência entre os épicos e a adequação da priorização MoSCoW.

### Participantes da Validação

| Participante | Papel |
| ------------- | ----- |
| Antonio Carvalho | Responsável pela elaboração e organização do backlog |
| Heloísa Santos | Revisora e responsável pela validação conceitual do documento |

---

## Temas

Ao analisar as histórias de usuário criadas, foi possível organizá-las em três **temas principais**:

1. **Gestão de Usuários e Animais**  
   Abrange funcionalidades de cadastro, consulta e gerenciamento de tutores, abrigos e animais disponíveis para adoção.

2. **Comunicação e Adoção**  
   Envolve o fluxo de adoção, contato entre tutores e abrigos, e acompanhamento das solicitações.

3. **Administração e Relatórios**  
   Contempla o controle interno do sistema, geração de relatórios e gerenciamento de permissões.

---

## Épicos

Cada tema foi dividido em épicos, reduzindo o nível de abstração das atividades e facilitando o detalhamento em histórias de usuário.  
Foram definidos os seguintes **épicos**:

| Épico | Descrição |
|-------|------------|
| E1 | Cadastro e autenticação de usuários |
| E2 | Cadastro e gerenciamento de animais |
| E3 | Processo de adoção e comunicação entre tutores e abrigos |
| E4 | Administração do sistema e relatórios |
| E5 | Interface e experiência do usuário |

---

## Histórias de Usuário

| ID | História de Usuário | Prioridade | Épico |
|----|----------------------|-------------|--------|
| US01 | Como tutor, desejo cadastrar meus dados para acessar o sistema. | Must have | E1 |
| US02 | Como abrigo, desejo cadastrar animais disponíveis para adoção. | Must have | E2 |
| US03 | Como tutor, quero visualizar uma lista de animais disponíveis. | Should have | E2 |
| US04 | Como abrigo, quero receber notificações de solicitações de adoção. | Should have | E3 |
| US05 | Como administrador, desejo visualizar relatórios de adoções realizadas. | Could have | E4 |
| US06 | Como usuário, desejo que o site tenha navegação simples e intuitiva. | Should have | E5 |

---

## Tabela de Contribuições

| **Nome**              | **Contribuição (%)** | **Função**                       |
|------------------------|----------------------|----------------------------------|
| **Antonio Carvalho**   | 100%                 | Autor da página de backlog      |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                         | Autores  | Revisores |
|-------:|------------|--------------------------------------------------|----------|-----------|
| 1.0    | 10/10/2025 | Criação da página de backlog | Antonio |  |

---

## Referências

Sommerville, I. *Engenharia de Software.* 10ª ed. Pearson, 2019.