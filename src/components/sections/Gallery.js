import React, { useEffect, useRef, useState } from 'react';
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
  [
    'coastal-cliff-sunset',
    1280,
    615,
    'The sun dropping into the Pacific beyond a rocky coastal cove',
    'California coast',
    '2018',
  ],
  [
    'noe-valley-bakery',
    960,
    1280,
    'The storefront of Noe Valley Bakery on a quiet afternoon',
    'Noe Valley',
    '2021',
  ],
  [
    'pier-seven-night',
    1280,
    960,
    'Pier 7 illuminated at night with the San Francisco skyline beyond',
    'Pier 7',
    '2022',
  ],
  [
    'ocean-beach-pastel-sunset',
    1280,
    960,
    'Pastel clouds above the waves at Ocean Beach after sunset',
    'Ocean Beach',
    '2022',
  ],
  [
    'tawang-signpost',
    960,
    1280,
    'A signpost in Tawang framed by mountains and summer clouds',
    'Tawang, India',
    '2023',
  ],
  [
    'hidden-garden-steps',
    960,
    1280,
    'The flower mosaics of the Hidden Garden Steps climbing a hillside',
    'Hidden Garden Steps',
    '2023',
  ],
  [
    'mountain-valley',
    1280,
    732,
    'Colorful foothills beneath a dark sky across an open valley',
    'Open country',
    '2023',
  ],
  [
    'pink-sky-street',
    1280,
    960,
    'A San Francisco street beneath a sky streaked pink at sunrise',
    'San Francisco',
    '2024',
  ],
  [
    'beach-ball-sunset',
    1280,
    960,
    'A pink and white ball resting in the sand at sunset',
    'Ocean Beach',
    '2024',
  ],
  [
    'ocean-beach-freighter',
    1280,
    960,
    'A cargo ship crossing an orange horizon beyond Ocean Beach',
    'Ocean Beach',
    '2024',
  ],
  [
    'ocean-beach-afterglow',
    1280,
    960,
    'A freighter silhouetted against the last orange light over the Pacific',
    'Ocean Beach',
    '2024',
  ],
  [
    'sutro-tower-winter',
    960,
    1280,
    'Sutro Tower above a hillside dusted white after a winter storm',
    'Sutro Tower',
    '2024',
  ],
  [
    'mount-rainier-meadow',
    1280,
    960,
    'A green meadow and evergreens beneath Mount Rainier',
    'Mount Rainier',
    '2026',
  ],
  [
    'mount-rainier-glaciers',
    1280,
    960,
    'Mount Rainier’s glaciers beneath fast-moving summer clouds',
    'Mount Rainier',
    '2026',
  ],
  [
    'washington-river',
    960,
    1280,
    'A clear river winding past trees and distant mountains in Washington',
    'Pacific Northwest',
    '2026',
  ],
].map(([slug, width, height, alt, place, year]) => ({
  slug,
  width,
  height,
  alt,
  place,
  year,
}));

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const touchStartX = useRef(null);
  const isOpen = activeIndex !== null;
  const activePhoto = isOpen ? PHOTOS[activeIndex] : null;

  const showPrevious = () => {
    setActiveIndex(current =>
      current === null ? null : (current - 1 + PHOTOS.length) % PHOTOS.length
    );
  };

  const showNext = () => {
    setActiveIndex(current =>
      current === null ? null : (current + 1) % PHOTOS.length
    );
  };

  const closeLightbox = () => setActiveIndex(null);

  const openLightbox = index => {
    triggerRef.current = document.activeElement;
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current.focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      } else if (event.key === 'Tab' && lightboxRef.current) {
        const controls = lightboxRef.current.querySelectorAll('button');
        const firstControl = controls[0];
        const lastControl = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (triggerRef.current) triggerRef.current.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex === null) return;

    const adjacentIndexes = [
      (activeIndex - 1 + PHOTOS.length) % PHOTOS.length,
      (activeIndex + 1) % PHOTOS.length,
    ];

    adjacentIndexes.forEach(index => {
      const image = new Image();
      image.src = `/gallery/${PHOTOS[index].slug}-1280.webp`;
    });
  }, [activeIndex]);

  const handleTouchStart = event => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = event => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
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
              <PhotoButton
                type="button"
                onClick={() => openLightbox(index)}
                aria-label={`Open ${photo.alt.toLowerCase()}`}
              >
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
              </PhotoButton>
              <figcaption>
                <span>{photo.place}</span>
                <span>{photo.year}</span>
              </figcaption>
            </figure>
          ))}
        </PhotoGrid>
      </Container>

      {activePhoto && (
        <Lightbox
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          aria-describedby="gallery-lightbox-description"
          onClick={event => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <CloseButton
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo"
          >
            <span aria-hidden="true">×</span>
          </CloseButton>

          <NavigationButton
            type="button"
            $direction="previous"
            onClick={showPrevious}
            aria-label="Previous photo"
          >
            <span aria-hidden="true">←</span>
          </NavigationButton>

          <LightboxFigure>
            <picture>
              <source
                type="image/webp"
                srcSet={`/gallery/${activePhoto.slug}-640.webp 640w, /gallery/${activePhoto.slug}-1280.webp 1280w`}
                sizes="100vw"
              />
              <img
                src={`/gallery/${activePhoto.slug}-1280.jpg`}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                decoding="async"
              />
            </picture>
            <LightboxCaption>
              <div>
                <h2 id="gallery-lightbox-title">{activePhoto.place}</h2>
                <p id="gallery-lightbox-description">{activePhoto.alt}</p>
              </div>
              <span>{activePhoto.year}</span>
            </LightboxCaption>
          </LightboxFigure>

          <NavigationButton
            type="button"
            $direction="next"
            onClick={showNext}
            aria-label="Next photo"
          >
            <span aria-hidden="true">→</span>
          </NavigationButton>
        </Lightbox>
      )}
    </Section>
  );
};

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

