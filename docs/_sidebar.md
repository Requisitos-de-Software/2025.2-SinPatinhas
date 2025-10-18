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

  - [Entregas](apresentacoes.md)
</details>
<details>
  <summary><strong>Inspeções</strong></summary>
  
  - [Inspeção do Grupo 02 - Entrega 3](/inspecoes/inspecao_g2_e3.md)
</details>
<details>
  <summary><strong>Pré-rastreabilidade</strong></summary>
    
  - [Rich Picture](/planejamento/rich-picture/README.md)
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
  <summary><strong>Elicitação</strong></summary>

  - [Visão Geral](/elicitacao/README.md)
  - [Perfis de Usuário](/elicitacao/perfis_usuarios/perfis-de-usuario)
  - [Técnicas de Elicitação](/elicitacao/tecnicas_elicitacao/tec_elicitacao)
  - [Técnicas de Priorização](/elicitacao/tecnicas_priorizacao/tec-de-priorizacao)
  - [Listas de Verificação](/elicitacao/listas_verificacao/listas_verificacao)
  - [Inspeção grupo+1](/elicitacao/elicitacao_grupo_2/elicitacao_grupo_2)
  - [Experimentação com LLMs](/elicitacao/tecnicas_elicitacao/experimentacaoLLMs.md)
  - [Requisitos Elicitados](/elicitacao/tecnicas_elicitacao/requisitos_elicitados.md)
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
  - [NFR Framework](/modelagem/agilidade/nfr_framework.md)
  - [Histórias de Usuário](/modelagem/agilidade/historias_de_usuario.md)
</details>

<details>
  <summary><strong>Análise</strong></summary>

  - [Verificação](analise/verif_principal.md)
  - [Validação](analise/valid_principal.md)
</details>

<details>
  <summary><strong>Pós-Rastreabilidade</strong></summary>

  - [Forward-From](pos-rastreabilidade/foward_from.md)
  - [Backward-From](pos-rastreabilidade/backward_from.md)
  - [Matriz Geral](pos-rastreabilidade/matriz_geral.md)
</details>