var Heroku = require("heroku-client")
const heroku = new Heroku({ token: '49ad6e04-12f0-4dd1-8016-889c9e1a3be7' })
heroku.post('/apps', {body: {name: 'hilo'}})
.then(app => {
  console.log('success');
})
.catch(err=>{
  console.log(err)
})


