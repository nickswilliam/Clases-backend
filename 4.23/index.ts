import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    /* const camada = await prisma.camada.create({
            data: {
                nombre: 2617,
                dias: 'Martes y Jueves',
                modulo: 'Backend',
            }  
        })
        console.log(camada); */

    /* const camadas = await prisma.camada.createMany({
      data: [
        {
          nombre: 3123,
          dias: "Martes y jueves",
          modulo: "React",
        },
        {
            nombre: 1714,
            dias: "Lunes y miercoles",
            modulo: 'Javascript'
        },
        {
            nombre: 3017,
            dias: "Sábados",
            modulo: "Backend"
        }
      ],
    });
    console.log(camadas); */

    /*
    //comando para traer todas las camadas desde la base de datos
    const allCamadas = await prisma.camada.findMany();
    console.log(allCamadas); */
    
    /* 
    //traer camada por id
    const camadaById = await prisma.camada.findUnique({
        where:{
            id: 4
        }
    })
    console.log(camadaById); */
    
    /* 
    //traer camadas por tipo de "días"
    const camadasByName = await prisma.camada.findMany({
        where:{
            dias: "Lunes y miercoles"
        }
    })
    console.log(camadasByName); */
    

    /* 
    //crear nuevo alumno
    const alumno = await prisma.alumno.create({
        data:{
            nombre: "Nicolás Guillermo",
            edad: 28,
            mail: "nicks@yahoo.com.ar",
            camada: 2717
        }
    })
    console.log(alumno); */
    
    /*
    // crear varios alumnos
    const alumnos = await prisma.alumno.createMany({
        data: [
            {
                nombre: "Fernanda Perez",
                edad: 29,
                camada: 2617,
                mail: "fercha@mercha.com"
            },
            {
                nombre: "Araceli Gonzalez",
                edad: 43,
                camada: 1714,
                mail: "ara_gonza@gmail.com"
            },
            {
                nombre: "Eduardo Quiroz",
                edad: 22,
                camada: 3017,
                mail: "edu_el_quiro@hotmail.com"
            },
        ]
    })
    console.log(alumnos); */
    
    /* //traer alumnos por camada
    const alumnosByCamada = await prisma.alumno.findMany({
        where:{
            camada: 2717
        }
    })
    console.log(alumnosByCamada); */

    //joins con prisma

    /* const allAlumnos = await prisma.alumno.findMany({
        include: {
            camadas: true
        }
    })
    
    console.log(allAlumnos); */

    //traer consulta de alumnos por datos especificos que queremos que nos traiga en la consulta
    /* const allAlumnos = await prisma.alumno.findMany({
        select:{
           nombre: true,
           mail: true,
           camada: true,
           camadas: {
            select: {
                modulo: true,
                nombre: true,
                dias: true
            }
           } 
        }
    })
    console.log(allAlumnos); */
    
    prisma.$disconnect();
  } catch (error) {
    console.log(error);
    prisma.$disconnect(); //bloque necesario para desconectar la consulta en prisma
  }
};

main();
