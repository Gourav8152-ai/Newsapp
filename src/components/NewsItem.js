import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description, urlToImage, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: '18rem'}}>
                <img src={urlToImage?urlToImage:"https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?b=1&k=20&m=891605714&s=612x612&w=0&h=HR6jezIN5wQ7B8imsxws65esrjQTEUIu8IAY38f4ZQc="} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title?title:""}</h5>
                    <p className="card-text">{description?description:"BREAKING !!!"}</p>
                    <a href={url?url:""} rel="noreferrer" target='_blank' className="btn btn-sm-2 btn-dark">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
