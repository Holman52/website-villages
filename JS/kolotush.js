function init(){
    let map = new ymaps.Map('map', {
        center: [56.656302, 44.350966],
        zoom: 16
    });
    
    let placemark = new ymaps.Placemark([56.656302, 44.350966], {}, {
		});

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.geoObjects.add(placemark);

}
ymaps.ready(init);

const tabsButtons = document.querySelectorAll('.tabs__button');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prevActiveItem = document.querySelector('.tabs__item._active');
    const prevActiveLine = document.querySelector('.tabs__line._active')
    const prevActiveButton = document.querySelector('.tabs__button._active');

    if (prevActiveButton) {
      prevActiveButton.classList.remove('_active'); 
    }
    if (prevActiveItem) {
      prevActiveItem.classList.remove('_active');
    }
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    const nextActiveItem = document.querySelector(nextActiveItemId);
  
    btn.classList.add('_active');
    nextActiveItem.classList.add('_active');
  });
})