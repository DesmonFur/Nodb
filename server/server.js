const express = require('express')
const app = express()
const skateCtrl = require('./skateCtrl')

app.get('/api/skateboards', skateCtrl.getAll)
app.get('/api/skateboardsId/?id=', skateCtrl.getById)
app.post('/api/skateboards',skateCtrl.addBoard)
app.put('/api/skateboards/:id',)
app.delete('/api/skateboards/:id', skateCtrl.delete)










const PORT = 5000;
app.listen(PORT, () => console.log(` Pikachu use Thunderbolt on ${PORT}!`))