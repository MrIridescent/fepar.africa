"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "./MotionSystem";
import { GyeNyameSymbol, BogolanCross } from "./AfricanMotifs";

gsap.registerPlugin(ScrollTrigger);

// ===========================================
// SDG & AU AGENDA DATA
// ===========================================

interface SDGGoal {
  id: number;
  name: string;
  description: string;
  color: string;
  icon: "climate" | "education" | "partnership" | "growth";
  targets: string[];
  impactMetrics: {
    label: string;
    value: number;
    suffix?: string;
  }[];
}

const SDG_GOALS: SDGGoal[] = [
  {
    id: 13,
    name: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts through cultural preservation, traditional ecological knowledge, and community resilience.",
    color: "#48C9B0", // Climate teal
    icon: "climate",
    targets: [
      "Strengthen resilience to climate-related hazards",
      "Integrate climate measures into national policies",
      "Improve education and awareness on climate change",
      "Mobilize climate finance for developing countries"
    ],
    impactMetrics: [
      { label: "Communities Reached", value: 0, suffix: "" },
      { label: "Training Programs", value: 0, suffix: "" },
      { label: "Trees Planted", value: 0, suffix: "" }
    ]
  },
  {
    id: 4,
    name: "Quality Education",
    description: "Ensure inclusive and equitable quality education while promoting lifelong learning opportunities through upskilling drives and skill development.",
    color: "#F7931E", // Learning orange
    icon: "education",
    targets: [
      "Free primary and secondary education",
      "Equal access to quality early childhood development",
      "Scholarship programs for higher education",
      "Skills development for decent work"
    ],
    impactMetrics: [
      { label: "Students Trained", value: 0, suffix: "" },
      { label: "Partnership Institutions", value: 0, suffix: "" },
      { label: "Skilled Graduates", value: 0, suffix: "" }
    ]
  },
  {
    id: 17,
    name: "Partnerships",
    description: "Strengthen means of implementation and revitalize the Global Partnership for Sustainable Development through diaspora connections and international collaboration.",
    color: "#19B36D", // Partnership green
    icon: "partnership",
    targets: [
      "Enhance global partnership for sustainable development",
      "Multi-stakeholder partnerships mobilize resources",
      "Promote effective public-private-civil society partnerships",
      "Support developing nations in technology development"
    ],
    impactMetrics: [
      { label: "Diaspora Partners", value: 0, suffix: "" },
      { label: "Countries Connected", value: 0, suffix: "" },
      { label: "Joint Initiatives", value: 0, suffix: "" }
    ]
  },
  {
    id: 8,
    name: "Decent Work & Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all through creative industries and artist pathways.",
    color: "#ED2224", // Enterprise red
    icon: "growth",
    targets: [
      "Sustain per capita economic growth",
      "Higher levels of economic productivity",
      "Decent job creation and entrepreneurship",
      "Protection of labor rights and safe workplaces"
    ],
    impactMetrics: [
      { label: "Artists Supported", value: 0, suffix: "" },
      { label: "Creative Businesses Incubated", value: 0, suffix: "" },
      { label: "Creative Workspaces Activated", value: 0, suffix: "" }
    ]
  }
];

// AU Agenda 2063 Framework
const AU_FRAMEWORK = [
  {
    priority: "Prosperous Africa",
    description: "Inclusive growth and sustainable development through economic transformation",
    indicator: "Our focus → creative industries contributing to GDP",
  },
  {
    priority: "Culturally Integrated",
    description: "People-centred Africa celebrating diversities with shared identity",
    indicator: "Our focus → Pan-African cultural programming",
  },
  {
    priority: "Globally Competitive",
    description: "Africa-driven and Africa-supported development",
    indicator: "Our focus → international diaspora partnerships",
  },
  {
    priority: "Fully Empowered Youth",
    description: "Demographic dividend through investment in young people",
    indicator: "Our focus → upskilling and education programs",
  },
];

// ===========================================
// STYLES
// ===========================================

const DashboardContainer = styled.section`
  background: ${props => props.theme.colors.africanDeep};
  padding: ${props => props.theme.sectionPadding};
  position: relative;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(72, 201, 176, 0.05) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(197, 160, 89, 0.03) 0%, transparent 30%);
  pointer-events: none;
  z-index: 0;
`;

