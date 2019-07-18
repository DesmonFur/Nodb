const data = require('./data')

let id = 4
module.exports = {

    getAll(req,res){
        res.status(200).send(data)
    },

    delete(req,res){
        const {id} = req.params
        console.log(id)
        const index = data.findIndex(skate => (
            skate.id === +id
        ))
        console.log(index)
       data.splice(index, 1)
        res.status(200).send(data)
    },
    
    addBoard(req,res){
        let {id,Construction,TrucksWheels,Bearings,img} = req.body
        data.push({
            id: id,
            
        })
        res.status(200).send(data)
    },
    getById(req,res){
        const board = data.filter(build => build.id === id === +req.query.id)
        
        res.status(200).send(board)
    }
    









}