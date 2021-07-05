import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className = "class1">
      <Header />
      <div className = "class2">
      <Container fluid classname="pt-5">
        <Row>
          <Col lg={6}>
            <h1 className = "text1">Healthy living.</h1>
            <h1 className = "text1">Simplified.</h1>
            <p className ="text2">The digital self-care app that helps you reach your health and weight goals through better eating.</p>
            <button type="submit" className="button1">
              Read More
            </button>
            <br />
            <button type="submit" className="button2">
              Sign Up
            </button>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
      </div>
      <h1 class = "heading2">WHAT IS LIFESUM?</h1>    
            <div class="grid">
              <div >
                <img class="grid-item" src="https://lifesum.com/media/usp-diets-63b86561.svg" alt=";-)" ></img>
                <h4>Find a diet you love</h4>
                <p>Find a nutritious Diet that fits your lifestyle and food preferences. Take charge of your daily habits with one of the many ongoing Diets including Clean Eating and High Protein.</p>
              </div>
              <div >
                <img class="grid-item" src="https://lifesum.com/media/usp-mealplans-28bdd983.svg" alt=";-0"></img>
                <h4>Start a simplified meal plan</h4>
                <p>Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on your health goals, there are many Meal Plans to choose from including Keto Burn and Vegan for a week.</p>
              </div>
              <div >
                <img class="grid-item" src="https://lifesum.com/media/usp-recipes-05f70188.svg" alt=";-)"></img>
                <h4>Enjoy hundreds of tasty and nutritious recipes</h4>
                <p>Enjoy hundreds of easy-to-cook recipes filled with nutritious and tasty food. All of the recipes include information about their nutritional value so you can keep track of your daily energy intake.</p>
              </div>
              <div >
                <img class="grid-item" src="https://lifesum.com/media/usp-barcode-e8eb86b3.svg" alt=";-0"></img>
                <h4>Use the helpful barcode scanner</h4>
                <p>Identify your food items with the super easy-to-use barcode scanner. Scan the item, log it and get the nutritional information you need to stay on track.</p>
              </div>
              <div >
                <img class="grid-item" src="https://lifesum.com/media/usp-trackers-d322008e.svg" alt=";-0"></img>
                <h4>Track your way to success</h4>
                <p>Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life.</p>
              </div>
              <div >   
                <img class="grid-item" src="https://lifesum.com/media/usp-personalize-96c457f4.svg" alt=";-0"></img>
                <h4>Create your own health journey</h4>
                <p>To help you reach your goals and customize your health journey you can add your favorite meals, food items, recipes and exercises to your Favorites.</p>
              </div>
            </div>
      </div>
    </>
  );
};

export default Home;
