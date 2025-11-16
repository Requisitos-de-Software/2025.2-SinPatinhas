# 📋 Elicitação de Requisitos

> Documento referente ao processo de **Elicitação de Requisitos** do sistema **SinPatinhas** (Sistema Nacional de Identificação e Registro de Animais de Estimação).

---

## 📑 Introdução

A fase de elicitação é crucial para garantir que o sistema final atenda às necessidades dos **órgãos públicos** (em conformidade com leis e decretos) e dos **usuários finais** (tutores e veterinários).  

Para isso, foram utilizadas as seguintes metodologias:  
- **Análise de Documentos** → entendimento do contexto legal e técnico.  
- **Entrevistas** → captura de necessidades reais dos usuários.  
- **Brainstorming** → geração de ideias e validação inicial de requisitos.  
- **Análise de sistemas concorrentes** → estudo de como os concorrentes abordam as soluções.

As próximas seções apresentam detalhadamente: metodologias aplicadas, cronograma, requisitos funcionais (RF) e não funcionais (RNF) identificados.

---

## 🛠️ Metodologias de Elicitação Utilizadas

- **Análise de Documentos**: revisão de leis, decretos e termos de uso.  
- **Entrevistas**: coleta estruturada de informações com stakeholders.  
  - [📄 Roteiro de Entrevista](Roteiro.md)  
- **Brainstorming**: sessões em grupo para identificação inicial de requisitos.  
- **Análise de sistemas concorrentes**: avaliação de funcionalidades e interfaces de sistemas similares.  

---

## 📆 Cronograma de Elicitação

| Atividade             | Data Agendada | Data Execução | Responsável      | Observações                                    |
|-----------------------|---------------|---------------|------------------|------------------------------------------------|
| Análise de Documentos | 24/09/2025    | 24/09/2025    | Pedro Gomes      | Realizada conforme o planejado                 |
| Análise de Documentos | 28/09/2025    | 28/09/2025    | Mateus           | Realizada conforme o planejado                 |
| Entrevista            | 25/09/2025    | 26/09/2025    | Antonio e Pedro  | Reagendada devido à solicitação da entrevistada |
| Entrevista            | 26/09/2025    | 30/09/2025    |  Letícia | Reagendada de acordo com a disponibilidade do entrevistado |
| Entrevista            | 29/09/2025    | 29/09/2025    | Mateus           | Realizada conforme o planejado                 |
| Análise de sistemas concorrentes | ---    | 07/09/2025    | Heloisa           | Realizada após a entrega 2 para elicitação de novos requisitos não implementados        

---

## 🔍 Técnicas Aplicadas

### 1. **Análise de Documentos**

