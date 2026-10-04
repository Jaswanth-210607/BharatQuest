
let score = 0;
let currentQuestion = 0;
let currentCategory = "";

let lives = 3;
let streak = 0;

let difficulty = "easy";
let pointsPerQuestion = 10;

const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const winSound = new Audio("sounds/win.mp3");


// ==========================================
// HIGH SCORE
// ==========================================

let highScore =
    localStorage.getItem("bharatQuestHighScore") || 0;


// ==========================================
// LEADERBOARD
// ==========================================

let leaderboard =
    JSON.parse(
        localStorage.getItem("bharatQuestLeaderboard")
    ) || [];


// Show high score on home screen

if (document.getElementById("high-score")) {

    document.getElementById("high-score").innerText =
        highScore;

}


// ==========================================
// QUESTIONS
// ==========================================

const questions = {

    // ======================================
    // 🏛️ MONUMENTS
    // ======================================

    monuments: [

        {
            question: "Where is the Taj Mahal located?",
            answers: [
                "Delhi",
                "Agra",
                "Mumbai",
                "Jaipur"
            ],
            correct: 1
        },

        {
            question: "Which city is famous for the Meenakshi Amman Temple?",
            answers: [
                "Chennai",
                "Madurai",
                "Salem",
                "Coimbatore"
            ],
            correct: 1
        },

        {
            question: "Where is the Gateway of India located?",
            answers: [
                "Mumbai",
                "Delhi",
                "Kolkata",
                "Chennai"
            ],
            correct: 0
        },

        {
            question: "Which monument is located in Delhi?",
            answers: [
                "Qutub Minar",
                "Charminar",
                "Gateway of India",
                "Victoria Memorial"
            ],
            correct: 0
        },

        {
            question: "The Charminar is located in which city?",
            answers: [
                "Hyderabad",
                "Bengaluru",
                "Pune",
                "Kochi"
            ],
            correct: 0
        }

    ],


    // ======================================
    // 🎉 FESTIVALS
    // ======================================

    festivals: [

        {
            question: "Which festival is known as the Festival of Lights?",
            answers: [
                "Holi",
                "Pongal",
                "Diwali",
                "Onam"
            ],
            correct: 2
        },

        {
            question: "Which festival is strongly associated with Tamil Nadu?",
            answers: [
                "Pongal",
                "Bihu",
                "Onam",
                "Baisakhi"
            ],
            correct: 0
        },

        {
            question: "Which festival is famous for colours?",
            answers: [
                "Diwali",
                "Holi",
                "Pongal",
                "Christmas"
            ],
            correct: 1
        },

        {
            question: "Which festival is famous in Kerala?",
            answers: [
                "Onam",
                "Pongal",
                "Bihu",
                "Lohri"
            ],
            correct: 0
        },

        {
            question: "Which festival is associated with the harvest in Punjab?",
            answers: [
                "Baisakhi",
                "Onam",
                "Diwali",
                "Holi"
            ],
            correct: 0
        }

    ],


    // ======================================
    // 🇮🇳 NATIONAL SYMBOLS
    // ======================================

    symbols: [

        {
            question: "What is the national bird of India?",
            answers: [
                "Eagle",
                "Parrot",
                "Peacock",
                "Sparrow"
            ],
            correct: 2
        },

        {
            question: "What is the national flower of India?",
            answers: [
                "Rose",
                "Lotus",
                "Jasmine",
                "Sunflower"
            ],
            correct: 1
        },

        {
            question: "What is the national animal of India?",
            answers: [
                "Lion",
                "Elephant",
                "Tiger",
                "Deer"
            ],
            correct: 2
        },

        {
            question: "What is the national fruit of India?",
            answers: [
                "Apple",
                "Mango",
                "Banana",
                "Orange"
            ],
            correct: 1
        },

        {
            question: "What is the national aquatic animal of India?",
            answers: [
                "Blue Whale",
                "Ganges River Dolphin",
                "Shark",
                "Crocodile"
            ],
            correct: 1
        }

    ],


    // ======================================
    // 🍛 INDIAN FOOD
    // ======================================

    food: [

        {
            question: "Which dish is strongly associated with Hyderabad?",
            answers: [
                "Biryani",
                "Dhokla",
                "Idli",
                "Pongal"
            ],
            correct: 0
        },

        {
            question: "Which food is traditionally associated with Tamil Nadu?",
            answers: [
                "Dhokla",
                "Pongal",
                "Litti",
                "Rogan Josh"
            ],
            correct: 1
        },

        {
            question: "Dhokla is a popular food from which state?",
            answers: [
                "Gujarat",
                "Kerala",
                "Punjab",
                "Assam"
            ],
            correct: 0
        },

        {
            question: "Which South Indian food is commonly served with sambar?",
            answers: [
                "Idli",
                "Jalebi",
                "Dhokla",
                "Kachori"
            ],
            correct: 0
        },

        {
            question: "Which sweet is commonly associated with West Bengal?",
            answers: [
                "Rasgulla",
                "Mysore Pak",
                "Peda",
                "Modak"
            ],
            correct: 0
        }

    ],


    // ======================================
    // 💃 CULTURE
    // ======================================

    culture: [

        {
            question: "Which classical dance form originated in Tamil Nadu?",
            answers: [
                "Bharatanatyam",
                "Kathak",
                "Kathakali",
                "Manipuri"
            ],
            correct: 0
        },

        {
            question: "Which classical dance form is associated with Kerala?",
            answers: [
                "Kathakali",
                "Bharatanatyam",
                "Odissi",
                "Kuchipudi"
            ],
            correct: 0
        },

        {
            question: "Which dance form is associated with Andhra Pradesh?",
            answers: [
                "Kuchipudi",
                "Kathak",
                "Bihu",
                "Garba"
            ],
            correct: 0
        },

        {
            question: "Garba is traditionally associated with which state?",
            answers: [
                "Gujarat",
                "Tamil Nadu",
                "Assam",
                "Odisha"
            ],
            correct: 0
        },

        {
            question: "Bihu is a famous festival and cultural tradition of which state?",
            answers: [
                "Assam",
                "Kerala",
                "Gujarat",
                "Rajasthan"
            ],
            correct: 0
        }

    ],


    // ======================================
    // 📜 HISTORY
    // ======================================

    history: [

        {
            question: "Who is popularly known as the Father of the Nation in India?",
            answers: [
                "Mahatma Gandhi",
                "Jawaharlal Nehru",
                "Sardar Patel",
                "Subhas Chandra Bose"
            ],
            correct: 0
        },

        {
            question: "Who was the first Prime Minister of independent India?",
            answers: [
                "Jawaharlal Nehru",
                "Sardar Patel",
                "Rajendra Prasad",
                "B. R. Ambedkar"
            ],
            correct: 0
        },

        {
            question: "Who is known as the Iron Man of India?",
            answers: [
                "Sardar Vallabhbhai Patel",
                "Mahatma Gandhi",
                "Subhas Chandra Bose",
                "Bhagat Singh"
            ],
            correct: 0
        },

        {
            question: "Who is associated with the slogan 'Jai Hind'?",
            answers: [
                "Subhas Chandra Bose",
                "Mahatma Gandhi",
                "Jawaharlal Nehru",
                "Sardar Patel"
            ],
            correct: 0
        },

        {
            question: "India became independent in which year?",
            answers: [
                "1945",
                "1947",
                "1950",
                "1952"
            ],
            correct: 1
        }

    ]

};


