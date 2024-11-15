import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [ ]
    },
    reducers: {
                        // {
                        //     payload: "pizza"
                        // }
        addItem: (state, action) => {

            // Vanilla (older) Redux => DON'T MUTATE STATE ,returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;


            // Redux Toolkit (newer) (uses immer.js library behind the scenes)
            // We HAVE to mutate the state
            // returning is not mandatory
            // behind the scenes, redux is still doing the above thing.. its creating an immutable state.. but it is not asking developers to do this

            // redux uses something known as Immer library to do this.. 
            // it is a tiny package that allows you to work with immutable state in a more convinient way
            // this immer library, funds the difference between original state, mutated state, and then gives you back the new immutable copy of the state
            // immer takes care of all this, this all have been abstracted..
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items.length = 0;
            // state = []; wont work
            // as if we're doint like this, we're not mutating/modifying the state.. we're actually just adding a reference to it..
            // in this case if we want it to be empty, it can be mutated using:
                // state.items.length = 0;

            // the state is a local variable which will have the value of the original state.. so we actually have to modify that state.. to mutate that state
            // if we just do    state = [];     it will change the value of the local variable state, it wont change the value of actual state 
        


            // Redux Toolkit says, either Mutate the existing state or return a new state
            // so, instead of doing 
                    // state.items.length = 0;
            // we can just return an empty state;
                    // return { items: [] };
            // this will also work fine as whatever will be returned will replace the original state with that


        
            // if we do   
            // console.log(state);
            // it wont show us anything, it would just show a proxy object which we cant read
            // to read the state,
            // console.log(current(state)); 
        }
    },


    // when youre creating slice, there are multiple small reducer functions which are collecively come under reducers
});

// exporting the actions and reducers
export const {addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// and when youre exporting, youre exporting only one reducer from it