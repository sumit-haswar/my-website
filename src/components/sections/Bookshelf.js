import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const BOOKS = [
  {
    title: 'The Man Who Loved Only Numbers',
    author: 'Paul Hoffman',
    category: 'Biography',
    description:
      'A warm, lively portrait of Paul Erdős — the endlessly itinerant mathematician who treated collaboration and problem-solving as a way of life.',
  },
  {
    title: 'The Man Who Knew Infinity',
    author: 'Robert Kanigel',
    category: 'Biography',
    description:
      'The remarkable story of Srinivasa Ramanujan, his unlikely partnership with G. H. Hardy, and a mathematical gift that crossed cultures and conventions.',
  },
  {
    title: 'A Mathematician’s Apology',
    author: 'G. H. Hardy',
    category: 'Mathematics',
    description:
      'Hardy’s concise reflection on mathematical beauty, creative work, and what makes a life devoted to pure ideas worthwhile.',
  },
  {
    title: 'Man’s Search for Meaning',
    author: 'Viktor E. Frankl',
    category: 'Psychology',
    description:
      'Part memoir and part introduction to logotherapy, this is Frankl’s enduring argument that meaning can help people endure profound suffering.',
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    category: 'Fiction',
    description:
      'A spare, moving story about friendship, dignity, and the fragile dream of a better life during the Great Depression.',
  },
  {
    title: 'Cat’s Cradle',
    author: 'Kurt Vonnegut',
    category: 'Fiction',
    description:
      'A sharp and absurd satire of scientific responsibility, belief, and humanity’s talent for turning clever ideas into existential threats.',
  },
  {
    title: 'The Hyperion Cantos',
    author: 'Dan Simmons',
    category: 'Science fiction',
    description:
      'An ambitious far-future saga that combines pilgrimage tales, artificial intelligence, religion, war, and the mystery of the Shrike.',
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    category: 'Science fiction',
    description:
      'A noir-inflected investigation of empathy and identity in a damaged world where the boundary between human and artificial life is unstable.',
  },
  {
    title: 'One Up on Wall Street',
    author: 'Peter Lynch',
    category: 'Investing',
    description:
      'Lynch explains how ordinary investors can use patient research and everyday observations to recognize promising companies.',
  },
  {
    title: 'The Big Short',
    author: 'Michael Lewis',
    category: 'Finance',
    description:
      'The story of the investors who recognized the instability beneath the U.S. housing market before the 2008 financial crisis.',
  },
  {
    title: 'The Little Book That Beats the Market',
    author: 'Joel Greenblatt',
    category: 'Investing',
    description:
      'An accessible introduction to systematic value investing through Greenblatt’s “magic formula” for finding strong businesses at attractive prices.',
  },
  {
    title: 'Value Investing: From Graham to Buffett and Beyond',
    author: 'Bruce Greenwald et al.',
    category: 'Investing',
    description:
      'A practical, academically grounded guide to valuation, competitive advantage, and the modern lineage of value-investing thought.',
  },
  {
    title: 'The Essays of Warren Buffett',
    author: 'Lawrence A. Cunningham, editor',
    category: 'Investing',
    description:
      'Buffett’s shareholder letters arranged by theme, covering business ownership, capital allocation, governance, and long-term thinking.',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    description:
      'A child’s view of justice, prejudice, and moral courage in a small Alabama town confronting a deeply unequal system.',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    description:
      'A sweeping account of how shared stories, cooperation, and technological change shaped the history of humankind.',
  },
  {
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    category: 'Futures',
    description:
      'An exploration of the ambitions, technologies, and ethical questions that may shape humanity’s next chapter.',
  },
  {
    title:
      'The Varieties of Scientific Experience: A Personal View of the Search for God',
    author: 'Carl Sagan',
    category: 'Science & philosophy',
    description:
      'Sagan considers spirituality, the search for meaning, and what a scientific view of the cosmos can teach us about belief.',
  },
  {
    title: 'The Dragons of Eden',
    author: 'Carl Sagan',
    category: 'Science',
    description:
      'A lively journey through the evolution of human intelligence, connecting neuroscience, anthropology, and speculation.',
  },
  {
    title: 'Shadows of Forgotten Ancestors',
    author: 'Carl Sagan & Ann Druyan',
    category: 'Science',
    description:
      'A wide-ranging story of human origins that traces our behavior and emotions through the long arc of evolution.',
  },
  {
    title: 'Fermat’s Enigma',
    author: 'Simon Singh',
    category: 'Mathematics',
    description:
      'The centuries-long pursuit of Fermat’s Last Theorem, told through the mathematicians, breakthroughs, and setbacks behind its proof.',
  },
  {
    title: 'Stories of Your Life and Others',
    author: 'Ted Chiang',
    category: 'Science fiction',
    description:
      'Eight precise, imaginative stories about language, time, faith, intelligence, and the consequences of truly understanding an idea.',
  },
  {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    category: 'Fiction',
    description:
      'A stark account of young soldiers confronting the physical and psychological devastation of the First World War.',
  },
  {
    title: 'The Money Game',
    author: 'Adam Smith',
    category: 'Finance',
    description:
      'A witty look at markets and the people inside them, exposing the psychology, incentives, and group behavior behind investing.',
  },
  {
    title: 'Liar’s Poker',
    author: 'Michael Lewis',
    category: 'Finance',
    description:
      'A sharp firsthand account of Wall Street’s bond-trading culture during the excesses and transformations of the 1980s.',
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    category: 'Fiction',
    description:
      'Kafka’s unsettling story of alienation, obligation, and identity begins when Gregor Samsa wakes to an impossible transformation.',
  },
  {
    title: 'Surely You’re Joking, Mr. Feynman!',
    author: 'Richard P. Feynman',
    category: 'Memoir',
    description:
      'Curious, playful stories from a physicist who approached science, art, puzzles, and everyday life as experiments worth pursuing.',
  },
  {
    title: 'The Witcher Saga',
    author: 'Andrzej Sapkowski',
    category: 'Fantasy series',
    description:
      'Geralt of Rivia’s journey begins in folklore-inspired short stories and grows into a sweeping saga of destiny, war, and found family.',
    volumes: [
      'The Last Wish',
      'Sword of Destiny',
      'Blood of Elves',
      'Time of Contempt',
      'Baptism of Fire',
      'The Tower of Swallows',
      'The Lady of the Lake',
    ],
  },
].map(book => ({
  ...book,
  url: `https://books.google.com/books?q=${encodeURIComponent(
    `${book.title} ${book.author}`
  )}`,
}));

