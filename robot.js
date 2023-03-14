
alert ('سلام خوش اومدی \n سوالاتو ازم بپرس🥰 ')


let questionInput = document.getElementById('questionInput'),
 answerInput = document.getElementById('answerInput'),
 btn = document.getElementById('btn');

 btn.addEventListener( 'click' , myfunction)

 function myfunction() { 
  if (questionInput.value == 'اسمت چیه؟') {
   answerInput.value= ' اسمم باقره '
  }
  else if (questionInput.value == 'چند سالته؟') {
   answerInput.value=' دو روزمه'
  }
  else if (questionInput.value == 'معدلت چند شده؟') {
   answerInput.value= 20 
  }
 else {
  answerInput.value = 'با احترام به شما مربوط نیست'
 }
}
