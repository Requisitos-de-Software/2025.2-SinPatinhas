# Introdução

A rastreabilidade é um dos aspectos fundamentais da engenharia de requisitos, pois permite acompanhar a origem e o impacto de cada requisito ao longo do projeto. De acordo com Vazquez e Simões (2016, sȩc. 9.6.1), “a rastreabilidade dos requisitos é o processo de identificar e documentar os elos (ou vínculos) que envolvem um determinado requisito, para que seja possível rastrear sua origem, os artefatos derivados e os demais requisitos relacionados”. <a href="assets/images/rastreabilidade/rastreabilidade.png" target="_blank">1</a>

Segundo Sayão e Leite (2005) a rastreabilidade pode ser dividida nos tipos: backward-from, forward-from, backward-to e forward-to onde: <a href="assets/images/rastreabilidade/rast_tipos.png" target="_blank">2</a>

- Rastreabilidade forward-from: liga os requisitos aos artefatos gerados a partir desse requisito.
- Rastreabilidade backward-from: liga os requisitos às suas fontes.
- Rastreabilidade forward-to: liga os documentos do plano de negócio aos requisitos.
- Rastreabilidade backward-to: liga os artefatos de desenho e implementação aos requisitos.

# Objetivos

A análise de rastreabilidade forward-from tem como objetivo acompanhar o destino e o desdobramento de cada requisito e seus artefatos gerados. Por meio da matriz de rastreabilidade, busca-se documentar como cada requisito se relaciona com artefatos posteriores — como por exemplo casos de uso, história de usuário ou cenários. 

# Metodologia

Para a execução da rastreabilidade forward-from, foi desenvolvida uma matriz de rastreabilidade estruturada da seguinte forma:
- Coluna 1: Identifica o código do requisito;
- Coluna 2: Contém a descrição do requisito e o respectivo léxico associado;
- Coluna 3: Especifica os casos de uso relacionados ao requisito;
- Coluna 4: Associa as histórias de usuário vinculadas ao requisito;
- Coluna 5: Indica os requisitos não funcionais (NFRs) correspondentes;
- Coluna 6: Apresenta as especificações suplementares associadas;
- Coluna 7: Define o cenário relacionado;
- Coluna 8: O elo de Toranzo relacionado ao requisito.

Essa estrutura permite a rastreabilidade direta entre os requisitos e seus artefatos derivados, assegurando a consistência e a completude do processo de engenharia de requisitos.

# Rastreabilidade Forward-from

## Legenda da matriz

<font><p style="text-align: center">**Tabela 1** - Legenda da matriz.</p></font>


| Sigla  |          Técnica de Modelagem       |                      
| ---- | --------------------------------- | 
| UCXX | Casos de uso (User case) |
| HUXX   | Histórias de Usuário |
| CNFRXX | NFR Framework |
| ESXX | Especificação Suplementar |
| CNXX | Cenário |
| LXXX | Léxico |
| ELXXX | Elo de Toranzo |

<font><p style="text-align: center">**Tabela 2** - Requisitos e seus artefatos.</p></font>

# Matriz de Rastreabilidade

A tabela abaixo apresenta a rastreabilidade dos requisitos elicitados no Projeto SinPatinhas, categorizados entre requisitos funcionais implementados, não implementados e requisitos não funcionais.  
Os links nas colunas **ID** direcionam para os requisitos originais.

---

## Requisitos Funcionais Implementados

