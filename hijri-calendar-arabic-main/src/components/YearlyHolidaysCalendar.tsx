import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import moment from "moment-hijri";
import { Calendar, Star, Moon, Heart } from "lucide-react";
import { islamicHolidaysData, IslamicHoliday } from "@/data/islamicHolidays";
import HolidayDetailsModal from "./HolidayDetailsModal";

const YearlyHolidaysCalendar = () => {
  const [currentHijriYear, setCurrentHijriYear] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedHoliday, setSelectedHoliday] = useState<IslamicHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hijriMonths = [
    "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
    "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
  ];

  const handleHolidayClick = (holiday: IslamicHoliday) => {
    console.log("Holiday clicked:", holiday.name, holiday);
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHoliday(null);
  };

  useEffect(() => {
    const hijriMoment = moment();
    setCurrentHijriYear(parseInt(hijriMoment.format('iYYYY')));
    setLoading(false);
  }, []);

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'major':
        return 'bg-islamic-green/10 text-islamic-green border-islamic-green/20';
      case 'special':
        return 'bg-islamic-gold/10 text-islamic-gold border-islamic-gold/20';
      default:
        return 'bg-islamic-blue/10 text-islamic-blue border-islamic-blue/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'major':
        return 'مناسبة كبرى';
      case 'special':
        return 'مناسبة خاصة';
      default:
        return 'مناسبة';
    }
  };

  const getGregorianDate = (hijriMonth: number, hijriDay: number, hijriYear: number) => {
    try {
      const hijriDate = moment().iYear(hijriYear).iMonth(hijriMonth - 1).iDate(hijriDay);
      return hijriDate.format('DD/MM/YYYY');
    } catch (error) {
      return 'تاريخ تقريبي';
    }
  };

  if (loading || !currentHijriYear) {
    return (
      <section className="py-12 bg-gradient-to-br from-islamic-blue/5 via-background to-islamic-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-32 bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-islamic-blue/5 via-background to-islamic-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              المناسبات الإسلامية
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              جميع المناسبات الإسلامية المهمة للعام الهجري {currentHijriYear} هـ
            </p>
            <Badge variant="outline" className="text-sm">
              التواريخ الميلادية تقريبية وقد تختلف حسب رؤية الهلال
            </Badge>
          </div>

          {/* Holidays Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {islamicHolidaysData.map((holiday, index) => {
              const IconComponent = holiday.icon === "Calendar" ? Calendar : holiday.icon === "Star" ? Star : holiday.icon === "Moon" ? Moon : Heart;
              const gregorianDate = getGregorianDate(holiday.month, holiday.day, currentHijriYear);
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden bg-gradient-to-br from-card via-card/50 to-muted/20 hover:from-islamic-gold/5 hover:via-islamic-green/5 hover:to-islamic-blue/5 border border-border/50 hover:border-islamic-gold/30 hover:shadow-2xl hover:shadow-islamic-gold/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
                  onClick={() => handleHolidayClick(holiday)}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-islamic-gold/0 via-islamic-gold/5 to-islamic-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top decorative line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-islamic-gold via-islamic-green to-islamic-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="relative p-6 space-y-4">
                    {/* Header with icon and category */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="p-4 rounded-2xl bg-gradient-to-br from-islamic-gold/10 to-islamic-green/10 text-islamic-gold group-hover:from-islamic-gold/20 group-hover:to-islamic-green/20 transition-all duration-300 ring-1 ring-islamic-gold/20 group-hover:ring-islamic-gold/40">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-2xl bg-islamic-gold/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                        </div>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryStyle(holiday.category)} group-hover:scale-105 transition-transform duration-300`}
                      >
                        {getCategoryLabel(holiday.category)}
                      </Badge>
                    </div>
                    
                    {/* Holiday Name */}
                    <div>
                      <h3 className="text-xl font-bold font-arabic text-foreground leading-tight mb-2 group-hover:text-islamic-gold transition-colors duration-300">
                        {holiday.name}
                      </h3>
                      
                      {/* Date Information */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-islamic-green/10 border border-islamic-green/20">
                            <span className="text-sm font-bold text-islamic-green">
                              {holiday.day} {hijriMonths[holiday.month - 1]} {currentHijriYear} هـ
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-md inline-block">
                          التاريخ الميلادي: {gregorianDate}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="relative space-y-3">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {holiday.description}
                      </p>
                      
                      {/* Religious Significance */}
                      <div className="border-t border-border/30 pt-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-islamic-blue"></div>
                          <h4 className="text-xs font-semibold text-islamic-blue font-arabic">الأهمية الدينية</h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/70 transition-colors duration-300">
                          {holiday.detailedInfo.religiousImportance}
                        </p>
                      </div>
                    </div>
                    
                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-islamic-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Card>
              );
            })}
          </div>


          {/* Holiday Details Modal */}
          <HolidayDetailsModal 
            holiday={selectedHoliday}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </section>
  );
};

export default YearlyHolidaysCalendar;