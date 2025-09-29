# Persona

> Esta seção apresenta a **lista de verificação consolidada sobre persona** para o projeto **SinPatinhas**. A lista foi elaborada a partir da análise e integração das listas individuais produzidas pelos membros da equipe.

<div class="plan-hero">
  <div class="plan-hero__title">✅ Checklists do Projeto</div>
  <div class="plan-hero__chips">
    <span class="chip">Técnicas de Priorização</span>
    <span class="chip">Cenários</span>
    <a href="#/elicitacao/listas_verificacao/lista_verificacao_perfil_usuario.md" class="chip">
         Perfil do Usuário
    </a>
    <a href="#/elicitacao/listas_verificacao/lista_personas.md" class="chip">
        Personas
    </a>

  </div>
</div>

---

## Lista de Verificação

<div class="plan-grid">


</div>

<table>
    <thead>
        <tr>
            <th></th>
            <th>Item</th>
            <th>Conforme</th>
            <th>Não Conforme</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>A persona é um personagem fictício representando um grupo de usuários reais?</td>
      <td><input type="checkbox" name="conforme1"></td>
      <td><input type="checkbox" name="nao_conforme1"></td>
    </tr>
    <tr>
      <td>2</td>
      <td>A persona possui nome e sobrenome?</td>
      <td><input type="checkbox" name="conforme2"></td>
      <td><input type="checkbox" name="nao_conforme2"></td>
    </tr>
    <tr>
      <td>3</td>
      <td>A persona possui uma identidade clara e realista? (Inclui nome, sobrenome, idade, outros dados demográficos representativos e uma foto para torná-la mais realista e memorável).</td>
      <td><input type="checkbox" name="conforme3"></td>
      <td><input type="checkbox" name="nao_conforme3"></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Está definida como persona primária, secundária, stakeholder ou antiusuário?</td>
      <td><input type="checkbox" name="conforme4"></td>
      <td><input type="checkbox" name="nao_conforme4"></td>
    </tr>
    <tr>
      <td>5</td>
      <td>O elenco de personas cobre os principais grupos de usuários (sem excesso, para não confundir designers)?</td>
      <td><input type="checkbox" name="conforme5"></td>
      <td><input type="checkbox" name="nao_conforme5"></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Estão descritas as competências, formação ou experiência da persona?</td>
      <td><input type="checkbox" name="conforme6"></td>
      <td><input type="checkbox" name="nao_conforme6"></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Estão identificadas as pessoas ou grupos com quem a persona interage?</td>
      <td><input type="checkbox" name="conforme7"></td>
      <td><input type="checkbox" name="nao_conforme7"></td>
    </tr>
    <tr>
      <td>8</td>
      <td>A persona possui fotografia ou ilustração associada?</td>
      <td><input type="checkbox" name="conforme8"></td>
      <td><input type="checkbox" name="nao_conforme8"></td>
    </tr>
    <tr>
      <td>9</td>
      <td>É descrito quais tarefas básicas ou críticas a persona realiza?</td>
      <td><input type="checkbox" name="conforme9"></td>
      <td><input type="checkbox" name="nao_conforme9"></td>
    </tr>
    <tr>
      <td>10</td>
      <td>As necessidades (requisitos) da persona estão explícitas?</td>
      <td><input type="checkbox" name="conforme10"></td>
      <td><input type="checkbox" name="nao_conforme10"></td>
    </tr>
    <tr>
      <td>11</td>
      <td>O elenco de personas possui no mínimo 3 e no máximo 12 personas distintas?</td>
      <td><input type="checkbox" name="conforme11"></td>
      <td><input type="checkbox" name="nao_conforme11"></td>
    </tr>
    <tr>
      <td>12</td>
      <td>A persona possui expectativas sobre o funcionamento do produto?</td>
      <td><input type="checkbox" name="conforme12"></td>
      <td><input type="checkbox" name="nao_conforme12"></td>
    </tr>
    </tbody>
</table>


## Lista de verificação elaborada por cada integrante do grupo

| Integrante |
|------------|
| [Antonio Carvalho]() |
| [Heloisa Santos](https://drive.google.com/file/d/1K0e3XNcUESht1RplX1DdndrmKwyfXzac/view?usp=sharing) |
| [Isaac Menezes Pereira]() |
| [Letícia Paiva]() |
| [Luciano Machado]() |
| [Mateus Negrini]() |
| [Pedro Gomes Oliveira]() |

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 2/09/2025 | Criação da página da lista de verificação de personas   | Heloisa  | -         |

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