const PhotoButton = styled.button`
  width: 100%;
  display: block;
  padding: 0;
  border: 0;
  border-radius: 18px;
  background: transparent;
  cursor: zoom-in;

  &:focus-visible {
    outline: 3px solid ${p => p.theme.color.accent};
    outline-offset: 4px;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 88px 32px;
  background: rgba(10, 10, 9, 0.94);
  backdrop-filter: blur(8px);
  animation: lightbox-fade-in 160ms ease-out;

  @keyframes lightbox-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    align-items: flex-start;
    padding: 64px 12px 84px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const LightboxFigure = styled.figure`
  max-width: min(1280px, calc(100vw - 176px));
  margin: 0;

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: calc(100vh - 180px);
    display: block;
    border-radius: 12px;
    object-fit: contain;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    max-width: calc(100vw - 24px);

    img {
      max-height: calc(100vh - 210px);
      border-radius: 9px;
    }
  }
`;

const LightboxCaption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.68);

  h2 {
    margin: 0 0 5px;
    color: ${p => p.theme.color.surface};
    font-size: 15px;
    line-height: 1.3;
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
  }

  > span {
    flex: 0 0 auto;
    font-size: 12px;
    line-height: 1.6;
  }
`;

const LightboxControl = styled.button`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: ${p => p.theme.color.surface};
  background: rgba(255, 255, 255, 0.08);
  font: inherit;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.15);
  }

  &:focus-visible {
    outline: 3px solid ${p => p.theme.color.accentLight};
    outline-offset: 3px;
  }
`;

const CloseButton = styled(LightboxControl)`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 27px;
  line-height: 1;
`;

const NavigationButton = styled(LightboxControl)`
  position: absolute;
  top: 50%;
  ${p => (p.$direction === 'previous' ? 'left: 22px;' : 'right: 22px;')}
  transform: translateY(-50%);
  font-size: 20px;

  @media (max-width: ${p => p.theme.screen.sm}) {
    top: auto;
    bottom: 18px;
    ${p =>
      p.$direction === 'previous'
        ? 'left: calc(50% - 54px);'
        : 'right: calc(50% - 54px);'}
    transform: none;
  }
`;

export default Gallery;
