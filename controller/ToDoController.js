const ToDoModel = require('../model/ToDoModel')

module.exports.getToDo = async (req,res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.saveToDo = async (req,res) => {
    try {
        const {text} = req.body;

        ToDoModel.create({text}).then((data) => {
            console.log("added successfully");
            console.log(data);
            res.send(data);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.updateToDo = async (req,res) => {
    const {_id, text} = req.body;

    ToDoModel.findByIdAndUpdate(_id, {text}).then(() => {
        res.send("updated successfully");
    }).catch((err) => {
        res.status(500).json({message: err.message});
    });
}


module.exports.deleteToDo = async (req,res) => {
    const {_id} = req.body;

    ToDoModel.findByIdAndDelete(_id).then(() => {
        res.send("deleted successfully");
    }).catch((err) => {
        res.status(500).json({message: err.message});
    });
}