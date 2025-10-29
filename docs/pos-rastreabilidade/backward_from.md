# Introdução

A rastreabilidade é um dos aspectos fundamentais da engenharia de requisitos, pois permite acompanhar a origem e o impacto de cada requisito ao longo do projeto. De acordo com Vazquez e Simões (2016, sȩc. 9.6.1), “a rastreabilidade dos requisitos é o processo de identificar e documentar os elos (ou vínculos) que envolvem um determinado requisito, para que seja possível rastrear sua origem, os artefatos derivados e os demais requisitos relacionados”. <a href="assets/images/rastreabilidade/rastreabilidade.png" target="_blank">1</a>

Segundo Sayão e Leite (2005) a rastreabilidade pode ser dividida nos tipos: backward-from, forward-from, backward-to e forward-to onde: <a href="assets/images/rastreabilidade/rast_tipos.png" target="_blank">2</a>

- Rastreabilidade forward-from: liga os requisitos aos artefatos gerados a partir desse requisito.
- Rastreabilidade backward-from: liga os requisitos às suas fontes.
- Rastreabilidade forward-to: liga os documentos do plano de negócio aos requisitos.
- Rastreabilidade backward-to: liga os artefatos de desenho e implementação aos requisitos.

# Objetivos

Realizar a análise da rastreabilidade backward-from, com o propósito de identificar e documentar a origem de cada requisito. Por meio da matriz de rastreabilidade, pretende-se fornecer uma compreensão clara sobre as origens de cada requisito.

# Metodologia

Para a execução da rastreabilidade backward-from, foi desenvolvida uma matriz de rastreabilidade em que as duas primeiras colunas identificam o requisito, a terceira coluna especifica a fonte de origem do requisito e a última coluna registra o status de implementação (sim para implementado e não para não implementado).

# Rastreabilidade Backward-from

## Legenda da matriz

<font><p style="text-align: center">**Tabela 1** - Códigos utilizados na Tabela 2 e seus significados.</p></font>

|  **Identificador** |                                                 **Significado**                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **#RFXX**    | Código para um requisito funcional |
| **#RNFXX**   | Código para um requisito não funcional |
| **#RFNIXX**  | Código para um requisito funcional não implementado |
| **#RNFNIXX** | Código para um requisito não funcional não implementado |

<font><p style="text-align: center">**Tabela 2** - Requisitos e suas fontes.</p></font>

