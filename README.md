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

## Subir a GitHub (solo con Git)

1. Creá un repositorio vacío en [github.com/new](https://github.com/new) (sin README ni `.gitignore`).
2. En la carpeta del proyecto:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

Git te pedirá usuario y contraseña. La contraseña debe ser un **Personal Access Token** de GitHub (Settings → Developer settings → Personal access tokens).
