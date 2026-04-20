# Tablero de Agentes IA — Barbadela & Otangid

## Cómo subir a Vercel (paso a paso)

### 1. Crear cuenta en GitHub (si no tenés)
- Entrá a github.com y registrate gratis

### 2. Subir el proyecto a GitHub
- Click en "New repository"
- Nombre: `tablero-agentes`
- Click en "Create repository"
- Subí todos los archivos de esta carpeta

### 3. Conectar con Vercel
- Entrá a vercel.com
- "Sign Up" con tu cuenta de GitHub
- Click en "Add New Project"
- Seleccioná el repositorio `tablero-agentes`
- Click en "Deploy"

### 4. Agregar tu API Key de Google (MUY IMPORTANTE)
- En Vercel, andá a tu proyecto → "Settings" → "Environment Variables"
- Agregá una nueva variable:
  - **Name:** `GEMINI_API_KEY`
  - **Value:** (pegá tu API key de Google AI Studio)
- Click en "Save"
- Luego andá a "Deployments" → click en los 3 puntitos → "Redeploy"

### 5. ¡Listo!
Vercel te da una URL del tipo `tablero-agentes.vercel.app`
Guardala como favorito o acceso directo en tu celular.

## Obtener API Key de Google (gratis)
1. Entrá a aistudio.google.com
2. Iniciá sesión con Google
3. Click en "Get API Key" → "Create API Key"
4. Copiá la key y guardala
