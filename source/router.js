app.config( function($routeProvider, $locationProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "view/home.html",
    })

    .when("/trip", {
        templateUrl: "view/trip.html",
    })

    .when("/work", {
        templateUrl: "view/work.html",
    })

    .when("/life", {
        templateUrl: "view/life.html",
    })

    .otherwise( {
        redirectTo: "/home"
    })
     $locationProvider.html5Mode(true);
});
