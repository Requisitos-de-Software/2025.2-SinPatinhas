# Consolidação dos Requisitos Elicitados

> Esta página apresenta a lista consolidada dos requisitos elicitados para o sistema SinPatinhas, com base no processo descrito no documento de Elicitação de Requisitos (`tec_elicitacao.md`). A elicitação foi realizada por meio de análise de documentos oficiais, entrevistas com stakeholders, brainstorming em grupo e análise de sistemas concorrentes. Os requisitos foram classificados em funcionais (implementados e não implementados) e não funcionais, e cada item apresenta sua respectiva fonte de origem.

---

## Consolidação dos Requisitos Elicitados

### Requisitos Funcionais Implementados

<p><strong>Tabela 1 – Conjunto de requisitos funcionais implementados elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
| RF001 | Cadastro de tutores com dados pessoais. | Documentos/Entrevistas |
| RF002 | Cadastro de animais vinculados ao tutor. | Documentos/Entrevistas |
| RF003 | Geração de número de Registro Geral do Animal (RGA). | Documentos |
| RF004 | Associação de microchip ao cadastro. | Documentos |
| RF005 | Emissão de documento oficial de identificação (RG Pet). | Documentos |
| RF006 | Consulta pública via RGA ou microchip. | Documentos |
| RF007 | Atualização do status do animal (perdido, encontrado, óbito, transferência). | Documentos |
| RF008 | Registro do histórico de saúde por veterinários. | Documentos |
| RF009 | Transferência de titularidade do animal. | Documentos |
| RF010 | Perfis de acesso distintos (Tutor e Veterinário). | Documentos |
| RF011 | Relatórios e estatísticas para órgãos públicos. | Documentos |
| RF012 | Permitir login integrado via Gov.br para tutores e profissionais. | Documentos |
| RF013 | Preenchimento automático de dados pessoais do tutor via Gov.br. | Documentos |
| RF014 | Emissão de carteirinha digital com QR Code. | Documentos |
| RF015 | Registro opcional do número de microchip e exibição na carteirinha digital. | Documentos |
| RF016 | Registro oficial de procedimentos veterinários (castração, vacinas, microchipagem). | Documentos |
| RF017 | Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos). | Documentos |
| RF018 | Envio de notificações/campanhas e publicação de materiais educativos. | Documentos |
| RF019 | Integração com políticas públicas e relatórios para programas sociais. | Documentos |
| RF020 | Garantir acesso nacional via internet, com escalabilidade. | Documentos |
| RF021 | Cadastro de perfil do animal. | Entrevista 1 |
| RF022 | Registro do histórico de vacinas. | Entrevista 1 |
| RF023 | Cadastro de informações de contato do tutor. | Entrevista 1 |
| RF024 | Gerenciamento de múltiplos animais. | Entrevista 1 |
| RF025 | Compartilhamento de informações com familiares. | Entrevista 1 |
| RF026 | Notificações de vacinas futuras/atrasadas. | Entrevista 1 |
| RF027 | Registro da localização do animal ou tutor. | Entrevista 1 |
| RF028 | Permitir busca e recuperação de animais perdidos ou abandonados. | Entrevista 2 |
| RF029 | Prontuário digital centralizando histórico de saúde e vacinação. | Entrevista 2 |
| RF030 | Funcionalidade para facilitar adoção de animais. | Entrevista 2 |
| RF031 | Notificações automáticas para vacinas e lembretes de medicação. | Entrevista 2 |
| RF032 | Registro de informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie, endereço do tutor). | Entrevista 2 |
| RF033 | Área de instruções integradas (manual digital). | Entrevista 3 |
| RF034 | Upload de foto do animal. | Entrevista 3 |
| RF035 | Cadastro/atualização de endereço do tutor. | Entrevista 3 |
| RF036 | Módulo para registro/visualização de exames do animal. | Entrevista 3 |
| RF037 | Acesso via celular para consulta fora da clínica. | Entrevista 3 |
| RF038 | Acesso remoto aos dados do animal. | Entrevista 3 |
| RF039 | Integração entre clínicas veterinárias (visualização de prontuário). | Entrevista 3 |
| RF040 | Cadastro de ONGs/associações para controle de animais resgatados/adotados. | Entrevista 3 |
| RF041 | Rastreamento de doações/adoções. | Entrevista 3 |
| RF042 | Transferência de tutor preservando histórico. | Entrevista 3 |
| RF043 | Emissão de alertas de acesso suspeito. | Entrevista 3 |
| RF044 | Notificação periódica para atualização de dados/fotos do animal. | Entrevista 3 |
| RF045 | Vincular foto do tutor ao registro de adoção. | Entrevista 3 |

### Requisitos Funcionais Não Implementados

