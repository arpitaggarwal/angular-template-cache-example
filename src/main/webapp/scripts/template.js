angular.module("myapp.template", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("pages/angular-material.jsp",
    "<html lang=en><head><link rel=stylesheet href=http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css><script src=http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js></script><script src=http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js></script><script src=http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js></script><script src=http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js></script><script src=http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js></script><script>angular.module('firstApplication', [ 'ngMaterial' ]).controller(\n" +
    "			'autoCompleteController', autoCompleteController);\n" +
    "\n" +
    "	function autoCompleteController($timeout, $q, $log) {\n" +
    "		var self = this;\n" +
    "		self.simulateQuery = false;\n" +
    "		self.isDisabled = false;\n" +
    "		// list of states to be displayed\n" +
    "		self.states = loadStates();\n" +
    "		self.querySearch = querySearch;\n" +
    "		self.selectedItemChange = selectedItemChange;\n" +
    "		self.searchTextChange = searchTextChange;\n" +
    "		self.newState = newState;\n" +
    "		function newState(state) {\n" +
    "			alert(\"This functionality is yet to be implemented!\");\n" +
    "		}\n" +
    "		function querySearch(query) {\n" +
    "			var results = query ? self.states.filter(createFilterFor(query))\n" +
    "					: self.states, deferred;\n" +
    "			if (self.simulateQuery) {\n" +
    "				deferred = $q.defer();\n" +
    "				$timeout(function() {\n" +
    "					deferred.resolve(results);\n" +
    "				}, Math.random() * 1000, false);\n" +
    "				return deferred.promise;\n" +
    "			} else {\n" +
    "				return results;\n" +
    "			}\n" +
    "		}\n" +
    "		function searchTextChange(text) {\n" +
    "			$log.info('Text changed to ' + text);\n" +
    "		}\n" +
    "		function selectedItemChange(item) {\n" +
    "			$log.info('Item changed to ' + JSON.stringify(item));\n" +
    "		}\n" +
    "		//build list of states as map of key-value pairs\n" +
    "		function loadStates() {\n" +
    "			var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\\\n" +
    "         Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\\\n" +
    "         Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\\\n" +
    "         Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\\\n" +
    "         North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\\\n" +
    "         South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\\\n" +
    "         Wisconsin, Wyoming';\n" +
    "			return allStates.split(/, +/g).map(function(state) {\n" +
    "				return {\n" +
    "					value : state.toLowerCase(),\n" +
    "					display : state\n" +
    "				};\n" +
    "			});\n" +
    "		}\n" +
    "		//filter function for search query\n" +
    "		function createFilterFor(query) {\n" +
    "			var lowercaseQuery = angular.lowercase(query);\n" +
    "			return function filterFn(state) {\n" +
    "				return (state.value.indexOf(lowercaseQuery) === 0);\n" +
    "			};\n" +
    "		}\n" +
    "	}</script></head><body data-ng-app=firstApplication data-ng-cloak><div data-ng-controller=\"autoCompleteController as ctrl\" layout=column data-ng-cloak><md-content class=md-padding><form data-ng-submit=$event.preventDefault()><p><code>md-autocomplete</code> can be used to provide search results from local or remote data sources.</p><md-autocomplete ng-disabled=ctrl.isDisabled md-no-cache=ctrl.noCache md-selected-item=ctrl.selectedItem md-search-text-change=ctrl.searchTextChange(ctrl.searchText) md-search-text=ctrl.searchText md-selected-item-change=ctrl.selectedItemChange(item) md-items=\"item in ctrl.querySearch(ctrl.searchText)\" md-item-text=item.display md-min-length=0 placeholder=\"US State?\"><md-item-template><span md-highlight-text=ctrl.searchText md-highlight-flags=^i>{{item.display}}</span></md-item-template><md-not-found>No states matching \"{{ctrl.searchText}}\" were found. <a ng-click=ctrl.newState(ctrl.searchText)>Create a new one!</a></md-not-found></md-autocomplete><br><md-checkbox ng-model=ctrl.simulateQuery>Show progress for results?</md-checkbox><md-checkbox ng-model=ctrl.noCache>Disable caching?</md-checkbox><md-checkbox ng-model=ctrl.isDisabled>Disable?</md-checkbox><p><code>md-autocomplete</code> caches results when performing a query. After first call, it uses the cached results to eliminate unnecessary server requests or lookup logic and it can be disabled.</p></form></md-content></div></body></html>");
  $templateCache.put("pages/index.jsp",
    "<!DOCTYPE html><html><head> <%@ page contentType=\"text/html;charset=UTF-8\"%> <%@taglib uri=\"http://www.springframework.org/tags\" prefix=\"spring\"%> <title>AngularJS Webapp</title><spring:url value=/dist/js/vendor-scripts.js var=vendorJsUrl htmlescape=true><spring:url value=/dist/js/custom-scripts.js var=customJsUrl htmlescape=true><spring:url value=/js/jquery-2.2.3.min.js var=jQueryUrl htmlescape=true><spring:url value=/js/angular.min.js var=angularJsUrl htmlescape=true><spring:url value=/js/angular-ui-router.min.js var=angularUiRouterJsUrl htmlescape=true><spring:url value=/js/application.js var=applicationJsUrl htmlescape=true><spring:url value=/scripts/template.js var=templateJsUrl htmlescape=true><spring:url value=/css/bootstrap.min.css var=bootstrapCssUrl htmlescape=true><script src=${jQueryUrl}></script><script src=${angularJsUrl}></script><script src=${angularUiRouterJsUrl}></script><script src=${templateJsUrl}></script><script src=${applicationJsUrl}></script><link rel=stylesheet href=${bootstrapCssUrl}></head><body data-ng-app=myapp><nav class=\"navbar navbar-inverse\" role=navigation><div class=navbar-header><a class=navbar-brand ui-sref=#>WebCodeGeeks AngularJS UI-Router Example</a></div><ul class=\"nav navbar-nav\"><li><a ui-sref=posts>Posts</a></li><li><a ui-sref=authors>Authors</a></li></ul></nav><div class=container><div ui-view></div></div></body></html>");
  $templateCache.put("pages/page-authors.jsp",
    "<div class=\"jumbotron text-center\"><h1>Authors page</h1><p>This page shows a list of popular and recent authors and it is intended to show the use of Multiple Views.</p></div><div class=row><div class=col-sm-6><div ui-view=popular></div></div><div class=col-sm-6><div ui-view=recent></div></div></div>");
  $templateCache.put("pages/page-posts-list.jsp",
    "<ul><li data-ng-repeat=\"post in posts\">{{post.id}} - {{post.name}}</li></ul>");
  $templateCache.put("pages/page-posts.jsp",
    "<div class=\"jumbotron text-center\"><h1>Posts page</h1><p>This page shows a list of posts and it is intended to show the use of Nested Views.</p><a ui-sref=.list class=\"btn btn-primary\">List</a> <a ui-sref=.info class=\"btn btn-info\">Information</a></div><div ui-view></div>");
  $templateCache.put("pages/view-popular-authors.jsp",
    "<ul><li data-ng-repeat=\"author in authors\">{{author.name}} {{author.surname}}</li></ul>");
}]);
