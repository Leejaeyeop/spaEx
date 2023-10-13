import { routerChange, routerInit } from "./router/router.js";
import Input from "./components/input.js";

export default function App({ $target }) {
    this.state = {
        lists: [],
    };

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };

        input.setState({});
    };
    let input = null;
    this.render = () => {
        $target.innerHTML = `<div>home</div>`;
        input = new Input({ $target });
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
