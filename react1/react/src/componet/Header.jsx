import React from 'react';
 import TextComponent from './TextComponent';
const Header = () => {
    return (
    <>
<header>
        <div class="container">
            <h1>
                Traveles
            </h1>
            <div class="second-container">
             <h class="home">Home</h>
             <h>Destinations</h>
             <h>Gallery</h>
             <h>About Us</h>
             <h class="book">Book Guide</h>
            </div>
        </div>
        <TextComponent></TextComponent>
    </header>

    </>
    
    );
};

export default Header;