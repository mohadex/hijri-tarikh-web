import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { IslamicHoliday } from "@/data/islamicHolidays";
import { Calendar, BookOpen, Heart, Star } from "lucide-react";

interface HolidayDetailsModalProps {
  holiday: IslamicHoliday | null;
  isOpen: boolean;
  onClose: () => void;
}

const HolidayDetailsModal = ({ holiday, isOpen, onClose }: HolidayDetailsModalProps) => {
  if (!holiday) return null;

  console.log("Modal opened with holiday:", holiday.name, "Religious importance:", holiday.detailedInfo?.religiousImportance);

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
        return 'Major Occasion';
      case 'special':
        return 'Special Occasion';
      default:
        return 'Occasion';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="pb-4 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-islamic-gold/10 text-islamic-gold">
              <Heart className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-bold text-left">
              {holiday.name}
            </DialogTitle>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{holiday.month === 1 ? 'Muharram' : holiday.month === 3 ? "Rabi' al-Awwal" : holiday.month === 7 ? 'Rajab' : holiday.month === 8 ? "Sha'ban" : holiday.month === 9 ? 'Ramadan' : holiday.month === 10 ? 'Shawwal' : holiday.month === 12 ? 'Dhu al-Hijjah' : ''} {holiday.day}, {new Date().getFullYear()} AH</span>
            </div>
            <Badge variant="outline" className={getCategoryStyle(holiday.category)}>
              {getCategoryLabel(holiday.category)}
            </Badge>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 min-h-0 pr-4">
          <div className="space-y-6">
            {/* Description */}
            <Card className="p-4 bg-gradient-to-r from-islamic-green/5 to-islamic-blue/5 border-islamic-green/20">
              <p className="text-lg text-center leading-relaxed">
                {holiday.description}
              </p>
            </Card>

            {/* Origin */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-islamic-green" />
                <h3 className="text-xl font-bold">Origin & History</h3>
              </div>
              <Card className="p-4">
                <p className="text-foreground leading-relaxed text-right">
                  {holiday.detailedInfo.origin}
                </p>
              </Card>
            </div>

            {/* Historical Significance */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-islamic-gold" />
                <h3 className="text-xl font-bold">Historical Significance</h3>
              </div>
              <Card className="p-4">
                <p className="text-foreground leading-relaxed text-right">
                  {holiday.detailedInfo.historicalSignificance}
                </p>
              </Card>
            </div>

            {/* Religious Importance */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-islamic-blue" />
                <h3 className="text-xl font-bold">Religious Importance</h3>
              </div>
              <Card className="p-4">
                <p className="text-foreground leading-relaxed text-right">
                  {holiday.detailedInfo.religiousImportance}
                </p>
              </Card>
            </div>

            {/* Why Celebrated */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-islamic-green" />
                <h3 className="text-xl font-bold">Why We Celebrate</h3>
              </div>
              <Card className="p-4">
                <p className="text-foreground leading-relaxed text-right">
                  {holiday.detailedInfo.whyCelebrated}
                </p>
              </Card>
            </div>

            {/* Traditions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-islamic-gold" />
                <h3 className="text-xl font-bold">Traditions & Practices</h3>
              </div>
              <Card className="p-4">
                <ul className="space-y-2">
                  {holiday.detailedInfo.traditions.map((tradition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-islamic-gold mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{tradition}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Islamic References */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-islamic-blue" />
                <h3 className="text-xl font-bold">Islamic References</h3>
              </div>
              <Card className="p-4 bg-gradient-to-r from-islamic-blue/5 to-islamic-green/5 border-islamic-blue/20">
                <ul className="space-y-3">
                  {holiday.detailedInfo.islamicReferences.map((reference, index) => (
                    <li key={index} className="p-3 bg-background/50 rounded-lg border border-border/50">
                      <span className="text-foreground leading-relaxed text-sm">
                        {reference}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default HolidayDetailsModal;