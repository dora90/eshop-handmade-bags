function popupToggle(){
    const popup = document.getElementById('popup')
    popup.classList.toggle('active')
}

const email =document.getElementById('email');
const errorElement = document.getElementById('error')
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

form.addEventListener('submit', (e) => {
    let messages = []
    if (!email.value.match(mailRegex)) {
      messages.push('Invalid email')
    }else {
        messages.push('We got your email!')
    }
   
  
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(', ')
    }
  
  
  });