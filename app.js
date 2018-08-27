"use strict";

/**
 * @property {HTMLElement} containerGameEl контейнер игры (DOM элемент)
 * @property {int[]} numArr массив с номерами строк
 * @property {array} letterArr массив с буквами для колонок
 * @property {object[{name: 'p', color: 'w', pos: 'a2'}]} figures массив с объектами фигур,
 * где figures[0]name - первая буква имени фигуры, figures[0]color - цвет, figures[0]pos - позиция на поле
 * @property {object} figureHtml - объект с HTML кодом каждой фигуры 
 */
const chess = {
  containerGameEl: document.getElementById('game'),
  numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 0],
  letterArr: [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0],
  figures: [
    {name: 'p', color: 'w', pos: 'a2'},
    {name: 'p', color: 'w', pos: 'b2'},
    {name: 'p', color: 'w', pos: 'c2'},
    {name: 'p', color: 'w', pos: 'd2'},
    {name: 'p', color: 'w', pos: 'e2'},
    {name: 'p', color: 'w', pos: 'f2'},
    {name: 'p', color: 'w', pos: 'g2'},
    {name: 'p', color: 'w', pos: 'h2'},
    {name: 'p', color: 'b', pos: 'a7'},
    {name: 'p', color: 'b', pos: 'b7'},
    {name: 'p', color: 'b', pos: 'c7'},
    {name: 'p', color: 'b', pos: 'd7'},
    {name: 'p', color: 'b', pos: 'e7'},
    {name: 'p', color: 'b', pos: 'f7'},
    {name: 'p', color: 'b', pos: 'g7'},
    {name: 'p', color: 'b', pos: 'h7'},
    {name: 'K', color: 'w', pos: 'e1'},
    {name: 'K', color: 'b', pos: 'e8'},
    {name: 'Q', color: 'w', pos: 'd1'},
    {name: 'Q', color: 'b', pos: 'd8'},
    {name: 'R', color: 'w', pos: 'a1'},
    {name: 'R', color: 'w', pos: 'h1'},
    {name: 'R', color: 'b', pos: 'a8'},
    {name: 'R', color: 'b', pos: 'h8'},
    {name: 'B', color: 'w', pos: 'c1'},
    {name: 'B', color: 'w', pos: 'f1'},
    {name: 'B', color: 'b', pos: 'c8'},
    {name: 'B', color: 'b', pos: 'f8'},
    {name: 'N', color: 'w', pos: 'b1'},
    {name: 'N', color: 'w', pos: 'g1'},
    {name: 'N', color: 'b', pos: 'b8'},
    {name: 'N', color: 'b', pos: 'g8'},
  ],

  figureHtml: {
    pw: '&#9817;',
    pb: '&#9823;',
    Kw: '&#9812;',
    Kb: '&#9818;',
    Qw: '&#9813;',
    Qb: '&#9819;',
    Rw: '&#9814;',
    Rb: '&#9820;',
    Bw: '&#9815;',
    Bb: '&#9821;',
    Nw: '&#9816;',
    Nb: '&#9822;',
  },

  /**
   *Метод отображения игрового поля
   */
  renderMap() {
    // Отображаем tr и td
    for (let row = 0; row < 10; row++) {
      const tr = document.createElement('tr');
      this.containerGameEl.appendChild(tr);
      for (let col = 0; col < 10; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        // Расставляем буквы
        if ((row === 0 || row === 9) && this.letterArr[col] !== 0) {
          td.textContent = this.letterArr[col];
        }
        // Расставляем цифры
        if ((col === 0 || col === 9) && this.numArr[row] !== 0) {
          td.textContent = this.numArr[row];    
        }
        // Закрасим поля черными ячейками
        if (this.isCellsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
        // Проставим data атрибуты
        if (this.letterArr[col] !== 0 && this.numArr[row] !== 0) {
          td.dataset.cellName = this.letterArr[col] + this.numArr[row];
        }
      }
    };

    // Проставим фигуры
    this.renderFigures();
  },

  /**
   *Определяет является ли ячейка черной
   *
   * @param {int} rowNum Номер в строке
   * @param {int} colNum Номер в колонке
   * @returns {boolean} true, если ячейка черная
   */
  isCellsBlack(rowNum, colNum) {
    return (rowNum !== 9) && (colNum !== 9) && ((rowNum % 2) == (colNum % 2) && (colNum !== 0) && rowNum !== 0);
  },

  // Метод отрисовывает фигуры
  renderFigures() {
    this.figures.forEach(figure => {
      // Получаем имя фигуры и цвет в одну строку
      const figureHtmlProperty = figure.name + figure.color;
      // Получаем код фигуры
      const figureCode = this.figureHtml[figureHtmlProperty];

      // Получаем все клетки поля
      const tds = document.querySelectorAll('td');

      for (const td of tds) {
        if (figure.pos === td.dataset.cellName) {
          td.innerHTML = figureCode;
        }
      }
    });

  }
};

// Отрисуем карту
chess.renderMap();