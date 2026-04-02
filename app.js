const spreadCatalog = [
  {
    id: "single",
    name: "Single Card Insight",
    shortLabel: "1 card",
    description: "A quick pulse check when you need one clean message.",
    layoutClass: "spread-layout-single",
    positions: [
      {
        title: "Core Message",
        summary: "The clearest energy around your question.",
        purpose: "This card names the main truth asking for your attention right now."
      }
    ]
  },
  {
    id: "three",
    name: "Past, Present, Future",
    shortLabel: "3 cards",
    description: "A classic timeline spread for understanding how a situation is moving.",
    layoutClass: "spread-layout-three",
    positions: [
      {
        title: "Past",
        summary: "What has shaped the situation so far.",
        purpose: "This position shows the energy or history that led you into the current moment."
      },
      {
        title: "Present",
        summary: "What is most alive in the situation now.",
        purpose: "This position reveals what is active, visible, and ready to be acknowledged right now."
      },
      {
        title: "Future",
        summary: "Where the current path is pointing next.",
        purpose: "This position suggests the likely direction of the story if nothing essential changes."
      }
    ]
  },
  {
    id: "relationship",
    name: "Relationship Mirror",
    shortLabel: "4 cards",
    description: "Useful for partnerships, dating dynamics, and any two-person connection.",
    layoutClass: "spread-layout-relationship",
    positions: [
      {
        title: "You",
        summary: "What you are bringing into the connection.",
        purpose: "This position reveals your current stance, needs, or emotional posture."
      },
      {
        title: "Other Person",
        summary: "What the other side may be bringing.",
        purpose: "This position highlights the energy or perspective you are meeting across from you."
      },
      {
        title: "Dynamic",
        summary: "What the relationship between you is asking for.",
        purpose: "This position describes the heartbeat of the connection itself."
      },
      {
        title: "Growth Path",
        summary: "How the connection can move in a healthier direction.",
        purpose: "This position points toward the most useful next adjustment or invitation."
      }
    ]
  },
  {
    id: "decision",
    name: "Decision Compass",
    shortLabel: "5 cards",
    description: "Compares two paths and highlights what supports a wiser choice.",
    layoutClass: "spread-layout-decision",
    positions: [
      {
        title: "Option A",
        summary: "The feeling or promise of the first path.",
        purpose: "This position shows the energy that gathers when you lean toward one choice."
      },
      {
        title: "Option B",
        summary: "The feeling or promise of the second path.",
        purpose: "This position shows the energy that gathers when you lean toward the alternative choice."
      },
      {
        title: "Hidden Influence",
        summary: "What may be quietly steering the decision.",
        purpose: "This position uncovers motives, fears, or facts that may be harder to see."
      },
      {
        title: "Wise Choice",
        summary: "The posture that leads to the soundest decision.",
        purpose: "This position points toward the inner quality that will help you choose well."
      },
      {
        title: "Likely Outcome",
        summary: "The direction that becomes available when the lesson lands.",
        purpose: "This position offers the most probable result if you follow the reading honestly."
      }
    ]
  },
  {
    id: "celtic",
    name: "Celtic Cross Classic",
    shortLabel: "10 cards",
    description: "A fuller reading for layered questions, crossroads, and major life turns.",
    layoutClass: "spread-layout-celtic",
    positions: [
      {
        title: "Present Situation",
        summary: "Where you stand now.",
        purpose: "This card anchors the reading in the energy that is currently defining the situation."
      },
      {
        title: "Challenge",
        summary: "What crosses or complicates it.",
        purpose: "This position names the tension, block, or friction point in the story."
      },
      {
        title: "Foundation",
        summary: "What sits underneath the issue.",
        purpose: "This position reveals the root layer, past pattern, or emotional base underneath the question."
      },
      {
        title: "Recent Past",
        summary: "What is fading but still matters.",
        purpose: "This position shows what has just shaped the present and may still linger."
      },
      {
        title: "Conscious Aim",
        summary: "What you know, want, or are trying to reach.",
        purpose: "This position points to the thought, goal, or expectation at the top of your mind."
      },
      {
        title: "Near Future",
        summary: "What is arriving soon.",
        purpose: "This position reveals the next wave of movement if the present pattern keeps going."
      },
      {
        title: "Self",
        summary: "How you are positioned inside the matter.",
        purpose: "This position reflects your attitude, role, and current way of relating to the issue."
      },
      {
        title: "Environment",
        summary: "What surrounds you externally.",
        purpose: "This position highlights the people, pressures, or context around you."
      },
      {
        title: "Hopes and Fears",
        summary: "What you long for and worry about at once.",
        purpose: "This position reveals the emotional mix that can quietly shape your expectations."
      },
      {
        title: "Outcome",
        summary: "Where the reading resolves if its lesson is followed.",
        purpose: "This position gives the most likely landing point of the current energy."
      }
    ]
  }
];

