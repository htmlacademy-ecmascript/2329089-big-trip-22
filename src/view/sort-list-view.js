import {SORT_TYPE, DEFAULT_SORT} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

//создать элемент списка сортировки точек маршрута
function createSortItemTemplate(type) {
  const isChecked = DEFAULT_SORT === type ? 'checked' : '';

  return (
    `<div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" ${isChecked}>
      <label class="trip-sort__btn" for="sort-${type}">${type}</label>
    </div>`
  );
}

//создать список сортировки точек маршрута
function createSortListTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${SORT_TYPE.map((item) => createSortItemTemplate(item)).join('')}
    </form>`
  );
}

//класс для визуального представления сортировки точек маршрута
export default class SortListView extends AbstractView {
  get template() {
    return createSortListTemplate();
  }
}
