/********************Module Decleration ****************/
var app=angular.module("InspiringWings",["ui.router",'ngMessages','ngStorage',]);
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
        views: { 'Home':{ templateUrl:'Pages/Home.html'}}
           })
        .state("Engineering",{
            url:'/Engineering',
          views: { 'Engineering':{templateUrl:'Pages/Engineering.html'} }
           })
      .state("Tetee",{
            url:'/Tetee',
           views: { 'Tetee':{templateUrl:'Pages/Tetee.html'}}
           })
     .state("Educations",{
            url:'/Educations',
             views: { 'Educations':{templateUrl:'Pages/Educations.html'} }
           })
     .state("Arts",{
            url:'/Arts',
           views: { 'Arts':{templateUrl:'Pages/Arts.html'}}
           })
        .state("Business Opportunities",{
            url:'/BusinessOpportunities',
             views: { 'BusinessOpportunities':{templateUrl:'Pages/Business Opportunities.html'}}
           })
        .state("Education",{
            url:'/Education',
                views: { 'Education':{templateUrl:'Pages/Education.html'} }
           })
            .state("Sdfsdf",{
            url:'/Sdfsdf',
                  views: { 'Sdfsdf':{templateUrl:'Pages/Sdfsdf.html'}}
           })
         .state("supportWings",{
            url:'/supportWings',
            views: {'supportWings':{templateUrl:'Pages/supportWings.html'} }
           })
          .state("ReceiveWings",{
            url:'/ReceiveWings',
             views: {'ReceiveWings':{templateUrl:'Pages/ReceiveWings.html'} }
           })
           .state("EventCalendar",{
            url:'/EventCalendar',
           views: {'EventCalendar':{templateUrl:'Pages/EventCalendar.html'}}
           })
           .state("IncubationCenters",{
            url:'/IncubationCenters',
               views: {'IncubationCenters':{templateUrl:'Pages/IncubationCenters.html'} }
           })
           .state("About",{
            url:'/About',
                   views: {'About':{templateUrl:'Pages/About.html'}}
           })
           .state("SignUp",{
            url:'/SignUp',
            views: {'SignUp':{templateUrl:'Pages/SignUp.html', controller : "signUp"}}
     
           })
           .state("Login",{
            url:'/Login',
            views: {'Login':{templateUrl:'Pages/Login.html', controller : "loginCntrl"}}
           })
            .state("ForgotPassword",{
            url:'/ForgotPassword',
             views: {'ForgotPassword':{ templateUrl:'Pages/ForgotPassword.html', controller : "forgotpassCntrl"}}
           })
            .state("Opportunities",{
            url:'/Opportunities',
         views: {'Opportunities':{ templateUrl:'dashboard/Opportunity.html',controller : "OpportunitiesCntrl"}}
      
           })
              .state("OpportunityType",{
            url:'/OpportunityType',
         views: {'OpportunityType':{templateUrl:'dashboard/Opportunity-type.html', controller : "OpportTypeCntrl"}}
   
           })
            .state("StorysTypes",{
            url:'/StorysTypes',
         views:{'StorysTypes': {  templateUrl:'dashboard/Story-Types.html',controller : "StorysTypesCntrl"}}
       
           })
            .state("Stories",{
            url:'/Stories',
         views: {'Stories':{  templateUrl:'dashboard/Stories.html', controller : "StoriesCntrl"}}
      
           })
            .state("Events",{
            url:'/Events',
         views: {'Events':{  templateUrl:'dashboard/Events.html', controller : "EventsCntrl"}}
           
             
           })
            .state("Users",{
            url:'/Users',
         views: {'Users':{ templateUrl:'dashboard/Users.html',controller : "UsersCntrl"}}
            
             
           });
     
});