const BOOK_GROUPS = [
  {
    title: 'Science, mathematics & ideas',
    books: [
      'Fermat’s Enigma',
      'The Varieties of Scientific Experience: A Personal View of the Search for God',
      'The Dragons of Eden',
      'The Man Who Knew Infinity',
      'Shadows of Forgotten Ancestors',
      'Surely You’re Joking, Mr. Feynman!',
      'A Mathematician’s Apology',
      'The Man Who Loved Only Numbers',
    ],
  },
  {
    title: 'Human nature & history',
    books: ['Sapiens', 'Man’s Search for Meaning', 'Homo Deus'],
  },
  {
    title: 'Fiction & imagined worlds',
    books: [
      'Stories of Your Life and Others',
      'To Kill a Mockingbird',
      'Do Androids Dream of Electric Sheep?',
      'Of Mice and Men',
      'The Hyperion Cantos',
      'The Metamorphosis',
      'Cat’s Cradle',
      'All Quiet on the Western Front',
      'The Witcher Saga',
    ],
  },
  {
    title: 'Markets & investing',
    books: [
      'The Money Game',
      'Liar’s Poker',
      'The Big Short',
      'One Up on Wall Street',
      'The Little Book That Beats the Market',
      'Value Investing: From Graham to Buffett and Beyond',
      'The Essays of Warren Buffett',
    ],
  },
].map(group => ({
  ...group,
  books: group.books.map(title => BOOKS.find(book => book.title === title)),
}));

