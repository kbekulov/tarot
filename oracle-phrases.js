(function buildOraclePhraseLibrary() {
  const themes = [
    {
      key: "timing",
      label: "Timing",
      titleStarts: [
        "Slow",
        "Hidden",
        "Second",
        "Ripening",
        "Patient",
        "Held",
        "Turning",
        "Quiet",
        "Late",
        "Measured"
      ],
      titleEnds: [
        "Hour",
        "Signal",
        "Interval",
        "Season",
        "Tide",
        "Bell",
        "Window",
        "Dawn",
        "Opening",
        "Clock"
      ],
      leads: [
        "Timing is not yet aligned",
        "The hour you want is still forming",
        "What is late is not denied",
        "The next opening answers to patience",
        "This matter ripens away from pressure",
        "The true signal arrives after the first impulse",
        "A delayed answer protects the outcome",
        "The pace must soften before the path clears",
        "Your yes belongs to a later moment",
        "The future is asking for measured time"
      ],
      closes: [
        "wait for the second invitation",
        "let the rush pass before you answer",
        "choose the calmer opening over the quicker one",
        "trust the pause that interrupts certainty",
        "allow one full cycle to complete itself",
        "stop chasing what has not opened on its own",
        "hold back until the mood becomes simpler",
        "return when the pressure has left the room",
        "notice who remains steady during the delay",
        "treat patience as part of the answer"
      ]
    },
    {
      key: "threshold",
      label: "Threshold",
      titleStarts: [
        "First",
        "Narrow",
        "Open",
        "Waiting",
        "Living",
        "Quiet",
        "True",
        "Light",
        "Unclaimed",
        "Clean"
      ],
      titleEnds: [
        "Gate",
        "Hinge",
        "Door",
        "Step",
        "Threshold",
        "Key",
        "Passage",
        "Lintel",
        "Crossing",
        "Arch"
      ],
      leads: [
        "You are standing at a real threshold",
        "The next chapter begins at the edge of hesitation",
        "A crossing appears only after the old room is honored",
        "The door is closer than your fear suggests",
        "Not every entrance should be rushed",
        "The hinge is already moving",
        "A new passage asks for a smaller self",
        "The threshold is asking for honesty, not performance",
        "The crossing opens to the one who arrives lightly",
        "This doorway will not respond to force"
      ],
      closes: [
        "leave one familiar habit behind before you step through",
        "bring only what can survive the change",
        "knock once and listen longer than feels natural",
        "name what you are truly entering",
        "stop asking the old season for permission",
        "let your next move be clean and specific",
        "cross with less certainty and more sincerity",
        "take the first step before you understand the whole staircase",
        "release the role that no longer fits the room ahead",
        "walk through as yourself, not as your mask"
      ]
    },
    {
      key: "truth",
      label: "Truth",
      titleStarts: [
        "Plain",
        "Clear",
        "Deep",
        "Exact",
        "Honest",
        "Still",
        "Bare",
        "Single",
        "Quiet",
        "Unhidden"
      ],
      titleEnds: [
        "Mirror",
        "Witness",
        "Lamp",
        "Measure",
        "Sentence",
        "Proof",
        "Lens",
        "Signal",
        "Line",
        "Record"
      ],
      leads: [
        "The deeper truth is quieter than the story around it",
        "What is true no longer needs decoration",
        "Clarity is arriving by subtraction",
        "The honest answer has already brushed against you",
        "Truth is waiting where your body relaxes",
        "A hidden fact is changing the shape of this question",
        "The cleanest answer may also be the plainest",
        "You know more than you are admitting",
        "What feels complicated may be covering something simple",
        "The truth here is not dramatic, only exact"
      ],
      closes: [
        "say the unsent sentence to yourself first",
        "stop negotiating with what you already know",
        "follow the detail that keeps repeating",
        "trust the evidence that brings relief instead of spectacle",
        "remove one flattering lie from the picture",
        "look at what stays true when the mood changes",
        "listen for the answer that costs you an illusion",
        "let the simple fact outrank the clever explanation",
        "return to the piece you keep avoiding",
        "make room for the truth that asks less performance from you"
      ]
    },
    {
      key: "release",
      label: "Release",
      titleStarts: [
        "Fallen",
        "Spent",
        "Empty",
        "Last",
        "Fading",
        "Loose",
        "Soft",
        "Closing",
        "Hollow",
        "Unbound"
      ],
      titleEnds: [
        "Ash",
        "Undoing",
        "Shedding",
        "Clearing",
        "Ember",
        "Unbinding",
        "Exit",
        "Drift",
        "Husk",
        "Farewell"
      ],
      leads: [
        "Something complete is still asking to be released",
        "The hold you feel is partly your own",
        "An ending is trying to become useful",
        "What is over keeps knocking because it has not been dismissed",
        "The burden grows heavier when you name it loyalty",
        "You do not need to carry every unfinished feeling forward",
        "The old season is asking for a cleaner goodbye",
        "Release is the medicine before renewal",
        "What drains you is no longer sacred",
        "This path lightens the moment you stop dragging the past"
      ],
      closes: [
        "stop tending what has already left your hands",
        "lay down the role that was built for survival",
        "let grief move without turning it into identity",
        "close the loop instead of rehearsing it",
        "give back what was never yours to repair",
        "honor what mattered without reopening the wound",
        "leave one promise behind if it was made from fear",
        "make space before asking for the next gift",
        "trust the emptiness that follows the letting go",
        "release with kindness, not with delay"
      ]
    },
    {
      key: "return",
      label: "Return",
      titleStarts: [
        "Second",
        "Returning",
        "Near",
        "Familiar",
        "Remembered",
        "Homing",
        "Drawn",
        "Reopened",
        "Kindled",
        "Gathered"
      ],
      titleEnds: [
        "Return",
        "Echo",
        "Homing",
        "Cycle",
        "Hearth",
        "Refrain",
        "Orbit",
        "River",
        "Recall",
        "Homecoming"
      ],
      leads: [
        "What left the circle is not lost forever",
        "A return is possible, but not in its former shape",
        "Something familiar is finding its way back differently",
        "The path behind you still carries unfinished music",
        "A second arrival is being prepared",
        "What belongs to you does not vanish by silence alone",
        "The old light can return without restoring the old life",
        "A reunion becomes wise only after change",
        "The road back is real, but it is not a rewind",
        "What returns now comes with a lesson attached"
      ],
      closes: [
        "make room before you ask it back",
        "welcome the return in its changed form",
        "do not demand the old language from a new season",
        "recognize what matured while you were apart",
        "receive the echo without clinging to the first song",
        "let the second beginning be smaller and truer",
        "stop testing what is already trying to come close",
        "meet the return with better boundaries than before",
        "allow distance to have taught something useful",
        "answer the homecoming without pretending nothing happened"
      ]
    },
    {
      key: "protection",
      label: "Protection",
      titleStarts: [
        "Quiet",
        "Sealed",
        "Chosen",
        "Sacred",
        "Guarded",
        "Hidden",
        "True",
        "Held",
        "Careful",
        "Sheltered"
      ],
      titleEnds: [
        "Lantern",
        "Shelter",
        "Boundary",
        "Wall",
        "Cloak",
        "Gatekeeper",
        "Shield",
        "Guard",
        "Circle",
        "Seal"
      ],
      leads: [
        "Protection is already gathering around this matter",
        "Not every open door is meant for you",
        "A boundary is acting as grace, not punishment",
        "Safety is being built through discernment",
        "What blocks you may be guarding something tender",
        "A wiser wall is rising where you kept overexposing yourself",
        "Protection asks for selection, not suspicion",
        "Your energy needs a gatekeeper before it needs another answer",
        "Some delays are forms of shelter",
        "The right no sometimes sounds like silence"
      ],
      closes: [
        "choose what enters your field more carefully",
        "keep the sacred part private a little longer",
        "let the boundary stand without apologizing for it",
        "decline the invitation that asks you to abandon yourself",
        "protect the seed before you announce the garden",
        "lock the gate before you explain why",
        "trust the interruption that preserves your peace",
        "share less until the room proves itself kind",
        "do not confuse access with intimacy",
        "keep one part of the plan unspoken for now"
      ]
    },
    {
      key: "direction",
      label: "Direction",
      titleStarts: [
        "North",
        "True",
        "Steady",
        "Clear",
        "Quiet",
        "Open",
        "Single",
        "Far",
        "Faithful",
        "Living"
      ],
      titleEnds: [
        "Compass",
        "Bearing",
        "Trail",
        "Map",
        "Arrow",
        "Route",
        "Meridian",
        "Current",
        "Ascent",
        "Road"
      ],
      leads: [
        "The path ahead is clearer than your fear admits",
        "Direction returns when the unnecessary falls away",
        "You are not lost, only overfaced with options",
        "A truer route is asking to be chosen",
        "The next step matters more than the whole map",
        "Momentum waits for one honest decision",
        "The road is correcting itself beneath your attention",
        "A smaller move will reveal the larger way",
        "Your compass strengthens in quiet",
        "The clearest direction may not be the loudest one"
      ],
      closes: [
        "follow the road that reduces your inner noise",
        "choose the step that makes tomorrow simpler",
        "ignore the path that flatters you but confuses your body",
        "move toward what stays clear after sleep",
        "let one faithful action replace ten imagined ones",
        "stop mapping every mile before the first step",
        "pick the route that asks for steadiness over theater",
        "walk where your energy stops arguing with itself",
        "trust the direction that remains when urgency leaves",
        "begin with the path that does not require self-betrayal"
      ]
    },
    {
      key: "repair",
      label: "Repair",
      titleStarts: [
        "Gentle",
        "Patient",
        "Careful",
        "Joined",
        "Mended",
        "Soft",
        "Bridged",
        "Stitched",
        "Renewed",
        "Steady"
      ],
      titleEnds: [
        "Mending",
        "Needle",
        "Joining",
        "Gentlework",
        "Seam",
        "Suture",
        "Patch",
        "Reweaving",
        "Bridge",
        "Binding"
      ],
      leads: [
        "Repair is possible, but it must be honest",
        "What cracked can still be mended with care",
        "Healing begins where blame loses its throne",
        "A broken thread is asking for patient hands",
        "This situation can be restored, though not by force",
        "The first repair is often a quieter tone",
        "Some damage heals only after naming what caused it",
        "Mending asks for steadiness more than brilliance",
        "A careful return to the seam can save the fabric",
        "Restoration becomes real when pride softens"
      ],
      closes: [
        "fix the tone before you fix the details",
        "begin with the smallest repair that tells the truth",
        "let accountability arrive before closeness does",
        "stitch slowly where the tear still widens",
        "offer one act of repair without demanding instant trust",
        "name the hurt without making it the whole future",
        "restore the structure before the ornament",
        "choose consistency over apology theater",
        "rebuild only what can hold more truth this time",
        "tend the bridge from both sides if you want it to last"
      ]
    },
    {
      key: "choice",
      label: "Choice",
      titleStarts: [
        "Split",
        "Balanced",
        "Inner",
        "Clear",
        "Chosen",
        "Quiet",
        "True",
        "Final",
        "Honest",
        "Leaning"
      ],
      titleEnds: [
        "Fork",
        "Weighing",
        "Measure",
        "Balance",
        "Tension",
        "Turning",
        "Counsel",
        "Lever",
        "Scale",
        "Decision"
      ],
      leads: [
        "A choice is ripening under the surface",
        "The answer divides where your values divide",
        "You already know which option costs your peace",
        "Two roads are asking different versions of you",
        "Decision becomes clearer when pretense leaves",
        "The real choice is not between options, but between selves",
        "What looks equal may not be equal in consequence",
        "A quieter preference is trying to be heard",
        "One path offers relief, the other offers repetition",
        "The dilemma begins to loosen when you name what matters most"
      ],
      closes: [
        "choose what preserves your self-respect tomorrow",
        "stop giving equal weight to what is not equal in truth",
        "follow the option that does not require shrinking",
        "let consequence speak louder than fantasy",
        "pick the road you can live with in daylight",
        "refuse the choice that asks you to betray your center",
        "decide by values before you decide by comfort",
        "listen for the option that leaves less residue in your body",
        "end the loop by choosing the clearer cost",
        "take the path that becomes kinder with time"
      ]
    },
    {
      key: "courage",
      label: "Courage",
      titleStarts: [
        "Quiet",
        "Steady",
        "Clear",
        "Living",
        "Brave",
        "Open",
        "Whole",
        "Single",
        "True",
        "Kind"
      ],
      titleEnds: [
        "Flame",
        "Heart",
        "Nerve",
        "Stand",
        "Pulse",
        "Spine",
        "Rise",
        "Step",
        "Voice",
        "Courage"
      ],
      leads: [
        "Courage is required here, but not spectacle",
        "Bravery now looks smaller and steadier than you expected",
        "You do not need more certainty to take the next honest step",
        "The heart is stronger than the fear around it",
        "A quiet act of courage will change the whole direction",
        "The threshold asks for nerve, not noise",
        "What you avoid is partly waiting for your voice",
        "Strength returns when you stop rehearsing disaster",
        "This answer favors brave honesty over elegant delay",
        "The next opening belongs to the part of you that can stand still and speak clearly"
      ],
      closes: [
        "say the thing that restores your own respect",
        "take the smaller brave step before the dramatic one",
        "stop asking fear to approve the future",
        "let your voice arrive without hardening your heart",
        "stand where your truth can breathe",
        "move before perfection can delay you again",
        "trust the steadier courage beneath the performance",
        "do one clean thing that your future self will thank you for",
        "answer with presence instead of panic",
        "choose the brave act that leaves you more whole"
      ]
    }
  ];

  const pages = [];

  themes.forEach((theme) => {
    theme.leads.forEach((lead, leadIndex) => {
      theme.closes.forEach((close, closeIndex) => {
        pages.push({
          id: `${theme.key}-${leadIndex + 1}-${closeIndex + 1}`,
          theme: theme.label,
          title: `${theme.titleStarts[leadIndex]} ${theme.titleEnds[closeIndex]}`,
          phrase: `${lead}; ${close}.`
        });
      });
    });
  });

  const uniquePhrases = new Set(pages.map((page) => page.phrase));

  if (pages.length !== 1000) {
    throw new Error(`Expected 1000 oracle pages, received ${pages.length}.`);
  }

  if (uniquePhrases.size !== 1000) {
    throw new Error(`Expected 1000 unique oracle phrases, received ${uniquePhrases.size}.`);
  }

  window.ORACLE_PHRASES = pages;
})();
