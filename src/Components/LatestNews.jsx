import React, {Component} from 'react';
import arrow from "../Assets/Images/arrow.png"


class LatestNews extends Component {
    state = {}
    render() {
        return (
            <div className="fullwidth-block latest-news-section">
                <div className="container">
                    <h2 className="section-title">Latest News</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="news">
                                <div className="entry-date">
                                    <div className="date">29</div>
                                    <div className="monthyear">07.2014</div>
                                </div>
                                <div className="entry-detail">
                                    <div className="entry-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo velit, tempora aut nesciunt.
                                        <a href="#" className="more-icon">
                                            <img src={arrow}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news">
                                <div className="entry-date">
                                    <div className="date">29</div>
                                    <div className="monthyear">07.2014</div>
                                </div>
                                <div className="entry-detail">
                                    <div className="entry-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo velit, tempora aut nesciunt.
                                        <a href="#" className="more-icon">
                                            <img src={arrow}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="news">
                                <div className="entry-date">
                                    <div className="date">29</div>
                                    <div className="monthyear">07.2014</div>
                                </div>
                                <div className="entry-detail">
                                    <div className="entry-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo velit, tempora aut nesciunt.
                                        <a href="#" className="more-icon">
                                            <img src={arrow}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#" class="button no-gradient">More news</a>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default LatestNews;

