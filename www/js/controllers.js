angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AveragesTimeCtrl', function($scope) {
})

.controller("dayBreakdown", ['$scope','$http', function($scope, $http)
    {
        $http.get('data/dayBreakdown.json').success (function(data){
            console.log(data);
            $scope.dayBreakdown = data;
        });
    }]
)

    .controller("monthBreakdown", ['$scope','$http', function($scope, $http)
    {
        $http.get('data/monthBreakdown.json').success (function(data){
            console.log(data);
            $scope.monthBreakdown = data;
        });
    }]
)

    .controller("yearBreakdown", ['$scope','$http', function($scope, $http)
    {
        $http.get('data/yearBreakdown.json').success (function(data){
            console.log(data);
            $scope.yearBreakdown = data;
        });
    }]
);

