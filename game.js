const scenes = window.storyData;

let currentScene = "intro";
let route = [];

const story = document.querySelector("#story");

function render() {
  const scene = scenes[currentScene];
  story.replaceChildren();
  story.classList.toggle("title-screen", currentScene === "intro");
  story.classList.toggle(
    "instructions-screen",
    currentScene === "instructions",
  );

  const title = document.createElement("h2");

  if (currentScene === "intro") {
    const titleText = document.createElement("div");
    titleText.className = "title-lines";
    scene.title.forEach((line) => {
      const lineEl = document.createElement("span");
      lineEl.className = "title-line";
      lineEl.textContent = line;
      titleText.append(lineEl);
    });
    story.append(titleText);
  } else if (scene.title) {
    title.textContent = scene.title;
    story.append(title);
  }

  if (scene.text) {
    const text = document.createElement("p");
    text.className = "scene-text";
    text.textContent = scene.text;
    story.append(text);
  }

  if (currentScene === "ending") {
    const summary = document.createElement("section");
    summary.className = "ending-summary";

    const history = document.createElement("p");
    history.textContent =
      route.length > 0
        ? `Route taken: ${route.join(" → ")}`
        : "Route taken: a single drop";

    summary.append(history);
    story.append(summary);
    return;
  }

  const choices = document.createElement("div");
  choices.className = "choices";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
      route.push(choice.text);
      currentScene = choice.next;
      render();
    });

    choices.append(button);
  });

  story.append(choices);
}

document.querySelector("#restart").addEventListener("click", () => {
  currentScene = "intro";
  route = [];
  render();
});

render();
