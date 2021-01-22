const search = document.getElementById("search")
const results = document.getElementById("results")
const list = document.getElementsByTagName("img")
const listArt = document.getElementsByTagName("article")

// console.log(listArt);

search.addEventListener('keyup', event=>{
    //console.log(event.target.value)
    activeSearch(event.target.value)
})

const activeSearch = (value)=>{
    let cont = 0; 
    for(let i=0; i< list.length; i++){
        //console.log(`Gato numero ${i}`,list[i])
        if(list[i].alt.includes(value.toLowerCase())){
            console.log(list[i])
            listArt[i].classList.remove('hide')
            cont++
        }else{
            listArt[i].classList.add('hide')
        }
        results.innerHTML = `Resultados encontrados: ${cont}`
    }
}