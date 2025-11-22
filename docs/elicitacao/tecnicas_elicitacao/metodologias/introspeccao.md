# Introspecção

## Introdução

A introspecção é uma técnica de elicitação de requisitos que consiste em, por meio de uma reflexão pessoal e imersiva, imaginar-se utilizando o sistema a ser desenvolvido e, a partir dessa simulação mental, identificar funcionalidades, necessidades e limitações relevantes ao contexto do software.  
No caso deste projeto, a técnica foi aplicada considerando o uso do aplicativo **SinPatinhas**, cujo propósito é facilitar o processo de adoção, acompanhamento e suporte ao bem-estar de animais.

Durante o processo introspectivo, o indivíduo responsável pela técnica assume o papel de tutor de um animal — imaginando possíveis interações, necessidades e fluxos de uso. Os requisitos identificados encontram-se apresentados nas Tabelas 1 e 2.

---

## Metodologia

A introspecção foi aplicada individualmente pelo aluno **[Antonio Carvalho](https://github.com/antonioscarvalho)**.  
Primeiramente, foi imaginado um cenário completo no qual o tutor de um animal utiliza o **SinPatinhas** para encontrar um pet, agendar visitas presenciais, registrar cuidados, atualizar vacinação e receber recomendações personalizadas.

Após o exercício reflexivo, os requisitos foram classificados em:

- **Requisitos Funcionais (RF)** — funções que o sistema deve executar.
- **Requisitos Não Funcionais (RNF)** — restrições, comportamentos esperados ou padrões de qualidade.

As tabelas abaixo apresentam os resultados levantados a partir da técnica.

---

## Requisitos elicitados

### Funcionais

Legenda:

- **RFx** = Requisito Funcional nº x  
- **RNFx** = Requisito Não Funcional nº x  
- **ISx** = Requisito elicitado pela introspecção

<p style="text-align: center"><strong>Tabela 1 — Requisitos Funcionais.</strong></p>

<center>

| Tipo  | Descrição                                                                                     | ID   | Implementado |
|-------|-----------------------------------------------------------------------------------------------|------|--------------|
| RF01  | O aplicativo permite visualizar animais disponíveis para adoção.                             | IS01 | Sim          |
| RF02  | O aplicativo permite filtrar os animais por porte, espécie, idade e localização.             | IS02 | Não          |
| RF03  | O aplicativo permite agendar uma visita presencial ao abrigo ou lar temporário.              | IS03 | Não          |
| RF04  | O aplicativo oferece um mecanismo de chat com o responsável pelo animal.                     | IS04 | Não          |
| RF05  | O aplicativo permite cadastrar um animal adotado para acompanhamento.                        | IS05 | Sim          |
| RF06  | O aplicativo permite registrar histórico de vacinação e consultas veterinárias.              | IS06 | Não          |
| RF07  | O aplicativo notifica o tutor sobre datas de vacinação e consultas previstas.                | IS07 | Sim          |
| RF08  | O aplicativo permite denunciar maus-tratos ou reportar abandono com envio de evidências.     | IS08 | Não          |
| RF09  | O aplicativo permite favoritar animais para posterior avaliação.                             | IS09 | Sim          |

</center>

---

### Não Funcionais

<p style="text-align: center"><strong>Tabela 2 — Requisitos Não Funcionais.</strong></p>

<center>

| Tipo  | Descrição                                                                                                         | ID   | Implementado |
|-------|-------------------------------------------------------------------------------------------------------------------|------|--------------|
| RNF01 | O aplicativo deve exibir animais em uma interface responsiva, intuitiva e acessível.                             | IS10 | Parcial      |
| RNF02 | O sistema deve permitir a realização de agendamento de visita com no máximo 4 cliques.                           | IS11 | Não          |
| RNF03 | A notificação sobre vacinas e cuidados deve ocorrer com antecedência mínima de 5 dias.                           | IS12 | Sim          |
| RNF04 | O aplicativo deve carregar a lista de animais disponíveis em menos de 4 segundos em uma conexão estável.         | IS13 | Não Testado  |
| RNF05 | As fotos dos animais devem ser exibidas com boa resolução, sem distorção.                                        | IS14 | Parcial      |
| RNF06 | O sistema deve oferecer autenticação segura com proteção contra acesso não autorizado.                           | IS15 | Sim          |
| RNF07 | Deve permitir navegação por acessibilidade (voz, contraste, leitor de tela).                                     | IS16 | Não          |

</center>

---

!!! info
    Por se tratar de uma técnica baseada em percepção e experiência individual, requisitos identificados via introspecção podem diferir de outras técnicas, como entrevistas, questionários ou análise de documento, apresentando tanto expectativas subjetivas quanto necessidades implícitas não observadas por usuários reais.

---

## Bibliografia

> SERRANO, Milene; SERRANO, Maurício. **Requisitos (Aula 07): Elicitação, Modelagem e Análise**. *UnB Gama*, Brasília, 2023.  
> Disponível em: <<https://aprender3.unb.br/pluginfile.php/2580553/mod_resource/content/2/Requisitos%20-%20Aula%2007.pdf>>.  
> Acesso em: *26/04/2023*.

> **Referência de técnica aplicada:**  
> Disponível em: <<https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/tecnicas/introspeccao/>>.  
> Acesso em: *21/11/2025*.

---

## Histórico de Versões

| Data       | Versão | Descrição                         | Autor |
|------------|--------|-----------------------------------|-------|
| 21/11/2025 | 1.0    | Criação inicial do documento      | Antonio Carvalho |

