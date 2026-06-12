# Portugal Prático — Comandos de Referência

## Requisitos

- Node.js 20+
- npm 10+
- PostgreSQL 15+ (local ou remoto)
- Conta Netlify (deploy)
- Conta Vercel (alternativa ao Netlify)

---

## 1. Instalação local

```bash
# Clonar o repositório (se ainda não tiver feito)
git clone https://github.com/SEU_USUARIO/portugalpraticoweb.git
cd portugalpraticoweb

# Instalar dependências
npm install

# Copiar o ficheiro de variáveis de ambiente
cp .env.example .env
```

Editar o ficheiro `.env`:

```env
DATABASE_URL="postgresql://UTILIZADOR:PASSWORD@localhost:5432/portugalpratico"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_ADSENSE_ID="ca-pub-XXXXXXXXXXXXXXXX"
```

---

## 2. Base de dados (PostgreSQL)

```bash
# Criar a base de dados no PostgreSQL (se não existir)
psql -U postgres -c "CREATE DATABASE portugalpratico;"

# Gerar o Prisma Client
npm run db:generate

# Criar as tabelas (primeira vez ou após mudanças no schema)
npm run db:push

# Correr as migrações (ambiente de produção)
npm run db:migrate

# Popular a base de dados com dados iniciais (distritos + feriados)
npm run db:seed

# Abrir o Prisma Studio (interface visual para a BD)
npx prisma studio
```

---

## 3. Desenvolvimento local

```bash
# Iniciar o servidor de desenvolvimento (com Turbopack)
npm run dev

# O site fica disponível em:
# http://localhost:3000
```

---

## 4. Build de produção (local)

```bash
# Fazer o build de produção
npm run build

# Iniciar em modo de produção
npm start

# Verificar erros de TypeScript/ESLint
npm run lint
```

---

## 5. Deploy no Netlify

### 5.1 Instalar a CLI do Netlify

```bash
npm install -g netlify-cli

# Fazer login
netlify login
```

### 5.2 Configurar o projeto no Netlify (primeira vez)

```bash
# Inicializar e ligar ao Netlify
netlify init

# Escolher:
# - "Create & configure a new site"
# - Equipa (se tiver)
# - Nome do site: portugalpratico (ou outro disponível)
```

### 5.3 Criar ficheiro de configuração do Netlify

O ficheiro `netlify.toml` já está criado na raiz do projeto. Verificar se existe:

```bash
cat netlify.toml
```

### 5.4 Definir variáveis de ambiente no Netlify

```bash
# Via CLI
netlify env:set DATABASE_URL "postgresql://USER:PASS@HOST:5432/portugalpratico"
netlify env:set NEXT_PUBLIC_SITE_URL "https://www.portugalpratico.pt"
netlify env:set NEXT_PUBLIC_ADSENSE_ID "ca-pub-XXXXXXXXXXXXXXXX"

# Ou via painel web:
# https://app.netlify.com → Site → Site configuration → Environment variables
```

### 5.5 Deploy

```bash
# Deploy de preview (para testar)
netlify deploy

# Deploy para produção
netlify deploy --prod

# Deploy com build incluído (recomendado)
netlify deploy --prod --build
```

### 5.6 Deploy automático (via Git)

```bash
# Ligar repositório Git ao Netlify
netlify link

# A partir daí, cada push para main faz deploy automático:
git add .
git commit -m "feat: atualização"
git push origin main
```

---

## 6. Deploy na Vercel (alternativa)

### 6.1 Instalar CLI da Vercel

```bash
npm install -g vercel

# Login
vercel login
```

### 6.2 Primeiro deploy

```bash
# Na pasta do projeto
vercel

# Responder às perguntas:
# - Set up and deploy: Yes
# - Which scope: escolher a conta
# - Link to existing project: No
# - Project name: portugalpratico
# - Directory: ./
```

### 6.3 Variáveis de ambiente na Vercel

```bash
vercel env add DATABASE_URL
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_ADSENSE_ID
```

### 6.4 Deploy de produção

```bash
# Deploy para produção
vercel --prod

# A Vercel também faz deploy automático com cada push para main
```

---

## 7. Domínio personalizado

### Netlify

```bash
# Adicionar domínio personalizado
netlify domains:add portugalpratico.pt

# Ver DNS settings necessários
netlify domains:info portugalpratico.pt
```

No painel Netlify → Domain management → adicionar o domínio e seguir instruções DNS.

### Vercel

```bash
vercel domains add portugalpratico.pt
vercel domains inspect portugalpratico.pt
```

---

## 8. Importar base de dados de códigos postais

```bash
# Fazer download do ficheiro oficial dos CTT
# https://www.ctt.pt/feapl_2/app/open/postalCodeSearch/postalCodeSearch.jspx

# Script de importação (criar em prisma/import-cp.ts)
npm run db:seed

# Para importação em massa do ficheiro CTT (CSV)
npx tsx prisma/import-cp.ts
```

---

## 9. Comandos úteis de manutenção

```bash
# Ver logs do Netlify em tempo real
netlify logs

# Ver status do deploy
netlify status

# Abrir o site no browser
netlify open:site

# Ver variáveis de ambiente configuradas
netlify env:list

# Fazer rollback para deploy anterior (Netlify)
# Ir ao painel: Deploys → clicar no deploy anterior → "Publish deploy"

# Reset da base de dados de desenvolvimento
npx prisma migrate reset

# Atualizar schema sem migration (desenvolvimento)
npm run db:push

# Ver todas as migrations
npx prisma migrate status
```

---

## 10. Google AdSense

1. Criar conta em https://adsense.google.com
2. Obter o Publisher ID (ca-pub-XXXXXXXXXX)
3. Adicionar ao `.env`:
   ```env
   NEXT_PUBLIC_ADSENSE_ID="ca-pub-XXXXXXXXXX"
   ```
4. Adicionar o script ao `src/app/layout.tsx`:
   ```tsx
   <script
     async
     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
     crossOrigin="anonymous"
   />
   ```
5. Submeter o site para revisão no painel AdSense

---

## 11. Google Search Console

```bash
# Verificar propriedade e submeter sitemap
# https://search.google.com/search-console

# URL do sitemap a submeter:
# https://portugalpratico.pt/sitemap.xml
```

---

## 12. Variáveis de ambiente — referência completa

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | URL de ligação PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site | `https://portugalpratico.pt` |
| `NEXT_PUBLIC_ADSENSE_ID` | ID do Google AdSense | `ca-pub-1234567890123456` |

---

## 13. Estrutura de pastas

```
portugalpraticoweb/
├── public/                  # Ficheiros estáticos (logo, favicon)
├── prisma/
│   ├── schema.prisma        # Modelo da base de dados
│   └── seed.ts              # Dados iniciais
├── src/
│   ├── app/                 # Páginas (App Router)
│   │   ├── layout.tsx       # Layout global + SEO
│   │   ├── page.tsx         # Homepage
│   │   ├── sitemap.ts       # Sitemap automático
│   │   ├── robots.ts        # robots.txt
│   │   ├── codigo-postal/   # Pesquisa de CP
│   │   ├── simuladores/     # Simuladores financeiros
│   │   ├── nif/             # Validador NIF
│   │   ├── iban/            # Validador IBAN
│   │   ├── feriados/        # Feriados nacionais
│   │   ├── localidades/     # Distritos/Concelhos
│   │   └── api/             # API Routes
│   ├── components/          # Componentes reutilizáveis
│   └── lib/
│       └── prisma.ts        # Cliente Prisma singleton
├── netlify.toml             # Configuração Netlify
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
└── .env                     # Variáveis de ambiente (não commitar)
```
