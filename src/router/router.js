const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

const routerChange = (url, params) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT));
};

const routerInit = (onRouteChange) => {
    window.addEventListener(ROUTE_CHANGE_EVENT, onRouteChange);
};

export { routerChange, routerInit };
