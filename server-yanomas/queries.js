const Pool = require('pg').Pool

// Host
// ec2-34-200-205-45.compute-1.amazonaws.com
// Database
// dbjulte7td45gb
// User
// gwntfiviejbeyn
// Port
// 5432
// Password
// 2ca799fb42f923cdf5a0a2a5f2ae8c2b8e95af6c7e9177663d06ef4d068d3774
// URI
// postgres://gwntfiviejbeyn:2ca799fb42f923cdf5a0a2a5f2ae8c2b8e95af6c7e9177663d06ef4d068d3774@ec2-34-200-205-45.compute-1.amazonaws.com:5432/dbjulte7td45gb
// Heroku CLI
// heroku pg:psql postgresql-opaque-22165 --app yanomas

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})
const getUsers = (request, response) => {
  console.log("Interare dar eso")
    pool.query('SELECT id, name, email FROM public.users;', (error, results) => {
      if (error) {
        console.log("ERROR",error)
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserByIdAndPassword = (request, response) => {
    const {correo,password} = request.body
  
    pool.query(`SELECT * FROM public.usuario WHERE correo = $1 and password =$2 ;`, [correo,password],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    console.log("BODY",request.body)
    const { dni,name, correo,password,phone_number } = request.body
  // VALUES( ${dni}, ${phone_number}, ${name}, ${password}, ${correo});`,(error, results) => {
    pool.query(`INSERT INTO public.usuario
    (dni, phone_number, "name", "password", correo)
    VALUES ($1, $2,$3,$4,$5) RETURNING *`,[dni, phone_number,name,password,phone_number],(error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send( results.rows[0])
    })
  }

  const createAlert = (request, response) => {
    console.log("BODY",request.body)
    const { user_id,type,lat,lon} = request.body
  // VALUES( ${dni}, ${phone_number}, ${name}, ${password}, ${correo});`,(error, results) => {
    pool.query(`INSERT INTO public.alerta
    ( user_id, "type", lat, lon)
    VALUES ($1, $2,$3,$4) RETURNING *`,[ user_id,type,lat,lon],(error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Alert added with ID: ${results.rows[0].id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    createAlert,
    getUserByIdAndPassword
  }