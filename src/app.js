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

        console.log(this.state);
        input.setState({});
    };
    let input = null;
    this.render = () => {
        $target.innerHTML = `<div>home</div>`;
        const onChange = (e) => {
            console.log(e);
        };
        const initialState = {
            value: "default",
        };
        input = new Input({ $target, onChange, initialState });
    };
    this.render();

    const onRouteChange = () => {
        const currentUrl = window.location.pathname;
        console.log(currentUrl);
    };
    routerInit(onRouteChange);
    window.addEventListener("popstate", onRouteChange);

    this.setState({ list: [1, 2, 3] });
    input.setState({ value: "default2" });
    // test
    // routerChange("about");
}
