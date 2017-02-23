const myApp = angular.module('myApp', ['ngRoute']);

angular.module('myApp')
       .config(function($routeProvider){
    
    $routeProvider.when('/home', {
                   templateUrl : 'partials/home.html',
                   controller  : 'HomeController',
                   controllerAs: 'HC'
    })
                  .when('/about', {
                   templateUrl : 'partials/about.html',
                   controller  : 'AboutController',
                   controllerAs: 'AC'
    })
                  .when('/contact',{
                  templateUrl: 'partials/contact.html',
                  controller  : 'ContactController',
                  controllerAs: 'CC'
    })
                  .when('/benefits', {
                  templateUrl: 'partials/benefits.html',
                  controller  : 'BenefitsController',
                  controllerAs: 'BC'
    })
                  .when('/join',{
                  templateUrl:'partials/join.html',
                   controller:'JoinController',
                   controllerAs:'JC'
        
    })
    .otherwise({
        redirectTo: '/home'
    })
    
});
myApp.controller('HomeController', function($scope){
    $scope.HomePage ='Welcome!';
    
});

myApp.controller('AboutController', function($scope){
    $scope.aboutPage ='Who are we?';
    
});
myApp.controller('ContactController', function($scope){
    $scope.contactPage ='Contact us';
    
});
myApp.controller('BenefitsController', function($scope){
    debugger;
    $scope.benefitsPage ='WHAT ARE OUR BENEFITS?';
    
});
myApp.controller('JoinController', function($scope){
    $scope.joinpage = "Come, Work with us";
});