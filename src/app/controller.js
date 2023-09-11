var app = angular.module("myapp",[]);
app.controller('movie',function($scope, $http){
$http.get("https://www.episodate.com/api/most-popular?page=1")
.then(function(response){
    console.log('hi');
    console.log(response.data);
    $scope.movies= response.data;
    $scope.names=response.data;
})
});