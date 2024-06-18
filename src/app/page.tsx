"use client";

import React from "react";

export default function Home() {
  return (
    <div>
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <span className="govuk-header__logotype-text">GOV.UK</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="govuk-main-wrapper govuk-width-container" id="main-content" role="main">
        <h1 className="govuk-heading-xl">Welcome to Vote.gov.uk</h1>
        <p className="govuk-body">Your official source for information on elections and voting in the UK.</p>
      </main>

      <footer className="govuk-footer" role="contentinfo">
        <div className="govuk-width-container">
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
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}