/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 2
Jayvee Milana

Cookies

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

// Buttons
const accept = document.querySelector(".accept");
const save = document.querySelector(".save");
const settings = document.querySelector(".settings");

// Checkboxes
const browserBox = document.querySelector(".browser-box");
const osBox = document.querySelector(".os-box");
const widthBox = document.querySelector(".width-box");
const heightBox = document.querySelector(".height-box");

const cookiesModule = document.querySelector(".cookies-module");
const settingsModule = document.querySelector(".settings-module");

const date = new Date();
date.setSeconds(date.getSeconds() + 15);

accept.addEventListener('click', function() {
  cookiesModule.classList.add('hidden');

  setCookie('Browser', `${getBrowserName}`, {'expires': date});
  setCookie('Operating System', `${getOSName}`, {'expires': date});
  setCookie('Window Width', `${window.innerWidth}`, {'expires': date});
  setCookie('Window Height', `${window.innerHeight}`, {'expires': date});

  console.log(`Browser: ${getBrowserName()}`);
  console.log(`Operating System: ${getOSName()}`);
  console.log(`Window Width: ${window.innerWidth}`);
  console.log(`Window Height: ${window.innerHeight}`);
/*
  console.log(`Browser: ${getCookie('Browser)}`);
  console.log(`Operating System: ${getCookie('OperatingSystem')}`);
  console.log(`Window Width: ${getCookie('Window Width')}`);
  console.log(`Window Height: ${getCookie('Window Height')}`);
*/
})

settings.addEventListener('click', function() {
  settingsModule.classList.remove('hidden');
  cookiesModule.classList.add('hidden');
})

save.addEventListener('click', function() {
  settingsModule.classList.add('hidden');

  if (browserBox.checked === true) {
    console.log(`Browser: ${getBrowserName()}`);
    // console.log(`Browser: ${getCookie('Browser)}`);
  }

  if (osBox.checked === true) {
    console.log(`Operating System: ${getOSName()}`);
    // console.log(`Operating System: ${getCookie('OperatingSystem')}`);
  }

  if (widthBox.checked === true) {
    console.log(`Window Width: ${window.innerWidth}`);
    // console.log(`Window Width: ${getCookie('Window Width')}`);
  }

  if (heightBox.checked === true) {
    console.log(`Window Height: ${window.innerHeight}`);
    // console.log(`Window Height: ${getCookie('Window Height')}`);
  }
})

function getBrowserName() {          
  let userAgent = navigator.userAgent;
  let browserName;
    
  if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "chrome";
  }else if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
  }  else if(userAgent.match(/safari/i)){
    browserName = "safari";
  }else if(userAgent.match(/opr\//i)){
    browserName = "opera";
  } else if(userAgent.match(/edg/i)){
    browserName = "edge";
  }else{
    browserName="No browser detection";
  }
  return browserName
}

function getOSName() {
  let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
  
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    SameSite: 'Lax',
    ...options
  };

  const keys = Object.keys(options);
  const values = Object.values(options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {'max-age': 15});
}