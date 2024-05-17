const lightDarkSwitcher = document.querySelector('#lightDarkSwitcher');
var rootSelector = document.querySelector(':root');

let mode = 'light';

// Listen for a click event on toggle switch

lightDarkSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      rootSelector.style.setProperty('--backgroundColor', 'white');
      rootSelector.style.setProperty('--fontColor', 'black');
      rootSelector.style.setProperty('--accentColor', 'skyblue');
      lightDarkSwitcher.textContent = '☀️';
      localStorage.setItem('mode',mode);
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      rootSelector.style.setProperty('--backgroundColor', 'black');
      rootSelector.style.setProperty('--fontColor', 'white');
      rootSelector.style.setProperty('--accentColor', 'orange');
      lightDarkSwitcher.textContent = '🌛';
      localStorage.setItem('mode',mode);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
        rootSelector.style.setProperty('--backgroundColor', 'white');
        rootSelector.style.setProperty('--fontColor', 'black');
        rootSelector.style.setProperty('--accentColor', 'skyblue');
        lightDarkSwitcher.textContent = '☀️';
    } else {
        rootSelector.style.setProperty('--backgroundColor', 'black');
        rootSelector.style.setProperty('--fontColor', 'white');
        rootSelector.style.setProperty('--accentColor', 'orange');
        lightDarkSwitcher.textContent = '🌛';
        localStorage.setItem('mode',mode);
    }
});