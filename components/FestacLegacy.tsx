"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll, TextReveal } from "./MotionSystem";
import { KenteGoldStripes } from "./AfricanMotifs";

gsap.registerPlugin(ScrollTrigger);

// ===========================================
// FESTAC 77 TIMELINE DATA
// ===========================================

interface TimelineEvent {
  year: number | string;
  title: string;
  description: string;
  significance: string;
}

const FESTAC_EVENTS: TimelineEvent[] = [
  {
    year: 1966,
    title: "First World Festival of Negro Arts",
    description: "Held in Dakar, Senegal, this inaugural gathering brought together artists, performers, and intellectuals from across Africa and the diaspora for a week-long celebration of culture.",
    significance: "Set the precedent for pan-African cultural unity through artistic expression."
  },
  {
    year: 1974,
    title: "Nigerian Government Announcement",
    description: "President Yakubu Gowon announces Nigeria will host the Second World Festival of Black and African Arts and Culture, marking the continent's largest cultural event.",
    significance: "Decision to build Festac Town specifically for the festival—a city that still stands today."
  },
  {
    year: 1977,
    title: "FESTAC '77 — The Great Gathering",
    description: "January 15 - February 12, 1977. Over 17,000 artists, performers, and dignitaries from 55 nations convene in Lagos for one month of continuous cultural programming.",
    significance: "The pinnacle of Pan-African cultural movement. Birthplace of our ecosystem."
  },
  {
    year: 1977,
    title: "Artistic & Intellectual Explosion",
    description: "Features from Fela Kuti, Miriam Makeba, Hugh Masekela, Chinua Achebe, Wole Soyinka, Ngũgĩ wa Thiong'o. Nearly 50 events spanning music, literature, visual arts, theater, film.",
    significance: "Created living documentation of African artistic excellence and intellectual depth."
  },
  {
    year: "Present",
    title: "Festac Town — Living Legacy",
    description: "The city built for FESTAC '77 remains Lagos' second-largest residential area. Its architecture, urban planning, and infrastructure continue serving the community.",
    significance: "Physical manifestation of what was possible—a testament to Pan-African vision."
  },
  {
    year: 2027,
    title: "Golden Jubilee Renaissance",
    description: "Fifty years later, we carry forward FESTAC's spirit—transforming memory into action, heritage into innovation, potential into tangible impact.",
    significance: "We are the Renaissance of that school of thought, taking it out into the world."
  }
];

// ===========================================
// STYLES
// ===========================================

const SectionContainer = styled.section`
  position: relative;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(197, 160, 89, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197, 160, 89, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 0;
`;

const HeroSection = styled.div`
  position: relative;
  padding: ${props => props.theme.spacing[24]} 0 ${props => props.theme.spacing[16]};
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    right: -10%;
    top: 20%;
    width: 50vw;
    height: 50vw;
    border: 1px solid rgba(197, 160, 89, 0.2);
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
    
    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-50px, 30px) rotate(180deg); }
    }
  }
`;

const HeritageHeader = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(${props => props.theme.fontSizes['6xl']}, 8vw, ${props => props.theme.fontSizes['8xl']});
  line-height: 0.95;
  letter-spacing: -0.065em;
  margin: 0;
  position: relative;
  z-index: 1;
  color: ${props => props.theme.colors.bone};

  em {
    color: ${props => props.theme.colors.ochre};
    font-style: normal;
  }
`;

const HeritageSubheader = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.muted};
  max-width: 700px;
  margin: ${props => props.theme.spacing[8]} 0 ${props => props.theme.spacing[16]};
`;

const MottoBadge = styled.span<{ $highlight?: boolean }>`
  display: inline-block;
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[4]};
  background: ${props => props.$highlight ? `linear-gradient(135deg, #F4A800 0%, #D6A66B 100%)` : `rgba(244, 168, 0, 0.1)`};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.$highlight ? '#111410' : '#F4A800'};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: ${props => props.$highlight ? '0 4px 16px rgba(244, 168, 0, 0.4)' : 'none'};
  border: ${props => props.$highlight ? 'none' : '1px solid rgba(244, 168, 0, 0.3)'};
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: ${props => props.theme.spacing[16]} 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #CC0001, #F4A800, #009B3A, #F4A800, #CC0001);
  transform: translateX(-50%);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: 8px;
    transform: none;
  }
