const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ||8000


app.use(cors())

let nationalParks = {
    'grand canyon': {
        'State' : 'Arizona',
        'Website': 'https://www.national-park.com/welcome-to-grand-canyon-national-park/',
    },
    'petrified forest':{
        'State' : 'Arizona',
        'Website': 'https://www.national-park.com/welcome-to-petrified-forest-national-park/'
    },
    'hot springs':{
        'State' : 'Arkansas',
        'Website': 'https://www.national-park.com/welcome-to-hot-springs-national-park/'
    },
    'death valley':{
        'State' : 'California',
        'Website': 'https://www.national-park.com/welcome-to-death-valley-national-park/'
    },
    'joshua tree':{
        'State' : 'California',
        'Website': 'https://www.national-park.com/welcome-to-joshua-tree-national-park/'
    },
    'redwood':{
        'State' : 'California',
        'Website': 'https://www.national-park.com/welcome-to-redwood-national-park/'
    },
    'yosemite':{
        'State' : 'California',
        'Website': 'https://www.national-park.com/welcome-to-yosemite-national-park/'
    },
    'unknown':{
        'State': 'unknown',
        'Webiste': 'unknown'
    }
}


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) =>{
    const parkName = req.params.name.toLowerCase()
    console.log(`park to get : ${parkName}`)
    if( nationalParks[parkName]) {
        res.json(nationalParks[parkName])
    }else{
        res.json(nationalParks['unknown'])
    }
})




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})