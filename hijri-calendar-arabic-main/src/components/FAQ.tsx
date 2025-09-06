import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "ما هو التقويم الهجري؟",
      answer: "التقويم الهجري أو التقويم الإسلامي هو تقويم قمري يعتمد على دورة القمر. يبدأ من هجرة النبي محمد صلى الله عليه وسلم من مكة إلى المدينة المنورة في عام 622 ميلادي. يتكون العام الهجري من 12 شهراً قمرياً، ويبلغ طوله حوالي 354 أو 355 يوماً."
    },
    {
      question: "لماذا سُمي بالتقويم الهجري؟",
      answer: "سُمي بالتقويم الهجري نسبة إلى هجرة الرسول محمد صلى الله عليه وسلم من مكة إلى المدينة المنورة، والتي تُعتبر نقطة تحول مهمة في تاريخ الإسلام. اتخذ الخليفة عمر بن الخطاب رضي الله عنه هذا التاريخ كبداية للتقويم الإسلامي."
    },
    {
      question: "ما هي أسماء الشهور الهجرية؟",
      answer: "الشهور الهجرية هي: محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، رجب، شعبان، رمضان، شوال، ذو القعدة، وذو الحجة. كل شهر له معنى وأهمية تاريخية خاصة في الثقافة الإسلامية."
    },
    {
      question: "ما هي الأشهر الحرم في الإسلام؟",
      answer: "الأشهر الحرم أربعة: ذو القعدة، وذو الحجة، ومحرم، ورجب. هذه الأشهر مقدسة في الإسلام حيث يُحرم فيها القتال، وتُضاعف فيها الحسنات والسيئات. كانت معظمة حتى في الجاهلية قبل الإسلام."
    },
    {
      question: "كيف أحول التاريخ من الهجري إلى الميلادي؟",
      answer: "يمكن تحويل التاريخ الهجري إلى الميلادي باستخدام القاعدة التالية تقريباً: السنة الميلادية = السنة الهجرية + 621.5. أو يمكنك استخدام أداة التحويل في موقعنا للحصول على تحويل دقيق يراعي الأيام والشهور."
    },
    {
      question: "هل الموقع مجاني الاستخدام؟",
      answer: "نعم، موقعنا مجاني تماماً ومتاح للجميع. نهدف إلى نشر المعرفة حول التقويم الهجري وتسهيل الوصول إلى هذه المعلومات المهمة لجميع المسلمين وغير المسلمين المهتمين بالثقافة الإسلامية."
    },
    {
      question: "ما أهمية شهر رمضان في التقويم الهجري؟",
      answer: "شهر رمضان هو الشهر التاسع في التقويم الهجري، وهو شهر الصيام المقدس للمسلمين. أُنزل فيه القرآن الكريم، ويُعتبر من أعظم الشهور في الإسلام. يصوم المسلمون من الفجر حتى المغرب، ويُضاعف الأجر والثواب في هذا الشهر الكريم."
    },
    {
      question: "ما هو الفرق بين التقويم القمري والشمسي؟",
      answer: "التقويم القمري يعتمد على دورة القمر حول الأرض (حوالي 29.5 يوم للشهر الواحد)، بينما التقويم الشمسي يعتمد على دورة الأرض حول الشمس (365.25 يوم للسنة). لذلك السنة القمرية أقصر بحوالي 11 يوماً من السنة الشمسية، مما يجعل المناسبات الهجرية تتقدم كل عام بالنسبة للفصول."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-islamic-blue/5 to-islamic-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-arabic bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
            الأسئلة الشائعة حول التقويم الهجري
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إجابات على أهم الأسئلة حول تحويل التاريخ والتقويم الهجري
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right text-lg font-medium font-arabic hover:text-islamic-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground leading-relaxed text-base pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;