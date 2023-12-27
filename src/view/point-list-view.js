import AbstractView from '../framework/view/abstract-view.js';

//создать список точек маршрута
function createPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

//класс для взаимодействия со списком точек маршрута
export default class PointListView extends AbstractView {
  get template() {
    return createPointListTemplate();
  }
}