| ID | Descrição | UC | HU | CNFR | ES | CN | LX | EL |
|:---|:---|:---|:---|:---|:---|:---|:---|
| [RF001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf001) | Cadastro de tutores com dados pessoais. |  |  |  |  |  |  |
| [RF002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf002) | Cadastro de animais vinculados ao tutor. |  |  |  |  |  |  |
| [RF003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf003) | Geração de número de Registro Geral do Animal (RGA). |  |  |  |  |  |  |
| [RF004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf004) | Associação de microchip ao cadastro. |  |  |  |  |  |  |
| [RF005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf005) | Emissão de documento oficial de identificação (RG Pet). |  |  |  |  |  |  |
| [RF006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf006) | Consulta pública via RGA ou microchip. |  |  |  |  |  |  |
| [RF007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf007) | Atualização do status do animal (perdido, encontrado, óbito, transferência). |  |  |  |  |  |  |
| [RF008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf008) | Registro do histórico de saúde por veterinários. |  |  |  |  |  |  |
| [RF009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf009) | Transferência de titularidade do animal. |  |  |  |  |  |  |
| [RF010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf010) | Perfis de acesso distintos (Tutor e Veterinário). |  |  |  |  |  |  |
| [RF011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf011) | Relatórios e estatísticas para órgãos públicos. |  |  |  |  |  |  |
| [RF012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf012) | Permitir login integrado via Gov.br para tutores e profissionais. |  |  |  |  |  |  |
| [RF013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf013) | Preenchimento automático de dados pessoais do tutor via Gov.br. |  |  |  |  |  |  |
| [RF014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf014) | Emissão de carteirinha digital com QR Code. |  |  |  |  |  |  |
| [RF015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf015) | Registro opcional do número de microchip e exibição na carteirinha digital. |  |  |  |  |  |  |
| [RF016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf016) | Registro oficial de procedimentos veterinários (castração, vacinas, microchipagem). |  |  |  |  |  |  |
| [RF017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf017) | Suporte a perfis ampliados de atores (ONGs, protetores, gestores públicos). |  |  |  |  |  |  |
| [RF018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf018) | Envio de notificações/campanhas e publicação de materiais educativos. |  |  |  |  |  |  |
| [RF019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf019) | Integração com políticas públicas e relatórios para programas sociais. |  |  |  |  |  |  |
| [RF020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf020) | Garantir acesso nacional via internet, com escalabilidade. |  |  |  |  |  |  |
| [RF021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf021) | Cadastro de perfil do animal. |  |  |  |  |  |  |
| [RF022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf022) | Registro do histórico de vacinas. |  |  |  |  |  |  |
| [RF023](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf023) | Cadastro de informações de contato do tutor. |  |  |  |  |  |  |
| [RF024](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf024) | Gerenciamento de múltiplos animais. |  |  |  |  |  |  |
| [RF025](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf025) | Compartilhamento de informações com familiares. |  |  |  |  |  |  |
| [RF026](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf026) | Notificações de vacinas futuras/atrasadas. |  |  |  |  |  |  |
| [RF027](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf027) | Registro da localização do animal ou tutor. |  |  |  |  |  |  |
| [RF028](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf028) | Permitir busca e recuperação de animais perdidos ou abandonados. |  |  |  |  |  |  |
| [RF029](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf029) | Prontuário digital centralizando histórico de saúde e vacinação. |  |  |  |  |  |  |
| [RF030](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf030) | Notificações automáticas para vacinas e lembretes de medicação. |  |  |  |  |  |  |
| [RF031](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf031) | Registro de informações detalhadas do animal (nome, idade, tipo sanguíneo, peso, altura, raça, espécie, endereço do tutor). |  |  |  |  |  |  |
| [RF032](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf032) | Área de instruções integradas (manual digital). |  |  |  |  |  |  |
| [RF033](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf033) | Upload de foto do animal. |  |  |  |  |  |  |
| [RF034](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf034) | Cadastro/atualização de endereço do tutor. |  |  |  |  |  |  |
| [RF035](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf035) | Módulo para registro/visualização de exames do animal. |  |  |  |  |  |  |
| [RF036](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf036) | Acesso via celular para consulta fora da clínica. |  |  |  |  |  |  |
| [RF037](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf037) | Acesso remoto aos dados do animal. |  |  |  |  |  |  |
| [RF038](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf038) | Cadastro de ONGs/associações para controle de animais resgatados/adotados. |  |  |  |  |  |  |
| [RF039](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf039) | Rastreamento de doações/adoções. |  |  |  |  |  |  |
| [RF040](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf040) | Transferência de tutor preservando histórico. |  |  |  |  |  |  |
| [RF041](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf041) | Integração entre clínicas veterinárias permitindo visualização do prontuário. |  |  |  |  |  |  |

