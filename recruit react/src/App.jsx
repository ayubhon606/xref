import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Why Xref</div>

        <nav>
          <a href="#">Solutions</a>
          <a href="#">Platform</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </nav>

        <div className="navRight">
          <a href="#">Sign in</a>
          <button>Request a demo</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroContent">
          <h1>
            Recruit, retain and
            <br />
            remember your people
          </h1>

          <p>
            Simplify your talent journey and make confident,
            people-focused decisions with Xref.
          </p>

          <div className="buttons">
            <button className="primaryBtn">
              Get started for free
            </button>

            <button className="secondaryBtn">
              Request a demo
            </button>
          </div>
        </div>
      </section>
      <section className="two">
        <div className="two-text">
          <div className="first-text">
            <p>Itroducing Xref</p>
            <h2>Get feedback <br /> across the entire <br /> talent journey </h2>
          </div>

          <div className="second-text">
            <p>Simple</p>
            <h4>Save time: Create and send a survey in little as 30 seconds. Feedback is <br /> compiled in easy to understand graphs for actionally insights </h4>
            <p>Convenient</p>
            <h4>Reduce admin: Surveys can be created and completed anywhere, any time, on any <br /> device. Let automation do the rest.</h4>
            <p>Secure</p>
            <h4>Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your <br /> data is kept safe and secure.</h4>
          </div>
        </div>

        <section className="services-section">
          <div className="services-container">

            <div className="service-card">
              <div className="service-icon icon-one">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="service-content">
                <h3>Reference</h3>
                <h2>
                  <span>Recruit</span>only the best
                  validated talent.
                </h2>
                <p>
                  Reduce time to hire and secure top talent fast.
                  Make informed, compliant hiring decisions with
                  Xref’s automated reference checking software.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon icon-two">
                <span></span>
              </div>

              <div className="service-content">
                <h3>
                  Pulse <small>Coming soon</small>
                </h3>
                <h2>
                  <span>Retain</span> your people and
                  make meaningful
                </h2>
                <p>
                  Want the secret to reduce attrition and
                  understand what metrics your organisation
                  performs well at or can improve upon?
                  Conduct a Pulse Survey.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon icon-three">
                <span></span>
              </div>

              <div className="service-content">
                <h3>
                  Exits <small className="new-label">New</small>
                </h3>
                <h2>
                  <span>Remember</span>
                </h2>
                <p>
                  Collect, analyse and measure feedback from
                  departing employees. Reduce attrition and
                  improve retention over time by collecting
                  consistent data to improve organisational
                  performance.
                </p>
              </div>
            </div>

          </div>
        </section>
        
      </section>
      <section className="three">

    <section className="platforma">
      <p className="platform-label">Platform</p>

      <h1>Automating your people journey</h1>

      <img
        src="./assets/img//spisokrasm.png"
        alt="Dashboard"
        className="platform-dashboard"
      />
    </section>
    <section className="features">
      <div className="feature">
        <h2>Survey builder</h2>
        <p>
          Create compliant, non-bias surveys in
          seconds. Choose a Reference or Exit
          Survey template or build your own
          from a selection of HR-approved,
          compliant, non-bias questions.
        </p>
        <a href="#">Learn more</a>
      </div>

      <div className="feature">
        <h2>Automated requests</h2>
        <p>
          Receive feedback faster with
          automated requests. Save time and
          reduce manual, repetitive tasks
          with automated survey requests,
          easily accessible all in one place.
        </p>
        <a href="#">Learn more</a>
      </div>

      <div className="feature">
        <h2>People records</h2>
        <p>
          Build strong talent relationships
          with centralised people records.
          Person-specific feedback is stored
          in one place to easily recruit, retain
          and remember talent.
        </p>
        <a href="#">Learn more</a>
      </div>

      <div className="feature">
        <h2>Insights</h2>
        <p>
          Know your next move with people
          and organisational insights. From
          an aggregated overview of data
          to detailed feedback, find the
          insights you need to make
          confident business decisions.
        </p>
        <a href="#">Learn more</a>
      </div>
    </section>
    <section className="trust-section">
      <div className="trust-banner">
        <div className="trust-text">
          <p>Additional checks</p>
          <h1>
            Connecting you to the
            <br />
            world of digital trust
          </h1>

          <p className="trust-description">
            As a growing community of global checking vendors,
            Trust Marketplace is an aggregator for enhanced due
            diligence in the online trust environment.
          </p>

          <a href="#" className="visit-button">
            Visit website
          </a>
        </div>

        <div className="trust-image">
          <img
            src="./assets/img/3-rasm.png"
            alt="Additional checks dashboard"
          />
          <div className="checks-badge">
            <strong>3</strong>
            <span>Checks added</span>
          </div>
        </div>
      </div>

      <div className="trust-cards">
        <div className="trust-card">
          <h2>Security and compliance</h2>
          <p>
            We lead with a security-first mindset, a robust
            infrastructure, and a compliant operating environment.
          </p>
          <a href="#">Learn more</a>
        </div>

        <div className="trust-card">
          <h2>Integrations</h2>
          <p>
            Integrate Xref with your everyday tools for simplified
            people management within a single platform.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </section>

    <section className="info-cards">
      <div className="info-card">
        <h2>Security and compliance</h2>

        <p>
          We lead with a security-first mindset, a robust
          infrastructure, and a compliant operating environment.
        </p>

        <a href="#">Learn more</a>
      </div>

      <div className="info-card">
        <h2>Integrations</h2>

        <p>
          Integrate Xref with your everyday tools for simplified
          people management within a single platform.
        </p>

        <a href="#">Learn more</a>
      </div>
    </section>

      </section>
      <section className="four">

    <section className="teams">
      <div className="teams-left">
        <p className="teams-label">For teams</p>
        <h1>Fits seamlessly into<br />your ecosystem</h1>

        <div className="team-item">
          <h3>Talent acquisition</h3>
          <p>
            In a fast-paced market, efficiency and trust are essential
            for Talent Acquisition. Data-driven insights can help
            confident hiring.
          </p>
          <a href="#">Learn more</a>
        </div>

        <div className="team-item">
          <h3>People and culture</h3>
          <p>
            In a fast-paced, people-driven market, recruiting and
            retaining talent is a challenge. Data-driven feedback is
            vital to recruit, retain and remember top talent.
          </p>
          <a href="#">Learn more</a>
          <p>
            Unbiased, efficient hiring is imperative for staffing and
            recruitment firms. Fast, data-driven candidate insights
            can help.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="teams-right">
        <img src="./assets/img/qizil-soch apa.png" alt="Team member" />
      </div>
    </section>

    <section className="industries">
      <div className="industries-image">
        <img src="./assets/img/qora-apa.png" alt="Industry professional" />
      </div>

      <div className="industries-content">
        <p className="industries-label">For industries</p>

        <h1>
          Tailored to the unique
          <br />
          needs of your industry
        </h1>

        <p className="industries-description">
          At Xref, we're people-focused, so no matter what industry
          you're in, we cater to your unique needs to provide you
          with one source of talent truth.
        </p>

        <div className="industries-list">
          {industries.map((item) => (
            <a href="#" className="industry-link" key={item}>
              <span>{item}</span>
              <span className="industry-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
      </section>
      
      <section className="five">

    <section className="testimonials">
      <div className="testimonials-heading">
        <p>What our customers say</p>
        <h1>Trusted by the companies you trust</h1>
      </div>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <h2>
            How Westpac benefit from
            <br />
            Xref’s tailored service
          </h2>
          <a href="#">Learn more</a>
        </div>

        <div className="testimonial-card">
          <h2>
            Getting to know
            <br />
            candidates with Xref
          </h2>
          <a href="#">Learn more</a>
        </div>

        <div className="testimonial-card">
          <h2>
            Enjoying Fast, Effective
            <br />
            and Accurate Results
          </h2>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="testimonial-bottom">
        <div className="review-card">
          <div className="review-left">
            <h2>
              Over <span>200</span>
            </h2>

            <p>
              User reviews have proven to outperform any other
              assessments in the consumer world. That’s why
              we’re proud of what our reviewers have to say.
            </p>

            <a href="#">Why users love us</a>
          </div>

          <div className="review-right">
            <div className="rating">
              4.7
              <small>out of 5</small>
            </div>

            <p><span>9.4</span> Ease of use</p>
            <p><span>9.3</span> Quality of support</p>
            <p><span>9.3</span> Ease of setup</p>
          </div>
        </div>

        <div className="leading-card">
          <h2>Leading the pack</h2>

          <div className="leading-columns">
            <div>
              <h3>Capterra</h3>
              <p>93 reviews as of 7/10/2022</p>
            </div>

            <div>
              <h3>Google</h3>
              <p>744 reviews as of 7/10/2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      </section>
      <div className="six">
 
    <footer className="footer">
      <div className="footer-hero">
        <h1>
          <span>Recruit, retain</span> and
          <br />
          <span>remember</span> talent with Xref
        </h1>

        <p>
          Uncover data-driven, actionable insights with automated
          reference and exit surveys.
        </p>

        <a href="#" className="footer-button">
          Get started
        </a>
      </div>

      <div className="footer-links">
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>

            {column.links.map((link) => (
              <a href="#" key={link}>
                {link}
                {link === "Pulse" && (
                  <small>Coming soon</small>
                )}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>©2022 Xref</span>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <span>
          13/13 Hickson Road, Dawes Point, Sydney, NSW 2000, Australia
        </span>
      </div>
    </footer>

      </div>
    </div>

  );
}

export default App;