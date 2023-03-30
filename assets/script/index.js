/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 2
Jayvee Milana

Cookies

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

const accept = document.querySelector(".accept");
const cookiesModule = document.querySelector(".cookies-module");
const settings = document.querySelector(".settings");
const settingsModule = document.querySelector(".settings-module");
const save = document.querySelector(".save");

accept.addEventListener('click', function() {
  cookiesModule.classList.add('hidden');
})

settings.addEventListener('click', function() {
  settingsModule.classList.remove('hidden');
  cookiesModule.classList.add('hidden');
})

save.addEventListener('click', function() {
  settingsModule.classList.add('hidden');
})