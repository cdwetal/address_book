var React = require('react');

var AddressRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.streetAddress}</td>
                <td>{this.props.data.city}</td>
                <td>{this.props.data.state}</td>
                <td>{this.props.data.zip}</td>
            </tr>
        );
    }
});

var AddressTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.data.forEach(function(address) {
          rows.push(<AddressRow data={address} key={address.id} />);
        });
        return (
            <table className="display" id="address_table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});

module.exports = AddressTable;
