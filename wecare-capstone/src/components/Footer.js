import '../css/styles.css'

function Footer() {
    return (
        <footer className="page-footer font-small blue footer" id="footer">
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <center>
                            <p className="mt-2 text-white credit">
                                Copyright @ 2020 weCare. All rights reserved 
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
