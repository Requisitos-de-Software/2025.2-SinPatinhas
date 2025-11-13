# Especificações Suplementares - Letícia Paiva

---

<a id="es003"></a>

# #ES003 - Sistema de Adoção (F, P, U) 

Autor: Letícia Paiva  

Os requisitos abaixo tratam do **Sistema de Adoção**, combinando aspectos de **Funcionalidade (F)**, **Desempenho (P)** e **Usabilidade (U)**.  
Eles visam garantir que o processo de adoção seja centralizado, rápido, intuitivo e aderente às regras de negócio e à LGPD.

# #Tabela 1 - Requisito de Sistema de Adoção.

| ID      | Descrição | Rastreamento |
|---------|-----------|--------------|
| RFNI016 | Título: **Sistema de Adoção**. O sistema deve disponibilizar no site uma seção dedicada à adoção de animais, permitindo que usuários busquem, filtrem e visualizem perfis de animais, além de manifestarem interesse formalmente. A solução deve centralizar e facilitar o processo inicial de adoção, aumentando a visibilidade dos animais disponíveis e conectando potenciais adotantes a ONGs e protetores. As buscas filtradas devem retornar em até **3 segundos** e a página de perfil do animal deve carregar em até **2 segundos**. A interface deve ser intuitiva, com filtros claros, design responsivo e imagens de alta qualidade com carregamento rápido. Apenas animais com status **“Disponível”** podem receber manifestações, e o status deve ser atualizado em tempo real, garantindo conformidade com a **LGPD**. Em caso de erro (busca sem resultados, animal já adotado ou falha de conexão), o sistema deve apresentar mensagens claras e amigáveis ao usuário. | RFNI016, #UC001, #LX008 |

---

<a id="es004"></a>

# #ES004 - Alertas e Notificações Automáticas (F, P, U, R)  

Autor: Letícia Paiva  

Os requisitos abaixo descrevem o mecanismo de **Alertas e Notificações Automáticas por E-mail**, contemplando **Funcionalidade (F)**, **Desempenho (P)**, **Usabilidade (U)** e **Confiabilidade (R)**, de forma a apoiar o tutor na gestão da saúde do animal e garantir um serviço confiável e rastreável.

# #Tabela 2 - Requisito de Alertas e Notificações Automáticas.

| ID      | Descrição | Rastreamento |
|---------|-----------|--------------|
| RFNI017 | Título: **Alertas e Notificações Automáticas por E-mail**. O sistema deve permitir que o tutor, após realizar login, agende lembretes para eventos de saúde de seus animais (como vacinas e medicações) e receba notificações automáticas por e-mail na data programada. O objetivo é auxiliar o tutor no gerenciamento da saúde do animal, aumentar o engajamento e oferecer uma funcionalidade de valor agregado. O sistema deve salvar o lembrete em até **2 segundos** e o e-mail deve ser enviado com, no máximo, **1 hora de atraso** em relação ao horário configurado. A interface de agendamento deve ser simples, com formulário objetivo, e o e-mail enviado deve ser claro, direto e responsivo. Em termos de confiabilidade, o sistema deve registrar falhas no serviço de e-mail, tentar reenviar a notificação até **3 vezes** e registrar erros de entrega (*bounce*). O envio deve ocorrer exatamente na data especificada, permitindo que o tutor visualize, edite ou exclua lembretes e impedindo o agendamento para datas passadas. Em caso de data inválida, o sistema deve exibir mensagem de erro no formulário, orientando a correção. | RFNI017, #UC002, #LX009 |

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
