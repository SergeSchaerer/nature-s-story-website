import aerialImg from "@/assets/riverpark-aerial.jpg";
import zonesImg from "@/assets/riverpark-zones.jpg";
import {
  Trees,
  Users,
  Heart,
  Sparkles,
  Leaf,
  Baby,
  Dumbbell,
  Flower2,
  Accessibility,
  HandHeart,
  MapPin,
  Hammer,
  Coins,
} from "lucide-react";

const zielgruppen = [
  {
    icon: Baby,
    gruppe: "Kinder",
    bedarf: "spielen, entdecken, sich bewegen",
    angebot: "Naturspielplatz, Sand- und Wasserspiel, Kletter- und Balancierbereich",
  },
  {
    icon: Users,
    gruppe: "Jugendliche",
    bedarf: "Treffpunkt, Aktivität, Freiraum",
    angebot: "Tischtennis, Calisthenics, Slackline, Chill-Zone",
  },
  {
    icon: Dumbbell,
    gruppe: "Erwachsene",
    bedarf: "Erholung, Sport, Pause nach der Arbeit",
    angebot: "Rundweg, Fitnessstationen, Picknickplätze, Ruhezonen",
  },
  {
    icon: Accessibility,
    gruppe: "Ältere Menschen",
    bedarf: "Mobilität, Sicherheit, soziale Kontakte, Ruhe",
    angebot: "barrierefreier Weg, Bänke, leichte Bewegungsstationen, Schach und Sinnesgarten",
  },
  {
    icon: HandHeart,
    gruppe: "Familien",
    bedarf: "gemeinsame Zeit, Sicherheit, verschiedene Angebote",
    angebot: "Spielplatz, Sitzplätze daneben, Picknickzonen und Gartenbereich",
  },
];

const etappen = [
  {
    nr: "01",
    titel: "Etappe 1 – Grundgerüst",
    text: "Rundweg, Sitzbänke, Grundbepflanzung und Begegnungsplatz.",
  },
  {
    nr: "02",
    titel: "Etappe 2 – Aktivzonen",
    text: "Naturspielplatz, Fitnessstationen und Tischtennisbereich.",
  },
  {
    nr: "03",
    titel: "Etappe 3 – Sinne & Kunst",
    text: "Sinnesgarten, Hochbeete, Kunst-Elemente und weitere Aufenthaltsplätze.",
  },
];

