##  Lista de Verificação – Diagrama de Caso de Uso

| **Item** | **Descrição** | **Autor(es)** | **Conforme** | **Não Conforme** |
|:--:|-------------------------------------------|---------------------------------------------|:--:|:--:|
| **Estrutura e Limites do Sistema** |||||
| 1 | O sistema é representado por um retângulo no diagrama. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 2 | O nome do sistema está inserido no topo do retângulo. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 3 | Todos os elementos e ações do sistema estão dentro do retângulo. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 4 | Elementos externos ao sistema estão fora do retângulo. | Antonio Carvalho, Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| **Atores** |||||
| 5 | Atores são representados por um boneco palito. | Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 6 | Atores representam classes/categorias, não indivíduos. | Antonio Carvalho, Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| 7 | Atores primários (à esquerda) iniciam o sistema. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 8 | Atores secundários (à direita) reagem ao sistema. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 9 | Cada ator interage com pelo menos um caso de uso. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| **Casos de Uso** |||||
| 10 | Casos de uso são representados por ovais. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 11 | A descrição do caso de uso começa com um verbo. | Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| 12 | As descrições são claras e suficientemente descritivas. | Antonio Carvalho, Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| 13 | Os casos de uso estão organizados em ordem lógica. | Antonio Carvalho, Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| **Relacionamentos** |||||
| 14 | Associação é representada por uma linha sólida. | Heloisa Silva, Leticia Paiva | ☐ | ☐ |
| 15 | Relacionamentos de Inclusão (<<include>>) estão corretos. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| 16 | Relacionamentos de Extensão (<<extend>>) estão corretos. | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira | ☐ | ☐ |
| 17 | Relacionamentos de Generalização (herança) estão corretos. | Antonio Carvalho, Isaac Menezes Pereira, Leticia Paiva | ☐ | ☐ |
| **Propósito do Diagrama** |||||
| 18 | O diagrama oferece uma visão geral e simples do sistema. | Antonio Carvalho, Leticia Paiva | ☐ | ☐ |
| 19 | O diagrama demonstra o fluxo básico do sistema. | Antonio Carvalho | ☐ | ☐ |
| 20 | As funcionalidades representadas foram validadas com o cliente. | Isaac Menezes Pereira | ☐ | ☐ |


---

## Lista de Verificação Elaborada por Cada Integrante do Grupo

Os arquivos individuais foram consolidados em um único documento em formato PDF para consulta e registro no repositório.

📎 **[Acesse aqui o PDF unificado das listas individuais](../../assets/images/pdf_listas/listas_CasodeUso.pdf)**  
*(Clique no link acima para visualizar ou baixar o documento completo.)*

---

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 12/10/2025 | Elaboração da lista consolidada de Casos de Uso | Letícia Paiva | - |

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
