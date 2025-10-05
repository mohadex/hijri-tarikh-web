import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConvertHijriToGregorian() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            asChild 
            variant="ghost" 
            className="mb-6 -ml-3 flex items-center gap-1"
          >
            <Link to="/articles">
              <ChevronLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
          
          <article className="prose dark:prose-invert max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                How to Convert Hijri to Gregorian Dates Accurately
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By Anas</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>

            <div className="w-full mb-8 rounded-lg overflow-hidden">
              <img 
                src="/images/hijri-gregorian-conversion.jpg" 
                alt="Hijri to Gregorian Conversion"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>

            <section className="mb-8">
              <p className="text-lg">
                The Hijri (Islamic) calendar is used worldwide to determine important Islamic dates such as Ramadan, Eid al-Fitr, and Hajj. Sometimes, you may need to know the equivalent date in the Gregorian calendar, which is used in everyday life globally. Learning how to <strong>convert Hijri to Gregorian</strong> is essential for planning events, religious observances, and historical research.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Understanding the Hijri Calendar</h2>
              <p>
                The Hijri calendar is a <strong>lunar calendar</strong> based on the cycles of the moon. It has 12 months and approximately 354 or 355 days in a year, shorter than the solar Gregorian calendar, which has 365 or 366 days. The Hijri year starts from the migration of Prophet Muhammad (PBUH) from Mecca to Medina, known as the Hijra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Differences Between Hijri and Gregorian Calendars</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Length of the year:</strong> Hijri year ~354 days vs Gregorian ~365 days</li>
                <li><strong>Months:</strong> Hijri months are lunar-based, 29 or 30 days.</li>
                <li><strong>Shifting dates:</strong> Islamic holidays move earlier by about 10–12 days each Gregorian year.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Methods to Convert Hijri to Gregorian</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Manual Calculation</h3>
                <p>You can use mathematical formulas, but these are complex and prone to errors due to lunar observations.</p>
                
                <h3 className="text-xl font-semibold">2. Online Converters</h3>
                <p>
                  The easiest and most accurate method is using a trusted Hijri-to-Gregorian converter like <a href="/" className="text-primary hover:underline">Taqweem Hijri Date Converter</a>, which calculates dates based on lunar cycles and astronomical data.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide Using a Hijri to Gregorian Converter</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open your preferred Hijri-to-Gregorian conversion tool.</li>
                <li>Select "Hijri to Gregorian" conversion.</li>
                <li>Enter the Hijri date you want to convert (day, month, year).</li>
                <li>Click "Convert" to get the corresponding Gregorian date instantly.</li>
                <li>Check the result against official Islamic calendar sources for accuracy if needed.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using outdated calendars or tools.</li>
                <li>Assuming Hijri months are fixed in length.</li>
                <li>Ignoring regional moon sighting differences, which can slightly shift dates.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Benefits of Accurate Conversion for Islamic Events</h2>
              <p className="mb-4">Accurate conversion helps you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plan religious events and holidays in advance.</li>
                <li>Align personal, community, or business schedules with Islamic dates.</li>
                <li>Ensure historical research is precise when correlating events in different calendars.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p>
                Converting Hijri to Gregorian dates is straightforward with the right tools and knowledge. Whether you are planning for Ramadan, Eid, or Hajj, using a reliable converter ensures accuracy and helps you stay aligned with Islamic observances. Start using a trusted <a href="/date-converter" className="text-primary hover:underline font-semibold">Hijri-to-Gregorian converter</a> today to simplify your planning.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <Button asChild variant="outline">
                <Link to="/articles" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Back to all articles
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