// ==========================================
// 🏆 DISPLAY LEADERBOARD
// ==========================================

function displayLeaderboard() {

    const list =
        document.getElementById("leaderboard");

    if (!list) {
        return;
    }

    list.innerHTML = "";

    if (leaderboard.length === 0) {

        list.innerHTML =
            "<li>No scores yet</li>";

        return;
    }

    leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .forEach((player) => {

            const item =
                document.createElement("li");

            item.innerText =
                player.name +
                " — " +
                player.score +
                " ⭐";

            list.appendChild(item);

        });
}


// Display leaderboard when page loads

displayLeaderboard();
// ==========================================
// 📊 PLAYER DASHBOARD
// ==========================================

function showDashboard() {

    const playerName =
        localStorage.getItem("bharatQuestPlayer") ||
        "Player";

    const gamesPlayed =
        localStorage.getItem("bharatQuestGames") || 0;

    const totalScore =
        localStorage.getItem("bharatQuestTotalScore") || 0;

    const bestStreak =
        localStorage.getItem("bharatQuestBestStreak") || 0;

    let achievement = "None";

    if (highScore >= 100) {
        achievement = "👑 Culture Master";
    } else if (highScore >= 60) {
        achievement = "🏆 Heritage Explorer";
    } else if (highScore >= 30) {
        achievement = "⭐ India Explorer";
    } else if (highScore > 0) {
        achievement = "🌱 Beginner Explorer";
    }

    document.getElementById("dashboard-name").innerText =
        playerName;

    document.getElementById("games-played").innerText =
        gamesPlayed;

    document.getElementById("total-score").innerText =
        totalScore;

    document.getElementById("dashboard-high-score").innerText =
        highScore;

    document.getElementById("best-streak").innerText =
        bestStreak;

    document.getElementById("dashboard-achievement").innerText =
        achievement;

    document.getElementById("home-screen").style.display =
        "none";

    document.getElementById("dashboard-screen").style.display =
        "block";
}


