import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: number;
  image: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    image: "/images/kaaba.jpg",
    question: "What is the name of this holy site?",
    options: ["The Kaaba", "Al-Masjid an-Nabawi", "Al-Aqsa Mosque"],
    correctAnswer: 0
  },
  {
    id: 2,
    image: "/images/crescent.jpg",
    question: "What is the common symbol of Islam?",
    options: ["Star", "Crescent and Star", "Cross"],
    correctAnswer: 1
  },
  {
    id: 3,
    image: "/images/quran.jpg",
    question: "What is the holy book of Islam?",
    options: ["Torah", "Bible", "The Holy Quran"],
    correctAnswer: 2
  },
  {
    id: 4,
    image: "/images/mosque.jpg",
    question: "What is the Muslim place of worship called?",
    options: ["Mosque", "Church", "Temple"],
    correctAnswer: 0
  },
  {
    id: 5,
    image: "/images/kaaba.jpg",
    question: "How many pillars of Islam are there?",
    options: ["Four", "Five", "Six"],
    correctAnswer: 1
  },
  {
    id: 6,
    image: "/images/crescent.jpg",
    question: "In which Islamic month do Muslims fast?",
    options: ["Sha'ban", "Ramadan", "Shawwal"],
    correctAnswer: 1
  },
  {
    id: 7,
    image: "/images/quran.jpg",
    question: "How many chapters (Surahs) are in the Quran?",
    options: ["114", "124", "104"],
    correctAnswer: 0
  },
  {
    id: 8,
    image: "/images/mosque.jpg",
    question: "What is the Qibla (prayer direction) for Muslims?",
    options: ["Al-Masjid an-Nabawi", "The Kaaba", "Al-Aqsa Mosque"],
    correctAnswer: 1
  },
  {
    id: 9,
    image: "/images/kaaba.jpg",
    question: "In which city is the Kaaba located?",
    options: ["Makkah", "Madinah", "Jerusalem"],
    correctAnswer: 0
  },
  {
    id: 10,
    image: "/images/crescent.jpg",
    question: "What is the first prayer of the day?",
    options: ["Dhuhr", "Fajr", "Asr"],
    correctAnswer: 1
  }
];

const IslamicGame = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: `Correct Answer! 🎉 Level ${currentLevel}`,
        description: "Well done! Excellent answer - moving to the next level",
        className: "bg-green-600 text-white border-green-600",
      });
      
      setTimeout(() => {
        if (currentLevel < 10) {
          setCurrentLevel(currentLevel + 1);
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          setGameCompleted(true);
        }
      }, 2000);
    } else {
      setShowError(true);
      toast({
        title: "Wrong Answer ❌",
        description: `The correct answer is: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`,
        variant: "destructive",
      });
    }
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
    setShowError(false);
  };

  const tryAgain = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setShowError(false);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === questions[currentQuestion].correctAnswer) return "default";
    if (index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correctAnswer) {
      return "destructive";
    }
    return "outline";
  };

  if (gameCompleted) {
    return (
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-background to-green-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-yellow-200">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-yellow-600">
                Game Over! 🎊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-green-600">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                {score === questions.length 
                  ? "Excellent! You answered all questions correctly!" 
                  : score >= questions.length / 2 
                  ? "Very good! You might want to review some information"
                  : "You can try again to improve your score"}
              </p>
              <Button 
                onClick={resetGame}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
              >
                Play Again 🔄
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-background to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Islamic Knowledge Quiz 🕌
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Test your Islamic knowledge with this fun educational game
          </p>
          <div className="flex justify-center items-center gap-6 text-lg mb-4">
            <span className="text-blue-600 font-medium">
              Level {currentLevel} of 10
            </span>
            <span className="text-yellow-600 font-bold">
              Score: {score}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-green-600 font-medium">{currentLevel}/10</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentLevel / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto border-islamic-blue/20">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <img 
                src={questions[currentQuestion].image} 
                alt="Question image"
                className="w-64 h-48 object-cover rounded-lg border-2 border-yellow-300/30 shadow-lg"
              />
            </div>
            <CardTitle className="text-xl text-center text-foreground">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={getButtonVariant(index)}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className="w-full text-left text-lg p-4 h-auto transition-all duration-200 hover:scale-105"
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {showError && (
              <div className="mt-6 text-center">
                <Button 
                  onClick={tryAgain}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2"
                >
                  Try Again 🔄
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IslamicGame;