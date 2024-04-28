//your JS code here. If required.
function removeSelectedOption() {
  let options = document.querySelector("#colorSelect");
  let optionIndex = options.selectedIndex;
  if (optionIndex !== -1) {
    options.remove(optionIndex);
  }
}