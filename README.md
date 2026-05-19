# Vilma Coaching — Landing

Landing page for Dra. Vilma G. Duschak (coaching ontológico profesional).

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Framer Motion

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura principal

- `src/app/page.tsx` — armado de secciones
- `src/components/` — Hero, About, método, servicios, perfiles, testimonios
- Imágenes en la raíz del proyecto (`foto-perfil-2-recortada.jpeg`, `flyer-vilma.jpg`, etc.)
- `capturas-cliente/` — capturas de secciones para revisión con el cliente

## Subir a GitHub

El proyecto ya tiene Git inicializado. Si aún no iniciaste sesión en GitHub CLI:

```bash
gh auth login
```

Luego creá el repositorio y subí el código (elegí el nombre que quieras):

```bash
gh repo create vilma-coaching-landing --public --source=. --remote=origin --push
```

Para repositorio privado, agregá `--private` en lugar de `--public`.
