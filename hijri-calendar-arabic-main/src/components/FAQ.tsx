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
      question: "What is the Hijri Calendar?",
      answer: "The Hijri or Islamic calendar is a lunar calendar based on the cycles of the moon. It begins from the migration (Hijra) of the Prophet Muhammad (peace be upon him) from Mecca to Medina in 622 CE. The Islamic year consists of 12 lunar months and is approximately 354 or 355 days long."
    },
    {
      question: "Why is it called the Hijri Calendar?",
      answer: "It's called the Hijri Calendar to commemorate the migration of the Prophet Muhammad (peace be upon him) from Mecca to Medina, a pivotal event in Islamic history. Caliph Umar ibn al-Khattab established this event as the starting point of the Islamic calendar."
    },
    {
      question: "What are the names of the Islamic months?",
      answer: "The Islamic months are: Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Awwal, Jumada al-Thani, Rajab, Sha'ban, Ramadan, Shawwal, Dhu al-Qi'dah, and Dhu al-Hijjah. Each month has special historical and religious significance in Islamic culture."
    },
    {
      question: "What are the sacred months in Islam?",
      answer: "There are four sacred months in Islam: Dhu al-Qi'dah, Dhu al-Hijjah, Muharram, and Rajab. These months are considered sacred, during which warfare is prohibited, and good deeds are more highly rewarded. These months were respected even in pre-Islamic times."
    },
    {
      question: "How do I convert from Hijri to Gregorian date?",
      answer: "You can roughly convert a Hijri year to Gregorian by adding 621.5 to the Hijri year (Gregorian Year = Hijri Year + 621.5). For precise conversion that accounts for days and months, you can use the conversion tool on our website."
    },
    {
      question: "Is this website free to use?",
      answer: "Yes, our website is completely free and available to everyone. We aim to spread knowledge about the Hijri calendar and make this important information accessible to all Muslims and non-Muslims interested in Islamic culture."
    },
    {
      question: "What is the significance of Ramadan in the Islamic calendar?",
      answer: "Ramadan is the ninth month of the Islamic calendar and is considered the holy month of fasting for Muslims. It was during this month that the Quran was first revealed. Muslims fast from dawn until sunset, and it's a time of increased worship, prayer, and charity."
    },
    {
      question: "What's the difference between Lunar and Solar calendars?",
      answer: "A lunar calendar is based on the moon's orbit around Earth (about 29.5 days per month), while a solar calendar is based on Earth's orbit around the sun (365.25 days per year). This makes the lunar year about 11 days shorter than the solar year, causing Islamic dates to shift earlier each year relative to the seasons."
    },
    {
      question: "Why might the Hijri date differ between countries?",
      answer: "The Hijri date can differ between countries due to different methods of moon sighting. Some countries rely on local moon sightings, while others follow astronomical calculations. Saudi Arabia uses astronomical calculations for the Umm al-Qura calendar, but the official start of months like Ramadan and Shawwal are still confirmed by moon sighting. This can lead to variations of one day between different regions of the world."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Answers to common questions about the Hijri Calendar and date conversion
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-4">
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