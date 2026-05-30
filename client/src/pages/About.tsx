import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * About page — biography of Fr. Joe Staudt
 * Matches the layout style of HomilySingle / ContemplativePrayer
 */

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {/* Hero / Page Title */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif">About</h1>
          <p className="text-lg md:text-xl font-light mt-2 opacity-95">
            Fr. Joe Staudt
          </p>
        </div>
      </section>

      {/* Back button */}
      <div className="container pt-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="text-foreground hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homilies
        </Button>
      </div>

      {/* Body */}
      <main className="flex-1">
        <div className="container py-8 md:py-12 max-w-3xl">
          <article className="text-foreground leading-relaxed space-y-6 text-base md:text-lg">
            <p>
              My name is Joseph W. Staudt; I was born on July 4, 1951 in Mercy
              Hospital, Rockville Centre, New York to Joseph W. Staudt and
              Margaret (Apcenski) Staudt. After I was born, the three of us
              lived in Hicksville, New York until our house was built in East
              Meadow. After me came Janice, Richard, Karen and Michele. Growing
              up, I loved baseball; I played Little League, CYO and high
              school. I became a diehard Yankee fan after my first week of
              being born. Apparently, the first three words my father whispered
              into my little ears were: &ldquo;Mommy, Daddy, and Yankees.&rdquo;
            </p>

            <p>
              I had an interest in the priesthood at a young age and went to
              St. Pius X Preparatory Seminary, Uniondale in 1965. In senior
              year of high school, I became a workout &ldquo;fanatic&rdquo; and
              continue to this day to try to keep in shape. After graduating
              from St. Pius X Prep, I went to Cathedral College in Douglaston,
              Queens. During my studies there, I noticed an old drum kit in
              the music room and a couple of nights a week, instead of
              studying, I&rsquo;d go down to the music room with a few record
              albums under my arm, put them on the stereo and try to imitate
              the drummer. On the drums I became a legend (in my own mind!) I
              have two sets of drums (electric and &ldquo;regular&rdquo;) in
              the house where I live and I try to play along with my favorite
              60s rock groups (including Cream, the Beatles, and Grand Funk
              Railroad).
            </p>

            <p>
              I decided to continue my studies for the priesthood by entering
              Immaculate Conception Seminary in Huntington, New York. I was
              ordained a deacon in January of 1977 and assigned to St. Rose of
              Lima parish in Massapequa, New York for fourteen months, after
              which time I was ordained a priest at St. Rose on March 4, 1978.
              My first parish assignment as a newly ordained priest was Corpus
              Christi in Mineola. In 1984 I was transferred to St. Sylvester
              in Medford; from there I went on to St. Patrick parish in Bay
              Shore (1990-1997) and then I was made pastor of Christ the King
              parish in Commack. In 2007, Bishop Murphy assigned me as pastor
              to Sacred Heart parish in Cutchogue. About eight years after
              that, the bishop asked me to be the administrator of Our Lady of
              Ostrabrama parish in Cutchogue, while I remained pastor of
              Sacred Heart.
            </p>

            <p>
              In June of 2023, I decided it was time to retire (i.e., slow
              down a bit due to a few health &ldquo;challenges&rdquo;).
              Presently, I fill in as a retired priest in three parishes: St.
              Mark&rsquo;s in Shoreham where I celebrate Mass every Thursday
              morning and on weekends, and I help out &ldquo;as needed&rdquo;
              at St. Joseph&rsquo;s in Ronkonkoma and also St. Patrick&rsquo;s
              in Bay Shore. I am thoroughly enjoying retirement, because in
              addition to helping my brother priests, I have more time to do
              the things I enjoy (working out and reading, getting together
              with friends). I always thought being retired was like being on
              vacation for the rest of your life&hellip;and it is!
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
