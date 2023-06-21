function imprimirTipo(valor: string | number | boolean){
    if(typeof valor === 'string'){
        console.log('El valor es string:', valor);
    }else if(typeof valor === 'number'){
        console.log('El valor es numero:', valor);
    }else{
        console.log('El valor es desconocido:', valor);
        
    }

}

imprimirTipo(true)