const majorArcana = [
  {
    number: 0,
    name: "The Fool",
    keywords: ["beginnings", "trust", "open road"],
    upright: "A new path wants your courage more than your certainty.",
    reversed: "Fear of the unknown or careless leaps can make the next step feel unsteady."
  },
  {
    number: 1,
    name: "The Magician",
    keywords: ["will", "resourcefulness", "focus"],
    upright: "You already hold the tools to shape this moment with intention.",
    reversed: "Scattered attention or doubt can weaken your ability to use what you have."
  },
  {
    number: 2,
    name: "The High Priestess",
    keywords: ["intuition", "mystery", "inner knowing"],
    upright: "Quiet wisdom is available when you stop forcing clarity and listen inward.",
    reversed: "Signals are being ignored, overthought, or buried beneath noise."
  },
  {
    number: 3,
    name: "The Empress",
    keywords: ["nurture", "abundance", "creation"],
    upright: "Growth comes through care, patience, and allowing something to fully develop.",
    reversed: "Overgiving, creative blocks, or neglecting your own needs can thin your energy."
  },
  {
    number: 4,
    name: "The Emperor",
    keywords: ["structure", "leadership", "authority"],
    upright: "Steady structure and clear boundaries create the safety needed for progress.",
    reversed: "Control issues, rigidity, or resistance to responsibility may be distorting the situation."
  },
  {
    number: 5,
    name: "The Hierophant",
    keywords: ["tradition", "guidance", "shared wisdom"],
    upright: "There is value in proven guidance, ritual, or learning from established paths.",
    reversed: "Question whether convention still serves you or is keeping you smaller than necessary."
  },
  {
    number: 6,
    name: "The Lovers",
    keywords: ["choice", "union", "alignment"],
    upright: "This is about wholehearted alignment, not just attraction or preference.",
    reversed: "Mixed motives or misalignment can weaken commitment and clarity."
  },
  {
    number: 7,
    name: "The Chariot",
    keywords: ["momentum", "direction", "discipline"],
    upright: "Focused movement succeeds when your will, emotion, and action pull together.",
    reversed: "A loss of direction, impatience, or inner conflict can stall forward movement."
  },
  {
    number: 8,
    name: "Strength",
    keywords: ["courage", "gentle power", "steadiness"],
    upright: "Quiet courage and self-trust can tame what force alone cannot.",
    reversed: "Self-doubt, exhaustion, or avoiding the harder feeling may weaken your stance."
  },
  {
    number: 9,
    name: "The Hermit",
    keywords: ["reflection", "solitude", "inner lantern"],
    upright: "A slower, more private search for truth is wiser than rushing for answers.",
    reversed: "Isolation, avoidance, or refusing reflection can keep insight out of reach."
  },
  {
    number: 10,
    name: "Wheel of Fortune",
    keywords: ["cycles", "change", "timing"],
    upright: "The wheel is turning, and timing now matters as much as effort.",
    reversed: "Resisting change or trying to control the uncontrollable can create extra friction."
  },
  {
    number: 11,
    name: "Justice",
    keywords: ["truth", "balance", "accountability"],
    upright: "Clear-eyed honesty and fair choices bring the strongest long-term outcome.",
    reversed: "Bias, avoidance, or imbalance may be asking for correction."
  },
  {
    number: 12,
    name: "The Hanged Man",
    keywords: ["pause", "surrender", "new perspective"],
    upright: "Meaning emerges when you stop pushing and allow your perspective to change.",
    reversed: "The pause may feel frustrating because you are resisting the shift it requires."
  },
  {
    number: 13,
    name: "Death",
    keywords: ["ending", "release", "transformation"],
    upright: "Something needs to end so the next chapter has room to begin.",
    reversed: "Clinging to what is over can make transition longer and heavier."
  },
  {
    number: 14,
    name: "Temperance",
    keywords: ["integration", "patience", "balance"],
    upright: "Healing happens through moderation, blending, and respectful pacing.",
    reversed: "Extremes, impatience, or poor timing can keep things from settling."
  },
  {
    number: 15,
    name: "The Devil",
    keywords: ["attachment", "temptation", "shadow"],
    upright: "Look closely at the habits, fears, or attachments that are quietly binding you.",
    reversed: "There is real potential to loosen a pattern that has held too much power."
  },
  {
    number: 16,
    name: "The Tower",
    keywords: ["disruption", "revelation", "breakthrough"],
    upright: "A destabilizing truth can clear what was unsound and make honesty possible.",
    reversed: "The shake-up may be happening inwardly first, or denial may be delaying a needed release."
  },
  {
    number: 17,
    name: "The Star",
    keywords: ["hope", "renewal", "guiding light"],
    upright: "Hope returns when you act from sincerity rather than performance.",
    reversed: "Discouragement may be temporary, but it still asks for gentle restoration."
  },
  {
    number: 18,
    name: "The Moon",
    keywords: ["uncertainty", "instinct", "hidden tides"],
    upright: "Not everything is fully visible yet, so intuition matters as much as logic.",
    reversed: "Confusion can begin to lift when hidden dynamics are named out loud."
  },
  {
    number: 19,
    name: "The Sun",
    keywords: ["clarity", "joy", "confidence"],
    upright: "Warmth, confidence, and clearer truth are available here.",
    reversed: "Light is present, but worry or self-protection may be muting it."
  },
  {
    number: 20,
    name: "Judgement",
    keywords: ["calling", "awakening", "reckoning"],
    upright: "A deeper call asks you to answer honestly and rise into the next version of yourself.",
    reversed: "Self-criticism or hesitation may be delaying a decision your spirit already recognizes."
  },
  {
    number: 21,
    name: "The World",
    keywords: ["completion", "wholeness", "arrival"],
    upright: "A cycle is ready to come full circle, bringing integration and earned closure.",
    reversed: "A final lesson or loose end may need attention before true completion lands."
  }
];

