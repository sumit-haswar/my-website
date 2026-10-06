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
].map(book => ({
  ...book,
  url: `https://books.google.com/books?q=${encodeURIComponent(
    `${book.title} ${book.author}`
  )}`,
}));

const Bookshelf = () => (
  <Section>
    <Container>
      <PageIntro>
        <Kicker>Bookshelf</Kicker>
        <h1>Books I keep thinking about.</h1>
        <p>
          Mathematics and science fiction sit next to psychology and investing.
          Each book below includes a short note and a path to learn more.
        </p>
      </PageIntro>

      <Shelf>
        {BOOKS.map((book, index) => (
          <Book
            key={book.title}
            href={book.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <BookNumber>{String(index + 1).padStart(2, '0')}</BookNumber>
            <BookContent>
              <Meta>
                <span>{book.category}</span>
                <span>{book.author}</span>
              </Meta>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <LearnMore>
                Explore the book <span>↗</span>
              </LearnMore>
            </BookContent>
          </Book>
        ))}
      </Shelf>
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

const Shelf = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Book = styled.a`
  min-height: 330px;
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 18px;
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
`;

const BookNumber = styled.span`
  color: ${p => p.theme.color.black.lighter};
  font-size: 11px;
  font-weight: 800;
`;

const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
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
