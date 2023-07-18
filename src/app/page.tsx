"use client";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar__nav-container">
          <nav className="navbar__link-container">

            <ul>
              <li>Wistia</li>

              <li className="navbar__link">Product</li>

              <li className="navbar__link">Learning Center</li>

              <li className="navbar__link">About</li>

              <li className="navbar__link">Pricing</li>

              <li className="navbar__link">Watch Demo</li>
            </ul>
          </nav>

          <nav className="navbar__link-container">
            <ul>
              <li className="navbar__link navbar__link--small">Talk to Sales</li>

              <li><a href="" className="button-secondary navbar__cta">Login</a></li>
              <li><a href="" className="button navbar__cta">Get started</a></li>

            </ul>
          </nav>
        </div>
        <style jsx>
          {`
          .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
              width: 100vw;
              height: 65px;
            }
            .navbar__nav-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              max-width: 1350px;
            }
            .navbar__link-container ul {
              display: flex;
              justify-content: space-between;
              list-style-type: none;
              gap: 16px;
            }
            
            .navbar nav {
            }
          `}
        </style>
      </header>

      <div>
        <a href="/">
          Watch our brand new series, Fix My Steps, for easy hacks to make you
          look and feel better in your next video
        </a>
      </div>

      <div>
        <div>
          <h1>
            The video marketing platform for business</h1>

          <p>Wistia helps marketers create and manage videos, host webinars, generate leads, and measure video performance—all in one place.</p>

          <a href="/">Explore plans</a>
        </div>

        <div>
          <video src="#"></video>
          Video placeholder
        </div>
      </div>
    </main>
  );
}
