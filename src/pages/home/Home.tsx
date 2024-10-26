import React from "react";

interface HomeProps {}

/**
 * Home component renders the homepage with a welcome message.
 * @returns {JSX.Element} The rendered homepage component.
 */
const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            {/* Main heading of the homepage */}
            <h1>Welcome to our homepage!</h1>
            {/* Description paragraph */}
            <p>This is a sample homepage.</p>        
        </div>
    );
}

export default Home;