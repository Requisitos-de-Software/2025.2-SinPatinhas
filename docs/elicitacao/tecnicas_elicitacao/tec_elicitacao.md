# Elicitação de Requisitos

---

## Seções

- ### Introdução

  Este documento tem como objetivo registrar e detalhar o processo de **Elicitação de Requisitos** realizado pelo grupo para o desenvolvimento do sistema **Sinpatinhas** (Sistema Nacional de Identificação e Registro de Animais de Estimação).

  A fase de elicitação é crucial para garantir que o sistema final atenda às necessidades tanto dos órgãos públicos, em conformidade com as leis e decretos vigentes, quanto dos usuários finais, como tutores e veterinários. Para tal, foram empregadas metodologias como **Análise de Documentos** (para entender o contexto legal e técnico) e **Entrevistas** com stakeholders chave (para capturar necessidades do usuário e validar o escopo).

  As seções a seguir detalham as metodologias aplicadas, o cronograma de atividades e o resultado do trabalho, apresentando os Requisitos Funcionais (RF) e Não Funcionais (RNF) identificados até o momento.

- ### Metodologias de Elicitação Utilizadas pelo Grupo
  O grupo adotou as seguintes metodologias de elicitação:
  - *Analise de Documentos*: Revisão de documentos existentes para entender o contexto e requisitos iniciais.
  - *Entrevistas*: Realização de entrevistas com stakeholders para coleta de requisitos.
      - [Roteiro de Entrevista](Roteiro.md)
  - *Brainstorming*: Sessões de brainstorming para geração de ideias e identificação inicial de requisitos.

  
- ### Cronograma de Elicitação
  O cronograma de atividades de elicitação foi planejado da seguinte forma:

  | Atividade               | Data Agendada| Data Execução | Responsável     | Observações     |
  |------------------------|--------------|---------------|-----------------|-----------------|
  |Análise de Documentos|24/09/2025|24/09/2025|Pedro Gomes|Realizada conforme o planejado|
  |Entrevista|25/09/2025|26/09/2025|Antônio e Pedro| Reagendado devido solicição da entrevistada|

