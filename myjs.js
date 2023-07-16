// クイズデータ
const quizData = [
  {
    question: 'こたけ正義感は現役〇〇芸人？',
    choices: ['医師', '税理士', '弁護士', '消防士'],
    answer: '弁護士'
  },
  {
    question: 'ファイヤーサンダーのこてつの従兄弟は誰？',
    choices: ['野田クリスタル（マヂカルラブリー）', 'かみちぃ（ジェラードン）', '伊藤幸司（ランジャタイ）', '東ブクロ（さらば青春の光）'],
    answer: '東ブクロ（さらば青春の光）'
  },
  {
    question: 'フワちゃんと同期なのは？',
    choices: ['ぱーてぃーちゃん','土佐兄弟','クマムシ','サツマカワRPG'],
    answer: '土佐兄弟'
  }
      
];

// 変数定義
let currentQuestionIndex = 0;
let score = 0;

// HTML要素の取得
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

// 問題を表示する関数
function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', checkAnswer);
    choicesEl.appendChild(li);
  });
}

// 解答をチェックする関数
function checkAnswer(e) {
  const selectedChoice = e.target.textContent;
  const correctAnswer = quizData[currentQuestionIndex].answer;

  if (selectedChoice === correctAnswer) {
    score++;
    scoreEl.textContent = score;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    alert(`クイズ終了！あなたのスコアは${score}点です。`);
  }
}

// 次の問題へ進む関数
nextBtn.addEventListener('click', showQuestion);

// 最初の問題を表示
showQuestion();
