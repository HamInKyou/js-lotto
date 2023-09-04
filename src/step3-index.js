import App from "./@web/js/App";
import "./@web/css/index.css"

if (typeof window !== "undefined" && window.document) {
    new App({$target: document.querySelector('#app')})
}
