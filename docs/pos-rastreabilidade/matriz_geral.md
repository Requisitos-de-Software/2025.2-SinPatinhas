# Matriz de Rastreabilidade – Projeto SinPatinhas

## Introdução

A **rastreabilidade de requisitos é uma prática essencial no gerenciamento de projetos de software**, permitindo o acompanhamento do ciclo de vida de cada requisito — desde sua origem até a implementação e validação.  

No contexto do **Projeto SinPatinhas**, a matriz de rastreabilidade foi elaborada com o propósito de garantir que todos os requisitos definidos sejam devidamente atendidos, testados e validados, assegurando a consistência e a qualidade do produto final.  

De acordo com Sayão e Leite <a id="anchor_1" href="#REF1">[1]</a>, a rastreabilidade auxilia tanto em aspectos técnicos quanto gerenciais, oferecendo suporte à análise de impacto, controle de mudanças, validação e verificação de requisitos.

---

## Conceito e Classificação da Rastreabilidade

A rastreabilidade é definida como a **capacidade de estabelecer e seguir o vínculo entre os requisitos e seus artefatos associados**, como documentos, modelos, código e casos de teste.  

Ela permite compreender as relações de dependência entre os elementos do sistema, garantindo que modificações sejam devidamente propagadas.  

Segundo Sayão e Leite <a id="anchor_1" href="#REF1">[1]</a>, a rastreabilidade se divide em duas grandes categorias:

- **Pré-rastreabilidade**: documenta o contexto e as fontes das quais os requisitos emergem (como atas, entrevistas, normas).  
- **Pós-rastreabilidade**: vincula os requisitos à arquitetura, código e casos de teste, permitindo a verificação de sua implementação.  

Essas relações podem ser classificadas ainda como:
- **Forward-to / Backward-from** (antes da implementação): ligação entre fontes e requisitos.  
- **Forward-from / Backward-to** (depois da implementação): ligação entre requisitos e artefatos de projeto, código e testes.  

---

# **Metodologia**

Para a construção da **matriz de rastreabilidade** do projeto **SinPatinhas**, foi adotado um modelo inspirado no formato utilizado no repositório da disciplina de Requisitos de Software, tomando como referência o projeto [Bilheteria Digital](https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/rastreabilidade/matriz-geral/)<a id="anchor_2" href="#REF2">[2]</a>.

O objetivo dessa matriz é facilitar a visualização das conexões entre os requisitos levantados e os artefatos produzidos, demonstrando como cada requisito foi tratado ao longo do desenvolvimento do sistema. Dessa forma, é possível acompanhar a origem, a implementação e os vínculos entre as partes que compõem o projeto.

A matriz foi estruturada com **seis colunas principais**, descritas a seguir:

- **ID**: identifica de forma única cada requisito;
- **Descrição**: apresenta um resumo do que o requisito propõe;
- **Pré-Rastreabilidade**: indica a técnica de elicitação ou fonte que originou o requisito;
- **Implementado?**: informa se o requisito foi implementado no sistema (Sim, Não ou Parcialmente);
- **Artefatos**: relaciona os artefatos criados com base no requisito (como diagramas, protótipos e documentos);
- **Elos**: mostra as conexões entre os requisitos e os artefatos correspondentes.

---

# **Matriz Geral**

Com base nessa estrutura, foi elaborada a matriz de rastreabilidade representada a seguir.

<p style="text-align: center">**Tabela 1** - Matriz de rastreabilidade do projeto SinPatinhas.</p>

