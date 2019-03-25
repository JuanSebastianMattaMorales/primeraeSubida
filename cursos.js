let listaCursos=[
    {
    id: '001',
    nombre: 'cocina',
    duracion: '3 meses', 
    valor: 150000
    },
    {
    id: '002',
    nombre: 'programacion',
    duracion: '6 meses' , 
    valor: 500000   
    },
    {
    id: '003',
    nombre: 'conduccion',
    duracion: '2 meses' , 
    valor: 200000  
    }
]

function mostrarCurso(){
    for (var i = 0; i < listaCursos.length ; i++) {
        (function(index) {
            setTimeout(function() { 
                console.log('Curso con id '+listaCursos[index].id+' con nombre '+listaCursos[index].nombre+' con una duracion de '+listaCursos[index].duracion+' con un valor de '+listaCursos[index].valor); 
            }, i * 2000);
        })(i);
    } 
}



module.exports = {
    listaCursos
};

mostrarCurso();