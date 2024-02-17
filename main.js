function switchLanguage() {
    var languageSelector = document.getElementById('languageSelector');
    var selectedLanguage = languageSelector.value;

    if (selectedLanguage === 'es') {
      document.getElementById('Home').innerText = 'Casa';
      document.getElementById('Support').innerText = 'Apoyo';
      document.getElementById('Customers').innerText = 'Clientes';
      document.getElementById('SignUp').innerText = 'Regístrese gratis';
      document.getElementById('text1').innerText = 'Hay una mejor manera de entrenar';
      document.getElementById('text1').style.left = '350px';
      document.getElementById('text2').innerText = 'Ofrece la experiencia de aprendizaje que tu equipo merece con AI Create.';
      document.getElementById('text2').style.left = '300px';
      document.getElementById('text3').innerText="No se requiere lluvia de ideas, investigación o golpe de inspiración.";
      document.getElementById('start').innerText = 'Comienza gratis';
    
    } 
    if (selectedLanguage === 'en')
    {
      document.getElementById('Home').innerText = 'Home';
      document.getElementById('Support').innerText = 'Support';
      document.getElementById('Customers').innerText = 'Customers';
      document.getElementById('SignUp').innerText = 'Sign Up for free';
      document.getElementById('text1').innerText = "There's a better way to train";
      document.getElementById('text1').style.left = '415px';
      document.getElementById('text2').innerText = 'Deliver the learning experience your team deserves with AI Create.';
      document.getElementById('text3').innerText = "No brainstorm, research, or strike of inspiration necessary.";
      document.getElementById('start').innerText = 'Get started free';
    }
    // Add more language options and translations as needed
  }