/********************Module Decleration ****************/
var app=angular.module("InspiringWings",["ui.router",'ngMessages']);
/********************App Run ****************/
app.run(function($rootScope) {
     $rootScope.memebers=true;
     $rootScope.session = '';
});
/********************ui Routing ****************/
app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
 $locationProvider.html5Mode({
  enabled: false,
  requireBase: false
});
   $urlRouterProvider.otherwise('/Home');
    $stateProvider
    .state("Home",{
            url:'/Home',
            templateUrl:'Pages/Home.html'
           })
      .state("Engineering",{
            url:'/Engineering',
            templateUrl:'Pages/Engineering.html'
           })
      .state("Tetee",{
            url:'/Tetee',
            templateUrl:'Pages/Tetee.html'
           })
     .state("Educations",{
            url:'/Educations',
            templateUrl:'Pages/Educations.html'
           })
     .state("Arts",{
            url:'/Arts',
            templateUrl:'Pages/Arts.html'
           })
     .state("Business Opportunities",{
            url:'/BusinessOpportunities',
            templateUrl:'Pages/Business Opportunities.html'
           })
       .state("Education",{
            url:'/Education',
            templateUrl:'Pages/Education.html'
           })
        .state("Sdfsdf",{
            url:'/Sdfsdf',
            templateUrl:'Pages/Sdfsdf.html'
           })
         .state("supportWings",{
            url:'/supportWings',
            templateUrl:'Pages/supportWings.html'
           })
          .state("ReceiveWings",{
            url:'/ReceiveWings',
            templateUrl:'Pages/ReceiveWings.html'
           })
           .state("EventCalendar",{
            url:'/EventCalendar',
            templateUrl:'Pages/EventCalendar.html'
           })
           .state("IncubationCenters",{
            url:'/IncubationCenters',
            templateUrl:'Pages/IncubationCenters.html'
           })
           .state("About",{
            url:'/About',
            templateUrl:'Pages/About.html'
           })
           .state("SignUp",{
            url:'/SignUp',
            templateUrl:'Pages/SignUp.html',
            controller : "signUp"
           })
           .state("Login",{
            url:'/Login',
            templateUrl:'Pages/Login.html',
            controller : "loginCntrl"
           })
            .state("ForgotPassword",{
            url:'/ForgotPassword',
            templateUrl:'Pages/ForgotPassword.html',
            controller : "forgotpassCntrl"
           })
            .state("Opportunities",{
            url:'/Opportunities',
            templateUrl:'dashboard/Opportunity.html'
           })
              .state("OpportunityType",{
            url:'/OpportunityType',
            templateUrl:'dashboard/Opportunity-type.html'
           })
            .state("StorysTypes",{
            url:'/StorysTypes',
            templateUrl:'dashboard/Story-Types.html'
           })
            .state("Stories",{
            url:'/Stories',
            templateUrl:'dashboard/Stories.html'
           })
            .state("Events",{
            url:'/Events',
            templateUrl:'dashboard/Events.html'
           })
            .state("Users",{
            url:'/Users',
            templateUrl:'dashboard/Users.html'
           });
});








