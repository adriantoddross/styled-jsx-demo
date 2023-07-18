"use client";

export default function Home() {
  return (
    <main>
      <header>
        <div>Logo</div>

        <nav>
          <ul>
            <li>Product</li>

            <li>Learning Center</li>

            <li>About</li>

            <li>Pricing</li>

            <li>Watch Demo</li>
          </ul>
        </nav>

        <div>
          <ul>
            <li>Talk to Sales</li>

            <li>My account</li>
          </ul>
        </div>

        <style jsx>
          {`
            header {
              display: flex;
              justify-content: space-between;
            }
            ul {
              display: flex;
              justify-content: space-between;

            }
            nav {
              width: 100vw;
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
