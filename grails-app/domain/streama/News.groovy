package streama

class News {

  Date dateCreated
  Date lastUpdated

  String title
  String content
  String imagePath
  Boolean deleted = false

  static constraints = {
    title size: 1..255
    content size: 1..5000
  }

  static mapping = {
    content type: 'text'
  }
}
