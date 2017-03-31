var React = require('react');
var Modal = require('react-bootstrap').Modal;

class AddAddressModal extends React.Component {

	render() {
		return (
			<div>
			   <button data-toggle="modal" data-target="#add_address_modal" className="btn btn-default pull-right bottom-column">Add <span className="glyphicon glyphicon-plus"></span></button>
			   <Modal />

			   <div className="modal fade" id="add_address_modal" role="dialog">
			      <div className="modal-dialog">
			         <div className="modal-content">
			            <div className="modal-header">
			               <button type="button" className="close" data-dismiss="modal">&times;</button>
			               <h4 className="modal-title">Add New Address</h4>
			            </div>
			            <form className="well form-horizontal" action="/api/addresses" method="post"  id="address_form">
			               <div className="modal-body">
			                  <fieldset>
			                     <div className="form-group">
			                        <label className="control-label">First Name</label>  
			                        <div className="inputGroupContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
			                              <input name="firstName" placeholder="First Name" className="form-control"  type="text"></input>
			                           </div>
			                        </div>
			                     </div>
			                     <div className="form-group">
			                        <label className="control-label" >Last Name</label> 
			                        <div className="inputGroupContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
			                              <input name="lastName" placeholder="Last Name" className="form-control"  type="text"></input>
			                           </div>
			                        </div>
			                     </div>
			                     <div className="form-group">
			                        <label className="control-label">Address</label>  
			                        <div className="inputGroupContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
			                              <input name="streetAddress" placeholder="Address" className="form-control" type="text"></input>
			                           </div>
			                        </div>
			                     </div>
			                     <div className="form-group">
			                        <label className="control-label">City</label>  
			                        <div className="inputGroupContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
			                              <input name="city" placeholder="City" className="form-control"  type="text"></input>
			                           </div>
			                        </div>
			                     </div>
			                     <div className="form-group">
			                        <label className="control-label">State</label>
			                        <div className="selectContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
			                              <select name="state" className="form-control selectpicker" >
			                                 <option value=" ">Please select the state</option>
												<option value="AK">Alaska</option>
												<option value="AL">Alabama</option>
												<option value="AR">Arkansas</option>
												<option value="AZ">Arizona</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DC">District of Columbia</option>
												<option value="DE">Delaware</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="IA">Iowa</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="MA">Massachusetts</option>
												<option value="MD">Maryland</option>
												<option value="ME">Maine</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MO">Missouri</option>
												<option value="MS">Mississippi</option>
												<option value="MT">Montana</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="NE">Nebraska</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NV">Nevada</option>
												<option value="NY">New York</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="PR">Puerto Rico</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VA">Virginia</option>
												<option value="VT">Vermont</option>
												<option value="WA">Washington</option>
												<option value="WI">Wisconsin</option>
												<option value="WV">West Virginia</option>
												<option value="WY">Wyoming</option>
			                              </select>
			                           </div>
			                        </div>
			                     </div>
			                     <div className="form-group">
			                        <label className="control-label">Zip</label>  
			                        <div className="inputGroupContainer">
			                           <div className="input-group">
			                              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
			                              <input name="zip" placeholder="Zip" className="form-control"  type="text"></input>
			                           </div>
			                        </div>
			                     </div>
			                  </fieldset>
			               </div>
			               <div className="modal-footer">
			                  <div className="form-group">
			                     <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			                     <button type="submit" className="btn btn-default">Add <span className="glyphicon glyphicon-plus"></span></button>
			                  </div>
			               </div>
			            </form>
			         </div>
			      </div>
			   </div>
			</div>
		);
	}
}

module.exports = AddAddressModal;