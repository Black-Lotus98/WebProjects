var $cardContent = $("#cardBody");
var $cardFooter = $("#cardFooter");
$cardContent.hide();
$cardFooter.hide();

var $Timer = $("#timer");


var $MCQ = $("#MCQ");
var $QuestionText = $("#question");
var $Option1 = $("#option1");
var $Option2 = $("#option2");
var $Option3 = $("#option3");
var $Option4 = $("#option4");


var $Option1Text = $("#option1Text");
var $Option2Text = $("#option2Text");
var $Option3Text = $("#option3Text");
var $Option4Text = $("#option4Text");


var $ButtonsCont = $("#buttonsCont");
var $PreviousBtn = $("#previousBtn");
var $NextBtn = $("#nextBtn");
var RandomQuestions = [];
var aa=[];
var time;
var i;
var score = 0;


function RandomQuestionsPool(Rand, num)
{
    while(Rand.length < 10)
    {
        var r = Math.floor(Math.random() * (num));
        if(Rand.indexOf(r) === -1) 
        {
            Rand.push(r);
        }
    }
}


function getDataFromJsonFile()
{
    i=0
    $.ajax({
        type: "GET",
        url: "../JSON/Questions.json",
        data: "data",
        dataType: "json",
        success: function (questionsData) {
            aa=questionsData
            if(RandomQuestions.length==0)
            {
                RandomQuestionsPool(RandomQuestions,aa.length);
            }
        }
    });
}    




function DisplayQuestions()
{
    $QuestionText.empty();
    $Option1Text.empty();
    $Option2Text.empty();
    $Option3Text.empty();
    $Option4Text.empty();
    $PreviousBtn.empty();
    $NextBtn.empty();
    $Timer.empty();
    if(RandomQuestions[i]===undefined)
    {
        $MCQ.hide();
        $QuestionText.append(`You solved all the question, you can go back and check to check your answers`);
        $Timer.append(`The questions are finished`);
        $PreviousBtn.append(`<button type="button" onclick="PreviousQuestion(`+RandomQuestions[i]+`)" class="btn btn-dark btn-lg btn-block half-width ">Previous</button>`);
        $NextBtn.append(`<button type="button" onclick="submitAnswers()" class="btn btn-dark btn-lg btn-block half-width ">Submit</button>`);
    }
    else
    {
        $MCQ.show();
        if( aa[RandomQuestions[i]].TimeRremaining ==-1)
        {
            aa[RandomQuestions[i]].TimeRremaining = aa[RandomQuestions[i]].Time;
            time = aa[RandomQuestions[i]].TimeRremaining;
        }
        else
        {
            time = aa[RandomQuestions[i]].TimeRremaining;
        }

        displayTime(time);
        
        $QuestionText.append((i+1) + `. `+ aa[RandomQuestions[i]].question);
        $Option1Text.append(aa[RandomQuestions[i]].Options.A);
        $Option2Text.append(aa[RandomQuestions[i]].Options.B);
        $Option3Text.append(aa[RandomQuestions[i]].Options.C);
        $Option4Text.append(aa[RandomQuestions[i]].Options.D);
        
        if(i>0)
        {
            $PreviousBtn.append(`<button type="button" onclick="PreviousQuestion()" class="btn btn-dark btn-lg btn-block half-width ">Previous</button>`);        
        }
        if(i<aa.length)
        {
            $NextBtn.append(`<button type="button" onclick="NextQuestion()" class="btn btn-dark btn-lg btn-block half-width ">Next</button>`); 
        }
        if(i == aa.length)
        {
            $PreviousBtn.append(`<button type="button" onclick="PreviousQuestion()" class="btn btn-dark btn-lg btn-block half-width ">Previous</button>`);
        }
    }
}
       

function startTimer()
{
    
    setInterval(function(){
        if(time > 0)
        {

            time--;
            displayTime(time);
            
        }
        if(time<=0 )
        {
            return;
        } 
    },1000)
    
}


function displayTime(second)
{
    const min = Math.floor(second/60);
    const sec = Math.floor(second % 60);
    $Timer.empty();
    $Timer.append(`Time Remaining ${min <10 ? '0' : ''}${min}:${sec<10 ? '0': ''}${sec}`);
    CheckTimer(time);
}


function start()
{
  i=0;
  $cardContent.show();
  $cardFooter.show();

  DisplayQuestions();
  startTimer();
  
}


function NextQuestion()
{
    aa[RandomQuestions[i]].TimeRremaining=time;  
    checkResult(1);
    disableChoice();
    i++;
    if(RandomQuestions[i] != undefined)
    {
        time=aa[RandomQuestions[i]].TimeRremaining;

    }
    else
    {
        time=0;
    }
    DisplayQuestions();    
    
}


function PreviousQuestion()
{
    if(RandomQuestions[i] != undefined)
    {
        score--;
        disableChoice();
        aa[RandomQuestions[i]].TimeRremaining=time;  
        i--;
        time=aa[RandomQuestions[i]].TimeRremaining;    
    }
    else
    {
        score--;
        disableChoice();
        i--;
        time=aa[RandomQuestions[i]].TimeRremaining;
    }
    DisplayQuestions();
}
    


function CheckTimer(timeLeft)
{

    if(timeLeft == 0)
    {
        $Option1.attr('disabled', true);
        $Option2.attr('disabled', true);
        $Option3.attr('disabled', true);
        $Option4.attr('disabled', true);
    }
    else
    {
        $Option1.attr('disabled', false);
        $Option2.attr('disabled', false);
        $Option3.attr('disabled', false);
        $Option4.attr('disabled', false);
    }

}


function submitAnswers()
{
    $QuestionText.empty();
    $Option1Text.empty();
    $Option2Text.empty();
    $Option3Text.empty();
    $Option4Text.empty();
    $PreviousBtn.empty();
    $NextBtn.empty();
    $Timer.empty();


    $Timer.append(` 
    <button type="button" id="Start" onclick="tryAgain()" class="btn btn-dark btn-lg btn-block half-width" >Test Your Self Again</button>`);

    $QuestionText.append(`Your Result Is: ${score}`)
}

function checkResult(amount)
{
    if(aa[RandomQuestions[i]]!=undefined)
    {
        if($Option1.is(':checked') && $Option1Text.text() == aa[RandomQuestions[i]].answer)
        {
            score+=amount;
            console.log(`$Option1.is(':checked')`, $Option1.is(':checked'))
        }
        
        if($Option2.is(':checked') && $Option2Text.text() == aa[RandomQuestions[i]].answer)
        {
            score+=amount;
            console.log(`$Option2.is(':checked')`, $Option2.is(':checked'))

        }
        
        if($Option3.is(':checked') && $Option3Text.text() == aa[RandomQuestions[i]].answer)
        {
            score+=amount;
            console.log(`$Option3.is(':checked')`, $Option3.is(':checked'))

        }
        
        if($Option4.is(':checked') && $Option4Text.text() == aa[RandomQuestions[i]].answer)
        {
            score+=amount;
            console.log(`$Option4.is(':checked')`, $Option4.is(':checked'))
        }
    }
}


function disableChoice()
{
    $Option1.prop('checked', false);
    $Option2.prop('checked', false);
    $Option3.prop('checked', false);
    $Option4.prop('checked', false);
}




function tryAgain()
{
    location.href = "../html/quiz.html";
}




getDataFromJsonFile();
