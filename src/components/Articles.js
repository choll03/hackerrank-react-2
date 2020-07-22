import React from 'react';

class Articles extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: props.articles
        }
    }

    sortUpvoted(datas){
        
        this.setState({
            articles: datas.sort((a, b) => b.upvotes - a.upvotes)
        })
    }

    sortUpdate(datas) {
        this.setState({
            articles: datas.sort((a,b) => new Date(b.date) - new Date(a.date))
        })
    }


    render() {
        
    
    return (
        <>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
            <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
            <button data-testid="most-upvoted-link" className="small" onClick={() => this.sortUpvoted(this.state.articles)}>Most Upvoted</button>
            <button data-testid="most-recent-link" className="small" onClick={() => this.sortUpdate(this.state.articles)}>Most Recent</button>
        </div>
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.articles.map((article, i) => (
                            <tr data-testid="article" key={i}>
                                <td data-testid="article-title">{article.title}</td>
                                <td data-testid="article-upvotes">{article.upvotes}</td>
                                <td data-testid="article-date">{article.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    );

}
}
export default Articles;
