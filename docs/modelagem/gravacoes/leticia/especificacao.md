# Especificações Suplementares - Letícia Paiva

---

<a id="es003"></a>

## #ES003 -

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

#Especificação Suplementar – RNF03

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `RF030` |
| **Título** | Sistema de Adoção  |
| **Descrição** | Disponibilizar no site uma seção dedicada à adoção de animais, permitindo que usuários busquem, filtrem e visualizem perfis de animais e manifestem interesse formalmente. |
| **Justificativa / Objetivo** | Centralizar e facilitar o processo inicial de adoção, aumentando a visibilidade dos animais disponíveis e conectando potenciais adotantes a ONGs e protetores de forma eficiente e organizada. |
| **Ator(es)** | Candidato a Adotante, Administrador (ONG/Protetor) |
| **Pré-condições** | - O usuário deve ter acesso à internet e a um navegador web compatível.<br>- A ONG/Protetor deve estar cadastrada e ter permissão para publicar perfis de animais. |
| **Entradas** | - Comandos de navegação do usuário.<br>- Seleção de filtros de busca (espécie, porte, idade, etc.).<br>- Clique no botão **"Manifestar Interesse"**. |
| **Saídas** | - Exibição da galeria de animais filtrada.<br>- Exibição da página de perfil detalhada do animal.<br>- Mensagens de confirmação ou erro na tela. |
| **Regras de Negócio** | 1. Apenas animais com status **"Disponível"** podem receber novas manifestações de interesse.<br>2. O status de um animal deve ser atualizado em tempo real para todos os usuários.<br>3. O site deve operar em conformidade com a **LGPD**, protegendo os dados dos candidatos. |
| **Requisitos de Desempenho** | - Tempo máximo de resposta para buscas filtradas: até **3 segundos**.<br>- Tempo máximo de carregamento da página de perfil do animal: até **2 segundos**. |
| **Requisitos de Usabilidade** | - Interface intuitiva com filtros claros e de fácil acesso.<br>- Design responsivo compatível com desktops e dispositivos móveis.<br>- Imagens dos animais devem ser de alta qualidade e carregar rapidamente. |
| **Requisitos de Portabilidade** | - Compatível com as versões mais recentes dos principais navegadores (**Chrome, Firefox, Safari, Edge**). |
| **Requisitos de Segurança** | - A comunicação com o servidor deve usar **HTTPS**.<br>- Proteção contra vulnerabilidades web comuns. |
| **Tratamento de Erros / Exceções** | - **Busca sem resultados:** exibir mensagem amigável e sugerir a remoção de filtros.<br>- **Animal já adotado:** exibir alerta de indisponibilidade e sugerir animais similares.<br>- **Falha de conexão:** exibir mensagem de erro e orientar o usuário a tentar novamente. |
| **Dependências** | - Banco de dados de animais e ONGs.<br>- Sistema de autenticação para administradores. |
| **Critérios de Aceitação** | 1. O usuário consegue encontrar um animal usando pelo menos dois filtros combinados.<br>2. O usuário consegue manifestar interesse e recebe uma confirmação visual na tela.<br>3. O desempenho do site atende aos tempos máximos estabelecidos. |
| **Rastreabilidade** | RF030, #UC001, #LX008 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | ------ |

---

<a id="es004"></a>

## #ES004 - 

#  Especificação Suplementar – RNF04

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)


| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `RNF04` |
| **Título** | Alertas e Notificações Automáticas por E-mail |
| **Descrição** | Permitir que o tutor, após fazer login no site, agende lembretes para eventos de saúde de seus animais (vacinas, medicações) e receba notificações automáticas por e-mail na data programada. |
| **Justificativa / Objetivo** | Ajudar os tutores a gerenciar a saúde de seus animais de forma proativa, aumentando o engajamento com a plataforma e oferecendo uma ferramenta de valor para o cuidado contínuo do pet. |
| **Ator(es)** | Tutor do Animal |
| **Pré-condições** | - O tutor deve estar autenticado (logado) no site.<br>- O perfil do animal para o qual o lembrete será agendado deve existir na conta do tutor. |
| **Entradas** | - Dados inseridos pelo tutor no formulário de agendamento (tipo, motivo, data, hora).<br>- Comando de salvar o lembrete. |
| **Saídas** | - Mensagem de confirmação do agendamento exibida na tela.<br>- E-mail de notificação enviado para o endereço cadastrado do tutor na data programada. |
| **Regras de Negócio** | 1. O sistema deve enviar o e-mail de notificação na data especificada pelo tutor.<br>2. O tutor deve poder visualizar, editar e excluir lembretes agendados.<br>3. Não é permitido agendar lembretes para datas passadas. |
| **Requisitos de Desempenho** | - Tempo máximo para salvar um novo lembrete: até **2 segundos**.<br>- Envio do e-mail de notificação deve ocorrer com no máximo **1 hora de atraso** em relação ao horário agendado. |
| **Requisitos de Usabilidade** | - Formulário de agendamento simples e intuitivo.<br>- O e-mail de notificação deve ser claro, objetivo e responsivo para leitura em dispositivos móveis. |
| **Requisitos de Portabilidade** | - Os e-mails gerados devem ser renderizados corretamente nos principais clientes de e-mail (**Gmail, Outlook**, etc.). |
| **Requisitos de Segurança** | - O link no e-mail para o site deve ser seguro.<br>- O e-mail não deve conter dados pessoais sensíveis, além do nome do tutor e do animal. |
| **Tratamento de Erros / Exceções** | - **Data inválida:** exibir mensagem de erro no formulário, impedindo o envio.<br>- **Falha no serviço de e-mail:** registrar a falha em log e tentar reenviar até 3 vezes.<br>- **E-mail inválido:** registrar o erro de entrega (bounce). |
| **Dependências** | - Sistema de autenticação de usuários.<br>- Banco de dados de perfis de animais.<br>- Integração com um serviço de gateway de e-mail externo (API). |
| **Critérios de Aceitação** | 1. O tutor consegue agendar um lembrete com sucesso e visualizá-lo em sua lista.<br>2. O e-mail de notificação é recebido corretamente na data e no endereço de e-mail cadastrado.<br>3. O sistema impede o agendamento de lembretes com datas passadas. |
| **Rastreabilidade** | RF031, #UC002, #LX009 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | ---- |


---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Letícia Paiva** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 11/10/2025 | Página de **Especificações Suplementares** própria | Letícia | - |

---

## Referências  
