import fs from 'fs'

export const get = (file) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(file, 'utf-8', (error, data)=>{
            if(error){
                reject(error)
            } else{
                resolve(JSON.parse(data))
            }
        })
    })
}

export const set = (file, newData) => {
    return new Promise((resolve, reject)=>{
        fs.writeFile(file, JSON.stringify(newData), (error)=>{
            if(error){
                reject(error)
            }else{
                resolve('Archivo escrito correctamente')
            }
        })
    })
}