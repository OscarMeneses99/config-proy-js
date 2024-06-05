import { execSync } from 'node:child_process'

function Commit(message) {
  try {
    execSync('npx lint-staged', { stdio: 'inherit' })
    execSync('npm run version', { stdio: 'inherit' })
    execSync('git add package.json', { stdio: 'inherit' })
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' })

    console.log('Commit exitoso.✅')
  } catch (error) {
    console.log('Error al ejecutar el commit:', error)
  }
}

const args = process.argv.slice(2)
const message = args.join(' ') || undefined

Commit(message)
