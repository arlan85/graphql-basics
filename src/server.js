const express = require("express")
const port = 3030
const app = express()
app.listen(port, ()=>{ console.log(`Server running at port ${port}`) })