| **ID** | **Descrição** | **Pré-Rastreabilidade** | **Implementado** | **Artefatos Criados** | **Elos** |
| ------- | ------------- | ---------------------- | ---------------- | --------------------- | -------- |
| [RF001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf001) | Cadastro de tutores com dados pessoais. | - | ✅ | - | [LX001](../modelagem/gravacoes/antonio/lexicos.md#lx001), [LX006](../modelagem/gravacoes/antonio/lexicos.md#lx006), [LX007](../modelagem/gravacoes/antonio/lexicos.md#lx007) |
| [RF002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf002) | Cadastro de animais vinculados ao tutor. | - | ✅ | - | [LX001](../modelagem/gravacoes/antonio/lexicos.md#lx001), [LX006](../modelagem/gravacoes/antonio/lexicos.md#lx006), [LX007](../modelagem/gravacoes/antonio/lexicos.md#lx007) |
| [RF003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf003) | Geração de número de Registro Geral do Animal (RGA). | - | ✅ | - | - |
| [RF004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf004) | Associação de microchip ao cadastro. | - | ✅ | - | [LX002](../modelagem/gravacoes/antonio/lexicos.md#lx002) |
| [RF005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf005) | Emissão de documento oficial de identificação (RG Pet). | - | ✅ | - | - |
| [RF006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006) | Consulta pública via RGA ou microchip. | [ES002](../modelagem/gravacoes/antonio/especificacao.md) | ✅ | - | [LX002](../modelagem/gravacoes/antonio/lexicos.md#lx002), [LX006](../modelagem/gravacoes/antonio/lexicos.md#lx006) |
| [RF007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf007) | Atualização do status do animal (perdido, encontrado, óbito, transferência). | - | ✅ | - | [LX005](../modelagem/gravacoes/antonio/lexicos.md#lx005) |
| [RF008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf008) | Registro do histórico de saúde por veterinários. | - | ✅ | - | [LX004](../modelagem/gravacoes/antonio/lexicos.md#lx004), [LX007](../modelagem/gravacoes/antonio/lexicos.md#lx007) |
| [RF009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009) | Transferência de titularidade do animal. | - | ✅ | - | [LX003](../modelagem/gravacoes/antonio/lexicos.md#lx003), [LX005](../modelagem/gravacoes/antonio/lexicos.md#lx005), [LX007](../modelagem/gravacoes/antonio/lexicos.md#lx007) |
| [RF010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf010) | Perfis de acesso distintos (Tutor e Veterinário). | - | ✅ | - | - |
| [RF011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf011) | Relatórios e estatísticas para órgãos públicos. | - | ✅ | - | - |
| [RF012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf012) | Permitir login integrado via Gov.br para tutores e profissionais. | [ES001](../modelagem/gravacoes/antonio/especificacao.md) | ✅ | - | - |
| [RF013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf013) | Preenchimento automático de dados pessoais do tutor via Gov.br. | [ES001](../modelagem/gravacoes/antonio/especificacao.md) | ✅ | - | - |
| [RF014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014) | Emissão de carteirinha digital com QR Code. | - | ✅ | - | [LX004](../modelagem/gravacoes/antonio/lexicos.md#lx004) |
| [RF015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf015) | Registro opcional do número de microchip e exibição na carteirinha digital. | - | ✅ | - | - |
| [RF016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf016) | Registro oficial de procedimentos veterinários (castração, vacinas, microchipagem). | - | ✅ | - | [LX004](../modelagem/gravacoes/antonio/lexicos.md#lx004), [LX007](../modelagem/gravacoes/antonio/lexicos.md#lx007) |
| [RF017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf017) | Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos). | - | ✅ | [HU003](../modelagem/gravacoes/antonio/historias.md) | - |
| [RF018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) | Envio de notificações/campanhas e publicação de materiais educativos. | - | ✅ | [HU004](../modelagem/gravacoes/antonio/historias.md) | [LX005](../modelagem/gravacoes/antonio/lexicos.md#lx005) |
| [RF019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf019) | Integração com políticas públicas e relatórios para programas sociais. | - | ✅ | - | - |
| [RF020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf020) | Garantir acesso nacional via internet, com escalabilidade. | - | ✅ | - | - |
| [RF021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf021) | Cadastro de perfil do animal. | - | ✅ | - | - |
| [RF022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf022) | Registro do histórico de vacinas. | - | ✅ | - | - |
| [RF023](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf023) | Cadastro de informações de contato do tutor. | - | ✅ | - | - |
| [RF024](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf024) | Gerenciamento de múltiplos animais. | - | ✅ | - | - |
| [RF025](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf025) | Compartilhamento de informações com familiares. | - | ✅ | - | - |
| [RF026](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026) | Notificações de vacinas futuras/atrasadas. | - | ✅ | - | - |
| [RF027](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027) | Registro da localização do animal ou tutor. | - | ✅ | - | - |
| [RF028](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf028) | Permitir busca e recuperação de animais perdidos ou abandonados. | - | ✅ | - | - |
| [RF029](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf029) | Prontuário digital centralizando histórico de saúde e vacinação. | - | ✅ | - | - |
| [RF030](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf030) | Notificações automáticas para vacinas e lembretes de medicação. | - | ✅ | - | - |
| [RF031](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf031) | Registro de informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie, endereço do tutor). | - | ✅ | - | - |
| [RF032](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf032) | Área de instruções integradas (manual digital). | [UC007](../modelagem/gravacoes/mateus/caso_de_uso.md) | ✅ | [HU019](../../modelagem/gravacoes/mateus/historias.md) | [CEN07](../modelagem/gravacoes/mateus/cenarios.md), [EL021](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) |
| [RF033](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf033) | Upload de foto do animal. | - | ✅ | - | - |
| [RF034](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf034) | Cadastro/atualização de endereço do tutor. | - | ✅ | - | - |
| [RF035](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf035) | Módulo para registro/visualização de exames do animal. | - | ✅ | - | - |
| [RF036](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf036) | Acesso via celular para consulta fora da clínica. | - | ✅ | - | - |
| [RF037](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf037) | Acesso remoto aos dados do animal. | - | ✅ | - | - |
| [RF038](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf038) | Cadastro de ONGs/associações para controle de animais resgatados/adotados. | - | ✅ | - | - |
| [RF039](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf039) | Rastreamento de doações/adoções. | - | ✅ | - | - |
| [RF040](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf040) | Transferência de tutor preservando histórico. | - | ✅ | - | - |
| [RF041](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041) | Integração entre clínicas veterinárias permitindo visualização do prontuário. | - | ✅ | - | - |
| [RFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni001) | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. | - | ❌ | - | - |
| [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni002) | Implementar filtro por distância para localizar clínicas próximas. | - | ❌ | - | - |
| [RFNI003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni003) | Listagem de tratamentos e serviços oferecidos por clínicas/hospitais. | - | ❌ | - | - |
| [RFNI004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni004) | Filtro por especialidade veterinária. | - | ❌ | - | - |
| [RFNI005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni005) | Informações sobre horários de funcionamento de clínicas/hospitais. | - | ❌ | [HU005](../modelagem/gravacoes/antonio/historias.md) | - |
| [RFNI006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni006) | Indicadores visuais de aberto/fechado no mapa e perfis. | - | ❌ | - | - |
| [RFNI007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni007) | Pesquisa de clínicas/hospitais por médico veterinário vinculado. | - | ❌ | - | - |
| [RFNI008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni008) | Campo para clínicas/hospitais informarem preços dos principais procedimentos. | - | ❌ | - | - |
| [RFNI009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni009) | Médicos veterinários indicarem se realizam atendimentos domiciliares. | - | ❌ | - | - |
| [RFNI010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni010) | Sistema de avaliação numérica para estabelecimentos. | [UC001](../modelagem/gravacoes/antonio/caso_de_uso.md) | ❌ | - | - |
| [RFNI011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni011) | Sistema de avaliação numérica para médicos veterinários. | - | ❌ | - | - |
| [RFNI012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni012) | Envio de comentários/feedbacks sobre estabelecimentos. | - | ❌ | - | - |
| [RFNI013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni013) | Envio de comentários/feedbacks sobre médicos veterinários. | - | ❌ | - | - |
| [RFNI014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni014) | Indicador visual da média de avaliações no perfil de clínicas/hospitais. | - | ❌ | [HU006](../modelagem/gravacoes/antonio/historias.md) | - |
| [RFNI015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni015) | Indicador visual da média de avaliações no perfil de médicos veterinários. | - | ❌ | [HU021](../../modelagem/gravacoes/mateus/historias.md) | - |
| [RFNI016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) | Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais). | [UC001](../modelagem/gravacoes/antonio/caso_de_uso.md) | ❌ | [HU007](../modelagem/gravacoes/antonio/historias.md) | [CNR003](../modelagem/gravacoes/antonio/cenarios.md#cn004) |
| [RFNI017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni017) | Alertas e notificações automáticas para vacinas e lembretes de medicação. | - | ❌ | - | - |
| [RFNI018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) | Integração direta com parceiros (clínicas, ONGs, pet shops). | - | ❌ | [HU008](../modelagem/gravacoes/antonio/historias.md) | - |
| [RFNI019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni019) | Área de instruções integradas (manual digital). | [UC007](../modelagem/gravacoes/mateus/caso_de_uso.md) | ❌ | [HU019](../../modelagem/gravacoes/mateus/historias.md) | [CEN07](../modelagem/gravacoes/mateus/cenarios.md), [EL022](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) |
| [RFNI020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni020) | Emissão de alertas de acesso suspeito ou tentativas de violação. | - | ❌ | [HU023](../../modelagem/gravacoes/mateus/historias.md) | [EL023](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) |
| [RFNI021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021) | Notificação periódica para atualização de dados e fotos do animal. | [UC002](../modelagem/gravacoes/antonio/caso_de_uso.md), [UC008](../modelagem/gravacoes/mateus/caso_de_uso.md) | ❌ | [HU020](../../modelagem/gravacoes/mateus/historias.md) | [CEN08](../modelagem/gravacoes/mateus/cenarios.md), [CNR004](../modelagem/gravacoes/antonio/cenarios.md#cn004), [LX013](../modelagem/gravacoes/mateus/lexicos.md), [LX002](../modelagem/gravacoes/antonio/lexicos.md#lx002) |
| [RFNI022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni022) | Vincular foto do tutor ao registro de adoção. | - | ❌ | [HU024](../../modelagem/gravacoes/mateus/historias.md) | - |
| [RNFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) | Acesso via web e mobile (prioridade no mobile). | - | ❌ | - | - |
| [RNFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) | Funcionalidades offline. | - | ❌ | - | - |
| [RNFNI003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) | Integração direta com parceiros (clínicas, ONGs, pet shops). | - | ❌ | [HU008](../modelagem/gravacoes/antonio/historias.md) | - |
| [RNF001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | Segurança: Conformidade com a LGPD. | - | ✅ | - | [ES001](../modelagem/gravacoes/antonio/especificacao.md), [ES002](../modelagem/gravacoes/antonio/especificacao.md) |
| [RNF002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) | Disponibilidade: 99,8% de uptime (24/7). | - | ✅ | - | [ES001](../modelagem/gravacoes/antonio/especificacao.md), [ES002](../modelagem/gravacoes/antonio/especificacao.md) |
| [RNF003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | Usabilidade: interface intuitiva para cidadãos. | - | ✅ | - | [ES001](../modelagem/gravacoes/antonio/especificacao.md), [ES002](../modelagem/gravacoes/antonio/especificacao.md) |
| [RNF004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | Desempenho: resposta em consultas públicas < 2s. | - | ✅ | - | - |
| [RNF005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf005) | Compatibilidade: suporte a navegadores principais e responsividade mobile. | - | ✅ | - | [ES001](../modelagem/gravacoes/antonio/especificacao.md) |
| [RNF006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf006) | Integração: APIs para integração futura com clínicas e órgãos públicos. | - | ✅ | - | - |
| [RNF007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf007) | Acessibilidade: Sistema fácil e intuitivo. | - | ✅ | - | - |
| [RNF008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf008) | Usabilidade: Design de interface limpo e organizado. | - | ✅ | - | - |
| [RNF009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | Confiabilidade: garantia contra perda de dados. | - | ✅ | - | [ES002](../modelagem/gravacoes/antonio/especificacao.md) |
| [RNF010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf010) | Acessibilidade: acesso via web e mobile. | - | ✅ | - | - |
| [RNF011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf011) | Funcionalidades offline. | - | ✅ | - | - |
| [RNF012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf012) | Usabilidade: sistema claro e fácil de entender. | - | ✅ | [CNFR01](../modelagem/gravacoes/antonio/nfr_frame.md) | - |
| [RNF013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf013) | Compatibilidade/acessibilidade: multiplataforma, prioridade mobile. | - | ✅ | - | - |
| [RNF014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf014) | Integração com clínicas, ONGs e pet shops. | - | ✅ | [CNFR01](../modelagem/gravacoes/antonio/nfr_frame.md) | - |
| [RNF015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf015) | Usabilidade: substituir documentos/agendas físicas. | - | ✅ | - | - |
| [RNF016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf016) | Usabilidade para profissionais com pouca afinidade tecnológica. | - | ✅ | - | - |
| [RNF017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf017) | Segurança: alertas de acesso não autorizado. | - | ✅ | [CNFR01](../modelagem/gravacoes/antonio/nfr_frame.md) | - |
| [RNF018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf018) | Confiabilidade: cópias de segurança automáticas. | - | ✅ | - | - |
| [RNF019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) | Segurança: Integração entre clínicas, ONGs e Sinpatinhas. | - | ✅ | - | - |
| [RNF020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf020) | Acessibilidade: compatibilidade entre dispositivos móveis e desktops. | - | ✅ | - | - |
| [RNF021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) | Desempenho: respostas rápidas (até 2 segundos). | - | - | [CNFR07](../../modelagem/gravacoes/mateus/nfr_frame_1.md) | [ES007](../modelagem/gravacoes/mateus/especificacao.md), [EL019](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md), [EL020](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) |
| [RNF022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf022) | Disponibilidade: acesso remoto contínuo. | - | ✅ | - | - |
| [RNF023](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023) | Privacidade: restrição de acesso a dados clínicos e pessoais sensíveis. | - | - | [CNFR08](../../modelagem/gravacoes/mateus/nfr_frame_2.md) | [ES008](../modelagem/gravacoes/mateus/especificacao.md), [EL024](../pos-rastreabilidade/unitarios/mateus/matriz_geral.md) |
| [RNF024](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) | Auditabilidade: logs de acesso e registro de modificações. | - | ✅ | [CNFR01](../modelagem/gravacoes/antonio/nfr_frame.md) | - |


**Autor:** Antonio Carvalho

---

## Agradecimentos

Agradeço o apoio das ferramentas de **IA generativa (ChatGPT – OpenAI)** utilizadas para **revisão, estruturação e padronização técnica do conteúdo**.
A base conceitual foi desenvolvida com base nos fundamentos de **Sayão e Leite (2005)** e **Melo (2023)**.
 
---

## Referências Bibliográficas

<a id="REF1"></a>

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.

<a id="REF2"></a>

> [2] MELO, Arthur. Matriz Geral. Repositório do Grupo Bilheteria Digital da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: <https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/rastreabilidade/matriz-geral/>. Acesso em: 28/10/2025.

---

## Tabela de Versionamento

| **Versão** | **Data** | **Descrição** | **Autor** | **Revisor** |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 28/10/2025 | Criação da página de matriz de rastreabilidade | Antonio Carvalho |  |

---