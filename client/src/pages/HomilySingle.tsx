import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import { homilies, formatDate, getSeasonColor } from "@/data/homilies";
import Footer from "@/components/Footer";

/**
 * Design System: Liturgical Minimalism
 * - Clean, readable layout for scripture and reflection
 * - Generous margins and line-height for comfortable reading
 * - Lora font for scripture passages
 */

export default function HomilySingle() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  const homily = homilies.find(h => h.id === params.id);

  if (!homily) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
          <div className="container py-4">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homilies
            </Button>
          </div>
        </nav>
        <main className="container py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Homily Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The homily you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => setLocation("/")}>Return to Home</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container py-12 md:py-16">
        <article className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            {/* Season Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getSeasonColor(homily.season) }}
              ></div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {homily.season}
              </span>
            </div>

            {/* Date */}
            <p className="text-lg text-muted-foreground mb-4">
              {formatDate(homily.date)}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {homily.title}
            </h1>

            {/* Decorative Line */}
            <div className="w-16 h-1 bg-accent mb-8"></div>
          </div>

          {/* Audio Player Section */}
          {homily.audio_url && (
            <section className="mb-12">
              <AudioPlayer
                src={homily.audio_url}
                title="Listen to this homily"
                duration={homily.duration}
              />
            </section>
          )}

          {/* Readings Section */}
          {homily.readings ? (
            <div className="space-y-8 mb-12">
              {/* First Reading */}
              <Card className="p-8 border-l-4 border-accent bg-white">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  First Reading
                </h3>
                <p className="scripture mb-4">
                  {homily.readings.first}
                </p>
              </Card>

              {/* Second Reading */}
              <Card className="p-8 border-l-4 border-accent bg-white">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Second Reading
                </h3>
                <p className="scripture mb-4">
                  {homily.readings.second}
                </p>
              </Card>

              {/* Gospel */}
              <Card className="p-8 border-l-4 border-accent bg-white">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Gospel Reading
                </h3>
                <p className="scripture mb-4">
                  {homily.readings.gospel}
                </p>
              </Card>
            </div>
          ) : (
            <div className="bg-secondary/30 p-8 rounded-lg mb-12">
              <p className="text-foreground">
                Full readings for this homily are available in the audio recording.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Homilies
            </Button>
            <Button
              onClick={() => setLocation("/")}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Explore More Homilies
            </Button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
