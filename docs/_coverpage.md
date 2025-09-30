<div class="cover-hero">
  <img src="assets/images/sinpatinhas_logo.png" alt="SinPatinhas" class="logo"/>
  <h1>SinPatinhas</h1>
  <p class="subtitle">Análise de Requisitos — 2025.2</p>

  <a class="btn-primary" href="#/?id=introdução">Começar</a>
</div>

<style>
  section.cover.show, .cover-main {
    background: linear-gradient(135deg, #1E3A8A 0%, #3766ae 50%, #5B8FD1 100%) !important;
    color: #fff !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cover .mask { background: transparent !important; }

  .cover-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .cover-hero .logo {
    width: 320px;   
    height: auto;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0,0,0,.25);
  }

  .cover-hero h1 {
    margin: 10px 0 4px;
    font-size: 3rem;           
    letter-spacing: -1px;
  }

  .cover-hero .subtitle {
    margin: 0;
    font-size: 1.4rem;
    opacity: 0.95;
    font-weight: 500;
  }

  .btn-primary {
    display: inline-block;
    margin-top: 18px;
    background: #efb93e;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 999px;
    box-shadow: 0 8px 28px rgba(16,185,129,.45);
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  }
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(16,185,129,.55);
    background: #34D399;
  }
</style>
