import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItems

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item${id}`} className="image" />
        <div className="content">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="logo" />
            <p className="blog-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
