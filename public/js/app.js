


const inputForm=document.querySelector('form');
const search=document.querySelector('input');

const messageOne=document.querySelector('h3')
const messageTwo=document.querySelector('#forecastText')


inputForm.addEventListener('submit', (e)=>{
 event.preventDefault()

 const location=search.value


 messageOne.textContent='Loading'
 messageTwo.textContent=''



  fetch('/weather?address=' +location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
          messageOne.textContent=data.error
        } else {
        messageOne.textContent= data.location
        messageTwo.textContent= data.forecast
        }

    })

    })
})

