function LoginCtrl($scope,$modal,SweetAlert,modalInstance) {


    $scope.recovery_password =  function() {

        var email = $("#email").val();

        //var email = $scope.email;


        if (email == '') {
            //validation += 'Please Fill <br>';
            $('#error_username').css('display', 'block');
            return;
        } else {
            $('#error_username').css('display', 'none');
        }


        var url = "../control/control_yc_accounts.php"; // the script where you handle the form input.
        var data = {
            "action": "recovery_password",
            "account_name": email,

        };

        $.ajax({

            type: "POST",
            url: url,
            dataType: 'json',
            data: data, // serializes the form's elements.
            success: function (data) {

                if (data.success) {

                    $("#email").val("");

                } else {


                }
            }
        });

    }


}

function ModalInstLoginCtrl($scope, $modalInstance) {

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}


angular
    .module('YOUTHCOMBINEApp', ['oitozero.ngSweetAlert','ui.utils','ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router','ngTouch'])
    .controller('LoginCtrl', ['$scope','$modal','SweetAlert', LoginCtrl])
    .controller('ModalInstLoginCtrl', ['$scope', '$modalInstance', ModalInstLoginCtrl])