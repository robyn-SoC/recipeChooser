import React, { Component } from "react";
import "./App.css";
import Header from "../Header";
import Buttons from "../Buttons";
import chickenWrap from "../../Data/chickenWrap.json";
import fishPie from "../../Data/fishPie.json";
import lasagne from "../../Data/lasagne.json";
import roastDinner from "../../Data/roastdinner.json";

import Menu from "../Menu";

const getChickenRecipes = () => {
    return chickenWrap[0].hits.map(item => {
        return item.recipe;
    });
};
const getFishPieRecipes = () => {
    return fishPie[0].hits.map(item => {
        return item.recipe;
    });
};
const getLasagneRecipes = () => {
    return lasagne[0].hits.map(item => {
        return item.recipe;
    });
};
const getRoastDinnerRecipes = () => {
    return roastDinner[0].hits.map(item => {
        return item.recipe;
    });
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedCategory: null };
    }

    handleClick = num => {
        this.setState(() => ({ selectedCategory: num }));
    };

    handleBack = () => {
        this.setState(() => ({ selectedCategory: null }));
    };

    render() {
        if (!this.state.selectedCategory) {
            return (
                <div className="App">
                    <Header title="R FLavouright Food" />
                    <h2>Please choose a delicacy to view recipes</h2>
                    <div className="container">
                        <Buttons
                            name="Chicken Wraps"
                            onSelect={() => this.handleClick(1)}
                        />
                        <Buttons
                            name="Fish Pie"
                            onSelect={() => this.handleClick(2)}
                        />
                        <Buttons
                            name="Lasagne"
                            onSelect={() => this.handleClick(3)}
                        />
                        <Buttons
                            name="Roast Dinners"
                            onSelect={() => this.handleClick(4)}
                        />
                    </div>
                </div>
            );
        }

        let items = [];
        let subHeading = "";

        switch (this.state.selectedCategory) {
            case 1:
                items = getChickenRecipes();
                subHeading = "Chicken Recipes";
                break;
            case 2:
                items = getFishPieRecipes();
                subHeading = "Fish Pie Recipes";
                break;
            case 3:
                items = getLasagneRecipes();
                subHeading = "Lasagne Recipes";
                break;
            case 4:
                items = getRoastDinnerRecipes();
                subHeading = "Roast Dinner Recipes";
                break;
            default:
                items = [];
        }

        return (
            <div className="App">
                <button className="back" onClick={this.handleBack}>
                    Back
                </button>
                <Header title="R FLavouright Food" />
                <h2>{subHeading}</h2>
                <ul>
                    {items.map(item => (
                        <Menu
                            label={item.label}
                            image={item.image}
                            ingredients={item.ingredientLines.toString()}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
