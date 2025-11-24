# Introdução

<div class="intro-hero">
  <img src="assets/images/sinpatinhas_logo.png" alt="Logo SinPatinhas" class="intro-logo" />
  <h1>SinPatinhas</h1>
  <p class="intro-subtitle">Sistema do Cadastro Nacional de Animais Domésticos</p>
</div>

O **SinPatinhas** – Sistema do Cadastro Nacional de Animais Domésticos é uma ferramenta pública, gratuita e digital criada pelo Governo Federal para registrar cães e gatos em todo o território nacional.

Coordenado pelo **Ministério do Meio Ambiente e Mudança do Clima**, o SinPatinhas é uma das principais entregas do **ProPatinhas – Programa Nacional de Proteção e Manejo Populacional Ético de Cães e Gatos**.

> “Seu objetivo é tirar os animais da invisibilidade, reunindo dados essenciais para o planejamento de políticas públicas de bem-estar animal.”

**Documentações do App e seu uso para análise e estudo:** [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm), [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm), [Perguntas e Respostas - Ministério do Meio Ambiente](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas) e ["RG para cães e gatos - Página do Planalto"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal),

---

## Funcionalidades

<div class="feat-grid">

  <div class="feat-card">
    <div class="feat-icon">✂️</div>
    <h3>Castração</h3>
    <p>Políticas de controle populacional ético e bem-estar animal.</p>
  </div>

  <div class="feat-card">
    <div class="feat-icon">💉</div>
    <h3>Vacinação</h3>
    <p>Programas e campanhas de saúde preventiva para cães e gatos.</p>
  </div>

  <div class="feat-card">
    <div class="feat-icon">🧩</div>
    <h3>Microchipagem</h3>
    <p>Identificação permanente e auxílio na recuperação de animais.</p>
  </div>

</div>

---

## Como funciona

<ol class="howto">
  <li><strong>Login Gov.br:</strong> o tutor acessa com a conta Gov.br.</li>
  <li><strong>Cadastro do animal:</strong> preenche dados básicos e, se houver, do microchip.</li>
  <li><strong>Carteirinha digital:</strong> o sistema emite uma carteirinha com <em>QR Code</em> para impressão.</li>
</ol>

---

## Equipe

<div class="team-grid">

  <div class="team-card">
    <img src="https://github.com/antonioscarvalho.png?size=200" alt="Antonio Carvalho">
    <p>Antonio Carvalho</p>
  </div>

  <div class="team-card">
    <img src="https://github.com/Heloisa-Santos.png?size=200" alt="Heloísa Santos">
    <p>Heloísa Santos</p>
  </div>

  <div class="team-card">
    <img src="https://github.com/ispratamena250.png?size=200" alt="Isaac Menezes">
    <p>Isaac Menezes</p>
  </div>

  <div class="team-card">
    <img src="https://github.com/leticiakrpaiva.png?size=200" alt="Letícia Paiva">
    <p>Letícia Paiva</p>
  </div>

  <div class="team-card">
    <img src="https://github.com/14luke08.png?size=200" alt="Mateus Negrini">
    <p>Mateus Negrini</p>
  </div>

  <div class="team-card">
    <img src="https://github.com/pedrog0.png?size=200" alt="Pedro Gomes">
    <p>Pedro Gomes</p>
  </div>

</div>

---

## Histórico de Versão

| Versão | Data        | Descrição                         | Autores  | Revisores                                            |
|-------:|-------------|-----------------------------------|----------|------------------------------------------------------|
| 1.0    | 08/09/2025  | Criação da página do introdução   | Letícia  | Antonio, Heloisa, Isaac, Luciano, Mateus e Pedro     |
| 1.1    | 08/09/2025  | Reestruturação do indice          | Mateus   | Antonio                                                |


---

> **Nota final**  
> Este projeto de análise de requisitos foi desenvolvido com base em ampla pesquisa e contou com metodologias de engenharia de software para garantir uma documentação completa e precisa do sistema SinPatinhas.

<!-- ===== CSS embutido ===== -->
<style>
  /* ---------- Tipografia geral mais encorpada ---------- */
  .markdown-section h1 { font-size: 2.4rem; font-weight: 800; letter-spacing: -0.02em; }
  .markdown-section h2 { font-size: 2rem;  font-weight: 700; margin-top: 2rem; }
  .markdown-section p, .markdown-section li { font-size: 1.05rem; line-height: 1.7; }

  /* ---------- Hero da introdução ---------- */
  .intro-hero{
    display:flex; flex-direction:column; align-items:center; text-align:center;
    gap: 8px; margin: 0 0 12px;
  }
  .intro-logo{
    width: 300px; height: auto; border-radius: 14px;
    box-shadow: 0 10px 26px rgba(0,0,0,.18);
  }
  .intro-hero h1{ margin:.6rem 0 .2rem; }
  .intro-subtitle{ margin:0; color:#334155; font-weight:600; font-size:1.15rem; }

  /* ---------- Grid de funcionalidades ---------- */
  .feat-grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:20px; margin:1rem 0 2rem;
  }
  .feat-card{
    border:1px solid #e5e7eb; border-radius:12px; padding:20px; background:#fff;
    text-align:center; transition:transform .2s ease, box-shadow .2s ease;
  }
  .feat-card:hover{ transform:translateY(-6px); box-shadow:0 10px 20px rgba(0,0,0,.1); }
  .feat-icon{
    width:56px;height:56px;border-radius:50%; display:grid; place-items:center;
    background:#e0f2fe; font-size:28px; margin:0 auto 12px;
  }
  .feat-card h3{ margin:.25rem 0 .5rem; font-size:1.15rem; }
  .feat-card p{ margin:0; color:#475569; font-size:1rem; line-height:1.5; }

  /* ---------- Como funciona ---------- */
  .howto{ margin-left: 1.1rem; }
  .howto li{ margin:.25rem 0; }

  /* ---------- Equipe ---------- */
  .team-grid{
    display:flex; flex-wrap:nowrap; justify-content:space-between;
    gap:16px; overflow-x:auto; padding-bottom:10px;
  }
  .team-card{ text-align:center; min-width:120px; }
  .team-card img{
    width:100px;height:100px; border-radius:50%; object-fit:cover; margin-bottom:.5rem;
    box-shadow:0 2px 8px rgba(0,0,0,.06);
  }
  .team-card p{ margin:0; font-weight:600; }
  
  /* ---------- Responsivo ---------- */
  @media (max-width: 900px){
    .feat-grid{ grid-template-columns: 1fr; }
    .intro-logo{ width: 240px; }
  }
</style>