import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import inquirer from 'inquirer'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

const question = [
  {
    type: 'list',
    name: 'version',
    message: 'Introduce el tipo de versión',
    choices: ['major', 'minor', 'patch']
  }
]

function updateVersion(releaseType) {
  const packageJsonPath = path.resolve(_dirname, '../../package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  const versionParts = packageJson.version.split('.').map(Number)

  if (releaseType === 'major') {
    versionParts[0] += 1
    versionParts[1] = 0
    versionParts[2] = 0
  } else if (releaseType === 'minor') {
    versionParts[1] += 1
    versionParts[2] = 0
  } else if (releaseType === 'patch') {
    versionParts[2] += 1
  } else {
    console.error("Tipo de versión no válido. Usa 'major', 'minor' ó 'patch'")
    process.exit(1)
  }

  packageJson.version = versionParts.join('.')
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
  console.log(`Versión actualizada a ${packageJson.version}`)
}

inquirer
  .prompt(question)
  .then((answers) => updateVersion(answers.version))
  .catch((error) => {
    if (error.isTtyError) {
      console.log(
        'La interfaz de línea de comandos no admite preguntas interactivas.'
      )
    } else {
      console.log('Ocurrio un error: ', error)
    }
  })
