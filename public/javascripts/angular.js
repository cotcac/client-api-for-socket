var app = angular.module('myApp', []);
//AngularJS controllers control applications:
app.controller('myCtrl', function($scope,$http) {
      var socket = io.connect( 'http://'+window.location.hostname+':3001' );
    $scope.firstName= "John";


    var sessionID ="";
    var channel ="notify"
    $scope.submit=function(){

        console.log($scope.firstName);
        
        // use http send message to server.
        var data = {
            sessionID,
            content:$scope.firstName
        }
        $http.post('/users?name='+$scope.firstName,data).catch(e=>{
            console.log(e);
        })
    };
    
      socket.on("connect", function () {
        sessionID = socket.id;//CPjCHB6HGFg8r5zDAAAA this is same with the socket.id one on server.
        console.log(sessionID);//

        //Listen to room "new message_"
        socket.on(channel, function (data) {
            console.log(`[ ${channel} ]` + data);
        });
        // Listen to event on channel "new message_[sessionID]"
        socket.on(`${channel} ${sessionID}`, function (data) {
            console.log(`[ ${channel} ]` + data);
        });
    })
});