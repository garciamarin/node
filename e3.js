const fs = require('fs')

fs.readFile('./test.html','utf8',(error,data)=>
    {if(error)
    {console.log("Error here, dude!")
    return}
    console.log(data)
    })