---

## Requisitos Funcionais Não Implementados

| ID | Descrição | UC | HU | CNFR | ES | CN | L |
|:---|:---|:---|:---|:---|:---|:---|:---|
| [RFNI001](../../../../../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni007) | Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados. |  |  |  |  |  |  |
| [RFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni008) | Implementar filtro por distância para localizar clínicas próximas. |  |  |  |  |  |  |
| [RFNI003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni009) | Listagem de tratamentos e serviços oferecidos por clínicas/hospitais. |  |  |  |  |  |  |
| [RFNI004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni010) | Filtro por especialidade veterinária. |  |  |  |  |  |  |
| [RFNI005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni011) | Informações sobre horários de funcionamento de clínicas/hospitais. |  |  |  |  |  |  |
| [RFNI006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni012) | Indicadores visuais de aberto/fechado no mapa e perfis. |  |  |  |  |  |  |
| [RFNI007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni013) | Pesquisa de clínicas/hospitais por médico veterinário vinculado. |  |  |  |  |  |  |
| [RFNI008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni014) | Campo para clínicas/hospitais informarem preços dos principais procedimentos. |  |  |  |  |  |  |
| [RFNI009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni015) | Médicos veterinários indicarem se realizam atendimentos domiciliares. |  |  |  |  |  |  |
| [RFNI010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni016) | Sistema de avaliação numérica para estabelecimentos. |  |  |  |  |  |  |
| [RFNI011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni017) | Sistema de avaliação numérica para médicos veterinários. |  |  |  |  |  |  |
| [RFNI012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni018) | Envio de comentários/feedbacks sobre estabelecimentos. |  |  |  |  |  |  |
| [RFNI013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni019) | Envio de comentários/feedbacks sobre médicos veterinários. |  |  |  |  |  |  |
| [RFNI014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni020) | Indicador visual da média de avaliações no perfil de clínicas/hospitais. |  |  |  |  |  |  |
| [RFNI015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rfni021) | Indicador visual da média de avaliações no perfil de médicos veterinários. |  |  |  |  |  |  |
| [RFNI016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf030) | Sistema de adoção de animais (funcionalidade para facilitar a adoção de animais). |  |  |  |  |  |  |
| [RFNI017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf031) | Alertas e notificações automáticas para vacinas e lembretes de medicação. |  |  |  |  |  |  |
| [RFNI018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) | Integração direta com parceiros (clínicas, ONGs, pet shops). |  |  |  |  |  |  |
| [RFNI019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf033) | Área de instruções integradas (manual digital). |  |  |  |  |  |  |
| [RFNI020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf043) | Emissão de alertas de acesso suspeito ou tentativas de violação. |  |  |  |  |  |  |
| [RFNI021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf044) | Notificação periódica para atualização de dados e fotos do animal. |  |  |  |  |  |  |
| [RFNI022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rf045) | Vincular foto do tutor ao registro de adoção. |  |  |  |  |  |  |

---

## Requisitos Não Funcionais Não Implementados

| ID | Descrição | UC | HU | CNFR | ES | CN | L |
|:---|:---|:---|:---|:---|:---|:---|:---|
| [RNFNI001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni001) | Acesso via web e mobile (prioridade no mobile). |  |  |  |  |  |  |
| [RNFNI002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni002) | Funcionalidades offline. |  |  |  |  |  |  |
| [RNFNI003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnfni003) | Integração direta com parceiros (clínicas, ONGs, pet shops). |  |  |  |  |  |  |

---

## Requisitos Não Funcionais

