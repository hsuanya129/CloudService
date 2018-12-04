if(process.env.NODE_ENV==='production'){
    module.exports = {mongoURI:'mongodb://b10509037:Applelv129@ds155213.mlab.com:55213/demo1031-prod'}
}else{
    module.exports = { mongoURI:'mongodb://localhost:27017/demo1031-dev'}
}