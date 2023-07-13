const selectedText = () => {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
  }
  return text;
}

for (const entry of document.querySelectorAll('.kanji_light, .concept_light, .sentence')) {
  const details = entry.querySelector('.light-details_link');
  if (details !== null) {
    entry.addEventListener("click", (event) => {
      const anchor = event.target.tagName === "A";
      const selection = selectedText() !== "";
      if (!anchor && !selection) {
        entry.dataset.singleClicked = "true";
        setTimeout(() => {
          if (entry.dataset.singleClicked === "true") {
            entry.dataset.singleClicked = "false";
            details.click();
          }
        }, 150);
      }
    });

    entry.addEventListener("mousedown", () => {
        entry.dataset.singleClicked = "false";
    });
  }
}
