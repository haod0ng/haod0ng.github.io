import React from "react";
import Image from "next/image";

import EPFL from '@/data/experiences/epfl.mdx';
import UwMd from '@/data/experiences/uw.mdx';


export default function ExperienceCard({
  institution,
  role,
  description,
  date,
  img,
  slug
}) {

  let MdFunc = () => <p>{"not found mdx code=113"}</p>;
  if (slug === 'epfl') {
    MdFunc = EPFL;
  } else if (slug === 'uw') {
    MdFunc = UwMd;
  }

  return (
    <article className="experience-row" aria-labelledby={`experience-${slug}`}>
      <Image src={img} alt={`${institution} logo`} width={48} height={48} className="experience-logo" />
      <div className="experience-details">
        <div className="experience-heading">
          <h3 id={`experience-${slug}`} className="experience-institution">{institution}</h3>
          <p className="experience-date">{date}</p>
        </div>
        <p className="experience-role">{role}</p>
        <div className="experience-description">
          <MdFunc />
        </div>
      </div>
    </article>
  );
}
