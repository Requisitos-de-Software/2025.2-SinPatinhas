# ⚙️ Requisitos Não Funcionais – SinPatinhas

<div class="chip">Qualidade e Confiabilidade</div>

Os requisitos não funcionais garantem que o **Cadastro Nacional de Animais Domésticos (SinPatinhas)** funcione de forma segura, eficiente e acessível a todos os usuários, em conformidade com legislações vigentes e boas práticas de sistemas governamentais.

---

## 🔒 Segurança
- O sistema deve estar em conformidade com a **Lei Geral de Proteção de Dados (LGPD)**.  
- Dados sensíveis (CPF, endereço, telefone) devem ser armazenados com criptografia.  
- O acesso deve ser autenticado via **Gov.br** com múltiplos níveis de segurança.  
- O sistema deve registrar **logs de acesso e alterações** para auditoria.  
- Somente informações autorizadas (ex.: telefone para contato em caso de perda do animal) podem ser públicas.  

---

## ⚡ Desempenho
- O sistema deve suportar **picos de até 1 milhão de acessos simultâneos**.  
- A resposta a qualquer requisição do usuário deve ocorrer em no máximo **3 segundos** em condições normais.  
- A sincronização de cadastros entre estados, municípios e a base nacional deve ocorrer em tempo **quase real (< 5 minutos)**.  

---

## 🌐 Disponibilidade
- O sistema deve ter **disponibilidade mínima de 99,5%** ao ano.  
- O sistema deve estar acessível **24 horas por dia, 7 dias por semana**, com exceção de períodos programados de manutenção.  
- Deve haver **plano de contingência** para indisponibilidade, garantindo que cadastros e atualizações sejam armazenados em fila para processamento posterior.  

---

## 📱 Usabilidade e Acessibilidade
- O sistema deve possuir interface **responsiva**, acessível em desktop, tablet e smartphone.  
- Deve atender às recomendações de **Acessibilidade Digital (WCAG 2.1)** para inclusão de pessoas com deficiência.  
- A interface deve estar disponível em **português**, com possibilidade futura de expansão para outros idiomas.  
- O fluxo de cadastro deve ser simples, permitindo o registro de um animal em até **5 minutos**.  

---

## 🔄 Manutenibilidade e Evolutividade
- O sistema deve utilizar arquitetura **modular** para facilitar manutenção e evolução.  
- Novas funcionalidades devem poder ser adicionadas sem impacto significativo nos serviços existentes.  
- Atualizações e correções devem ser aplicadas sem interrupção prolongada do serviço.  

---

## 🔗 Integração
- O sistema deve integrar-se com a base de autenticação **Gov.br**.  
- Deve possibilitar integração via **APIs REST** com sistemas estaduais e municipais de bem-estar animal.  
- O banco de dados deve permitir exportação de relatórios em **CSV, JSON e PDF**.  

---

## 📊 Confiabilidade e Consistência
- Todos os registros devem ser **únicos e consistentes**, evitando duplicidade de cadastros.  
- Dados corrompidos ou incompletos devem ser automaticamente rejeitados pelo sistema.  
- O sistema deve ter mecanismos de **backup diário automático** e **recuperação em até 24h** em caso de falha grave.  

---

## 📌 Conformidade Legal
- O sistema deve estar em conformidade com:  
  - **Lei nº 13.426/2017** (Política de controle populacional de cães e gatos).  
  - **Lei nº 15.046/2024** (Política de Bem-Estar Animal).  
  - **Decreto nº 12.439/2025** (institui o SinPatinhas).  
- O tratamento dos dados deve seguir rigorosamente a **LGPD**.  

---

## Histórico de Versão

| Versão | Data       | Descrição                                        | Autores  | Revisores |
|-------:|------------|--------------------------------------------------|----------|-----------|
| 1.0    | 29/09/2025 | Criação da página para requisitos não funcionais | Mateus   | -         |

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
.chip{
  font-size: .8rem;
  background: rgba(55,102,174,.08);
  border: 1px solid rgba(55,102,174,.35);
  padding: .25rem .55rem;
  border-radius: 999px;
}
</style>
