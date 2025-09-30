# Heatmap da Equipe

<div class="chip">Distribuição de Trabalho</div>

> Visualize a distribuição de carga de trabalho e o envolvimento dos membros da equipe ao longo das diferentes etapas do projeto **Sinpatinhas**.

---

## Visualização da Alocação da Equipe

Este heatmap mostra a intensidade do envolvimento de cada membro da equipe nas diferentes fases do projeto. **Cores mais intensas** indicam maior alocação de tempo e esforço.

<div class="img-frame">
  <img src="assets/images/Heatmap.png" alt="Heatmap de alocação da equipe Sinpatinhas">
</div>


### Legenda
| Cor | Significado |
|---|---|
| <span class="legend-dot" style="background:#15803d"></span> | Alta participação |
| <span class="legend-dot" style="background:#22c55e"></span> | Participação média |
| <span class="legend-dot" style="background:#eab308"></span> | Participação moderada |
| <span class="legend-dot" style="background:#FF0000"></span> | Baixa participação |

---

## Como interpretar
- Cada **linha** representa um membro da equipe.  
- Cada **coluna** representa uma etapa/entrega do projeto.  
- A **intensidade da cor** indica o nível de envolvimento em cada atividade.

## Objetivo
Garantir uma **distribuição equilibrada** de trabalho, identificar possíveis **sobrecargas** e visualizar claramente o **comprometimento** de cada membro em todas as fases do projeto.

---

## Histórico de Versão

| Versão | Data       | Descrição                         | Autores           | Revisores                                                                 |
|------:|------------|-----------------------------------|-------------------|---------------------------------------------------------------------------|
| 1.0   | 10/09/2025 | Criação da página do Heatmap      | Luciano Machado   | Antonio Carvalho                                                           |
| 1.1   | 10/09/2025 | Atualização da página do Heatmap  | Antonio Carvalho  | Letícia Paiva                                                              |
| 1.2   | 10/09/2025 | Atualização de membro no Heatmap  | Letícia Paiva     | Antonio Carvalho, Heloísa Santos, Isaac Menezes, Luciano Machado, Mateus Negrini e Pedro Gomes |

---

<style>
  .chip{
    display:inline-block;
    padding:.25rem .6rem;
    border-radius:9999px;
    font-size:.8rem;
    font-weight:700;
    letter-spacing:.02em;
    background:linear-gradient(90deg,#06b6d4,#3b82f6);
    color:#eaf2ff;
    margin:.25rem 0 1rem;
  }
  .img-frame{
    background:#0b1220;
    border:1px solid rgba(148,163,184,.25);
    border-radius:12px;
    padding:12px;
    box-shadow:0 6px 18px rgba(2,6,23,.25);
    margin: .75rem 0 1rem;
  }
  .img-frame img{
    width:100%; height:auto; border-radius:8px;
  }
  .legend-dot{
    display:inline-block;
    width:14px; height:14px;
    border-radius:4px;
    box-shadow: inset 0 0 0 2px rgba(0,0,0,.08);
  }
  .markdown-section table{ width:100%; border-collapse:collapse; }
  .markdown-section thead th{
    text-transform:uppercase; letter-spacing:.04em; font-size:.78rem;
    color:#6b7280; font-weight:700; border-bottom:1px solid rgba(148,163,184,.35);
    padding:.7rem .9rem;
  }
  .markdown-section tbody td{
    border-bottom:1px solid rgba(148,163,184,.28);
    padding:.7rem .9rem;
  }
  .markdown-section tbody tr:hover{ background:rgba(2,6,23,.04); }
</style>
