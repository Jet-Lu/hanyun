define(['gloryview', 'jquery'], function (gloryview, $, moment, echarts) {

	gloryview.controller('businessOverviewCtrl', function ($rootScope, $scope, $state, viewData, $alert, $uibModal, $timeout, businessService2) {
		$scope.loaded = false;
		var resize = function () {
			var h = 0;
			if ($rootScope.itsm.showHeader) {
				h = $(window).height() - 245;
			} else {
				h = $(window).height() - 165;
				$('#businessIndex').css({
					'margin-top': 0
				});
			}
			$('#responseTimeChartDiv').css({
				'height': (h / 2) + 'px'
			});
			$('#healthLevelChartDiv').css({
				'height': (h / 2) + 'px'
			});
			var cc = $('#ywjkdul');
			cc.css({
				'height': (h / 2) + 'px'
			});
			$('#businessTable').slimScroll({ destroy: true });
			$('#businessTable').slimScroll({
				height: h / 2 - 36
			});
			$('.tab-content').slimScroll({ destroy: true });
			$('.tab-content').slimScroll({ height: h + 48 });
			if ($scope.loaded) {
				carousel.xOrigin = cc.width() / 2;
				carousel.yOrigin = cc.height() / 5;
				carousel.xRadius = cc.width() / 1.6;
				carousel.yRadius = cc.height() / 3;
			}
			$scope.loaded = true;
		};

		var t = null;
		var responseTimeChart = null;
		var healthLevelChart = null;
		var carousel = null;
		var renderOverview = function () {
			if (responseTimeChart) {
				responseTimeChart.dispose();
			}
			responseTimeChart = new FusionCharts('Column2D', 'responseTimeChart', '100%', '100%');
			responseTimeChart.setTransparent(true);
			responseTimeChart.setDataXML($scope.responseTimeXmlData);
			responseTimeChart.render('responseTimeChartDiv');

			if (healthLevelChart) {
				healthLevelChart.dispose();
			}
			healthLevelChart = new FusionCharts('pie3d', 'healthLevelChart', '100%', '100%');
			healthLevelChart.setTransparent(true);
			healthLevelChart.setDataXML($scope.healthLevelXmlData);
			healthLevelChart.render('healthLevelChartDiv');

			t = $timeout(function () {
				if (carousel) {
					carousel.deactivate();
				}
				var cc = $('#ywjkdul');
				cc.Cloud9Carousel({
					autoPlay: 1,
					xOrigin: cc.width() / 2,
					yOrigin: cc.height() / 5,
					xRadius: cc.width() / 1.6,
					yRadius: cc.height() / 3,
					bringToFront: true,
					onAnimationFinished: function () {
						if (carousel) {
							var index = carousel.nearestIndex();
							$('#ywjkdul .score').html('<div>' + $rootScope.businesses[index].currentPerformance.health + '%</div>');
						}
					}
				});
				carousel = cc.data('carousel');

				$('.circliful').circliful({ foregroundColor: '#089148', dimension: 50, textColor: '#ffffff' });
				$('.circliful_orange').circliful({ foregroundColor: '#ec9820', dimension: 50, textColor: '#ffffff' });
				$('.circliful_red').circliful({ foregroundColor: '#f24e2e', dimension: 50, textColor: '#ffffff' });
			}, 0, false);
		};

		$scope.$on('$viewContentLoaded', function () {
			resize();
			$(window).on('resize', resize);

			$timeout(function () {
				$('body').addClass('sidebar-collapse');
				$scope.$watch('businesses', function (newValue, oldValue) {
					businessService2.main().success(function (viewData) {
						$scope.responseTimeXmlData = viewData.responseTimeXmlData;
						$scope.healthLevelXmlData = viewData.healthLevelXmlData;
						renderOverview();
					});
				});
			});
		});

		$scope.responseTimeXmlData = viewData.data.responseTimeXmlData;
		$scope.healthLevelXmlData = viewData.data.healthLevelXmlData;

		$scope.$on('$destroy', function () {
			$('body').removeClass('sidebar-collapse');
			$timeout.cancel(t);
			if (carousel) {
				carousel.deactivate();
			}
			$(window).off('resize', resize);
		});
	});

});