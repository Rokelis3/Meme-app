const Header = () =>{
    return(
        <header className="header">
            <img src={require("../images/troll.png")} className="header--image" alt="trolo head"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header;