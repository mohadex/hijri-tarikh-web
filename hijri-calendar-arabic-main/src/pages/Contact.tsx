import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Submission Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully! ",
      description: "Thank you for contacting us. We'll get back to you as soon as possible.",
      className: "bg-islamic-green text-white border-islamic-green",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Feel free to contact us with any questions or suggestions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-islamic-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl text-islamic-green flex items-center gap-3">
                    <MessageSquare className="h-6 w-6" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:info@taqweemhijri.site" 
                        className="text-muted-foreground hover:text-islamic-blue transition-colors"
                      >
                        info@taqweemhijri.site
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Saudi Arabia<br />
                        Riyadh, King Fahd District
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-islamic-gold/20 bg-islamic-gold/5">
                <CardHeader>
                  <CardTitle className="text-lg text-islamic-gold">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">How is the Hijri date calculated?</h5>
                      <p className="text-muted-foreground">
                        We use precise astronomical algorithms based on the lunar cycle to calculate Hijri dates.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Is the data accurate?</h5>
                      <p className="text-muted-foreground">
                        Yes, we use reliable sources and regularly update the data to ensure accuracy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-islamic-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-islamic-green">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter message subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-islamic-green hover:bg-islamic-green/90 text-white text-lg px-8 py-3"
                      >
                        Send Message 📧
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Support Information */}
              <Card className="mt-6 border-islamic-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl text-islamic-blue">
                    Other Ways to Get Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 border border-islamic-gold/20 rounded-lg">
                      <h4 className="font-semibold mb-2 text-islamic-gold">Quick Help</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        For simple questions about using the site
                      </p>
                      <Button variant="outline" className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold/10">
                        User Guide
                      </Button>
                    </div>
                    <div className="text-center p-4 border border-islamic-green/20 rounded-lg">
                      <h4 className="font-semibold mb-2 text-islamic-green">Report an Issue</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        If you encounter a technical issue on the site
                      </p>
                      <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green/10">
                        Report a Bug
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;