// projects/lumi.jsx
const { useEffect } = React;

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}
function Kpi({ value, label }) {
  return (
    <div className="kpi-card">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <section id={id} className="cs-section">
      <h2 className="cs-h2">{title}</h2>
      <div className="cs-content">{children}</div>
    </section>
  );
}
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

function LumiCaseStudy() {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="cs-wrap">
      {/* Header / Hero */}
      <header className="cs-header">
        <a href="../index.html" className="cs-back">← Back to portfolio</a>
        <h1 className="cs-h1 gradient-text">LUMI Restaurant — UX/UI Case Study</h1>
        <p className="cs-sub">Concept project · Role: UX/UI · Duration: ~2–3 weeks (part-time)</p>

        <div className="note-callout">
          <strong>Note:</strong> This is a conceptual project created to demonstrate an end-to-end UX/UI process.
          Research and testing results are <em>simulated</em> for learning purposes.
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge>Figma</Badge>
          <Badge>UX Process</Badge>
          <Badge>Responsive</Badge>
          <Badge>Prototype</Badge>
        </div>

        <div className="kpi-grid mt-6">
          <Kpi value="≥ 70%" label="Reservation completion" />
          <Kpi value="≤ 10s" label="Time to find menu" />
          <Kpi value="≥ 80" label="SUS usability score" />
        </div>

        <AnchorNav />
      </header>

      {/* 01 Context */}
      <Section id="context" title="01 Context">
        <p><strong>Scenario.</strong> LUMI is a contemporary restaurant in <strong>Porto</strong> focused on seasonal ingredients and a refined dining experience. The website needs to <strong>drive reservations</strong>, present an up-to-date <strong>menu with prices</strong>, and communicate the brand’s quality through imagery and reviews.</p>

        <div className="card">
          <h3 className="card-title">Client request</h3>
          <ul>
            <li>Create an <strong>elegant and functional homepage</strong> with immediate access to booking.</li>
            <li>Reinforce credibility with <strong>short, authentic reviews</strong> and a concise brand story.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">User goals</h4>
            <ul>
              <li>Find <strong>menu, prices, and restaurant photos</strong>.</li>
              <li><strong>Book a table</strong> in 2–3 steps.</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Constraints & assumptions</h4>
            <ul>
              <li>No real booking system integration (prototype only).</li>
              <li>Menu items & photography are placeholder quality (not final).</li>
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
          <li><strong>Discovery:</strong> competitive scan, 5 simulated interviews, proto-personas, journeys.</li>
          <li><strong>Definition:</strong> problem statement, HMW, MoSCoW requirements, success criteria.</li>
          <li><strong>Ideation:</strong> Sitemap, user flows, low-fi wireframes.</li>
          <li><strong>Prototype:</strong> UI kit, hi-fi screens (homepage), clickable prototype.</li>
          <li><strong>Validation:</strong> 6 usability tests (simulated), SUS/TCR/time metrics, iterations.</li>
        </ul>
      </Section>

      {/* 03 Discovery */}
      <Section id="discovery" title="03 Discovery">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">
            <h4 className="card-sub">Competitive patterns</h4>
            <ul>
              <li>Persistent <strong>Reserve</strong> CTA in header.</li>
              <li>Menu in <strong>HTML</strong> (not PDF) with visible pricing.</li>
              <li>Hours & location shown in <strong>footer</strong>.</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Interview insights (n=5, simulated)</h4>
            <ul>
              <li>“I need <strong>prices</strong> before booking.”</li>
              <li>“If I don’t see <strong>Reserve</strong> in 5 seconds, I leave.”</li>
              <li>“<strong>PDF menus on mobile</strong> are painful.”</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Proto-personas</h4>
            <ul>
              <li><strong>Planner Foodie</strong> (28–40)</li>
              <li><strong>Spontaneous Couple</strong> (25–35)</li>
              <li><strong>Lunch Executive</strong> (30–50)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 04 Problem / Scope */}
      <Section id="scope" title="04 Problem / Scope">
        <p><strong>Problem statement.</strong> Visitors struggle to quickly access critical information (<strong>menu, prices, contacts</strong>) and to book smoothly on mobile.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">How Might We…</h4>
            <ul>
              <li>make the first visit self-explanatory?</li>
              <li>enable booking in under 1 minute?</li>
              <li>present the menu accessibly with clear pricing?</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Requirements (MoSCoW)</h4>
            <ul>
              <li><strong>Must:</strong> Reserve CTA; HTML menu with prices; contacts/hours; reviews; gallery.</li>
              <li><strong>Should:</strong> inline booking form; value props; concise “Our Story”.</li>
              <li><strong>Won’t (now):</strong> online payments; delivery.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 05 Ideation */}
      <Section id="ideation" title="05 Ideation">
        <div className="card">
          <h4 className="card-sub">Information Architecture</h4>
          <ul>
            <li>Home (hero, inline booking, featured menu, value props, reviews, gallery, story, footer)</li>
            <li>Menu (list with prices)</li>
            <li>Reserve (inline booking form + dedicated page)</li>
            <li>Contact (redundant info in header & footer)</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="card-sub">User flows</h4>
            <ul>
              <li><em>Reserve:</em> Hero CTA → inline form → confirmation</li>
              <li><em>Explore menu:</em> Featured items → full menu</li>
              <li><em>Credibility:</em> Reviews + Story → decision to book</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="card-sub">Wireframes (low-fi)</h4>
            <p>Box-only layouts prioritising Reserve and Menu.</p>
            {/* Replace with your assets */}
            <img src="../assets/lumi-wire-1.png" alt="LUMI wireframe 1"/>
            <img src="../assets/lumi-wire-2.png" alt="LUMI wireframe 2"/>
          </div>
        </div>

        <div className="card mt-4">
          <h4 className="card-sub">UI explorations</h4>
          <ul>
            <li>Dark, refined palette with luminous accents.</li>
            <li>Typographic contrast: <strong>Playfair Display</strong> (headings) + <strong>Montserrat</strong> (body).</li>
            <li>Photography highlighting dishes and ambience.</li>
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
              <li>1 — Reserve from the home inline form</li>
              <li>2 — Find the price of the risotto</li>
              <li>3 — Find the opening hours</li>
            </ul>
            <p className="mt-2">
              <strong>Metrics collected:</strong> TCR (Task Completion Rate), time per task, and SUS (System Usability Scale).
            </p>
            <p>
              <strong>Results:</strong> TCR <em>83% / 100% / 100%</em>; median time <em>58s / 7s / 6s</em>; SUS <em>82</em>.
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
            <p>No specific UI iterations were applied in this conceptual pass; focus was on documenting the baseline experience and process.</p>
          </div>
        </div>
      </Section>

      {/* 07 Results */}
      <Section id="results" title="07 Results">
  <div className="card mb-6">
    <h4 className="card-sub">Design decisions reflected on the homepage</h4>
    <ul>
      <li><strong>Hero + CTAs:</strong> immediate Reserve/Menu access reduces abandonment.</li>
      <li><strong>Inline booking:</strong> fewer steps → higher completion.</li>
      <li><strong>Menu with prices:</strong> no PDFs; early transparency.</li>
      <li><strong>Value props + reviews:</strong> quick trust building.</li>
      <li><strong>Gallery + Story:</strong> emotional context for the brand.</li>
      <li><strong>Footer contacts/hours:</strong> redundancy prevents frustration.</li>
    </ul>
  </div>

  <div className="mt-6 text-center">
    <h4 className="card-sub mb-4">Final screen (hi-fi)</h4>
    <img
      src="../assets/lumi-home-final.png"
      alt="LUMI final home screen"
      className="mx-auto rounded-xl border border-gray-700 shadow-2xl max-w-5xl"
    />
    <p className="text-gray-400 text-sm mt-2">High-fidelity homepage mockup</p>
  </div>

  <div className="grid md:grid-cols-3 gap-4 mt-8">
    <div className="card"><h4 className="card-sub">Expected impact</h4><p>Booking completed in &lt; 1 minute for most users.</p></div>
    <div className="card"><h4 className="card-sub">Reduced drop-off</h4><p>Faster access to menu and prices on mobile.</p></div>
    <div className="card"><h4 className="card-sub">Brand perception</h4><p>Modern, trustworthy, seasonality-focused.</p></div>
  </div>
</Section>


      {/* 08 Learnings */}
      <Section id="learnings" title="08 Learnings">
        <ul>
          <li><strong>Clarity beats aesthetics</strong> for conversion-critical actions.</li>
          <li><strong>Mobile-first</strong>: avoid PDFs; use readable cards and visible pricing.</li>
          <li><strong>Social proof</strong> works best as short, visible testimonials.</li>
          <li><strong>Narrative + function</strong>: story + value props reinforce trust.</li>
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

ReactDOM.render(<LumiCaseStudy/>, document.getElementById('root'));
