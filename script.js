let questionBank=[

  {
    statement:"Where did Fred Weasley Die ?",
    optionA:"In the Room of Requirement",
    optionB:"In the Great Hall",
    optionC:"In the Courtyard",
    optionD:"Outside the Room of Requirement",
    correctAns:"D"

  },
  {
    statement:"What form did Hermione's boggart take?",
    optionA:"A bloodstained ,bandaged mummy",
    optionB:"Voldemort killing her family",
    optionC:"Professor McGonagall telling her she'd failed her exams",
    optionD:"giant cobra",
    correctAns:"C"

  },
  {
    statement:"In which book does Harry find the name for his pet owl,Hedwig?",
    optionA:"A History of Magic",
    optionB:"Fantastic Beasts and Where to Find Them",
    optionC:"Hogwarts:A History",
    optionD:"The Dark Forces:A Guide to self -protection",
    correctAns:"A"

  },
  {
    statement:"Which grade is Harry awarded for his History of Magic O.W.L. exam?",
    optionA:"A",
    optionB:"P",
    optionC:"E",
    optionD:"D",
    correctAns:"D"

  },
  {
    statement:"Who is called as a witness in Harry's Wizengamot trial? ",
    optionA:"Mrs Figg",
    optionB:"Arthur Weasley",
    optionC:"Dobby",
    optionD:"Dudley Dursley",
    correctAns:"A"

  },
  {
    statement:"According to Mr Ollivander ,what is flexibility of Harry's wand?",
    optionA:"Unyielding",
    optionB:"Surprisingly swishy",
    optionC:"Nice and supple",
    optionD:"Slightly springy",
    correctAns:"C"

  },
  {
    statement:"When Harry first learns he is 'UNDESIRABLE Number One',what is the price on his head?",
    optionA:"100,000 Galleons",
    optionB:"10,000 Galleons",
    optionC:"50,000 Galleons",
    optionD:"5,000 Galleons",
    correctAns:"B"

  },
  {
    statement:"Where does Harry first conjure his corporeal Patronus?",
    optionA:"Lupin's classroom",
    optionB:"Quidditch pitch",
    optionC:"Forbidden Forest",
    optionD:"Beside the lake",
    correctAns:"B"

  },
  {
    statement:"When is Harry Potter's birthday?",
    optionA:"31 july, 1981",
    optionB:"30 july, 1980",
    optionC:"30 july, 1981",
    optionD:"31 july, 1980",
    correctAns:"D"

  },
  {
    statement:"What is Dumbledore’s full name?",
    optionA:"Albus Wulfric Percival Brian Dumbledore",
    optionB:"Albus Percival Wulfric Brian Dumbledore",
    optionC:"Albus Percival Brian Wulfric Dumbledore",
    optionD:"Albus Brian Percival Wulfric Dumbledore",
    correctAns:"B"

  },



        ];





let question=document.querySelector('.questions');
let currentIndexlocation=0;
let Questionchange=function(currentIndexlocation){

      question.innerHTML=`<p class="statement">Q-${currentIndexlocation+1}${questionBank[currentIndexlocation].statement}</p></br>
                         <input type="radio" class="radiobutton" value="A" name="choice"><label class="optionText">${questionBank[currentIndexlocation].optionA}</label><br>
                         <input type="radio" class="radiobutton" value="B" name="choice"><label class="optionText">${questionBank[currentIndexlocation].optionB}</label><br>
                         <input type="radio" class="radiobutton" value="C" name="choice"><label class="optionText">${questionBank[currentIndexlocation].optionC}</label><br>
                         <input type="radio" class="radiobutton" value="D" name="choice"><label class="optionText">${questionBank[currentIndexlocation].optionD}</label><br>`;


        }


Questionchange(currentIndexlocation);
let change=document.querySelector('button');
let userAns="";
let score=0;
const scoreSpan=document.querySelector('.score-value');
change.addEventListener('click',()=>{
  userAns=document.querySelector('input:checked').value;
  if(userAns===questionBank[currentIndexlocation].correctAns)
  {
    score+=10;
    scoreSpan.innerHTML=score;

  }
  currentIndexlocation++;

  if(currentIndexlocation<questionBank.length)
  {
    Questionchange(currentIndexlocation);
  }
  else {
    // Your message is to be displayed inside the h2 element with display class.
    // and you have to remove everything inside question-wrapper
    // pick a better variable name ..heeeheee super go aahead
    let endQues=document.querySelector('.questions-wrapper');
    endQues.innerHTML="";
    let finalMsg=document.querySelector('.display');
    if(score>=70)
    {
      finalMsg.innerHTML='AWESOME! You are truly a Potter-Head.';
    }
    else if (score>=40){
      finalMsg.innerHTML='Alright, so you managed to get a decent score, but you have to work hard!  ';
    }
    else if(score>=20)
    {
      finalMsg.innerHTML='Go watch Harry Potter again!';
    }
    else {
      finalMsg.innerHTML="It seems that you don't know Harry Potter!";
    }
  }


}

);
