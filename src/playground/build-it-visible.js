class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p hidden={!this.state.visibility}>Hehe here's some deets!</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




/*
const appRoot = document.getElementById('app');

const app = {
    visible: false
}

const onToggle = () => {
    app.visible = !app.visible;
    renderVisibility();
}

const renderVisibility = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{app.visible ? 'Hide details' : 'Show details'}</button>
            {app.visible && (<p>Hehe here some deets!</p>)}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderVisibility();
*/