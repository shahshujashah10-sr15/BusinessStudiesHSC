const quizData = [
    {
        question: "Which of the following is a 'Transformed Resource'?",
        options: { a: "Human Resources", b: "Facilities", c: "Customers", d: "Machinery" },
        correct: "c",
        explanation: "Customers are processed/changed by the business. HR and Facilities are 'Transforming' resources."
    },
    {
        question: "What does the 'V' in the 4 Vs of transformation stand for that relates to demand changes?",
        options: { a: "Volume", b: "Variation in Demand", c: "Visibility", d: "Variety" },
        correct: "b",
        explanation: "Variation in Demand refers to how much demand changes over time (e.g., selling more ice cream in summer)."
    },
    {
        question: "Apple focuses heavily on high quality and unique features. Which strategic role is this?",
        options: { a: "Cost Leadership", b: "Differentiation", c: "Economies of Scale", d: "Interdependence" },
        correct: "b",
        explanation: "Differentiation involves distinguishing a product through quality, features, or design."
    },
    {
        question: "Which influence involves managing the carbon footprint and waste?",
        options: { a: "Legal Regulation", b: "Globalisation", c: "Corporate Social Responsibility (CSR)", d: "Technology" },
        correct: "c",
        explanation: "CSR goes beyond the law to include ethical responsibility for the environment."
    },
    {
        question: "In Supply Chain Management, 'Logistics' refers to:",
        options: { a: "Designing the product", b: "Hiring staff", c: "Transport and storage of goods", d: "Advertising the product" },
        correct: "c",
        explanation: "Logistics is the physical distribution and storage aspect of the supply chain."
    }
];

const quizContainer = document.getElementById('quiz-container');

// 1. Render Questions
function loadQuiz() {
    let output = "";
    quizData.forEach((data, index) => {
        output += `
            <div class="question-block">
                <h3>${index + 1}. ${data.question}</h3>
                <div class="options">
                    <label><input type="radio" name="q${index}" value="a"> ${data.options.a}</label>
                    <label><input type="radio" name="q${index}" value="b"> ${data.options.b}</label>
                    <label><input type="radio" name="q${index}" value="c"> ${data.options.c}</label>
                    <label><input type="radio" name="q${index}" value="d"> ${data.options.d}</label>
                </div>
                <div id="feedback-${index}" class="feedback"></div>
            </div>
        `;
    });
    quizContainer.innerHTML = output;
}

// 2. Check Answers
function submitQuiz() {
    let score = 0;
    quizData.forEach((data, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-${index}`);
        
        if (selected) {
            if (selected.value === data.correct) {
                score++;
                feedbackDiv.innerHTML = `Correct! ${data.explanation}`;
                feedbackDiv.className = "feedback correct";
            } else {
                feedbackDiv.innerHTML = `Incorrect. ${data.explanation}`;
                feedbackDiv.className = "feedback incorrect";
            }
        } else {
            feedbackDiv.innerHTML = "Please select an answer.";
            feedbackDiv.className = "feedback incorrect";
        }
    });

    const results = document.getElementById('results');
    results.innerHTML = `You scored ${score} / ${quizData.length}`;
}

// Initialize
loadQuiz();