var $Timer = $("#timer");
var $Content = $("#content");
var $ButtonsCont = $("#buttonsCont");
var RandomQuestions = [];
var i;
var aa=[];


let time=20;


function DisplayQuestions()
{
  
  $.ajax({
    type: "GET",
    url: "../JSON/Questions.json",
    data: "data",
    dataType: "json",
    success: function (questionsData) {
      aa=questionsData;
      if(RandomQuestions.length==0)
      {
        RandomQuestionsPool(RandomQuestions,aa.length);
      }
      $Content.empty();
      $ButtonsCont.empty();
      if(RandomQuestions[i]===undefined)
      {
        $Content.append(`Last Q`);
        $Timer.append(`Time`);
        $ButtonsCont.append(`<div class="d-flex col-6 justify-content-Start align-items-end"><button type="button" onclick="PreviousQuestion(`+RandomQuestions[i-1]+`)" class="btn btn-outline-light btn-lg btn-block">Previous</button></div>`);
      }
      else
      {
        time=aa[RandomQuestions[i]].Time;
        console.log(`aa[RandomQuestions[i]].Time`, aa[RandomQuestions[i]].Time)
        console.log(aa[RandomQuestions[i]])  

        
          $Content.append(
            `
            <form action="">
            <h4 id="question">`+aa[RandomQuestions[i]].question+`</h4>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="option1" value="option1">
            <label class="form-check-label" for="option1">
            A . `+aa[RandomQuestions[i]].Options.A+`
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="option2" value="option2">
            <label class="form-check-label" for="option2">
            B . `+aa[RandomQuestions[i]].Options.B+`
            </label>
            </div>
            <div class="form-check disabled">
            <input class="form-check-input" type="radio" name="exampleRadios" id="option3" value="option3">
            <label class="form-check-label" for="option3">
            C . `+aa[RandomQuestions[i]].Options.C+`
            </label>
            </div>
            <div class="form-check disabled">
            <input class="form-check-input" type="radio" name="exampleRadios" id="option3" value="option3">
            <label class="form-check-label" for="option3">
            D . `+aa[RandomQuestions[i]].Options.D+`
            </label>
            </div>
            </form>
            <br>       
            `
            )
            if(i>0)
            {
              $ButtonsCont.append(`<div class="d-flex col-6 justify-content-Start align-items-end"><button type="button" onclick="PreviousQuestion(`+RandomQuestions[i-1]+`)" class="btn btn-outline-light btn-lg btn-block">Previous</button></div>`);        
            }
            if(i<aa.length)
            {
              $ButtonsCont.append(`<div class="d-flex col-6 justify-content-end align-items-end"><button type="button" onclick="NextQuestion(`+RandomQuestions[i]+`)" class="btn btn-outline-light btn-lg btn-block">Next</button></div>`); 
            }
        }
      }
      });
    }


function RandomQuestionsPool(Rand, num)
{
  while(Rand.length < 5)
  {
    var r = Math.floor(Math.random() * (num));
    if(Rand.indexOf(r) === -1) 
    {
      Rand.push(r);
    }
    }
}

function start()
{
  i=0;
  DisplayQuestions();
  displayTime(time);
  startTimer();
}

function startTimer()
{
  const countDown = setInterval(()=>{
    time--;
    displayTime(time);
    if(time<=0 )
    {
        clearInterval(countDown);
    }
    
    },1000)
}




function NextQuestion(index)
{
  if(aa[i]===undefined)
  {
    DisplayQuestions();
  }
  else
  {
    DisplayQuestions();
    
    i++;
    aa[index].Time=aa[index].Time-aa[index].TimeCounter;
    aa[index].TimeCounter+= time- aa[index].Time;
    console.log(`aa[index]`, aa[index])
  }
}
function PreviousQuestion(index)
{
  if(aa[i]===undefined)
  {
    DisplayQuestions();
  }
  else
  {
    i--;
    DisplayQuestions();
    time=aa[index].Time;
  }
   
}





function displayTime(second)
{
    const min = Math.floor(second/60);
    const sec = Math.floor(second % 60);
    $Timer.empty();
    $Timer.append(`Time Remaining ${min <10 ? '0' : ''}${min}:${sec<10 ? '0': ''}${sec}`);
}