const suitDefinitions = {
  wands: {
    label: "Wands",
    icon: "bi-fire",
    realm: "action, courage, passion, and creative momentum",
    keywords: ["spark", "action"],
    color: "ember"
  },
  cups: {
    label: "Cups",
    icon: "bi-droplet",
    realm: "emotion, intuition, connection, and vulnerability",
    keywords: ["feeling", "relationship"],
    color: "tide"
  },
  swords: {
    label: "Swords",
    icon: "bi-wind",
    realm: "thought, truth, conflict, and mental clarity",
    keywords: ["mind", "truth"],
    color: "storm"
  },
  pentacles: {
    label: "Pentacles",
    icon: "bi-coin",
    realm: "work, resources, body, and long-term stability",
    keywords: ["grounding", "resources"],
    color: "earth"
  }
};

const rankDefinitions = [
  {
    rank: "Ace",
    keywords: ["potential", "opening"],
    upright: "A fresh beginning is available in the realm of",
    reversed: "Untapped potential or a delayed beginning is lingering in the realm of"
  },
  {
    rank: "Two",
    keywords: ["choice", "balance"],
    upright: "A choice, exchange, or balancing act is shaping the realm of",
    reversed: "Indecision or imbalance is making the realm of difficult to steady"
  },
  {
    rank: "Three",
    keywords: ["growth", "expansion"],
    upright: "Growth through collaboration, discovery, or first results is appearing in the realm of",
    reversed: "Scattered effort or delayed progress is slowing the realm of"
  },
  {
    rank: "Four",
    keywords: ["structure", "stability"],
    upright: "A need for rest, structure, or stronger foundations is present in the realm of",
    reversed: "Restlessness or shaky structure is unsettling the realm of"
  },
  {
    rank: "Five",
    keywords: ["friction", "disruption"],
    upright: "Challenge, contrast, or tension is pushing growth in the realm of",
    reversed: "Avoided conflict or lingering instability is complicating the realm of"
  },
  {
    rank: "Six",
    keywords: ["adjustment", "transition"],
    upright: "Movement, support, or rebalancing is available in the realm of",
    reversed: "Progress is possible, but old weight is still slowing the realm of"
  },
  {
    rank: "Seven",
    keywords: ["assessment", "testing"],
    upright: "Discernment, patience, or strategic effort is required in the realm of",
    reversed: "Impatience or defensiveness is clouding the realm of"
  },
  {
    rank: "Eight",
    keywords: ["momentum", "skill"],
    upright: "Momentum, repetition, or deeper mastery is developing in the realm of",
    reversed: "Stagnation or rushed effort is interrupting the realm of"
  },
  {
    rank: "Nine",
    keywords: ["culmination", "intensity"],
    upright: "The realm of is approaching a peak that asks for maturity and awareness",
    reversed: "Strain, overextension, or hard-to-shake worry is hovering around the realm of"
  },
  {
    rank: "Ten",
    keywords: ["completion", "full cycle"],
    upright: "A full cycle, result, or heavier responsibility is completing itself in the realm of",
    reversed: "An overloaded cycle or unfinished release is lingering in the realm of"
  },
  {
    rank: "Page",
    keywords: ["curiosity", "learning"],
    upright: "A message, beginner's mindset, or new sensitivity is entering the realm of",
    reversed: "Immaturity, avoidance, or mixed signals are blurring the realm of"
  },
  {
    rank: "Knight",
    keywords: ["drive", "motion"],
    upright: "Strong movement, pursuit, or focused drive is charging through the realm of",
    reversed: "Impulsiveness, hesitation, or misdirected force is disturbing the realm of"
  },
  {
    rank: "Queen",
    keywords: ["embodiment", "maturity"],
    upright: "An embodied, intuitive, or deeply practiced approach is strengthening the realm of",
    reversed: "Withheld wisdom or emotional imbalance is affecting the realm of"
  },
  {
    rank: "King",
    keywords: ["mastery", "authority"],
    upright: "Leadership, command, or mature stewardship is defining the realm of",
    reversed: "Control issues or misused authority are distorting the realm of"
  }
];