const DashboardHeader = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: ${props => props.theme.spacing[40]};
`;

const StartingBadge = styled.span`
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing[4]};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[6]};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.ochre};
  background: rgba(244, 168, 0, 0.12);
  border: 1px solid rgba(244, 168, 0, 0.35);
  border-radius: ${props => props.theme.borderRadius.md};
`;

const SectionTitle = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.spacing[3]};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: ${props => props.theme.spacing[1]};
  text-transform: uppercase;
  color: ${props => props.theme.colors.muted};
`;

const MainHeading = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(${props => props.theme.fontSizes['4xl']}, 5vw, ${props => props.theme.fontSizes['6xl']});
  line-height: 1.1;
  margin: 0 0 ${props => props.theme.spacing[8]} 0;
  letter-spacing: -0.04em;
  
  em {
    color: ${props => props.theme.colors.lakeTeal};
  }
`;

const Subheading = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.muted};
  max-width: ${props => props.theme.layout.maxWidth};
  line-height: 1.7;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing[4]};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const GoalCard = styled.article<{ color: string }>`
  background: linear-gradient(135deg, ${props => `rgba(${hexToRgb(props.color)}, 0.08)`} 0%, transparent 100%);
  border: 1px solid ${props => `rgba(${hexToRgb(props.color)}, 0.2)`};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[6]};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.color};
    box-shadow: 0 12px 40px rgba(${props => hexToRgb(props.color)}, 0.15);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    border-top: 2px solid ${props => props.color};
    border-left: none;
    border-right: none;
  }
`;

const GoalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const GoalId = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.spacing[10]};
  height: ${props => props.theme.spacing[10]};
  background: ${props => props.color};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #fff;
`;

const GoalIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoalName = styled.h3`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.bone};
  margin: 0 0 ${props => props.theme.spacing[3]} 0;
`;

const GoalDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.muted};
  line-height: 1.6;
  margin: 0 0 ${props => props.theme.spacing[6]} 0;
`;

const TargetList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${props => props.theme.spacing[6]} 0;
`;

const TargetItem = styled.li<{ color: string }>`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing[2]};
  margin-bottom: ${props => props.theme.spacing[3]};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.muted};
  
  &::before {
    content: "→";
    color: ${props => props.color};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

const MetricsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[4]};
`;

const MetricsCaption = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.muted};
  margin-bottom: ${props => props.theme.spacing[3]};
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricValue = styled.span<{ color: string }>`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.color};
  letter-spacing: -0.03em;
`;

const MetricLabel = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.muted};
  margin-top: ${props => props.theme.spacing[1]};
`;

const AuFrameworkSection = styled.section`
  margin-top: ${props => props.theme.spacing[40]};
  padding-top: ${props => props.theme.spacing[16]};
  border-top: 1px solid rgba(197, 160, 89, 0.2);
  position: relative;
  z-index: 1;
`;

const AuSectionTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(${props => props.theme.fontSizes['3xl']}, 4vw, ${props => props.theme.fontSizes['5xl']});
  color: ${props => props.theme.colors.bone};
  margin: 0 0 ${props => props.theme.spacing[8]} 0;
  letter-spacing: -0.04em;
`;

const AuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing[4]};
`;

const AuCard = styled.div`
  background: ${props => props.theme.colors.africanBrown};
  padding: ${props => props.theme.spacing[6]};
  border-radius: ${props => props.theme.borderRadius.lg};
  border-left: 3px solid ${props => props.theme.colors.copper};
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const AuPriority = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.copper};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

const AuDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.bone};
  line-height: 1.6;
  margin: 0 0 ${props => props.theme.spacing[3]} 0;
`;

const AuIndicator = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.muted};
  margin: 0;
`;

// ===========================================
// HELPER FUNCTIONS
// ===========================================

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
    "197, 160, 89";
}

// ===========================================
// COMPONENT IMPLEMENTATION
// ===========================================

