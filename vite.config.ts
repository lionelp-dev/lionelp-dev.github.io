import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: getBasePath(),
  plugins: [react(), tailwindcss()],
})

function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY

  if (!repository) {
    return '/'
  }

  const repositoryName = repository.split('/').at(1)

  if (!repositoryName || repositoryName.endsWith('.github.io')) {
    return '/'
  }

  return `/${repositoryName}/`
}
