var app = angular.module('myApp', []);
//AngularJS controllers control applications:
app.controller('myCtrl', function ($scope) {
    var socket = io.connect('http://' + window.location.hostname + ':3000');
    socket.on("connect", function () {
        const sessionID = socket.id;
        console.log(sessionID);
        $scope.firstName = "John";
        $scope.submit = function () {
            console.log('submit');
            console.log('Name:' + $scope.firstName);
            socket.emit('send message', $scope.firstName);
        };

        //get message
        socket.on(sessionID + '_new message', function (data) {
            console.log('Node server:' + data);
        });

    })

});