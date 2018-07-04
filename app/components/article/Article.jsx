import React from 'react'
import { connect } from 'react-redux'
import style from './index.css'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

class Article extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const article = this.props.article
    const time = new Date(article.createdAt)
    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    return (
      <div className={style.article}>
        <div className={style.title}>
          {article.title}
        </div>

        <div className={style.summary}>
          { article.summary ? article.summary : ''}
        </div>

        <div className={style.date}>
          {year}.{month}.{date}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
