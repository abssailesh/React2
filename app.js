import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'child'},
//     [React.createElement('h1',{},"I am an h1 tag"),React.createElement('h2',{},"I am an h2 tag")]
// ),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
// ));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // JSX

// const jsxHeading = (<h1>
//     This is the jsx heading
//     </h1>);

// const Title = () => (
//     <h1>Namste React using JSX </h1>
// )

// const number = 10000;
// // Functional components in React
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1>{number}</h1>
//         <h1 className="Heading">"This is a funcional Component !</h1>
//     </div>
// )


// // root.render(jsxHeading);
// root.render(<HeadingComponent/>)
// console.log(jsxHeading);

const Header = ()=>{
    return (
        <div className = "header">
            <div className = "logo-container">
                <img 
                className = "logo"
                src = "https://th.bing.com/th/id/OIP.cFnOXfOaKfWAWWhxWLUE-gHaHa?rs=1&pid=ImgDetMain"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor : "#f0f0f0"
};
const RestaurantCard = (props)=>{
    // console.log(props)

    return (
        <div className = "res-card" style={styleCard}>
            <img
            className = "res-logo"
            alt = "res-logo"
            src = {props.image}
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className = "res-container">
                <RestaurantCard
                resName = "Meghana Foods"
                cuisine = "Biryani, Chinese, Tandoori"
                image = "https://b.zmtcdn.com/data/dish_photos/045/316a81fc2fb5c5a18ef7b83665619045.jpg"
                />
                <RestaurantCard
                resName = "The Golden Curry"
                cuisine = "North Indian, Chinese, Tandoori"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSd5WzV2mI2pGSqsvf0rwzRZO4fZ1xpsqZg&s"
                />
                <RestaurantCard
                resName = "Maharaja Restaurant"
                cuisine = "North Indian, Biryani, Tandoori"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVqlaCELDe3h61_y2Rm6Z7xPF2pc1DeukUw&s"
                />
                <RestaurantCard
                resName = "KFC"
                cuisine = "Fast Food, Biryani, Tandoori"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kxsgF1j-A5RFDQN5FSJOZLxB0yh7llxzdQ&s"
                />
                <RestaurantCard
                resName = "Domino's Pizza"
                cuisine = "Fast Food, Biryani, Tandoori"
                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVb768IXBaPW_PGcFcb7msyiy0izIsFUeOw&s'
                />
                <RestaurantCard
                resName = "Chicken Rice"
                cuisine = "North Indian, Biryani, Tandoori"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26EQZRZi8mlYkvClOismpXhzX0XgA_GRlnQ&s"
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);