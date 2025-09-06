import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import moment from "moment-hijri";
import { getHolidayByDate, IslamicHoliday } from "@/data/islamicHolidays";
import HolidayDetailsModal from "./HolidayDetailsModal";

const MonthlyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [today, setToday] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedHoliday, setSelectedHoliday] = useState<IslamicHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hijriMonths = [
    "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
    "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
  ];

  const weekDays = ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];

  // Check if a day has a holiday
  const getHoliday = (day: number) => {
    if (!currentMonth) return null;
    return getHolidayByDate(currentMonth, day);
  };

  const handleHolidayClick = (holiday: IslamicHoliday) => {
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHoliday(null);
  };

  useEffect(() => {
    // Use moment-hijri to get current Hijri date
    const hijriMoment = moment();
    setCurrentMonth(parseInt(hijriMoment.format('iM')));
    setCurrentYear(parseInt(hijriMoment.format('iYYYY')));
    setToday(parseInt(hijriMoment.format('iD')));
    setLoading(false);
  }, []);

  // Generate calendar days using moment-hijri
  const generateCalendarDays = () => {
    if (!currentMonth || !currentYear) return [];
    
    const days = [];
    
    // Create moment for first day of the month
    const firstDayOfMonth = moment().iMonth(currentMonth - 1).iYear(currentYear).iDate(1);
    
    // Get actual number of days in this Hijri month
    const daysInMonth = firstDayOfMonth.iDaysInMonth();
    
    // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
    const startDay = firstDayOfMonth.day();
    
    // Empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const goToPreviousMonth = () => {
    if (currentMonth == null || currentYear == null) return;
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth == null || currentYear == null) return;
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section id="calendar" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-arabic">التقويم الشهري</h2>
        
        <Card className="max-w-4xl mx-auto p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousMonth}
              className="h-10 w-10"
              disabled={loading || currentMonth == null}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold font-arabic text-primary">
                {currentMonth ? hijriMonths[currentMonth - 1] : "—"} {currentYear ?? ""} {currentYear ? "هـ" : ""}
              </h3>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextMonth}
              className="h-10 w-10"
              disabled={loading || currentMonth == null}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="p-3 text-center font-semibold text-muted-foreground text-sm"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              const holiday = day ? getHoliday(day) : null;
              return (
                <div
                  key={index}
                  className={`
                    aspect-square flex flex-col items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 relative
                    ${!day ? '' : 'hover:bg-calendar-hover cursor-pointer'}
                    ${day && today != null && day === today ? 'bg-calendar-today text-calendar-today-foreground shadow-md' : ''}
                    ${holiday ? 'bg-islamic-gold/20 border-2 border-islamic-gold/50' : ''}
                    ${day && (index % 7 === 5 || index % 7 === 6) && !holiday ? 'text-calendar-weekend' : ''}
                  `}
                  title={holiday?.name || ''}
                  onClick={holiday ? () => handleHolidayClick(holiday) : undefined}
                >
                  {day && (
                    <>
                      <span className="font-arabic">
                        {day}
                      </span>
                      {holiday && (
                        <div className="absolute bottom-0 left-0 right-0 bg-islamic-gold/30 rounded-b-lg px-1 py-0.5 text-xs text-center font-arabic text-islamic-gold truncate">
                          {holiday.name.length > 12 ? holiday.name.substring(0, 12) + '...' : holiday.name}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Calendar Legend */}
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-calendar-today rounded"></div>
              <span>اليوم</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-islamic-gold/20 border border-islamic-gold/50 rounded"></div>
              <span>المناسبات الإسلامية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-calendar-weekend rounded"></div>
              <span>نهاية الأسبوع</span>
            </div>
          </div>

          {/* Holiday Details Modal */}
          <HolidayDetailsModal 
            holiday={selectedHoliday}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Card>
      </div>
    </section>
  );
};

export default MonthlyCalendar;