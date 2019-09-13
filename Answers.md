1. What problem does the context API help solve?

    A: Sharing state between multiple components, including those that aren't directly connected.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    A:  actions - an object with type and payload keys which is sent to a reducer through       the dispatch function. The type tells the reducer what logic to perform in state        with the payload.

        reducers - a reducer is what initializes and performs logic on the state as directed by the actions through a switch statement which has a case for every action.

        store - the store is what provides access to the state from any connected component. It serves as a centralized location for the state which is passed in as a prop of the Provider component which wraps the entire application.

        Store is known as single source of truth because it is the only place that the shared state for the application is located.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    A:  Application state is state which is used by most if not all of the main components in an application, because of this is is usually declared in a parent component and passed down accordingly.
    Component state is state which only one component needs to use, such as holding the string data for a form input. This would only be used in the child form component. This type of state is usually declared and used within the child component that needs it and not declared in the parent component and passed down to the child.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    A:  Redux-thunk is middleware that allows us to call action creators that return a function. This lets us use asynchronous operations within these action creators by allowing us the use the dispatch function within the action creator functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    A:  I really like the idea of having options, which is why I want to say I like Context API and useReducer; but to be honest my favorite is Redux simply because I feel like I accomplished something by understanding how it works. Redux used to be more 'magical' for me, as in I would copy code into a reducer and simply hope that it would work, and when it didn't I wouldn't know where to begin to look for the bug. This has now changed to me feeling good enough about it to not feel intimidated when I encounter it in a project.
