import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const PHOTOS = [
  [
    'ocean-beach-sunset',
    1280,
    960,
    'Sunset over Ocean Beach framed by sand dunes',
    'Ocean Beach',
    '2026',
  ],
  [
    'california-coast-panorama',
    1280,
    429,
    'A panoramic view of sunlight across the California coast',
    'California coast',
    '2018',
  ],
  [
    'golden-gate-sunset',
    1280,
    960,
    'The sun setting behind the Golden Gate Bridge',
    'Golden Gate Bridge',
    '2018',
  ],
  [
    'san-francisco-hills',
    960,
    1280,
    'A steep San Francisco street descending toward the bay',
    'San Francisco',
    '2018',
  ],
  [
    'ferry-building',
    960,
    1280,
    'The Ferry Building clock tower in the evening',
    'Ferry Building',
    '2018',
  ],
  [
    'golden-gate-park-sunset',
    1280,
    960,
    'A red sunset reflected on a lake in Golden Gate Park',
    'Golden Gate Park',
    '2019',
  ],
  [
    'golden-gate-shoreline',
    1280,
    960,
    'The Golden Gate Bridge beyond waves breaking on the shoreline',
    'Golden Gate Bridge',
    '2019',
  ],
  [
    'city-park-autumn',
    1280,
    960,
    'Autumn leaves beneath tall trees in a San Francisco park',
    'San Francisco',
    '2019',
  ],
  [
    'lands-end-sunset',
    1280,
    960,
    'Sunset over the water and rocks at Lands End',
    'Lands End',
    '2019',
  ],
  [
    'neighborhood-coffee',
    960,
    1280,
    'A neighborhood coffee window covered in handwritten signs',
    'San Francisco',
    '2021',
  ],
  [
    'dutch-windmill-tulips',
    960,
    1280,
    'The Dutch Windmill rising behind a garden of colorful tulips',
    'Golden Gate Park',
    '2021',
  ],
  [
    'palace-of-fine-arts',
    1280,
    960,
    'The Palace of Fine Arts reflected in its lagoon',
    'Palace of Fine Arts',
    '2021',
  ],
  [
    'ocean-beach-sky',
    1280,
    960,
    'A vivid pink and orange sky above Ocean Beach',
    'Ocean Beach',
    '2021',
  ],
  [
    'tiled-steps',
    960,
    1280,
    'Colorful mosaic steps climbing a San Francisco hillside',
    '16th Avenue',
    '2021',
  ],
  [
    'sutro-tower-city',
    1280,
    960,
    'Sutro Tower rising above the San Francisco skyline',
    'San Francisco',
    '2022',
  ],
  [
    'quiet-cove',
    1280,
    960,
    'Clear blue water meeting a quiet sandy cove',
    'Elsewhere',
    '2024',
  ],
  [
    'golden-gate-headlands',
    1280,
    960,
    'The Golden Gate Bridge seen through fog from the headlands',
    'Marin Headlands',
    '2024',
  ],
  [
    'pacific-shore',
    1280,
    960,
    'Gentle waves reaching a broad sandy shore',
    'By the water',
    '2024',
  ],
  [
    'mission-mural',
    960,
    1280,
    'A building covered in a colorful Mission District mural',
    'Mission District',
    '2024',
  ],
  [
    'manhattan-bridge',
    960,
    1280,
    'The Manhattan Bridge seen between brick buildings in Brooklyn',
    'Brooklyn, New York',
    '2024',
  ],
  [
    'coastal-boardwalk',
    1280,
    960,
    'A wooden boardwalk winding through coastal plants',
    'San Francisco',
    '2024',
  ],
  [
    'muni-sunset',
    1280,
    960,
    'A Muni train traveling through a neighborhood at sunset',
    'San Francisco',
    '2025',
  ],
  [
    'sutro-tower-fog',
    960,
    1280,
    'Sutro Tower disappearing into a bank of fog',
    'Sutro Tower',
    '2025',
  ],
].map(([slug, width, height, alt, place, year]) => ({
  slug,
  width,
  height,
  alt,
  place,
  year,
}));

const Gallery = () => (
  <Section>
    <Container>
      <PageIntro>
        <Kicker>Photo journal</Kicker>
        <h1>Scenes from San Francisco and elsewhere.</h1>
        <p>
          A home for photographs collected over the years — city light, quiet
          corners, long rides, and whatever else made me stop for a moment.
        </p>
      </PageIntro>

      <PhotoGrid>
        {PHOTOS.map((photo, index) => (
          <figure key={photo.slug}>
            <picture>
              <source
                type="image/webp"
                srcSet={`/gallery/${photo.slug}-640.webp 640w, /gallery/${photo.slug}-1280.webp 1280w`}
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 50vw, 340px"
              />
              <img
                src={`/gallery/${photo.slug}-1280.jpg`}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
            <figcaption>
              <span>{photo.place}</span>
              <span>{photo.year}</span>
            </figcaption>
          </figure>
        ))}
      </PhotoGrid>
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
  max-width: 760px;
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

const PhotoGrid = styled.div`
  columns: 3 260px;
  column-gap: 14px;

  figure {
    break-inside: avoid;
    margin: 0 0 14px;
  }

  picture {
    display: block;
    overflow: hidden;
    border-radius: 18px;
    background: ${p => p.theme.color.white.dark};
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 300ms ease;
  }

  figure:hover img {
    transform: scale(1.015);
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    padding: 9px 3px;
    color: ${p => p.theme.color.black.lighter};
    font-size: 11px;
  }
`;

export default Gallery;
