function init(){
    let map = new ymaps.Map('map', {
        center: [56.58976277344582,44.27051624104106],
        zoom: 16
    });
    
    let placemark = new ymaps.Placemark([56.58956150347024,44.28223213001809], {}, {
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

let hist = document.getElementById('history');
let photo = document.getElementById('photo');
let dates = document.getElementById('dates');
let li = document.querySelector('li')
let div2 = document.getElementById('text-two');
let div3 = document.getElementById('text-three');


dates.addEventListener('click',()=> {
  let div1 = document.getElementById('text-one');
  const ul = document.createElement('ul')
  ul.append(
    document.createElement('li').textContent = 'ПРИМЕР 1',
    document.createElement('li').textContent = 'ПРИМЕР 2',
    document.createElement('li').textContent = 'ПРИМЕР 3')
dev1.innerHTML = '';
div1.appendChild(ul);

})