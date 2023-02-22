import { useState } from 'react'
import './App.css'
import { Row, Divider, Col } from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodsState, setFoodsState] = useState(foods) 

  const [showFood, setShowFood] = useState(foods)

  const newFood = (added) => {
    const addedFood = [added, ...foodsState];

    setFoodsState(addedFood);
    setShowFood(addedFood);
  }

  const filterFood = (searchQuery) => {
    let filteredFood = foodsState.filter(  food => 
      food.name.toLowerCase().includes(searchQuery.toLowerCase())   );

    setShowFood(filteredFood);
  }

  return (
    <div className="App">

{/* FIXME: add new food */}
      <AddFoodForm newFood = {newFood} />

{/* FIXME: search bar */}
      <SearchBar filterFood={filterFood} />

      <Divider>Food List:</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>

{/* FIXME: foods list */}
        {showFood.map( (food) => {
            return (
              <Col>
                <FoodBox food={food} />
              </Col>
            )

        } )}
      </Row>

    </div>
  )
}

export default App

