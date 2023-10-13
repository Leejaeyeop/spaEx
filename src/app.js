import { routerChange, routerInit } from "./router/router.js";

export default function App({ $target }) {
    this.render = () => {
        $target.innerHTML = `<div>home</div>`;
    };

    this.render();

    const onRouteChange = () => {
        const currentUrl = window.location.pathname;
        console.log(currentUrl);
    };

    routerInit(onRouteChange);
    window.addEventListener("popstate", onRouteChange);

    // test
    // routerChange("about");
}