// ==========================================
// 👤 PLAYER NAME
// ==========================================

function showCategories() {

    const name =
        document
            .getElementById("player-name")
            .value
            .trim();

    if (name === "") {

        alert("Please enter your name!");

        return;
    }

    localStorage.setItem(
        "bharatQuestPlayer",
        name
    );

    document.getElementById("home-screen")
        .style.display = "none";

    document.getElementById("category-screen")
        .style.display = "block";
}


// ==========================================
// 🏛️ SELECT CATEGORY
// ==========================================

function startCategory(category) {

    currentCategory = category;

    document.getElementById("category-screen")
        .style.display = "none";

    document.getElementById("difficulty-screen")
        .style.display = "block";
}


// ==========================================
// 🎯 SELECT DIFFICULTY
// ==========================================

function startDifficulty(level) {

    difficulty = level;


    if (level === "easy") {

        pointsPerQuestion = 10;

    }


    if (level === "medium") {

        pointsPerQuestion = 20;

    }


    if (level === "hard") {

        pointsPerQuestion = 30;

    }


    score = 0;

    currentQuestion = 0;

    lives = 3;

    streak = 0;


    document.getElementById("lives")
        .innerText = lives;

    document.getElementById("game-score")
        .innerText = score;

    document.getElementById("streak")
        .innerText = streak;


    document.getElementById("difficulty-screen")
        .style.display = "none";

    document.getElementById("quiz-screen")
        .style.display = "block";


    showQuestion();
}


// ==========================================
// ❓ SHOW QUESTION
// ==========================================

function showQuestion() {

    const questionList = questions[currentCategory];
    const question = questionList[currentQuestion];

    document.getElementById("question")
        .innerText = question.question;

    document.getElementById("question-number")
        .innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questionList.length;

    const progress =
        ((currentQuestion + 1) / questionList.length) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

    const buttons =
        document.querySelectorAll("#answers button");

    for (let i = 0; i < 4; i++) {

        // Change answer text
        buttons[i].innerText = question.answers[i];

        // IMPORTANT: Enable buttons for new question
        buttons[i].disabled = false;

        // Remove previous answer effects
        buttons[i].classList.remove(
            "answer-correct",
            "answer-wrong"
        );
    }
}


// ==========================================
// ✅ CHECK ANSWER
// ==========================================

function checkAnswer(answer) {

    const questionList = questions[currentCategory];
    const question = questionList[currentQuestion];

    const buttons = document.querySelectorAll("#answers button");

    /* Disable buttons temporarily */
    buttons.forEach(button => {
        button.disabled = true;
    });

    if (answer === question.correct) {

        /* Correct answer */
        buttons[answer].classList.add("answer-correct");

        score += pointsPerQuestion;
        streak++;

        correctSound.currentTime = 0;
        correctSound.play();

        document.getElementById("game-score").innerText = score;
        document.getElementById("streak").innerText = streak;

        document.getElementById("game-score")
            .classList.add("score-update");

        setTimeout(() => {
            document.getElementById("game-score")
                .classList.remove("score-update");
        }, 500);

    } else {

        /* Wrong answer */
        buttons[answer].classList.add("answer-wrong");

        lives--;
        streak = 0;

        wrongSound.currentTime = 0;
        wrongSound.play();

        document.getElementById("lives").innerText = lives;
        document.getElementById("streak").innerText = streak;

        document.getElementById("lives")
            .classList.add("life-lost");

        setTimeout(() => {
            document.getElementById("lives")
                .classList.remove("life-lost");
        }, 500);
    }

    /* Wait before next question */
    setTimeout(() => {

        if (lives <= 0) {

            showFinalScore("Game Over 💔");
            return;
        }

        currentQuestion++;

        if (currentQuestion < questionList.length) {

            showQuestion();

        } else {

            showFinalScore("🏆 Quiz Completed!");

        }

    }, 700);
}


