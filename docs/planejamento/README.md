# Planejamento do Projeto

> Esta seção reúne os artefatos de planejamento do **SinPatinhas** — o que usamos, como organizamos o trabalho e onde acompanhar as entregas do time.

<div class="plan-hero">
  <div class="plan-hero__title">📅 Planejamento</div>
  <div class="plan-hero__chips">
    <span class="chip">Documentação viva</span>
    <span class="chip">Atualizado continuamente</span>
    <span class="chip">Padrão do curso</span>
  </div>
</div>

---

## Seções

<div class="plan-grid">

<a class="card" href="aplicativo/index.md">
  <div class="card__icon">📱</div>
  <div class="card__title">Aplicativo Analisado</div>
  <div class="card__desc">Contexto, critérios e motivações para a escolha do app de referência.</div>
</a>

<a class="card" href="atas/index.md">
  <div class="card__icon">🗒️</div>
  <div class="card__title">Atas de Reuniões</div>
  <div class="card__desc">Registros objetivos das reuniões do time e decisões tomadas.</div>
</a>

<a class="card" href="cronograma/index.md">
  <div class="card__icon">🗓️</div>
  <div class="card__title">Cronograma da Equipe</div>
  <div class="card__desc">Visão de prazos, marcos e responsáveis por etapa.</div>
</a>

<a class="card" href="ferramentas/index.md">
  <div class="card__icon">🧰</div>
  <div class="card__title">Ferramentas</div>
  <div class="card__desc">Stack utilizada para comunicação, versionamento e documentação.</div>
</a>

<a class="card" href="heatmap/index.md">
  <div class="card__icon">🔥</div>
  <div class="card__title">Heatmap da Equipe</div>
  <div class="card__desc">Disponibilidade do time para facilitar o planejamento de entregas.</div>
</a>

<a class="card" href="metodologias/index.md">
  <div class="card__icon">📐</div>
  <div class="card__title">Metodologias</div>
  <div class="card__desc">Abordagens e rituais adotados durante o projeto.</div>
</a>

<a class="card" href="referencias/index.md">
  <div class="card__icon">📚</div>
  <div class="card__title">Referências</div>
  <div class="card__desc">Fontes bibliográficas e materiais consultados.</div>
</a>

<a class="card" href="rich-picture/index.md">
  <div class="card__icon">🖼️</div>
  <div class="card__title">Rich Picture</div>
  <div class="card__desc">Visão visual do problema, atores e fluxos principais.</div>
</a>

</div>

---


## Histórico de Versão

| Versão | Data        | Descrição                         | Autores  | Revisores                                            |
|-------:|-------------|-----------------------------------|----------|------------------------------------------------------|
| 1.0    | 08/09/2025  | Criação da página do cronograma   | Letícia  | Antonio, Heloisa, Isaac, Luciano, Mateus e Pedro     |

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
  background: linear-gradient(135deg, var(--sp-blue) 0%, #4a82d0 100%);
  border-radius: 14px;
  padding: 1.25rem 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(55,102,174,.18);
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
  background: linear-gradient(135deg, var(--sp-blue) 0%, #5ba4ff 100%);
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
