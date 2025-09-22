import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import moment from "moment-hijri";

const TodayDate = () => {
  const [hijriDate, setHijriDate] = useState<{ day: string; month: string; year: string; monthNumber: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set moment locale to English for month names
    moment.locale('en');
    
    // Use moment-hijri for accurate Hijri date
    const hijriMoment = moment();
    const hijriDay = hijriMoment.format('iD');
    const hijriMonth = hijriMoment.format('iMMMM');
    const hijriYear = hijriMoment.format('iYYYY');
    const hijriMonthNumber = hijriMoment.format('iM');

    setHijriDate({
      day: hijriDay,
      month: hijriMonth,
      year: hijriYear,
      monthNumber: parseInt(hijriMonthNumber),
    });
    setLoading(false);
  }, []);

  const getCurrentGregorianDate = () => {
    const today = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    return {
      day: today.getDate(),
      month: months[today.getMonth()],
      year: today.getFullYear()
    };
  };

  const gregorianDate = getCurrentGregorianDate();

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
            Hijri Date Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            View today's date in both Hijri and Gregorian calendars
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Hijri Date Card */}
          <Card className="p-6 text-center bg-gradient-to-br from-islamic-green/10 to-islamic-blue/10 border-islamic-green/20 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-islamic-green/10 rounded-full">
                <Calendar className="h-8 w-8 text-islamic-green" aria-label="Hijri Calendar Icon" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Hijri Date</h3>
            {loading ? (
              <div className="text-muted-foreground">Loading...</div>
            ) : hijriDate ? (
              <div className="text-3xl font-bold text-islamic-green" itemProp="dateCreated" itemScope itemType="https://schema.org/Date">
                {hijriDate.month} {hijriDate.day}, {hijriDate.year} AH
              </div>
            ) : null}
          </Card>

          {/* Gregorian Date Card */}
          <Card className="p-6 text-center bg-gradient-to-br from-islamic-gold/10 to-accent/10 border-islamic-gold/20 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-islamic-gold/10 rounded-full">
                <Clock className="h-8 w-8 text-islamic-gold" aria-label="Gregorian Calendar Icon" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Gregorian Date</h3>
            <div className="text-3xl font-bold text-islamic-gold" itemProp="dateCreated" itemScope itemType="https://schema.org/Date">
              {gregorianDate.month} {gregorianDate.day}, {gregorianDate.year} AD
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TodayDate;