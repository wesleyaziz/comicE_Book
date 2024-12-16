document.addEventListener('DOMContentLoaded',function(){
  const ul = document.querySelector('.v2ul')

  let pageStates = new Array(8).fill(false)

  const page = Array.from({length: 8}, (_, i) => i)
  page.forEach(index =>{
    const li = document.createElement('li')
    li.innerHTML= `<img src = './data/images/${index + 1}.png'>`
    ul.appendChild(li)
    li.style.transform = `rotateY(${-27 + (index + 1) * 2}deg)`

    li.addEventListener('click',()=>{
      if(pageStates[index]){
        ul.style.transform = `translateX(150px)`
        li.style.transform = `rotateY(-180deg)`
        li.style.transition = `1s`
      }else{
        li.style.transform = `rotateY(${-27 + (index + 1) * 2}deg)`
      }
      pageStates[index] = !pageStates[index]
      if(pageStates.every(state => state === true )){
        ul.style.transform = `translateX(0px)`
      }
    })
  })
})