define(['gloryview', 'jquery'], function (gloryview, $) {

  gloryview.controller('rootCtrl', function ($scope, rootService, currentAlarmService, permissions, $state, $rootScope, $loading, $alert, $interval, $uibModal) {
    $scope.$state = $state;

    $rootScope.itsm = itsmCom;
    $rootScope.user_session = user_session;

    $scope.$on('$viewContentLoaded', function () {
      if (!$rootScope.itsm.showHeader) {
        $('.main-sidebar').css({
          'margin-top': 0
        });
      }
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (!permissions.hasModule(toState.module)) {
        $alert.open({ type: 'info', content: '无服务操作权限！' });
        event.preventDefault();
      } else {
        if (!permissions.hasPermission(toState.permission)) {
          $alert.open({ type: 'info', content: '您无权限执行该操作！' });
          event.preventDefault();
        } else {
          $loading.open();
        }
      }
      angular.forEach(FusionCharts.items, function (chart, key) {
        if (FusionCharts(key) != undefined) {
          FusionCharts(key).dispose();
        }
      });
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $loading.close();
    });

    $scope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

    });

    $rootScope.resourceDetail = function (resourceId, resourceName, uniform) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var title = '';
      var url = '';
      if (uniform) {
        title = resourceName + '-' + uniform.displayName + '-' + '资源详情';
        url = 'resource?resourceId=' + resourceId + '&uniform=' + uniform.name;
      } else {
        title = resourceId + '-' + '资源详情';
        url = 'resource/view2?resourceId=' + resourceId;
      }

      if (screenHeight <= 768) {
        window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
      }
    };

    $rootScope.devicePortDetail = function (resourceId, resourceName, category, uniform, unitResourceId, unitUniform) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = '';
      if (category == 'device') {
        url = 'resource?resourceId=' + resourceId + '&uniform=' + uniform.name + '#/device/port/' + unitResourceId;
      } else if (category == 'server') {
        if (uniform.name == 'Windows') {
          url = 'resource?resourceId=' + resourceId + '&uniform=' + uniform.name + '#/windows/port/' + unitResourceId;
        } else {
          url = 'resource?resourceId=' + resourceId + '&uniform=' + uniform.name + '#/linux/' + unitUniform + '/port/' + unitResourceId;
        }
      }
      var title = resourceName + '-' + uniform.displayName + '-' + '资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.alarmDetail = function (alarmId) {
      rootService.getAlarm(alarmId).success(function (viewData) {
        if (viewData && viewData.errcode == 0) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'templates/alarms/current/alarmDetail.html',
            controller: 'currentAlarmDetailCtrl',
            backdrop: 'static',
            size: 'lg-800',
            resolve: {
              alarm: viewData.alarm,
              currentTime: viewData.currentTime
            }
          });

          var remark = viewData.alarm.remark;
          modalInstance.result.then(function (response) {
            if (remark != response.remark) {
              currentAlarmService.updateRemark(alarmId, response.remark).success(function (data) {
                if (data && data.errcode == 10001) {
                  $alert.open({ title: '消息', type: 'error', content: data.errmsg ? data.errmsg : '更新告警备注失败！' });
                }
              });
            }
          });
        } else {
          $alert.open({ title: '消息', type: 'error', content: data.errmsg ? data.errmsg : '查看告警详情异常！' });
        }
      });
    };

    $rootScope.openVmwareDetail = function (resourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/vmware/' + resourceId;
      console.log(url);
      var title = 'vsphere资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openDataCenterDetail = function (resourceId, uniform, unitResourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/' + uniform + '/' + unitResourceId;
      var title = '数据中心资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openHostDetail = function (resourceId, uniform, unitResourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/' + uniform + '/' + unitResourceId;
      var title = '主机资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openVmDetail = function (resourceId, uniform, unitResourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/' + uniform + '/' + unitResourceId;
      var title = '虚拟机资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openStorageDetail = function (resourceId, uniform, unitResourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/' + uniform + '/' + unitResourceId;
      var title = '存储资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openConfigDetail = function (resourceId, uniform, unitResourceId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'resource?resourceId=' + resourceId + '&uniform=Vmware#/vmware/config/' + unitResourceId;
      var title = '性能指标配置详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

    $rootScope.openBusinessDetail = function (businessId) {
      var screenHeight = window.screen.height;
      var screenWidth = window.screen.width;
      var url = 'business2?id=' + businessId;
      var title = '业务资源详情';
      if (screenHeight <= 768) {
        if (url) {
          window.open(url, title, 'width=' + (window.screen.width) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      } else {
        var height = 790;
        var width = 1300;
        var top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        var left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        if (url) {
          window.open(url, title, 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',toolbar=0,menubar=0,scrollbars=0,resizable=0,location=0,status=0');
        }
      }
    };

  });

  gloryview.controller('currentAlarmDetailCtrl', function ($scope, $uibModalInstance, alarm, currentTime) {
    $scope.alarm = alarm;
    $scope.currentTime = currentTime;

    $scope.save = function () {
      $uibModalInstance.close({ remark: $scope.alarm.remark });
    };

    $scope.close = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
});