import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A specialized platform for the Taqweem Hijri calendar and conversion between Hijri and Gregorian dates
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green flex items-center gap-3">
                  <Target className="h-8 w-8" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  We strive to be the first and most accurate reference for the Taqweem Hijri calendar on the internet,
                  providing comprehensive and precise services to Muslims around the world to help them know
                  Hijri dates and important religious occasions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green flex items-center gap-3">
                  <Heart className="h-8 w-8" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  To provide practical and accurate tools for converting between the Hijri and Gregorian calendars,
                  with an easy-to-use interface in English, and enriching the content with educational information
                  about Islamic heritage and religious occasions.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-islamic-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl text-islamic-gold flex items-center gap-3">
                    <Calendar className="h-6 w-6" />
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>Display current Hijri and Gregorian dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>Convert dates between both systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>Interactive monthly calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>Educational game about Islamic culture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-islamic-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl text-islamic-gold flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>Accuracy and reliability of information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ease of use and accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respect for Islamic heritage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>Continuous updates and development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-islamic-green/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  The Taqweem Hijri - Its Importance and History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  The Taqweem Hijri is the Islamic calendar based on the lunar cycle, beginning from 
                  the migration of the Prophet Muhammad (peace be upon him) from Mecca to Medina in 622 CE.
                </p>
                <p>
                  The Taqweem Hijri consists of 12 lunar months, with a Hijri year being approximately 354 days,
                  making it about 11 days shorter than the Gregorian year.
                </p>
                <p>
                  This calendar holds great importance in Islamic life as it determines the timings of fasting,
                  Hajj, and religious holidays, which is why we strive to provide accurate tools for its calculation and tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  We are a team of specialists in technology and Islamic studies, passionately working
                  to develop digital tools that serve the Muslim community and help preserve Islamic heritage.
                </p>
                <p className="mt-4">
                  We use the latest technologies and algorithms to ensure the accuracy of astronomical calculations
                  and conversions between calendars, taking into account minor variations in the start of months across different geographical regions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-gold/20 bg-islamic-gold/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl text-islamic-gold mb-4">
                    Share Your Feedback and Suggestions
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We value your feedback and strive for continuous improvement of our services
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-islamic-gold text-foreground rounded-lg hover:bg-islamic-gold/90 transition-colors font-medium"
                    >
                      Contact Us
                    </a>
                    <a 
                      href="/"
                      className="inline-flex items-center justify-center px-6 py-3 border border-islamic-blue text-islamic-blue rounded-lg hover:bg-islamic-blue/10 transition-colors font-medium"
                    >
                      Back to Home
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;