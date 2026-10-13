window.storyData = {
  intro: {
    title: ["Journey of", "a Water Droplet"],
    choices: [{ text: " START ", next: "instructions" }],
  },

  instructions: {
    type: "instructions",
    title: "",
    text: `You are a single drop of water travelling through both natural and urban water systems.

Your journey will always end when you evaporate and return to the clouds. Until then, every choice affects how long you remain liquid, which parts of the water system you experience, and what you leave behind.

Avoid evaporation for as long as you can. Explore routes through soil, plants, drains, pipes, treatment systems and the harbour.`,
    choices: [{ text: " CONTINUE ", next: "start" }],
  },

  start: {
    title: "Where will you land?",
    text: `Rain clouds gather above Malmö.
You fall towards Varvsbassängen.

Below you are a planted area, a tree,
and a paved waterfront path.

Where will your journey begin?`,
    choices: [
      { text: "Land on the soil", next: "soil" },
      { text: "Land on a leaf", next: "leaf" },
      { text: "Land on the pavement", next: "pavement" },
    ],
  },

  soil: {
    title: "Into the earth",
    text: `The soil surrounds you.
You slip between grains of sand
and pass through tiny spaces between roots.

The sunlight disappears.
Your journey slows down.`,
    choices: [
      { text: "Continue towards groundwater", next: "groundwater" },
      { text: "Follow a shallow channel", next: "basin" },
    ],
  },

  leaf: {
    title: "On a leaf",
    text: `You spread across a leaf.
The sunlight warms your surface.

The plant may take up water through
its roots, but you are still outside it.`,
    choices: [
      { text: "Remain exposed to the sun", next: "ending" },
      { text: "Fall into the soil", next: "soil" },
    ],
  },

  pavement: {
    title: "The surface rush",
    text: `You slide across the pavement.
Water gathers around you and runs
towards the gutter.

A storm drain opens ahead.
A planted rain garden lies to one side.`,
    choices: [
      { text: "Enter the storm drain", next: "drain" },
      { text: "Move towards the rain garden", next: "soil" },
      { text: "Continue towards the harbour", next: "basin" },
    ],
  },

  groundwater: {
    title: "The slow journey",
    text: `You travel through spaces between
sediments, sheltered from direct sunlight.

Your journey may last a long time.
Eventually, groundwater can discharge
into a spring, stream or other water body.`,
    choices: [
      { text: "Continue towards surface water", next: "basin" },
      { text: "Continue the underground journey", next: "ending" },
    ],
  },

  drain: {
    title: "Beneath the city",
    text: `You rush through a pipe.
Rainwater echoes against the walls.

Where you go next depends on the
city's drainage connections and
the conditions in the system.`,
    choices: [
      { text: "Travel towards receiving waters", next: "basin" },
      { text: "Explore a treatment route", next: "treatment" },
    ],
  },

  treatment: {
    title: "Through treatment",
    text: `You pass through an engineered
water treatment system.

Different processes remove different
contaminants before water is discharged
or reused, depending on the system.`,
    choices: [{ text: "Continue with the treated water", next: "basin" }],
  },

  basin: {
    title: "Varvsbassängen",
    text: `You enter the harbour basin.
Buildings reflect across the water.

The wind pushes you into open water.
A sheltered edge offers another route.`,
    choices: [
      { text: "Remain in exposed water", next: "ending" },
      { text: "Move towards a sheltered edge", next: "shade" },
    ],
  },

  shade: {
    title: "Shelter from the sun",
    text: `The harbour edge blocks some of
the wind. The water is calmer here.

You remain liquid a little longer,
watching ripples travel across the basin.`,
    choices: [{ text: "Continue your journey", next: "ending" }],
  },

  ending: {
    title: "Back to the clouds",
    text: `You absorb enough energy to evaporate.
You rise as invisible water vapour.

Your journey as a liquid drop ends,
but the water cycle continues.`,
    choices: [],
  },
};
