import React from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '@/api'
import Navbar from '@/components/navbar/Navbar'
import Article from '@/components/article/Article'
import style from './index.css'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async componentWillMount () {
    try {
      const response = await fetchArticles()
      this.setState({
        articles: response.data.data.rows
      })
    } catch (error) {
    }
  }

  render() {
    const articleList = this.state.articles.map((article) => 
      <Article article={article} key={article.id}></Article>
    )
    return (
      <div>
        <Navbar/>
        <div className={style.articleContainer}>
          { articleList }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
