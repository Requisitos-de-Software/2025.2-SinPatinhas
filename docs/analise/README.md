# Análise de Requisitos com Verificação e Validação 

> Esta seção reúne os principais fatores e atividades do processo de **Verificação e Validação (V&V) de Requisitos** do projeto **SinPatinhas** — assegurando que os requisitos documentados sejam consistentes, completos e reflitam corretamente as necessidades dos usuários e stakeholders.

<div class="plan-hero">
  <div class="plan-hero__title">✅ Verificação e Validação</div>
  <div class="plan-hero__chips">
    <span class="chip">Consistência</span>
    <span class="chip">Confiabilidade</span>
    <span class="chip">Alinhamento com usuários</span>
  </div>
</div>

---

## Seções

<div class="plan-grid">

<a href="#/vv/completude/completude.md" class="card">
  <div class="card__icon">📋</div>
  <div class="card__title">Completude</div>
  <div class="card__desc">Verificação se todos os requisitos necessários foram levantados e documentados.</div>
</a>

<a href="#/vv/consistencia/consistencia.md" class="card">
  <div class="card__icon">🔄</div>
  <div class="card__title">Consistência</div>
  <div class="card__desc">Identificação de conflitos, ambiguidades ou redundâncias entre requisitos.</div>
</a>

<a href="#/vv/clareza/clareza.md" class="card">
  <div class="card__icon">💡</div>
  <div class="card__title">Clareza</div>
  <div class="card__desc">Avaliação da compreensibilidade e precisão dos requisitos descritos.</div>
</a>

<a href="#/vv/rastreabilidade/rastreabilidade.md" class="card">
  <div class="card__icon">🧩</div>
  <div class="card__title">Rastreabilidade</div>
  <div class="card__desc">Capacidade de ligar cada requisito às suas origens, implementações e testes.</div>
</a>

<a href="#/vv/viabilidade/viabilidade.md" class="card">
  <div class="card__icon">⚙️</div>
  <div class="card__title">Viabilidade</div>
  <div class="card__desc">Avaliação da possibilidade técnica, financeira e de cronograma dos requisitos.</div>
</a>

<a href="#/vv/validacao_usuario/validacao.md" class="card">
  <div class="card__icon">👥</div>
  <div class="card__title">Validação com Usuários</div>
  <div class="card__desc">Confirmação de que os requisitos refletem as reais necessidades dos stakeholders.</div>
</a>

<a class="card">
  <div class="card__icon">📚</div>
  <div class="card__title">Referências</div>
  <div class="card__desc">Fontes consultadas e materiais de apoio utilizados.</div>
</a>

</div>

---

## Histórico de Versão

| Versão | Data       | Descrição                                        | Autores  | Revisores |
|-------:|------------|--------------------------------------------------|----------|-----------|
| 1.0    | 03/10/2025 | Criação da página de Análise Verificação e Validação     | Antonio  | Isaac |

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
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  border-radius: 14px;
  padding: 1.25rem 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(22,163,74,.18);
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
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
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
