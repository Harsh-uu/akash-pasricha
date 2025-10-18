// src/components/BookQuiz.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, RotateCcw, Trophy, BookOpen, Zap } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Nalanda University was one of the world's first residential universities. In which modern-day state of India are its ruins located?",
    options: ["West Bengal", "Bihar", "Odisha", "Jharkhand"],
    correctAnswer: 1,
    explanation: "Nalanda University ruins are located in Bihar, India. It was a major center of learning from the 5th to 12th centuries CE."
  },
  {
    id: 2,
    question: "Wootz steel, mentioned in the book, was famous for creating which legendary type of blade?",
    options: ["Katana", "Damascus Steel", "Gladius", "Scimitar"],
    correctAnswer: 1,
    explanation: "Wootz steel from India was used to create the legendary Damascus steel blades, renowned for their sharpness and distinctive patterns."
  },
  {
    id: 3,
    question: "Thorium, a key element in the story, is primarily used for what purpose in modern times?",
    options: ["Making jewelry", "Nuclear energy", "Computer chips", "Medical equipment"],
    correctAnswer: 1,
    explanation: "Thorium is considered a potential fuel for nuclear reactors and could be a cleaner alternative to uranium-based nuclear energy."
  },
  {
    id: 4,
    question: "Which ancient Indian text is considered one of the earliest works on espionage and intelligence gathering?",
    options: ["Ramayana", "Mahabharata", "Arthashastra", "Manusmriti"],
    correctAnswer: 2,
    explanation: "The Arthashastra by Chanakya contains detailed information about espionage, intelligence networks, and statecraft in ancient India."
  },
  {
    id: 5,
    question: "India has the world's largest reserves of which nuclear material mentioned in the book?",
    options: ["Uranium", "Plutonium", "Thorium", "Radium"],
    correctAnswer: 2,
    explanation: "India has the world's largest thorium reserves, making it strategically important for future nuclear energy programs."
  },
  {
    id: 6,
    question: "What was the approximate peak enrollment of students at Nalanda University during its golden age?",
    options: ["5,000", "10,000", "15,000", "20,000"],
    correctAnswer: 1,
    explanation: "At its peak, Nalanda University had approximately 10,000 students from across Asia, making it one of the largest ancient universities."
  },
  {
    id: 7,
    question: "Which Chinese traveler's accounts provide valuable information about Nalanda University?",
    options: ["Fa-Hien", "Xuanzang", "Zheng He", "Marco Polo"],
    correctAnswer: 1,
    explanation: "Xuanzang, a Chinese Buddhist monk and scholar, visited Nalanda in the 7th century and left detailed accounts of the university."
  },
  {
    id: 8,
    question: "In which century was Nalanda University destroyed?",
    options: ["10th century", "11th century", "12th century", "13th century"],
    correctAnswer: 2,
    explanation: "Nalanda University was destroyed in the 12th century, around 1193 CE, during Bakhtiyar Khilji's invasion."
  },
  {
    id: 9,
    question: "What was the minimum age requirement for admission to Nalanda University?",
    options: ["12 years", "16 years", "20 years", "25 years"],
    correctAnswer: 2,
    explanation: "Students typically had to be at least 20 years old and pass rigorous entrance examinations to gain admission to Nalanda."
  },
  {
    id: 10,
    question: "How many libraries did Nalanda University have at its peak?",
    options: ["One", "Two", "Three", "Five"],
    correctAnswer: 2,
    explanation: "Nalanda had three great libraries: Ratnasagara (Ocean of Jewels), Ratnodadhi (Sea of Jewels), and Ratnaranjaka (Delighter of Jewels)."
  },
  {
    id: 11,
    question: "Which dynasty was most instrumental in the founding and early patronage of Nalanda University?",
    options: ["Maurya Dynasty", "Gupta Dynasty", "Chola Dynasty", "Mughal Dynasty"],
    correctAnswer: 1,
    explanation: "The Gupta Dynasty, particularly Emperor Kumaragupta I, was instrumental in founding Nalanda University in the 5th century CE."
  },
  {
    id: 12,
    question: "What was the primary language of instruction at ancient Nalanda University?",
    options: ["Hindi", "Sanskrit", "Pali", "Persian"],
    correctAnswer: 1,
    explanation: "Sanskrit was the primary language of instruction at Nalanda, though Pali was also used for Buddhist texts."
  },
  {
    id: 13,
    question: "Which of these subjects was NOT taught at Nalanda University?",
    options: ["Astronomy", "Medicine", "Engineering", "Grammar"],
    correctAnswer: 2,
    explanation: "While Nalanda taught many subjects including astronomy, medicine, and grammar, formal engineering as we know it wasn't a separate discipline."
  },
  {
    id: 14,
    question: "What percentage of applicants were typically accepted into Nalanda University?",
    options: ["10%", "20%", "30%", "50%"],
    correctAnswer: 1,
    explanation: "Only about 20% of applicants were accepted into Nalanda University, making it highly selective and prestigious."
  },
  {
    id: 15,
    question: "Which modern element's discovery is linked to ancient Indian manuscripts studied at institutions like Nalanda?",
    options: ["Gold", "Silver", "Zinc", "Copper"],
    correctAnswer: 2,
    explanation: "Ancient Indian texts studied at Nalanda contained sophisticated knowledge of zinc extraction and metallurgy."
  },
  {
    id: 16,
    question: "What was the approximate number of teachers at Nalanda during its peak?",
    options: ["500", "1,000", "1,500", "2,000"],
    correctAnswer: 2,
    explanation: "Nalanda University had approximately 1,500 teachers during its golden age, maintaining a favorable student-teacher ratio."
  },
  {
    id: 17,
    question: "Which astronomical concept was studied at Nalanda that predates Western discovery?",
    options: ["Gravity", "Heliocentric model", "Black holes", "Big Bang theory"],
    correctAnswer: 1,
    explanation: "Ancient Indian astronomers at Nalanda studied the heliocentric model of the solar system centuries before Copernicus."
  },
  {
    id: 18,
    question: "What was the name of the debate hall at Nalanda University?",
    options: ["Sabha", "Dharma Hall", "Debate Palace", "Kutuhala"],
    correctAnswer: 0,
    explanation: "The Sabha was the famous debate hall at Nalanda where scholars engaged in intellectual discussions and debates."
  },
  {
    id: 19,
    question: "Which ancient Indian mathematician associated with Nalanda worked on the concept of zero?",
    options: ["Aryabhata", "Brahmagupta", "Bhaskara", "Varahamihira"],
    correctAnswer: 1,
    explanation: "Brahmagupta, who studied at Nalanda, made significant contributions to mathematics including rules for working with zero."
  },
  {
    id: 20,
    question: "What was the approximate area covered by Nalanda University at its peak?",
    options: ["5 acres", "14 acres", "25 acres", "50 acres"],
    correctAnswer: 1,
    explanation: "Nalanda University covered approximately 14 acres (about 6 hectares) at its peak, making it a vast educational complex."
  },
  {
    id: 21,
    question: "Which precious metal was extensively used in ancient Indian alchemy studied at Nalanda?",
    options: ["Gold", "Silver", "Platinum", "Mercury"],
    correctAnswer: 3,
    explanation: "Mercury (Parada) was central to ancient Indian alchemy and metallurgical practices studied at Nalanda."
  },
  {
    id: 22,
    question: "What was the typical duration of study at Nalanda University?",
    options: ["2-3 years", "5-7 years", "8-10 years", "15-20 years"],
    correctAnswer: 2,
    explanation: "Students typically studied at Nalanda for 8-10 years, though some scholars remained for much longer periods."
  },
  {
    id: 23,
    question: "Which ancient text on medicine was studied at Nalanda?",
    options: ["Charaka Samhita", "Hippocratic Corpus", "Yellow Emperor's Classic", "Papyrus Ebers"],
    correctAnswer: 0,
    explanation: "The Charaka Samhita, an ancient Indian text on Ayurvedic medicine, was extensively studied at Nalanda University."
  },
  {
    id: 24,
    question: "What architectural style dominated the construction of Nalanda University?",
    options: ["Dravidian", "Indo-Islamic", "Buddhist monastic", "Rajput"],
    correctAnswer: 2,
    explanation: "Nalanda was built in the Buddhist monastic architectural style, with viharas (monasteries) and stupas."
  },
  {
    id: 25,
    question: "Which ancient Indian text on linguistics and grammar was taught at Nalanda?",
    options: ["Ashtadhyayi", "Nirukta", "Mahabhasya", "All of these"],
    correctAnswer: 3,
    explanation: "All these classical texts on Sanskrit grammar and linguistics, including Panini's Ashtadhyayi, were taught at Nalanda."
  },
  {
    id: 26,
    question: "What method of preserving manuscripts was used at Nalanda's libraries?",
    options: ["Stone carving", "Palm leaf manuscripts", "Clay tablets", "Papyrus scrolls"],
    correctAnswer: 1,
    explanation: "Palm leaf manuscripts were the primary method of preserving texts at Nalanda, carefully maintained in climate-controlled conditions."
  },
  {
    id: 27,
    question: "Which neighboring country sent the most students to Nalanda University?",
    options: ["China", "Tibet", "Korea", "Indonesia"],
    correctAnswer: 0,
    explanation: "China sent numerous students and monks to Nalanda, making Chinese scholars one of the largest international groups."
  },
  {
    id: 28,
    question: "What was the name of the largest library building at Nalanda?",
    options: ["Ratnasagara", "Ratnodadhi", "Ratnaranjaka", "Dharmaganja"],
    correctAnswer: 0,
    explanation: "Ratnasagara (Ocean of Jewels) was the largest and most famous library building at Nalanda University."
  },
  {
    id: 29,
    question: "Which Buddhist concept was a major area of philosophical study at Nalanda?",
    options: ["Theravada", "Mahayana", "Vajrayana", "Zen"],
    correctAnswer: 1,
    explanation: "Mahayana Buddhism was the primary school of Buddhist philosophy studied and developed at Nalanda University."
  },
  {
    id: 30,
    question: "In which year was the new Nalanda University re-established as an international institution?",
    options: ["2010", "2014", "2016", "2020"],
    correctAnswer: 1,
    explanation: "The new Nalanda University was re-established in 2014 as an international institution, reviving the ancient university's legacy."
  }
];