const elements = {
  appMain: document.querySelector(".app-main"),
  spreadPicker: document.querySelector("#spreadPicker"),
  spreadPreviewTitle: document.querySelector("#spreadPreviewTitle"),
  spreadPreviewCount: document.querySelector("#spreadPreviewCount"),
  spreadPreviewDescription: document.querySelector("#spreadPreviewDescription"),
  spreadPreviewPositions: document.querySelector("#spreadPreviewPositions"),
  questionPreview: document.querySelector("#questionPreview"),
  setupSpreadName: document.querySelector("#setupSpreadName"),
  setupSpreadMeta: document.querySelector("#setupSpreadMeta"),
  questionInput: document.querySelector("#questionInput"),
  drawButton: document.querySelector("#drawButton"),
  backButton: document.querySelector("#backButton"),
  redrawButton: document.querySelector("#redrawButton"),
  resetButton: document.querySelector("#resetButton"),
  setupView: document.querySelector("#setupView"),
  readingView: document.querySelector("#readingView"),
  readingTitle: document.querySelector("#readingTitle"),
  readingQuestion: document.querySelector("#readingQuestion"),
  readingMeta: document.querySelector("#readingMeta"),
  readingSummary: document.querySelector("#readingSummary"),
  positionTimeline: document.querySelector("#positionTimeline"),
  cardsAccordion: document.querySelector("#cardsAccordion"),
  readingTakeaways: document.querySelector("#readingTakeaways"),
  progressItems: Array.from(document.querySelectorAll("[data-progress-step]"))
};

