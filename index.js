const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;


hbs.registerPartials(`${__dirname}/views/partials`, function(error) {});
app.set('view engine', 'hbs');
app.set('views',`${__dirname}/views`);

app.listen(port, () => console.log("Servidor Activo http://localhost:3000"));


app.get('/', (request, response) =>{
    response.render('index', {
        titulo: 'Pagina Principal',
        mostrarfotos: true

    });
})

app.get('/galeria/', (request, response) => {
    const fotos =[
        {titulo: 'Imagen 1' , url:"https://revistaseguridad360.com/wp-content/uploads/2022/01/nube.jpeg", contenido:'Contenido Imagen 1'},
        {titulo: 'Imagen 2' , url:"https://concepto.de/wp-content/uploads/2015/08/informatica-1-e1590711788135.jpg", contenido:'Contenido Imagen 2'},
        {titulo: 'Imagen 3' , url:"https://www.lifeder.com/wp-content/uploads/2022/02/informatica.jpg", contenido:'Contenido Imagen 3'},
        
    ]
    response.render('galeria', {
    titulo: 'Galeria',
    fotos: fotos
});
})

app.get('/contacto/', (request, response) => {
    response.render('contacto',{
        titulo: 'Contacto'
      
    });
})