// Function to get 5 random questions
const getRandomQuestions = (questions: QuizQuestion[], count: number = 5): QuizQuestion[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const BookQuiz = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  // Initialize with random questions on component mount
  useEffect(() => {
    setSelectedQuestions(getRandomQuestions(quizData));
  }, []);

  // If no questions selected yet, don't render
  if (selectedQuestions.length === 0) {
    return null;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === selectedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < selectedQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
    setSelectedQuestions(getRandomQuestions(quizData)); // Get new random questions
  };

  const getScoreMessage = () => {
    const percentage = (score / selectedQuestions.length) * 100;
    if (percentage >= 80) return "🎉 Excellent! You're ready for the mysteries in Lost Secret!";
    if (percentage >= 60) return "🤓 Good job! You have a solid foundation in ancient mysteries.";
    if (percentage >= 40) return "📚 Not bad! Reading Lost Secret will teach you even more.";
    return "🔍 Time to dive into some historical mysteries! Lost Secret awaits you.";
  };

  const getScoreColor = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Always show heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
              Test Your <span className="text-[#e9343b]">Knowledge</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              How much do you know about ancient mysteries and historical secrets?
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-8 shadow-2xl p-8 border">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Quiz Complete!</h2>
              <div className="p-8 mb-6">
                <div className="text-6xl font-semibold mb-4 text-gray-800">
                  {score}/{selectedQuestions.length}
                </div>
                <p className="text-xl text-gray-600">
                  {getScoreMessage()}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 text-gray-800 border border-black hover:bg-gray-100 font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
                <button
                  onClick={() => {
                    const aboutSection = document.querySelector("#about-the-book");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="px-8 py-3 bg-[#e9343b] hover:bg-red-700 text-white font-semibold shadow-lg transition-colors flex items-center justify-center gap-2 border"
                >
                  <BookOpen className="w-5 h-5" />
                  Get the Book
                </button>
              </div>
              
              <p className="text-gray-600 text-lg">
                Ready to uncover more mysteries? Dive into "Lost Secret: The Hidden Truth of Nalanda"
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-800">
            Test Your <span className="text-[#e9343b]">Knowledge</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 mt-4">
            How much do you know about ancient mysteries and historical secrets?
          </p>
          
          {/* Progress Bar */}
          <div className="">
            <div className="text-center text-md text-gray-600">
              <span>Question {currentQuestion + 1} of {selectedQuestions.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 shadow-2xl p-5 md:p-8 border">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-900">
              {selectedQuestions[currentQuestion].question}
            </h3>
            
            <div className="grid gap-4">
              {selectedQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-4 text-left border transition-all duration-300 ${
                    showResult
                      ? index === selectedQuestions[currentQuestion].correctAnswer
                        ? "bg-green-100 text-green-800"
                        : index === selectedAnswer && index !== selectedQuestions[currentQuestion].correctAnswer
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-600"
                      : selectedAnswer === index
                      ? "bg-gray-200 border-black text-gray-900"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 border border-black flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div className="mb-6 p-6 bg-gray-100 border shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#e9343b] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    {selectedAnswer === selectedQuestions[currentQuestion].correctAnswer ? "Correct!" : "Not quite right"}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedQuestions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Score: <span className="text-black font-semibold">{score}/{currentQuestion + (showResult ? 1 : 0)}</span>
            </div>
            
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`px-8 py-3 font-semibold shadow-lg transition-all flex items-center gap-2 border ${
                selectedAnswer === null || showResult
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#e9343b] hover:bg-red-700 text-white"
              }`}
            >
              {currentQuestion === selectedQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};