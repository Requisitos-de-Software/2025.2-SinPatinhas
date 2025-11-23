<style>
/* Estilo geral da sidebar */
details {
  border-left: 3px solid #e0e0e0;
  padding-left: 10px;
  margin: 6px 0;
  transition: all 0.2s ease;
}

/* Estilo do título (summary) */
summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: #333;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;
}

/* Remove o marcador padrão do navegador */
summary::-webkit-details-marker {
  display: none;
}

/* Adiciona uma seta personalizada à esquerda */
summary::before {
  content: "▶";
  color: #888;
  font-size: 12px;
  margin-right: 8px;
  transition: transform 0.2s ease, color 0.2s ease;
}

/* Quando aberto, gira a seta */
details[open] summary::before {
  transform: rotate(90deg);
  color: #1a73e8;
}

/* Efeito hover */
summary:hover {
  background: #f7f7f7;
  color: #1a73e8;
}

/* Links internos */
details a {
  display: block;
  margin-left: 22px;
  margin-top: 4px;
  text-decoration: none;
  color: #444;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s ease;
}

/* Efeito hover em links */
details a:hover {
  color: #1a73e8;
}
</style>

- [Sobre](/README.md)

<details>
  <summary><strong>Apresentações</strong></summary>

  - [Entrega de n° 01](/entregas/entrega_1.md)
  - [Entrega de n° 02](/entregas/entrega_2.md)
  - [Entrega de n° 03](/entregas/entrega_3.md)
  - [Entrega de n° 04](/entregas/entrega_4.md)
  - [Entrega de n° 05](/entregas/entrega_5.md)
  - [Entrega de n° 06](/entregas/entrega_6.md)
  - [Entrega Final](/entregas/entrega_final.md)
</details>

<details>
  <summary><strong>Inspeções e Verificações</strong></summary>

  - [Inspeções dos monitores](/rev_monitor/inspecao.md)
  - [Inspeção do Grupo 01 - Entrega 1](/inspecoes/insp_g1_e1.md)
  - [Inspeção do Grupo 01 - Entrega 2](/inspecoes/insp_g1_e2.md)
  - [Inspeção do Grupo 01 - Entrega 3](/inspecoes/insp_g1_e3.md)
  - [Inspeção do Grupo 01 - Entrega 4](/inspecoes/insp_g1_e4.md)
  - [Inspeção do Grupo 01 - Entrega 5](/inspecoes/insp_g1_e5.md)
  - [Inspeção do Grupo 01 - Entrega 6](/inspecoes/insp_g4_e6.md)
  - [Inspeção do Grupo 02 - Entrega 1](/inspecoes/inspecao_g2_e2.md)
  - [Inspeção do Grupo 02 - Entrega 2](/inspecoes/inspecao_g2_e2.md)
  - [Inspeção do Grupo 02 - Entrega 3](/inspecoes/inspecao_g2_e3.md)
  - [Inspeção do Grupo 02 - Entrega 4](/inspecoes/inspecao_g2_e4.md)
  - [Inspeção do Grupo 02 - Entrega 5](/inspecoes/inspecao_g2_e5.md)
  - [Inspeção do Grupo 04 - Entrega 6](/inspecoes/inspecao_g4_e6.md)
  - [List. de Ver. Próp. e do Professor](/elicitacao/listas_verificacao/listas_verificacao.md) 
</details>

<details>
  <summary><strong>Planejamento</strong></summary>

  - [Visão Geral](/planejamento/README.md)
  - [Cronograma das Atividades](/planejamento/cronograma/README.md)
  - [Ferramentas](/planejamento/ferramentas/README.md)
  - [Metodologia](/planejamento/metodologias/README.md)
  - [Heatmap](/planejamento/heatmap/README.md)
  - [Aplicativo Analisado](/planejamento/aplicativo/README.md)
  - [Atas de Reuniões](/planejamento/atas/README.md)
  - [Referências](/planejamento/referencias/README.md)
</details>

<details>
  <summary><strong>Pré-rastreabilidade</strong></summary>

- [Rich-Picture](/planejamento/rich-picture/README.md)
- [Lista de Verificação](/planejamento/rich-picture/lista_de_verificao.md)
</details>

<details>
  <summary><strong>Elicitação</strong></summary>

  - [Visão Geral](/elicitacao/README.md)
  - [Perfis de Usuário](/elicitacao/perfis_usuarios/perfis-de-usuario)
  - [Entrevistas](/elicitacao/tecnicas_elicitacao/metodologias/tec_elicitacao)
  - [Instrospeção](/elicitacao/tecnicas_elicitacao/metodologias/introspeccao.md)
  - [Experimentação com LLMs](/elicitacao/tecnicas_elicitacao/experimentacaoLLMs.md)
  - [Requisitos Elicitados](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)
  - [Técnicas de Priorização](/elicitacao/tecnicas_priorizacao/tec-de-priorizacao)
  - [Técnica MoSCoW](/elicitacao/tecnicas_priorizacao/MoSCoW.md)

</details>

<details>
  <summary><strong>Modelagem</strong></summary>

  - [Cenários](/modelagem/cenarios.md)
  - [Léxicos](/modelagem/lexicos.md)
  - [Casos de Uso](/modelagem/casos_de_uso.md)
  - [Especificação Suplementar](/modelagem/especificacao_suplementar.md)
  - [Listas de Verificação](/modelagem/listas_verificacao/listasdeverificação.md)
</details>

<details>
  <summary><strong>Agilidade</strong></summary>

  - [Backlog](/modelagem/agilidade/backlog.md)
  - [NFR Framework](/modelagem/agilidade/NFR_framework.md)
  - [Histórias de Usuário](/modelagem/agilidade/historias_de_usuario.md)
  - [Listas de Verificação](/modelagem/listas_verificacao/listas_verificacao_HUB_e_NFR.md)
</details>

<details>
  <summary><strong>Pós-Rastreabilidade</strong></summary>

  - [Forward-From](/pos-rastreabilidade/foward_from.md)
  - [Backward-From](/pos-rastreabilidade/backward_from.md)
  - [Matriz Geral](/pos-rastreabilidade/matriz_geral.md)
  - [Elos](/pos-rastreabilidade/elos.md)
</details>

<details>
  <summary><strong>Análise</strong></summary>

  - [Verificação](/analise/verificacao_geral.md)
  - [Protótipos](/analise/prototipos.md)
  - [Comprovação Informal](/analise/comp_informal.md)
</details>

<details>
  <summary><strong>Projeto Final</strong></summary>

- [Entrega Final](/entrega_final/entrega_final.md)
</details>