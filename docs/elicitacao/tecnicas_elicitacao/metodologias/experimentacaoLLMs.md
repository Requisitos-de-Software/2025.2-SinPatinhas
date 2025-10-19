# Experimentação com LLMs – Cadastro Nacional de Animais Domésticos

## Contexto
Este documento descreve uma experimentação realizada com diferentes modelos de linguagem (LLMs) com o objetivo de elicitar requisitos para um **Cadastro Nacional de Animais Domésticos**.  
A proposta foi solicitar que cada modelo atuasse como um veterinário brasileiro especializado em oncologia, com 44 anos de idade e 20 anos de experiência, e a partir dessa perspectiva apontasse funcionalidades essenciais e prioritárias para o sistema.

## Modelos Utilizados
- **GPT** (OpenAI)
- **Grok** (xAI)
- **Gemini** (Google DeepMind)
- **DeepSeek** (DeepSeek)

## Prompt Utilizado
Primeiramente foi utilizado persona prompting para fazer o modelo simular um usuário do sistema. 

> Você é um veterinário que atua no Brasil, sua especialidade é oncologia, possui 44 anos de idade e 20 de atuação.

Em seguida, foi pedido para o modelo listar quais funcionalidades seriam essenciais para um cadastro nacional de animais domésticos

>Quais são as funcionalidades que você considera essencial para um Cadastro Nacional de Animais Domésticos?

Logo após, foi pedido para essas funcionalidades serem elencadas por prioridade.

>Dessas funcionalidades, quais você considera as mais prioritárias? elenque-as por prioridade

## Respostas dos Modelos

As respostas dos modelos foram resumidas para apagar todos os textos desnecessários e focar apenas os requisitos

## 1. GPT

### Funcionalidades Essenciais

- **Identificação única do animal**
  - Registro por microchip (ou outro identificador único).
  - Opção de incluir tatuagem, QR Code ou número de registro municipal/estadual.

- **Dados básicos do animal**
  - Nome, espécie, raça, sexo.
  - Data de nascimento (real ou estimada).
  - Cor/pelagem, porte.
  - Fotos para reconhecimento.

- **Histórico de saúde**
  - Registro de vacinas obrigatórias (raiva, V8/V10, tríplice felina).
  - Controle de zoonoses.
  - Histórico de castração, cirurgias.
  - Doenças crônicas ou graves (ex.: câncer, cardiopatias).

- **Dados do tutor/responsável**
  - Nome completo, CPF/CNPJ.
  - Endereço e contatos (telefone, e-mail).
  - Responsável secundário (falecimento/abandono).

- **Responsabilidade legal**
  - Termo de guarda responsável.
  - Ocorrências: maus-tratos, abandono, perda, adoção.

- **Integração com órgãos públicos e veterinários**
  - Acesso para prefeituras, zoonoses, CRMVs, clínicas credenciadas.
  - Campanhas de vacinação e castração gratuita.

- **Localização e status**
  - Município/estado de residência.
  - Atualização em caso de mudança.
  - Registro de desaparecido/encontrado vinculado ao ID.

- **Saúde preventiva e acompanhamento**
  - Alertas de reforço vacinal e check-ups.
  - Upload de exames e laudos (oncologia, tumores, tratamentos).

- **Facilidade de uso**
  - Plataforma online para tutores.
  - App com QR Code do animal.
  - Suporte offline (sincronização posterior).

- **Segurança e privacidade**
  - Proteção de dados sensíveis (LGPD).
  - Níveis de permissão diferenciados (polícia, veterinários, tutores).

### Priorização

**1ª prioridade – Núcleo essencial (Identificação e responsabilidade)**
- Identificação única do animal  
  (microchip/ID nacional, fotos, espécie, raça, sexo, porte).
- Dados do tutor/responsável  
  (nome, CPF, contato atualizado).
- Registro de status legal do animal  
  (castração, adoção, abandono, óbito).

> Sem este núcleo, não há vínculo animal ↔ tutor e o sistema perde função de responsabilização.

---

**2ª prioridade – Saúde e bem-estar básico**
- Histórico de vacinação obrigatória  
  (com destaque para raiva).
- Registro de castração  
  (controle populacional).
- Indicação do município/estado de residência  
  (base para campanhas públicas).

> Garante o mínimo em saúde pública e controle populacional.

---

**3ª prioridade – Prevenção e integração**
- Integração com órgãos públicos e veterinários  
  (clínicas, zoonoses, conselhos, ONGs).
