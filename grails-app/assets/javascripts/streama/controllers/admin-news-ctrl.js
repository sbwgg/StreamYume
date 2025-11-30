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
      var input = prompt('Enter news name and text separated by --- (use \\n for new lines):');
      if (input) {
        var parts = input.split('---');
        if (parts.length >= 2) {
          var name = parts[0].trim();
          var text = parts.slice(1).join('---').trim();
          apiService.news.save({name: name, text: text}).then(function (response) {
            loadNews();
          });
        }
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
