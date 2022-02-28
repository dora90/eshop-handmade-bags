const email =document.getElementById('email');
const errorElement = document.getElementById('error')
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

form.addEventListener('submit', (e) => {
    let messages = []
    if (!email.value.match(mailRegex)) {
      messages.push('Invalid email')
    }else {
        messages.push('Your email has been sent!')
    }
   
  
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(', ')
    }
  
  
  });

  function sendMail(params) {
    var tempParams = {
      form_name : document.getElementById("name").value,
      message: document.getElementById("subject").value
    }

    emailjs.send('service_6vrngoj', 'template_udtmx1k', tempParams).then(function(res){
      console.log("success", res.status)
    })
  }