angular.module('streama').controller('newsCtrl', [
  'apiService', function (apiService) {
    var vm = this;

    vm.newsList = [];
    vm.selectedNews = null;
    vm.showNews = showNews;
    vm.backToList = backToList;

    init();

    function init() {
      apiService.news.list().then(function (response) {
        vm.newsList = response.data;
      });
    }

    function showNews(news) {
      vm.selectedNews = news;
    }

    function backToList() {
      vm.selectedNews = null;
    }
  }
]);
