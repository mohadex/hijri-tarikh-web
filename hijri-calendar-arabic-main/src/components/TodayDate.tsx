import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import moment from "moment-hijri";

const TodayDate = () => {
  const [hijriDate, setHijriDate] = useState<{ day: string; month: string; year: string; monthNumber: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
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
          <h2 className="text-4xl font-bold mb-4 font-arabic bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
            تاريخ اليوم هجري وميلادي
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اعرف تاريخ اليوم هجري الآن مع التاريخ الميلادي المقابل له
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Hijri Date Card */}
          <Card className="p-6 text-center bg-gradient-to-br from-islamic-green/10 to-islamic-blue/10 border-islamic-green/20 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-islamic-green/10 rounded-full">
                <Calendar className="h-8 w-8 text-islamic-green" aria-label="أيقونة التقويم الهجري" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">تاريخ اليوم هجري</h3>
            {loading ? (
              <div className="text-muted-foreground">جاري التحميل...</div>
            ) : hijriDate ? (
              <>
                <div id="hijri-date" className="text-3xl font-bold font-arabic text-islamic-green mb-2" itemProp="dateCreated" itemScope itemType="https://schema.org/Date">
                  {hijriDate.day} {hijriDate.month} {hijriDate.year} هـ
                </div>
                <p className="text-sm text-muted-foreground">
                  {hijriDate.day}/{hijriDate.monthNumber}/{hijriDate.year}
                </p>
              </>
            ) : null}
          </Card>

          {/* Gregorian Date Card */}
          <Card className="p-6 text-center bg-gradient-to-br from-islamic-gold/10 to-accent/10 border-islamic-gold/20 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-islamic-gold/10 rounded-full">
                <Clock className="h-8 w-8 text-islamic-gold" aria-label="أيقونة التقويم الميلادي" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">تاريخ اليوم ميلادي</h3>
            <div className="text-3xl font-bold font-arabic text-islamic-gold mb-2" itemProp="dateCreated" itemScope itemType="https://schema.org/Date">
              {gregorianDate.day} {gregorianDate.month} {gregorianDate.year} م
            </div>
            <p className="text-sm text-muted-foreground">
              {gregorianDate.day}/{gregorianDate.month}/{gregorianDate.year}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TodayDate;