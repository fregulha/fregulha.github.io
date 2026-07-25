# Portfólio — Fernanda Fregulha

Portfólio estático em HTML, CSS e JavaScript, criado para publicação gratuita no GitHub Pages.

## Visual

- Dark mode
- Preto, dourado refletivo e vermelho-bordô
- Foto profissional
- Layout responsivo
- Ícones de WhatsApp, LinkedIn, GitHub e e-mail
- Animações suaves

## Antes de publicar

Abra o arquivo `script.js` e altere o objeto `CONTACT`:

```javascript
const CONTACT = {
  whatsapp: "5567999999999",
  email: "seuemail@exemplo.com",
  linkedin: "https://www.linkedin.com/in/seu-usuario",
  github: "https://github.com/FernandaFregulha",
  whatsappMessage: "Olá, Fernanda! Vi seu portfólio e gostaria de conversar sobre um serviço."
};
```

No WhatsApp, use somente números: `55 + DDD + número`.

## Publicar no GitHub Pages

1. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
2. Em **Settings → Pages**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
3. Salve e aguarde a publicação.

Endereço esperado:

```text
https://fernandafregulha.github.io/portfolio-fernanda-fregulha/
```

## Estrutura

```text
assets/
  fernanda-fregulha.png
.nojekyll
404.html
index.html
styles.css
script.js
README.md
```