export function SDGImpactDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sdgCards = Array.from(container.querySelectorAll(".sdg-card"));
    gsap.set(sdgCards, { opacity: 0, y: 30 });

    sdgCards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            clearProps: "transform",
          });

          const countUps = card.querySelectorAll("[data-count-up]");
          countUps.forEach((countUpEl) => {
            const endValue = parseInt(countUpEl.getAttribute("data-end") || "0", 10);
            const suffix = countUpEl.getAttribute("data-suffix") || "";
            const state = { value: 0 };
            countUpEl.textContent = `0${suffix}`;

            gsap.to(state, {
              value: endValue,
              duration: 2,
              delay: 0.4 + index * 0.1,
              ease: "power2.out",
              onUpdate: () => {
                countUpEl.textContent =
                  Math.round(state.value).toLocaleString("en-US") + suffix;
              },
            });
          });
        },
      });
    });

    const auCards = Array.from(container.querySelectorAll(".au-card"));
    gsap.set(auCards, { opacity: 0, y: 30 });

    auCards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            clearProps: "transform",
          });
        },
      });
    });
  }, { scope: containerRef });

  return (
    <DashboardContainer ref={containerRef}>
      <BackgroundPattern aria-hidden="true" />
      
      <RevealOnScroll>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
        }}>
          {/* Header */}
          <DashboardHeader>
            <StartingBadge>WE ARE JUST STARTING</StartingBadge>
            <SectionTitle>Alignment Framework</SectionTitle>
            <MainHeading>
              Our work advances<br />
              <em>Sustainable Development Goals</em><br />
              and Africa&rsquo;s vision for 2063
            </MainHeading>
            <Subheading>
              Every initiative connects to broader frameworks for human development. The
              figures below are our founding targets—the commitments we are building
              toward, Africa first, measured against global standards. Priorities, not
              claims of work already done.
            </Subheading>
          </DashboardHeader>
          
          {/* SDG Goals Grid */}
          <GridLayout>
            {SDG_GOALS.map((goal, index) => (
              <GoalCard key={goal.id} color={goal.color} className="sdg-card">
                <GoalHeader>
                  <GoalId color={goal.color}>{goal.id}</GoalId>
                  <GoalIcon aria-hidden="true">
                    {goal.icon === "climate" && <GyeNyameSymbol size={48} color={goal.color} />}
                    {goal.icon === "education" && <BogolanCross size={48} color={goal.color} />}
                    {goal.icon === "partnership" && <GyeNyameSymbol size={48} color={goal.color} />}
                    {goal.icon === "growth" && <BogolanCross size={48} color={goal.color} />}
                  </GoalIcon>
                </GoalHeader>
                
                <GoalName>{goal.name}</GoalName>
                <GoalDescription>{goal.description}</GoalDescription>
                
                <TargetList>
                  {goal.targets.map((target, i) => (
                    <TargetItem key={i} color={goal.color}>{target}</TargetItem>
                  ))}
                </TargetList>
                
                <MetricsCaption>Founding targets</MetricsCaption>
                <MetricsRow>
                  {goal.impactMetrics.map((metric, i) => (
                    <Metric key={i}>
                      <MetricValue color={goal.color} data-count-up data-end={metric.value} data-suffix={metric.suffix}>
                        {metric.value}
                      </MetricValue>
                      <MetricLabel>{metric.label}</MetricLabel>
                    </Metric>
                  ))}
                </MetricsRow>
              </GoalCard>
            ))}
          </GridLayout>
          
          {/* AU Agenda 2063 Framework */}
          <AuFrameworkSection>
            <AuSectionTitle>
              African Union Agenda 2063<br />
              <em>The Africa We Want</em>
            </AuSectionTitle>
            
            <AuGrid>
              {AU_FRAMEWORK.map((item, index) => (
                <AuCard key={index} className="au-card">
                  <AuPriority>Priority {index + 1}</AuPriority>
                  <h4 style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#F4F1DE",
                    margin: "0 0 8px 0",
                  }}>{item.priority}</h4>
                  <AuDescription>{item.description}</AuDescription>
                  <AuIndicator>{item.indicator}</AuIndicator>
                </AuCard>
              ))}
            </AuGrid>
          </AuFrameworkSection>
        </div>
      </RevealOnScroll>
    </DashboardContainer>
  );
}

// ===========================================
// EXPORT
// ===========================================

export default SDGImpactDashboard;
