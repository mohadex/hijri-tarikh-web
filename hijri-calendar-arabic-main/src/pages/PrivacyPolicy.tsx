import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are committed to protecting your privacy and the security of your personal information
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  The Taqweem Hijri website collects the minimum information necessary to provide its services:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>Basic browsing information (browser type, IP address)</li>
                  <li>User preferences (theme preference, display settings)</li>
                  <li>Usage data (pages visited, session duration)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>Improving user experience and service quality</li>
                  <li>Personalizing content according to your preferences</li>
                  <li>Analyzing usage to develop the website</li>
                  <li>Ensuring website security and protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  We implement strict security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>Encryption of all data transmitted through the website</li>
                  <li>No sharing of information with third parties</li>
                  <li>Regular security system updates</li>
                  <li>Restricted data access to authorized team members only</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  We use cookies to enhance your experience on our website. These files help us to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>Save your preferences and settings</li>
                  <li>Remember your choices for future visits</li>
                  <li>Analyze website performance and usage</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  You can disable cookies through your browser settings, but this may affect some website functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>Know what data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to the processing of your data</li>
                  <li>Transfer your data to another service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-green">
                  Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  We may update this privacy policy from time to time. You will be notified of any significant 
                  changes through the website or via email if available.
                </p>
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US')}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-islamic-green mb-2">Contact Us</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:{' '}
                    <a 
                      href="mailto:info@taqweemhijri.site" 
                      className="text-islamic-blue hover:underline"
                    >
                      info@taqweemhijri.site
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;