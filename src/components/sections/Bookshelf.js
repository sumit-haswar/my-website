import React from 'react';

import { Section, Container, Title } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const BOOKS = [
  {
    title: 'The Man who loved only Numbers',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'The Man who knew Infinity',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'A Mathematician\'s Apology',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Man\'s Search for Meaning',
    content: () => (
      <>
        ...
      </>
    ),
  },
  // {
  //   title: 'To Kill a Mockingbird',
  //   content: () => (
  //     <>
  //       Do not build a website with last decade’s tech. The future of the web is
  //       mobile, JavaScript and APIs—the{` `}
  //       <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
  //       Every website is a web app and every web app is a website. Gatsby.js is
  //       the universal JavaScript framework you’ve been waiting for.
  //     </>
  //   ),
  // },
  {
    title: 'Of mice and men',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Cat\'s Cradle',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Hyperion Series',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Do Androids Dream Of Electric Sheep',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'One up on Wall Street',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'The Big Short',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'The little book that beats the Market',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Value Investing: From Graham to Buffett and beyond',
    content: () => (
      <>
        ...
      </>
    ),
  },
  {
    title: 'The Essays of Warren Buffett: Lessons for Corporate America',
      content: () => (
    <>
      ...
    </>
  ),
  },
];

const Bookshelf = () => (
  <Section id="faq">
    <Title>
      <h2 style={{ marginBottom: 10 }}>My bookshelf</h2>
    </Title>
    <Container>
      {/*<h3 style={{ marginBottom: 10 }}>My bookshelf</h3>*/}
      <div>
        {BOOKS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Bookshelf;
