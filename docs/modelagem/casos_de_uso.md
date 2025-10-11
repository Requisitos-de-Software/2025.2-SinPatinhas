# Casos de Uso – Projeto SinPatinhas

## Introdução

Os **diagramas de caso de uso** são parte fundamental da **UML (Unified Modeling Language)**, permitindo representar graficamente as funcionalidades de um sistema sob a ótica de seus usuários. Essa abordagem facilita a visualização das interações entre **atores** (usuários ou sistemas externos) e os **serviços oferecidos** pela aplicação, promovendo um entendimento comum entre a equipe de desenvolvimento e os stakeholders.

No contexto do **projeto SinPatinhas**, o diagrama de caso de uso ilustra as principais ações do sistema, como **cadastro de tutores e animais (RF001 e RF002)**, **geração do Registro Geral do Animal – RGA (RF003)**, **emissão de documento de identificação (RF005)** e **consulta pública de registros (RF006)**.  

A modelagem também contempla interações complementares, como **atualização de status do animal (RF007)**, **transferência de titularidade (RF009)** e **registro de histórico veterinário (RF008)**. Dessa forma, o diagrama contribui para o entendimento global das funcionalidades previstas e assegura o alinhamento com os **requisitos funcionais elicitados**.

---

## Artefatos e Gravações Unitários

| Participante | Página Específica |
|---------------|------------------|
| Antonio Carvalho | [Página específica da modelagem dos casos de uso](/modelagem/gravacoes/antonio/caso_de_uso.md) |

---

## Estrutura do Diagrama

O diagrama de casos de uso do **SinPatinhas** contém os seguintes elementos principais:

- **Atores:** representam usuários externos como tutores, veterinários e órgãos públicos.  
- **Casos de uso:** ações desempenhadas dentro do sistema (ex.: *Cadastrar Animal*, *Emitir RG Pet*, *Consultar Animal*).  
- **Limite do sistema:** define o escopo do que pertence ao SinPatinhas.  
- **Relacionamentos:** demonstram dependências e extensões entre funcionalidades.  

Exemplo:  
- “Emitir RG Pet” **inclui** “Gerar RGA” (RF003).  
- “Registrar Microchip” **estende** “Cadastrar Animal” (RF004).  

---

## Validação com Usuário

A validação dos casos de uso foi realizada a partir das entrevistas conduzidas na etapa de **elicitação de requisitos**, nas quais foram confirmadas as necessidades principais dos usuários.  
Tutores e veterinários destacaram funcionalidades essenciais como o **cadastro e histórico dos animais**, **integração com clínicas** e **emissão de documentos oficiais**, garantindo que o modelo atenda às expectativas reais dos usuários.

---

## Tabela de Contribuição

| Nome               | Contribuição (%) | Função                     |
|--------------------|------------------|-----------------------------|
| **Antonio Carvalho** | 100%             | Autor da página de apresentação de caso de uso |

---

## Tabela de Versionamento

| Versão | Data       | Descrição                                 | Autores | Revisores |
|:------:|:-----------|:------------------------------------------|:--------|:-----------|
| 1.0    | 10/10/2025 | Criação da apresentação de caso de uso    | Antonio | -          |

---

## Referências

[1] Pressman, R. S. *Engenharia de Software: uma abordagem profissional*. 8ª Ed. AMGH, 2016.  
[2] Sommerville, I. *Engenharia de Software*. 10ª Ed. Pearson, 2019.
