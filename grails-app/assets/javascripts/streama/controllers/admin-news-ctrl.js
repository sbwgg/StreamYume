angular.module('streama').controller('adminNewsCtrl', [
  'apiService', '$state', '$rootScope', '$filter', function (apiService, $state, $rootScope, $filter) {
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
      // Open modal to create news
      // For simplicity, use prompt or create a modal
      var title = prompt('Enter news title:');
      var content = prompt('Enter news content:');
      if (title && content) {
        apiService.news.save({title: title, content: content}).then(function (response) {
          loadNews();
        });
      }
    }

    function editNews(news) {
      var title = prompt('Edit title:', news.title);
      var content = prompt('Edit content:', news.content);
      if (title && content) {
        apiService.news.update(news.id, {title: title, content: content}).then(function (response) {
          loadNews();
        });
      }
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
