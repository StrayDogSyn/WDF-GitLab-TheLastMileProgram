/////////////////////////////////////////////////////
//    * CompTIA Super Quiz Project                 //
//    * By Eric H. Petross                         //
//    * RI-JJM-6 => The Last Mile Program          //
//    * 2024 Copyright StrayDog Syndications LLC.  //
//    * All Rights Reserved                        //
/////////////////////////////////////////////////////

$(() => {
  "use strict";

  //////////////////////
  //* DOM References *//
  //////////////////////

  let $question = document.getElementById("question");
  let $feedback = document.getElementById("feedback");
  let $answer1 = document.getElementById("answer1");
  let $answer2 = document.getElementById("answer2");
  let $answer3 = document.getElementById("answer3");
  let $answer4 = document.getElementById("answer4");
  let $score = document.getElementById("score");
  let $start = document.getElementById("start");
  let $timer = document.getElementById("timer");

  /////////////////////////////
  //* Default Page Settings *//
  /////////////////////////////

  $('#correct').hide(), $('#wrong').hide(),
    $('#next').hide(), $('#reset').hide();
  let correct;
  let interval;
  let score = 0;
  let round = 0;
  update($score, score);

  // Question constructor //
  class Question {
    constructor(questionText, answers, correctAnswer) {
      this.questionText = questionText;
      this.answers = answers;
      this.correctAnswer = correctAnswer;
    }

  }

  ///////////////////////
  //* Event Listeners *//
  ///////////////////////

  $start.addEventListener('click', () => {
    quiz(questionBank);
  }, false);
  $('#answers input').on('click', compareAnswers);
  $('#submitQuestion').on('click', userQuestion);
  $('#reset').on('click', resetQuiz);

  ///////////////////////////
  // Function Declarations //
  ///////////////////////////

  function update(element, content) {
    element.innerText = content;
  }

  /////////////////////////
  //* Question Database *//
  /////////////////////////

  const questionBank =
    // {questionText: "", answers: [0-3], correctAnswer: #x} //
    [

      {
        questionText: 'Your boss thanks you for pictures you sent from the recent company picnic. You ask him what he is talking about, and he says he got an e-mail from you with pictures from the picnic. Knowing you have not sent him that e-mail, what type of attack do you suspect is happening?',
        answers: ['Phishing', 'Spear phishing', 'Reconnaissance', 'Impersonation'],
        correctAnswer: 1
      },
      {
        questionText: 'While waiting in the lobby of your building for a guest, you notice a man in a red shirt standing close to a locked door with a large box in his hands. He waits for someone else to come along and open the locked door and then proceeds to follow her inside. What type of social engineering attack have you just witnessed?',
        answers: ['Impersonation', 'Phishing', 'Boxing', 'Tailgating'],
        correctAnswer: 3
      },
      {
        questionText: "A colleague asks you for advice on why he can't log in to his Gmail account. Looking at his browser, you see he has typed '<a class='text-primary'>www.gmal.com</a>' in the address bar. The screen looks very similar to the Gmail login screen. Your colleague has just fallen victim to what type of attack?",
        answers: ['Jamming', 'Rainbow table', 'Whale phishing', 'Typosquatting'],
        correctAnswer: 3
      },
      {
        questionText: "A user in your organization contacts you to see if there's any update to the 'account compromise' that happened last week. When you ask him to explain what he means, the user tells you he received a phone call earlier in the week from your department and was asked to verify his user ID and password. The user has fallen victim to what specific type of attack?",
        answers: ['Spear phishing', 'Vishing', 'Phishing', 'Replication'],
        correctAnswer: 1
      },
      {
        questionText: "Coming into your office, you overhear a conversation between two security guards. One guard is telling the other how she caught several people digging through the trash behind the building early this morning. The security guard says the people claimed to be looking for aluminum cans, but only had a bag of papers - no cans. What type of attack has this security guard witnessed?",
        answers: ['Spear phishing', 'Pharming', 'Dumpster diving', 'Rolling refuse'],
        correctAnswer: 2
      },
      {
        questionText: "Which of the following are specifically used to spread influence, alter perceptions, and sway people toward a position favored by those spreading it?",
        answers: ['Identity fraud, invoice scams, credential harvesting', 'Hoaxes, eliciting information, urgency', 'Influence campaigns, social media, hybrid warfare', 'Authority, intimidation, consensus'],
        correctAnswer: 2
      },
      {
        questionText: "Which of the following is a type of social engineering attack in which an attacker attempts to obtain sensitive information from a user by masquerading as a trusted entity in an e-mail?",
        answers: ['Phishing', 'Pharming', 'Spam', 'Vishing'],
        correctAnswer: 0
      },
      {
        questionText: "Which of the following is/are psychological tools used by social engineers to create false trust with a target?",
        answers: ['Impersonation', 'Urgency or scarcity', 'Authority', 'All of the above'],
        correctAnswer: 3
      },
      {
        questionText: "Once an organization's security policies have been established, what is the single most effective method of countering potential social engineering attacks?",
        answers: ['An active security awareness program', 'A separate physical access control mechanism for each department in the organization', "Frequent testing of both the organization's physical security procedures and employee telephone practices", 'Implementing access control cards and the wearing of security identification badges'],
        correctAnswer: 0
      },
      {
        questionText: "You notice a new custodian in the office, working much earlier than normal, emptying trash cans, and moving very slowly past people working. You ask him where the normal guy is, and in very broken English he says, 'out sick,' indicating a cough. What is happening?",
        answers: ['Watering hole attack', 'Impersonation', 'Prepending', 'Identity fraud'],
        correctAnswer: 1
      },
      {
        questionText: "A disgruntled administrator is fired for negligence at your organization. Thirty days later, your organization's internal file server and backup server crash at exactly the same time. Examining the servers, you determine the critical operating system files were deleted from both systems. If the disgruntled administrator was responsible for administering those servers during her employment, this is most likely an example of what kind of malware?",
        answers: ['Crypto-malware', 'Trojan', 'Worm', 'Logic bomb'],
        correctAnswer: 3
      },
      {
        questionText: "A colleague has been urging you to download a new animated screensaver he has been using for several weeks. While he is showing you the program, the cursor on his screen moves on its own and a command prompt window opens and quickly closes. You can't tell what if anything was displayed in that command prompt window. Your colleague says, 'It's been doing that for a while, but its no big deal.' Based on what you've seen, you suspect the animated screensaver is really what type of malware?",
        answers: ['A worm', 'A trojan', 'Ransomware', 'Spyware'],
        correctAnswer: 1
      },
      {
        questionText: "Several desktops in your organization are displaying a red screen with the message <span class=\"font-monospace\">Your files have been encrypted. Pay 100 <i class=\"fab fa-bitcoin\"></i> to recover them.</span> These desktops have likely been affected by what type of malware?",
        answers: ['Spyware', 'Spraying', 'Ransomware', 'Crypto-malware'],
        correctAnswer: 2
      },
      {
        questionText: "While port-scanning your network for unauthorized systems, you notice one of your file servers has TCP port 31337 open. When you connect to the port with the security tool netcat, you see a prompt that reads, <span class=\"font-monospace\">Enter password for access:_</span>. Your server may be infected with what type of malware?",
        answers: ['Potentially unwanted program (PUP)', 'Fileless virus', 'Backdoor', 'Man in the middle attack'],
        correctAnswer: 2
      },
      {
        questionText: "While port-scanning your network for unauthorized systems, you notice one of your file servers has TCP port 61337 open. When you use Wireshark and examine the packets, you see encypted traffic, in single packets, going back and forth every five minutes. What is this connection?",
        answers: ['Command and control', 'Backdoor', 'External backup location', 'Remote login'],
        correctAnswer: 0
      },
      {
        questionText: "A user in your organization is having issues with her laptop. Every time she opens a web browser, she sees different pop-up ads every few minutes. It doesn't seem to matter which websites are being visited- the pop-ups still appear. What type of attack does this sound like?",
        answers: ['Potentially unwanted program (PUP)', 'Ransomware', 'Worm', 'Virus'],
        correctAnswer: 0
      },
      {
        questionText: "Users at your organization are complaining about slow systems. Examining several of them, you see that CPU utilization is extremely high and a process called <span class=\"font-monospace\">btmine</span> is running on each of the affected systems. You also notice each of the affected systems is communicating with an IP address outside your country on UDP port 43232. If you disconnect the network connections on the affected systems, the CPU utilization drops significantly. Based on what you've observed, you suspect these systems are infected with what type of malware?",
        answers: ['Rainbow table', 'Crypto-malware', 'Dictionary', 'Hybrid attack'],
        correctAnswer: 1
      },
      {
        questionText: "A piece of malware is infecting the desktops in your organization. Every hour, more systems are infected. The infections are happening in different departments and in cases where the users don't share any files, programs, or even e-mails. What type of malware can cause this type of infection?",
        answers: ['Virus', 'Trojan', 'Remote-access trojan (RAT)', 'Worm'],
        correctAnswer: 3
      },
      {
        questionText: "Which are the characteristics of remote-access trojans?",
        answers: ['They can be deployed through malware such as worms.', 'They allow attacks to connect to the system remotely.', 'They give attackers the ability to modify files and change settings.', 'All of the above.'],
        correctAnswer: 3
      },
      {
        questionText: "To test your systems against weak passwords, you as an admin (with proper permissions) test all accounts using the top 100 commonly used passwords. What is this an example of?",
        answers: ['Dictionary', 'Password spraying', 'Rainbow tables', 'Online'],
        correctAnswer: 1
      }
    ];
  // sets the total for end of quiz scoreboard //
  let length = questionBank.length;

  ///////////////////////////
  //* Main Quiz Functions *//
  ///////////////////////////

  function quiz(questionBank) {
    $('#start').hide(), $('#submit').hide(), $('#answers').show(),
      $('#credits').hide(), $('#reset').hide();
    score = 0;
    update($score, score);
    let time = 240;
    update($timer, time);
    interval = window.setInterval(countDown, 1000);
    chooseQuestion(questionBank);

    function countDown() {
      // decrease time by 1
      time--;
      update($timer, time);
      // update the time displayed
      if (time <= 0) {
        quizOver();
      }
      /// end of countDown ///
    }
  }

  function chooseQuestion(questions) {
    let quiz = questions[Math.floor(Math.random() * length)];
    round++;
    if (round >= length) {
      quizOver();
    } else {
      askQuestion(quiz);
    }
    function askQuestion(question) {
      // sets correct value for comparison //
      correct = question.correctAnswer;
      // updates HTML with question //
      update($question, question.questionText);
      update($answer1, question.answers[0]);
      update($answer2, question.answers[1]);
      update($answer3, question.answers[2]);
      update($answer4, question.answers[3]);
    }
    // questions.splice(index, 1);
    return correct;
  }

  function compareAnswers() {
    $('#correct').hide(), $('#wrong').hide();
    // takes correct from callback function //
    correct;
    let choice = Number($("input:radio[name='answers-group']:checked").val());
    if (correct === choice) {
      score++;
      update($score, score);
      $('#correct').show();
    } else {
      $('#wrong').show();
    }
    // clears the radio buttons for next question //
    $('#next').click();
    chooseQuestion(questionBank);
  }

  function quizOver() {
    $('#reset').show(), $('#correct').hide(),
    $('#response').hide(), $('#question').hide(), $('#wrong').hide();
    update($feedback, `Quiz over, you scored ${score} out of ${length} total points!`);
    window.clearInterval(interval);
  }

  function resetQuiz() {
    // resets the browser for a new quiz to run //
    window.location.reload();
  }

  function userQuestion() {
    let userQuest = $('#question-text').val();
    let responseOne = $('#first-response').val();
    let responseTwo = $('#second-response').val();
    let responseThree = $('#third-response').val();
    let responseFour = $('#fourth-response').val();
    let correctResponse = $('#select-answer').val();
    // push user question into array upon submission //
    let question = new Question(userQuest, [responseOne, responseTwo, responseThree, responseFour], correctResponse);
    questionBank.push(question);
    // clear the form for next question submission //
    $('#question-text').val('');
    $('#first-response').val('');
    $('#second-response').val('');
    $('#third-response').val('');
    $('#fourth-response').val('');

  }

});

    ///////////////////////////////
    // => end ready / use strict //
    // => see readme.md          //
    // => works cited page       //
    ///////////////////////////////