- Registro de ocorrências  
  (perda, maus-tratos, mudança de tutor).
- Plataforma acessível para tutores  
  (site/app simples para consulta e atualização).

> Amplia a utilidade do sistema e fortalece a base legal e social.

---

**4ª prioridade – Acompanhamento avançado**
- Histórico de saúde detalhado  
  (doenças crônicas, cirurgias, oncologia).
- Alertas automáticos  
  (reforço vacinal, campanhas, check-ups).
- Segurança e privacidade (LGPD)  
  com perfis de acesso diferenciados.

> Agrega valor clínico e melhora o bem-estar, podendo ser implementado gradualmente.


## 2. Grok

### Funcionalidades Essenciais

- **Identificação única e permanente**
  - Microchip obrigatório, com número e data da implantação.
  - Dados do animal: nome, espécie, raça, sexo, cor, peso, idade ou nascimento aproximado.
  - Foto atualizada para identificação visual.

- **Informações do tutor**
  - Nome completo, CPF, endereço, telefone e e-mail.
  - Registro de termo de responsabilidade pela guarda (com datas e assinaturas eletrônicas).

- **Histórico de saúde**
  - Registro digital de vacinas obrigatórias e recomendadas.
  - Status de castração.
  - Registro de alergias e condições crônicas (diabetes, problemas cardíacos etc.).

- **Acompanhamento de ocorrências**
  - Notificação de perda e encontro do animal.
  - Canal para denúncias de maus-tratos ou abandono.

### Priorização

**1ª prioridade – Identificação única e permanente**
- Microchip como base do sistema.
- Liga animal ao tutor e garante combate ao abandono e comércio ilegal.

---

**2ª prioridade – Informações do tutor**
- Dados completos e confiáveis do responsável legal.
- Essenciais para responsabilização e contato em caso de perda.

---

**3ª prioridade – Acompanhamento de ocorrências**
- Registro de perda e encontro do animal.
- Canal de denúncias de maus-tratos, permitindo resposta rápida das autoridades.

---

**4ª prioridade – Histórico de saúde**
- Registro de vacinas, castração e condições crônicas.
- Fundamental para saúde pública e atendimento seguro, mas secundário em relação à identificação e responsabilidade.

---


## 3. Gemini

### Funcionalidades Essenciais

- **Registro único e intransferível de identificação**
  - Número de identidade nacional para cada animal (“RG Animal”).
  - QR Code ou microchip opcional para localização rápida em casos de perda, abandono ou furto.
  - Facilita devolução ao tutor e combate ao comércio ilegal.

- **Coleta e armazenamento de dados detalhados**
  - Dados do tutor: identidade, CPF, endereço.
  - Dados do animal: espécie, raça, sexo, idade, histórico de vacinas, doenças e tratamentos.
  - Atualizações obrigatórias em casos de venda, doação ou óbito.

- **Integração com microchipagem e QR Code**
  - Vinculação a microchips existentes.
  - Carteirinha digital fixável na coleira.
  - Escaneamento via celular para acessar dados básicos de contato.

- **Acesso multi-stakeholder e descentralizado**
  - Cadastro por tutores, ONGs, prefeituras e abrigos.
  - Transferência automática de tutela em adoções.
  - Dashboards para análises estatísticas regionais, apoiando políticas de castração, vacinação e manejo populacional.

- **Geração de relatórios e suporte a políticas públicas**
  - Monitoramento da população animal por região.
  - Identificação de surtos de zoonoses.
  - Planejamento de campanhas de vacinação ou castração.
  - Apoio à prevenção de fatores ambientais associados a cânceres em pets.

- **Segurança de dados e acessibilidade gratuita**
  - Proteção conforme LGPD.
  - Acesso via plataformas como Gov.br.
  - Sistema intuitivo e atualizado em tempo real para incentivar adesão voluntária.

### Priorização

**1ª prioridade – Registro único e intransferível de identificação**
- Base do sistema, garante rastreabilidade e devolução rápida ao tutor.
- Combate ao abandono e comércio ilegal, reduzindo estresse e riscos à saúde, incluindo condições oncológicas.

---

**2ª prioridade – Coleta e armazenamento de dados detalhados**
- Dados completos do tutor e animal.
- Rastreamento de vacinas, zoonoses e condições oncológicas, permitindo diagnósticos precoces e tratamentos contínuos.
- Atualizações obrigatórias em transferências ou óbito.

