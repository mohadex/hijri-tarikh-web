import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, Loader2 } from "lucide-react";
import moment from "moment-hijri";

const DateConverter = () => {
  const [gregorianDate, setGregorianDate] = useState("");
  const [hijriDate, setHijriDate] = useState("");
  const [convertedResult, setConvertedResult] = useState("");
  const [conversionType, setConversionType] = useState("gToH");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const convertDate = () => {
    if (!gregorianDate && !hijriDate) {
      setError("Please enter a date to convert");
      return;
    }

    setIsLoading(true);
    setError("");
    
    try {
      if (conversionType === "gToH" && gregorianDate) {
        // Convert Gregorian to Hijri
        const hijriMoment = moment(gregorianDate);
        const result = hijriMoment.format('MMMM iD, iYYYY') + " AH";
        setConvertedResult(result);
      } else if (conversionType === "hToG" && hijriDate) {
        // Convert Hijri to Gregorian
        const parts = hijriDate.split('-');
        if (parts.length === 3) {
          const gregorianMoment = moment(`${parts[0]}-${parts[1]}-${parts[2]}`, 'iYYYY-iMM-iDD');
          const result = gregorianMoment.format('MMMM D, YYYY') + " AD";
          setConvertedResult(result);
        } else {
          setError("Invalid Hijri date format (use: YYYY-MM-DD)");
        }
      }
    } catch (err) {
      setError("An error occurred while converting the date");
    } finally {
      setIsLoading(false);
    }
  };

  const swapConversionType = () => {
    setConversionType(conversionType === "gToH" ? "hToG" : "gToH");
    setGregorianDate("");
    setHijriDate("");
    setConvertedResult("");
    setError("");
  };

  return (
    <section id="converter" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-islamic-green/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Date Converter</CardTitle>
              <CardDescription>
                Select conversion type and enter a date to get the result
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Conversion Type Selector */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={conversionType === "gToH" ? "default" : "outline"}
                  onClick={() => setConversionType("gToH")}
                  className="min-w-32"
                >
                  Gregorian to Hijri
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={swapConversionType}
                  className="hover:bg-islamic-green/10"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
                <Button
                  variant={conversionType === "hToG" ? "default" : "outline"}
                  onClick={() => setConversionType("hToG")}
                  className="min-w-32"
                >
                  Hijri to Gregorian
                </Button>
              </div>

              {/* Input Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {conversionType === "gToH" ? (
                  <div className="space-y-2">
                    <Label htmlFor="gregorian-input">Gregorian Date</Label>
                    <Input
                      id="gregorian-input"
                      type="date"
                      value={gregorianDate}
                      onChange={(e) => setGregorianDate(e.target.value)}
                      className="text-left"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="hijri-input">Hijri Date</Label>
                    <Input
                      id="hijri-input"
                      type="text"
                      placeholder="YYYY-MM-DD (e.g., 1445-01-15)"
                      value={hijriDate}
                      onChange={(e) => setHijriDate(e.target.value)}
                      className="text-left"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Result</Label>
                  <div className="p-3 bg-muted/50 rounded-md min-h-[40px] flex items-center justify-center text-center">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Converting...</span>
                      </div>
                    ) : convertedResult ? (
                      <span className="text-lg">{convertedResult}</span>
                    ) : (
                      <span className="text-muted-foreground">Result will appear here</span>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="text-center text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                  {error}
                </div>
              )}

              {/* Convert Button */}
              <div className="text-center">
                <Button
                  onClick={convertDate}
                  disabled={isLoading || (!gregorianDate && !hijriDate)}
                  className="px-8 py-3 bg-islamic-green hover:bg-islamic-green/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    "Convert Date"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DateConverter;