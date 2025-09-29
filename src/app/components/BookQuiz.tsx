// src/components/BookQuiz.tsx
"use client";

import React, { useState } from "react";
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
  }
];

export const BookQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
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
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
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
                  {score}/{quizData.length}
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
              <span>Question {currentQuestion + 1} of {quizData.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 shadow-2xl p-5 md:p-8 border">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-900">
              {quizData[currentQuestion].question}
            </h3>
            
            <div className="grid gap-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-4 text-left border transition-all duration-300 ${
                    showResult
                      ? index === quizData[currentQuestion].correctAnswer
                        ? "bg-green-100 text-green-800"
                        : index === selectedAnswer && index !== quizData[currentQuestion].correctAnswer
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
                    {selectedAnswer === quizData[currentQuestion].correctAnswer ? "Correct!" : "Not quite right"}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {quizData[currentQuestion].explanation}
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
              {currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};