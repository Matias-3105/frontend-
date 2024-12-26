const flashcards = [
    {question: "What is the difference between var,let,and,const?",answer:"In JavaScript,var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However,const objects can have their contents modified."},
    { question: "¿Cuál es la capital de Francia?", answer: "París" },
    { question: "¿Cuántos continentes hay en el mundo?", answer: "7" },
    { question: "¿Quién escribió 'Cien años de soledad'?", answer: "Gabriel García Márquez" },
    { question: "¿Cuál es el símbolo químico del oro?", answer: "Au" },
    { question: "¿Qué planeta es conocido como el planeta rojo?", answer: "Marte" }
];

let currentIndex = 0;
const progressBar = document.getElementById('progressBar');
const progressPorcent = document.getElementById('progressPorcent');
const question = document.getElementById('question');
const answer =document.getElementById('answer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flashcard = document.getElementById('flashcard');
const paragraph = document.getElementById('paragraph');

function updateCard(){
    const cards = flashcards[currentIndex];
    question.textContent = cards.question;
    answer.textContent = cards.answer;
    const progress = (currentIndex + 1 / flashcards.length)*100;
    progressBar.style.width = `${((currentIndex + 1) / flashcards.length) * 100}%`;
    progressPorcent.textContent = `${Math.round(progress)}%`
    if(progress >= 100 ){
        progressPorcent.style.display="none";
    }else{
        progressPorcent.style.display="block";
    };
};


function updateAnswer(){
    let answerElement = answer;
    let questionElement = question;
    if(questionElement.style.display === "block"){
        questionElement.style.display = "none";
    }else{
        questionElement.style.display = "block";
    }
    if(answerElement.style.display === "none"){
        answerElement.style.display = "block";
        paragraph.textContent = "Hide Answer";
    }else{
        answerElement.style.display = "none";
        paragraph.textContent = "Show Answer";
    }
};

flashcard.addEventListener('click',updateAnswer);

prevBtn.addEventListener('click',function(){
    currentIndex = (currentIndex -1) % flashcards.length;  // Ciclo entre tarjetas  
    updateCard();
});
nextBtn.addEventListener('click',function(){
    currentIndex = (currentIndex + 1) % flashcards.length;  // Ciclo entre tarjetas  
    updateCard();
});

updateCard();
