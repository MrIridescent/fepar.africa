"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "./MotionSystem";
import { SankofaSymbol, GyeNyameSymbol, DwennimmenSymbol } from "./AfricanMotifs";

// ===========================================
// PAN-AFRICAN THOUGHT LEADERS
// ===========================================

interface Quote {
  id: number;
  text: string;
  author: string;
  affiliation: string;
  category: string;
  source: string;
  year: string;
  motif: "sankofa" | "gyeNyame" | "dwennimmen";
}

const QUOTES: Quote[] = [
  {
    id: 1,
    text: "Each generation must, out of relative obscurity, discover its mission, fulfil it, or betray it.",
    author: "Frantz Fanon",
    affiliation: "Philosopher & writer",
    category: "Mission",
    source: "The Wretched of the Earth",
    year: "1961",
    motif: "gyeNyame",
  },
  {
    id: 2,
    text: "Throughout history, it has been the inaction of those who could have acted, the indifference of those who should have known better, that has made it possible for evil to triumph.",
    author: "Haile Selassie",
    affiliation: "Emperor of Ethiopia",
    category: "Responsibility",
    source: "Address to the United Nations",
    year: "1963",
    motif: "sankofa",
  },
  {
    id: 3,
    text: "The day will come when history will speak. But it will not be the history that will be taught in Brussels, Paris, Washington or the United Nations.",
    author: "Patrice Lumumba",
    affiliation: "Congolese independence leader",
    category: "History",
    source: "Independence Day speech, Léopoldville",
    year: "1960",
    motif: "dwennimmen",
  },
  {
    id: 4,
    text: "The most potent weapon in the hands of the oppressor is the mind of the oppressed.",
    author: "Steve Biko",
    affiliation: "Black Consciousness thinker",
    category: "Consciousness",
    source: "I Write What I Like",
    year: "1978",
    motif: "sankofa",
  },
  {
    id: 5,
    text: "Tell no lies; claim no easy victories.",
    author: "Amílcar Cabral",
    affiliation: "Agronomist & liberation leader",
    category: "Practice",
    source: "Unity and Struggle",
    year: "1979",
    motif: "gyeNyame",
  },
  {
    id: 6,
    text: "We must dare to invent the future.",
    author: "Thomas Sankara",
    affiliation: "Burkinabè revolutionary",
    category: "Future",
    source: "OAU address, Addis Ababa",
    year: "1987",
    motif: "dwennimmen",
  },
  {
    id: 7,
    text: "Until the lions have their own historians, the history of the hunt will always glorify the hunter.",
    author: "Chinua Achebe",
    affiliation: "Nigerian novelist & critic",
    category: "Story",
    source: "The Paris Review interview",
    year: "1988",
    motif: "sankofa",
  },
  {
    id: 8,
    text: "We cannot tire or give up. We owe it to the present and future generations of all species to stand up and walk!",
    author: "Wangari Maathai",
    affiliation: "Environmental leader & Nobel laureate",
    category: "Stewardship",
    source: "Nobel Lecture",
    year: "2004",
    motif: "dwennimmen",
  },
];

const MOTIFS = {
  sankofa: SankofaSymbol,
  gyeNyame: GyeNyameSymbol,
  dwennimmen: DwennimmenSymbol,
};

// ===========================================
// STYLES
// ===========================================

const QuoteStage = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  text-align: left;
  min-width: 0;
  &:focus-visible { outline: 2px solid #F4A800; outline-offset: 8px; }
`;

const QuoteContainer = styled.div`
  position: relative;
  padding: clamp(32px, 5vw, 64px) clamp(24px, 6vw, 76px);
  background: linear-gradient(135deg, rgba(244, 168, 0, 0.12), rgba(30, 35, 24, .78));
  border-left: 4px solid #F4A800;
  border-top: 1px solid rgba(244, 168, 0, .28);
  border-radius: 0 2px 2px 0;
  min-height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: quote-in 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

  @keyframes quote-in {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[8]} ${props => props.theme.spacing[6]};
    min-height: 300px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const QuoteText = styled.p`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(26px, 3.2vw, 48px);
  line-height: 1.22;
  color: ${props => props.theme.colors.bone};
  margin: 0 0 ${props => props.theme.spacing[8]};
  font-weight: ${props => props.theme.fontWeights.medium};
  letter-spacing: -0.02em;
`;

const QuoteAuthor = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[3]};
`;

const QuoteMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.copper};
  font: 700 10px/1.4 ${props => props.theme.fonts.mono};
  letter-spacing: .14em;
  text-transform: uppercase;
`;

const Category = styled.span`
  color: #111410;
  background: #F4A800;
  padding: 5px 8px;
`;

const Source = styled.span`
  color: ${props => props.theme.colors.muted};
  letter-spacing: .08em;
  text-transform: none;
`;

const AuthorName = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #F4A800;
`;

const Affiliation = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.muted};
`;

const MotifIcon = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing[6]};
  right: ${props => props.theme.spacing[6]};
  width: 56px;
  height: 56px;
  opacity: 0.28;
`;

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[6]};
  margin-top: ${props => props.theme.spacing[8]};
`;

const CarouselNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[3]};
`;

const NavDot = styled.button<{ $active?: boolean }>`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 0;
  background: transparent;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s ease;
  border: none;
  padding: 0;

  &::before {
    content: "";
    position: absolute;
    width: ${props => props.$active ? props.theme.spacing[6] : props.theme.spacing[3]};
    height: ${props => props.theme.spacing[3]};
    border-radius: ${props => props.theme.borderRadius.full};
    background: ${props => props.$active ? '#F4A800' : 'rgba(244, 168, 0, 0.3)'};
    opacity: ${props => (props.$active ? 1 : 0.7)};
    inset: 0;
    margin: auto;
    transition: all 0.3s ease;
  }

  &:hover {
    opacity: 1;
  }
  &:hover::before { background: #F4A800; }
`;

const NavArrow = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid rgba(244, 168, 0, 0.4);
  background: transparent;
  color: #F4A800;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(244, 168, 0, 0.14);
    border-color: #F4A800;
  }
`;

const PauseButton = styled.button`
  min-width: 82px;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid rgba(244, 168, 0, 0.4);
  background: rgba(244, 168, 0, .06);
  color: #F4A800;
  font: 700 10px ${props => props.theme.fonts.mono};
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  &:hover { background: rgba(244, 168, 0, .16); border-color: #F4A800; }
`;

const QuoteCounter = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.14em;
  color: ${props => props.theme.colors.muted};
`;

const ProgressRail = styled.div`
  height: 2px;
  width: min(100%, 1120px);
  margin: 30px auto 0;
  background: rgba(244, 168, 0, .16);
`;

const Progress = styled.div<{ $value: number }>`
  height: 100%;
  width: ${props => props.$value}%;
  background: linear-gradient(90deg, #CC0001, #F4A800, #009B3A);
  transition: width .35s ease;
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

// ===========================================
// CAROUSEL
// ===========================================

export function PanAfricanQuoteCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const paused = userPaused || hoverPaused || focusPaused;

  const go = useCallback((index: number) => {
    setActiveIndex(((index % QUOTES.length) + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); go(activeIndex - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); go(activeIndex + 1); }
      if (event.key === "Home") { event.preventDefault(); go(0); }
      if (event.key === "End") { event.preventDefault(); go(QUOTES.length - 1); }
    };
    stage.addEventListener("keydown", onKeyDown);
    return () => stage.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, go]);

  const currentQuote = QUOTES[activeIndex];
  const Motif = MOTIFS[currentQuote.motif];

  return (
    <section style={{ padding: "clamp(80px, 10vw, 120px) 0", background: "linear-gradient(180deg, #0d110d 0%, #111410 100%)", position: "relative" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <RevealOnScroll>
          <div style={{ textAlign: "center" }}>
            <span style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.19em",
              textTransform: "uppercase",
              color: "#F4A800",
            }}>
              Voices of Wisdom
            </span>

            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "1.1",
              margin: "0 0 24px 0",
              letterSpacing: "-0.065em",
              color: "#F4F1DE",
            }}>
              The Road Ahead<br />
              <em style={{ color: "#F4A800", fontStyle: "normal" }}>In Their Own Words</em>
            </h2>

            <p style={{
              maxWidth: "760px",
              margin: "0 auto 56px",
              fontSize: "15px",
              color: "#B7B6A9",
              lineHeight: "1.75",
            }}>
              The road ahead is not an empty horizon. It is built from memory, courage,
              consciousness, story, and stewardship. These voices—drawn from published
              speeches, books, interviews, and lectures—help us stay accountable to the
              work of making African creativity, knowledge, and partnership visible.
            </p>
          </div>
        </RevealOnScroll>

        <QuoteStage
          ref={stageRef}
          tabIndex={0}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setFocusPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusPaused(false);
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Pan-African quotes"
        >
          <QuoteContainer
            key={currentQuote.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Quote ${activeIndex + 1} of ${QUOTES.length}: ${currentQuote.author}`}
          >
            <MotifIcon aria-hidden="true">
              <Motif size={56} color="#F4A800" />
            </MotifIcon>
            <QuoteMeta>
              <Category>{currentQuote.category}</Category>
              <Source>{currentQuote.source} · {currentQuote.year}</Source>
            </QuoteMeta>
            <QuoteText>&ldquo;{currentQuote.text}&rdquo;</QuoteText>
            <QuoteAuthor>
              <AuthorName>{currentQuote.author}</AuthorName>
              <Affiliation>{currentQuote.affiliation}</Affiliation>
            </QuoteAuthor>
          </QuoteContainer>

          <CarouselControls>
            <NavArrow onClick={() => go(activeIndex - 1)} aria-label="Previous quote">
              <ArrowLeft size={18} aria-hidden="true" />
            </NavArrow>
            <CarouselNav aria-label="Quote navigation">
              {QUOTES.map((quote, index) => (
                <NavDot
                  key={quote.id}
                  $active={index === activeIndex}
                  onClick={() => go(index)}
                  aria-label={`Go to quote ${index + 1}: ${quote.author}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                />
              ))}
            </CarouselNav>
            <NavArrow onClick={() => go(activeIndex + 1)} aria-label="Next quote">
              <ArrowRight size={18} aria-hidden="true" />
            </NavArrow>
            <PauseButton
              onClick={() => setUserPaused((value) => !value)}
              aria-pressed={userPaused}
              aria-label={userPaused ? "Resume automatic quote rotation" : "Pause automatic quote rotation"}
            >
              {userPaused ? "Resume" : "Pause"}
            </PauseButton>
          </CarouselControls>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <QuoteCounter>
              {String(activeIndex + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </QuoteCounter>
          </div>
          <ProgressRail aria-hidden="true">
            <Progress $value={((activeIndex + 1) / QUOTES.length) * 100} />
          </ProgressRail>
          <span
            aria-live="polite"
            aria-atomic="true"
            style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}
          >
            Quote {activeIndex + 1} of {QUOTES.length}: “{currentQuote.text}” — {currentQuote.author};
            {currentQuote.source}, {currentQuote.year}.
          </span>
        </QuoteStage>
      </div>
    </section>
  );
}

export default PanAfricanQuoteCarousel;