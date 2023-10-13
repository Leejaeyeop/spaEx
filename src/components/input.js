export default function Input({ $target }) {
    this.input = document.createElement("input");
    $target.appendChild(this.input);

    this.state = {};

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };

        this.render();
    };

    this.render = () => {};
    this.render();
}
