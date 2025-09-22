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
      "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", 
      "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
      "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
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
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-background to-green-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-background to-muted/30 border-yellow-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-600/10 text-green-600 border-green-600/20">
                Major Holiday
              </Badge>
            </div>
            
            <h3 className="text-3xl font-bold mb-2 text-green-600">
              {nextHoliday.name}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-2">
              {nextHoliday.description}
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              {nextHoliday.day} {getHijriMonthName(nextHoliday.month)}, {nextHoliday.hijriYear} AH
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-green-600/10 rounded-lg p-4 border border-green-600/20">
                <div className="text-3xl font-bold mb-1">
                  {timeRemaining.days}
                </div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              
              <div className="bg-blue-600/10 rounded-lg p-4 border border-blue-600/20">
                <div className="text-3xl font-bold mb-1">
                  {timeRemaining.hours}
                </div>
                <div className="text-sm text-muted-foreground">Hours</div>
              </div>
              
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                <div className="text-3xl font-bold mb-1">
                  {timeRemaining.minutes}
                </div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-3xl font-bold mb-1">
                  {timeRemaining.seconds}
                </div>
                <div className="text-sm text-muted-foreground">Seconds</div>
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