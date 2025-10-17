# Perfis de Usuários

<div class="chip">Perfis do Sistema</div>

Com base na análise da [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm), [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm), além de informações do [Portal do Governo Federal](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas) e da página oficial ["RG para cães e gatos"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal), foi possível identificar e estruturar os principais **perfis de usuários** do sistema **SinPatinhas**.

Cada perfil representa um conjunto específico de responsabilidades, funções e permissões dentro da plataforma, assegurando que as informações sejam tratadas de forma organizada, segura e em conformidade com a legislação vigente.

---

## Dono de Pet

O **Dono de Pet** é o principal responsável pelo cadastro, atualização e gestão das informações de seus animais na plataforma **SinPatinhas**. Esse perfil representa o tutor que mantém o vínculo de posse com o pet e tem acesso direto à carteirinha digital.

### Responsabilidades
- Realizar o cadastro do animal no sistema.  
- Inserir e atualizar informações pessoais e do pet.  
- Solicitar a **transferência de titularidade** em caso de mudança de dono.  
- Acompanhar o histórico do animal e suas atualizações.  
- Confirmar operações que envolvem múltiplos donos.

### Funcionalidades
- Cadastro e edição de pets.  
- Visualização da carteirinha digital.  
- Solicitação de troca de titularidade.  
- Recebimento de notificações sobre atualizações do pet.

---

## Veterinário

O **Veterinário** é o profissional habilitado para realizar e registrar procedimentos de saúde no sistema, assegurando a autenticidade e integridade das informações médicas do animal.

### Responsabilidades
- Registrar atendimentos, vacinas e microchipagens.  
- Informar dados de identificação profissional (registro no conselho).  
- Atualizar o histórico médico do animal.  
- Garantir a validade e veracidade das informações lançadas.  

### Funcionalidades
- Cadastro de procedimentos veterinários.  
- Consulta a históricos clínicos.  
- Inclusão e acompanhamento de pets atendidos.

---

## Clínica ou Hospital Veterinário

A **Clínica ou Hospital Veterinário** representa uma entidade jurídica responsável por abrigar múltiplos profissionais e gerir atendimentos veterinários de forma centralizada no sistema **SinPatinhas**.

### Responsabilidades
- Registrar sua instituição no sistema.  
- Vincular veterinários à clínica.  
- Autorizar o uso do CNPJ em atendimentos registrados.  
- Garantir o cumprimento das normas de registro de procedimentos.

### Funcionalidades
- Gerenciamento de perfis de veterinários.  
- Cadastro institucional.  
- Emissão de relatórios sobre atendimentos realizados.  
- Controle de dados cadastrais e atualizações.

---

## Organizações

As **Organizações** compreendem entidades públicas ou privadas envolvidas com o controle, acolhimento e adoção de animais, como abrigos, ONGs e órgãos de fiscalização.

### Responsabilidades
- Cadastrar animais sob sua tutela no sistema.  
- Atualizar o status de adoção, resgate ou transferência.  
- Garantir a veracidade das informações referentes aos animais abrigados.  
- Colaborar com órgãos públicos para manutenção dos registros nacionais.

### Funcionalidades
- Cadastro de animais sob cuidado da instituição.  
- Atualização de status (adotado, em tratamento, disponível etc.).  
- Emissão de relatórios e estatísticas de acolhimento.  
- Consulta a registros de pets vinculados.

---

## Estrutura de Dados

Os dados fornecidos pelos diferentes perfis são organizados em cadastros interconectados, garantindo integridade e rastreabilidade das informações:

- **Cadastro de Dono de Pet:** informações pessoais e vínculo com o pet.  
- **Cadastro Único de Pet:** dados identificadores do animal (nome, espécie, microchip, etc.).  
- **Cadastro de Veterinário:** identificação profissional e histórico de atendimentos.  
- **Cadastro de Clínica/Hospital:** informações institucionais e vínculo com profissionais.  
- **Cadastro de Organização:** dados institucionais e registro de animais tutelados.

Esses cadastros possibilitam operações como:
- `cadastra_pet()`  
- `vincula_dono()`  
- `insere_procedimento()`  
- `atualiza_status_adocao()`  
- `gera_relatorio()`

---

## Resumo dos Perfis

| **Perfil**                  | **Objetivo Principal**                                | **Exemplos de Ações**                                         |
|------------------------------|-------------------------------------------------------|---------------------------------------------------------------|
| **Dono de Pet**              | Gerenciar informações dos animais cadastrados         | Cadastrar pet, atualizar dados, transferir propriedade         |
| **Veterinário**              | Registrar procedimentos e dados de saúde              | Inserir vacinas, castrações, microchipagens                    |
| **Clínica ou Hospital**      | Centralizar atendimentos e gerir veterinários         | Cadastrar instituição, vincular profissionais, gerar relatórios |
| **Organizações**             | Cuidar e registrar animais sob tutela institucional    | Atualizar status, cadastrar pets, emitir relatórios            |

---

> A integração entre esses perfis é essencial para garantir a confiabilidade, rastreabilidade e segurança das informações do **Cadastro Nacional de Animais Domésticos**, conforme previsto nas legislações e diretrizes federais.

---

## Tabela de Contribuições

| **Nome**            | **Contribuição (%)** | **Função**                          |
|----------------------|----------------------|-------------------------------------|
| **Antonio Carvalho** | 100%                 | Autor da página de Perfis de Usuário |

---

## Tabela de Versionamento

| **Versão** | **Data**     | **Descrição**                                  | **Autor** | **Revisor** |
|------------|---------------|-----------------------------------------------|------------|--------------|
| 1.0        | 14/10/2025    | Criação e padronização da página de perfis    | Antonio    | —            |

---

## Referências

BRASIL. *Lei nº 15.046, de 2024.* Dispõe sobre a criação do Cadastro Nacional de Animais Domésticos.  
BRASIL. *Decreto nº 12.439, de 2025.* Regulamenta o Sistema Nacional de Identificação de Animais Domésticos – SINPATINHAS.  
GOV.BR. *Perguntas e respostas sobre o ProPatinhas e o SinPatinhas.* Ministério do Meio Ambiente e Mudança do Clima, 2025.  
PLANALTO. *RG para cães e gatos: tire dúvidas sobre a nova ação do Governo Federal.* 2025.  
