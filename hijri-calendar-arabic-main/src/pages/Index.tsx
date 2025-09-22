import TodayDate from "@/components/TodayDate";
import DateConverter from "@/components/DateConverter";
import MonthlyCalendar from "@/components/MonthlyCalendar";
import HolidayCountdown from "@/components/HolidayCountdown";
import IslamicGame from "@/components/IslamicGame";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a4c3b2' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h-1v-9h-9v9h-1v-9h-9v9h-1v-9h-9v9h-1v-9h-9v9h-1v-9h-9v9h-1v-9h-9v9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6v-1h9v-9H6V5zm10 1h-9v9h9V6zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9zm-1 9h-9v9h9v-9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        >
          <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
                Taqweem Hijri
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Hijri Calendar & Date Converter
              </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Your comprehensive tool for Hijri dates, Gregorian-Hijri conversion, and Islamic events. Accurate, fast, and easy to use.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#converter"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                title="Convert dates"
                aria-label="Date Converter"
              >
                Convert Date
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-md hover:bg-secondary/80 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                title="View the Hijri Calendar"
                aria-label="Monthly Hijri Calendar"
              >
                View Calendar
              </a>
            </div>
          </div>
        </section>

        {/* Today's Date Section */}
        <section id="today-date" aria-labelledby="today-date-heading" className="py-12">
          <TodayDate />
        </section>

        {/* Holiday Countdown Section */}
        <section id="holiday-countdown" aria-labelledby="holiday-countdown-heading" className="py-16 bg-secondary">
          <HolidayCountdown />
        </section>

        {/* Monthly Calendar Section */}
        <section id="calendar" aria-labelledby="calendar-heading" className="py-12">
          <div className="container mx-auto px-4 pt-8">
            <h2 id="calendar-heading" className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-islamic-blue bg-clip-text text-transparent">
              Monthly Hijri Calendar
            </h2>
          </div>
          <MonthlyCalendar />
        </section>

        {/* Date Converter Section */}
        <section id="converter" aria-labelledby="converter-heading" className="py-12 bg-secondary">
          <div className="container mx-auto px-4 pt-8">
            <h2 id="converter-heading" className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-islamic-blue to-accent bg-clip-text text-transparent">
              Hijri to Gregorian Date Converter
            </h2>
          </div>
          <DateConverter />
        </section>

        {/* Islamic Game */}
        <section id="game" aria-labelledby="game-heading" className="py-16">
          <IslamicGame />
        </section>

        {/* FAQ Section */}
        <section id="faq" aria-labelledby="faq-heading" className="py-12 bg-secondary">
          <FAQ />
        </section>
      </main>
    </div>
  );
};

export default Index;
