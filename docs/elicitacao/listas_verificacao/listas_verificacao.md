# Lista de Verificação

> Esta seção centraliza os **artefatos de verificação** utilizados no projeto **SinPatinhas**.  
> Elas servem como guias de apoio para Técnicas de Priorização, Cenários, Perfil do Usuário e Personas.

<div class="plan-hero">
  <div class="plan-hero__title">✅ Checklists do Projeto</div>
  <div class="plan-hero__chips">
    <span class="chip">Documentação viva</span>
    <span class="chip">Atualizado continuamente</span>
    <span class="chip">Guia de apoio</span>
  </div>
</div>

---

## Seções

<div class="plan-grid">

<a href="#/elicitacao/listas_verificacao/lista_verificacao_perfil_usuario.md" class="card">
  <div class="card__icon">👤</div>
  <div class="card__title">Perfil do Usuário</div>
  <div class="card__desc">Avaliação de clareza, consistência e utilidade do perfil.</div>
</a>

<a href="#/elicitacao/listas_verificacao/lista_elicitacao.md" class="card">
  <div class="card__icon">🔍</div>
  <div class="card__title">Elicitação</div>
  <div class="card__desc">Processo de coleta e análise inicial de informações para identificar requisitos do sistema.</div>
</a>

<a href="#/elicitacao/listas_verificacao/lista_personas.md" class="card">
  <div class="card__icon">🧩</div>
  <div class="card__title">Personas</div>
  <div class="card__desc">Verificação de completude, realismo e representatividade.</div>
</a>

<a href="#/elicitacao/listas_verificacao/lista_tecnicas_priorizacao.md" class="card">
  <div class="card__icon">📊</div>
  <div class="card__title">Técnicas de Priorização</div>
  <div class="card__desc">Critérios e métodos para organizar e priorizar requisitos.</div>
</a>

<a href="#/elicitacao/listas_verificacao/lista_cenarios.md" class="card">
  <div class="card__icon">🌅</div>
  <div class="card__title">Cenários</div>
  <div class="card__desc">Checklist de objetivo, fluxo, pré/pós-condições e exceções.</div>
</a>

<a href="#/elicitacao/listas_verificacao/lv_hu.md" class="card">
  <div class="card__icon">📝</div>
  <div class="card__title">Histórias de Usuário</div>
  <div class="card__desc">Checklist de verificação das histórias de usuário</div>
</a>

<a href="#/elicitacao/listas_verificacao/lista_de_verificacao_rastreabilidade.md" class="card">
  <div class="card__icon">🗺️</div>
  <div class="card__title">Rastreabilidade</div>
  <div class="card__desc">Checklist de verificação de elos e matrizes de rastreabilidade</div>
</a>


</div>


---

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores       | Revisores               |
|-------:|------------|----------------------------------------------|---------------|-------------------------|
| 1.0    | 27/09/2025 | Criação da página para Checklists            | Antonio       | Leticia Paiva, Heloisa |
| 1.1    | 28/09/2025 | Melhoria da navegação com cards intuitivos   | Leticia Paiva | Heloisa, [Antonio Carvalho](https://github.com/antonioscarvalho)        |
| 1.2    | 30/09/2025 | Adiciona lista de elicitação | Leticia Paiva | Heloisa, [Antonio Carvalho](https://github.com/antonioscarvalho)        |

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