| ID | Descrição | UC | HU | CNFR | ES | CN | L |
|:---|:---|:---|:---|:---|:---|:---|:---|
| [RNF001](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf009) | Segurança: Conformidade com a LGPD. |  |  |  |  |  |  |
| [RNF002](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf014) | Disponibilidade: 99,8% de uptime (24/7). |  |  |  |  |  |  |
| [RNF003](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | Usabilidade: interface intuitiva para cidadãos. |  |  |  |  |  |  |
| [RNF004](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf013) | Desempenho: resposta em consultas públicas < 2s. |  |  |  |  |  |  |
| [RNF005](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | Compatibilidade: suporte a navegadores principais e responsividade mobile. |  |  |  |  |  |  |
| [RNF006](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf007) | Integração: APIs para integração futura com clínicas e órgãos públicos. |  |  |  |  |  |  |
| [RNF007](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | Acessibilidade: Sistema fácil e intuitivo. |  |  |  |  |  |  |
| [RNF008](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf002) | Usabilidade: Design de interface limpo e organizado. |  |  |  |  |  |  |
| [RNF009](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf003) | Confiabilidade: garantia contra perda de dados. |  |  |  |  |  |  |
| [RNF010](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf004) | Acessibilidade: acesso via web e mobile. |  |  |  |  |  |  |
| [RNF011](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf005) | Funcionalidades offline. |  |  |  |  |  |  |
| [RNF012](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | Usabilidade: sistema claro e fácil de entender. |  |  |  |  |  |  |
| [RNF013](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf006) | Compatibilidade/acessibilidade: multiplataforma, prioridade mobile. |  |  |  |  |  |  |
| [RNF014](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf007) | Integração com clínicas, ONGs e pet shops. |  |  |  |  |  |  |
| [RNF015](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf008) | Usabilidade: substituir documentos/agendas físicas. |  |  |  |  |  |  |
| [RNF016](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf001) | Usabilidade para profissionais com pouca afinidade tecnológica. |  |  |  |  |  |  |
| [RNF017](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf017) | Segurança: alertas de acesso não autorizado. |  |  |  |  |  |  |
| [RNF018](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf018) | Confiabilidade: cópias de segurança automáticas. |  |  |  |  |  |  |
| [RNF019](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf019) | Segurança: Integração entre clínicas, ONGs e Sinpatinhas. |  |  |  |  |  |  |
| [RNF020](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf020) | Acessibilidade: compatibilidade entre dispositivos móveis e desktops. |  |  |  |  |  |  |
| [RNF021](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf021) | Desempenho: respostas rápidas (até 2 segundos). |  |  |  |  |  |  |
| [RNF022](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf022) | Disponibilidade: acesso remoto contínuo. |  |  |  |  |  |  |
| [RNF023](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf023) | Privacidade: restrição de acesso a dados clínicos e pessoais sensíveis. |  |  |  |  |  |  |
| [RNF024](../elicitacao/tecnicas_elicitacao/requisitos_elicitados.md#rnf024) | Auditabilidade: logs de acesso e registro de modificações. |  |  |  |  |  |  |

**Autor: Antonio Carvalho**

---

## Referências Bibliográficas

<a id="REF1"></a>

> [1] SAYÃO, Miriam; LEITE, Julio Cesar Sampaio do Prado. **Rastreabilidade de Requisitos**. *Monografias em Ciência da Computação n° 20/05*. Departamento de Informática – PUC-Rio, Rio de Janeiro, 2005. ISSN 0103-9741.

<a id="REF2"></a>

> [2] Toranzo, M.; Castro, J. & Mello, E. **Uma proposta para melhorar o rastreamento de requisito**. In: WER02 - Workshop em Engenharia de Requisitos, Valencia, Espanha, Novembro 11-12, 2002. Anais. pp. 194-209.

---

# Histórico de Versões

| Data       | Versão | Descrição                                 | Autor                                      | Revisor                                     |
| :--------: | :----: | :---------------------------------------- | :----------------------------------------: | :----------------------------------------: |
| 27/10/2025 |  1.0   |  Criação da documentação da matriz de rastreabilidade forward-from| Pedro Gomes   | Antonio Carvalho  |
| 28/10/2025 |  1.1   |  Criação da matriz de rastreabilidade forward-from | Antonio Carvalho   |   |
