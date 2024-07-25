const brand = document.querySelector('.brand');
const equipment = document.querySelector('.equipment');
const brandShowHide = document.querySelector('.brand__show-hide');
const equipmentShowHide = document.querySelector('.equipment__show-hide');
const cardShowHide = document.querySelector('.card__show-hide');
const brandWrap = document.querySelector('.brand__wrap');
const equipmentWrap = document.querySelector('.equipment__wrap');
const cardContent = document.querySelector('.card__content');

const widthBrandWindow = brand.clientWidth;
const widthEquipmentWindow = equipment.clientWidth;

if (widthBrandWindow >= 320 && widthBrandWindow < 768) {
    brandShowHide.classList.add('hidden')
}
if (widthEquipmentWindow >= 320 && widthEquipmentWindow < 768) {
  equipmentShowHide.classList.add('hidden')
}

brandShowHide.addEventListener('click', function () {

    const arrow = brandShowHide.querySelector('.showHide__arrow');
    const showHideLabel = brandShowHide.querySelector('.showHide__label');

    if (brandWrap.classList.contains('brand__hidden')) {
        brandWrap.classList.remove('brand__hidden');
        arrow.setAttribute('src', 'img/double_arrow_up.png');
        arrow.setAttribute('alt', 'Скрыть');
        showHideLabel.innerHTML = 'Скрыть';
    } else {
        brandWrap.classList.add('brand__hidden');
        arrow.setAttribute('src', 'img/double_arrow_down.png');
        arrow.setAttribute('alt', 'Показать все');
        showHideLabel.innerHTML = 'Показать все';
    }
});

equipmentShowHide.addEventListener('click', function () {

  const arrow = equipmentShowHide.querySelector('.showHide__arrow');
  const showHideLabel = equipmentShowHide.querySelector('.showHide__label');

  if (equipmentWrap.classList.contains('equipment__hidden')) {
    equipmentWrap.classList.remove('equipment__hidden');
    arrow.setAttribute('src', 'img/double_arrow_up.png');
    arrow.setAttribute('alt', 'Скрыть');
    showHideLabel.innerHTML = 'Скрыть';
  } else {
    equipmentWrap.classList.add('equipment__hidden');
    arrow.setAttribute('src', 'img/double_arrow_down.png');
    arrow.setAttribute('alt', 'Показать все');
    showHideLabel.innerHTML = 'Показать все';
  }
});

cardShowHide.addEventListener('click', function () {

  const arrow = cardShowHide.querySelector('.showHide__arrow');
  const showHideLabel = cardShowHide.querySelector('.showHide__label');

  if (cardContent.classList.contains('card__content_open')) {
    cardContent.classList.remove('card__content_open');
    arrow.setAttribute('src', 'img/double_arrow_up.png');
    arrow.setAttribute('alt', 'Читать далее');
    showHideLabel.innerHTML = 'Читать далее';
  } else {
    cardContent.classList.add('card__content_open');
    arrow.setAttribute('src', 'img/double_arrow_down.png');
    arrow.setAttribute('alt', '');
    showHideLabel.innerHTML = 'Скрыть';
  }
});