**Fontes de Referência**  
- [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm)  
- [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm)  
- [Perguntas e Respostas – Sinpatinhas](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas)  
- ["RG para cães e gatos"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal)
- [MMA – Página oficial do SinPatinhas](https://sinpatinhas.mma.gov.br/login)
- [MMA – O que é o SinPatinhas?](https://www.gov.br/mma/pt-br/composicao/sbio/dpda/programas-e-Projetos/sinpatinhas)
- [Agência Brasil – Governo lança SinPatinhas](https://agenciabrasil.ebc.com.br/geral/noticia/2025-04saiba-como-funciona-o-sinpatinhas-novo-rg-animal-para-caes-e-gatos)
- [CNN Brasil](https://www.cnnbrasil.com.br/politica/sinpatinhas-como-cadastrar-caes-e-gatos-no-programa-de-rg-para-pets/)
- [O Globo](https://oglobo.globo.com/brasil/noticia/2025/04/17rg-animal-veja-como-fazer-cadastro-para-caes-e-gatos-no-sinpatinhas.ghtm)
- [InfoMoney – Cadastro nacional de animais](https://www.infomoney.com.br/brasilsinpatinhas-veja-como-sera-o-rg-de-caes-e-gatos-anunciado-pelo-governo/)
- [Lei Geral de Proteção de Dados – LGPD](https://www.gov.br/cidadania/pt-br/lgpd)
- [Canal do Pet – IG](https://canaldopet.ig.com.br/2025-04-17/)

### ✅ Requisitos Funcionais (RF)

<a id="rf001"></a>**RF001** – Cadastro de tutores com dados pessoais.  
<a id="rf002"></a>**RF002** – Cadastro de animais vinculados ao tutor.  
<a id="rf003"></a>**RF003** – Geração de número de Registro Geral do Animal (RGA).  
<a id="rf004"></a>**RF004** – Associação de microchip ao cadastro.  
<a id="rf005"></a>**RF005** – Emissão de documento oficial de identificação (RG Pet).  
<a id="rf006"></a>**RF006** – Consulta pública via RGA ou microchip.  
<a id="rf007"></a>**RF007** – Atualização do status do animal (perdido, encontrado, óbito, transferência).  
<a id="rf008"></a>**RF008** – Registro do histórico de saúde por veterinários.  
<a id="rf009"></a>**RF009** – Transferência de titularidade do animal.  
<a id="rf010"></a>**RF010** – Perfis de acesso distintos (Tutor e Veterinário).  
<a id="rf011"></a>**RF011** – Relatórios e estatísticas para órgãos públicos.  
<a id="rf012"></a>**RF012** – Login integrado via Gov.br, possibilitando autenticação única e segura.  
<a id="rf013"></a>**RF013** – Preenchimento automático de dados do tutor via Gov.br.  
<a id="rf014"></a>**RF014** – Emissão de carteirinha digital com QR Code.  
<a id="rf015"></a>**RF015** – Registro opcional do microchip no cadastro e exibição na carteirinha.  
<a id="rf016"></a>**RF016** – Registro de procedimentos veterinários (castração, vacinas, microchipagem) com identificação do profissional.  
<a id="rf017"></a>**RF017** – Suporte a perfis ampliados de atores (tutores, veterinários, ONGs, protetores independentes e gestores públicos).  
<a id="rf018"></a>**RF018** – Envio de notificações e campanhas educativas.  
<a id="rf019"></a>**RF019** – Integração com políticas públicas e programas sociais.  
<a id="rf020"></a>**RF020** – Acesso nacional via internet, arquitetura escalável.  

---

### ⚙️ Requisitos Não Funcionais (RNF)

<a id="rnf001"></a>**RNF001 (Usabilidade)** – Sistema fácil e intuitivo.  
<a id="rnf002"></a>**RNF002 (Design de Interface)** – Layout limpo e organizado.  
<a id="rnf003"></a>**RNF003 (Confiabilidade)** – Garantia contra perda de dados.  
<a id="rnf004"></a>**RNF004 (Acessibilidade)** – Acesso via web e mobile (prioridade no mobile).  
<a id="rnf005"></a>**RNF005 (Disponibilidade / Desempenho)** – Funcionalidades offline.  
<a id="rnf006"></a>**RNF006 (Compatibilidade/Acessibilidade)** – Acesso em múltiplas plataformas, mobile prioritário.  
<a id="rnf007"></a>**RNF007 (Integração)** – Integração com clínicas, ONGs e pet shops.  
<a id="rnf008"></a>**RNF008 (Utilidade)** – Sistema prático, substituindo documentos físicos.  
<a id="rnf009"></a>**RNF009 (Segurança)** – Conformidade com LGPD e alertas de acesso não autorizado.  
<a id="rnf010"></a>**RNF010 (Confiabilidade)** – Evitar perda de dados e garantir backups automáticos.  
<a id="rnf011"></a>**RNF011 (Integração)** – Integração entre clínicas, ONGs e SinPatinhas.  
<a id="rnf012"></a>**RNF012 (Acessibilidade)** – Acesso por dispositivos móveis e desktops.  
<a id="rnf013"></a>**RNF013 (Desempenho)** – Resposta rápida (< 2 segundos).  
<a id="rnf014"></a>**RNF014 (Disponibilidade)** – Acesso remoto contínuo 24/7.  
<a id="rnf015"></a>**RNF015 (Privacidade)** – Dados clínicos restritos, visualização sem edição por terceiros.  
<a id="rnf016"></a>**RNF016 (Auditabilidade)** – Registro de logs de acesso e modificações.


### 2. **Entrevistas**

#### 🎤 Entrevista 01 – Ana Beatriz
- **Perfil**: 22 anos, estudante, dona de cachorro.  
- **Comportamento**: Usa caderneta física de vacinas; gosta de apps organizados; valoriza layout e modo offline.  
- **Necessidades**: Centralizar informações do pet, organizar vacinas, compartilhar dados com familiares.  

📺 [Vídeo da Entrevista (YouTube)](https://www.youtube.com/embed/Nod9QhMIe20)

##### ✅ Requisitos Funcionais
- <a id="rf021"></a>**RF021** – Cadastro de perfil do animal.  
- <a id="rf022"></a>**RF022** – Registro do histórico de vacinas.  
- <a id="rf023"></a>**RF023** – Cadastro de informações de contato do tutor.  
- <a id="rf024"></a>**RF024** – Gerenciamento de múltiplos animais.  
- <a id="rf025"></a>**RF025** – Compartilhamento de informações com familiares.  
- <a id="rf026"></a>**RF026** – Notificações de vacinas futuras/atrasadas.  
- <a id="rf027"></a>**RF027** – Registro da localização do animal ou tutor.  

##### ⚙️ Requisitos Não Funcionais
- <a id="rnf017"></a>**RNF017 (Usabilidade)** – Sistema fácil e intuitivo.  
- <a id="rnf018"></a>**RNF018 (Design de Interface)** – Layout limpo e organizado.  
- <a id="rnf019"></a>**RNF019 (Confiabilidade)** – Garantia contra perda de dados.  

##### ❌ Requisitos Não Implementados
- <a id="rnfni001"></a>**RNFNI001 (Acessibilidade)** – Acesso via web e mobile (prioridade no mobile).  
- <a id="rnfni002"></a>**RNFNI002 (Disponibilidade / Desempenho)** – Funcionalidades offline.  

---

#### 🎤 Entrevista 02 – Gustavo
- **Perfil**: Jovem, 22 anos, estudante de Ciências Biológicas (UnB), estagiário em micologia. Tem cães; já teve peixes e aves.  
- **Comportamento**: Registra manualmente vacinas/consultas; animais castrados e com vacinas em dia; consultas frequentes por questões de saúde da raça/espécie.  
- **Necessidades**: Agilidade para registrar vacinas/medicação; sistema nacional para identificação/recuperação; facilitar adoção; acesso a informações de vacinação/castração pública; “cartão SUS digital” do pet; centralização em app; alertas; integração com clínicas/ONGs/pet shops; acesso mobile e web.  

📺 [Vídeo da Entrevista (YouTube)](https://www.youtube.com/watch?v=78vAABLNU_4)

##### ✅ Requisitos Funcionais
- <a id="rf028"></a>**RF028** – O sistema deve permitir a busca e recuperação de animais perdidos ou abandonados.  
- <a id="rf029"></a>**RF029** – O sistema deve funcionar como um prontuário digital, centralizando o histórico de saúde e vacinação do animal.  
- <a id="rf030"></a>**RF030** – O sistema deve incluir uma funcionalidade para facilitar a adoção de animais.  
- <a id="rf031"></a>**RF031** – O sistema deve enviar notificações automáticas para vacinas e lembretes para horários de medicação.  
- <a id="rf032"></a>**RF032** – O sistema deve permitir o registro de informações detalhadas do animal, como nome, idade, tipo sanguíneo, peso, altura, raça, espécie e endereço do tutor.  

##### ⚙️ Requisitos Não Funcionais
- <a id="rnf020"></a>**RNF020 (Usabilidade)** – Sistema claro e fácil de entender, permitindo que o usuário saiba exatamente o que fazer.  
- <a id="rnf021"></a>**RNF021 (Compatibilidade/Acessibilidade)** – Acessível em múltiplas plataformas (mobile e desktop), com prioridade para mobile.  
- <a id="rnf022"></a>**RNF022 (Integração)** – Permite integração com clínicas, ONGs e pet shops.  
- <a id="rnf023"></a>**RNF023 (Utilidade)** – Prático e substitui o uso de documentos e agendas físicas.  

##### ❌ Requisitos Não Implementados
- <a id="rfni001"></a>**RFNI001** – Sistema de Adoção.  
- <a id="rfni002"></a>**RFNI002** – Alertas e Notificações Automáticas.  
- <a id="rnfni003"></a>**RNFNI003** – Integração direta com parceiros.  

---

#### 🎤 Entrevista 03 – Dra. Ilma Coutinho
- **Perfil**: Médica veterinária com mais de 40 anos de experiência, professora universitária e clínica geral. Utiliza sistemas como o Sisvet e conhece o Sinpatinhas.  
- **Comportamento**: Valoriza acessibilidade e segurança de dados, e busca eficiência com automações e integração entre órgãos públicos.  
- **Necessidades**: Sistema centralizado e de fácil uso, via Gov.br, identificação do animal por QR Code, registro completo de operações veterinárias (vacinas, castração, microchip) e integração com campanhas públicas de saúde animal.  

📺 [Vídeo da Entrevista (YouTube)](https://www.youtube.com/watch?v=ybGDZRGtCIc)

##### ✅ Requisitos Funcionais
- <a id="rf033"></a>**RF033** – Área de instruções integradas (manual digital).  
- <a id="rf034"></a>**RF034** – Upload de foto do animal.  
- <a id="rf035"></a>**RF035** – Cadastro e atualização de endereço do tutor.  
- <a id="rf036"></a>**RF036** – Módulo de registro e visualização de exames do animal.  
- <a id="rf037"></a>**RF037** – Consulta via celular fora da clínica.  
- <a id="rf038"></a>**RF038** – Acesso remoto aos dados do animal.  
- <a id="rf039"></a>**RF039** – Integração entre clínicas veterinárias, permitindo visualização do prontuário por outros veterinários.  
- <a id="rf040"></a>**RF040** – Cadastro de ONGs e associações para controle de animais resgatados e adotados.  
- <a id="rf041"></a>**RF041** – Rastreamento de doações e adoções, registrando doadores, adotantes e datas.  
- <a id="rf042"></a>**RF042** – Transferência oficial de tutor, preservando histórico do animal.  
- <a id="rf043"></a>**RF043** – Emissão de alertas de acesso suspeito ou tentativas de violação.  
- <a id="rf044"></a>**RF044** – Notificação periódica de atualização de dados e fotos do animal.  
- <a id="rf045"></a>**RF045** – Vinculação de foto do tutor ao registro de adoção.  

##### ⚙️ Requisitos Não Funcionais
- <a id="rnf024"></a>**RNF024 (Usabilidade)** – Fácil de aprender e operar por profissionais com pouca afinidade tecnológica.  
- <a id="rnf025"></a>**RNF025 (Segurança)** – Alertas sobre tentativas de acesso não autorizado.  
- <a id="rnf026"></a>**RNF026 (Confiabilidade)** – Evita perda de dados e garante backups automáticos.  
- <a id="rnf027"></a>**RNF027 (Integração)** – Permite integração entre clínicas, ONGs e Sinpatinhas.  
- <a id="rnf028"></a>**RNF028 (Acessibilidade)** – Acesso via dispositivos móveis e desktops.  
- <a id="rnf029"></a>**RNF029 (Desempenho)** – Respostas rápidas (até 2 segundos), mesmo em conexões móveis.  
- <a id="rnf030"></a>**RNF030 (Disponibilidade)** – Acesso remoto contínuo 24/7.  
- <a id="rnf031"></a>**RNF031 (Privacidade)** – Controle de acesso aos dados clínicos, visualização restrita.  
- <a id="rnf032"></a>**RNF032 (Auditabilidade)** – Registro de logs de acesso e modificações.  

##### ❌ Requisitos Não Implementados
- <a id="rfni003"></a>**RFNI003** – Área de instruções integradas (manual digital).  
- <a id="rfni004"></a>**RFNI004** – Alertas de acesso suspeito ou tentativas de violação.  
- <a id="rfni005"></a>**RFNI005** – Notificação periódica de atualização de dados e fotos do animal.  
- <a id="rfni006"></a>**RFNI006** – Vinculação de foto do tutor ao registro de adoção.

### 3. **Análise de sistemas concorrentes**

Foram analisados dois sistemas concorrentes de planos de saúde para PETS: **Petlove** e **Dog Life** ([link Petlove](https://saude.petlove.com.br/)) ([link Dog Life](https://www.doglife.com.br/)).

Os requisitos foram extraídos principalmente das interfaces de listagem de ambos os sistemas. O sistema da **Dog Life** se destaca por apresentar uma interface de listagem organizada, com opções de filtragem e detalhamento mais completo nos perfis dos prestadores de serviço ([link interface Dog Life](https://www.doglife.com.br/brasilia-df?filters=onlyAccredited)). Já o sistema da **Petlove** chama atenção pelo uso de um mapa interativo com filtragem, facilitando a localização de prestadores e serviços ([link mapa Petlove](https://saude.petlove.com.br/rede-credenciada/se/aracaju)).

Essas observações permitiram identificar boas práticas e oportunidades de melhoria para o sistema SinPatinhas, especialmente no que diz respeito à usabilidade e à apresentação das informações para o usuário final.

##### ❌ Requisitos Não Implementados

- <a id="rfni007"></a>**RFNI007** – Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados no sistema. (Petlove)
- <a id="rfni008"></a>**RFNI008** – Implementar filtro por distância, permitindo ao usuário localizar clínicas próximas à sua posição atual. (Petlove)
- <a id="rfni009"></a>**RFNI009** – Disponibilizar listagem de tratamentos e serviços oferecidos pelas clínicas e hospitais cadastrados. (Petlove)
- <a id="rfni010"></a>**RFNI010** – Implementar filtro por especialidade veterinária, facilitando a busca por profissionais ou estabelecimentos específicos. (Petlove)
- <a id="rfni011"></a>**RFNI011** – Incluir informações sobre horários de funcionamento de clínicas e hospitais veterinários. (Dog Life)
- <a id="rfni012"></a>**RFNI012** – Adicionar indicadores visuais no mapa e nos perfis para mostrar se a clínica ou hospital está aberto ou fechado. (Petlove)
- <a id="rfni013"></a>**RFNI013** – Permitir pesquisa de clínicas e hospitais por médico veterinário vinculado. (Dog Life)
- <a id="rfni014"></a>**RFNI014** – Incluir campo para que clínicas e hospitais informem os preços dos principais procedimentos. (Dog Life)
- <a id="rfni015"></a>**RFNI015** – Adicionar opção para que médicos veterinários indiquem se realizam atendimentos domiciliares. (Dog Life)
- <a id="rfni016"></a>**RFNI016** – Implementar sistema de avaliação numérica para os estabelecimentos prestadores de serviço. (Dog Life)
- <a id="rfni017"></a>**RFNI017** – Implementar sistema de avaliação numérica para os médicos veterinários que realizarem atendimentos. (Dog Life)
- <a id="rfni018"></a>**RFNI018** – Permitir o envio de comentários e feedbacks sobre o atendimento recebido nos estabelecimentos. (Dog Life)
- <a id="rfni019"></a>**RFNI019** – Permitir o envio de comentários e feedbacks sobre o atendimento prestado por médicos veterinários. (Dog Life)
- <a id="rfni020"></a>**RFNI020** – Exibir indicador visual da média de avaliações no perfil de clínicas e hospitais veterinários. (Dog Life)
- <a id="rfni021"></a>**RFNI021** – Exibir indicador visual da média de avaliações no perfil de médicos veterinários. (Dog Life)


## 📜 Histórico de Versão

| Versão | Data       | Descrição                                         | Autores           | Revisores |
|-------:|------------|---------------------------------------------------|-------------------|-----------|
| 1.0    | 12/09/2025 | Criação da página de Elicitação de Requisitos     | Letícia Paiva     | Antonio   |
| 1.1    | 24/09/2025 | Adição do cronograma de elicitação                | Pedro Gomes       | Antonio   |
| 1.2    | 24/09/2025 | Inclusão de requisitos elicitados                 | Pedro e Letícia   | Antonio   |
| 1.3    | 26/09/2025 | Entrevista com Ana Beatriz e requisitos associados | Pedro e Antonio | Letícia     |
| 1.3    | 30/09/2025 | Alteração de estrutura | Antonio | Pedro     |
| 1.4    | 01/10/2025 |  Entrevista com Gustavo e requisitos associados | Leticia | Pedro     |
| 1.5    | 05/10/2025 | Movido a entrevista e analise de documentos de outras partes para aqui  | Mateus | Heloisa     |
| 1.6    | 07/10/2025 | Adição da técnica de análise de sistemas concorrentes  | Heloisa   |  Antonio   |
| 1.7    | 11/10/2025 | Edição de rotas  | Antonio   |  --   |
| 1.8    | 21/10/2025 | Padronização de IDs com formato HTML anchor; correção da numeração para que cada tipo de requisito (RF, RNF, RFNI, RNFNI) possua numeração independente e sequencial; remoção de duplicidades entre seções | Pedro Gomes | Antonio |


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
