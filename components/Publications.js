import bibtexParse from 'bibtex-parse-js';
import Image from 'next/image';
import { personalInfo } from '@/website.config';
import { CustomMDX } from '@/components/mdx';

function authorProcess(authorsStr, name) {
  return authorsStr.split(/\s+and\s+/).map((author) => {
    author = author.trim().split(', ').reverse().join(' ').trim();
    return author === name ? `**${name}**` : author;
  }).join(', ');
}

export default function Publications({ bibtex }) {
  const parsed = bibtexParse.toJSON(bibtex);

  return (
    <ol className="publication-list" role="list">
      {parsed.map((item, index) => {
        const entry = item.entryTags;
        const processedAuthors = authorProcess(entry.author, personalInfo.name);
        const venue = (entry.journal || entry.booktitle || '').replace(/{|}/g, '');

        return (
          <li key={item.citationKey} className="publication-row">
            <span className="publication-number" aria-hidden="true">{index + 1}.</span>
            <div className="publication-details">
              <h3 className="publication-title">
                {entry.url ? (
                  <a href={entry.url}>{entry.title.replace(/{|}/g, '')}</a>
                ) : entry.title.replace(/{|}/g, '')}
              </h3>
              <div className="publication-authors">
                <CustomMDX source={processedAuthors} />
              </div>
              {(venue || entry.conference) && (
                <p className="publication-venue">
                  {venue}{venue && entry.conference ? ' ' : ''}
                  {entry.conference && <span className="publication-conference">{entry.conference}</span>}
                </p>
              )}
              {entry.description && (
                <div className="publication-links">
                  <CustomMDX source={entry.description} />
                </div>
              )}
              {entry.award && (
                <p className="publication-award">
                  <Image
                    src={entry.award === 'Honorable Mention' ? '/honor.jpg' : '/best.jpg'}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span>{entry.award}</span>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