const kosten = [
  { bereich: "Rundweg, Bänke und Grundgestaltung", kosten: "CHF 80'000 – 120'000" },
  { bereich: "Naturspielplatz", kosten: "CHF 120'000 – 180'000" },
  { bereich: "Fitness, Tischtennis und Aktivzone", kosten: "CHF 50'000 – 90'000" },
  { bereich: "Pergola, Tische und Treffpunkt", kosten: "CHF 40'000 – 70'000" },
  { bereich: "Sinnesgarten, Hochbeete und Pflanzen", kosten: "CHF 40'000 – 80'000" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <Leaf className="h-5 w-5 text-leaf" />
            <span className="font-serif text-lg tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
              RiverPark
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#idee" className="hover:text-primary transition-colors">Idee</a>
            <a href="#zielgruppen" className="hover:text-primary transition-colors">Zielgruppen</a>
            <a href="#raum" className="hover:text-primary transition-colors">Raum</a>
            <a href="#umsetzung" className="hover:text-primary transition-colors">Umsetzung</a>
            <a href="#nutzen" className="hover:text-primary transition-colors">Nutzen</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={aerialImg}
          alt="Visualisierung des RiverPark Zuchwil aus der Vogelperspektive mit Rundweg, Spielbereich, Begegnungsplatz und Garten am Fluss"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 pb-20 md:pb-28 text-primary-foreground">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-4 py-1.5 text-sm border border-background/20">
              <MapPin className="h-3.5 w-3.5" /> Zuchwil · Konzept RiverLoop
            </span>
            <h1
              className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              RiverPark
              <span className="block text-accent italic font-normal">RiverLoop</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Ein Generationenpark am Fluss – ein Ort, an dem Kinder spielen, Jugendliche
              sich treffen, Erwachsene sich bewegen und ältere Menschen gesund und sozial
              aktiv bleiben können.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#idee"
                className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Konzept entdecken <Leaf className="h-4 w-4" />
              </a>
              <a
                href="#nutzen"
                className="inline-flex items-center gap-2 rounded-full border border-background/40 px-6 py-3 font-medium hover:bg-background/10 transition-colors"
              >
                Nutzen für das Quartier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTIDEE */}
      <section id="idee" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-sm font-medium text-leaf uppercase tracking-widest">01 · Projektidee</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              Ein Rundweg, der alles verbindet.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Unsere Idee ist ein Generationenpark am Fluss. Der RiverPark soll ein Ort
              werden, an dem alle Generationen zusammenkommen – zum Spielen, Bewegen,
              Begegnen und Erholen.
            </p>
            <p>
              Die Idee heisst <span className="text-foreground font-medium">RiverLoop</span>,
              weil ein barrierefreier Rundweg alle Bereiche miteinander verbindet. So
              entsteht ein einfacher, übersichtlicher und lebendiger Park für das ganze
              Quartier.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 pt-6">
              {[
                { icon: Sparkles, title: "Spiel & Begegnung", text: "Naturspielplatz, Tischtennis, Sitzplätze und Gemeinschaftstische." },
                { icon: Flower2, title: "Kunst & Gestaltung", text: "Schöne Wege, Blumen, Kräuter, Holz-Elemente und kleine positive Botschaften." },
                { icon: Heart, title: "Zusammenleben", text: "Begegnungen zwischen Kindern, Jugendlichen, Erwachsenen und älteren Menschen." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <c.icon className="h-6 w-6 text-leaf" />
                  <h3 className="mt-4 font-semibold text-foreground" style={{ fontFamily: "Fraunces, serif" }}>{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-secondary p-8 border-l-4 border-accent">
              <h3 className="font-semibold text-secondary-foreground text-xl" style={{ fontFamily: "Fraunces, serif" }}>
                Das Besondere
              </h3>
              <p className="mt-3 text-secondary-foreground/80">
                Der Park sieht nicht nur schön aus, sondern fördert Gesundheit und
                Gemeinschaft. Für ältere Menschen werden die <em>Blue-Zone-Punkte</em>{" "}
                aufgenommen: natürlich bewegen, positive Einstellung, bewusst essen und
                soziale Kontakte. Gleichzeitig haben auch Kinder, Jugendliche und
                Erwachsene eigene passende Angebote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section id="zielgruppen" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-leaf uppercase tracking-widest">02 · Zielgruppen & Bedürfnisse</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              Für jede Generation der richtige Ort.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zielgruppen.map((z) => (
              <article key={z.gruppe} className="group rounded-3xl bg-card border border-border p-7 hover:shadow-soft transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-leaf flex items-center justify-center">
                    <z.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>{z.gruppe}</h3>
                </div>
                <p className="mt-5 text-sm uppercase tracking-wide text-leaf font-medium">Bedürfnis</p>
                <p className="text-foreground">{z.bedarf}</p>
                <p className="mt-4 text-sm uppercase tracking-wide text-leaf font-medium">Angebot</p>
                <p className="text-muted-foreground">{z.angebot}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-card p-8 border border-border">
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>Begegnungsqualität</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Begegnungen entstehen durch den zentralen Platz mit Pergola, lange Tische,
                Spieltische und gemeinsame Wege. Verschiedene Generationen treffen sich
                automatisch – ohne dass der Park gezwungen wirkt.
              </p>
            </div>
            <div className="rounded-3xl bg-primary text-primary-foreground p-8">
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>Lärm & Abfall</h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Aktive Zonen und Ruhezonen werden getrennt. Genug Abfalleimer, klare Wege,
                robuste Materialien und viel Grün als natürliche Abgrenzung sorgen für
                Ordnung und Ruhe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAUM */}
      <section id="raum" className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-leaf uppercase tracking-widest">03 · Wirkung im Raum</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
                Klare Zonen – verbunden durch den Loop.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Der RiverPark wird in verschiedene Zonen aufgeteilt, die durch den Rundweg
                verbunden bleiben. Am Rand spaziert man ruhig, in der Mitte entsteht ein
                Treffpunkt, aktive Angebote sind gebündelt – und die Ruhebereiche bleiben
                geschützt.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  { t: "Beim Fluss", d: "schöne Spazierzone mit Bänken und Aussicht." },
                  { t: "In der Mitte", d: "Begegnungsplatz mit Pergola, Tischen und Spielmöglichkeiten." },
                  { t: "Naturspielplatz", d: "gut sichtbar, damit Eltern und Grosseltern in der Nähe sitzen können." },
                  { t: "Sinnesgarten", d: "ruhig gelegen, mit Schatten, Blumen, Kräutern und Liegebänken." },
                ].map((i) => (
                  <li key={i.t} className="flex gap-4">
                    <Trees className="h-5 w-5 text-leaf mt-1 shrink-0" />
                    <p><span className="font-semibold text-foreground">{i.t}: </span><span className="text-muted-foreground">{i.d}</span></p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-soft">
                <img
                  src={zonesImg}
                  alt="Vier Bereiche des RiverPark: Fitness & Calisthenics, Sinnesgarten, Begegnungsplatz und Naturspielplatz"
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground italic">
                Quelle: eigene Konzeptidee, mit KI visualisiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UMSETZUNG */}
      <section id="umsetzung" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-leaf uppercase tracking-widest">04 · Umsetzung & Machbarkeit</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              Realistisch, in drei Etappen.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Die Idee kann Schritt für Schritt umgesetzt werden – nicht alles muss
              gleichzeitig gebaut werden.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {etappen.map((e) => (
              <div key={e.nr} className="rounded-3xl bg-card border border-border p-8 relative overflow-hidden">
                <span
                  className="absolute -top-4 -right-2 text-[7rem] font-bold text-secondary leading-none select-none"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  {e.nr}
                </span>
                <Hammer className="h-6 w-6 text-leaf relative" />
                <h3 className="mt-4 text-xl font-semibold relative" style={{ fontFamily: "Fraunces, serif" }}>{e.titel}</h3>
                <p className="mt-3 text-muted-foreground relative">{e.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="text-xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>Materialien</h3>
              <p className="mt-3 text-muted-foreground">
                Holz, Naturstein, Kies, wasserdurchlässige Beläge, einheimische Pflanzen
                und robuste Fitnessgeräte. Die Wege sind barrierefrei und auch mit
                Rollstuhl, Rollator oder Kinderwagen nutzbar.
              </p>
            </div>
            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="text-xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>Wartung</h3>
              <p className="mt-3 text-muted-foreground">
                Regelmässige Kontrolle der Spiel- und Fitnessgeräte, Reinigung, Pflege der
                Pflanzen und Leerung der Abfalleimer. Durch langlebige Materialien bleibt
                der Unterhalt überschaubar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WIRTSCHAFT */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="text-sm font-medium text-leaf uppercase tracking-widest">05 · Wirtschaftliche Überlegungen</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
                Grobe Kostenschätzung.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Mögliche Finanzierung: Gemeinde, regionale Sponsoren, Stiftungen, Banken
                oder Unternehmen. Der langfristige Nutzen ist hoch, weil der Park das
                Quartier attraktiver macht und vielen Menschen gleichzeitig dient.
              </p>
              <div className="mt-8 rounded-2xl bg-primary text-primary-foreground p-6 flex items-center gap-4">
                <Coins className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm opacity-80">Total grob</p>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
                    CHF 330'000 – 540'000
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-3xl border border-border overflow-hidden">
                {kosten.map((k, i) => (
                  <div
                    key={k.bereich}
                    className={`flex items-center justify-between p-5 md:p-6 ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/40"
                    }`}
                  >
                    <span className="text-foreground font-medium pr-4">{k.bereich}</span>
                    <span className="text-leaf font-semibold whitespace-nowrap">{k.kosten}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUTZEN */}
      <section id="nutzen" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">06 · Gesellschaftlicher Nutzen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              Mehrwert für Quartier, Region und Gesellschaft.
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
              Der RiverPark fördert Bewegung, Gesundheit, Naturerlebnis und soziale
              Kontakte. Besonders ältere Menschen profitieren – sicher spazieren, leicht
              bewegen, andere treffen.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Mehr Gemeinschaft", d: "im Quartier und weniger Einsamkeit." },
              { t: "Mehr Aufenthaltsqualität", d: "für Familien, Jugendliche, Erwachsene und ältere Menschen." },
              { t: "Nachhaltigkeit", d: "einheimische Pflanzen, robuste Materialien, wenig versiegelte Fläche." },
              { t: "Attraktiver Ort", d: "für Zuchwil und die ganze Region." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-primary-foreground/5 backdrop-blur p-6 border border-primary-foreground/10">
                <Leaf className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold" style={{ fontFamily: "Fraunces, serif" }}>{b.t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              Warum überzeugt das die Jury?
            </h3>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { name: "Jérôme Baumann", text: "Die Idee ist realistisch, in Etappen baubar und hat ein gutes Kosten-Nutzen-Verhältnis." },
                { name: "Alice Hollenstein", text: "Der Raum wird sinnvoll genutzt und Begegnungen zwischen Menschen werden gefördert." },
                { name: "Claudia Müller", text: "Das Quartier, die Region und die Gesellschaft profitieren langfristig." },
              ].map((j) => (
                <div key={j.name} className="rounded-2xl border border-primary-foreground/15 p-6">
                  <p className="text-primary-foreground/85 italic">„{j.text}"</p>
                  <p className="mt-4 text-sm text-accent font-medium">— {j.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-leaf" />
            <span>RiverPark Zuchwil – Konzept RiverLoop</span>
          </div>
          <p>Konzept von Serge, Fabio & Kristijan</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
