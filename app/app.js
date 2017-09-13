angular.module('myApp', [
  'ui.router'
])
.config(($urlRouterProvider) => {
  $urlRouterProvider.otherwise("/")
})