// ==========================================
// 🏆 FINAL SCORE
// ==========================================

// ==========================================
// 🏆 FINAL SCORE
// ==========================================

function showFinalScore(title) {

    if (title === "🏆 Quiz Completed!") {
    winSound.currentTime = 0;
    winSound.play();
}

    let gamesPlayed =
        Number(localStorage.getItem("bharatQuestGames")) || 0;

    gamesPlayed++;

    localStorage.setItem(
        "bharatQuestGames",
        gamesPlayed
    );

    let totalScore =
        Number(localStorage.getItem("bharatQuestTotalScore")) || 0;

    totalScore += score;

    localStorage.setItem(
        "bharatQuestTotalScore",
        totalScore
    );

    let bestStreak =
        Number(localStorage.getItem("bharatQuestBestStreak")) || 0;

    if (streak > bestStreak) {

        bestStreak = streak;

        localStorage.setItem(
            "bharatQuestBestStreak",
            bestStreak
        );
    }

    const totalQuestions =
        questions[currentCategory].length;

    const maxScore =
        totalQuestions * pointsPerQuestion;

    const percentage =
        Math.round(
            (score / maxScore) * 100
        );

    // HIGH SCORE

    if (score > highScore) {

        highScore = score;

        localStorage.setItem(
            "bharatQuestHighScore",
            highScore
        );
    }

    // PLAYER NAME

    const playerName =
        localStorage.getItem(
            "bharatQuestPlayer"
        ) || "Player";

    // LEADERBOARD

    leaderboard.push({

        name: playerName,
        score: score

    });

    leaderboard.sort(
        (a, b) => b.score - a.score
    );

    leaderboard =
        leaderboard.slice(0, 5);

    localStorage.setItem(
        "bharatQuestLeaderboard",
        JSON.stringify(leaderboard)
    );

    // ACHIEVEMENT

    let achievement = "";

    if (score >= 100) {

        achievement =
            "👑 Culture Master";

    } else if (score >= 60) {

        achievement =
            "🏆 Heritage Explorer";

    } else if (score >= 30) {

        achievement =
            "⭐ India Explorer";

    } else {

        achievement =
            "🌱 Beginner Explorer";
    }

    // FINAL SCREEN

    document.getElementById("quiz-screen").innerHTML = `

    <div class="result-screen">

        <div class="result-trophy">
            🏆
        </div>

        <h1>${title}</h1>

        <p class="result-subtitle">
            🇮🇳 Your Bharat Quest Journey
        </p>

        <div class="result-score">
            ${score}
            <span>POINTS</span>
        </div>

        <div class="result-stats">

            <div class="result-card">
                <span>🎯</span>
                <b>${percentage}%</b>
                <small>Accuracy</small>
            </div>

            <div class="result-card">
                <span>🔥</span>
                <b>${streak}</b>
                <small>Best Streak</small>
            </div>

            <div class="result-card">
                <span>🏆</span>
                <b>${highScore}</b>
                <small>High Score</small>
            </div>

        </div>

        <div class="achievement-box">
            <span>🏅 Achievement</span>
            <strong>${achievement}</strong>
        </div>

        <button onclick="location.reload()">
            🔄 Play Again
        </button>

        <button onclick="goHome()">
            🏠 Home
        </button>

    </div>

`;
}


// ==========================================
// 🏠 GO HOME
// ==========================================

function goHome() {

    document.getElementById("home-screen").style.display = "block";

    document.getElementById("dashboard-screen").style.display = "none";

    document.getElementById("category-screen").style.display = "none";

    document.getElementById("difficulty-screen").style.display = "none";

    document.getElementById("quiz-screen").style.display = "none";

    window.scrollTo(0, 0);
}