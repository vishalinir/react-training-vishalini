const express = require('express')

const app = express()

function runOne() {
    app.get('/demo',(req,res) => 
    res
    .status(200)
    .json({name:"vishalini"})
)
app.use((req,res,next) => {
    console.log('[server] hit *')
    req.eh = 1
    next()
})
app.get('*',(req,res) => 
    console.log('[server] hit *', req.eh)
)

const onListen = () =>
{
    console.log('http://localhost:5888')
}

app.listen(5888,onListen)

}

function runTwo() {
    app.get('/demo',(req,res) => 
    res
    .status(200)
    .json({name:"kiruthika"})
)
app.use((req,res,next) => {
    console.log('[server] hit *')
    req.eh = 1
    next()
})
app.get('*',(req,res) => 
    console.log('[server] hit *', req.eh)
)

const onListen = () =>
{
    console.log('http://localhost:4444')
}

app.listen(4444,onListen)

}

runTwo()
runOne()

