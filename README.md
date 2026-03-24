# Navio | Cardapio Especial de Pascoa

Landing page em Next.js para apresentar o cardapio sazonal da Navio Pescados e Gastronomia com foco em conversao para pedido via WhatsApp.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Componentizacao modular
- Dados do cardapio em arquivo separado

## Estrutura principal

```text
public/
public/Fotos/
src/app/
src/components/
src/data/
src/hooks/
src/lib/
src/types/
```

## Como rodar localmente

1. Instale o Node.js 20 ou superior.
2. Instale as dependencias:

```bash
npm install
```

3. Copie as variaveis de ambiente:

```powershell
Copy-Item .env.example .env.local
```

4. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Suba o projeto para um repositorio Git.
2. Importe o repositorio na Vercel.
3. Configure a variavel `NEXT_PUBLIC_WHATSAPP_NUMBER`.
4. Faca o deploy.

## Onde editar depois

- Dados do cardapio: `src/data/menu.ts`
- Textos da campanha, Instagram e contato: `src/data/config.ts`
- Mensagem do WhatsApp: `src/lib/whatsapp.ts`
- Logica de imagens por nome: `src/lib/menu-images.ts`

## Observacoes

- As imagens da campanha devem ficar em `public/Fotos`.
- Se uma foto nao existir, o card nao renderiza placeholder quebrado.
- O carrinho persiste em `localStorage`.
