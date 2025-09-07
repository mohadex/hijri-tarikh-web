import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Website structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "التقويم الهجري",
      "description": "موقع شامل لعرض التاريخ الهجري اليوم وتحويل التواريخ مع أهم الأعياد والمناسبات الإسلامية",
      "url": "https://yoursite.lovable.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yoursite.lovable.app/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "ar",
      "audience": {
        "@type": "Audience",
        "geographicArea": "المملكة العربية السعودية، الإمارات العربية المتحدة، مصر، الأردن، لبنان، سوريا، العراق، الكويت، البحرين، قطر، عمان، اليمن، المغرب، الجزائر، تونس، ليبيا، السودان"
      }
    };

    // Organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "التقويم الهجري",
      "description": "موقع متخصص في عرض التاريخ الهجري وتحويل التواريخ",
      "url": "https://yoursite.lovable.app",
      "logo": "https://yoursite.lovable.app/images/logo.png",
      "sameAs": [],
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@hijricalendar.com",
        "contactType": "customer service"
      }
    };

    // Software Application structured data
    const softwareData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "محول التاريخ الهجري",
      "description": "أداة مجانية لتحويل التاريخ من الميلادي إلى الهجري والعكس",
      "url": "https://yoursite.lovable.app",
      "applicationCategory": "Utility",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "تحويل التاريخ من الميلادي إلى الهجري",
        "تحويل التاريخ من الهجري إلى الميلادي", 
        "عرض تاريخ اليوم هجري",
        "التقويم الهجري الشهري",
        "أهم الأعياد والمناسبات الإسلامية"
      ]
    };

    // Today's date structured data
    const currentDate = new Date();
    const dateData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "تاريخ اليوم هجري",
      "description": "عرض التاريخ الهجري لليوم الحالي مع معلومات إضافية",
      "startDate": currentDate.toISOString().split('T')[0],
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://yoursite.lovable.app"
      }
    };

    // Add structured data to head
    const addStructuredData = (data: any, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    addStructuredData(websiteData, 'website-structured-data');
    addStructuredData(organizationData, 'organization-structured-data');
    addStructuredData(softwareData, 'software-structured-data');
    addStructuredData(dateData, 'date-structured-data');

    return () => {
      // Cleanup on unmount
      ['website-structured-data', 'organization-structured-data', 'software-structured-data', 'date-structured-data'].forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
};

export default StructuredData;