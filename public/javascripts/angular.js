var app = angular.module('myApp', []);
//AngularJS controllers control applications:
app.controller('myCtrl', function($scope,$http) {
      var socket = io.connect( 'http://'+window.location.hostname+':3001' );
    $scope.firstName= "John";



    $scope.submit=function(){

        console.log($scope.firstName);
        
        // use http send message to server.
        $http.get('/users?name='+$scope.firstName).then(res=>{
            // console.log(res); 
        })
    };
    
      socket.on("connect", function () {
        const sessionID = socket.id;//CPjCHB6HGFg8r5zDAAAA this is same with the socket.id one on server.
        console.log(sessionID);//
        //get message/ Use the sessionID so different client have different ID
        socket.on(sessionID + '_new message', function (data) {
            console.log('[Node server:] ' + data);
        });
    })
});