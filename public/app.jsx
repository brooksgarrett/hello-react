var GreeterMessage = React.createClass({
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

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        
        if (name.length > 0) {
            updates.name = name;
            this.refs.name.value = '';
        }

        if (message.length > 0) {
            updates.message = message;
            this.refs.message.value = '';
        }
        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
                    <div>
                    <input type="text" ref="name" placeholder="Enter a name" />
                    </div>
                    <div>
                    <textarea ref="message" placeholder="Enter a message" />
                    </div>
                    <div>
                    <button>Update</button>
                    </div>
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
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewData: function(updates) {
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData} />
                
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