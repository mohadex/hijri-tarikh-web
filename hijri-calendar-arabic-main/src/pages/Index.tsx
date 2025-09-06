import Header from "@/components/Header";
import TodayDate from "@/components/TodayDate";
import DateConverter from "@/components/DateConverter";
import MonthlyCalendar from "@/components/MonthlyCalendar";
import YearlyHolidaysCalendar from "@/components/YearlyHolidaysCalendar";
import HolidayCountdown from "@/components/HolidayCountdown";
import IslamicGame from "@/components/IslamicGame";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-islamic-green/5 via-background to-islamic-blue/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              التقويم الهجري 2025 وتاريخ اليوم هجري
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              اعرف تاريخ اليوم هجري بدقة، وحوّل أي تاريخ من الميلادي إلى الهجري والعكس. شاهد التقويم الهجري الكامل مع أهم الأعياد والمناسبات الإسلامية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#converter"
                className="inline-flex items-center justify-center px-8 py-3 bg-islamic-green text-white rounded-lg hover:bg-islamic-green/90 transition-colors font-medium"
                title="تحويل التاريخ من الميلادي إلى الهجري"
                aria-label="تحويل التاريخ - أداة مجانية لتحويل التواريخ"
              >
                تحويل التاريخ
              </a>
              <a 
                href="#calendar"
                className="inline-flex items-center justify-center px-8 py-3 border border-islamic-blue text-islamic-blue rounded-lg hover:bg-islamic-blue/10 transition-colors font-medium"
                title="التقويم الهجري الشهري مع الأعياد والمناسبات"
                aria-label="عرض التقويم الهجري الشهري"
              >
                عرض التقويم
              </a>
            </div>
          </div>
        </section>

        {/* Today's Date Section */}
        <section id="today-date" aria-labelledby="today-date-heading">
          <TodayDate />
        </section>

        {/* Holiday Countdown Section */}
        <HolidayCountdown />

        {/* Monthly Calendar Section */}
        <section id="calendar" aria-labelledby="calendar-heading">
          <div className="container mx-auto px-4 py-8">
            <h2 id="calendar-heading" className="text-4xl font-bold text-center mb-8 font-arabic bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
              التقويم الهجري الشهري
            </h2>
          </div>
          <MonthlyCalendar />
        </section>

        {/* Yearly Holidays Calendar Section */}
        <section id="holidays" aria-labelledby="holidays-heading">
          <div className="container mx-auto px-4 py-8">
            <h2 id="holidays-heading" className="text-4xl font-bold text-center mb-8 font-arabic bg-gradient-to-r from-islamic-gold to-islamic-green bg-clip-text text-transparent">
              أهم الأعياد والمناسبات في التاريخ الهجري
            </h2>
          </div>
          <YearlyHolidaysCalendar />
        </section>

        {/* Date Converter Section */}
        <section id="converter" aria-labelledby="converter-heading">
          <div className="container mx-auto px-4 py-8">
            <h2 id="converter-heading" className="text-4xl font-bold text-center mb-8 font-arabic bg-gradient-to-r from-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              تحويل التاريخ من الميلادي إلى الهجري
            </h2>
          </div>
          <DateConverter />
        </section>

        {/* Islamic Game */}
        <IslamicGame />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
      <StructuredData />
    </div>
  );
};

export default Index;
