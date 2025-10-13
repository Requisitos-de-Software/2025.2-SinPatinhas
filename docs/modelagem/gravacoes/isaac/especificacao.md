# Especificações Suplementares — Isaac Menezes

---

## #ES009 – Exibição da média de atendimentos por clínica (RNFI014)

**Autor:** Isaac Menezes

Os requisitos de **Exibição da média de atendimentos por clínica** detalham como o sistema deve apresentar ao usuário a média ponderada de consultas de cada clínica, fornecendo uma informação útil para orientar decisões e demonstrar a reputação das clínicas.

<p align="center"><b>Tabela 3 - Requisitos de Exibição da Média de Atendimentos.</b></p>

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | RNFI014 |
| **Título** | Exibição da média de atendimentos por clínica |
| **Descrição** | Exibir para o usuário a média de consultas por cada clínica |
| **Justificativa/Objetivo** | Conceder ao usuário uma informação útil que pode comunicar experiência e boa imagem da clínica |
| **Ator(es)** | Dono de pet, Administrador, Interessado na clínica, Profissional da área |
| **Pré-condições** | - O usuário deve ter acesso à internet <br> - O usuário deve estar com o aplicativo SinPatinhas instalado <br> - O usuário deve estar na página correspondente da clínica |
| **Entradas** | - Pesquisa do usuário <br> - Clicar no botão "pesquisar" <br> - Selecionar o perfil desejado |
| **Saídas** | - O sistema calcula a média ponderada <br> - Exibição do resultado do cálculo para o usuário |
| **Regras de Negócio** | 1. Apenas clínicas que já fizeram consultas exibirão resultado do cálculo <br> 2. Para clínicas que não possuem consultas, será exibido uma mensagem com essa informação |
| **Requisitos de Desempenho** | - Tempo máximo de resposta de 3 segundos <br> - Tempo máximo de carregamento da página de 2 segundos |
| **Requisitos de Usabilidade** | - Resultado do cálculo com duas casas decimais <br> - Resultado do cálculo exibido juntamente com as demais informações da clínica |
| **Requisitos de Portabilidade** | - Compatível com as versões mais recentes dos principais navegadores (Chrome, Firefox, Safari, Edge) |
| **Requisitos de Segurança** | - Conexão do tipo HTTPS |
| **Tratamento de Erros / Exceções** | - Clínica sem consultas: exibir mensagem informando que não foram feitas consultas <br> - Clínica inexistente: exibir mensagem informando que a clínica não existe |
| **Dependências** | - Informação no banco de dados de quantas consultas ocorreram <br> - Função simples capaz de calcular a média ponderada |
| **Critérios de Aceitação** | 1. O usuário consegue ver o resultado do cálculo <br> 2. O cálculo tem apenas duas casas decimais |
| **Rastreabilidade** | RNFI014, #UC009, LX014, LX015, LX016, LX017, LX018, LX019, LX020 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | - |

---

## #ES010 – Exibição da média de atendimentos por profissional (RNFI015)

**Autor:** Isaac Menezes

Os requisitos de **Exibição da média de atendimentos por profissional** detalham como o sistema deve apresentar ao usuário a média ponderada de consultas de cada médico ou profissional da clínica, fornecendo uma informação útil para transmitir experiência e transparência.

<p align="center"><b>Tabela 4 - Requisitos de Exibição da Média de Atendimentos por Profissional.</b></p>

| **Componente** | **Descrição** |
|----------------|----------------|
| **Código** | RNFI015 |
| **Título** | Exibição da média de atendimentos por profissional |
| **Descrição** | Exibir para o usuário a média de consultas do médico |
| **Justificativa/Objetivo** | Informar ao usuário um dado útil que comunique experiência e transparência |
| **Ator(es)** | Dono de pet, Administrador, Interessado na clínica, Profissional da área |
| **Pré-condições** | - O usuário deve ter acesso à internet <br> - O usuário deve estar com o aplicativo SinPatinhas instalado <br> - O usuário deve estar na página correspondente da clínica |
| **Entradas** | - Pesquisa do usuário <br> - Clicar no botão "pesquisar" <br> - Selecionar o perfil desejado |
| **Saídas** | - O sistema calcula a média ponderada <br> - Exibição do resultado do cálculo para o usuário |
| **Regras de Negócio** | 1. Apenas profissionais que já fizeram consultas exibirão resultado do cálculo <br> 2. Para profissionais que não possuem consultas, será exibido uma mensagem com essa informação |
| **Requisitos de Desempenho** | - Tempo máximo de resposta de 3 segundos <br> - Tempo máximo de carregamento da página de 2 segundos |
| **Requisitos de Usabilidade** | - Resultado do cálculo com duas casas decimais <br> - Resultado do cálculo exibido juntamente com as demais informações da clínica |
| **Requisitos de Portabilidade** | - Compatível com as versões mais recentes dos principais navegadores (Chrome, Firefox, Safari, Edge) |
| **Requisitos de Segurança** | - Conexão do tipo HTTPS |
| **Tratamento de Erros / Exceções** | - Profissionais sem consultas: exibir mensagem informando que não foram feitas consultas <br> - Profissional inexistente: exibir mensagem informando que o profissional não existe |
| **Dependências** | - Informação no banco de dados de quantas consultas ocorreram <br> - Função simples capaz de calcular a média ponderada |
| **Critérios de Aceitação** | 1. O usuário consegue ver o resultado do cálculo <br> 2. O cálculo tem apenas duas casas decimais |
| **Rastreabilidade** | RNFI015, #UC010, LX014, LX015, LX016, LX017, LX018, LX019, LX020 |
| **Data de Criação** | 12/10/2025 |
| **Observações / Comentários** | - |

---

## Tabela de Contribuição

| Nome | Contribuição (%) | Função |
|------|------------------|--------|
| **Isaac Menezes** | 100% | Autor desta página |

---

## Tabela de Versionamento

| Versão | Data | Descrição | Autores | Revisores |
|:------:|:-----------|:-------------------------------------------|:--------|:-----------|
| 1.2 | 12/10/2025 | Adicionado RNFI015: Exibição da média de atendimentos por profissional | Isaac | - |

---

## Referências  

SERRANO, Milene; SERRANO, Maurício. *Requisitos de Software – Aula 11: Especificação e casos de uso em Requisitos.* Brasília: Universidade de Brasília, 2025.