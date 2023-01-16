const express = require("express"); 
const fs = require("fs"); 
const mysql = require('mysql2'); 
 
const app = express(); 
const jsonParser = express.json(); 
 
const connectionOptions = { 
    host: "localhost", 
    user: "root", 
    password: "12901509", 
    database: "mydb" 
}; 
 
const dbConnection = mysql.createConnection(connectionOptions); 
 
 
app.get('/db/role/get/all', (request, response) => { 
    const sql = 'SELECT * FROM role '; 
 
    dbConnection.connect(r => { 
        if (r) throw r; 
        dbConnection.query(sql, (r, result, fields) => { 
            if (r) throw r; 
            response.send(result); 
        }); 
    }); 
}) 
 
app.get("/db/role/:id", function (req, res) { 
    const sql = 
        "SELECT * " + 
        "FROM role " + 
        `WHERE id = ${req.params.id}`; 
 
    dbConnection.connect(function (r) { 
        if (r) throw r; 
 
        dbConnection.query(sql, (r, result, fields) => { 
            if (r) throw r; 
            result ? res.send(result) : res.sendStatus(404); 
        }); 
    }); 
}); 
 
app.post("/db/role/add", jsonParser, function (req, res) { 
    if (!req.body) 
        return res.sendStatus(400); 
 
    let { id, name, description} = req.body; 
 
    const sql = "insert into role(id, name, description) values (?, ?, ?)"; 
 
    dbConnection.connect(function (r) { 
        if (r) throw r; 
 
        dbConnection.query(sql, [id, name, description], (r, result, fields) => { 
            if (r) throw r; 
            result ? res.send(result) : res.sendStatus(404); 
        }); 
    }); 
}); 
 
app.delete("/db/role/delete/:id", function (req, res) { 
    const sql = 
        "DELETE " + 
        "FROM role " + 
        `WHERE id = ${req.params.id}`; 
    const id = req.params.id;
 
    dbConnection.connect(function (r) { 
        if (r) throw r; 
 
        dbConnection.query(sql, id, (r, result, fields) => { 
            if (r) throw r; 
            result ? res.send(result) : res.sendStatus(404); 
        }); 
    }); 
}); 
 
app.put("/db/role/put/update", jsonParser, function (req, res) {
    const sql = 'UPDATE role ' + 'SET id = ?, name = ?, description = ?' + `WHERE id = ${req.body.id}`;
    const sets = [req.body.id, req.body.name, req.body.description, req.body.repo]

    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(sql, sets,(r, result, fields) => {
            if (r) throw r;
            result ? res.send(result) : res.sendStatus(500);
        });
    });
});
const PORT = 3000 || process.env.PORT; 
 
try { 
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`)); 
} catch (error) { 
    console.log(error); 
}