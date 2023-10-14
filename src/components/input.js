export default function Input({ $target, onChange, initialState }) {
    this.$element = document.createElement("input");
    $target.appendChild(this.$element);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };

        this.render();
    };

    this.render = () => {
        this.$element.value = this.state.value;
    };
    this.render();

    this.$element.addEventListener("keydown", (e) => onChange(e));
}
