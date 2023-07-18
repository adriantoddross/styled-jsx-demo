"use client";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar__nav-container">
          <nav className="navbar__link-container navbar__link-container-main">
            <ul>
              <li>Wistia</li>

              <li className="navbar__link">Product</li>

              <li className="navbar__link">Learning Center</li>

              <li className="navbar__link">About</li>

              <li className="navbar__link">Pricing</li>

              <li className="navbar__link">Watch Demo</li>
            </ul>
          </nav>

          <nav className="navbar__link-container navbar__link-container-ctas">
            <ul>
              <li className="navbar__link navbar__link--small">
                Talk to Sales
              </li>

              <li>
                <a href="" className="anchorButton-secondary anchorButton">
                  Login
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="anchorButton anchorButton-main navbar__cta"
                >
                  Get started
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <style jsx>
          {`
            .navbar {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 65px;
              color: rgb(55, 55, 60);
              {/* padding: 10px; */}
            }

            .navbar__nav-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              max-width: 1350px;
            }

            .navbar__link-container ul {
              display: flex;
              justify-content: space-between;
              list-style-type: none;
              gap: 16px;
            }

            {/* Extract anchorButton links into separate components! */}
            .anchorButton {
              border-radius: 5px;
              font-weight: 500;
              font-size: 15px;
              min-width: 100px;
              height: 40px;
              padding: 13px 23px;
              text-decoration: none;
            }

            .anchorButton-main {
              background-color: blue;
              color: white;
            }

            .anchorButton-secondary {
              border: 1px solid gray;
              color: inherit;
            }
            
          `}
        </style>
      </header>

      <div>
        <div className="banner">
          <a href="/" className="banner__link">
            Watch our brand new series, Fix My Steps, for easy hacks to make you
            look and feel better in your next video.
          </a>
          <style jsx>
            {`
            .banner {
              background-color: #815fe0;
              height: 65px;
              width: 100%;
              display: grid;
              place-items: center;
              padding: 0 10px;
            }
            .banner:hover {
              background-color: #4c3885;
              -webkit-transition:background-color 0.25s linear; 
            }
            .banner__link {
              color: white;
              text-decoration: none;
            }
          `}
          </style>
        </div>

        <div>
          <h1>The video marketing platform for business</h1>

          <p>
            Wistia helps marketers create and manage videos, host webinars,
            generate leads, and measure video performance—all in one place.
          </p>

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