const tarotDeck = buildDeck();
const appState = {
  selectedSpreadId: "three",
  currentView: "setup",
  currentQuestion: "",
  currentReading: null,
  artworkDeck: null,
  artworkSeed: ""
};

initialize();

function initialize() {
  renderSpreadPicker();
  renderSidebar();
  renderSetupContext();
  updateProgress();
  showView("setup");

  elements.questionInput.addEventListener("input", handleQuestionInput);
  elements.drawButton.addEventListener("click", handleDraw);
  elements.backButton.addEventListener("click", () => showView("setup"));
  elements.redrawButton.addEventListener("click", redrawReading);
  elements.resetButton.addEventListener("click", resetReading);
}

function buildDeck() {
  const artIndexOffsets = {
    wands: 22,
    cups: 36,
    swords: 50,
    pentacles: 64
  };

  const majorCards = majorArcana.map((card) => ({
    id: `major-${card.number}`,
    kind: "major",
    suitKey: "major",
    suit: "Major Arcana",
    icon: "bi-stars",
    artIndex: card.number,
    ...card
  }));

  const minorCards = Object.entries(suitDefinitions).flatMap(([suitKey, suitConfig]) =>
    rankDefinitions.map((rankConfig, rankIndex) => ({
      id: `${rankConfig.rank.toLowerCase()}-${suitKey}`,
      kind: "minor",
      suitKey,
      suit: suitConfig.label,
      icon: suitConfig.icon,
      artIndex: artIndexOffsets[suitKey] + rankIndex,
      name: `${rankConfig.rank} of ${suitConfig.label}`,
      keywords: [...rankConfig.keywords, ...suitConfig.keywords],
      upright: `${rankConfig.upright} ${suitConfig.realm}.`,
      reversed: `${rankConfig.reversed} ${suitConfig.realm}.`
    }))
  );

  return [...majorCards, ...minorCards];
}

function renderSpreadPicker() {
  elements.spreadPicker.innerHTML = spreadCatalog
    .map(
      (spread) => `
        <div class="col-12">
          <button
            type="button"
            class="spread-choice ${spread.id === appState.selectedSpreadId ? "is-active" : ""}"
            data-spread-id="${spread.id}"
            aria-pressed="${spread.id === appState.selectedSpreadId ? "true" : "false"}"
          >
            <div class="spread-choice__top">
              <span class="spread-choice__meta">${spread.shortLabel}</span>
              <span class="spread-choice__icon">
                <i class="bi ${spread.id === appState.selectedSpreadId ? "bi-check2" : "bi-chevron-right"}"></i>
              </span>
            </div>
            <div class="spread-choice__title">${spread.name}</div>
            <p class="spread-choice__description">${spread.description}</p>
            <div class="spread-choice__footer">
              <span>${spread.positions.length} positions</span>
              <span>${spread.id === appState.selectedSpreadId ? "Selected" : "Tap to choose"}</span>
            </div>
          </button>
        </div>
      `
    )
    .join("");

  elements.spreadPicker.querySelectorAll("[data-spread-id]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedSpreadId = button.dataset.spreadId;
      appState.currentReading = null;
      renderSpreadPicker();
      renderSidebar();
      renderSetupContext();
      updateProgress();
    });
  });
}

