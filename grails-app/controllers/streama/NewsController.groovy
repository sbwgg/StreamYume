package streama

import grails.converters.JSON
import static org.springframework.http.HttpStatus.*

class NewsController {

  static responseFormats = ['json', 'xml']

  def index() {
    def newsList = News.where {
      deleted != true
    }.list(sort: 'dateCreated', order: 'desc')
    respond newsList
  }

  def show(News news) {
    if (!news || news.deleted) {
      render status: NOT_FOUND
      return
    }
    respond news
  }

  def save() {
    def news = new News(request.JSON)
    news.save(flush: true)
    if (news.hasErrors()) {
      respond news.errors, status: UNPROCESSABLE_ENTITY
      return
    }
    respond news, status: CREATED
  }

  def update(News news) {
    if (!news || news.deleted) {
      render status: NOT_FOUND
      return
    }
    news.properties = request.JSON
    news.save(flush: true)
    if (news.hasErrors()) {
      respond news.errors, status: UNPROCESSABLE_ENTITY
      return
    }
    respond news
  }

  def delete(News news) {
    if (!news || news.deleted) {
      render status: NOT_FOUND
      return
    }
    news.deleted = true
    news.save(flush: true)
    render status: NO_CONTENT
  }
}
