import React from "react";
import Recipe from "./recipe";
import Ingredient from "./ingerident";
import getRecipeFromMistral  from "../ai";
export default function Main() {
    const [recipe, setRecipe] = React.useState(" ")
    const [ingredientList, setIngridentList] = React.useState([]);

    // function formSub(event){
    //     // alert("Form Submitted");

    //     event.preventDefault();
    //    const formData= new FormData(event.currentTarget)
    //    const newData = formData.get("Ingredient")
    //   setIngridentList((prev)=> [...prev, newData]);

    // }
    function ingriedntValue(formData) {
        const ingredient = formData.get("Ingredient");
        setIngridentList((item) => [...item, ingredient]);

    }

   async function isShown(){
    setRecipe((recipe)=>!recipe)
        const recipipeMarkDown= await getRecipeFromMistral(ingredientList)
        setRecipe(recipipeMarkDown)
    }
    // const val = false
    return (
        <main>
            <form action={ingriedntValue} /*{onSubmit={formSub} }*/ className="add-ingredient-form ">
                <input
                    id="Ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="Ingredient"
               required />
                <button>Add ingredient</button>
            </form>
            {ingredientList.length > 0 && <Ingredient ingredientList={ingredientList}  isShown= {isShown} />}
            { recipe &&
              <Recipe recipe={recipe}/>
            }
        </main>
    )
} 