define([ 'gloryview', 'jquery'], function(gloryview, $, moment, echarts) {

	gloryview.controller('businessIndexCtrl', function($rootScope, $scope, $state, $alert, $uibModal, $timeout, businessService2, viewData) {

		$rootScope.businesses = viewData.data.businesses;

		$scope.configBusiness = function(id) {
			var modalInstance = $uibModal.open({
				animation : true,
				templateUrl : 'templates/business2/config.html',
				controller : 'businessConfigCtrl',
				size: 'lg',
				backdrop : 'static',
				resolve : {
					configData: function(businessService2) {
						return businessService2.configInit(id);
					}
				}
			});
			
			modalInstance.rendered.then(function(){
				$('#resourceTable').slimScroll({destroy:true});
				$('#resourceTable').slimScroll({
					height: 140
				});
			});

			modalInstance.result.then(function(configData) {
				var resourceId = [];
				var weight = [];
				angular.forEach(configData.resources, function(resource, id) {
					resourceId.push(id);
					weight.push(resource.weight);
				});
				resourceId = resourceId.join(',');
				weight = weight.join(',');
				businessService2.configSave(id, configData.business.name, configData.business.vendor,
						configData.business.version, configData.business.manager,
						configData.business.threshold1, configData.business.threshold2,
						configData.business.threshold3, configData.business.threshold4, resourceId, weight).success(
						function(data) {
							if (data && data.errcode == 0) {
								businessService2.list().success(function(viewData) {
									$rootScope.businesses = viewData.businesses;
								});
								$alert.open({title: '消息', content: '配置成功！'});
							} else {
								$alert.open({title: '消息', type: 'error', content: data.errmsg ? data.errmsg : '配置失败！'});
							}
						}
				);
			});
		};
	});

	gloryview.controller('businessConfigCtrl', function($scope, configData, $uibModalInstance) {
		$scope.configData = configData.data;
		$scope.resources = [];
		if ($scope.configData.resources) {
			angular.forEach($scope.configData.resources, function(resource) {
				$scope.resources.push(resource);
			});
		}
		
		$scope.save = function() {
			$uibModalInstance.close($scope.configData);
		};

		$scope.close = function() {
			$uibModalInstance.dismiss('cancel');
		};
		
		$scope.search = function() {
			var name = $('#resourceNameKey').val();
			$scope.resources = [];
			angular.forEach($scope.configData.resources, function(resource) {
				if (name && resource.name.indexOf(name) < 0) {
					return true;
				}
				$scope.resources.push(resource);
			})
		}
	});
	
});