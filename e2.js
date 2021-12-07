fs = require('fs')

fs.writeFile('test.html','hello'
            ,(error)=>{
                if(error)return console.log("Error, doc!")
                console.log('Hello > test.html')
            })