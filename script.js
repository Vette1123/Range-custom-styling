const range = document.getElementById("range");
const label = document.getElementById("label");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  label.innerText = value;
  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");
  const numberWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numberLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
  const max = +e.target.max;
  const min = +e.target.min;
  const left =
    value * (numberWidth / max) -
    numberLabelWidth / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
