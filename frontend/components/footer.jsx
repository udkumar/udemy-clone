import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ul className="links-box ">
                        <li>
                            <a className="link-disabled" href="" disabled>
                                <b>Teach on PairClass</b>
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                About us
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Careers
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Help and Support
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Affiliate
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Sitemap
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Featured courses
                            </a>
                        </li>
                         <li>
                            <a className="link-disabled" href="" disabled>
                                Affiliate
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Sitemap
                            </a>
                        </li>
                        <li>
                            <a className="link-disabled" href="" disabled>
                                Featured courses
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <img src={window.youdemy_logo} width="110" height="50" onClick={this.backToHome} />
                    <span className="footer-text">Copyright © 2020 PairClass.</span>
                </div>
            </div>
        )
    }
}

export default Footer