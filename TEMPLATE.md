# Impulso Digital — Template de Projetos

Base pronta para criar sites de clientes. Stack: Next.js 14 + Tailwind CSS + React.

---

## Como usar este template

### 1. Criar repositório do cliente
No GitHub, clique em **"Use this template"** → **"Create a new repository"**
- Nome sugerido: `cliente-[nome]-nextjs`
- Privado ou público (a seu critério)

### 2. Clonar localmente
```bash
git clone https://github.com/ImpulsoDigital063/[nome-do-repo].git
cd [nome-do-repo]
npm install
```

### 3. Editar o arquivo de configuração
Abra `config/cliente.js` e preencha **todos os campos** com os dados do cliente.
Este é o único arquivo que concentra as informações do negócio.

### 4. Adicionar os arquivos de mídia
Coloque em `public/images/`:
- `logo-navbar.svg` — logo do cliente (fundo transparente)
- `foto-hero.jpg` — foto principal do hero
- `foto-dono.jpg` — foto do dono (seção Sobre)

### 5. Atualizar a cor primária
Em `tailwind.config.js`, troque `#10b981` pela cor do cliente:
```js
primary: "#[COR DO CLIENTE]",
"primary-dark": "#[COR MAIS ESCURA]",
```

### 6. Rodar e conferir
```bash
npm run dev
```
Acesse `http://localhost:3000` e revise cada seção.

### 7. Atualizar os cases no Portfolio
Em `components/Portfolio.js`, substitua os cases pelos projetos do cliente
(ou remova a seção se for um site novo sem histórico).

### 8. Seções para revisar/remover
| Seção | Ação |
|-------|------|
| `MPNPromo.js` | ❌ Remover (específico da Impulso) |
| `SobreEduardo.js` | ✏️ Adaptar para o dono do negócio |
| `LogosClientes.js` | ✏️ Atualizar com clientes reais |
| `Depoimentos.js` | ✏️ Atualizar com depoimentos reais |
| `ParaQuemE.js` | ✏️ Adaptar perfis para o público do cliente |
| `app/termos/page.js` | ✏️ Atualizar dados da empresa |
| `app/privacidade/page.js` | ✏️ Atualizar dados da empresa |

### 9. Deploy na Vercel
```bash
git add .
git commit -m "Setup inicial — [Nome do Cliente]"
git push origin main
```
Conecte o repositório na Vercel e o deploy é automático.

---

## Estrutura de pastas

```
├── app/
│   ├── page.js          # Ordem das seções
│   ├── layout.js        # Metadados SEO
│   ├── globals.css      # Estilos globais
│   ├── termos/          # Página de termos
│   └── privacidade/     # Política de privacidade
├── components/          # Todas as seções da página
├── config/
│   └── cliente.js       # ← EDITE ESTE ARQUIVO PRIMEIRO
├── public/
│   ├── images/          # Logos e fotos
│   └── cases/           # Prints dos cases
└── documentos/
    └── contrato-servico.html  # Contrato para assinar com o cliente
```

---

## Checklist de entrega

- [ ] `config/cliente.js` preenchido completamente
- [ ] Logo adicionada em `public/images/logo-navbar.svg`
- [ ] Fotos adicionadas em `public/images/`
- [ ] Cor primária atualizada no `tailwind.config.js`
- [ ] Cases do Portfolio atualizados
- [ ] WhatsApp real em todos os CTAs
- [ ] CNPJ/CPF no footer
- [ ] Termos e Privacidade com dados da empresa
- [ ] Testado no mobile
- [ ] Deploy na Vercel feito
- [ ] Domínio personalizado configurado

---

*Impulso Digital · Por Eduardo Barros · (99) 99206-5961*
