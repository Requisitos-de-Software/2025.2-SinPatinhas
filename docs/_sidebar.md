<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>SinPatinhas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      display: flex;
      background: #f9fafb;
    }

    /* ===== Sidebar ===== */
    .sidebar {
      width: 280px;
      min-height: 100vh;
      background: #ffffff;
      border-right: 1px solid #e5e7eb;
      padding: 1rem;
      box-shadow: 2px 0 6px rgba(0, 0, 0, 0.05);
    }

    .sidebar ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .sidebar details {
      margin-bottom: .5rem;
    }

    .sidebar summary {
      cursor: pointer;
      font-weight: 700;
      color: #0f172a;
      padding: .5rem 0;
      transition: color 0.2s ease;
      outline: none;
    }

    .sidebar summary:hover {
      color: #3766ae;
    }

    .sidebar details[open] summary {
      color: #3766ae;
    }

    .sidebar ul ul {
      padding-left: 1rem;
      margin-top: .3rem;
    }

    .sidebar a {
      display: block;
      padding: .25rem 0;
      text-decoration: none;
      font-size: .95rem;
      color: #475569;
      transition: color 0.2s ease;
    }

    .sidebar a:hover {
      color: #111827;
    }

    /* ===== Conteúdo ===== */
    .content {
      flex: 1;
      padding: 2rem;
    }

    h1 {
      color: #111827;
    }
  </style>
</head>
<body>

  <nav class="sidebar">
    <ul>
      <li>
        <details>
          <summary>Sobre</summary>
          <ul>
            <li><a href="/README.md">Introdução</a></li>
            <li><a href="/apresentacoes.md">Apresentações</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Planejamento</summary>
          <ul>
            <li><a href="/planejamento/README.md">Visão Geral</a></li>
            <li><a href="/planejamento/cronograma/README.md">Cronograma das Atividades</a></li>
            <li><a href="/planejamento/ferramentas/README.md">Ferramentas</a></li>
            <li><a href="/planejamento/heatmap/README.md">Heatmap</a></li>
            <li><a href="/planejamento/metodologias/README.md">Metodologia</a></li>
            <li><a href="/planejamento/rich-picture/README.md">Rich Picture</a></li>
            <li><a href="/planejamento/aplicativo/README.md">Aplicativo Analisado</a></li>
            <li><a href="/planejamento/atas/README.md">Atas de Reuniões</a></li>
            <li><a href="/planejamento/referencias/README.md">Referências</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Elicitação</summary>
          <ul>
            <li><a href="/elicitacao/README.md">Visão Geral</a></li>
            <li><a href="/elicitacao/listas_verificacao">Perfis de Usuário</a></li>
            <li><a href="/elicitacao/tecnicas_elicitacao/">Técnicas de Elicitação</a></li>
            <li><a href="/elicitacao/tecnicas_priorizacao/tec-de-priorizacao">Técnicas de Priorização</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Análise</summary>
          <ul>
            <li><a href="/analise/README.md">Visão Geral</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Modelagem</summary>
          <ul>
            <li><a href="/modelagem/README.md">Visão Geral</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Pré-Rastreabilidade</summary>
          <ul>
            <li><a href="/pre-rastreabilidade/README.md">Visão Geral</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Pós-Rastreabilidade</summary>
          <ul>
            <li><a href="/pos-rastreabilidade/README.md">Visão Geral</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>

  <main class="content">
    <h1>Bem-vindo ao Projeto SinPatinhas 🐾</h1>
    <p>Selecione uma seção na barra lateral para navegar.</p>
  </main>

  <script>
    // Garante que só uma seção fica aberta por vez
    document.querySelectorAll(".sidebar details").forEach((det) => {
      det.addEventListener("toggle", () => {
        if (det.open) {
          document.querySelectorAll(".sidebar details").forEach((other) => {
            if (other !== det) other.open = false;
          });
        }
      });
    });
  </script>

</body>
</html>
