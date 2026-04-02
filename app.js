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
  mysteryCardButton: document.querySelector("#mysteryCardButton"),
  mysteryCardName: document.querySelector(".mystery-card__name"),
  mysteryCardPrompt: document.querySelector(".mystery-card__prompt"),
  setupStepLabel: document.querySelector("#setupStepLabel"),
  setupTitle: document.querySelector("#setupTitle"),
  setupBody: document.querySelector("#setupBody"),
  spreadChoicePanel: document.querySelector("#spreadChoicePanel"),
  spreadPicker: document.querySelector("#spreadPicker"),
  focusPanel: document.querySelector("#focusPanel"),
  focusRing: document.querySelector("#focusRing"),
  focusTimerValue: document.querySelector("#focusTimerValue"),
  focusSpreadName: document.querySelector("#focusSpreadName"),
  focusCountdownText: document.querySelector("#focusCountdownText"),
  setupFootnote: document.querySelector("#setupFootnote"),
  setupView: document.querySelector("#setupView"),
  readingView: document.querySelector("#readingView"),
  readingTitle: document.querySelector("#readingTitle"),
  readingHeadline: document.querySelector("#readingHeadline"),
  readingSummary: document.querySelector("#readingSummary"),
  readingGuideText: document.querySelector("#readingGuideText"),
  readingMeta: document.querySelector("#readingMeta"),
  readingBoard: document.querySelector("#readingBoard"),
  readingSheet: document.querySelector("#readingSheet"),
  sheetToggle: document.querySelector("#sheetToggle"),
  sheetToggleLabel: document.querySelector("#sheetToggleLabel"),
  cardsAccordion: document.querySelector("#cardsAccordion"),
  readingTakeaways: document.querySelector("#readingTakeaways"),
  redrawButton: document.querySelector("#redrawButton"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton")
};

const tarotDeck = buildDeck();
const appState = {
  selectedSpreadId: null,
  currentView: "setup",
  currentStage: "invite",
  currentReading: null,
  artworkDeck: null,
  artworkSeed: "",
  focusCountdown: 10,
  focusTimerId: null,
  sheetExpanded: false
};

initialize();