function renderSidebar() {
  const spread = getSelectedSpread();
  elements.spreadPreviewTitle.textContent = spread.name;
  elements.spreadPreviewCount.textContent = `${spread.positions.length} cards`;
  elements.spreadPreviewDescription.textContent = spread.description;
  elements.spreadPreviewPositions.innerHTML = spread.positions
    .map((position, index) => `<span class="position-pill">${index + 1}. ${position.title}</span>`)
    .join("");
  elements.questionPreview.textContent = appState.currentQuestion
    ? appState.currentQuestion
    : "Your question will appear here once you start typing.";
}

function renderSetupContext() {
  const spread = getSelectedSpread();
  elements.setupSpreadName.textContent = spread.name;
  elements.setupSpreadMeta.textContent = `${spread.positions.length} cards. ${spread.description}`;
  elements.drawButton.innerHTML = `<i class="bi bi-stars me-2"></i>Reveal ${spread.shortLabel} reading`;
}

function handleQuestionInput() {
  elements.questionInput.classList.remove("is-invalid");
  const nextQuestion = elements.questionInput.value.trim();

  if (nextQuestion !== appState.artworkSeed) {
    disposeArtworkDeck();
  }

  appState.currentQuestion = nextQuestion;
  appState.currentReading = null;
  renderSidebar();
  updateProgress();
}

function handleDraw() {
  const question = elements.questionInput.value.trim();

  if (!question) {
    elements.questionInput.classList.add("is-invalid");
    elements.questionInput.focus();
    return;
  }

  appState.currentQuestion = question;
  renderSidebar();
  createReading();
}

function createReading() {
  const spread = getSelectedSpread();
  const artworkDeck = getArtworkDeck(appState.currentQuestion);
  const draws = drawCards(spread.positions.length).map((draw) => ({
    ...draw,
    artUri: artworkDeck.getCardUrl(draw.artIndex)
  }));

  appState.currentReading = {
    spreadId: spread.id,
    question: appState.currentQuestion,
    draws
  };

  renderReadingView();
  showView("reading");
}

function redrawReading() {
  if (!appState.currentQuestion) {
    showView("setup");
    return;
  }

  createReading();
}

function drawCards(count) {
  const shuffled = [...tarotDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count).map((card) => ({
    ...card,
    isReversed: Math.random() < 0.35
  }));
}