<p><strong>Tabela 2 – Conjunto de requisitos funcionais não implementados elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
| RFNI001 | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. | Análise de concorrentes |
| RFNI002 | Implementar filtro por distância para localizar clínicas próximas. | Análise de concorrentes |
| RFNI003 | Listagem de tratamentos e serviços oferecidos por clínicas/hospitais. | Análise de concorrentes |
| RFNI004 | Filtro por especialidade veterinária. | Análise de concorrentes |
| RFNI005 | Informações sobre horários de funcionamento de clínicas/hospitais. | Análise de concorrentes |
| RFNI006 | Indicadores visuais de aberto/fechado no mapa e perfis. | Análise de concorrentes |
| RFNI007 | Pesquisa de clínicas/hospitais por médico veterinário vinculado. | Análise de concorrentes |
| RFNI008 | Campo para clínicas/hospitais informarem preços dos principais procedimentos. | Análise de concorrentes |
| RFNI009 | Médicos veterinários indicarem se realizam atendimentos domiciliares. | Análise de concorrentes |
| RFNI010 | Sistema de avaliação numérica para estabelecimentos. | Análise de concorrentes |
| RFNI011 | Sistema de avaliação numérica para médicos veterinários. | Análise de concorrentes |
| RFNI012 | Envio de comentários/feedbacks sobre estabelecimentos. | Análise de concorrentes |
| RFNI013 | Envio de comentários/feedbacks sobre médicos veterinários. | Análise de concorrentes |
| RFNI014 | Indicador visual da média de avaliações no perfil de clínicas/hospitais. | Análise de concorrentes |
| RFNI015 | Indicador visual da média de avaliações no perfil de médicos veterinários. | Análise de concorrentes |
| RFNI016 | Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais). | Entrevista 2 |
| RFNI017 | Alertas e notificações automáticas para vacinas e lembretes de medicação. | Entrevista 2 |
| RFNI018 | Integração direta com parceiros (clínicas, ONGs, pet shops). | Entrevista 2 |
| RFNI019 | Área de instruções integradas (manual digital) explicando passo a passo o uso das funções. | Entrevista 3 |
| RFNI020 | Emissão de alertas de acesso suspeito ou tentativas de violação. | Entrevista 3 |
| RFNI021 | Notificação periódica para atualização de dados e fotos do animal. | Entrevista 3 |
| RFNI022 | Vincular foto do tutor ao registro de adoção. | Entrevista 3 |

### Requisitos Não Funcionais

<p><strong>Tabela 3 – Conjunto de requisitos não funcionais elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
| RNF001 | Conformidade com a LGPD. | Documentos |
| RNF002 | Disponibilidade: 99,8% de uptime (24/7). | Documentos |
| RNF003 | Usabilidade: interface intuitiva para cidadãos. | Documentos |
| RNF004 | Desempenho: resposta em consultas públicas < 2s. | Documentos |
| RNF005 | Compatibilidade: suporte a navegadores principais e responsividade mobile. | Documentos |
| RNF006 | Integração: APIs para integração futura com clínicas e órgãos públicos. | Documentos |
| RNF007 | Sistema fácil e intuitivo. | Entrevista 1 |
| RNF008 | Design de interface limpo e organizado. | Entrevista 1 |
| RNF009 | Confiabilidade: garantia contra perda de dados. | Entrevista 1 |
| RNF010 | Acessibilidade: acesso via web e mobile (prioridade mobile). | Entrevista 1 |
| RNF011 | Disponibilidade/desempenho: funcionalidades offline. | Entrevista 1 |
| RNF012 | Usabilidade: sistema claro e fácil de entender. | Entrevista 2 |
| RNF013 | Compatibilidade/acessibilidade: multiplataforma, prioridade mobile. | Entrevista 2 |
| RNF014 | Integração com clínicas, ONGs e pet shops. | Entrevista 2 |
| RNF015 | Utilidade: substituir documentos/agendas físicas. | Entrevista 2 |
| RNF016 | Usabilidade para profissionais com pouca afinidade tecnológica. | Entrevista 3 |
| RNF017 | Segurança: alertas de acesso não autorizado. | Entrevista 3 |
| RNF018 | Confiabilidade: cópias de segurança automáticas. | Entrevista 3 |
| RNF019 | Integração entre clínicas, ONGs e Sinpatinhas. | Entrevista 3 |
| RNF020 | Acessibilidade: dispositivos móveis e desktops. | Entrevista 3 |
| RNF021 | Desempenho: respostas rápidas (até 2s). | Entrevista 3 |
| RNF022 | Disponibilidade: acesso remoto contínuo. | Entrevista 3 |
| RNF023 | Privacidade: restrição de acesso a dados clínicos. | Entrevista 3 |
| RNF024 | Auditabilidade: logs de acesso e modificações. | Entrevista 3 |

---
## 📜 Histórico de Versão

| Versão | Data       | Descrição                                         | Autores           | Revisores |
|-------:|------------|---------------------------------------------------|-------------------|-----------|
| 1.0    | 07/10/2025 | Criação da página de consolidação de requisitos     | Heloisa     | ---   |