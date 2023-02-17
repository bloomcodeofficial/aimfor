const icon = document.querySelector('.omsx_icon');
const number = document.querySelector('.omxspi-text')?.innerHTML.split(';')[2];

const updateArrow = function () {
  if (number < 0) {
    icon?.classList.add('is-negative');
  } else if (number > 0) {
    icon?.classList.add('is-positive');
  }
};

updateArrow();