function renderReadingView() {
  const reading = appState.currentReading;
  const spread = spreadCatalog.find((item) => item.id === reading.spreadId);
  const overallInsight = buildOverallInsight(spread, reading.question, reading.draws);

  elements.readingTitle.textContent = spread.name;
  elements.readingQuestion.textContent = reading.question;
  elements.readingMeta.textContent = `${spread.positions.length} cards · ${countReversed(reading.draws)} reversed`;
  elements.readingSummary.innerHTML = `
    <h2>${overallInsight.headline}</h2>
    <p class="mb-0">${overallInsight.summary}</p>
  `;

  elements.positionTimeline.innerHTML = reading.draws
    .map(
      (draw, index) => `
        <div class="timeline-card">
          <div class="timeline-thumb ${draw.isReversed ? "timeline-thumb--reversed" : ""}">
            <img src="${draw.artUri}" alt="${draw.name} tarot card art" loading="lazy" />
          </div>
          <div class="timeline-card__body">
            <div class="timeline-step">Position ${index + 1}</div>
            <div class="timeline-title">${spread.positions[index].title}</div>
            <p class="timeline-meta mb-0">${draw.name} · ${draw.isReversed ? "Reversed" : "Upright"}</p>
          </div>
        </div>
      `
    )
    .join("");

  elements.cardsAccordion.innerHTML = reading.draws
    .map((draw, index) => renderAccordionItem(draw, spread.positions[index], index))
    .join("");

  elements.readingTakeaways.innerHTML = `
    <h2 class="takeaways-title">What to carry forward</h2>
    <ul>
      ${overallInsight.takeaways.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderAccordionItem(draw, position, index) {
  const isFirst = index === 0;
  const headingId = `reading-heading-${index}`;
  const collapseId = `reading-collapse-${index}`;
  const meaning = draw.isReversed ? draw.reversed : draw.upright;
  const orientationLabel = draw.isReversed ? "Reversed" : "Upright";

  return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="${headingId}">
        <button
        class="accordion-button ${isFirst ? "" : "collapsed"}"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${collapseId}"
          aria-expanded="${isFirst ? "true" : "false"}"
          aria-controls="${collapseId}"
        >
          <div class="accordion-button__content">
            <div class="accordion-step">${position.title}</div>
            <div class="accordion-title">${draw.name}</div>
            <p class="accordion-summary">${position.summary} · ${orientationLabel}</p>
          </div>
        </button>
      </h2>
      <div
        id="${collapseId}"
        class="accordion-collapse collapse ${isFirst ? "show" : ""}"
        aria-labelledby="${headingId}"
      >
        <div class="accordion-body">
          <div class="accordion-detail">
            <div class="card-art-panel">
              <div class="card-art-frame ${draw.isReversed ? "card-art-frame--reversed" : ""}">
                <img src="${draw.artUri}" alt="${draw.name} tarot card art" loading="lazy" />
              </div>
              <div class="card-art-meta">
                <span>${orientationLabel}</span>
                <span>${draw.kind === "major" ? "Major" : draw.suit}</span>
              </div>
            </div>

            <div>
              <div class="accordion-step">Position ${index + 1}</div>
              <p class="accordion-copy mb-0">${position.purpose}</p>
              <div class="keyword-pills">
                ${draw.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
              </div>
              <p class="accordion-copy mb-0">${meaning} ${buildCardInterpretation(draw, position)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildCardInterpretation(draw, position) {
  const realmSentence =
    draw.kind === "major"
      ? "Because this is a major arcana card, the message carries broader turning-point energy."
      : `As a ${draw.suit.toLowerCase()} card, it especially emphasizes ${suitDefinitions[draw.suitKey].realm}.`;

  const orientationSentence = draw.isReversed
    ? "Its reversed orientation suggests the work is more internal, delayed, or tangled than it first appears."
    : "Its upright orientation suggests the energy is available and easier to act on directly.";

  return `In the ${position.title.toLowerCase()} position, ${realmSentence.toLowerCase()} ${orientationSentence}`;
}

function buildOverallInsight(spread, question, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const reversedCount = countReversed(draws);
  const leadingSuitKey = getLeadingSuit(draws);
  const finalDraw = draws[draws.length - 1];
  const leadingSuitText = leadingSuitKey
    ? `${suitDefinitions[leadingSuitKey].label} dominate the reading, bringing ${suitDefinitions[leadingSuitKey].realm} to the foreground.`
    : "The reading is evenly mixed, which suggests the question touches several parts of life at once.";
  const majorText =
    majorCount >= Math.ceil(draws.length / 3)
      ? "Several major arcana cards are present, so this feels like a meaningful turning point rather than a passing mood."
      : "Most of the spread lives in the minor arcana, which points toward practical choices, habits, and everyday dynamics.";
  const reversalText =
    reversedCount >= Math.ceil(draws.length / 2)
      ? "Many reversed cards are present, so patience and internal honesty matter before decisive action."
      : "More upright than reversed cards appear, so the reading favors visible movement and usable next steps.";
  const closingMessage = finalDraw.isReversed ? finalDraw.reversed : finalDraw.upright;
  const escapedQuestion = escapeHtml(question);

  return {
    headline: createHeadline(spread, draws),
    summary: `For the question "${escapedQuestion}," this ${spread.name.toLowerCase()} is shaped by ${leadingSuitText.toLowerCase()} ${majorText} ${reversalText} The reading closes with ${finalDraw.name} in the ${spread.positions[spread.positions.length - 1].title.toLowerCase()} position, suggesting that ${closingMessage.toLowerCase()}`,
    takeaways: [
      leadingSuitKey
        ? `Give extra attention to ${suitDefinitions[leadingSuitKey].realm}, because that is where the spread is concentrating its energy.`
        : "Treat this as a whole-picture reading and notice which position stirred the strongest response in you.",
      reversedCount > 0
        ? "Do not skip past the reversed cards. They point toward the parts of the story that need reflection before action."
        : "Use the momentum in the upright cards soon so the reading becomes movement instead of only contemplation.",
      `Use the final position, ${spread.positions[spread.positions.length - 1].title}, as your next-step compass and ask how ${finalDraw.name} wants to be lived out in real life.`
    ]
  };
}

function createHeadline(spread, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const leadingSuitKey = getLeadingSuit(draws);

  if (majorCount >= Math.ceil(draws.length / 2)) {
    return "This reading carries turning-point energy.";
  }

  if (leadingSuitKey === "cups") {
    return "Emotion and intuition are leading the message.";
  }

  if (leadingSuitKey === "wands") {
    return "Action and creative courage are at the center of this spread.";
  }

  if (leadingSuitKey === "swords") {
    return "Truth, tension, and clear thinking are shaping the reading.";
  }

  if (leadingSuitKey === "pentacles") {
    return "The cards are grounding the question in practical reality.";
  }

  return `${spread.name} is asking for a balanced read of the whole picture.`;
}

function getLeadingSuit(draws) {
  const counts = draws.reduce((accumulator, draw) => {
    if (draw.kind === "minor") {
      accumulator[draw.suitKey] = (accumulator[draw.suitKey] || 0) + 1;
    }

    return accumulator;
  }, {});

  const sorted = Object.entries(counts).sort((left, right) => right[1] - left[1]);

  if (!sorted.length) {
    return null;
  }

  if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
    return null;
  }

  return sorted[0][0];
}

function countReversed(draws) {
  return draws.filter((draw) => draw.isReversed).length;
}

function getSelectedSpread() {
  return spreadCatalog.find((spread) => spread.id === appState.selectedSpreadId);
}

function showView(viewName) {
  appState.currentView = viewName;
  elements.setupView.hidden = viewName !== "setup";
  elements.readingView.hidden = viewName !== "reading";
  elements.appMain.scrollTo({ top: 0, behavior: "auto" });
  updateProgress();
}

function updateProgress() {
  const questionReady = Boolean(appState.currentQuestion);
  const readingReady = Boolean(appState.currentReading);

  elements.progressItems.forEach((item) => {
    const step = item.dataset.progressStep;
    item.classList.remove("is-active", "is-complete");

    if (step === "spread") {
      item.classList.add("is-complete");
      if (appState.currentView === "setup" && !questionReady) {
        item.classList.add("is-active");
      }
    }

    if (step === "question") {
      if (questionReady) {
        item.classList.add("is-complete");
      }

      if (appState.currentView === "setup" && questionReady) {
        item.classList.add("is-active");
      }
    }

    if (step === "reading") {
      if (readingReady) {
        item.classList.add("is-complete");
      }

      if (appState.currentView === "reading") {
        item.classList.add("is-active");
      }
    }
  });
}

function resetReading() {
  appState.currentQuestion = "";
  appState.currentReading = null;
  disposeArtworkDeck();
  elements.questionInput.value = "";
  elements.questionInput.classList.remove("is-invalid");
  elements.readingSummary.innerHTML = "";
  elements.positionTimeline.innerHTML = "";
  elements.cardsAccordion.innerHTML = "";
  elements.readingTakeaways.innerHTML = "";
  renderSidebar();
  renderSetupContext();
  showView("setup");
  elements.questionInput.focus();
}

function getArtworkDeck(seedText) {
  const normalizedSeed = seedText.trim();

  if (appState.artworkDeck && appState.artworkSeed === normalizedSeed) {
    return appState.artworkDeck;
  }

  disposeArtworkDeck();
  appState.artworkDeck = TarotArt.createDeck(normalizedSeed);
  appState.artworkSeed = normalizedSeed;
  return appState.artworkDeck;
}

function disposeArtworkDeck() {
  if (appState.artworkDeck) {
    appState.artworkDeck.dispose();
  }

  appState.artworkDeck = null;
  appState.artworkSeed = "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
