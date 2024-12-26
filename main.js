function isBetweenDates(startDate, endDate) {
  const today = new Date();
  const currentYear = today.getFullYear();

  const startDateObj = new Date(currentYear, startDate[0] - 1, startDate[1]);
  const endDateObj = new Date(currentYear, endDate[0] - 1, endDate[1]);

  return today >= startDateObj && today <= endDateObj;
}

function removeDiv(divNmae) {
  const divToRemove = document.getElementsByClassName(`${divNmae}`);
  if (divToRemove) {
    for (let i = divToRemove.length - 1; i >= 0; i--) {
      divToRemove[i].parentNode.removeChild(divToRemove[i]);
    }
  }
}

//set date to [12,29] , [1,1] later
if (isBetweenDates([12, 29], [12, 31])) {
  onload = () => {
    removeDiv("jsAddElement");
    brithDayText();
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
} else {
  onload = () => {
    removeDiv("content");
    document.querySelector(".jsAddElement-hide").className = "jsAddElement";
  };
}

function brithDayText() {
  document.querySelector(".flower-text").textContent =
    "Happy Birth Day My Dear Sarah\nI hope you will have a long happy\nlife and achieve all your dreams";

  document.querySelector(
    ".flower-text-2"
  ).textContent = `These are flowers for you\nMy Dearest Friend`;

  document.querySelector(".flower-text-3").textContent =
    "You are the best person I know";
}
