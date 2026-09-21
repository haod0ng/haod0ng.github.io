import React from "react";
import SelectedPublicationsSection from "@/components/Publications";
import bibtex from "@/data/bib/Publications.bib";

export const metadata = {
  title: "Publications",
};

export default function Page() {
  return (
    <main id="main-content" className="page-container page-content">
      <h1 className="profile-name">Publications</h1>
      <SelectedPublicationsSection bibtex={bibtex} />
    </main>
  );
}
