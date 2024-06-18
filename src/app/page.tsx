"use client";

import { useEffect } from "react";
import "govuk-frontend/govuk/all.css";
import "/assets/fonts";
import "/assets/images";
import "/assets/manifest.json";

export default function Home() {
  useEffect(() => {
    import("govuk-frontend").then(({ initAll }) => initAll());
  }, []);

  return (
    <div className="govuk-template__body">
      <script>
        {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
      </script>
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="/" className="govuk-header__link govuk-header__link--homepage">
              GOV.UK
            </a>
          </div>
        </div>
      </header>
      <main className="govuk-main-wrapper govuk-width-container" id="main-content" role="main">
        <h1 className="govuk-heading-xl">Welcome to Vote.GOV.UK</h1>
        <p className="govuk-body">Your one-stop destination for all election and voting information.</p>
      </main>
      <footer className="govuk-footer " role="contentinfo">
        <div className="govuk-width-container ">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul className="govuk-footer__inline-list">
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Help</a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Contact</a>
                </li>
              </ul>
              <p className="govuk-footer__meta-custom">
                Built by the Government Digital Service
              </p>
            </div>
          </div>
        </div>
      </footer>
      <script type="module" src="/assets/govuk-frontend.min.js"></script>
      <script type="module">
        {`import { initAll } from '/assets/govuk-frontend.min.js'; initAll();`}
      </script>
    </div>
  );
}