const a = document.getElementsByTagName("a");

for (let i = 0; i < a.length; i++) {
  if (a.item(i).classList.value.includes(" home")) continue;
  a.item(i).onclick = async function (event) {
    event.preventDefault();
    a.item(i).classList.value = "button item--active";
    document.getElementById("container").classList.value += " fade-out";
    for (let j = 0; j < a.length; j++) {
      if (
        a.item(j).href !== a.item(i).href &&
        a.item(j).classList.value.includes("home") === false
      )
        a.item(j).classList.value = " fade-out-active";
    }

    // Source - https://stackoverflow.com/a/39914235
    // Posted by Dan Dascalescu, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-03-20, License - CC BY-SA 4.0

    await new Promise((r) => setTimeout(r, 800));
    document.getElementById("container").remove();
    for (let j = 0; j < a.length; j++) {
      if (
        a.item(j).href !== a.item(i).href &&
        a.item(j).classList.value.includes("home") === false
      )
        a.item(j).classList.value = "item-a";
    }

    window.location.href = a.item(i).href;

    return false;
  };
}

const h = document.getElementsByClassName("home");

for (let i = 0; i < h.length; i++) {
  h.item(i).onclick = async function (event) {
    event.preventDefault();
    document.getElementById("background").classList.value =
      "background-image fade-out";
    document.getElementById("container").classList.value += " fade-out";
    for (let j = 0; j < a.length; j++) {
      if (
        a.item(j).href !== a.item(i).href &&
        a.item(j).classList.value.includes("home") === false
      )
        a.item(j).classList.value = " fade-out-active";
    }
    // Source - https://stackoverflow.com/a/39914235
    // Posted by Dan Dascalescu, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-03-20, License - CC BY-SA 4.0

    await new Promise((r) => setTimeout(r, 800));
    document.getElementById("container").remove();
    document.getElementById("background").remove();
    for (let j = 0; j < a.length; j++) {
      if (
        a.item(j).href !== a.item(i).href &&
        a.item(j).classList.value.includes("home") === false
      )
        a.item(j).classList.value = "item-a";
    }
    window.location.href = "index.html";

    return false;
  };
}