- ### Técnicas aplicadas
  1. **Análise de Documentos**: Revisão detalhada de documentos legais e técnicos relacionados ao sistema Sinpatinhas, incluindo leis, decretos e termos de uso.
      **Documentos de Referência**
      - [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm)
      - [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm)
      - [Perguntas e Respostas](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas)
      - ["RG para cães e gatos"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal)
      - [MMA – Página oficial do SinPatinhas](https://sinpatinhas.mma.gov.br/login)
      - [MMA – O que é o SinPatinhas?](https://www.gov.br/mma/pt-br/composicao/sbio/dpda/programas-e-Projetos/sinpatinhas)
      - [Agência Brasil – Governo lança SinPatinhas](https://agenciabrasil.ebc.com.br/geral/noticia/2025-04/saiba-como-funciona-o-sinpatinhas-novo-rg-animal-para-caes-e-gatos)
      - [CNN Brasil](https://www.cnnbrasil.com.br/politica/sinpatinhas-como-cadastrar-caes-e-gatos-no-programa-de-rg-para-pets/)
      - [O Globo](https://oglobo.globo.com/brasil/noticia/2025/04/17/rg-animal-veja-como-fazer-cadastro-para-caes-e-gatos-no-sinpatinhas.ghtm)
      - [InfoMoney – Cadastro nacional de animais](https://www.infomoney.com.br/brasil/sinpatinhas-veja-como-sera-o-rg-de-caes-e-gatos-anunciado-pelo-governo/)
      - [Lei Geral de Proteção de Dados – LGPD](https://www.gov.br/cidadania/pt-br/lgpd)
      - [Canal do Pet – IG](https://canaldopet.ig.com.br/2025-04-17/)

      **Requisitos Funcionais (RF)**

      RF001 – O sistema deve permitir o cadastro de tutores de animais, exigindo informações como nome completo, CPF, endereço e dados de contato.
      Fonte: BRASIL (2025a).

      RF002 – O sistema deve permitir o cadastro de animais (cães e gatos), associando-os a um tutor. As informações devem incluir espécie, raça, nome, data de nascimento, cor, características e fotos.
      Fonte: BRASIL (2024).

      RF003 – O sistema deve gerar um número de identificação único para cada animal cadastrado, denominado Registro Geral do Animal (RGA).
      Fonte: BRASIL (2025b).

      RF004 – O sistema deve permitir que o tutor associe o código de um microchip de identificação ao cadastro do seu animal.
      Fonte: BRASIL (2025c).

      RF005 – O sistema deve permitir a emissão e a impressão de um documento oficial de identificação do animal (RG Pet) a partir dos dados cadastrados.
      Fonte: BRASIL (2024).

      RF006 – O sistema deve possuir um módulo de consulta pública, onde, a partir do número do RGA ou do código do microchip, seja possível visualizar informações não sensíveis do animal e um contato do tutor.
      Fonte: BRASIL (2025c).

      RF007 – O tutor deve ser capaz de atualizar o status do animal, incluindo "perdido", "encontrado", "óbito" ou "transferência de tutela".
      Fonte: BRASIL (2025b).

      RF008 – O sistema deve permitir o registro do histórico de saúde do animal, como vacinas e castração, por parte de veterinários ou órgãos autorizados.
      Fonte: BRASIL (2024).

      RF009 – O sistema deve permitir a transferência de titularidade de um animal de um tutor para outro, mantendo o histórico do animal.
      Fonte: BRASIL (2025a).

      RF010 – O sistema deve possuir perfis de acesso distintos para "Tutor" e "Veterinário", cada um com permissões específicas.
      Fonte: BRASIL (2025b).

      RF011 – O sistema deve ser capaz de gerar relatórios e estatísticas para órgãos públicos sobre a população de cães e gatos, auxiliando em políticas de saúde.
      Fonte: BRASIL (2024).

      RF012 – O sistema deve permitir login integrado via Gov.br, possibilitando autenticação única e segura para tutores e profissionais.
      Fonte: MMA – Ministério do Meio Ambiente e Mudança do Clima; Decreto nº 12.439/2025.

      RF013 – O sistema deve habilitar preenchimento automático de dados pessoais do tutor (quando autorizado via Gov.br), reduzindo a duplicidade de entrada de dados.
      Fonte: MMA – Ministério do Meio Ambiente e Mudança do Clima; Decreto nº 12.439/2025.

      RF014 – O sistema deve emitir uma carteirinha digital com validade nacional, contendo QR Code que permita acesso rápido às informações básicas do animal.
      Fonte: O Globo; InfoMoney; CNN Brasil.

      RF015 – O sistema deve permitir o registro opcional do número de microchip no cadastro do animal e exibir o microchip na carteirinha digital quando informado.
      Fonte: InfoMoney; O Globo.

      RF016 – O sistema deve permitir que médicos veterinários registrem oficialmente procedimentos (castração, vacinas, microchipagem) no prontuário do animal, com identificação do profissional responsável.
      Fonte: Lei nº 13.426/2017; Agência Brasil.

      RF017 – O sistema deve suportar perfis ampliados de atores (tutores, veterinários, ONGs, protetores independentes e gestores públicos), cada um com permissões e visibilidades específicas.
      Fonte: MMA – Ministério do Meio Ambiente; CNN Brasil.

      RF018 – O sistema deve possibilitar envio de notificações e campanhas (lembretes de vacinação, castração e microchipagem) e a publicação de materiais educativos de guarda responsável.
      Fonte: Agência Brasil; O Globo.

      RF019 – O sistema deve oferecer mecanismos de integração com políticas públicas, permitindo cadastros e relatórios específicos para programas sociais (baixa renda, povos/tradicionais, pessoas em situação de rua, protetores) e facilitar ações governamentais.
      Fonte: Decreto nº 12.439/2025; MMA.

      RF020 – O sistema deve garantir acesso nacional via internet (gratuito) e possuir arquitetura capaz de suportar picos massivos de acesso, com escalabilidade e balanceamento conforme demanda.
      Fonte: InfoMoney; CNN Brasil.

      **Requisitos Não Funcionais (RNF)**

      RNF001 (Segurança) – O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo a segurança e a privacidade dos dados pessoais dos tutores.
      Fonte: BRASIL (2024).

      RNF002 (Disponibilidade) – O sistema deve possuir uma disponibilidade de 99,8% em regime 24/7, garantindo o acesso contínuo às informações.
      Fonte: Requisito implícito pela natureza de serviço público essencial, Canal do Pet – IG.

      RNF003 (Usabilidade) – A interface do sistema deve ser intuitiva e de fácil utilização para o cidadão comum (tutor).
      Fonte: BRASIL (2025c).

      RNF004 (Desempenho) – As consultas públicas de animais perdidos devem ter um tempo de resposta inferior a 2 segundos.
      Fonte: Requisito implícito para garantir agilidade.

      RNF005 (Compatibilidade) – O sistema deve ser compatível com os principais navegadores de internet (Firefox, Edge e Google Chrome) e ser responsivo para acesso via dispositivos móveis.
      Fonte: Requisito implícito para garantir amplo acesso da população.

      RNF006 (Integração) – O sistema deve possuir APIs para permitir a integração futura com sistemas de clínicas veterinárias e centros de controle de zoonoses.
      Fonte: BRASIL (2025b).

    2. **Entrevistas**: Condução de entrevistas estruturadas com público alvo chave para aprofundar o entendimento dos requisitos e validar as informações coletadas na análise documental.

      **Entrevista 01**

      <iframe width="100%" height="600" 
      src="https://www.youtube.com/embed/Nod9QhMIe20" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>

      **Nome: Ana Beatriz**
      **Perfil**

      Jovem, estudante, 22 anos, dona de um cachorro. Atualmente, gerencia as informações de saúde do seu pet de forma manual, utilizando uma caderneta de vacinação física.

      **Comportamentos**

      Guarda a caderneta do animal junto com seus próprios documentos.

      Valoriza a organização e a facilidade de acesso à informação.

      Utiliza aplicativos no celular.

      Valoriza um bom layout e a capacidade de funcionar offline.

      **Necessidades (Objetivos)**

      Ter um local único e seguro para armazenar todas as informações importantes do pet.

      Facilitar a organização das datas de vacinas e outros cuidados.

      Poder compartilhar o acesso às informações do animal com outras pessoas da família.

      **Requisitos Funcionais**

      RF001: O sistema deve permitir o cadastro do perfil de um animal, incluindo seu nome e outras formas de identificação.
      Fonte: (1:57) - "...Acho que o nome, ou então uma forma de identificação..."

      RF002: O sistema deve permitir o registro e o armazenamento do histórico de vacinas do animal.
      Fonte: (2:02) - "...além das vacinas e o contato dos tutores."

      RF003: O sistema deve permitir o cadastro de informações de contato do tutor do animal.
      Fonte: (2:05) - "...além das vacinas e o contato dos tutores."

      RF004: O sistema deve permitir que um tutor gerencie os perfis de múltiplos animais de estimação da família.
      Fonte: (2:29) - "...colocar todos os animais na família..."

      RF005: O sistema deve permitir o compartilhamento das informações de um animal com outros membros da família ou cuidadores.
      Fonte: (2:37) - "...eu tenho um parente de ver, ele pode ir lá olhar no aplicativo e ver se está tudo lá..."

      RF006: O sistema deve enviar lembretes ou notificações sobre vacinas futuras ou em atraso.
      Fonte: (2:34) - "...pra gente ficar sabendo que tá por fora, até perder, digamos, uma vacinação..."

      RF007: O sistema deve registrar a localização do animal ou do tutor como uma informação importante.
      Fonte: (1:41) - "...armazenasse informações importantes, além da localização..."

      **Requisitos Não Funcionais**

      RNF001 (Usabilidade): O sistema deve ser fácil de usar e intuitivo.
      Fonte: (1:38) - "Esperaria que fosse fácil de usar..."

      RNF002 (Design de Interface): A interface do sistema deve ter um layout limpo, organizado e agradável.
      Fonte: (3:12) - "No layout, eu gosto que ainda tenha arrumadinho..."

      RNF005 (Confiabilidade): O sistema deve ser confiável, garantindo que as informações inseridas não sejam perdidas, substituindo com segurança a caderneta física.
      Fonte: (1:21) - A principal dor mencionada é a perda da caderneta física...

      **Requisitos Não Implementados**

      **Requisitos Não Funcionais**

      RNF001 (Acessibilidade): O sistema deve ser acessível tanto por dispositivos móveis (celular) quanto por computadores (web), com prioridade para a experiência móvel.
      Fonte: (3:48) - A usuária indica que ambos seriam bons, mas o celular é a principal forma de uso.

      RNF002 (Disponibilidade / Desempenho): O sistema deve possuir funcionalidades que operem offline (sem conexão com a internet).
      Fonte: (3:23) - "...ter um modo offline é muito bom."

    ---

      ### Entrevista 02

      <iframe width="100%" height="600" 
      src="https://www.youtube.com/watch?v=ybGDZRGtCIc" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>

      **Nome:** Dra. Ilma Coutinho  
      **Perfil:** Médica veterinária com mais de 40 anos de experiência, professora universitária e clínica geral. Utiliza sistemas como o Sisvet e conhece o Sinpatinhas.  

      #### Requisitos Funcionais

      RF001 – O sistema deve possuir uma área de instruções integradas (manual digital) explicando passo a passo o uso das funções.  
      RF002 – O sistema deve permitir upload de foto do animal.  
      RF003 – O sistema deve possibilitar o cadastro e atualização de endereço do tutor.  
      RF004 – O sistema deve ter um módulo separado para registro e visualização de exames do animal.  
      RF005 – O sistema deve ser acessível via celular para consulta de dados fora da clínica.  
      RF006 – O sistema deve permitir acesso remoto aos dados do animal, não limitado à clínica.  
      RF007 – O sistema deve permitir integração entre clínicas veterinárias, de modo que um veterinário possa visualizar (mas não alterar) o prontuário criado por outro.  
      RF008 – O sistema deve permitir o cadastro de ONGs e associações para controle de animais resgatados e adotados.  
      RF009 – O sistema deve permitir rastreamento de doações e adoções, registrando quem doou, quem adotou e datas correspondentes.  
      RF010 – O sistema deve permitir a transferência de tutor de forma oficial, preservando o histórico do animal.  
      RF011 – O sistema deve emitir alertas de acesso suspeito ou tentativas de violação.  
      RF012 – O sistema deve notificar tutores periodicamente para atualização de dados e fotos do animal.  
      RF013 – O sistema deve permitir vincular foto do tutor ao registro de adoção.  

      #### Requisitos Não Funcionais

      RNF001 (Usabilidade) – O sistema deve ser fácil de aprender e operar por profissionais com pouca afinidade tecnológica de forma que não cometa erros permanentes e cometa erros concertaveis no maximo 1 vez por semana.  
      RNF002 (Segurança) – O sistema deve alertar o usuário sobre tentativas de acesso não autorizado, similar a sistemas bancários.  
      RNF003 (Confiabilidade) – O sistema deve evitar perda de dados e garantir cópias de segurança automáticas.  
      RNF004 (Integração) – O sistema deve permitir integração entre clínicas, ONGs e o Sinpatinhas.  
      RNF005 (Acessibilidade) – O sistema deve ser acessível por dispositivos móveis e desktops.  
      RNF006 (Desempenho) – O sistema deve ter respostas rápidas, de até 2 segundos, mesmo em conexões móveis.  
      RNF007 (Disponibilidade) – Deve permitir acesso remoto contínuo, 24 horas por dia.  
      RNF008 (Privacidade) – O acesso aos dados clínicos deve ser restrito, permitindo visualização mas não edição por terceiros.  
      RNF009 (Auditabilidade) – O sistema deve registrar logs de acesso e modificações.  

    ---

- ### ...
  ...
- ### ...
  ...


---

## Histórico de Versão

| Versão | Data       | Descrição                                  | Autores       | Revisores |
|------:|------------|---------------------------------------------|---------------|-----------|
| 1.0   | 12/09/2025 | Criação da página de Elicitação de Requisitos | Letícia Paiva | Antonio   |
| 1.1   | 24/09/2025 | Adição do cronograma de elicitação          | Pedro Gomes  |   Antonio   |
| 1.2   | 24/09/2025 | Adição dos requisitos elicitados            | Pedro e Letícia | Antonio   |
| 1.3   | 26/09/2025 | Adição da entrevista com Ana Beatriz e requisitos  | Antonio e Letícia | Pedro     |
| 1.4   | 05/10/2025 | Movido a entrevista e analise de documentos de outras partes para aqui  | Mateus |      |


---'

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