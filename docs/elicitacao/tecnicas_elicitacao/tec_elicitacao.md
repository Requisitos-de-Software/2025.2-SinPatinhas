# 📋 Elicitação de Requisitos

> Documento referente ao processo de **Elicitação de Requisitos** do sistema **SinPatinhas** (Sistema Nacional de Identificação e Registro de Animais de Estimação).

---

## 📑 Introdução

A fase de elicitação é crucial para garantir que o sistema final atenda às necessidades dos **órgãos públicos** (em conformidade com leis e decretos) e dos **usuários finais** (tutores e veterinários).  

Para isso, foram utilizadas as seguintes metodologias:  
- **Análise de Documentos** → entendimento do contexto legal e técnico.  
- **Entrevistas** → captura de necessidades reais dos usuários.  
- **Brainstorming** → geração de ideias e validação inicial de requisitos.  

As próximas seções apresentam detalhadamente: metodologias aplicadas, cronograma, requisitos funcionais (RF) e não funcionais (RNF) identificados.

---

## 🛠️ Metodologias de Elicitação Utilizadas

- **Análise de Documentos**: revisão de leis, decretos e termos de uso.  
- **Entrevistas**: coleta estruturada de informações com stakeholders.  
  - [📄 Roteiro de Entrevista](Roteiro.md)  
- **Brainstorming**: sessões em grupo para identificação inicial de requisitos.  

---

## 📆 Cronograma de Elicitação

| Atividade             | Data Agendada | Data Execução | Responsável      | Observações                                    |
|-----------------------|---------------|---------------|------------------|------------------------------------------------|
| Análise de Documentos | 24/09/2025    | 24/09/2025    | Pedro Gomes      | Realizada conforme o planejado                 |
| Entrevista            | 25/09/2025    | 26/09/2025    | Antônio e Pedro  | Reagendada devido à solicitação da entrevistada |

---

## 🔍 Técnicas Aplicadas

### 1. **Análise de Documentos**

**Fontes de Referência**  
- [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm)  
- [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm)  
- [Perguntas e Respostas – Sinpatinhas](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas)  
- ["RG para cães e gatos"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal)  

#### ✅ Requisitos Funcionais (RF)
- **RF001** – Cadastro de tutores com dados pessoais.  
- **RF002** – Cadastro de animais vinculados ao tutor.  
- **RF003** – Geração de número de Registro Geral do Animal (RGA).  
- **RF004** – Associação de microchip ao cadastro.  
- **RF005** – Emissão de documento oficial de identificação (RG Pet).  
- **RF006** – Consulta pública via RGA ou microchip.  
- **RF007** – Atualização do status do animal (perdido, encontrado, óbito, transferência).  
- **RF008** – Registro do histórico de saúde por veterinários.  
- **RF009** – Transferência de titularidade do animal.  
- **RF010** – Perfis de acesso distintos (Tutor e Veterinário).  
- **RF011** – Relatórios e estatísticas para órgãos públicos.  

#### ⚙️ Requisitos Não Funcionais (RNF)
- **RNF001 (Segurança)** – Conformidade com a LGPD.  
- **RNF002 (Disponibilidade)** – 99,8% de uptime (24/7).  
- **RNF003 (Usabilidade)** – Interface intuitiva para cidadãos.  
- **RNF004 (Desempenho)** – Resposta em consultas públicas < 2s.  
- **RNF005 (Compatibilidade)** – Suporte a navegadores principais e responsividade mobile.  
- **RNF006 (Integração)** – APIs para integração futura com clínicas e órgãos públicos.  

---

### 2. **Entrevistas**

#### 🎤 Entrevista 01 – Ana Beatriz  
- **Perfil**: 22 anos, estudante, dona de cachorro.  
- **Comportamento**: Usa caderneta física de vacinas; gosta de apps organizados; valoriza layout e modo offline.  
- **Necessidades**: Centralizar informações do pet, organizar vacinas, compartilhar dados com familiares.  

