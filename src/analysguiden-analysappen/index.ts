const list = [...document.querySelectorAll('.omsx_item')];
const curUpdate = list[0].querySelector('.omxspi-text')?.innerHTML.split(';')[2];
const preUpdate = list[1].querySelector('.omxspi-text')?.innerHTML.split(';')[2];
const icon = document.querySelector('.omsx_icon');
const number = document.querySelector('.omxspi-text')?.innerHTML.split(';')[2];

const updateArrow = function () {
  if (curUpdate < preUpdate) {
    icon?.classList.add('is-negative');
  } else if (curUpdate > preUpdate) {
    icon?.classList.add('is-positive');
  } else if (curUpdate === preUpdate) {
    icon?.classList.remove('is-active', 'is-negative');
  }
};
updateArrow();
