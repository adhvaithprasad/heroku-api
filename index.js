var Heroku = require("heroku-client")
const heroku = new Heroku({ token: '49ad6e04-12f0-4dd1-8016-889c9e1a3be7' })

heroku.patch('/apps/botzjdfhohzdfohjoijdjoozgij', {body: {name: 'xenialbase-bot-gen-1'}}).then(app => {})


