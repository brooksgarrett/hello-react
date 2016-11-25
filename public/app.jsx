var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Guest',
            message: 'This is from the component.'
        };
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>


            </div>
        );
    }
});

var firstName = 'Brooks';
var message = 'This is my message';

ReactDOM.render(
    <Greeter name={firstName} message={message} />,
    document.getElementById('app')
);