function initialize() {
  renderSpreadPicker();
  renderSetupStage();
  showView("setup");

  elements.mysteryCardButton.addEventListener("click", activateDeck);
  elements.sheetToggle.addEventListener("click", toggleSheet);
  elements.redrawButton.addEventListener("click", redrawReading);
  elements.backButton.addEventListener("click", resetExperience);
  elements.resetButton.addEventListener("click", resetExperience);
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
        <button
          type="button"
          class="spread-choice"
          data-spread-id="${spread.id}"
          aria-label="${spread.name}, ${spread.positions.length} positions"
        >
          <div class="spread-choice__row">
            <div>
              <div class="spread-choice__title">${spread.name}</div>
              <p class="spread-choice__description">${spread.description}</p>
            </div>
            <span class="spread-choice__meta">${spread.shortLabel}</span>
          </div>
        </button>
      `
    )
    .join("");

  elements.spreadPicker.querySelectorAll("[data-spread-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectSpread(button.dataset.spreadId);
    });
  });
}

function activateDeck() {
  if (appState.currentStage !== "invite") {
    return;
  }

  appState.currentStage = "spreads";
  renderSetupStage();
}

function selectSpread(spreadId) {
  appState.selectedSpreadId = spreadId;
  appState.currentReading = null;
  startFocusCountdown();
}

function startFocusCountdown() {
  clearFocusCountdown();
  appState.currentStage = "focus";
  appState.focusCountdown = 10;
  renderSetupStage();

  appState.focusTimerId = window.setInterval(() => {
    appState.focusCountdown -= 1;
    updateFocusCountdown();

    if (appState.focusCountdown <= 0) {
      clearFocusCountdown();
      revealReading();
    }
  }, 1000);
}

function clearFocusCountdown() {
  if (appState.focusTimerId) {
    window.clearInterval(appState.focusTimerId);
    appState.focusTimerId = null;
  }
}

function renderSetupStage() {
  const spread = getSelectedSpread();

  elements.mysteryCardButton.classList.toggle("is-spinning", appState.currentStage !== "invite");
  elements.spreadChoicePanel.hidden = appState.currentStage !== "spreads";
  elements.focusPanel.hidden = appState.currentStage !== "focus";

  if (appState.currentStage === "invite") {
    elements.setupStepLabel.textContent = "Step 1";
    elements.setupTitle.textContent = "Tap the covered card to wake the deck.";
    elements.setupBody.textContent =
      "The card stays mysterious at first. Once you touch it, the ritual begins and the deck starts spinning.";
    elements.setupFootnote.textContent = "No question yet. Just start the ritual.";
    elements.mysteryCardName.textContent = "The deck is hidden";
    elements.mysteryCardPrompt.textContent = "Tap to begin";
    return;
  }

  if (appState.currentStage === "spreads") {
    elements.setupStepLabel.textContent = "Step 2";
    elements.setupTitle.textContent = "Choose the type of reading you want.";
    elements.setupBody.textContent =
      "While the card spins, choose how much guidance you want from the deck.";
    elements.setupFootnote.textContent = "One spread will shape the whole reading.";
    elements.mysteryCardName.textContent = "The deck is turning";
    elements.mysteryCardPrompt.textContent = "Choose a spread below";
    return;
  }

  if (appState.currentStage === "focus" && spread) {
    elements.setupStepLabel.textContent = "Step 3";
    elements.setupTitle.textContent = "Hold your question in mind for ten slow seconds.";
    elements.setupBody.textContent =
      "No typing now. Keep the question private, stay with it quietly, and let the spread settle around it.";
    elements.setupFootnote.textContent = `Preparing a ${spread.name.toLowerCase()} reading.`;
    elements.mysteryCardName.textContent = "The question is settling";
    elements.mysteryCardPrompt.textContent = "The reveal is close";
    updateFocusCountdown();
  }
}

function updateFocusCountdown() {
  const spread = getSelectedSpread();
  const progress = (Math.max(appState.focusCountdown, 0) / 10) * 100;

  elements.focusRing.style.setProperty("--countdown-progress", progress);
  elements.focusTimerValue.textContent = String(Math.max(appState.focusCountdown, 0));
  elements.focusSpreadName.textContent = spread ? spread.name : "";

  if (appState.focusCountdown > 1) {
    elements.focusCountdownText.textContent = `${appState.focusCountdown} seconds remaining. Keep the question quietly in mind.`;
    return;
  }

  if (appState.focusCountdown === 1) {
    elements.focusCountdownText.textContent = "1 second remaining. Let the spread settle.";
    return;
  }

  elements.focusCountdownText.textContent = "Revealing the spread now.";
}

function revealReading() {
  createReading();
  showView("reading");
  elements.readingSheet.classList.remove("is-visible", "is-expanded");
  setSheetExpanded(false);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      elements.readingSheet.classList.add("is-visible");
    });
  });
}

function createReading() {
  const spread = getSelectedSpread();

  if (!spread) {
    return;
  }

  const artworkDeck = getArtworkDeck(buildReadingSeed());
  const draws = drawCards(spread.positions.length).map((draw) => ({
    ...draw,
    artUri: artworkDeck.getCardUrl(draw.artIndex)
  }));

  appState.currentReading = {
    spreadId: spread.id,
    draws
  };

  renderReadingView();
}

function redrawReading() {
  if (!appState.selectedSpreadId) {
    showView("setup");
    return;
  }

  revealReading();
}

function buildReadingSeed() {
  return `${appState.selectedSpreadId}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
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
  const overallInsight = buildOverallInsight(spread, reading.draws);

  elements.readingTitle.textContent = spread.name;
  elements.readingHeadline.textContent = overallInsight.headline;
  elements.readingSummary.textContent = overallInsight.summary;
  elements.readingGuideText.textContent = buildReadingGuide(spread);
  elements.readingMeta.textContent = `${spread.positions.length} cards · ${countReversed(reading.draws)} reversed`;

  renderReadingBoard(spread, reading.draws);

  elements.cardsAccordion.innerHTML = reading.draws
    .map((draw, index) => renderAccordionItem(draw, spread.positions[index], index))
    .join("");

  elements.readingTakeaways.innerHTML = `
    <h2 class="takeaways-title">Text Reading</h2>
    <ul>
      ${overallInsight.takeaways.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderReadingBoard(spread, draws) {
  elements.readingBoard.className = `reading-board ${spread.layoutClass}`;
  elements.readingBoard.innerHTML = draws
    .map(
      (draw, index) => `
        <button
          type="button"
          class="reading-position"
          data-card-index="${index}"
          aria-controls="reading-collapse-${index}"
        >
          <div class="reading-position__card ${draw.isReversed ? "reading-position__card--reversed" : ""}">
            <img src="${draw.artUri}" alt="${draw.name} tarot card art" loading="lazy" />
          </div>
          <div class="reading-position__caption">
            <span class="reading-position__step">${index + 1}</span>
            <span class="reading-position__title">${spread.positions[index].title}</span>
          </div>
        </button>
      `
    )
    .join("");

  elements.readingBoard.querySelectorAll("[data-card-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openReadingCard(Number(button.dataset.cardIndex));
    });
  });
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

function buildReadingGuide(spread) {
  if (spread.positions.length === 1) {
    return "The interpretation window starts in peek mode. Pull it higher or tap the card if you want the full reading.";
  }

  return "Tap any card above to open that part of the spread, or pull the interpretation window higher for the full reading.";
}

function buildOverallInsight(spread, draws) {
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

  return {
    headline: createHeadline(spread, draws),
    summary: `This ${spread.name.toLowerCase()} settles around ${leadingSuitText.toLowerCase()} ${majorText} ${reversalText} It closes with ${finalDraw.name} in the ${spread.positions[spread.positions.length - 1].title.toLowerCase()} position, suggesting that ${closingMessage.toLowerCase()}`,
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
}

function openReadingCard(index) {
  const collapseElement = document.querySelector(`#reading-collapse-${index}`);

  if (!collapseElement || typeof bootstrap === "undefined") {
    return;
  }

  if (!elements.readingSheet.classList.contains("is-visible")) {
    elements.readingSheet.classList.add("is-visible");
  }

  setSheetExpanded(true);
  const collapse = bootstrap.Collapse.getOrCreateInstance(collapseElement, { toggle: false });
  collapse.show();
  window.setTimeout(() => {
    collapseElement.closest(".accordion-item")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

function toggleSheet() {
  if (!elements.readingSheet.classList.contains("is-visible")) {
    elements.readingSheet.classList.add("is-visible");
  }

  setSheetExpanded(!appState.sheetExpanded);
}

function setSheetExpanded(expanded) {
  appState.sheetExpanded = expanded;
  elements.readingSheet.classList.toggle("is-expanded", expanded);
  elements.sheetToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  elements.sheetToggleLabel.textContent = expanded ? "Close interpretation" : "Open interpretation";
}

function resetExperience() {
  clearFocusCountdown();
  disposeArtworkDeck();
  appState.selectedSpreadId = null;
  appState.currentStage = "invite";
  appState.currentReading = null;
  appState.sheetExpanded = false;
  elements.readingSheet.classList.remove("is-visible", "is-expanded");
  elements.readingBoard.innerHTML = "";
  elements.cardsAccordion.innerHTML = "";
  elements.readingTakeaways.innerHTML = "";
  renderSpreadPicker();
  renderSetupStage();
  showView("setup");
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
