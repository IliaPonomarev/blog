const { readFileSync } = require('fs')

module.exports = {
  MONGO_URI: process.env.MONGO_URI || getFileSecret('/run/secrets/mongo-uri'),
  JWT: process.env.JWT || getFileSecret('/run/secrets/jwt')
}

function getFileSecret(filePath) {
  return readFileSync(filePath)
    .toString()
    .trim()
}
