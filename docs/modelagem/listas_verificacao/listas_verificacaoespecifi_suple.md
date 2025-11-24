# Lista de Verificação – Especificação Suplementar
**Autora:** Leticia Paiva

| Item | Descrição | Autor(es) | Referência |
|------|----------|-----------|------------|
| 1 | Foram especificados os requisitos funcionais que não estão nos diagramas de caso de uso (ex: login, auditoria, relatórios, tratamento de erros)? | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | |
| 2 | Foram definidos os padrões de interface e a experiência do usuário (UX) a ser seguida? | Heloisa Silva, Leticia Paiva | https://ibb.co/Rpq0LNTW |
| 3 | Foram especificados os requisitos de ajuda online, documentação de suporte e o tempo esperado para que o usuário se torne produtivo no sistema? | Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/mVz5bNmc |
| 4 | Foram especificados os requisitos de disponibilidade do sistema (ex: tempo de operação, tempo máximo de inatividade)? | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira | |
| 5 | Foram definidos o tempo médio entre falhas (MTBF) e o tempo médio para reparo (MTTR) aceitáveis para o sistema? | Heloisa Silva, Leticia Paiva | https://ibb.co/BKYF3yHL |
| 6 | Foram especificados os mecanismos de recuperação de falhas e de garantia da integridade dos dados? | Heloisa Silva, Isaac Menezes Pereira | |
| 7 | Foram especificados os tempos máximos de resposta para diferentes ações e transações do sistema? | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/BKYF3yHL |
| 8 | Foram definidos os requisitos de capacidade, como número de usuários simultâneos, volume de transações e crescimento esperado? | Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/BKYF3yHL |
| 9 | Foram especificadas as restrições de uso de recursos de hardware (memória, CPU)? | Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/BKYF3yHL |
| 10 | Foram definidos os requisitos de manutenibilidade, instalação e configuração do sistema? | Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | |
| 11 | Foram especificadas todas as restrições de design e implementação (ex: linguagens de programação, SGBD, padrões, hardware/software obrigatórios)? | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/JRyFkX1c |
| 12 | Foram especificados os requisitos de documentação a ser entregue ao usuário (manual, ajuda online)? | Isaac Menezes Pereira, Leticia Paiva | https://ibb.co/20Y4YQDj |
| 13 | Foram definidos os requisitos legais, regulatórios e de licenciamento de software? | Antonio Carvalho, Heloisa Silva, Isaac Menezes Pereira | |
| 14 | Introdução está completa e clara? | Antonio Carvalho | https://ibb.co/Hpq6hzNB |
| 15 | Projeto está corretamente identificado? | Antonio Carvalho | https://ibb.co/Hp17WXJM |
| 16 | As funcionalidades foram descritas em linguagem natural e organizadas por recurso, usuário ou subsistema? | Antonio Carvalho | https://ibb.co/N2gZdXBr |
| 17 | Requisitos de usabilidade estão definidos com critérios mensuráveis (ex.: tempo de treinamento, tempo de execução de tarefas, conformidade com padrões)? | Antonio Carvalho | https://ibb.co/PsCyNtr8 |
| 18 | Os requisitos de confiabilidade especificam disponibilidade, MTBF, MTTR, exatidão e taxa de erros permitida? | Antonio Carvalho | https://ibb.co/ymp2GWmB |

---

## Lista de Verificação Unificada

Os arquivos individuais foram consolidados em um único documento em formato PDF para consulta e registro no repositório.

**[Clique aqui para abrir o PDF unificado das listas individuais](https://requisitos-de-software.github.io/2025.2-SinPatinhas/assets/images/pdf_listas/listas_verificacao_especificacao_suplementar_unificado.pdf)**

---

## Lista de Verificação Elaborada por Cada Integrante do Grupo

| Integrante |
|------------|
| [Antonio Carvalho](https://drive.google.com/file/d/1lM05JR5YkKRaT7UBcYXbjT7d0TTM9vel/view?usp=sharing) |

---

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 12/10/2025 | Elaboração da lista consolidada de Especificação Suplementar  | Letícia  | [Antonio Carvalho](https://github.com/antonioscarvalho)   |

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
