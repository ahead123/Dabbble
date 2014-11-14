"use strict";

var app = angular.module('dabbble', ['ngRoute', 'dabbble.controllers']);

app.config(function ($routeProvider) {
	$routeProvider.when("/:list", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
});