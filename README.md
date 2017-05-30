# PatternFly Community Demo

## Application Launcher

Community demo...

Breakdown:
 - [Design Overview](http://www.patternfly.org/pattern-library/application-framework/launcher/)
 - Examples
   - [Design Example](http://rawgit.com/patternfly/patternfly/master-dist/dist/tests/application-launcher-nav.html)
   - [Angular Example](http://rawgit.com/patternfly/angular-patternfly/master-dist/dist/docs/index.html#/api/patternfly.navigation.directive:pfApplicationLauncher)

### Angular PatternFly 3.x
```html
   <div pf-application-launcher="" 
        items="navigationItems" 
        label="{{label}}" 
        is-disabled="isDisabled" 
        is-list="isList" 
        hidden-icons="hiddenIcons"></div>
```

```javascript
   angular.module('patternfly.navigation').controller('applicationLauncherController', ['$scope',
     function ($scope) {
       $scope.navigationItems = [
         {
           title: "Recteque",
           href: "#/ipsum/intellegam/recteque",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-storage-domain"
         },
         {
           title: "Suavitate",
           href: "#/ipsum/intellegam/suavitate",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-build"
         },
         {
           title: "Lorem",
           href: "#/ipsum/intellegam/lorem",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-domain"
         },
         {
           title: "Home",
           href: "#/ipsum/intellegam/home",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-home"
         }
       ];

       $scope.label = 'Application Launcher';
       $scope.isDisabled = false;
       $scope.isList = false;
       $scope.hiddenIcons = false;
     }]);
```

Angular PatternFly 4.x
```html
   <pf-application-launcher items="navigationItems" label="{{label}}" is-disabled="isDisabled" is-list="isList" hidden-icons="hiddenIcons"></pf-application-launcher>
```

```javascript
   angular.module('patternfly.navigation').controller('applicationLauncherController', ['$scope',
     function ($scope) {
       $scope.navigationItems = [
         {
           title: "Recteque",
           href: "#/ipsum/intellegam/recteque",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-storage-domain"
         },
         {
           title: "Suavitate",
           href: "#/ipsum/intellegam/suavitate",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-build"
         },
         {
           title: "Lorem",
           href: "#/ipsum/intellegam/lorem",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-domain"
         },
         {
           title: "Home",
           href: "#/ipsum/intellegam/home",
           tooltip: "Launch the Function User Interface",
           iconClass: "pficon-home"
         }
       ];

       $scope.label = 'Application Launcher';
       $scope.isDisabled = false;
       $scope.isList = false;
       $scope.hiddenIcons = false;
     }]);
```
