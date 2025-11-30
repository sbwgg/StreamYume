angular.module('streama').controller('modalNewsCtrl', [
  '$scope', '$uibModalInstance', 'apiService', 'news', 'uploadService',
  function ($scope, $uibModalInstance, apiService, news, uploadService) {
    var vm = this;
    vm.news = angular.copy(news) || {};
    vm.saveNews = saveNews;
    vm.cancel = cancel;
    vm.uploadImage = uploadImage;

    function saveNews() {
      if (vm.news.id) {
        apiService.news.update(vm.news.id, vm.news).then(function (response) {
          $uibModalInstance.close(response.data);
        });
      } else {
        apiService.news.save(vm.news).then(function (response) {
          $uibModalInstance.close(response.data);
        });
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function uploadImage(file) {
      if (file) {
        uploadService.uploadImage(file).then(function (response) {
          vm.news.imagePath = response.data.path;
        });
      }
    }
  }
]);
