document.getElementById('btn').addEventListener('click', function() {

    const quizItems = document.querySelectorAll('.quiz-item');
    
    quizItems.forEach(function(quizItem) {
        
        const answers = quizItem.querySelectorAll('.quiz-answer-item input');
        const randomIndex = Math.floor(Math.random() * answers.length);
        answers.forEach(function(answer) {
            answer.checked = false;
        });
        answers[randomIndex].checked = true;
    });
});
