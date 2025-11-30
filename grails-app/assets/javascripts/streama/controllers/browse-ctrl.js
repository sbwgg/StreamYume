angular.module('streama').controller('browseCtrl', [
  'apiService', '$scope', '$q', '$timeout',
  function (apiService, $scope, $q, $timeout) {
    var vm = this;

    vm.searchQuery = '';
    vm.filter = {
      showMovies: true,
      showTvShows: true,
      isSubtitled: false,
      isDubbed: false,
      genres: []
    };
    vm.filteredContent = [];
    vm.allGenres = [];

    var searchDebounce;

    vm.applyFilters = function () {
      $timeout.cancel(searchDebounce);
      searchDebounce = $timeout(function () {
        vm.filteredContent = [];
        var promises = [];
        var params = {};

        if (vm.searchQuery) {
          params.title = vm.searchQuery;
          params.name = vm.searchQuery;
        }

        if (vm.filter.isSubtitled) {
          params.isSubtitled = true;
        }
        if (vm.filter.isDubbed) {
          params.isDubbed = true;
        }

        if (vm.filter.genres.length) {
          params.genre = vm.filter.genres.map(function (genre) {
            return genre.id;
          });
        }

        if (vm.filter.showMovies) {
          promises.push(apiService.movie.list(params).then(function (response) {
            return response.data.list;
          }));
        }

        if (vm.filter.showTvShows) {
          promises.push(apiService.tvShow.list(params).then(function (response) {
            return response.data.list;
          }));
        }

        $q.all(promises).then(function (results) {
          vm.filteredContent = [].concat.apply([], results);
        });
      }, 500); // Debounce for 500ms
    };

    function init() {
      apiService.genres.list().then(function (response) {
        vm.allGenres = response.data;
      });
      vm.applyFilters();
    }

    init();
  }
]);
