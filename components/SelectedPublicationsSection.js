import React from "react";
import Publications from "./Publications";
import bibtex from "../data/bib/SelectedPublications.bib";

export default function SelectedPublicationsSection() {
  return (
    <section className="content-section" aria-labelledby="publications-heading">
      <h2 id="publications-heading" className="section-heading">Selected Publications</h2>
      <Publications bibtex={bibtex} />
    </section>
  );
}
