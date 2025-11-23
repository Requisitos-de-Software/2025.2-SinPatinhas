# Introspecção

## Introdução

A introspecção é uma técnica de elicitação de requisitos que consiste em, por meio de uma reflexão pessoal e imersiva, **imaginar-se utilizando o sistema a ser desenvolvido** e, a partir dessa simulação mental, **identificar funcionalidades, necessidades e limitações relevantes ao contexto do software.**
No caso deste projeto, a técnica foi aplicada considerando o uso do aplicativo **SinPatinhas**, cujo propósito é facilitar o processo de adoção, acompanhamento e suporte ao bem-estar de animais.

Durante o processo introspectivo, **o indivíduo responsável pela técnica assume o papel de tutor de um animal — imaginando possíveis interações, necessidades e fluxos de uso.** Os requisitos identificados encontram-se apresentados nas Tabelas 1 e 2.

---

## Metodologia

A introspecção foi aplicada individualmente pelo aluno **[Antonio Carvalho](https://github.com/antonioscarvalho)**.  
Primeiramente, **foi imaginado um cenário completo** no qual o tutor de um animal utiliza o **SinPatinhas** para **encontrar um pet, agendar visitas presenciais, registrar cuidados, atualizar vacinação e receber recomendações personalizadas.**

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

| Tipo  | Descrição                                                                                     | ID   | 
|-------|-----------------------------------------------------------------------------------------------|------|
| RF042  | O aplicativo permite visualizar animais disponíveis para adoção.                             | IS001 | 
| RF043  | O aplicativo permite filtrar os animais por porte, espécie, idade e localização.             | IS002 | 
| RF044  | O aplicativo permite agendar uma visita presencial ao abrigo ou lar temporário.              | IS003 |
| RF045  | O aplicativo oferece um mecanismo de chat com o responsável pelo animal.                     | IS004 |
| RF046  | O aplicativo permite cadastrar um animal adotado para acompanhamento.                        | IS005 | 
| RF047  | O aplicativo permite registrar histórico de vacinação e consultas veterinárias.              | IS006 | 
| RF048  | O aplicativo notifica o tutor sobre datas de vacinação e consultas previstas.                | IS007 |
| RF049  | O aplicativo permite denunciar maus-tratos ou reportar abandono com envio de evidências.     | IS008 |
| RF050  | O aplicativo permite favoritar animais para posterior avaliação.                             | IS009 |

</center>

***Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)*

---

### Não Funcionais

<p style="text-align: center"><strong>Tabela 2 — Requisitos Não Funcionais.</strong></p>

<center>

| Tipo  | Descrição                                                                                                         | ID   | 
|-------|-------------------------------------------------------------------------------------------------------------------|------|
| RNF025 | O aplicativo deve exibir animais em uma interface responsiva, intuitiva e acessível.                             | IS010 | 
| RNF026 | O sistema deve permitir a realização de agendamento de visita com no máximo 4 cliques.                           | IS011 | 
| RNF027 | A notificação sobre vacinas e cuidados deve ocorrer com antecedência mínima de 5 dias.                           | IS012 | 
| RNF028 | O aplicativo deve carregar a lista de animais disponíveis em menos de 4 segundos em uma conexão estável.         | IS013 | 
| RNF029 | As fotos dos animais devem ser exibidas com boa resolução, sem distorção.                                        | IS014 | 
| RNF030 | O sistema deve oferecer autenticação segura com proteção contra acesso não autorizado.                           | IS015 | 
| RNF031 | Deve permitir navegação por acessibilidade (voz, contraste, leitor de tela).                                     | IS016 | 

</center>

***Autor:** [Antonio Carvalho](https://github.com/antonioscarvalho)*

---

!!! info
    Por se tratar de uma técnica baseada em percepção e experiência individual, requisitos identificados via introspecção podem diferir de outras técnicas, como entrevistas, questionários ou análise de documento, apresentando tanto expectativas subjetivas quanto necessidades implícitas não observadas por usuários reais.

---

## Bibliografia

> SERRANO, Milene; SERRANO, Maurício. **Requisitos (Aula 07): Elicitação, Modelagem e Análise**. *UnB Gama*, Brasília, 2023. Disponível em: <<https://aprender3.unb.br/pluginfile.php/2580553/mod_resource/content/2/Requisitos%20-%20Aula%2007.pdf>>. Acesso em: *26/04/2023*.

> UNIVERSIDADE DE BRASÍLIA. Bilheteria Digital — Elicitação: Introspecção. Disponível em: <https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/tecnicas/introspeccao/>. Acesso em: 21 nov. 2025.


---

## Histórico de Versões

| Data       | Versão | Descrição                         | Autor |
|------------|--------|-----------------------------------|-------|
| 21/11/2025 | 1.0    | Criação do documento de elicitação de requisitos por meio da técnica de introspecção | Antonio Carvalho |

