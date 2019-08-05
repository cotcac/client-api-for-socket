var app = angular.module('myApp', []);
//AngularJS controllers control applications:
app.controller('myCtrl', function($scope) {
      var socket = io.connect( 'http://'+window.location.hostname+':3000' );
    $scope.firstName= "John";
    $scope.submit=function(){
        console.log('submit');
        console.log('Name:'+$scope.firstName);
        socket.emit('send message', $scope.firstName);
    };
    
    //get message
    socket.on('new message', function (data) {
       console.log('Node server:'+data);
    });
});