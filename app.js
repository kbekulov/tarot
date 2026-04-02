const spreadCatalog = [
  {
    id: "single",
    name: "Single Card Insight",
    shortLabel: "1 card",
    compactHint: "Quick answer",
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
    compactHint: "Timeline",
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
    compactHint: "Two-person read",
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
    compactHint: "Compare paths",
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
    compactHint: "Deep dive",
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

const oracleCatalog = [
  {
    id: "path",
    name: "Hidden Path Oracle",
    shortLabel: "3 pages",
    compactHint: "Direction",
    description: "Three pages for direction when the road feels difficult to read.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#fff8ef",
      ink: "#2f3040",
      accent: "#d4934f",
      border: "#ead8bf"
    },
    positions: [
      {
        title: "Veiled Path",
        summary: "What is present but still hard to see clearly.",
        purpose: "This page reveals the part of the road that is shaping you before it fully makes sense."
      },
      {
        title: "Lantern",
        summary: "What helps you see with more honesty.",
        purpose: "This page names the attitude or insight that makes the hidden path easier to walk."
      },
      {
        title: "Next Footstep",
        summary: "What opens with one grounded move.",
        purpose: "This page points to the next step that becomes possible without forcing the whole journey."
      }
    ]
  },
  {
    id: "timing",
    name: "Timing Oracle",
    shortLabel: "3 pages",
    compactHint: "Timing",
    description: "Three pages for ripeness, delay, and the right hour.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#fbf7ef",
      ink: "#384144",
      accent: "#b58a5a",
      border: "#e4d8c9"
    },
    positions: [
      {
        title: "Present Weather",
        summary: "The pace surrounding the situation now.",
        purpose: "This page shows the current tempo so you do not mistake pressure for readiness."
      },
      {
        title: "Ripening Point",
        summary: "What still needs time, heat, or quiet.",
        purpose: "This page reveals what must mature before the moment becomes easier to trust."
      },
      {
        title: "Right Hour",
        summary: "The kind of timing that serves the truth.",
        purpose: "This page hints at the timing quality that makes the next move feel clean instead of rushed."
      }
    ]
  },
  {
    id: "heart",
    name: "Heart Oracle",
    shortLabel: "3 pages",
    compactHint: "Feeling",
    description: "Three pages for tenderness, emotion, and what wants a softer truth.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#fff5f4",
      ink: "#46363d",
      accent: "#d1797f",
      border: "#ead2d7"
    },
    positions: [
      {
        title: "Undercurrent",
        summary: "What the heart is holding underneath the surface.",
        purpose: "This page names the feeling that may be quieter than the story you are telling yourself."
      },
      {
        title: "Tender Truth",
        summary: "The emotional truth asking to be respected.",
        purpose: "This page shows the softer truth that becomes clear when defensiveness drops."
      },
      {
        title: "Kind Response",
        summary: "What compassion would do next.",
        purpose: "This page points toward the most caring next response to what you are feeling."
      }
    ]
  },
  {
    id: "threshold",
    name: "Threshold Oracle",
    shortLabel: "3 pages",
    compactHint: "Crossing",
    description: "Three pages for endings, beginnings, and what must be carried across.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#f7f4fb",
      ink: "#37324c",
      accent: "#8a7bc9",
      border: "#ddd7ef"
    },
    positions: [
      {
        title: "What Is Closing",
        summary: "The part of the old chapter that is ending.",
        purpose: "This page reveals the pattern, role, or expectation that is no longer meant to keep leading."
      },
      {
        title: "Threshold",
        summary: "The living edge between old and new.",
        purpose: "This page describes the threshold itself and the kind of presence it asks from you."
      },
      {
        title: "What Must Be Carried",
        summary: "The truth that deserves to cross with you.",
        purpose: "This page names the wisdom or value that belongs in the next chapter, not the last one."
      }
    ]
  },
  {
    id: "quiet",
    name: "Quiet Truth Oracle",
    shortLabel: "3 pages",
    compactHint: "Clarity",
    description: "Three pages for clearing noise and trusting the truest signal.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#f3f8fb",
      ink: "#304149",
      accent: "#63a0b3",
      border: "#d7e5ea"
    },
    positions: [
      {
        title: "Noise on Top",
        summary: "What is loud but not necessarily true.",
        purpose: "This page shows the surface noise that can confuse the inner signal if you let it lead."
      },
      {
        title: "Quiet Below",
        summary: "What stays true underneath the noise.",
        purpose: "This page reveals the quieter knowing that remains steady after the first reaction passes."
      },
      {
        title: "Trusted Signal",
        summary: "What deserves to guide your next move.",
        purpose: "This page points toward the clearest signal to follow once the static has settled."
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
  appShell: document.querySelector(".app-shell"),
  appMain: document.querySelector(".app-main"),
  modeButtons: Array.from(document.querySelectorAll("[data-app-mode]")),
  setupStage: document.querySelector(".setup-stage"),
  mysteryCardButton: document.querySelector("#mysteryCardButton"),
  mysteryCardCrest: document.querySelector(".mystery-card__crest"),
  mysteryCardName: document.querySelector(".mystery-card__name"),
  mysteryCardPrompt: document.querySelector(".mystery-card__prompt"),
  setupStepLabel: document.querySelector("#setupStepLabel"),
  setupTitle: document.querySelector("#setupTitle"),
  setupBody: document.querySelector("#setupBody"),
  choiceSectionLabel: document.querySelector("#choiceSectionLabel"),
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
const oracleDeck = buildOracleDeck();
const appState = {
  currentMode: "tarot",
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
  renderModeSwitch();
  renderSpreadPicker();
  renderSetupStage();
  showView("setup");

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchMode(button.dataset.appMode);
    });
  });
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

