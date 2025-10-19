# Especificações Suplementares - Letícia Paiva

---

<a id="es003"></a>

## #ES003 -

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)

| Requisito (Código) | Classificação FURPS+ | Especificação Detalhada | Rastreabilidade |
| :--- | :--- | :--- | :--- |
| **RF030** | Funcionalidade (F), Desempenho (P), Usabilidade (U) | **Título:** Sistema de Adoção.<br>**Descrição:** Disponibilizar no site uma seção dedicada à adoção de animais, permitindo que usuários busquem, filtrem e visualizem perfis de animais e manifestem interesse formalmente.<br>**Justificativa:** Centralizar e facilitar o processo inicial de adoção, aumentando a visibilidade dos animais disponíveis e conectando potenciais adotantes a ONGs e protetores de forma eficiente.<br>**Desempenho:** Buscas filtradas devem retornar em até **3 segundos**; carregamento da página de perfil do animal em até **2 segundos**.<br>**Usabilidade:** Interface intuitiva, filtros claros, design responsivo, imagens de alta qualidade com carregamento rápido.<br>**Regras:** Apenas animais “Disponíveis” podem receber manifestações; status atualizado em tempo real; conformidade com LGPD.<br>**Tratamento de Erros:** Mensagens amigáveis para busca sem resultados, animal já adotado ou falha de conexão. | RF030, #UC001, #LX008 |


---

<a id="es004"></a>

## #ES004 - 

#  Especificação Suplementar – RNF04

**Autor:** [Letícia Paiva](https://github.com/leticiakrpaiva)



| Requisito (Código) | Classificação FURPS+ | Especificação Detalhada | Rastreabilidade |
| :--- | :--- | :--- | :--- |
| **RF031** | Funcionalidade (F), Desempenho (P), Usabilidade (U), Confiabilidade (R) | **Título:** Alertas e Notificações Automáticas por E-mail.<br>**Descrição:** Permitir que o tutor, após login, agende lembretes para eventos de saúde de seus animais (vacinas, medicações) e receba notificações automáticas por e-mail na data programada.<br>**Justificativa:** Ajudar tutores no gerenciamento da saúde dos animais, aumentar engajamento e oferecer ferramenta de valor.<br>**Desempenho:** Salvar lembrete em até **2 segundos**; envio de e-mail com no máximo **1 hora de atraso**.<br>**Usabilidade:** Formulário simples; e-mail claro, objetivo e responsivo.<br>**Confiabilidade:** Registrar falhas no serviço de e-mail e tentar reenviar até **3 vezes**; registrar erro de entrega (bounce).<br>**Regras:** Envio na data especificada; tutor pode visualizar/editar/excluir lembretes; não agendar para datas passadas.<br>**Tratamento de Erros:** Mensagem para data inválida no formulário. | RF031, #UC002, #LX009 |

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
