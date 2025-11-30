angular.module('streama').controller('adminNewsCtrl', [
  'apiService', '$state', '$rootScope', '$filter', 'modalService', function (apiService, $state, $rootScope, $filter, modalService) {
    var vm = this;

    vm.newsList = [];
    vm.loadNews = loadNews;
    vm.createNews = createNews;
    vm.editNews = editNews;
    vm.deleteNews = deleteNews;

    init();

    function init() {
      loadNews();
    }

    function loadNews() {
      apiService.news.list().then(function (response) {
        vm.newsList = response.data;
      });
    }

    function createNews() {
      modalService.newsModal({}, function (data) {
        loadNews();
      });
    }

    function editNews(news) {
      modalService.newsModal(angular.copy(news), function (data) {
        loadNews();
      });
    }

    function deleteNews(news) {
      if (confirm('Are you sure you want to delete this news?')) {
        apiService.news.delete(news.id).then(function (response) {
          loadNews();
        });
      }
    }
  }
]);