📺 [Vídeo da Entrevista (YouTube)](https://www.youtube.com/embed/Nod9QhMIe20)  

##### ✅ Requisitos Funcionais
- RF001 – Cadastro de perfil do animal.  
- RF002 – Registro do histórico de vacinas.  
- RF003 – Cadastro de informações de contato do tutor.  
- RF004 – Gerenciamento de múltiplos animais.  
- RF005 – Compartilhamento de informações com familiares.  
- RF006 – Notificações de vacinas futuras/atrasadas.  
- RF007 – Registro da localização do animal ou tutor.  

##### ⚙️ Requisitos Não Funcionais
- RNF001 (Usabilidade) – Sistema fácil e intuitivo.  
- RNF002 (Design de Interface) – Layout limpo e organizado.  
- RNF003 (Confiabilidade) – Garantia contra perda de dados.  

##### ❌ Requisitos Não Implementados
- RNF004 (Acessibilidade) – Acesso via web e mobile (prioridade no mobile).  
- RNF005 (Disponibilidade / Desempenho) – Funcionalidades offline.  

---

### 2. **Entrevistas**

#### 🎤 Entrevista 02 – Gustavo  
- **Perfil**: Jovem, 22 anos, estudante de Ciências Biológicas (UnB), estagiário em micologia. Tem cães; já teve peixes e aves. 
- **Comportamento**: Registra manualmente vacinas/consultas; animais castrados e com vacinas em dia; consultas frequentes por questões de saúde da raça/espécie.
- **Necessidades**: Agilidade para registrar vacinas/medicação; sistema nacional para identificação/recuperação; facilitar adoção; acesso a informações de vacinação/castração pública; “cartão SUS digital” do pet; centralização em app; alertas; integração com clínicas/ONGs/pet shops; acesso mobile e web.

📺 [Vídeo da Entrevista (YouTube)](https://www.youtube.com/watch?v=78vAABLNU_4)  

##### ✅ Requisitos Funcionais
- RF01: O sistema deve permitir a busca e recuperação de animais perdidos ou abandonados.
- RF02: O sistema deve funcionar como um prontuário digital, centralizando o histórico de saúde e vacinação do animal.
- RF03: O sistema deve incluir uma funcionalidade para facilitar a adoção de animais.
- RF04: O sistema deve enviar notificações automáticas para vacinas e lembretes para horários de medicação.
- RF05: O sistema deve permitir o registro de informações detalhadas do animal, como nome, idade, tipo sanguíneo, peso, altura, raça, espécie e endereço do tutor.

##### ⚙️ Requisitos Não Funcionais
- RNF01 (Usabilidade): O sistema deve ser claro e fácil de entender, permitindo que o usuário saiba exatamente o que fazer.
- RNF02 (Compatibilidade/Acessibilidade): O sistema deve ser acessível em múltiplas plataformas, como celular e computador, com prioridade para a experiência móvel. 
- RNF03 (Integração): O sistema deve permitir a integração com clínicas, ONGs e pet shops para facilitar o acesso à informação. 
- RNF04 (Utilidade): O sistema deve ser prático e substituir com eficiência o uso de documentos e agendas físicas.

##### ❌ Requisitos Não Implementados

- Sistema de Adoção (RF03)
- Alertas e Notificações Automáticas (RF04)
- Integração Direta com Parceiros (RNF03)

---

## 📜 Histórico de Versão

| Versão | Data       | Descrição                                         | Autores           | Revisores |
|-------:|------------|---------------------------------------------------|-------------------|-----------|
| 1.0    | 12/09/2025 | Criação da página de Elicitação de Requisitos     | Letícia Paiva     | Antonio   |
| 1.1    | 24/09/2025 | Adição do cronograma de elicitação                | Pedro Gomes       | Antonio   |
| 1.2    | 24/09/2025 | Inclusão de requisitos elicitados                 | Pedro e Letícia   | Antonio   |
| 1.3    | 26/09/2025 | Entrevista com Ana Beatriz e requisitos associados | Antonio e Letícia | Pedro     |
| 1.3    | 30/09/2025 | Alteração de estrutura | Antonio | Pedro     |
| 1.4    | 01/10/2025 |  Entrevista com Gustavo e requisitos associados | Leticia | Pedro     |

---

<style>
  .chip{
    display:inline-block;
    padding:.28rem .65rem;
    border-radius:9999px;
    font-size:.8rem;
    font-weight:700;
    letter-spacing:.02em;
    background:linear-gradient(90deg,#06b6d4,#3b82f6);
    color:#eaf2ff;
    margin:.25rem 0 1rem;
  }
  /* Tabelas mais legíveis */
  .markdown-section table{ width:100%; border-collapse:collapse; }
  .markdown-section thead th{
    text-transform:uppercase; letter-spacing:.04em; font-size:.78rem;
    color:#6b7280; font-weight:700; border-bottom:1px solid rgba(148,163,184,.35);
    padding:.7rem .9rem; text-align:left;
  }
  .markdown-section tbody td{
    border-bottom:1px solid rgba(148,163,184,.28);
    padding:.7rem .9rem;
  }
  .markdown-section tbody tr:hover{ background:rgba(2,6,23,.04); }
</style>
