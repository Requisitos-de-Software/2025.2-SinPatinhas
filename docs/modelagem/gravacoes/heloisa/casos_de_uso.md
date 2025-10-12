# Casos de uso - Heloisa Silva

## #UC009 – Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados (RFNI001)

**Autor:** Heloisa Silva

<a id="uc009"></a>




<p align="center">
	<img src="../../../assets/images/uml/mapa_interativo.png" alt="Diagrama UML - Mapa Interativo" width="600"/>
</p>

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC009` |
| **Descrição** | Permitir que o tutor visualize um mapa interativo com a localização de clínicas e hospitais veterinários cadastrados, podendo filtrar por proximidade e agendar procedimentos. |
| **Ator(es)** | Tutor (exemplo: Roberto, 58 anos, tutor de duas cadelas) |
| **Pré-condições** | 1. O tutor deve estar autenticado no sistema.<br>2. Deve possuir um animal cadastrado.<br>3. A clínica ou hospital deve possuir convênio com o MMA. |
| **Ação** | Visualizar mapa, selecionar clínica/hospital, agendar procedimento. |
| **Fluxo Principal** | 1. O tutor acessa o sistema e visualiza o mapa com clínicas/hospitais próximos.<br>2. Seleciona o estabelecimento desejado.<br>3. O sistema apresenta cronograma de dias e horários disponíveis.<br>4. O tutor seleciona dia e horário.<br>5. O sistema valida os dados obrigatórios.<br>6. O sistema gera um ID para o agendamento e registra no perfil do tutor e do prestador.<br>7. Após o procedimento, o sistema marca o agendamento como realizado. |
| **Fluxos Alternativos** | - Caso a clínica não tenha horários disponíveis, o tutor é notificado.<br>- Caso haja imprevisto, o tutor é notificado. |
| **Fluxos de Exceção** | 1. Falha na validação dos dados obrigatórios.<br>→ O sistema exibe mensagem de erro.<br>2. Falha no registro do agendamento.<br>→ O sistema exibe mensagem de erro e orienta o tutor a tentar novamente. |
| **Pós-condições** | O tutor tem o procedimento agendado e registrado, podendo acompanhar o status pelo sistema. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RFNI001` |
| **Cenário Relacionado** | `#CNR005` |
| **Léxico Relacionado** | `#LX014` |

---

<font><p style="text-align: center">**Tabela 01** – Caso de Uso 09 – Exibir mapa interativo com a localização das clínicas e hospitais veterinários cadastrados (RFNI001)</p></font>

## #UC010 – Sistema de avaliação numérica para estabelecimentos (RFNI010)

**Autor:** Heloisa Silva

<a id="uc010"></a>



<p align="center">
	<img src="../../../assets/images/uml/sistema_avaliacao.png" alt="Diagrama UML - Sistema de Avaliação" width="600"/>
</p>

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | `#UC010` |
| **Descrição** | Permitir que o tutor avalie, de forma numérica, a clínica ou hospital veterinário após a realização de um procedimento. |
| **Ator(es)** | Tutor (exemplo: Roberto, 58 anos, tutor de duas cadelas) |
| **Pré-condições** | 1. O tutor deve estar logado no sistema.<br>2. Deve possuir um animal que tenha realizado procedimento veterinário pelo sistema. |
| **Ação** | Avaliar clínica/hospital após procedimento. |
| **Fluxo Principal** | 1. O tutor acessa seu perfil e seleciona o animal que realizou o procedimento.<br>2. Seleciona a aba de procedimentos.<br>3. O sistema exibe os procedimentos realizados.<br>4. O tutor seleciona o procedimento e visualiza opção de avaliação.<br>5. O tutor insere a avaliação numérica e envia.<br>6. O sistema confirma o envio e registra a avaliação. |
| **Fluxos Alternativos** | - Caso o tutor tenha faltado ou cancelado o procedimento, não poderá avaliar.<br>- Caso o tutor tente avaliar sem procedimento realizado, o sistema bloqueia a ação. |
| **Fluxos de Exceção** | 1. Falha no envio da avaliação.<br>→ O sistema exibe mensagem de erro e orienta nova tentativa.<br>2. Avaliação em formato inválido.<br>→ O sistema solicita correção. |
| **Pós-condições** | A avaliação é registrada e pode ser consultada pelo tutor e pelo estabelecimento. |
| **Data de Criação** | 12/10/2025 |
| **Rastreabilidade** | `RFNI010` |
| **Cenário Relacionado** | `#CNR006` |
| **Léxico Relacionado** | `#LX015` |

---
<font><p style="text-align: center">**Tabela 02** – Caso de Uso 10 – Sistema de avaliação numérica para estabelecimentos (RFNI010)</p></font>

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Heloisa Silva** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.0 | 12/10/2025 | Página de **Casos de Uso** própria | Heloisa | - |

---

## Referências  


---
