import TodayDate from "@/components/TodayDate";
import DateConverter from "@/components/DateConverter";
import MonthlyCalendar from "@/components/MonthlyCalendar";
import HolidayCountdown from "@/components/HolidayCountdown";
import IslamicGame from "@/components/IslamicGame";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { BookOpen, CalendarDays, Moon, Sun } from "lucide-react";

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
                Your Gateway to the Islamic Calendar
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-10">
                Discover accurate Hijri-Gregorian date conversion, explore the Islamic calendar, and stay updated with important Islamic events and holidays. Our comprehensive tools help you plan your religious obligations, from daily prayers to annual celebrations like Ramadan and Hajj.
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

        {/* About Hijri Calendar Section */}
        <section id="about-hijri" className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
                Understanding the Hijri Calendar
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-islamic-green to-islamic-blue mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-islamic-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Moon className="h-8 w-8 text-islamic-blue" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Lunar-Based System</h3>
                <p className="text-muted-foreground text-center">
                  The Hijri calendar is based on the lunar cycle, with each month beginning with the sighting of the new crescent moon. This makes it approximately 10-12 days shorter than the Gregorian calendar.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-islamic-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CalendarDays className="h-8 w-8 text-islamic-blue" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">12 Sacred Months</h3>
                <p className="text-muted-foreground text-center">
                  The Islamic year consists of 12 months, with four of them being sacred: Dhu al-Qi'dah, Dhu al-Hijjah, Muharram, and Rajab. These months hold special significance in Islamic tradition.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-islamic-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-8 w-8 text-islamic-blue" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Religious Significance</h3>
                <p className="text-muted-foreground text-center">
                  The Hijri calendar is essential for determining the dates of Islamic events and holidays, including Ramadan, Eid al-Fitr, and Hajj. It helps Muslims worldwide observe religious obligations at the correct times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Date Section */}
        <section id="today-date" aria-labelledby="today-date-heading" className="py-16">
          <TodayDate />
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
                How to Use Our Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Make the most of our comprehensive Hijri calendar tools with these simple guides
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-islamic-green mb-3">1</div>
                <h3 className="text-xl font-semibold mb-3">Date Conversion</h3>
                <p className="text-muted-foreground mb-4">
                  Easily convert between Hijri and Gregorian dates. Simply select a date in either calendar, and our tool will automatically display the corresponding date in the other system.
                </p>
                <a 
                  href="#converter" 
                  className="text-islamic-blue hover:underline font-medium inline-flex items-center"
                >
                  Try Date Converter
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-islamic-green mb-3">2</div>
                <h3 className="text-xl font-semibold mb-3">Monthly Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  Browse through months and years in both Hijri and Gregorian calendars. Our interactive calendar highlights important Islamic dates and events for easy reference.
                </p>
                <a 
                  href="#calendar" 
                  className="text-islamic-blue hover:underline font-medium inline-flex items-center"
                >
                  View Calendar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-islamic-green mb-3">3</div>
                <h3 className="text-xl font-semibold mb-3">Holiday Countdown</h3>
                <p className="text-muted-foreground mb-4">
                  Never miss an important Islamic event. Our countdown shows you how many days remain until the next major Islamic holiday or significant date.
                </p>
                <a 
                  href="#holiday-countdown" 
                  className="text-islamic-blue hover:underline font-medium inline-flex items-center"
                >
                  See Countdown
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Countdown Section */}
        <section id="holiday-countdown" aria-labelledby="holiday-countdown-heading" className="py-16 bg-gradient-to-r from-islamic-green/10 to-islamic-blue/10">
          <HolidayCountdown />
        </section>

        {/* Monthly Calendar Section */}
        <section id="calendar" aria-labelledby="calendar-heading" className="py-12">
          <div className="container mx-auto px-4 pt-8">
            <div className="text-center mb-12">
              <h2 id="calendar-heading" className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-islamic-blue bg-clip-text text-transparent">
                Interactive Hijri Calendar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the Islamic months, view important dates, and plan your religious activities with our comprehensive calendar
              </p>
            </div>
            <MonthlyCalendar />
          </div>
        </section>

        {/* Date Converter Section */}
        <section id="converter" aria-labelledby="converter-heading" className="py-12 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 pt-8">
            <div className="text-center mb-12">
              <h2 id="converter-heading" className="text-4xl font-bold mb-6 bg-gradient-to-r from-islamic-blue to-accent bg-clip-text text-transparent">
                Hijri-Gregorian Date Converter
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Convert between Islamic (Hijri) and Western (Gregorian) dates with precision and ease
              </p>
            </div>
            <DateConverter />
          </div>
        </section>

        {/* Islamic Game */}
        <section id="game" aria-labelledby="game-heading" className="py-16 bg-gradient-to-r from-islamic-green/5 to-islamic-blue/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="game-heading" className="text-4xl font-bold mb-6 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
                Test Your Islamic Knowledge
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Challenge yourself with our interactive Islamic quiz and learn more about important dates and events
              </p>
            </div>
            <IslamicGame />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" aria-labelledby="faq-heading" className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about the Hijri calendar and our tools
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-islamic-green to-islamic-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the Islamic Calendar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Start using our comprehensive Hijri calendar tools today and never miss an important Islamic date or event again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#converter"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-islamic-green rounded-lg shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                title="Convert dates"
                aria-label="Date Converter"
              >
                Try Date Converter
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                title="View the Hijri Calendar"
                aria-label="Monthly Hijri Calendar"
              >
                View Full Calendar
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
