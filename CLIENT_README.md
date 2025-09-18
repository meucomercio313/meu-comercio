# Guia de Gerenciamento e Propriedade do Projeto "Meu Comércio"

Olá! Este documento serve como um guia para você entender como seu novo site funciona e garantir que você tenha total autonomia e propriedade sobre ele.

O projeto é dividido em três componentes principais, e todos estão sob seu controle:

-   **Código-Fonte (GitHub):** A "planta" da sua aplicação está guardada em um repositório no GitHub. Você é o proprietário e pode conceder acesso a outros desenvolvedores no futuro.
-   **Aplicação no Ar (Vercel):** O site que seus clientes acessam está hospedado na Vercel. Você controla o deploy (publicação), o domínio e as configurações.
-   **Banco de Dados (Supabase):** Todos os dados dos leads capturados pelo formulário estão armazenados de forma segura em um projeto na sua conta do Supabase.

Com o controle dessas três contas (GitHub, Vercel, Supabase), você tem 100% de propriedade sobre todo o seu ativo digital.

## Segurança do Projeto

O código-fonte no GitHub não contém nenhuma senha ou chave de acesso. As "chaves" que conectam seu site ao banco de dados estão armazenadas de forma segura como **Variáveis de Ambiente** diretamente nas configurações do projeto na Vercel, garantindo que seus dados permaneçam protegidos.

## Acesso ao Painel de Leads

Seu projeto inclui um painel simples para visualizar os leads que chegam pelo formulário de contato.

-   **Como Acessar:** Basta adicionar `/admin` ao final do endereço do seu site.
    -   **Exemplo:** `https://www.meucomercio.com.br/admin`
-   **Funcionalidades:**
    -   Visualizar todos os leads enviados.
    -   Ver informações como nome da empresa, valor de investimento e objetivos de marketing.
    -   Os leads mais recentes aparecem no topo da lista.

## Observações sobre Manutenção e Custos

Atualmente, seu projeto opera de forma **totalmente gratuita**, utilizando os planos "Hobby" da Vercel e "Free" do Supabase, que são extremamente robustos para começar.

-   **Limites do Plano Gratuito (Supabase):**
    -   **Banco de Dados:** 500 MB (suficiente para centenas de milhares de leads).
    -   **Requisições de API:** Milhões por mês.

-   **Quando Fazer um Upgrade?**
    A necessidade de um plano pago geralmente surge quando o negócio cresce e exige funcionalidades como:
    1.  **Backups Diários Automáticos:** Para segurança máxima dos dados.
    2.  **Projeto Sempre Ativo:** O plano gratuito pode "pausar" o banco de dados após uma semana sem uso (reativando no primeiro acesso). Um plano pago garante performance máxima o tempo todo.

**Conclusão:** A infraestrutura atual suportará o crescimento do seu projeto por um longo período sem custos adicionais.

## Links Essenciais

-   **Aplicação no Ar (Seu Site):**
    -   `[URL_DO_SEU_SITE_EM_PRODUCAO]`

-   **Painel de Controle do Site (Vercel):**
    -   [https://vercel.com/dashboard](https://vercel.com/dashboard)

-   **Gerenciador do Banco de Dados (Supabase):**
    -   [https://app.supabase.com/](https://app.supabase.com/)

-   **Repositório do Código-Fonte (GitHub):**
    -   `[URL_DO_SEU_REPOSITORIO_NO_GITHUB]`