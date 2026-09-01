import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_AnaBareaGiovannaTotte"

    sql.query(selectCommand, (error, data) => {
        if (error) {
            console.log(error)
            return
        }

        response.json(data)
    })
})

app.post("/create", (request, response) => {
    const { titulo, genero, classificacao, duracao } = request.body

    const insertCommand = "INSERT INTO filmes_AnaBareaGiovannaTotte(titulo, genero, classificacao, duracao) VALUES (?, ?, ?, ?)"

    sql.query(insertCommand, [titulo, genero, classificacao, duracao], (error) => {
        if(error) {
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme cadastrado com sucesso!"
        })
    })
})

app.delete("/delete/:id", (request, response) => {
    const { id } = request.params

    const deleteCommand = "DELETE FROM filmes_AnaBareaGiovannaTotte WHERE id=?"

    sql.query(deleteCommand, [id], (error) => {
        if (error) {
            console.log(error)
            return
        }

        response.json({
            message: "Filme apagado com sucesso!"
        })
    })
})

app.put("/update/:id", (request, response) => {
    const { id } = request.params
    const { titulo, genero, classificacao, duracao } = request.body

    let updateCommand = "UPDATE filmes_AnaBareaGiovannaTotte SET titulo = ?, genero = ?, classificacao = ?, duracao = ? WHERE id = ?"

    sql.query(updateCommand, [titulo, genero, classificacao, duracao, id], (error) => {
        if (error) {
            console.log(error)
            return
        }

        response.json({
            message: "Filme alterado com sucesso!"
        })
    })
})


app.listen(3000, () => {
    console.log("Servidor online")
})

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB"
})