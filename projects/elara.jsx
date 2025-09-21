// projects/elara.jsx
const { useEffect } = React;

const Badge = ({ children }) => <span className="badge">{children}</span>;
const Kpi = ({ value, label }) => (
  <div className="kpi-card">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
const Section = ({ id, title, children }) => (
  <section id={id} className="cs-section">
    <h2 className="cs-h2">{title}</h2>
    <div className="cs-content">{children}</div>
  </section>
);
function AnchorNav() {
  const items = [
    ['context', '01 Context'],
    ['plan', '02 Plan'],
    ['discovery', '03 Discovery'],
    ['scope', '04 Problem / Scope'],
    ['ideation', '05 Ideation'],
    ['validation', '06 Validation'],
    ['results', '07 Results'],
    ['learnings', '08 Learnings'],
  ];
  return (
    <nav className="anchor-nav glass-effect">
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} className="anchor-link">{label}</a>
      ))}
    </nav>
  );
}

function ElaraCaseStudy() {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="cs-wrap">
      <header className="cs-header">
        <a href="../index.html" className="cs-back">← Back to portfolio</a>
        <h1 className="cs-h1 gradient-text">Elara Lace — UX/UI Case Study</h1>
        <p className="cs-sub">Concept project · Role: Brand + UX/UI · Duration: ~2–3 weeks (part-time)</p>

        <div className="note-callout">
          <strong>Note:</strong> Conceptual brand and website, created end-to-end by me (brand, UI kit, and web design).
          Research and testing results are <em>simulated</em> for learning purposes.
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge>Figma</Badge>
          <Badge>UX Process</Badge>
          <Badge>Responsive</Badge>
          <Badge>E-commerce</Badge>
        </div>

        <div className="kpi-grid mt-6">
          <Kpi value="≥ 70%" label="Add-to-cart completion" />
          <Kpi value="≤ 10s" label="Time to find a product" />
          <Kpi value="≥ 80" label="SUS usability score" />
        </div>

        <AnchorNav />
      </header>

      {/* 01 Context */}
      <Section id="context" title="01 Context">
        <p><strong>Scenario.</strong> Elara Lace is a conceptual lingerie brand designed by me from the ground up (identity, tone, visuals). The website should express <strong>sophisticated femininity</strong> while making shopping intuitive: explore collections, view details and sizing, and add to cart with confidence.</p>

        <div className="card">
          <h3 className="card-title">Client request</h3>
          <ul>
            <li>Create a <strong>modern, elegant homepage</strong> that showcases hero photography and the brand story.</li>
            <li>Design clear, <strong>e-commerce-ready layouts</strong> (collection grid, product cards, PDP blocks, and a simple cart CTA).</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">User goals</h4>
            <ul>
              <li>Discover the brand story and browse curated <strong>collections</strong>.</li>
              <li>See <strong>price, size options</strong>, and basic shipping info quickly.</li>
              <li>Add a product to cart in <strong>2–3 steps</strong>.</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Constraints & assumptions</h4>
            <ul>
              <li>No real cart/checkout integration (prototype only).</li>
              <li>Photography and product data are placeholders.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 02 Plan */}
      <Section id="plan" title="02 Plan">
        <p><strong>Framework:</strong> Double Diamond + Jobs To Be Done (JTBD).</p>
        <div className="timeline">
          <div><span>Week 1:</span> Discovery & Definition</div>
          <div><span>Week 2:</span> Ideation & Prototyping</div>
          <div><span>Week 3:</span> Testing, Iterations & Case study write-up</div>
        </div>
        <ul className="mt-3">
          <li><strong>Discovery:</strong> competitive scan (lingerie/e-com), 5 simulated interviews, proto-personas.</li>
          <li><strong>Definition:</strong> problem statement, HMWs, MoSCoW, success criteria.</li>
          <li><strong>Ideation:</strong> IA, sitemap, user flows, low-fi wireframes.</li>
          <li><strong>Prototype:</strong> UI kit, hi-fi screens (homepage/collection/PDP), clickable prototype.</li>
          <li><strong>Validation:</strong> 6 usability tests (simulated), SUS/TCR/time metrics.</li>
        </ul>
      </Section>

      {/* 03 Discovery */}
      <Section id="discovery" title="03 Discovery">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">
            <h4 className="card-sub">Competitive patterns</h4>
            <ul>
              <li>Hero storytelling + collection CTAs.</li>
              <li>Clean product cards with <strong>price</strong> and <strong>quick actions</strong>.</li>
              <li>Accessible <strong>sizing guides</strong> and shipping basics on PDPs.</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Interview insights (n=5, simulated)</h4>
            <ul>
              <li>“I want to <strong>see the price</strong> before clicking too much.”</li>
              <li>“I need a simple <strong>size guide</strong> to feel confident.”</li>
              <li>“A clear <strong>Add to cart</strong> is essential on mobile.”</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Proto-personas</h4>
            <ul>
              <li><strong>Modern Minimalist</strong> (25–35)</li>
              <li><strong>Gift Buyer</strong> (28–45)</li>
              <li><strong>Comfort First</strong> (30–50)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 04 Problem / Scope */}
      <Section id="scope" title="04 Problem / Scope">
        <p><strong>Problem statement.</strong> Visitors need to understand the brand quickly, <strong>find a product fast</strong>, and feel secure choosing <strong>size</strong> and <strong>shipping</strong>, especially on mobile.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">How Might We…</h4>
            <ul>
              <li>communicate brand elegance while keeping shopping straightforward?</li>
              <li>enable add-to-cart in 2–3 steps on mobile?</li>
              <li>surface size/shipping info without cluttering the design?</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Requirements (MoSCoW)</h4>
            <ul>
              <li><strong>Must:</strong> clear hero CTA to collections; visible price on cards; simple PDP with size & add-to-cart.</li>
              <li><strong>Should:</strong> short brand story block; featured collection section; basic shipping note.</li>
              <li><strong>Won’t (now):</strong> real checkout; account system.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 05 Ideation */}
      <Section id="ideation" title="05 Ideation">
        <div className="card">
          <h4 className="card-sub">Information Architecture</h4>
          <ul>
            <li>Home (hero, story, collection highlights, product grid preview, contact)</li>
            <li>Store / Collection (filterable grid)</li>
            <li>PDP (imagery, price, size, add-to-cart, shipping note)</li>
            <li>Contact / Help (email, FAQ)</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">User flows</h4>
            <ul>
              <li><em>Browse to cart:</em> Home → Collection → PDP → Add to cart</li>
              <li><em>Confidence:</em> PDP → Size guide → Back to PDP → Add to cart</li>
              <li><em>Support:</em> Footer → FAQ/Contact</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Wireframes (low-fi)</h4>
            <p>Box-only layouts prioritising clear product cards and a simple PDP.</p>
            {/* Replace with your assets */}
            <img src="../assets/elara-wire-1.png" alt="Elara Lace wireframe 1"/>
            <img src="../assets/elara-wire-2.png" alt="Elara Lace wireframe 2"/>
          </div>
        </div>

        <div className="card mt-4">
          <h4 className="card-sub">UI explorations</h4>
          <ul>
            <li>Soft, warm neutrals with rich burgundy accents.</li>
            <li>Typographic contrast (e.g., elegant serif for headings + clean sans for body).</li>
            <li>Editorial hero photography establishing brand mood.</li>
          </ul>
        </div>
      </Section>

      {/* 06 Validation */}
      <Section id="validation" title="06 Validation">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h4 className="card-sub">Usability test (simulated, n=6)</h4>
            <ul>
              <li><strong>Tasks:</strong></li>
              <li>1 — Add a “Red Lace” product to cart</li>
              <li>2 — Find the size guide</li>
              <li>3 — Find shipping information</li>
            </ul>
            <p className="mt-2">
              <strong>Metrics collected:</strong> TCR (Task Completion Rate), time per task, and SUS (System Usability Scale).
            </p>
            <p>
              <strong>Results:</strong> TCR <em>83% / 100% / 100%</em>; median time <em>60s / 8s / 7s</em>; SUS <em>82</em>.
            </p>
            <div className="card mt-2">
              <h4 className="card-sub">What this means</h4>
              <ul>
                <li><strong>TCR</strong> — % of participants who finished each task successfully.</li>
                <li><strong>Median time</strong> — typical time it took to complete each task.</li>
                <li><strong>SUS</strong> — perceived usability score (0–100). <em>82</em> = “Good / Excellent”.</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h4 className="card-sub">Iterations applied</h4>
            <p>No specific UI iterations were applied in this conceptual pass; focus was on documenting the baseline shopping flow and design system.</p>
          </div>
        </div>
      </Section>

      {/* 07 Results */}
      <Section id="results" title="07 Results">
        <div className="card mb-6">
          <h4 className="card-sub">Design decisions reflected on the website</h4>
          <ul>
            <li><strong>Hero + CTA:</strong> editorial mood + “Explore Collection”.</li>
            <li><strong>Product cards with price:</strong> immediate clarity.</li>
            <li><strong>PDP essentials:</strong> price, size, add-to-cart, shipping note.</li>
            <li><strong>Story + imagery:</strong> elevates brand perception.</li>
            <li><strong>Footer support:</strong> quick access to FAQ/Contact.</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <h4 className="card-sub mb-4">Final screen (hi-fi)</h4>
          {/* Replace with your exported image */}
          <img
            src="../assets/elara-home-final.png"
            alt="Elara Lace final home screen"
            className="mx-auto rounded-xl border border-gray-700 shadow-2xl max-w-5xl"
          />
          <p className="text-gray-400 text-sm mt-2">High-fidelity homepage mockup</p>
        </div>
      </Section>

      {/* 08 Learnings */}
      <Section id="learnings" title="08 Learnings">
        <ul>
          <li><strong>Editorial storytelling</strong> and functional shopping can coexist.</li>
          <li><strong>Mobile-first carts</strong> and visible prices reduce friction.</li>
          <li><strong>Confidence cues</strong> (size/fit/shipping) matter for conversion.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <a className="btn" href="#" onclick="return false">Figma Prototype (coming soon)</a>
          <a className="btn-secondary" href="../index.html">Back to portfolio</a>
        </div>
      </Section>

      <footer className="cs-footer">© 2025 — Elsa Monteiro</footer>
    </main>
  );
}

ReactDOM.render(<ElaraCaseStudy/>, document.getElementById('root'));
