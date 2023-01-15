const express = require('express');
const connection = require('./connect');
const resultsRouter = express.Router();

const sqlCommands = {
    getAllResults: 'SELECT * FROM result',
    getResult: `SELECT * FROM result WHERE id = ?`,
    createResult: `INSERT INTO result SET id = ?, ?`,
    updateResult: `UPDATE result SET ? WHERE id = ?`,
    deleteResult: `DELETE FROM result WHERE id = ?`,
}

resultsRouter.get('/result', (req, res) => {
    connection.query(sqlCommands.getAllResults, (err, result) => {
        if(err) { return res.status(500).json({message: 'Server error'}) } 
            res.send(result);
    })
})
.get('/result/:id', (req, res) => {
    const {id} = req.params;
    connection.query(sqlCommands.getResult, id, (err, [result]) => {
        if(err) { 
            return res.status(500).json({message: 'Server error'}) 
        }
        if(!result) {
            return res.status(404).json({message: 'No result with this id.',});
        }
        res.send(result);
    })

})
.post('/result/:id', (req, res) => {
    const {name, description, task_id, scrapeInstance_id} = req.body;
    if(!(name && description && task_id && scrapeInstance_id)) { return res.status(400).json({
        message: 'All fields must be filled!',
    })
}
const {id} = req.params;

const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const hours = ('0' + date.getHours()).slice(-2);
const minutes = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2);
const createdAt = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

connection.query(sqlCommands.createResult, [id, {name, description, createdAt, task_id, scrapeInstance_id}], (err, result) => {
    if(err){ 
        return res.status(500).json({ message: 'Server error' })
    }
    res.send(`result with id ${id} was created at ${createdAt}`);
})
})

.put('/result/:id', (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const sqlStatement = connection.format(sqlCommands.updateResult, [data, id]);
    connection.execute(sqlStatement, (err, result) => {
        if (err || !result.affectedRows) {
            return res.status(500).json({
                message: 'Server error or wrong id',
            });
        }
        res.send(result);
    });
})
.delete('/result/:id', (req, res) => {
    const {id} = req.params;
    connection.query(sqlCommands.deleteResult, id, (err, result) => {
        if (err || !result.affectedRows) {
            return res.status(500).json({
                message: 'Server error or wrong id',
            });
        }
        res.send(`Result with ID ${id} was deleted`)
    })
})

module.exports = resultsRouter;
