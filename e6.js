const axios = require('axios');
fs = require('fs');

axios.get('http://google.com').then(resp => {
    console.log(resp);
    fs.writeFile('google.html',resp.data
            ,(error)=>{
                if(error)return console.log("Error, doc!")
                console.log('Html > google.html')
            })
    console.log( resp.data);
});




