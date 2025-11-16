# Consolidação dos Requisitos Elicitados

> Esta página apresenta a lista consolidada dos requisitos elicitados para o sistema SinPatinhas, com base no processo descrito no documento de [Elicitação de Requisitos](https://requisitos-de-software.github.io/2025.2-SinPatinhas/#/elicitacao/tecnicas_elicitacao/tec_elicitacao). A elicitação foi realizada por meio de análise de documentos oficiais, entrevistas com usuários e análise de sistemas concorrentes. Os requisitos foram classificados em funcionais (implementados e não implementados) e não funcionais, e cada item apresenta sua respectiva fonte de origem.

---

## Consolidação dos Requisitos Elicitados

### Requisitos Funcionais Implementados

## **Tabela 1 – Conjunto de requisitos funcionais implementados e elicitados**

| Código | Descrição | Fonte |
| :--- | :--- | :--- |
|<a id="rf001"></a>**RF001**| Cadastro de tutores com dados pessoais. | [RF001](metodologias/tec_elicitacao.md#rf001) |
|<a id="rf002"></a>**RF002**| Cadastro de animais vinculados ao tutor. | [RF002](metodologias/tec_elicitacao.md#rf002) |
|<a id="rf003"></a>**RF003**| Geração de número de Registro Geral do Animal (RGA). | [RF003](metodologias/tec_elicitacao.md#rf003) |
|<a id="rf004"></a>**RF004**| Associação de microchip ao cadastro. | [RF004](metodologias/tec_elicitacao.md#rf004) |
|<a id="rf005"></a>**RF005**| Emissão de documento oficial de identificação (RG Pet). | [RF005](metodologias/tec_elicitacao.md#rf005) |
|<a id="rf006"></a>**RF006**| Consulta pública via RGA ou microchip. | [RF006](metodologias/tec_elicitacao.md#rf006) |
|<a id="rf007"></a>**RF007**| Atualização do status do animal (perdido, encontrado, óbito, transferência). | [RF007](metodologias/tec_elicitacao.md#rf007) |
|<a id="rf008"></a>**RF008**| Registro do histórico de saúde por veterinários. | [RF008](metodologias/tec_elicitacao.md#rf008) |
|<a id="rf009"></a>**RF009**| Transferência de titularidade do animal. | [RF009](metodologias/tec_elicitacao.md#rf009) |
|<a id="rf010"></a>**RF010**| Perfis de acesso distintos (Tutor e Veterinário). | [RF010](metodologias/tec_elicitacao.md#rf010) |
|<a id="rf011"></a>**RF011**| Relatórios e estatísticas para órgãos públicos. | [RF011](metodologias/tec_elicitacao.md#rf011) |
|<a id="rf012"></a>**RF012**| Permitir login integrado via Gov.br para tutores e profissionais. | [RF012](metodologias/tec_elicitacao.md#rf012) |
|<a id="rf013"></a>**RF013**| Preenchimento automático de dados pessoais do tutor via Gov.br. | [RF013](metodologias/tec_elicitacao.md#rf013) |
|<a id="rf014"></a>**RF014**| Emissão de carteirinha digital com QR Code. | [RF014](metodologias/tec_elicitacao.md#rf014) |
|<a id="rf015"></a>**RF015**| Registro opcional do número de microchip e exibição na carteirinha digital. | [RF015](metodologias/tec_elicitacao.md#rf015) |
|<a id="rf016"></a>**RF016**| Registro oficial de procedimentos veterinários (castração, vacinas, microchipagem). | [RF016](metodologias/tec_elicitacao.md#rf016) |
|<a id="rf017"></a>**RF017**| Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos). | [RF017](metodologias/tec_elicitacao.md#rf017) |
|<a id="rf018"></a>**RF018**| Envio de notificações/campanhas e publicação de materiais educativos. | [RF018](metodologias/tec_elicitacao.md#rf018) |
|<a id="rf019"></a>**RF019**| Integração com políticas públicas e relatórios para programas sociais. | [RF019](metodologias/tec_elicitacao.md#rf019) |
|<a id="rf020"></a>**RF020**| Garantir acesso nacional via internet, com escalabilidade. | [RF020](metodologias/tec_elicitacao.md#rf020) |
|<a id="rf021"></a>**RF021**| Cadastro de perfil do animal. | [RF021](metodologias/tec_elicitacao.md#rf021) |
|<a id="rf022"></a>**RF022**| Registro do histórico de vacinas. | [RF022](metodologias/tec_elicitacao.md#rf022) |
|<a id="rf023"></a>**RF023**| Cadastro de informações de contato do tutor. | [RF023](metodologias/tec_elicitacao.md#rf023) |
|<a id="rf024"></a>**RF024**| Gerenciamento de múltiplos animais. | [RF024](metodologias/tec_elicitacao.md#rf024) |
|<a id="rf025"></a>**RF025**| Compartilhamento de informações com familiares. | [RF025](metodologias/tec_elicitacao.md#rf025) |
|<a id="rf026"></a>**RF026**| Notificações de vacinas futuras/atrasadas. | [RF026](metodologias/tec_elicitacao.md#rf026) |
|<a id="rf027"></a>**RF027**| Registro da localização do animal ou tutor. | [RF027](metodologias/tec_elicitacao.md#rf027) |
|<a id="rf028"></a>**RF028**| Permitir busca e recuperação de animais perdidos ou abandonados. | [RF028](metodologias/tec_elicitacao.md#rf028) |
|<a id="rf029"></a>**RF029**| Prontuário digital centralizando histórico de saúde e vacinação. | [RF029](metodologias/tec_elicitacao.md#rf029) |
|<a id="rf030"></a>**RF030**| Funcionalidade para facilitar a adoção de animais. | [RF030](metodologias/tec_elicitacao.md#rf030) |
|<a id="rf031"></a>**RF031**| Notificações automáticas para vacinas e lembretes de medicação. | [RF031](metodologias/tec_elicitacao.md#rf031) |
|<a id="rf032"></a>**RF032**| Registro de informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie e endereço do tutor). | [RF032](metodologias/tec_elicitacao.md#rf032) |
|<a id="rf033"></a>**RF033**| Área de instruções integradas (manual digital). | [RF033](metodologias/tec_elicitacao.md#rf033) |
|<a id="rf034"></a>**RF034**| Upload de foto do animal. | [RF034](metodologias/tec_elicitacao.md#rf034) |
|<a id="rf035"></a>**RF035**| Cadastro/atualização de endereço do tutor. | [RF035](metodologias/tec_elicitacao.md#rf035) |
|<a id="rf036"></a>**RF036**| Módulo para registro/visualização de exames do animal. | [RF036](metodologias/tec_elicitacao.md#rf036) |
|<a id="rf037"></a>**RF037**| Acesso via celular para consulta fora da clínica. | [RF037](metodologias/tec_elicitacao.md#rf037) |
|<a id="rf038"></a>**RF038**| Acesso remoto aos dados do animal. | [RF038](metodologias/tec_elicitacao.md#rf038) |
|<a id="rf039"></a>**RF039**| Integração entre clínicas veterinárias, permitindo visualização do prontuário por outros veterinários. | [RF039](metodologias/tec_elicitacao.md#rf039) |
|<a id="rf040"></a>**RF040**| Cadastro de ONGs e associações para controle de animais resgatados e adotados. | [RF040](metodologias/tec_elicitacao.md#rf040) |
|<a id="rf041"></a>**RF041**| Rastreamento de doações e adoções, registrando doadores, adotantes e datas. | [RF041](metodologias/tec_elicitacao.md#rf041) |


### Requisitos Funcionais Não Implementados

<p><strong>Tabela 2 – Conjunto de requisitos funcionais não implementados elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
|<a id="rfni001"></a>**RFNI001**| Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. | [RFNI007](metodologias/tec_elicitacao.md#rfni007) |
|<a id="rfni002"></a>**RFNI002**| Implementar filtro por distância para localizar clínicas próximas. | [RFNI008](metodologias/tec_elicitacao.md#rfni008) |
|<a id="rfni003"></a>**RFNI003**| Listagem de tratamentos e serviços oferecidos por clínicas/hospitais. | [RFNI009](metodologias/tec_elicitacao.md#rfni009) |
|<a id="rfni004"></a>**RFNI004**| Filtro por especialidade veterinária. | [RFNI010](metodologias/tec_elicitacao.md#rfni010) |
|<a id="rfni005"></a>**RFNI005**| Informações sobre horários de funcionamento de clínicas/hospitais. | [RFNI011](metodologias/tec_elicitacao.md#rfni011) |
|<a id="rfni006"></a>**RFNI006**| Indicadores visuais de aberto/fechado no mapa e perfis. | [RFNI012](metodologias/tec_elicitacao.md#rfni012) |
|<a id="rfni007"></a>**RFNI007**| Pesquisa de clínicas/hospitais por médico veterinário vinculado. | [RFNI013](metodologias/tec_elicitacao.md#rfni013) |
|<a id="rfni008"></a>**RFNI008**| Campo para clínicas/hospitais informarem preços dos principais procedimentos. | [RFNI014](metodologias/tec_elicitacao.md#rfni014) |
|<a id="rfni009"></a>**RFNI009**| Médicos veterinários indicarem se realizam atendimentos domiciliares. | [RFNI015](metodologias/tec_elicitacao.md#rfni015) |
|<a id="rfni010"></a>**RFNI010**| Sistema de avaliação numérica para estabelecimentos. | [RFNI016](metodologias/tec_elicitacao.md#rfni016) |
|<a id="rfni011"></a>**RFNI011**| Sistema de avaliação numérica para médicos veterinários. | [RFNI017](metodologias/tec_elicitacao.md#rfni017) |
|<a id="rfni012"></a>**RFNI012**| Envio de comentários/feedbacks sobre estabelecimentos. | [RFNI018](metodologias/tec_elicitacao.md#rfni018) |
|<a id="rfni013"></a>**RFNI013**| Envio de comentários/feedbacks sobre médicos veterinários. | [RFNI019](metodologias/tec_elicitacao.md#rfni019) |
|<a id="rfni014"></a>**RFNI014**| Indicador visual da média de avaliações no perfil de clínicas/hospitais. | [RFNI020](metodologias/tec_elicitacao.md#rfni020) |
|<a id="rfni015"></a>**RFNI015**| Indicador visual da média de avaliações no perfil de médicos veterinários. | [RFNI021](metodologias/tec_elicitacao.md#rfni021) |
|<a id="rfni016"></a>**RFNI016**| Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais). | [RF030](metodologias/tec_elicitacao.md#rf030) e [RFNI001](metodologias/tec_elicitacao.md#rfni001) |
|<a id="rfni017"></a>**RFNI017**| Alertas e notificações automáticas para vacinas e lembretes de medicação. | [RF031](metodologias/tec_elicitacao.md#rf031) e [RFNI002](metodologias/tec_elicitacao.md#rfni002) |
|<a id="rfni018"></a>**RFNI018**| Integração direta com parceiros (clínicas, ONGs, pet shops). | [RNFNI003](metodologias/tec_elicitacao.md#rnfni003) |
|<a id="rfni019"></a>**RFNI019**| Área de instruções integradas (manual digital) explicando passo a passo o uso das funções. | [RF033](metodologias/tec_elicitacao.md#rf033) e [RFNI003](metodologias/tec_elicitacao.md#rfni003) |
|<a id="rfni020"></a>**RFNI020**| Emissão de alertas de acesso suspeito ou tentativas de violação. | [RF043](metodologias/tec_elicitacao.md#rf043) e [RFNI004](metodologias/tec_elicitacao.md#rfni004) |
|<a id="rfni021"></a>**RFNI021**| Notificação periódica para atualização de dados e fotos do animal. | [RF044](metodologias/tec_elicitacao.md#rf044) e [RFNI005](metodologias/tec_elicitacao.md#rfni005) |
|<a id="rfni022"></a>**RFNI022**| Vincular foto do tutor ao registro de adoção. | [RF045](metodologias/tec_elicitacao.md#rf045) e [RFNI006](metodologias/tec_elicitacao.md#rfni006) |

### Requisitos Não Funcionais Não Implementados

<p><strong>Tabela 3 – Conjunto de requisitos não funcionais não implementados elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
|<a id="rnfni001"></a>**RNFNI001**| Acesso via web e mobile (prioridade no mobile). | [RNF004](metodologias/tec_elicitacao.md#rnf004) e [RNFNI001](metodologias/tec_elicitacao.md#rnfni001) |
|<a id="rnfni002"></a>**RNFNI002**| Funcionalidades offline. | [RNF005](metodologias/tec_elicitacao.md#rnf005) e [RNFNI002](metodologias/tec_elicitacao.md#rnfni002) |
|<a id="rnfni003"></a>**RNFNI003**| Integração direta com parceiros (clínicas, ONGs, pet shops). | [RNFNI003](metodologias/tec_elicitacao.md#rnfni003) |

### Requisitos Não Funcionais

<p><strong>Tabela 4 – Conjunto de requisitos não funcionais elicitados.</strong></p>

| Código  | Descrição | Fonte |
|---------|-----------|-------|
|<a id="rnf001"></a>**RNF001**| Conformidade com a LGPD. | [RNF009](metodologias/tec_elicitacao.md#rnf009) |
|<a id="rnf002"></a>**RNF002**| Disponibilidade: 99,8% de uptime (24/7). | [RNF014](metodologias/tec_elicitacao.md#rnf014) e [RNF030](metodologias/tec_elicitacao.md#rnf030) |
|<a id="rnf003"></a>**RNF003**| Usabilidade: interface intuitiva para cidadãos. | [RNF001](metodologias/tec_elicitacao.md#rnf001) |
|<a id="rnf004"></a>**RNF004**| Desempenho: resposta em consultas públicas < 2s. | [RNF013](metodologias/tec_elicitacao.md#rnf013) e [RNF029](metodologias/tec_elicitacao.md#rnf029) |
|<a id="rnf005"></a>**RNF005**| Compatibilidade: suporte a navegadores principais e responsividade mobile. | [RNF004](metodologias/tec_elicitacao.md#rnf004) e [RNF006](metodologias/tec_elicitacao.md#rnf006) |
|<a id="rnf006"></a>**RNF006**| Integração: APIs para integração futura com clínicas e órgãos públicos. | [RNF007](metodologias/tec_elicitacao.md#rnf007), [RNF011](metodologias/tec_elicitacao.md#rnf011) e [RNF027](metodologias/tec_elicitacao.md#rnf027) |
|<a id="rnf007"></a>**RNF007**| Sistema fácil e intuitivo. | [RNF001](metodologias/tec_elicitacao.md#rnf001) e [RNF017](metodologias/tec_elicitacao.md#rnf017) |
|<a id="rnf008"></a>**RNF008**| Design de interface limpo e organizado. | [RNF002](metodologias/tec_elicitacao.md#rnf002) e [RNF018](metodologias/tec_elicitacao.md#rnf018) |
|<a id="rnf009"></a>**RNF009**| Confiabilidade: garantia contra perda de dados. | [RNF003](metodologias/tec_elicitacao.md#rnf003), [RNF010](metodologias/tec_elicitacao.md#rnf010), [RNF019](metodologias/tec_elicitacao.md#rnf019) e [RNF026](metodologias/tec_elicitacao.md#rnf026) |
|<a id="rnf010"></a>**RNF010**| Acessibilidade: acesso via web e mobile (prioridade mobile). | [RNF004](metodologias/tec_elicitacao.md#rnf004), [RNF006](metodologias/tec_elicitacao.md#rnf006) e [RNF012](metodologias/tec_elicitacao.md#rnf012) |
|<a id="rnf011"></a>**RNF011**| Disponibilidade/desempenho: funcionalidades offline. | [RNF005](metodologias/tec_elicitacao.md#rnf005) |
|<a id="rnf012"></a>**RNF012**| Usabilidade: sistema claro e fácil de entender. | [RNF001](metodologias/tec_elicitacao.md#rnf001) e [RNF020](metodologias/tec_elicitacao.md#rnf020) |
|<a id="rnf013"></a>**RNF013**| Compatibilidade/acessibilidade: multiplataforma, prioridade mobile. | [RNF006](metodologias/tec_elicitacao.md#rnf006), [RNF021](metodologias/tec_elicitacao.md#rnf021) e [RNF028](metodologias/tec_elicitacao.md#rnf028) |
|<a id="rnf014"></a>**RNF014**| Integração com clínicas, ONGs e pet shops. | [RNF007](metodologias/tec_elicitacao.md#rnf007), [RNF011](metodologias/tec_elicitacao.md#rnf011), [RNF022](metodologias/tec_elicitacao.md#rnf022) e [RNF027](metodologias/tec_elicitacao.md#rnf027) |
|<a id="rnf015"></a>**RNF015**| Utilidade: substituir documentos/agendas físicas. | [RNF008](metodologias/tec_elicitacao.md#rnf008) e [RNF023](metodologias/tec_elicitacao.md#rnf023) |
|<a id="rnf016"></a>**RNF016**| Usabilidade para profissionais com pouca afinidade tecnológica. | [RNF001](metodologias/tec_elicitacao.md#rnf001) e [RNF024](metodologias/tec_elicitacao.md#rnf024) |
|<a id="rnf017"></a>**RNF017**| Segurança: alertas de acesso não autorizado. | [RNF009](metodologias/tec_elicitacao.md#rnf009) e [RNF025](metodologias/tec_elicitacao.md#rnf025) |
|<a id="rnf018"></a>**RNF018**| Confiabilidade: cópias de segurança automáticas. | [RNF010](metodologias/tec_elicitacao.md#rnf010) e [RNF026](metodologias/tec_elicitacao.md#rnf026) |
|<a id="rnf019"></a>**RNF019**| Integração entre clínicas, ONGs e Sinpatinhas. | [RNF007](metodologias/tec_elicitacao.md#rnf007), [RNF011](metodologias/tec_elicitacao.md#rnf011) e [RNF027](metodologias/tec_elicitacao.md#rnf027) |
|<a id="rnf020"></a>**RNF020**| Acessibilidade: dispositivos móveis e desktops. | [RNF006](metodologias/tec_elicitacao.md#rnf006), [RNF012](metodologias/tec_elicitacao.md#rnf012) e [RNF028](metodologias/tec_elicitacao.md#rnf028) |
|<a id="rnf021"></a>**RNF021**| Desempenho: respostas rápidas (até 2s). | [RNF013](metodologias/tec_elicitacao.md#rnf013) e [RNF029](metodologias/tec_elicitacao.md#rnf029) |
|<a id="rnf022"></a>**RNF022**| Disponibilidade: acesso remoto contínuo. | [RNF014](metodologias/tec_elicitacao.md#rnf014) e [RNF030](metodologias/tec_elicitacao.md#rnf030) |
|<a id="rnf023"></a>**RNF023**| Privacidade: restrição de acesso a dados clínicos. | [RNF015](metodologias/tec_elicitacao.md#rnf015) e [RNF031](metodologias/tec_elicitacao.md#rnf031) |
|<a id="rnf024"></a>**RNF024**| Auditabilidade: logs de acesso e modificações. | [RNF016](metodologias/tec_elicitacao.md#rnf016) e [RNF032](metodologias/tec_elicitacao.md#rnf032) |

---
## Tabela de Contribuição

| **Nome**           | **Contribuição (%)** | **Função**                                      |
|---------------------|----------------------|-------------------------------------------------|
| Heloisa      | 33%                  | Criação da página de requisitos elicitados     |
| Antonio          | 33%                   | Estruturação e rotas para rastreabilidade |
| Pedro Gomes           | 33%                   | Revisão e correção dos links para garantir a rastreabilidade |
---

## 📜 Histórico de Versão

| Versão | Data       | Descrição                                         | Autores           | Revisores |
|-------:|------------|---------------------------------------------------|-------------------|-----------|
| 1.0    | 07/10/2025 | Criação da página de consolidação de requisitos     | Heloisa     | Letícia  |
| 1.1    | 12/10/2025 | Criação de estruturação e das rotas para os que foram consolidados  | Antonio     | --  |
| 1.2    | 21/10/2025 | Padronização com IDs e links para fontes dos requisitos | Pedro Gomes | Antonio |
| 1.3    | 21/10/2025 | Adição de RF041 e referências completas aos requisitos do documento fonte | Pedro Gomes | Antonio |


---
