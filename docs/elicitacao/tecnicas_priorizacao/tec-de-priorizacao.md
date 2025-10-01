# Técnicas de Priorização

> Esta seção documenta as técnicas de **priorização de requisitos** adotadas pelo time do **SinPatinhas**, definindo como os requisitos levantados serão organizados e hierarquizados para apoiar as tomadas de decisão.

<div class="plan-hero">
  <div class="plan-hero__title">⚖️ Priorização de Requisitos</div>
  <div class="plan-hero__chips">
    <span class="chip">MoSCoW</span>
    <span class="chip">$100</span>
    <span class="chip">Spreadsheet</span>
    <span class="chip">In or Out</span>
  </div>
</div>

---

## Técnicas Escolhidas

<div class="plan-grid">

<a class="card">
  <div class="card__icon">📌</div>
  <div class="card__title">MoSCoW</div>
  <div class="card__desc">Classificação em categorias <em>Must Have</em>, <em>Should Have</em>, <em>Could Have</em> e <em>Won’t Have</em>. Permite alinhar expectativas entre equipe e stakeholders.</div>
</a>

<a class="card">
  <div class="card__icon">💵</div>
  <div class="card__title">$100</div>
  <div class="card__desc">Distribuição fictícia de $100 entre requisitos, refletindo a importância relativa de cada um. Favorece priorização democrática.</div>
</a>

<a class="card">
  <div class="card__icon">📊</div>
  <div class="card__title">Spreadsheet</div>
  <div class="card__desc">Planilha estruturada para organizar, comparar e ranquear requisitos de forma colaborativa e transparente.</div>
</a>

<a class="card">
  <div class="card__icon">✅</div>
  <div class="card__title">In or Out</div>
  <div class="card__desc">Técnica simples de decisão binária, onde cada requisito é avaliado como <em>Incluído</em> (In) ou <em>Excluído</em> (Out). Garante objetividade e elimina ambiguidades.</div>
</a>

</div>

---

## Justificativa da Escolha

As quatro técnicas foram selecionadas considerando:  
- **MoSCoW** → Simplicidade, clareza e consenso rápido entre stakeholders.  
- **$100** → Método intuitivo e quantitativo, que obriga à priorização realista.  
- **Spreadsheet** → Facilidade de registro, visualização e integração com outras atividades do projeto.  
- **In or Out** → Fornece objetividade ao exigir decisões claras e binárias, útil em situações de restrições rígidas de tempo ou orçamento.  

O uso combinado oferece equilíbrio entre **clareza qualitativa**, **distribuição quantitativa**, **registro estruturado** e **decisão objetiva**.

---

## Histórico de Versão

| Versão | Data       | Descrição                                         | Autores  | Revisores |
|-------:|------------|---------------------------------------------------|----------|-----------|
| 1.0    | 27/09/2025 | Criação da página de Técnicas de Priorização      | Antonio  | -         |
| 1.1    | 30/09/2025 | Inclusão da técnica **In or Out**                 | Antonio  | -         |

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
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  border-radius: 14px;
  padding: 1.25rem 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(16,185,129,.18);
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
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
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
