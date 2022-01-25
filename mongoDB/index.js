const mongoose = require('mongoose');
const articleModel = require('./model/article');

//realizando a conexao do mongo com banco de dados
mongoose.connect("mongodb://localhost:27017/aprendendomongodb",{useNewUrlParser: true},{useUnifieldTopology:true});

//criando a tabela Article utilizando o esquema importado do article.
const Article = mongoose.model('Article',articleModel);

//criando o primeiro artigo
const artigo = new Article({title: "Primeiro Artigo", author: "Eu mesmo", body:"Não sei mais..."});

//salvando o primeiro artigo no banco de dados.
artigo.save().then(()=>{
    console.log("Artigo salvo");
}).catch(err =>{
    console.log(err);
});

