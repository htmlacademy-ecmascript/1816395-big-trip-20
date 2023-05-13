import AbstractView from '../framework/view/abstract-view.js';

/**
 * Создает шаблон с разметкой контейнера для точек путешествия
 * @returns Строку с разметкой шаблона контейнера для точек путешествия
 */

function createTripEventsListTemplate() {
  return (/*html*/
    `
<ul class="trip-events__list"></ul>
`);
}

/**
* Класс для управления компонентом для отрисовки ContentView
 */

export default class ContentView extends AbstractView {
  constructor() {
    super();
  }

  /**
   * Метод для получения шаблона контейнера для точек путешествия
   */

  get template() {
    return createTripEventsListTemplate();
  }


}
