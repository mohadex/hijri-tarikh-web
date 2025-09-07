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
    question: "ما هو اسم هذا المكان المقدس؟",
    options: ["الكعبة المشرفة", "المسجد النبوي", "المسجد الأقصى"],
    correctAnswer: 0
  },
  {
    id: 2,
    image: "/images/crescent.jpg",
    question: "ما هو رمز الإسلام الشائع؟",
    options: ["النجمة", "الهلال والنجمة", "الصليب"],
    correctAnswer: 1
  },
  {
    id: 3,
    image: "/images/quran.jpg",
    question: "ما هو الكتاب المقدس في الإسلام؟",
    options: ["التوراة", "الإنجيل", "القرآن الكريم"],
    correctAnswer: 2
  },
  {
    id: 4,
    image: "/images/mosque.jpg",
    question: "ما هو اسم مكان عبادة المسلمين؟",
    options: ["المسجد", "الكنيسة", "المعبد"],
    correctAnswer: 0
  },
  {
    id: 5,
    image: "/images/kaaba.jpg",
    question: "كم عدد أركان الإسلام؟",
    options: ["أربعة", "خمسة", "ستة"],
    correctAnswer: 1
  },
  {
    id: 6,
    image: "/images/crescent.jpg",
    question: "في أي شهر هجري يصوم المسلمون؟",
    options: ["شعبان", "رمضان", "شوال"],
    correctAnswer: 1
  },
  {
    id: 7,
    image: "/images/quran.jpg",
    question: "كم عدد سور القرآن الكريم؟",
    options: ["114", "124", "104"],
    correctAnswer: 0
  },
  {
    id: 8,
    image: "/images/mosque.jpg",
    question: "ما هي القبلة للمسلمين؟",
    options: ["المسجد النبوي", "الكعبة المشرفة", "المسجد الأقصى"],
    correctAnswer: 1
  },
  {
    id: 9,
    image: "/images/kaaba.jpg",
    question: "في أي مدينة تقع الكعبة المشرفة؟",
    options: ["مكة المكرمة", "المدينة المنورة", "القدس"],
    correctAnswer: 0
  },
  {
    id: 10,
    image: "/images/crescent.jpg",
    question: "ما هي الصلاة الأولى في اليوم؟",
    options: ["الظهر", "الفجر", "العصر"],
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
        title: `إجابة صحيحة! 🎉 المستوى ${currentLevel}`,
        description: "أحسنت! إجابة ممتازة - انتقل للمستوى التالي",
        className: "bg-islamic-green text-white border-islamic-green",
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
        title: "إجابة خاطئة ❌",
        description: `الإجابة الصحيحة هي: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`,
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
      <section className="py-16 bg-gradient-to-br from-islamic-gold/5 via-background to-islamic-green/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-islamic-gold/20">
            <CardHeader>
              <CardTitle className="text-3xl font-arabic text-islamic-gold">
                انتهت اللعبة! 🎊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-islamic-green">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                {score === questions.length 
                  ? "ممتاز! أجبت على جميع الأسئلة بشكل صحيح!" 
                  : score >= questions.length / 2 
                  ? "جيد جداً! تحتاج لمراجعة بعض المعلومات"
                  : "يمكنك المحاولة مرة أخرى لتحسين نتيجتك"}
              </p>
              <Button 
                onClick={resetGame}
                className="bg-islamic-blue hover:bg-islamic-blue/90 text-white font-arabic text-lg px-8 py-3"
              >
                العب مرة أخرى 🔄
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-islamic-green/5 via-background to-islamic-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 font-arabic text-islamic-green">
            لعبة المعرفة الإسلامية 🕌
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            اختبر معلوماتك الإسلامية مع هذه اللعبة التعليمية الممتعة
          </p>
          <div className="flex justify-center items-center gap-6 text-lg mb-4">
            <span className="text-islamic-blue font-medium">
              المستوى {currentLevel} من 10
            </span>
            <span className="text-islamic-gold font-bold">
              النتيجة: {score}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">التقدم</span>
              <span className="text-sm text-islamic-green font-medium">{currentLevel}/10</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-islamic-green h-2 rounded-full transition-all duration-500"
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
                alt="صورة السؤال"
                className="w-64 h-48 object-cover rounded-lg border-2 border-islamic-gold/30 shadow-lg"
              />
            </div>
            <CardTitle className="text-xl font-arabic text-center text-foreground">
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
                  className="w-full text-right font-arabic text-lg p-4 h-auto transition-all duration-200 hover:scale-105"
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {showError && (
              <div className="mt-6 text-center">
                <Button 
                  onClick={tryAgain}
                  className="bg-islamic-blue hover:bg-islamic-blue/90 text-white font-arabic text-lg px-6 py-2"
                >
                  حاول مرة أخرى 🔄
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