`;

const TimelineEventItem = styled.article<{ $delay: number }>`
  position: relative;
  margin-bottom: ${props => props.theme.spacing[16]};
  opacity: 0;
  transform: translateY(30px);
  transition: all ${props => 0.6 + props.$delay}s ease;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: ${props => props.theme.spacing[8]};
  }
`;

const TimelineEventItemVisible = styled(TimelineEventItem)<{ $visible: boolean }>`
  opacity: ${props => (props.$visible ? 1 : 0)};
  transform: translateY(${props => (props.$visible ? 0 : 30)}px);
`;

const EventMarker = styled.div`
  position: absolute;
  left: 50%;
  top: ${props => props.theme.spacing[4]};
  width: ${props => props.theme.spacing[6]};
  height: ${props => props.theme.spacing[6]};
  background: radial-gradient(circle, #F4A800 0%, #CC0001 100%);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(244, 168, 0, 0.25), 0 0 20px rgba(244, 168, 0, 0.5);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: 8px;
    transform: translateX(-50%);
  }
`;

const EventContent = styled.div<{ $align?: "left" | "right" }>`
  width: 45%;
  padding: ${props => props.theme.spacing[6]};
  background: ${props => props.theme.colors.africanDeep};
  border-left: ${props => props.$align === "right" ? `3px solid ${props.theme.colors.ochre}` : "none"};
  border-right: ${props => props.$align === "left" ? `3px solid ${props.theme.colors.ochre}` : "none"};
  margin-left: ${props => props.$align === "right" ? "auto" : "0"};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0 !important;
    border-right: none;
    border-left: 3px solid ${props => props.theme.colors.ochre};
  }
`;

const EventYear = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.ochre};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const EventTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.bone};
  margin: 0 0 ${props => props.theme.spacing[4]};
  letter-spacing: -0.04em;
`;

const EventDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.muted};
  line-height: 1.7;
  margin: 0 0 ${props => props.theme.spacing[6]};
`;

const EventSignificance = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
  background: rgba(197, 160, 89, 0.08);
  border-radius: ${props => props.theme.borderRadius.base};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.ochre};
`;

const FestacTownNarrative = styled.section`
  background: ${props => props.theme.colors.africanBrown};
  padding: ${props => props.theme.spacing[40]} 0;
  position: relative;
  overflow: hidden;
`;

const NarrativeContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const NarrativeImage = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #5C4033 0%, #3D2817 100%);
  border: 2px solid rgba(197, 160, 89, 0.3);
  display: grid;
  place-items: center;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L 25 35 L 50 50 L 75 35 L 100 50 M0 75 L 25 60 L 50 75 L 75 60 L 100 75' stroke='%23C5A059' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const FromFestacToTheWorld = styled.section`
  background: linear-gradient(135deg, #009B3A 0%, #006128 50%, #003d19 100%);
  padding: ${props => props.theme.spacing[40]} 0;
  position: relative;
  overflow: hidden;
`;

const BannerText = styled.div`
  white-space: nowrap;
  animation: banner-scroll 30s linear infinite;
  
  @keyframes banner-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

// ===========================================
// COMPONENTS
// ===========================================

export function FestacHero() {
  return (
    <RevealOnScroll>
      <HeroSection>
        <BackgroundPattern aria-hidden="true" />
        
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Mottos */}
          <div style={{ marginBottom: "24px" }}>
            <MottoBadge>FESTAC 77 Legacy</MottoBadge>
            <span style={{ marginLeft: "12px", color: '#F4A800' }}>|</span>
            <MottoBadge $highlight>Intellectually African</MottoBadge>
          </div>
          
          {/* Header */}
          <HeritageHeader>
            From Festac<br />
            <em>To The World</em>
          </HeritageHeader>
          
          <HeritageSubheader>
            We are products of FESTAC Town—the legacy of FESTAC 77. What began as a global gathering in 1977 birthed an ecosystem that carries that same visionary spirit forward, transforming cultural memory into actionable impact across Africa and its diaspora.
          </HeritageSubheader>
          
          {/* CTA */}
          <div style={{ marginTop: "32px" }}>
            <MottoBadge $highlight>Creativity Unlocks the Mind</MottoBadge>
          </div>
        </div>
      </HeroSection>
    </RevealOnScroll>
  );
}

