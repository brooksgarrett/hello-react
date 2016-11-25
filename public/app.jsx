var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Guest'
        };
    },
    render: function () {
        var name = this.props.name;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is from the component.</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);