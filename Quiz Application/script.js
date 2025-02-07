
        const quizData = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which language runs in a web browser?",
                options: ["Java", "C", "Python", "JavaScript"],
                answer: "JavaScript"
            },
            {
                question: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Central Style System", "Computer Style Sheet", "Creative Style Syntax"],
                answer: "Cascading Style Sheets"
            }
        ];
        
        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            if (currentQuestion >= quizData.length) {
                document.getElementById("quiz").innerHTML = `<div class='result'>You scored ${score}/${quizData.length}</div>`;
                return;
            }
            
            const questionData = quizData[currentQuestion];
            document.getElementById("question").innerText = questionData.question;
            
            const optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";
            
            questionData.options.forEach(option => {
                const button = document.createElement("button");
                button.innerText = option;
                button.onclick = () => checkAnswer(option);
                optionsDiv.appendChild(button);
            });
        }

        function checkAnswer(selectedOption) {
            if (selectedOption === quizData[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            loadQuestion();
        }

        loadQuestion();
   