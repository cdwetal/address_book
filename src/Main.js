var React = require('react');
var AddressTable = require('./AddressTable');
var AddAddressModal = require('./AddAddressModal');
var Request = require('superagent');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {people: []};

  }

  getAddresses() {
    Request.get('http://localhost:3000/api/addresses').then((response) => {
      this.setState({people: response.body});
    });
  }

  componentWillMount() {
     this.getAddresses()
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="col-md-8 pull-left">
          <h1>Address Book</h1>
          </div>
          <div className="col-md-4">
          <AddAddressModal />
          </div>
        </div>
        <AddressTable data={this.state.people} />
      </div>
    );
  }
}

module.exports = Main;