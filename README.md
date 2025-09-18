# Meu Comércio - Landing Page & Painel de Leads

"Meu Comércio" é uma landing page de alta conversão para uma agência de marketing digital, construída com Next.js e Supabase. O projeto inclui uma página de apresentação completa e um painel administrativo para visualização dos leads capturados.

## Arquitetura e Funcionalidades

-   **Landing Page Moderna:** Uma página única (`single page`) com seções de Herói, Serviços, Depoimentos, CTA e Rodapé, seguindo as melhores práticas de UI/UX para conversão.
-   **Formulário de Captação:** Um formulário modal interativo para capturar informações de potenciais clientes (leads).
-   **Painel de Admin (`/admin`):** Uma rota simples e protegida (apenas por URL, sem autenticação nesta versão) para visualizar os leads enviados pelo formulário, ordenados por data.
-   **Server-Side Rendering (SSR):** A página de admin busca os dados diretamente do servidor no momento do acesso, garantindo que as informações estejam sempre atualizadas sem expor chaves de acesso no cliente.
-   **Componentização com Shadcn/ui:** A interface é construída com componentes reutilizáveis e estilizados com Tailwind CSS.

## Tecnologias Utilizadas

-   **Framework:** [Next.js](https://nextjs.org/) (com App Router)
-   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
-   **Backend e Banco de Dados:** [Supabase](https://supabase.com/) (PostgreSQL)
-   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [Shadcn/ui](https://ui.shadcn.com/)
-   **Ícones:** [Lucide React](https://lucide.dev/)
-   **Validação de Formulário:** [Zod](https://zod.dev/) e [React Hook Form](https://react-hook-form.com/)

## Como Rodar Localmente

1.  **Pré-requisitos:** Node.js (versão 20+).

2.  **Clone o repositório e instale as dependências:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_GITHUB]
    cd meu-comercio
    npm install
    ```

3.  **Configure o Supabase:**
    -   Crie um projeto em [supabase.com](https://supabase.com/).
    -   Navegue até o **SQL Editor**.
    -   Execute o seguinte script para criar a tabela `leads`:
        ```sql
        CREATE TABLE leads (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            company_name TEXT NOT NULL,
            investment_value TEXT NOT NULL,
            has_invested_before BOOLEAN NOT NULL,
            was_satisfied BOOLEAN,
            marketing_goals TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
        );
        ```

4.  **Variáveis de Ambiente:**
    -   Crie um arquivo `.env.local` na raiz do projeto.
    -   Adicione as chaves do seu projeto Supabase (encontradas em **Project Settings > API**).
    ```env
    NEXT_PUBLIC_SUPABASE_URL=SUA_URL_DO_PROJETO_SUPABASE
    NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_PUBLICA
    ```

5.  **Rode o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    Acesse [http://localhost:3000](http://localhost:3000) para ver a landing page e [http://localhost:3000/admin](http://localhost:3000/admin) para ver o painel de leads.