---

**3ª prioridade – Geração de relatórios e suporte a políticas públicas**
- Relatórios regionais sobre populações animais e zoonoses.
- Planejamento de campanhas de vacinação, castração e monitoramento de fatores ambientais ligados a cânceres em pets.
- Fortalece saúde pública e oncologia veterinária.

---

**4ª prioridade – Integração com microchipagem e QR Code**
- Identificação rápida via celular, recuperação de animais, redução de superlotação em abrigos.
- Extensão prática do registro único, mas menos crítica que dados de saúde.

---

**5ª prioridade – Acesso multi-stakeholder e descentralizado**
- Cadastro por tutores, ONGs e prefeituras.
- Transferência automática de tutela.
- Dashboards regionais úteis, mas secundários frente ao controle sanitário.

---

**6ª prioridade – Segurança de dados e acessibilidade gratuita**
- Proteção pela LGPD e acesso gratuito via Gov.br.
- Suporte operacional importante, mas menos prioritário que identificação e saúde.

---
## 4. DeepSeek

### Funcionalidades Essenciais

- **Identificação e Rastreamento Indisputáveis**
  - Identificador Único Nacional (IUN) para cada animal, do nascimento ao óbito.
  - Vinculado obrigatoriamente a microchip subcutâneo.
  - Dados do tutor: nome completo, CPF, endereço, telefones, e-mail; opção de tutor secundário.
  - Dados do animal: espécie, raça, data de nascimento aproximada, sexo, cor, pelagem, sinais distintivos.
  - Foto atualizada do animal.

- **Prontuário de Saúde Eletrônico Integrado**
  - Histórico vacinal completo, especialmente antirrábica.
  - Registro de vermifugação (datas e produtos).
  - Upload de laudos médicos importantes (biópsias, radiografias, ultrassons).
  - Alertas de saúde regionais (ex.: surto de Cinomose).
  - Controle de zoonoses (ex.: Leishmaniose), com mapeamento epidemiológico.

- **Gestão Populacional e Controle de Natalidade**
  - Registro de castração: data, local, veterinário responsável.
  - Origem do animal: adotado, comprado de criadouro registrado ou resgatado.

- **Combate ao Abandono e Maus-Tratos**
  - Status jurídico: “Sob Posse Responsável”, “Em Processo de Adoção”, “Perdido”, “Abandonado”.
  - Histórico de posse e transferências de tutoria.
  - Integração com órgãos de controle para denúncias e ações legais.

- **Funcionalidades Práticas para Tutor e Sociedade**
  - Portal do Tutor: acessar dados, atualizar endereço e marcar animal como “PERDIDO”.
  - Rede de Encontros: veterinários e abrigos podem escanear microchip para notificar tutor.
  - Certificado digital ou carteirinha de identificação animal válida para viagens, hospedagens e eventos.

---

### Priorização

**Prioridade 1 – Identificação Única e Vinculação ao Tutor**
- Identificador Único Nacional (IUN) + microchip: espinha dorsal do sistema.
- Cadastro robusto do tutor (CPF, endereço).
- Dados básicos do animal (espécie, raça, data de nascimento, sexo, foto).

> Núcleo indispensável para devolver animais perdidos e criar engajamento social.

---

**Prioridade 2 – Saúde Pública e Gestão**
- Registro vacinal obrigatório (especialmente Raiva).
- Registro de castração.
- Portal do Tutor com funcionalidade “Animal Perdido”.

> Transforma o cadastro em ferramenta de gestão pública, prevenindo doenças e superpopulação.

---

**Prioridade 3 – Saúde Individual e Combate a Crimes**
- Prontuário eletrônico básico (integração com clínicas; laudos diagnósticos, vermifugações).
- Controle de origem e histórico de posse.
- Integração com órgãos de fiscalização para combate a maus-tratos.

> Eleva o padrão de cuidado individual e fortalece aspectos jurídicos e de proteção animal.

---

**Prioridade 4 – Otimização e Futuro**
- Alertas epidemiológicos (ex.: surto de Cinomose).
- Certificado digital para viagens.
- Histórico completo de imagens (Raio-X, ultrassons).

> Funcionalidades avançadas para fases futuras, agregando valor com base em um sistema consolidado.

---

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 30/09/2025 | Criação da página da lista de experimentação com LLMs   | Heloisa  | -         |
