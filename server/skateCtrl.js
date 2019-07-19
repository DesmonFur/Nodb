const data = require("./data");
let id = data.length + 1;
module.exports = {
  getAll(req, res) {
    console.log(req.query);
    res.status(200).send(data);
  },

  delete(req, res) {
    const { id } = req.params;
    // console.log(id);
    const index = data.findIndex(skate => skate.id === +id);
    // console.log('delete', index);
    data.splice(index, 1);
    res.status(200).send(data);
  },

  addBoard(req, res) {
    const { name, construction, trucks, wheels, bearings, img } = req.body;
    if (trucks) {
      req.body.id = id;
      id++;
      data.push({
        id: req.body.id,
        construction: construction,
        trucks: trucks,
        wheels: wheels,
        bearings: bearings,
        img: img,
        name: name
      });
    }
    res.status(200).send(data);
  },

  update(req, res) {
    // console.log(req.body)
    const { id } = req.params;
    const { construction, trucks, wheels, bearings, img, name } = req.body;
    const index = data.findIndex(boards => boards.id === +id);
    // data[index].construction = construction;
    // data[index].trucks = trucks;
    // data[index].wheels = wheels;
    // data[index].bearings = bearings;
    // data[index].img = img;\
    data[index].name = name;
    // console.log('update', data[index])
    res.status(200).send(data);
  },

  getByName(req, res) {
    const { name } = req.query;
    const index = data.findIndex(boards => boards.name === name);
    res.status(200).send(data[index]);
  }
};
