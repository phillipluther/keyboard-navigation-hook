var tf=function(e){"use strict";return e.initTacticalFocus=function(e={}){const{target:t,name:n,debug:o}={target:"body",name:"tactical-focus",debug:!1,...e},c="string"==typeof t?document.querySelector(t):t;function i({key:e}){"Tab"===e&&(o&&console.log("[tactical-focus] Activating keyboard mode"),window.removeEventListener("keydown",i),window.addEventListener("mousedown",s),null!==c&&c.classList.add(n))}function s(){o&&console.log("[tactical-focus] Activating mouse mode"),window.removeEventListener("mousedown",s),window.addEventListener("keydown",i),null!==c&&c.classList.remove(n)}s()},e}({});
