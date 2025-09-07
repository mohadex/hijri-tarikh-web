import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { islamicHolidaysData } from "@/data/islamicHolidays";
import moment from "moment-hijri";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HolidayCountdown = () => {
  const [nextHoliday, setNextHoliday] = useState<any>(null);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const findNextMajorHoliday = () => {
    const today = moment();
    const currentHijriYear = today.iYear();
    
    // Get major holidays only
    const majorHolidays = islamicHolidaysData.filter(holiday => holiday.category === "major");
    
    let closestHoliday = null;
    let closestDiff = Infinity;
    
    for (const holiday of majorHolidays) {
      // Try current year first
      let holidayDate = moment().iYear(currentHijriYear).iMonth(holiday.month - 1).iDate(holiday.day);
      
      // If the holiday has passed this year, try next year
      if (holidayDate.isBefore(today)) {
        holidayDate = moment().iYear(currentHijriYear + 1).iMonth(holiday.month - 1).iDate(holiday.day);
      }
      
      const diff = holidayDate.diff(today);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestHoliday = {
          ...holiday,
          date: holidayDate,
          hijriYear: holidayDate.iYear()
        };
      }
    }
    
    return closestHoliday;
  };

  const calculateTimeRemaining = (targetDate: moment.Moment) => {
    const now = moment();
    const diff = targetDate.diff(now);
    
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const duration = moment.duration(diff);
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  };

  const getHijriMonthName = (month: number) => {
    const months = [
      "محرم", "صفر", "ربيع الأول", "ربيع الثاني", 
      "جمادى الأولى", "جمادى الثانية", "رجب", "شعبان",
      "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
    ];
    return months[month - 1];
  };

  useEffect(() => {
    const holiday = findNextMajorHoliday();
    setNextHoliday(holiday);
  }, []);

  useEffect(() => {
    if (!nextHoliday) return;

    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(nextHoliday.date);
      setTimeRemaining(remaining);
      
      // If countdown reaches zero, find next holiday
      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        const newHoliday = findNextMajorHoliday();
        setNextHoliday(newHoliday);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextHoliday]);

  if (!nextHoliday) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-islamic-gold/10 via-background to-islamic-green/10">
      <div className="container mx-auto px-4">
        
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-background to-muted/30 border-islamic-gold/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-islamic-green/10 text-islamic-green border-islamic-green/20">
                عيد كبير
              </Badge>
            </div>
            
            <h3 className="text-3xl font-bold mb-2 font-arabic text-islamic-green">
              {nextHoliday.name}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-2">
              {nextHoliday.description}
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              {nextHoliday.day} {getHijriMonthName(nextHoliday.month)} {nextHoliday.hijriYear} هـ
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-islamic-green/10 rounded-lg p-4 border border-islamic-green/20">
                <div className="text-3xl font-bold text-islamic-green mb-1">
                  {timeRemaining.days}
                </div>
                <div className="text-sm text-muted-foreground">يوم</div>
              </div>
              
              <div className="bg-islamic-blue/10 rounded-lg p-4 border border-islamic-blue/20">
                <div className="text-3xl font-bold text-islamic-blue mb-1">
                  {timeRemaining.hours}
                </div>
                <div className="text-sm text-muted-foreground">ساعة</div>
              </div>
              
              <div className="bg-islamic-gold/10 rounded-lg p-4 border border-islamic-gold/20">
                <div className="text-3xl font-bold text-islamic-gold mb-1">
                  {timeRemaining.minutes}
                </div>
                <div className="text-sm text-muted-foreground">دقيقة</div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">
                  {timeRemaining.seconds}
                </div>
                <div className="text-sm text-muted-foreground">ثانية</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {nextHoliday.detailedInfo?.whyCelebrated || nextHoliday.description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HolidayCountdown;