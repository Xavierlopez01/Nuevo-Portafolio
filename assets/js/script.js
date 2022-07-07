const form1 = document.getElementById('form1')

// FUNCION QUE MUESTRA EL MENU RESPONSIVE
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}
// formulario
form1.addEventListener('submit', function(e){
    e.preventDefault()
    const email1 = 'xl.developer1@gmail.com';
    const URL_BASE = `https://formsubmit.co/ajax/${email1}`
   const input= e.currentTarget.elements;
   const dataForm = {
    name: input.name.value,
    email: input.email.value,
    asunto: input.asunto.value,
    message: input.message.value
   }
   window.fetch("URL_BASE", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
})
   e.currentTarget.reset()
})