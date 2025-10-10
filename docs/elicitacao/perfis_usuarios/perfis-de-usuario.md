# Perfis de Usuários

<div class="chip">Perfis do Sistema</div>

Com uma análise detalhada da documentação, [Lei nº 15.046/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L15046.htm), [Decreto nº 12.439/2024](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12439.htm), [Perguntas e Respostas](https://www.gov.br/mma/pt-br/noticias/perguntas-e-respostas-sobre-o-propatinhas-e-o-sinpatinhas) e a pagina do Planalto ["RG para cães e gatos"](https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/rg-para-caes-e-gatos-tire-duvidas-sobre-a-nova-acao-do-governo-federal), o sistema **Sinpatinhas** possui diferentes perfis de usuários que interagem diretamente com a plataforma. Cada perfil tem funções, responsabilidades e permissões específicas, garantindo que o fluxo de informações seja seguro, organizado e atenda às necessidades dos envolvidos.

Foi possível identificar que o sistema **Sinpatinhas** possui diferentes perfis de usuários que interagem diretamente com a plataforma. Cada perfil tem funções, responsabilidades e permissões específicas, garantindo que o fluxo de informações seja seguro, organizado e atenda às necessidades dos envolvidos.

---

## Dono de Pet

O **Dono de Pet** é o usuário responsável por cadastrar e manter os dados de seus animais de estimação na plataforma.

### Responsabilidades

- Cadastrar seus animais no sistema.
- Fornecer informações pessoais para criação de conta.
- Atualizar dados do pet (nome, raça, idade, etc.).
- Solicitar troca de titularidade em caso de transferência de propriedade.
- Consultar e acessar a carteirinha digital do animal.

### Funcionalidades

- Cadastro do pet.
- Vinculação e desvinculação de animais ao usuário.
- Troca de titularidade do pet.
- Receber confirmação em processos que envolvam dois donos.

---

## Veterinário

O **Veterinário** é o profissional qualificado que realiza procedimentos de saúde e registra essas informações no perfil do animal.

### Responsabilidades

- Inserir dados de procedimentos realizados no pet (vacinação, microchipagem, castração etc.).
- Fornecer informações de identificação profissional (registro veterinário).
- Garantir a veracidade dos dados registrados.

### Funcionalidades

- Cadastro de procedimentos veterinários.
- Inclusão do pet em sua lista de atendimentos.
- Atualização do histórico de saúde do animal.

---

## Estrutura de Dados

Os dados fornecidos pelos **donos de pets** e **veterinários** são organizados em diferentes cadastros que interagem entre si:

- **Cadastro de Dono de Pet**: contém dados pessoais do proprietário.  
- **Cadastro Único de Pet**: contém dados principais do animal.  
- **Cadastro do Veterinário**: contém os dados de identificação do profissional.  

Esses cadastros permitem operações como:
- `cadastra pet`
- `vincula ao usuário`
- `desvincula do usuário`
- `troca dono`
- `insere procedimentos`

---

## Resumo

| Perfil        | Objetivo Principal | Exemplos de Ações |
|---------------|-------------------|-------------------|
| **Dono de Pet** | Gerenciar informações de seus animais | Cadastrar pet, atualizar dados, transferir propriedade |
| **Veterinário** | Registrar informações de saúde do pet | Inserir vacinas, castrações, microchipagem |

---

> A interação entre esses dois perfis garante a confiabilidade das informações do **Cadastro Nacional de Animais Domésticos**, fortalecendo a rastreabilidade e segurança dos registros.

---

## Histórico de Versão

| Versão | Data       | Descrição                                   | Autores  | Revisores |
|-------:|------------|----------------------------------------------|----------|-----------|
| 1.0    | 28/09/2025 | Criação da página para Checklists   | Antonio  | Pedro        |
| 1.1    | 29/09/2025 | Correção de links e referências            | Pedro  | Antonio     |

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
