import { Link } from "react-router-dom";

function Home(props) {
    return (
    <div className="home">
    <div className="title">
    <h1>MERNu Eats</h1>
    <img className="mainpic" src="https://images.unsplash.com/photo-1576723664541-23f84c3f93fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="inside" />
    </div>
    <div className="homeFoods">
    <Link to="/menu">
          <h3>Food Menu</h3>
          <img className="homepix" src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="food" />
    </Link>
    </div>
    <div className="homeDrinks">
    <Link to="/drinks">
          <h3>Drink Menu</h3>
          <img className="homepix" src="https://images.unsplash.com/photo-1457518919282-b199744eefd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="drinks" />
    </Link>
    </div>
    </div>
    )
}

export default Home;