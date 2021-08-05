import bg_header from "../assets/img/img_header.jpeg"

const Header = () => {
    return (
        <div className="header">
            <div className="header_content">
                <div className="effect_bar"></div>
                <div className="image">
            
                        <img src={bg_header} alt="comics_image" />
                        <div className="hang_span">
                            <span>Retrouve tes comics et personnages favoris</span>
                        </div>
               
                </div>
            </div>
            
        </div>
    );
};

export default Header;