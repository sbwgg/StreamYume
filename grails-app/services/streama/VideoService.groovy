def listShows(GrailsParameterMap params, Map options){
    Profile currentProfile = User.getProfileFromRequest()
    def max = params.int('max', 50)
    def offset = params.int('offset', 0)
    def sort = params.sort
    def order = params.order
    def genreId = params.long('genreId')
    def genreList = params.list('genre')*.toLong() ?: []
    Boolean isSubtitledParam = params.boolean('isSubtitled')
    Boolean isDubbedParam = params.boolean('isDubbed')

    if(currentProfile?.isChild){
      genreList += Genre.findAllByNameInList(['Kids', 'Family'])*.id
    }

    def tvShowQuery = TvShow.where{
      def tv1 = TvShow
      deleted != true

      if(!options.includeEmpty) {
        exists Episode.where {
          def ep = Episode
          def tv2 = show
          tv1.id == tv2.id
          isNotEmpty("files")
        }.id()
      }

      if(params.name){
        name =~ "%${params.name}%"
      }

      if(genreId){
        genre{
          id == genreId
        }
      }

      if(genreList){
        genre{
          id in genreList
        }
      }
      if(isSubtitledParam != null){
        exists Episode.where {
          show == tv1
          isSubtitled == isSubtitledParam
        }.id()
      }
      if(isDubbedParam != null){
        exists Episode.where {
          show == tv1
          isDubbed == isDubbedParam
        }.id()
      }
    }

    def tvShows = tvShowQuery.list(max: max, offset: offset, sort: sort, order: order)
    def totalTvShowsCount = tvShowQuery.count()

    def result = [total: totalTvShowsCount, list: tvShows]

    return result
  }
