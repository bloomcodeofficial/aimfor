const icon = document.querySelector('.omsx_icon');
const text = document.querySelector('.omxspi-text')?.innerHTML.slice(-5);

const updateArrow = function () {
  if (text < 0) {
    icon?.classList.add('is-negative');
  } else if (text > 0) {
    icon?.classList.add('is-positive');
  }
};

updateArrow();
