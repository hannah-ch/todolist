const list = document.querySelector("ul");
const content = document.querySelector(".contents");
const li = document.querySelector("li");
const checkbox = document.querySelector(".cb");
let completeOnOff = false;

function addComplete(content, checkbox) {
  if (!content.classList.contains("complete")) {
    content.classList.add("complete");
    completeOnOff = true;
  } else if (content.classList.contains("complete")) {
    content.classList.remove("complete");
    completeOnOff = false;
  }

  if (checkbox.type === "checkbox") {
    if (completeOnOff === true) {
      checkbox.checked = true;
    } else if (completeOnOff === false) {
      checkbox.checked = false;
    }
  }
}

li.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "contents":
      addComplete(e.target, checkbox);
      break;
    case "cb":
      addComplete(content, e.target);
      break;
  }
});