const Bookshelf = () => (
  <Section>
    <Container>
      <PageIntro>
        <Kicker>Bookshelf</Kicker>
        <h1>Books I keep thinking about.</h1>
        <p>
          A shelf shaped by curiosity—stories about people and imagined worlds,
          ideas from science and mathematics, and lessons from history and
          markets. Each book includes a short note and a path to learn more.
        </p>
      </PageIntro>

      <BookGroups>
        {BOOK_GROUPS.map(group => (
          <BookGroup key={group.title}>
            <GroupTitle>{group.title}</GroupTitle>
            <Shelf>
              {group.books.map(book => (
                <Book
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  $isSeries={Boolean(book.volumes)}
                >
                  <BookContent>
                    <Meta>
                      <span>{book.category}</span>
                      <span>{book.author}</span>
                    </Meta>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    {book.volumes && (
                      <VolumeList aria-label="Books in The Witcher Saga">
                        {book.volumes.map((volume, volumeIndex) => (
                          <li key={volume}>
                            <span>
                              {String(volumeIndex + 1).padStart(2, '0')}
                            </span>
                            {volume}
                          </li>
                        ))}
                      </VolumeList>
                    )}
                    <LearnMore>
                      Explore {book.volumes ? 'the series' : 'the book'}{' '}
                      <span>↗</span>
                    </LearnMore>
                  </BookContent>
                </Book>
              ))}
            </Shelf>
          </BookGroup>
        ))}
      </BookGroups>
    </Container>
  </Section>
);

const Kicker = styled.p`
  margin-bottom: 18px;
  color: ${p => p.theme.color.accent};
  font-size: 12px;
  line-height: 1.4;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const PageIntro = styled.header`
  max-width: 720px;
  margin: 20px 0 64px;
  h1 {
    font-size: clamp(42px, 6vw, 68px);
    line-height: 1;
  }
  > p {
    max-width: 620px;
    margin-top: 24px;
    font-size: 17px;
    line-height: 1.7;
  }
`;

const BookGroups = styled.div`
  display: grid;
  gap: 72px;

  @media (max-width: ${p => p.theme.screen.sm}) {
    gap: 56px;
  }
`;

const BookGroup = styled.section``;

const GroupTitle = styled.h2`
  margin: 0 0 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(22, 22, 20, 0.12);
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.2;
`;

const Shelf = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Book = styled.a`
  min-height: 250px;
  grid-column: ${p => (p.$isSeries ? '1 / -1' : 'auto')};
  display: block;
  padding: 26px;
  border: 1px solid rgba(22, 22, 20, 0.1);
  border-radius: 22px;
  color: ${p => p.theme.color.black.regular};
  background: ${p => p.theme.color.card};
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:nth-child(4n + 2),
  &:nth-child(4n + 3) {
    background: ${p => p.theme.color.primary};
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 42px rgba(22, 22, 20, 0.08);
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    min-height: 0;
  }
`;

const VolumeList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 10px 24px;
  margin: 24px 0 8px;
  padding: 20px 0 0;
  border-top: 1px solid rgba(22, 22, 20, 0.1);
  list-style: none;

  li {
    display: flex;
    gap: 10px;
    font-size: 13px;
    line-height: 1.4;
    font-weight: 700;
  }

  span {
    color: ${p => p.theme.color.accent};
    font-size: 10px;
    line-height: 1.8;
    font-weight: 800;
  }
`;

const BookContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 34px 0 16px;
    font-size: 24px;
    line-height: 1.2;
  }
  p {
    font-size: 14px;
    line-height: 1.65;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: ${p => p.theme.color.black.lighter};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  span:first-child {
    color: ${p => p.theme.color.accent};
  }
`;

const LearnMore = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 24px;
  color: ${p => p.theme.color.black.regular};
  font-size: 13px;
  font-weight: 800;
`;

export default Bookshelf;
