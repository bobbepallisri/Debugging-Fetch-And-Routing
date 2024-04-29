import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}}

  componentDidMount() {
    this.getBlogDetailsData()
  }

  getBlogDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const formattedData = {
      title: data.title,
      imageUrl: data.image_url,
      avtarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogDetails: formattedData})
  }

  render() {
    const {blogDetails} = this.state
    const {title, imageUrl, avtarUrl, author, content} = blogDetails
    return (
      <div className="container">
        <h1 className="heading">{title}</h1>
        <div className="avatar-container">
          <img src={avtarUrl} alt={author} className="logo" />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
