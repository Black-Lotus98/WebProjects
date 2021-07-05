
function DisplayQuestions()
{
  $.ajax({
    type: "GET",
    url: "../JSON/Questions.json",
    data: "data",
    dataType: "json",
    success: function (QuestionsData) {
        console.log(QuestionsData);
            
    }
  });
}
DisplayQuestions();