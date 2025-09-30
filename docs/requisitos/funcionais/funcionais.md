# Requisitos Funcionais  

<div class="chip">Funcionalidades do Sistema</div>  

O sistema **SinPatinhas** garante o cadastro nacional e a identificação de cães e gatos em todo o Brasil. Os requisitos funcionais abaixo descrevem as principais funcionalidades esperadas para atender tutores, veterinários, gestores públicos e organizações envolvidas na proteção animal.  

---

## ⚙️ Funcionalidades Principais  

<div class="plan-grid">  

<div class="card">  
  <div class="card__icon">🐾</div>  
  <div class="card__title">Cadastro de Animais</div>  
  <div class="card__desc">Permite registrar cães e gatos com informações obrigatórias como nome, raça, sexo, idade, vacinas, microchip e foto frontal.</div>  
</div>  

<div class="card">  
  <div class="card__icon">📑</div>  
  <div class="card__title">Carteirinha Digital</div>  
  <div class="card__desc">Gera um RG Animal único com QR Code, disponível para impressão e fixação na coleira do pet.</div>  
</div>  

<div class="card">  
  <div class="card__icon">👤</div>  
  <div class="card__title">Cadastro de Tutores</div>  
  <div class="card__desc">Integração automática com Gov.br para preenchimento dos dados pessoais do tutor.</div>  
</div>  

<div class="card">  
  <div class="card__icon">🩺</div>  
  <div class="card__title">Procedimentos Veterinários</div>  
  <div class="card__desc">Permite que veterinários registrem castrações, vacinas, microchipagem, doenças e óbitos no histórico do animal.</div>  
</div>  

<div class="card">  
  <div class="card__icon">🔄</div>  
  <div class="card__title">Transferência de Responsabilidade</div>  
  <div class="card__desc">Permite registrar venda, doação ou troca de tutor do animal de forma autenticada e segura.</div>  
</div>  

<div class="card">  
  <div class="card__icon">📢</div>  
  <div class="card__title">Notificações de Campanhas</div>  
  <div class="card__desc">Envia avisos sobre campanhas de castração, vacinação e microchipagem na região do tutor.</div>  
</div>  

<div class="card">  
  <div class="card__icon">🏛️</div>  
  <div class="card__title">Integração Governamental</div>  
  <div class="card__desc">Permite que Estados e Municípios utilizem o sistema para fiscalizar, centralizar dados e gerar relatórios.</div>  
</div>  

<div class="card">  
  <div class="card__icon">🔐</div>  
  <div class="card__title">Segurança e LGPD</div>  
  <div class="card__desc">Garante que apenas dados autorizados (telefone do tutor) fiquem visíveis ao escanear o QR Code.</div>  
</div>  

</div>  

---

## 📌 Resumo dos Requisitos  

| Categoria               | Funcionalidades Principais | Exemplos |
|--------------------------|---------------------------|----------|
| **Cadastro de Animais**  | Registro detalhado de cães e gatos | Nome, raça, idade, vacinas, foto |
| **Identificação**        | Geração de RG Animal e QR Code | Impressão e fixação na coleira |
| **Gestão de Tutores**    | Integração Gov.br e atualização de dados | Cadastro automático, atualização |
| **Saúde Animal**         | Registro por veterinários | Castração, vacinas, doenças |
| **Transferência**        | Mudança de titularidade | Venda, doação, óbito |
| **Campanhas Públicas**   | Notificações aos tutores | Castração e vacinação regionais |
| **Integração Governos**  | Relatórios e fiscalização | Dados municipais, estaduais e federais |
| **Segurança e LGPD**     | Proteção dos dados pessoais | Apenas telefone autorizado visível |

---

## Histórico de Versão  

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 29/09/2025 | Criação da página para requisitos funcionais | Mateus  | -         |

---

<style>
:root{
  --sp-blue: #3766ae;      
  --sp-blue-600:#2f5a9b;
  --sp-blue-100:#e8f0fb;
  --muted: #475569;
  --bg-card: #ffffff;
  --ring: rgba(55,102,174,.25);
}

/* ====== Hero ====== */
.plan-hero{
  background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
  border-radius: 14px;
  padding: 1.25rem 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(99,102,241,.18);
}
.plan-hero__title{
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: .3px;
}
.plan-hero__chips{ margin-top: .5rem; display:flex; gap:.5rem; flex-wrap: wrap; }
.chip{
  font-size: .8rem;
  background: rgba(255,255,255,.18);
  border: 1px solid rgba(255,255,255,.35);
  padding: .25rem .55rem;
  border-radius: 999px;
  backdrop-filter: blur(2px);
}

/* ====== Grid ====== */
.plan-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  align-items: stretch;
}

/* ====== Card ====== */
.card{
  display: block;
  text-decoration: none !important;
  background: var(--bg-card);
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 16px 16px 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,.04);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  position: relative;
}
.card::before{
  content:"";
  position:absolute; inset:0;
  border-radius: 14px;
  padding:1px;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  opacity:.0; transition: opacity .2s ease;
}
.card:hover{
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(0,0,0,.10);
  border-color: transparent;
}
.card:hover::before{ opacity: .9; }

.card__icon{
  width: 46px; height: 46px;
  border-radius: 12px;
  background: var(--sp-blue-100);
  display:grid; place-items:center;
  font-size: 1.35rem;
  margin-bottom: 10px;
  color: var(--sp-blue);
  box-shadow: inset 0 0 0 1px rgba(55,102,174,.12);
}
.card__title{
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 4px;
  color: #0f172a;
}
.card__desc{
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.35;
}
</style>  
