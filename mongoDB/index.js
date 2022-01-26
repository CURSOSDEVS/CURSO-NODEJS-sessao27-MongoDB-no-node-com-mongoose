const mongoose = require('mongoose');
const articleModel = require('./model/article');

//realizando a conexao do mongo com banco de dados
mongoose.connect("mongodb://localhost:27017/aprendendomongodb",{useNewUrlParser: true},{useUnifieldTopology:true});

//criando a tabela Article utilizando o esquema importado do article.
const Article = mongoose.model('Article',articleModel);


//criando os artigos

const artigo = new Article({
    title: "PHP", 
    author: "Eu sei 3", 
    body:"Não sei mais também...",
    especial: false,
    resume: {
        content: "Resumo teste,....",
        author: "Teste !"
    }
});


//salvando o primeiro artigo no banco de dados.
artigo.save().then(()=>{
    console.log("Artigo salvo");
}).catch(err =>{
    console.log(err);
});



/*

//buscando todo os artigos
Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
})


//buscando dados espedificos
//buscando pelo id
Article.find({'_id': '61f061a16af645ed3acc63bc'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})


//buscando pelo title
Article.find({'title': 'Primeiro Artigo'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})

//buscando dados de campos que estão dentro de campos
Article.find({'resume.author': 'Teste !'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})
*/

//mostrando o primeiro resultado de uma busca que corresponde a um critério
Article.findOne({'author': 'Eu sei 3'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})

