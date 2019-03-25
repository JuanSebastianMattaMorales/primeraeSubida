const fs = require('fs');

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

interesado=
{
    nombre:{
        demand:true,
        alias: 'nom'
    },
    cedula:{
        demand:true,
        alias:'ced'
    },
    id:{
        demand:true
    }
};

function mostrarCurso(){
    console.log('Cursos habilitados');
    for (var i = 0; i < listaCursos.length ; i++) {
        (function(index) {
            setTimeout(function() { 
                console.log('- Curso con id '+listaCursos[index].id+' con nombre '+listaCursos[index].nombre+ '\n' +
                'con una duracion de '+listaCursos[index].duracion+' con un valor de '+listaCursos[index].valor); 
            }, i * 2000);
        })(i);
    } 
}

const argv = require('yargs')
.command('inscripcion','Datos necesarios',interesado)
.argv;

if(argv._[0]==null){
    mostrarCurso();
}

if(argv._[0]!=null){
    let cursoSel = listaCursos.find( curso => curso.id == argv.id);
    if(cursoSel!=null){
        texto='Se inscribio al curso con  id '+cursoSel.id+' con con nombre '+cursoSel.nombre+ '\n' +
        'con una duracion de '+cursoSel.duracion+' con un valor de '+cursoSel.valor+' el estudiante ' + '\n' +
        argv.nombre + ' con identificacion numero ' + argv.cedula;
        fs.writeFile('inscripcion.txt',texto,
            (error)=>{
            if (error) throw (error);
            console.log('Inscripcion con exito, archivo creado ');
            });
    }
    if (cursoSel==null)
    {
        console.log('No se encontro un curso con ese id ');
        mostrarCurso();
    }   
}