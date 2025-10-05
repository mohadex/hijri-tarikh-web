import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export type Article = {
  id: number | string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
  author: string;
};

export const articles: Article[] = [
  {
    id: 2,
    title: "A Guide to Hijri Calendar Conversion",
    excerpt: "The Hijri calendar, also known as the Islamic calendar, is a lunar calendar deeply rooted in Islamic history and religious practice.",
    readTime: "5 min",
    date: "October 5, 2025",
    category: "Islamic Calendar",
    imageUrl: "/images/convert hijri to gregorian.jpg.png",
    author: "Taqweem Team",
    content: `
      <div class="intro">
        <p>The <a href="https://en.wikipedia.org/wiki/Islamic_calendar" target="_blank" rel="noopener noreferrer">Hijri calendar</a>, also known as the Islamic calendar, is a lunar calendar deeply rooted in Islamic history and religious practice. Unlike the widely used Gregorian calendar, which is solar-based, the Hijri calendar follows the cycles of the moon. This difference means the two calendars do not align perfectly, making conversion an essential tool for Muslims and researchers alike.</p>
      </div>

      <div class="toc">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#section1">1. What is the Hijri Calendar?</a></li>
          <li><a href="#section2">2. Why is Hijri Calendar Conversion Important?</a></li>
          <li><a href="#section3">3. Simple Formulas for Approximate Conversion</a></li>
          <li><a href="#section4">4. Online Tools for Precise Conversion</a></li>
          <li><a href="#section5">5. How Conversion Works: A Deeper Dive</a></li>
        </ul>
      </div>

      <div id="section1" class="section">
        <h2>1. What is the Hijri Calendar?</h2>
        <p>The Hijri calendar consists of 12 lunar months with either 354 or 355 days per year. It began with the Prophet Muhammad's migration (Hijra) from Mecca to Medina in 622 CE, marking the start of the Islamic era (AH — Anno Hegirae).</p>
      </div>

      <div id="section2" class="section">
        <h2>2. Why is Hijri Calendar Conversion Important?</h2>
        <p>The Hijri calendar determines Islamic religious events such as Ramadan, Hajj, Eid al-Fitr, and Eid al-Adha. For Muslims living in Gregorian-based societies, accurate conversion ensures these important dates are observed correctly.</p>
      </div>

      <div id="section3" class="section">
        <h2>3. Simple Formulas for Approximate Conversion</h2>
        <div class="formula">
          <h4>Hijri to Gregorian:</h4>
          <pre><code>Gregorian Year ≈ (Hijri Year × 0.97) + 622</code></pre>
        </div>
        <div class="formula">
          <h4>Gregorian to Hijri:</h4>
          <pre><code>Hijri Year ≈ (Gregorian Year - 622) × 1.03</code></pre>
        </div>
      </div>

      <div id="section4" class="section">
        <h2>4. Online Tools for Precise Conversion</h2>
        <p>While formulas are good for rough estimates, accurate results require digital tools that use astronomical data. The best option is our official <a href="/#converter">Taqweem Hijri Date Converter</a>, which instantly converts dates between the Hijri and Gregorian calendars with high precision.</p>
      </div>

      <div id="section5" class="section">
        <h2>5. How Conversion Works: A Deeper Dive</h2>
        <p>Professional systems use a Julian Day conversion process that calculates continuous days from a fixed point, then converts them into Hijri or Gregorian format — ensuring perfect day-level accuracy.</p>
      </div>
      
      <style>
        .intro { margin-bottom: 2rem; }
        .toc { 
          background-color: #f9f9f9; 
          border: 1px solid #e2e8f0; 
          border-radius: 0.5rem; 
          padding: 1.25rem; 
          margin-bottom: 2rem;
        }
        .toc h2 { margin-top: 0; font-size: 1.25rem; }
        .toc ul { padding-left: 1.5rem; margin: 0.75rem 0; }
        .toc li { margin-bottom: 0.5rem; }
        .toc a { color: #3b82f6; text-decoration: none; }
        .toc a:hover { text-decoration: underline; }
        .section { margin-bottom: 2rem; }
        .formula { 
          background-color: #f1f5f9; 
          border-left: 4px solid #3b82f6; 
          padding: 1rem; 
          margin: 1rem 0; 
          border-radius: 0.25rem;
        }
        .formula h4 { margin: 0 0 0.5rem 0; font-size: 0.95rem; }
        .formula pre { margin: 0; white-space: pre-wrap; }
        .formula code { font-family: 'Courier New', monospace; }
        h2 { font-size: 1.5rem; margin: 2rem 0 1rem 0; }
        p { margin: 0.75rem 0; line-height: 1.7; }
        a { color: #3b82f6; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    `
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              Islamic Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of informative articles about the Hijri calendar, Islamic events, and practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                readTime={article.readTime}
                date={article.date}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-islamic-blue text-islamic-blue hover:bg-islamic-blue/10 px-8 py-6 text-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View More Articles
            </Button>
          </div>

          <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: Rabi' al-Thani 13, 1447 AH</p>
          </div>
        </div>
      </main>
    </div>
  );
}
