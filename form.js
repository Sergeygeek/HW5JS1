"use strict";
// Повесим обработчики на поля формы
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('pass-repeat').addEventListener('blur', validatePassRep);
document.getElementById('submit').addEventListener('click', submitHandler);

/**
 * Функция проверяет на валидность поле имя
 */
function validateName() {
  const name = document.getElementById('name');
  const div = name.nextElementSibling;
  if ((name.value.length <= 1 || name.value.length >= 50) || Number(name.value)) {
    // Добавим бутстраповский класс для поля
    name.classList.add('is-invalid');
    // Выведем сообщение об ошибке
    div.classList.add('invalid');
  } else {
    name.classList.remove('is-invalid');
    div.classList.remove('invalid');
  }
}

/**
 * Функция проверяет на валидность поле телефон
 */
function validatePhone() {
  const phone = document.getElementById('phone');
  const div = phone.nextElementSibling;

  if(phone.value.length !== 11 || !Number(phone.value)){
    phone.classList.add('is-invalid');
    div.classList.add('invalid');
  } else {
    phone.classList.remove('is-invalid');
    div.classList.remove('invalid');
  }
}

/**
 * Функция проверяет на валидность поле пароль
 */
function validatePassword() {
  const password = document.getElementById('password');
  const div = password.nextElementSibling;

  if(password.value.length < 5 || password.value.length > 50){
    password.classList.add('is-invalid');
    div.classList.add('invalid');
  } else {
    password.classList.remove('is-invalid');
    div.classList.remove('invalid');
  }
}

/**
 * Функция проверяет на валидность поле повторите пароль
 */
function validatePassRep() {
  const passRep = document.getElementById('pass-repeat');
  const password = document.getElementById('password');
  const div = passRep.nextElementSibling;

  if(password.value !== passRep.value){
    passRep.classList.add('is-invalid');
    div.classList.add('invalid');
  } else {
    passRep.classList.remove('is-invalid');
    div.classList.remove('invalid');
  }
}

/**
 *Функция проверяет есть ли в форме элемент с классом invalid, если есть, то форма не отправляется.
 * @param {event} e - событие клика
 */
function submitHandler(e) {
  if (document.querySelector('.invalid')) {
    e.preventDefault();
  }
}