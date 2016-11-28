var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Some H1</h1>
                <p>Some p</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" ref="name" />
                    <button>Some button</button>
                </form>
            </div>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Guest',
            message: 'This is from the component.'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function(e) {
        e.preventDefault();
        var nameRef = this.refs.name
        var name = nameRef.value;
        if (typeof name == 'string' && name.length > 0){
            nameRef.value = '';
            this.setState({name: name});
        };
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <GreeterMessage />
                <GreeterForm />
                
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