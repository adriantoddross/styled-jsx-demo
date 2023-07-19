"use client";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
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
        <style jsx global>
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

            .anchorButton-large {
              min-height: 180px;
            }
            
            @media screen and (max-width: 768px) {
              .navbar__nav-container {
                display: none;
              }
            }
          `}
        </style>
      </nav>

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
                -webkit-transition: background-color 0.25s linear;
              }
              .banner__link {
                color: white;
                text-decoration: none;
              }
            `}
          </style>
        </div>

        <header className="hero">
          <div className="hero__container">
            <div className="hero__description">
              <h1 className="hero__title">
                The video marketing platform for business
              </h1>

              <div>
                <p className="hero__subtitle">
                  Wistia helps marketers create and manage videos, host
                  webinars, generate leads, and measure video performance—all in
                  one place.
                </p>

                <div className="button-row">
                  <a
                    href="/"
                    className="anchorButton anchorButton-large anchorButton-main"
                  >
                    Explore plans
                  </a>
                </div>
              </div>
            </div>

            <div className="hero__video">
              <video src="#"></video>
              Video placeholder
            </div>
          </div>

          <style jsx>
            {`
              .hero {
                background-attachment: scroll;
                background-image: url("https://images.ctfassets.net/j7pfe8y48ry3/5mL7EUkS7jgyPf3i0dixxZ/5cfa3f21b1ddf53ba44e9c549b199414/Home_-_Background_Image_2x.png");
                background-position: center bottom;
                background-size: cover;
                background-repeat: repeat;
              }

              .hero__container {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-column-gap: clamp(1rem, 13vw, 120px);
                margin: 0 auto;
                max-width: 1300px;
              }

              .hero__title {
                font-size: 3.4rem;
                padding-top: 1rem;
                line-height: 1.25;
              }
              .hero__subtitle {
                font-size: 1.5rem;
                padding-top: 1rem;
                line-height: 1.25;
              }

              @media screen and (max-width: 768px) {
                .hero__container {
                  display: block;
                  padding: 25px;
                }

                .hero__video {
                  display: none;
                }

                .hero__title {
                  font-size: 2.25rem;
                }
                .hero__subtitle {
                  font-size: 1.25rem;
                }
              }
            `}
          </style>
        </header>
      </div>
    </main>
  );
}
