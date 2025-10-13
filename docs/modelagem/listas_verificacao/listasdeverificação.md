# Listas de Verificação – Entrega 03

> Esta página centraliza os **links para as listas de verificação (checklists)** utilizadas no projeto **SinPatinhas**, garantindo a validação e consistência dos artefatos de **Especificação Suplementar** e **Diagramas de Caso de Uso**.

---

## Seções

<div class="plan-grid">

<a href="#/modelagem/listas_verificacao/listas_verificacaoespecifi_suple.md" class="card">
  <div class="card__icon">📘</div>
  <div class="card__title">Especificação Suplementar</div>
  <div class="card__desc">
    Checklist para avaliar requisitos não funcionais (RNFs), como desempenho, usabilidade e segurança.
  </div>
</a>

<a href="#/modelagem/listas_verificacao/listas_verificacaocasos_de_uso.md" class="card">
  <div class="card__icon">🎯</div>
  <div class="card__title">Diagrama de Caso de Uso</div>
  <div class="card__desc">
    Critérios para análise estrutural, clareza e coerência dos diagramas UML de caso de uso.
  </div>
</a>

</div>

---

## 📜 Histórico de Versão

| **Versão** | **Data** | **Descrição** | **Autores** | **Revisores** |
|:--:|:--:|:--|:--|:--|
| 1.0 | 12/10/2025 | Criação da página principal de navegação das listas de verificação | Letícia Paiva | - |

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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  border-radius: 14px;
  padding: 1.25rem 1.25rem;
  color: #fff;
  margin: .5rem 0 1.25rem;
  box-shadow: 0 10px 24px rgba(79,70,229,.18);
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