## Matriz de rastreabilidade
| ID | Descrição | Fonte (técnica — requisito(s) fonte) | Implementado |
|:---|:---|:---|:---|
| RF001 | Cadastro de tutores com dados pessoais. | Análise de Documentos — [RF001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf001) | Sim |
| RF002 | Cadastro de animais vinculados ao tutor. | Análise de Documentos — [RF002](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf002) | Sim |
| RF003 | Geração de número de Registro Geral do Animal (RGA). | Análise de Documentos — [RF003](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf003) | Sim |
| RF004 | Associação de microchip ao cadastro. | Análise de Documentos — [RF004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf004) | Sim |
| RF005 | Emissão de documento oficial de identificação (RG Pet). | Análise de Documentos — [RF005](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf005) | Sim |
| RF006 | Consulta pública via RGA ou microchip. | Análise de Documentos — [RF006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf006) | Sim |
| RF007 | Atualização do status do animal (perdido, encontrado, óbito, transferência). | Análise de Documentos — [RF007](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf007) | Sim |
| RF008 | Registro do histórico de saúde por veterinários. | Análise de Documentos — [RF008](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf008) | Sim |
| RF009 | Transferência de titularidade do animal. | Análise de Documentos — [RF009](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf009) | Sim |
| RF010 | Perfis de acesso distintos (Tutor e Veterinário). | Análise de Documentos — [RF010](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf010) | Sim |
| RF011 | Relatórios e estatísticas para órgãos públicos. | Análise de Documentos — [RF011](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf011) | Sim |
| RF012 | Permitir login integrado via Gov.br para tutores e profissionais. | Análise de Documentos — [RF012](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf012) | Sim |
| RF013 | Preenchimento automático de dados pessoais do tutor via Gov.br. | Análise de Documentos — [RF013](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf013) | Sim |
| RF014 | Emissão de carteirinha digital com QR Code. | Análise de Documentos — [RF014](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf014) | Sim |
| RF015 | Registro opcional do número de microchip e exibição na carteirinha digital. | Análise de Documentos — [RF015](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf015) | Sim |
| RF016 | Registro oficial de procedimentos veterinários (castração, vacinas, microchipagem). | Análise de Documentos — [RF016](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf016) | Sim |
| RF017 | Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos). | Análise de Documentos — [RF017](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf017) | Sim |
| RF018 | Envio de notificações/campanhas e publicação de materiais educativos. | Análise de Documentos — [RF018](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf018) | Sim |
| RF019 | Integração com políticas públicas e relatórios para programas sociais. | Análise de Documentos — [RF019](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf019) | Sim |
| RF020 | Garantir acesso nacional via internet, com escalabilidade. | Análise de Documentos — [RF020](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf020) | Sim |
| RF021 | Cadastro de perfil do animal. | Entrevista — Ana Beatriz — [RF021](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf021) | Sim |
| RF022 | Registro do histórico de vacinas. | Entrevista — Ana Beatriz — [RF022](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf022) | Sim |
| RF023 | Cadastro de informações de contato do tutor. | Entrevista — Ana Beatriz — [RF023](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf023) | Sim |
| RF024 | Gerenciamento de múltiplos animais. | Entrevista — Ana Beatriz — [RF024](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf024) | Sim |
| RF025 | Compartilhamento de informações com familiares. | Entrevista — Ana Beatriz — [RF025](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf025) | Sim |
| RF026 | Notificações de vacinas futuras/atrasadas. | Entrevista — Ana Beatriz — [RF026](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf026) | Sim |
| RF027 | Registro da localização do animal ou tutor. | Entrevista — Ana Beatriz — [RF027](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf027) | Sim |
| RF028 | Permitir busca e recuperação de animais perdidos ou abandonados. | Entrevista — Gustavo — [RF028](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf028) | Sim |
| RF029 | Prontuário digital centralizando histórico de saúde e vacinação. | Entrevista — Gustavo — [RF029](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf029) | Sim |
| RF030 | Funcionalidade para facilitar a adoção de animais. | Entrevista — Gustavo — [RF030](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf030) | Sim |
| RF031 | Notificações automáticas para vacinas e lembretes de medicação. | Entrevista — Gustavo — [RF031](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf031) | Sim |
| RF032 | Registro de informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie e endereço do tutor). | Entrevista — Gustavo — [RF032](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf032) | Sim |
| RF033 | Área de instruções integradas (manual digital). | Entrevista — Dra. Ilma Coutinho — [RF033](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf033) | Sim |
| RF034 | Upload de foto do animal. | Entrevista — Dra. Ilma Coutinho — [RF034](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf034) | Sim |
| RF035 | Cadastro/atualização de endereço do tutor. | Entrevista — Dra. Ilma Coutinho — [RF035](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf035) | Sim |
| RF036 | Módulo para registro/visualização de exames do animal. | Entrevista — Dra. Ilma Coutinho — [RF036](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf036) | Sim |
| RF037 | Acesso via celular para consulta fora da clínica. | Entrevista — Dra. Ilma Coutinho — [RF037](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf037) | Sim |
| RF038 | Acesso remoto aos dados do animal. | Entrevista — Dra. Ilma Coutinho — [RF038](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf038) | Sim |
| RF039 | Integração entre clínicas veterinárias, permitindo visualização do prontuário por outros veterinários. | Entrevista — Dra. Ilma Coutinho — [RF039](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf039) | Sim |
| RF040 | Cadastro de ONGs e associações para controle de animais resgatados e adotados. | Entrevista — Dra. Ilma Coutinho — [RF040](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf040) | Sim |
| RF041 | Rastreamento de doações e adoções, registrando doadores, adotantes e datas. | Entrevista — Dra. Ilma Coutinho — [RF041](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf041) | Sim |
| RFNI001 | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. | Entrevista — Gustavo — [RFNI001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni001) | Não |
| RFNI002 | Implementar filtro por distância para localizar clínicas próximas. | Entrevista — Gustavo — [RFNI002](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni002) | Não |
| RFNI003 | Listagem de tratamentos e serviços oferecidos por clínicas/hospitais. | Entrevista — Dra. Ilma Coutinho — [RFNI003](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni003) | Não |
| RFNI004 | Filtro por especialidade veterinária. | Entrevista — Dra. Ilma Coutinho — [RFNI004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni004) | Não |
| RFNI005 | Informações sobre horários de funcionamento de clínicas/hospitais. | Entrevista — Dra. Ilma Coutinho — [RFNI005](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni005) | Não |
| RFNI006 | Indicadores visuais de aberto/fechado no mapa e perfis. | Entrevista — Dra. Ilma Coutinho — [RFNI006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni006) | Não |
| RFNI007 | Pesquisa de clínicas/hospitais por médico veterinário vinculado. | Análise de sistemas concorrentes — [RFNI007](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni007) | Não |
| RFNI008 | Campo para clínicas/hospitais informarem preços dos principais procedimentos. | Análise de sistemas concorrentes — [RFNI008](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni008) | Não |
| RFNI009 | Médicos veterinários indicarem se realizam atendimentos domiciliares. | Análise de sistemas concorrentes — [RFNI009](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni009) | Não |
| RFNI010 | Sistema de avaliação numérica para estabelecimentos. | Análise de sistemas concorrentes — [RFNI010](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni010) | Não |
| RFNI011 | Sistema de avaliação numérica para médicos veterinários. | Análise de sistemas concorrentes — [RFNI011](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni011) | Não |
| RFNI012 | Envio de comentários/feedbacks sobre estabelecimentos. | Análise de sistemas concorrentes — [RFNI012](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni012) | Não |
| RFNI013 | Envio de comentários/feedbacks sobre médicos veterinários. | Análise de sistemas concorrentes — [RFNI013](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni013) | Não |
| RFNI014 | Indicador visual da média de avaliações no perfil de clínicas/hospitais. | Análise de sistemas concorrentes — [RFNI014](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni014) | Não |
| RFNI015 | Indicador visual da média de avaliações no perfil de médicos veterinários. | Análise de sistemas concorrentes — [RFNI015](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni015) | Não |
| RFNI016 | Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais). | Análise de sistemas concorrentes / Entrevista — [RF030](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf030) e [RFNI001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni001) | Não |
| RFNI017 | Alertas e notificações automáticas para vacinas e lembretes de medicação. | Análise de sistemas concorrentes / Entrevista — [RF031](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf031) e [RFNI002](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni002) | Não |
| RFNI018 | Integração direta com parceiros (clínicas, ONGs, pet shops). | Análise de sistemas concorrentes — [RFNI018](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni018) | Não |
| RFNI019 | Área de instruções integradas (manual digital). | Análise de sistemas concorrentes / Entrevista — [RF033](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf033) e [RFNI003](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni003) | Não |
| RFNI020 | Emissão de alertas de acesso suspeito ou tentativas de violação. | Entrevista — Dra. Ilma Coutinho — [RF043](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf043) e [RFNI004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni004) | Não |
| RFNI021 | Notificação periódica para atualização de dados e fotos do animal. | Entrevista — Dra. Ilma Coutinho — [RF044](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf044) e [RFNI005](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni005) | Não |
| RFNI022 | Vincular foto do tutor ao registro de adoção. | Entrevista — Dra. Ilma Coutinho — [RF045](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rf045) e [RFNI006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rfni006) | Não |
| RNFNI001 | Acesso via web e mobile (prioridade no mobile). | Análise de Documentos - [RNF004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf004) e Entrevista — Ana Beatriz — [RNFNI001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnfni001) | Não |
| RNFNI002 | Funcionalidades offline. | Análise de Documentos - [RNF005](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf005) e Entrevista — Ana Beatriz — [RNFNI002](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnfni002) | Não |
| RNFNI003 | Integração direta com parceiros (clínicas, ONGs, pet shops). | Entrevista — Gustavo — [RNFNI003](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnfni003) | Não |
| RNF001 | Conformidade com a LGPD. | Análise de Documentos — [RNF009](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf009) | Sim |
| RNF002 | Disponibilidade: 99,8% de uptime (24/7). | Análise de Documentos — [RNF014](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf014) e [RNF030](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf030) | Sim |
| RNF003 | Usabilidade: interface intuitiva para cidadãos. | Análise de Documentos — [RNF001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf001) | Sim |
| RNF004 | Desempenho: resposta em consultas públicas < 2s. | Análise de Documentos — [RNF013](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf013) e [RNF029](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf029) | Sim |
| RNF005 | Compatibilidade: suporte a navegadores principais e responsividade mobile. | Análise de Documentos — [RNF004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf004) e [RNF006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf006) | Sim |
| RNF006 | Integração: APIs para integração futura com clínicas e órgãos públicos. | Análise de Documentos — [RNF007](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf007), [RNF011](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf011) e [RNF027](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf027) | Sim |
| RNF007 | Sistema fácil e intuitivo. | Análise de Documentos / Entrevista — [RNF001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf001) e [RNF017](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf017) | Sim |
| RNF008 | Design de interface limpo e organizado. | Análise de Documentos / Entrevista — [RNF002](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf002) e [RNF018](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf018) | Sim |
| RNF009 | Confiabilidade: garantia contra perda de dados. | Análise de Documentos — [RNF003](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf003), [RNF010](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf010), [RNF019](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf019) e [RNF026](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf026) | Sim |
| RNF010 | Acessibilidade: acesso via web e mobile (prioridade mobile). | Análise de Documentos — [RNF004](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf004), [RNF006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf006) e [RNF012](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf012) | Sim |
| RNF011 | Disponibilidade/desempenho: funcionalidades offline. | Análise de Documentos — [RNF005](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf005) | Sim |
| RNF012 | Usabilidade: sistema claro e fácil de entender. | Análise de Documentos / Entrevista — [RNF001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf001) e [RNF020](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf020) | Sim |
| RNF013 | Compatibilidade/acessibilidade: multiplataforma, prioridade mobile. | Análise de Documentos / Entrevista — [RNF006](../elicitacao/tecnicas_ellicitacao/metodologias/tec_elicitacao.md#rnf006), [RNF021](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf021) e [RNF028](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf028) | Sim |
| RNF014 | Integração com clínicas, ONGs e pet shops. | Análise de Documentos — [RNF007](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf007), [RNF011](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf011), [RNF022](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf022) e [RNF027](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf027) | Sim |
| RNF015 | Utilidade: substituir documentos/agendas físicas. | Análise de Documentos — [RNF008](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf008) e [RNF023](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf023) | Sim |
| RNF016 | Usabilidade para profissionais com pouca afinidade tecnológica. | Análise de Documentos — [RNF001](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf001) e [RNF024](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf024) | Sim |
| RNF017 | Segurança: alertas de acesso não autorizado. | Entrevista — Ana Beatriz / Dra. Ilma Coutinho — [RNF009](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf009) e [RNF025](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf025) | Sim |
| RNF018 | Confiabilidade: cópias de segurança automáticas. | Entrevista — Ana Beatriz / Dra. Ilma Coutinho — [RNF010](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf010) e [RNF026](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf026) | Sim |
| RNF019 | Integração entre clínicas, ONGs e Sinpatinhas. | Entrevista — Ana Beatriz / Dra. Ilma Coutinho — [RNF007](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf007), [RNF011](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf011) e [RNF027](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf027) | Sim |
| RNF020 | Acessibilidade: dispositivos móveis e desktops. | Entrevista — Gustavo / Dra. Ilma Coutinho — [RNF006](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf006), [RNF012](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf012) e [RNF028](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf028) | Sim |
| RNF021 | Desempenho: respostas rápidas (até 2s). | Entrevista — Gustavo / Dra. Ilma Coutinho — [RNF013](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf013) e [RNF029](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf029) | Sim |
| RNF022 | Disponibilidade: acesso remoto contínuo. | Análise de Documentos — [RNF014](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf014) e [RNF030](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf030) | Sim |
| RNF023 | Privacidade: restrição de acesso a dados clínicos. | Análise de Documentos — [RNF015](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf015) e [RNF031](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf031) | Sim |
| RNF024 | Auditabilidade: logs de acesso e modificações. | Análise de Documentos — [RNF016](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf016) e [RNF032](../elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao.md#rnf032) | Sim |

Autor: Pedro Gomes

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.
A base conceitual foi desenvolvida com base nos fundamentos de **Sayão e Leite (2005)** e **Vazquez (2016)**.
 
---

---

# Referência Bibliográfica

> SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. Rastreabilidade de Requisitos. Monografias em
Ciência da Computação, Rio de Janeiro, n. 20/05, p. 1-22, maio 2005.

> VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de Requisitos: Software Orientado ao Negócio. Rio de Janeiro : Brasport, 2016.

# Histórico de Versões

| Data       | Versão | Descrição                                 | Autor                                      | Revisor                                     |
| :--------: | :----: | :---------------------------------------- | :----------------------------------------: | :----------------------------------------: |
| 26/10/2025 |  1.0   | Documentação da matriz de rastreabilidade backward-from| Pedro Gomes |  |
