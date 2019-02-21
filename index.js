document.addEventListener('DOMContentLoaded',function(){
    // const monstersUrl = `http://localhost:3000/monsters?_limit=50&_page=${page}`
  let pageNumber = 0
  // getPageMonsters(monstersUrl,pageNumber);
  let monsterContainer = document.querySelector('#monster-container')
  let backButton = document.querySelector('#back')

  let fowardButton =
  document.addEventListener('click',function(e){
    while(monsterContainer.firstChild)
    {
      // console.log('in while in click listener')
      monsterContainer.removeChild(monsterContainer.firstChild)
    }
    // console.log(e.toElement.id)

    if( e.toElement.id === 'forward'){
      // pageNumber++
      // console.log(pageNumber)
      getPageMonsters(++pageNumber)
    }
    else if (e.toElement.id === 'back')
    {
      console.log(e.toElement.id)
      if (pageNumber >0)
      {
        console.log(pageNumber)
         // pageNumber  -=1
        console.log('page greater then 0 ')
        getPageMonsters(--pageNumber)
      }
    }
    // console.log(e)
    // getPageMonsters(monstersUrl,pageNumber++)

  })// end of fowardButtonevent lsitner

  let monsterForm = document.querySelector('#create-monster')
  monsterForm.addEventListener('submit',function(e){
    // e.preventDefault()
    debugger
    console.log(e)

  })//end of mosterform submit listener
}) // end of event dom event listener



function getPageMonsters(page){
  const url = `http://localhost:3000/monsters?_limit=50&_page=${page}`
  // url = url + page
  console.log(url)
  fetch(url).then((data)=>{
    return data.json()
  }).then((parsedData)=>{
    console.log(parsedData);
    parsedData.forEach(monster => renderToDom(monster));
  })
}

function renderToDom(monster){
  let monsterContainer = document.querySelector('#monster-container')

  monsterContainer.innerHTML += `
  <div><h2>${monster.name}</h2><h4>Age: ${monster.age}</h4><p>Bio: ${monster.description}</p></div>`

}
