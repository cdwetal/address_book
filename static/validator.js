  $(document).ready(function() {
    $('#address_table').DataTable();
    $('#address_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                        stringLength: {
                        max: 50,
                        message: 'First name cannot be more than 50 characters.'
                    },
                        notEmpty: {
                        message: 'Please supply the first name'
                    }
                }
            },
             lastName: {
                validators: {
                     stringLength: {
                        max: 50,
                        message: 'Last name cannot be more than 50 characters.'
                    },
                    notEmpty: {
                        message: 'Please supply the last name'
                    }
                }
            },
            streetAddress: {
                validators: {
                     stringLength: {
                        max: 100,
                        message: 'Address cannot be more than 100 characters.'
                    },
                    notEmpty: {
                        message: 'Please supply the street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        max: 50,
                        message: 'City cannot be more than 50 characters.'
                    },
                    notEmpty: {
                        message: 'Please supply the city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select the state'
                    }
                }
            },
            zip: {
                validators: {
                        notEmpty: {
                            message: 'Please supply your zip code'
                        },
                        zipCode: {
                            country: 'US',
                            message: 'Please supply a vaild zip code'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            if (!e.isDefaultPrevented()) {
                $('#address_form').data('bootstrapValidator').resetForm();
                // Prevent form submission
                e.preventDefault();

                // Get the form instance
                var $form = $(e.target);

                // Get the BootstrapValidator instance
                var bv = $form.data('bootstrapValidator');

                var array = $form.serializeArray();

                var returnArray = {};
                for (var i = 0; i < array.length; i++){
                    returnArray[array[i]['name']] = array[i]['value'];
                }

                $.ajax({
                    url: '/api/addresses', // url where to submit the request
                    type: "POST", // type of action POST || GET
                    dataType: 'json', // data type
                    contentType: "application/json",
                    processData: false,
                    data :JSON.stringify(returnArray), // post data || get data
                    success: function(result) {
                        // you can see the result from the console
                        // tab of the developer tools
                        $('#add_address_modal').modal('hide')
                        var table = $('#address_table').DataTable();
                        if (result['message'] === 'Success') {
                          table.row.add([
                              returnArray['firstName'],
                              returnArray['lastName'],
                              returnArray['streetAddress'],
                              returnArray['city'],
                              returnArray['state'],
                              returnArray['zip']
                           ]).draw(false);
                        }
                    },
                    error: function(xhr, response, text) {
                        alert('There was an error adding the address.');
                        console.log(text);
                    }
                });
            }
        });
});

$('#add_address_modal').on('hidden.bs.modal', function () {
    $('#address_form')[0].reset();
})

$('#add_address_modal').on('shown.bs.modal', function() {
  $('#address_form').data('bootstrapValidator').resetForm();
})