export function FestacTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(container.querySelectorAll(".timeline-item"));
    gsap.set(items, { opacity: 0, y: 30 });

    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            ease: "power2.out",
          });
        },
      });
    });
  }, { scope: containerRef });

  return (
    <RevealOnScroll>
      <TimelineContainer ref={containerRef}>
        <TimelineLine aria-hidden="true" />
        
        {FESTAC_EVENTS.map((event, index) => (
          <div key={`${event.year}-${index}`} className="timeline-item" style={{ width: "100%" }}>
            <TimelineEventItemVisible $visible={true} $delay={index * 0.1}>
              {/* Marker */}
              <EventMarker aria-label={`Event in ${event.year}`} />
              
              {/* Content */}
              <EventContent $align={index % 2 === 0 ? "left" : "right"}>
                <EventYear>{event.year}</EventYear>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
                <EventSignificance>
                  Significance →
                  <span style={{ marginLeft: "8px", fontWeight: "500" }}>{event.significance}</span>
                </EventSignificance>
              </EventContent>
            </TimelineEventItemVisible>
          </div>
        ))}
      </TimelineContainer>
    </RevealOnScroll>
  );
}

export function FestacTownStory() {
  return (
    <FestacTownNarrative>
      <BackgroundPattern aria-hidden="true" />
      
      <RevealOnScroll>
        <NarrativeContent>
          {/* Image Placeholder */}
          <NarrativeImage>
            <KenteGoldStripes size={200} primaryColor="#C5A059" secondaryColor="#5C4033" />
            <div style={{
              position: "absolute",
              fontSize: "clamp(12px, 2vw, 16px)",
              color: "#C5A059",
              textAlign: "center",
              padding: "24px",
              fontStyle: "italic",
            }}>
              Festac Town today — a living monument to FESTAC 77&rsquo;s vision
            </div>
          </NarrativeImage>
          
          {/* Story Content */}
          <div>
            <span style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.19em",
              textTransform: "uppercase",
              color: "#F4A800",
            }}>
              Physical Legacy
            </span>
            
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(48px, 6vw, 72px)",
              lineHeight: "1.1",
              margin: "0 0 24px 0",
              letterSpacing: "-0.065em",
            }}>
              The City Built on{" "}
              <em>Possibility</em>
            </h2>
            
            <p style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              color: "#B7B6A9",
              lineHeight: "1.75",
              marginBottom: "24px",
            }}>
              For FESTAC 77, Nigerian authorities constructed an entire city from scratch—Festac Town. 
              Designed to accommodate international delegates, it featured modern infrastructure, 
              wide boulevards, and purpose-built cultural venues.
            </p>
            
            <p style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              color: "#B7B6A9",
              lineHeight: "1.75",
              marginBottom: "32px",
            }}>
              Today, it remains Lagos&rsquo; second-largest residential area—a physical reminder that Africans 
              can build at any scale. Our ecosystem emerges from this same belief: that we can design, 
              construct, and sustain systems that serve our communities for generations.
            </p>
            
            <MottoBadge $highlight>Creativity Unlocks the Mind</MottoBadge>
          </div>
        </NarrativeContent>
      </RevealOnScroll>
    </FestacTownNarrative>
  );
}

export function FromFestacBanner() {
  const phrases = ["From Festac To The World".repeat(5)];
  
  return (
    <FromFestacToTheWorld>
      <BackgroundPattern aria-hidden="true" />
      
      <RevealOnScroll>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
          textAlign: "center",
        }}>
          <h3 style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "1.2",
            letterSpacing: "-0.03em",
            color: "#F4F1DE",
            marginBottom: "24px",
          }}>
            The Renaissance Continues
          </h3>
          
          <p style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "18px",
            color: "#F4F1DE",
            opacity: 0.8,
            lineHeight: "1.6",
            marginBottom: "48px",
          }}>
            Fifty years after FESTAC 77, we carry forward its school of thought—transforming cultural pride 
            into tangible development, artistic expression into economic opportunity, pan-African unity 
            into practical partnerships.
          </p>
          
          {/* Animated Banner */}
          <BannerText aria-label="Scrolling banner">
            {phrases.join(" • ")}
          </BannerText>
        </div>
      </RevealOnScroll>
    </FromFestacToTheWorld>
  );
}

// ===========================================
// EXPORT
// ===========================================

export default {
  FestacHero,
  FestacTimeline,
  FestacTownStory,
  FromFestacBanner,
};
