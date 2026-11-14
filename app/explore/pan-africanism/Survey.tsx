"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { questions, routes, type RouteKey } from "./questions";
import styles from "./survey.module.css";

const storageKey = "fepar-learning-journey-v1";
type Answers = Record<number, number>;

export function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [saved, setSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const [ready, setReady] = useState(false);
  const headingRef = useRef<HTMLElement>(null);
  const previousStep = useRef(step);
  const question = questions[step];
  const completed = step === questions.length;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const value: unknown = JSON.parse(raw);
          if (value && typeof value === "object" && "step" in value && "answers" in value) {
            const restored = value as { step: unknown; answers: unknown };
            if (Number.isInteger(restored.step) && (restored.step as number) >= 0 && (restored.step as number) <= questions.length && restored.answers && typeof restored.answers === "object" && !Array.isArray(restored.answers)) {
              const valid: Answers = {};
              for (const [key, answer] of Object.entries(restored.answers)) {
                const index = Number(key);
                if (Number.isInteger(index) && index >= 0 && index < questions.length && Number.isInteger(answer) && (answer as number) >= 0 && (answer as number) < questions[index].options.length) valid[index] = answer as number;
              }
              setAnswers(valid);
              setStep(restored.step as number);
              setSaved(true);
              setNotice("Your saved place was restored on this device.");
            }
          }
        }
      } catch {
        setNotice("Saved progress is unavailable in this browser. You can still use the survey without saving.");
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || !saved) return;
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ step, answers }));
      } catch {
        setSaved(false);
        setNotice("Could not save on this device. Your answers remain here until you leave the page.");
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [answers, ready, saved, step]);

  useEffect(() => {
    if (!ready || previousStep.current === step) return;
    previousStep.current = step;
    headingRef.current?.focus();
  }, [ready, step]);

  const save = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ step, answers }));
      setSaved(true);
      setNotice("Saved on this device. Changes will update automatically; use Remove saved progress to erase it.");
    } catch {
      setNotice("This browser did not allow saving. Your answers remain here until you leave the page.");
    }
  };

  const removeSaved = () => {
    try {
      localStorage.removeItem(storageKey);
      setSaved(false);
      setNotice("Saved progress removed from this device. Your current answers remain until you leave or start again.");
    } catch {
      setNotice("This browser could not remove saved progress. Try clearing this site's storage in your browser settings.");
    }
  };

  const restart = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      setNotice("Browser storage could not be cleared. Please clear this site's storage in your browser settings.");
    }
    setSaved(false);
    setAnswers({});
    setStep(0);
  };

  const chosenRoutes: RouteKey[] = [];
  if (completed) {
    for (const [index, answer] of Object.entries(answers)) {
      const questionIndex = Number(index);
      const item = questions[questionIndex];
      if (item?.kind === "reflection") {
        const route = item.options[answer]?.route;
        if (route) chosenRoutes.push(route);
      }
    }
  }
  const routeKeys = (Object.keys(routes) as RouteKey[]).sort((left, right) => chosenRoutes.filter((key) => key === right).length - chosenRoutes.filter((key) => key === left).length).slice(0, 3);

  return (
    <div className={styles.shell} id="journey">
      <div className={styles.topline}><span>YOUR READING JOURNEY</span><span>{completed ? "A place to continue" : `${String(step + 1).padStart(2, "0")} / ${questions.length}`}</span></div>
      <progress className={styles.progress} max={questions.length} value={completed ? questions.length : step + 1} aria-label="Survey progress" />
      <div className={styles.content}>
        {!completed && question ? (
          <>
            <div className={styles.side}><span className={styles.largeNumber}>{String(step + 1).padStart(2, "0")}</span><p>{question.stage}</p><p>{question.kind === "fact" ? "A source-led question. This is not a test." : "A reflection. There is no right answer."}</p></div>
            <div className={styles.main}>
              <p className={styles.kicker}>{question.kind === "fact" ? "Read / Consider" : "Pause / Reflect"}</p>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend} ref={(element) => { headingRef.current = element; }} tabIndex={-1}>{question.prompt}</legend>
                <div className={styles.options}>{question.options.map((option, index) => (
                  <label className={`${styles.option}${answers[step] === index ? ` ${styles.selected}` : ""}`} key={index}>
                    <input type="radio" name={`question-${step}`} value={index} checked={answers[step] === index} onChange={() => setAnswers((current) => ({ ...current, [step]: index }))} />
                    <span className={styles.optionIndex}>{String.fromCharCode(65 + index)}</span><span>{typeof option === "string" ? option : option.label}</span>
                  </label>
                ))}</div>
              </fieldset>
              {answers[step] !== undefined && (
                <div className={styles.explanation} aria-live="polite">
                  <strong>{question.kind === "fact" ? answers[step] === question.answer ? "In the source" : "Worth exploring" : "A thought to carry"}</strong>
                  <p>{question.kind === "fact" ? question.explanation : question.insight}</p>
                  {question.kind === "fact" && <a href={question.source.href} target="_blank" rel="noopener noreferrer">Read the original source: {question.source.label} <ArrowUpRight size={16} aria-hidden="true" /></a>}
                </div>
              )}
              <div className={styles.controls}>
                <button className={styles.back} type="button" onClick={() => setStep((current) => current - 1)} disabled={step === 0}><ArrowLeft size={17} aria-hidden="true" /> Back</button>
                <div>
                  {answers[step] === undefined && <button className={styles.skip} type="button" onClick={() => setStep((current) => current + 1)}>Skip for now</button>}
                  <button className={styles.next} type="button" onClick={() => setStep((current) => current + 1)} disabled={answers[step] === undefined}>{step === questions.length - 1 ? "See reading routes" : "Next question"} <ArrowRight size={17} aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.results}>
            <p className={styles.kicker}>The conversation continues</p>
            <h2 ref={(element) => { headingRef.current = element; }} tabIndex={-1}>What would you like to <em>explore next?</em></h2>
            <p>Your interests bring some routes forward; when you skip reflections, we show open starting points instead. None of this is a score or a measure of anyone&apos;s identity or beliefs. You can follow any route.</p>
            <div className={styles.routeList}>{routeKeys.map((key, index) => <a href={routes[key].href} key={key}><span>{String(index + 1).padStart(2, "0")}</span><span><strong>{routes[key].title}</strong><small>{routes[key].description}</small></span><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div>
            <div className={styles.resultActions}><button type="button" onClick={() => setStep(questions.length - 1)}><ArrowLeft size={17} aria-hidden="true" /> Review last question</button><button type="button" onClick={restart}>Start again and clear answers</button></div>
          </div>
        )}
      </div>
      <div className={styles.saveBar}><div><strong>Your answers stay yours.</strong><p>No answers are sent to FEPAR. Answers are saved only if you choose to save them on this device; they stay in this browser until removed. Other people using this device may see them.</p><p className={styles.notice} role="status">{notice || (saved ? "Progress is saved on this device." : "Without saving, leaving this page will lose your answers.")}</p></div><div>{saved ? <button type="button" onClick={removeSaved}>Remove saved progress</button> : <button type="button" onClick={save}>Save on this device</button>}</div></div>
    </div>
  );
}
