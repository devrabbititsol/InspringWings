/********************Module Decleration ****************/
var app=angular.module("InspiringWings",["ui.router",'ngMessages','ngStorage','720kb.datepicker']);
/********************App Run ****************/
app.run(function($rootScope) {
     $rootScope.memebers=true;
     $rootScope.session = '';

});
/********************ui Routing ****************/
app.config(function($stateProvider,$urlRouterProvider,$locationProvider,$provide){

$provide.constant('header',{"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"})
$provide.constant('webUrl',"http://devrabbit.com/inspiring_wings/web_services/")
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
     .state("Arts",{
            url:'/Arts',
           views: { 'Arts':{templateUrl:'Pages/Arts.html'}}
           })
        .state("Business Opportunities",{
            url:'/BusinessOpportunities',
             views: { 'BusinessOpportunities':{templateUrl:'Pages/Business Opportunities.html'}}
           })
        .state("wings_opportunites",{
            url:'/wings_opportunites',
                views: { 'wings_opportunites':{templateUrl:'Pages/Wings_Opportunites.html',controller:"Main_opportunitesCntrl"} }
           })
            .state("wings_storys",{
            url:'/wings_storys',
                  views: { 'wings_storys':{templateUrl:'Pages/storyssite.html',controller:"storycntrl"}}
           })
         .state("supportWings",{
            url:'/',
            views: {'supportWings':{templateUrl:'Pages/supportWings.html',controller :"supportCntrl"} }
           })
          .state("ReceiveWings",{
            url:'/ReceiveWings',
             views: {'ReceiveWings':{templateUrl:'Pages/ReceiveWings.html',controller :"reciverCntrl"} }
           })
           .state("EventCalendar",{
            url:'/EventCalendar',
           views: {'EventCalendar':{templateUrl:'Pages/EventCalendar.html',controller :"Events"}}
           })
           .state("IncubationCenters",{
            url:'/IncubationCenters',
               views: {'IncubationCenters':{templateUrl:'Pages/IncubationCenters.html',controller :"Main_IncubationsCntrl"} }
           })
           .state("About",{
            url:'/About',
                   views: {'About':{templateUrl:'Pages/About.html',controller :"aboutCntrl"}}
           })
           .state("SignUp",{
            url:'/SignUp',
            views: {'SignUp':{templateUrl:'Pages/SignUp.html', controller : "signUp"}}

           })
           .state("Login",{
            url:'/Login',
            views: {'Login':{templateUrl:'Pages/Login.html', controller : "loginCntrl"}}
           })

            .state("myProfile",{
            url:'/myProfile',
             views: {'myProfile':{ templateUrl:'inspiringwings_dashboard/myProfile.html', controller : "myProfileCntrl"}}
           })
                .state("ForgotPassword",{
            url:'/ForgotPassword',
             views: {'ForgotPassword':{ templateUrl:'Pages/ForgotPassword.html', controller : "forgotpassCntrl"}}
           })

              .state("Dashboard",{
            url:'/Dashboard',
            views: {'Dashboard':{templateUrl:'inspiringwings_dashboard/inspiring_dashboard.html', controller : "dashboardcntrl"}}
           })

            .state("Opportunities",{
            url:'/Opportunities',
         views: {'Opportunities':{ templateUrl:'inspiringwings_dashboard/Opportunity.html',controller : "OpportunitiesCntrl"}}

           })
              .state("OpportunityType",{
            url:'/OpportunityType',
         views: {'OpportunityType':{templateUrl:'inspiringwings_dashboard/Opportunity-type.html', controller : "OpportTypeCntrl"}}

           })
            .state("StorysTypes",{
            url:'/StorysTypes',
         views:{'StorysTypes': {  templateUrl:'inspiringwings_dashboard/Story-Types.html',controller : "StorysTypesCntrl"}}
           })
            .state("Stories",{
            url:'/Stories',
         views: {'Stories':{  templateUrl:'inspiringwings_dashboard/Stories.html', controller : "StoriesCntrl"}}

           })
            .state("Events",{
            url:'/Events',
         views: {'Events':{  templateUrl:'inspiringwings_dashboard/Events.html', controller : "EventsCntrl"}}
           })
            .state("Users",{
            url:'/Users',
         views: {'Users':{ templateUrl:'inspiringwings_dashboard/Users.html',controller : "UsersCntrl"}}
           })
            .state("testimonials",{
            url:'/Testimonials',
            views: {'testimonials':{ templateUrl:'inspiringwings_dashboard/Testimonials.html',controller : "TestimonialsCntrl"}}
           })
            .state("view_all_requests",{
            url:'/View_All_Requests',
            views: {'view_all_requests':{ templateUrl:'inspiringwings_dashboard/View-All-Requets.html',controller : "viewAllReqCntrl"}}
           })
            .state("View_Pending_Requests",{
            url:'/View_Pending_Requests',
            views: {'View_Pending_Requests':{ templateUrl:'inspiringwings_dashboard/View-Pending-Requets.html',controller : "viewPendingReqCntrl"}}
           })
              .state("Closed_Requests",{
            url:'/Closed_Requests',
            views: {'Closed_Requests':{ templateUrl:'inspiringwings_dashboard/Closed-Requets.html',controller : "closedReqCntrl"}}
           })
            .state("Seeking_For_Help",{
            url:'/Seeking_For_Help',
            views: {'Seeking_For_Help':{ templateUrl:'inspiringwings_dashboard/Seeking-For-Help.html',controller : "seekingforHelpCntrl"}}
           })
              .state("View_My_Requets",{
            url:'/View_My_Requets',
            views: {'View_My_Requets':{ templateUrl:'inspiringwings_dashboard/View-My-Request.html',controller : "viewMyReqCntrl"}}
           })
            .state("changePassword",{
            url:'/changePassword',
           views: {'changePassword':{ templateUrl:'inspiringwings_dashboard/changePassword.html',controller : "changePasswordCntrl"}}
          })
            .state("IncubationCenter",{
            url:'/IncubationCenter',
            views: {'IncubationCenter':{ templateUrl:'inspiringwings_dashboard/IncubationCenters.html',controller : "incubationCenterCntrl"}}
           })
            .state("IncubationCenterCategorys",{
            url:'/IncubationCenterCategorys',
            views: {'IncubationCenterCategorys':{ templateUrl:'inspiringwings_dashboard/IncubationTypes.html',controller : "incubationCenterCategoryCntrl"}}
           })
            ;
});