function buildOracleDeck() {
  const source = Array.isArray(window.ORACLE_PHRASES) ? window.ORACLE_PHRASES : [];

  return source.map((phrase, index) => ({
    id: `oracle-${index + 1}`,
    kind: "oracle",
    name: phrase,
    phrase
  }));
}

function renderModeSwitch() {
  elements.modeButtons.forEach((button) => {
    const isActive = button.dataset.appMode === appState.currentMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  elements.appShell.dataset.mode = appState.currentMode;
  elements.appMain.dataset.mode = appState.currentMode;
}

function switchMode(mode) {
  if (!mode || mode === appState.currentMode) {
    return;
  }

  appState.currentMode = mode;
  renderModeSwitch();
  resetExperience();
}

function renderSpreadPicker() {
  const catalog = getActiveCatalog();
  const choiceUnit = appState.currentMode === "oracle" ? "pages" : "positions";

  elements.spreadPicker.innerHTML = catalog
    .map(
      (spread) => `
        <button
          type="button"
          class="spread-choice"
          data-spread-id="${spread.id}"
          aria-label="${spread.name}, ${spread.positions.length} ${choiceUnit}"
        >
          <span class="spread-choice__meta">${spread.shortLabel}</span>
          <span class="spread-choice__title">${spread.name}</span>
          <span class="spread-choice__hint">${spread.compactHint}</span>
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
  const selection = getSelectedReadingConfig();
  const isOracleMode = appState.currentMode === "oracle";

  elements.setupStage.classList.toggle("setup-stage--invite", appState.currentStage === "invite");
  elements.setupStage.classList.toggle("setup-stage--spreads", appState.currentStage === "spreads");
  elements.setupStage.classList.toggle("setup-stage--focus", appState.currentStage === "focus");
  elements.setupStage.classList.toggle("setup-stage--oracle", isOracleMode);
  elements.mysteryCardButton.classList.toggle("is-spinning", appState.currentStage !== "invite");
  elements.spreadChoicePanel.hidden = appState.currentStage !== "spreads";
  elements.focusPanel.hidden = appState.currentStage !== "focus";
  elements.choiceSectionLabel.textContent = isOracleMode ? "Choose the oracle chapter" : "Choose the reading type";
  elements.mysteryCardCrest.innerHTML = isOracleMode
    ? '<i class="bi bi-journal-bookmark-fill"></i>'
    : '<i class="bi bi-stars"></i>';

  if (appState.currentStage === "invite") {
    elements.setupStepLabel.textContent = "Step 1";
    elements.setupTitle.textContent = isOracleMode
      ? "Tap the covered book to wake the oracle."
      : "Tap the covered card to wake the deck.";
    elements.setupBody.textContent = isOracleMode
      ? "The cover stays closed at first. Once you touch it, the oracle begins turning toward the right page."
      : "The card stays mysterious at first. Once you touch it, the ritual begins and the deck starts spinning.";
    elements.setupFootnote.textContent = "No question yet. Just start the ritual.";
    elements.mysteryCardName.textContent = isOracleMode ? "The book is closed" : "The deck is hidden";
    elements.mysteryCardPrompt.textContent = "Tap to begin";
    return;
  }

  if (appState.currentStage === "spreads") {
    elements.setupStepLabel.textContent = "Step 2";
    elements.setupTitle.textContent = isOracleMode
      ? "Choose the oracle chapter."
      : "Choose your reading.";
    elements.setupBody.textContent = isOracleMode
      ? "While the cover stirs, choose the kind of page wisdom you want to open."
      : "Pick the shape of the reveal while the deck keeps turning.";
    elements.setupFootnote.textContent = isOracleMode
      ? "Five chapters. Three pages will open from the one you choose."
      : "Five layouts. One tap chooses.";
    elements.mysteryCardName.textContent = isOracleMode ? "The pages are whispering" : "The deck is turning";
    elements.mysteryCardPrompt.textContent = isOracleMode ? "Pick a chapter" : "Pick a layout";
    return;
  }

  if (appState.currentStage === "focus" && selection) {
    elements.setupStepLabel.textContent = "Step 3";
    elements.setupTitle.textContent = "Hold your question in mind for ten slow seconds.";
    elements.setupBody.textContent = isOracleMode
      ? "No typing now. Keep the feeling simple and let the right page rise from the book."
      : "No typing now. Keep the question private, stay with it quietly, and let the spread settle around it.";
    elements.setupFootnote.textContent = isOracleMode
      ? `Opening a ${selection.name.toLowerCase()} chapter.`
      : `Preparing a ${selection.name.toLowerCase()} reading.`;
    elements.mysteryCardName.textContent = isOracleMode
      ? "The book is opening"
      : "The question is settling";
    elements.mysteryCardPrompt.textContent = isOracleMode ? "The page is almost here" : "The reveal is close";
    updateFocusCountdown();
  }
}

function updateFocusCountdown() {
  const selection = getSelectedReadingConfig();
  const progress = (Math.max(appState.focusCountdown, 0) / 10) * 100;

  elements.focusRing.style.setProperty("--countdown-progress", progress);
  elements.focusTimerValue.textContent = String(Math.max(appState.focusCountdown, 0));
  elements.focusSpreadName.textContent = selection ? selection.name : "";

  if (appState.focusCountdown > 1) {
    elements.focusCountdownText.textContent =
      appState.currentMode === "oracle"
        ? `${appState.focusCountdown} seconds remaining. Let one clear feeling stay with you.`
        : `${appState.focusCountdown} seconds remaining. Keep the question quietly in mind.`;
    return;
  }

  if (appState.focusCountdown === 1) {
    elements.focusCountdownText.textContent =
      appState.currentMode === "oracle"
        ? "1 second remaining. Let the page settle."
        : "1 second remaining. Let the spread settle.";
    return;
  }

  elements.focusCountdownText.textContent =
    appState.currentMode === "oracle" ? "Opening the oracle now." : "Revealing the spread now.";
}

function revealReading() {
  if (!createReading()) {
    return;
  }

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
  const selection = getSelectedReadingConfig();

  if (!selection) {
    return false;
  }

  if (appState.currentMode === "oracle") {
    if (oracleDeck.length < selection.positions.length) {
      return false;
    }

    disposeArtworkDeck();
    appState.currentReading = {
      mode: "oracle",
      configId: selection.id,
      draws: drawOraclePages(selection.positions.length, selection)
    };
    renderReadingView();
    return true;
  }

  const artworkDeck = getArtworkDeck(buildReadingSeed());
  const draws = drawCards(selection.positions.length).map((draw) => ({
    ...draw,
    artUri: artworkDeck.getCardUrl(draw.artIndex)
  }));

  appState.currentReading = {
    mode: "tarot",
    configId: selection.id,
    draws
  };

  renderReadingView();
  return true;
}

function redrawReading() {
  if (!appState.selectedSpreadId) {
    showView("setup");
    return;
  }

  revealReading();
}

function buildReadingSeed() {
  return `${appState.currentMode}-${appState.selectedSpreadId}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
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

function drawOraclePages(count, config) {
  const shuffled = [...oracleDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count).map((page, index) => ({
    ...page,
    artUri: buildOraclePageArt(page.phrase, config, index)
  }));
}

function renderReadingView() {
  const reading = appState.currentReading;

  if (!reading) {
    return;
  }

  const config = getCatalogForMode(reading.mode).find((item) => item.id === reading.configId);

  if (!config) {
    return;
  }

  const overallInsight = buildOverallInsight(reading.mode, config, reading.draws);

  elements.readingTitle.textContent = config.name;
  elements.readingHeadline.textContent = overallInsight.headline;
  elements.readingSummary.textContent = overallInsight.summary;
  elements.readingGuideText.textContent = buildReadingGuide(reading.mode, config);
  elements.readingMeta.textContent =
    reading.mode === "oracle"
      ? `${config.positions.length} pages · oracle book`
      : `${config.positions.length} cards · ${countReversed(reading.draws)} reversed`;
  elements.redrawButton.textContent = reading.mode === "oracle" ? "Open new pages" : "Draw again";

  renderReadingBoard(config, reading.draws, reading.mode);

  elements.cardsAccordion.innerHTML = reading.draws
    .map((draw, index) => renderAccordionItem(draw, config.positions[index], index, config))
    .join("");

  elements.readingTakeaways.innerHTML = `
    <h2 class="takeaways-title">${reading.mode === "oracle" ? "Oracle Notes" : "Text Reading"}</h2>
    <ul>
      ${overallInsight.takeaways.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderReadingBoard(config, draws, mode) {
  elements.readingBoard.className = `reading-board ${config.layoutClass}`;

  if (mode === "tarot" && config.layoutClass === "spread-layout-celtic") {
    elements.readingBoard.innerHTML = renderCelticBoard(config, draws);
  } else {
    elements.readingBoard.innerHTML = draws
      .map((draw, index) =>
        renderReadingPosition(draw, config.positions[index], index, {
          extraClasses: mode === "oracle" ? "reading-position--oracle" : ""
        })
      )
      .join("");
  }

  elements.readingBoard.querySelectorAll("[data-card-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openReadingCard(Number(button.dataset.cardIndex));
    });
  });
}

function renderCelticBoard(spread, draws) {
  return `
    <div class="celtic-cross-layout">
      <div class="celtic-cross-layout__top">
        ${renderReadingPosition(draws[4], spread.positions[4], 4, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__left">
        ${renderReadingPosition(draws[3], spread.positions[3], 3, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__center">
        ${renderReadingPosition(draws[0], spread.positions[0], 0, {
          extraClasses: "reading-position--celtic reading-position--celtic-core"
        })}
        ${renderReadingPosition(draws[1], spread.positions[1], 1, {
          extraClasses: "reading-position--celtic reading-position--celtic-crossing",
          hideCaption: true
        })}
      </div>
      <div class="celtic-cross-layout__right">
        ${renderReadingPosition(draws[5], spread.positions[5], 5, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__bottom">
        ${renderReadingPosition(draws[2], spread.positions[2], 2, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
    </div>
    <div class="celtic-staff">
      ${[6, 7, 8, 9]
        .map((index) =>
          renderReadingPosition(draws[index], spread.positions[index], index, {
            extraClasses: "reading-position--celtic reading-position--celtic-staff"
          })
        )
        .join("")}
    </div>
  `;
}

function renderReadingPosition(draw, position, index, options = {}) {
  const { extraClasses = "", hideCaption = false } = options;
  const className = ["reading-position", extraClasses].filter(Boolean).join(" ");
  const descriptor =
    draw.kind === "oracle" ? draw.phrase : draw.isReversed ? "Reversed" : "Upright";
  const artAlt = draw.kind === "oracle" ? `${draw.phrase} oracle page` : `${draw.name} tarot card art`;

  return `
    <button
      type="button"
      class="${className}"
      data-card-index="${index}"
      aria-controls="reading-collapse-${index}"
      aria-label="${index + 1}. ${position.title}. ${descriptor}"
    >
      <div class="reading-position__card ${draw.isReversed ? "reading-position__card--reversed" : ""}">
        <img src="${draw.artUri}" alt="${artAlt}" loading="lazy" />
      </div>
      ${
        hideCaption
          ? `<span class="reading-position__badge">${index + 1}</span>`
          : `<div class="reading-position__caption">
              <span class="reading-position__step">${index + 1}</span>
              <span class="reading-position__title">${position.title}</span>
            </div>`
      }
    </button>
  `;
}

function renderAccordionItem(draw, position, index, config) {
  if (draw.kind === "oracle") {
    return renderOracleAccordionItem(draw, position, index, config);
  }

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

function renderOracleAccordionItem(draw, position, index, config) {
  const isFirst = index === 0;
  const headingId = `reading-heading-${index}`;
  const collapseId = `reading-collapse-${index}`;

  return `
    <div class="accordion-item accordion-item--oracle">
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
            <div class="accordion-title">${draw.phrase}</div>
            <p class="accordion-summary">${position.summary} · Oracle page ${index + 1}</p>
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
              <div class="card-art-frame card-art-frame--oracle">
                <img src="${draw.artUri}" alt="${draw.phrase} oracle page" loading="lazy" />
              </div>
              <div class="card-art-meta">
                <span>Page ${index + 1}</span>
                <span>${config.compactHint}</span>
              </div>
            </div>

            <div>
              <div class="accordion-step">${position.title}</div>
              <p class="accordion-copy mb-0">${position.purpose}</p>
              <blockquote class="oracle-quote">${draw.phrase}</blockquote>
              <p class="accordion-copy mb-0">${buildOracleInterpretation(draw, position, index)}</p>
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

function buildOracleInterpretation(draw, position, index) {
  const placementNotes = [
    "Treat it as the sentence that names the atmosphere around the whole question.",
    "Treat it as the sentence that adjusts your perspective before you force an answer.",
    "Treat it as the sentence most likely to become useful in the next real-world step."
  ];

  return `In the ${position.title.toLowerCase()} page, the oracle says "${draw.phrase}" ${placementNotes[index] || "Let the sentence stay with you for the rest of the day and notice which word continues to echo."}`;
}

function buildReadingGuide(mode, config) {
  if (mode === "oracle") {
    return "Tap any page above to open that oracle note, or pull the interpretation window higher for the full chapter.";
  }

  if (config.positions.length === 1) {
    return "The interpretation window starts in peek mode. Pull it higher or tap the card if you want the full reading.";
  }

  return "Tap any card above to open that part of the spread, or pull the interpretation window higher for the full reading.";
}

function buildOverallInsight(mode, config, draws) {
  if (mode === "oracle") {
    return buildOracleOverallInsight(config, draws);
  }

  return buildTarotOverallInsight(config, draws);
}

function buildTarotOverallInsight(spread, draws) {
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

function buildOracleOverallInsight(config, draws) {
  const firstPage = draws[0];
  const secondPage = draws[1];
  const finalPage = draws[draws.length - 1];

  return {
    headline: firstPage.phrase,
    summary: `This ${config.name.toLowerCase()} opens with "${firstPage.phrase}" The middle page turns the chapter toward "${secondPage.phrase}" The final page closes on "${finalPage.phrase}" Read together, the oracle is asking for reflection before force and a simpler trust in what is already forming.`,
    takeaways: [
      `Start with ${config.positions[0].title.toLowerCase()}: ${firstPage.phrase}`,
      `Let the middle page change the tone of the reading: ${secondPage.phrase}`,
      `Carry the closing page into action: ${finalPage.phrase}`
    ]
  };
}

function buildOraclePageArt(phrase, config, index) {
  const lines = wrapOraclePhrase(phrase, 16);
  const label = `Page ${index + 1}`;
  const svgLines = lines
    .map(
      (line, lineIndex) =>
        `<tspan x="95" dy="${lineIndex === 0 ? 0 : 22}">${escapeSvgText(line)}</tspan>`
    )
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 317">
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${config.palette.paper}"/>
          <stop offset="100%" stop-color="#ffffff"/>
        </linearGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${config.palette.border}" stop-opacity="0.92"/>
        </linearGradient>
      </defs>
      <rect width="190" height="317" rx="30" fill="url(#paper)"/>
      <rect x="14" y="14" width="162" height="289" rx="24" fill="url(#edge)" stroke="${config.palette.border}" stroke-width="1.4"/>
      <rect x="28" y="28" width="134" height="261" rx="18" fill="${config.palette.paper}" stroke="${config.palette.border}" stroke-width="1"/>
      <path d="M44 52h102" stroke="${config.palette.accent}" stroke-width="2.4" stroke-linecap="round" opacity="0.85"/>
      <circle cx="95" cy="52" r="5" fill="${config.palette.accent}" opacity="0.92"/>
      <text x="95" y="86" text-anchor="middle" font-size="12" letter-spacing="3.2" fill="${config.palette.accent}" font-family="Georgia, serif">${label}</text>
      <text x="95" y="136" text-anchor="middle" font-size="20" fill="${config.palette.ink}" font-family="Georgia, serif">
        ${svgLines}
      </text>
      <text x="95" y="264" text-anchor="middle" font-size="11" letter-spacing="2.8" fill="${config.palette.accent}" font-family="Arial, sans-serif">${escapeSvgText(
        config.compactHint.toUpperCase()
      )}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function wrapOraclePhrase(phrase, maxCharacters) {
  const words = phrase.replace(/\.$/, "").split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length > maxCharacters && currentLine) {
      lines.push(currentLine);
      currentLine = word;
      return;
    }

    currentLine = nextLine;
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, 5);
}

function escapeSvgText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
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

function getActiveCatalog() {
  return getCatalogForMode(appState.currentMode);
}

function getCatalogForMode(mode) {
  return mode === "oracle" ? oracleCatalog : spreadCatalog;
}

function getSelectedReadingConfig() {
  return getActiveCatalog().find((item) => item.id === appState.selectedSpreadId);
}

function showView(viewName) {
  appState.currentView = viewName;
  elements.setupView.hidden = viewName !== "setup";
  elements.readingView.hidden = viewName !== "reading";
  elements.appMain.classList.toggle("is-reading", viewName === "reading");
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
  renderModeSwitch();
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
