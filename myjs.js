function showTime(){
  var formElem=document.getElementById("form1");
  today=new Date();
  formElem.output1.value=today.toLocaleString();
}

//クイズデータ
const quizDate=[
  {
    question:'こたけ正義感は現役○○芸人？',
    choices:['医師','税理士','弁護士','消防士'],
    answer:'弁護士'
},
{
  question:'ファイヤーサンダーこてつの従兄弟は誰？',
  choices:['マヂカルラブリー 野田クリスタル','ジェラードン かみちぃ','ランジャタイ 伊藤幸司','さらば青春の光 東ブクロ'],
  answer:'さらば青春の光 東ブクロ'
},
  {
    question:'フワちゃんと同期なのは？',
    choices:['ぱーてぃーちゃん','土佐兄弟','クマムシ','サツマカワRPG'],
    answer:'土佐兄弟'
  }
  ];

//変数定理
let currentQuestionIndex=0;
let score=0;

//HTML要素の取得
const questionEL=document.getElementById('question');
const choicesEL=document.getElementById('choices');
const nextBtn=document.getElementById('nextBtn');
const scoreEL=document.getElementById('score');

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
