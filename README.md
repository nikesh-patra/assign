# Advanced Todo Application
![image alt](https://github.com/nikesh-patra/assign/blob/efc25ea4800804e41a98d2f1931ae07dd4431e33/Dashboard.png)

# Setup
Install Node.js and NPM
npx create-react-app todo-app
cd todo-app
npm install
npm install react-router-dom
npm install axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm run dev

# features, designs and tools
1. Frontend Development And API Integration
2. React Components And Advanced State Management
3. Responsive Design
4. multiple Functionality
5. User Authentication

# Featues description 
- **Filter Tasks**: Filter tasks based on their completion status.
- **Mark All Completed**: Mark all tasks as completed at once.
- **User Authentication**: Users can log in using their credentials stored in `localStorage`.
- **Navigation**: Upon successful login, users are redirected to the home page.
- **Sidebar Navigation**: Quick access to various sections such as "All Tasks", "Today", "Important", "Planned", and "Assigned to Me".
- **Modal with Additional Options**: Includes options for adding tasks, setting reminders, and adding due dates using a calendar.
- **Dark Mode Toggle**: Switch between light and dark mode for better accessibility.
- **Calendar Integration**: View and select dates using a calendar component.
- **Username Input**: Collects the user's desired username.
- **Password Input**: Collects the user's chosen password.
- **Confirm Password Input**: Confirms that the user entered the correct password.
- **Validation**: Ensures that the passwords match before submission.
- **LocalStorage**: Stores the user data in localStorage (simulating a backend storage solution).
- **Redux Action**: Dispatches a signup action with the user's data.
- **Navigation**: Redirects the user to the login page upon successful signup.
- **useState**: For managing the form input states.        [# Dependencies]
- **useDispatch**: For dispatching actions to Redux.       [# Dependencies]
- **useNavigate**: For navigation after signup.            [# Dependencies]
- **signup**: Custom action to handle the signup process in Redux.

- **Add Task**: Users can add new tasks with a description, priority, and optional location.
- **Priority Selector**: Tasks can be categorized into different priorities (High, Medium, Low) with color-coded styles.
- **Location Input**: Users can specify a location for each task (optional).
- **Search Functionality**: Allows searching through tasks based on a user-defined search term.
- **Filter Buttons**: Offers filtering functionality to view tasks based on their status.
- **Responsive Layout**: The component is responsive, adjusting its layout for different screen sizes (mobile, tablet, desktop).
- **Dark Mode Support**: The component dynamically switches between dark and light modes based on the isDarkMode prop.

- **Checkbox for Completion**: The task can be marked as completed or incomplete by clicking the checkbox. Completed tasks are visually indicated with a strike-through and a different text color.
- **Priority Badge**: Each task displays a priority level (High, Medium, Low), with color-coded badges.
- **Weather Information**: If the task has an associated location, it fetches and displays the weather details (temperature, conditions, and humidity) for that location using the OpenWeather API.
- **Error Handling**: Displays an error message if the weather data fetch fails.
- **Buttons for Task Management**:
- **Delete Task**: A button to remove the task from the list.
- **Mark as Completed**: A button to mark an incomplete task as completed.
- **Mark as Incomplete**: A button to revert a completed task back to incomplete.


-**Fetch Todos**: The component dispatches an action to fetch todos from an external source when it first mounts using the fetchTodosRequest action.
-**Filtering**: The todos are filtered based on the state of the filter (COMPLETED, INCOMPLETE, or ALL) and the search term entered by the user. The search term is matched against the todo text.
-**Rendering Todos**: It maps over the filtered todos and renders each one using the TodoItem component.
-**Empty State**: If no todos match the filter or search criteria, a message is displayed to inform the user.
-**Dynamic Display**: The list is automatically updated whenever the filter or search term changes, ensuring the user always sees the relevant todos.

-**axios**: For making API requests to fetch weather data.



# action.js
The purpose of action.js is to centralize the logic for creating and dispatching actions that will be consumed by the reducers in your Redux store.

# actiontypes.js
-**Define Action Types**: You define action types as string constants in actionTypes.js. These constants are then imported wherever needed (in action creators and reducers).
-**Reference Action Types**: In your action creators (action.js), you refer to these constants instead of writing the action type as a string directly. This avoids inconsistencies and typos.

# reducers.js
In the reducers, we use these action type constants to identify the actions being dispatched and decide how the state should be updated.

# redux-saga

npm install redux-saga

Here we use Redux-Saga to handle side effects, especially asynchronous operations such as API calls, fetching data, and performing background tasks like timers, authentication checks, etc. 

# store.js

The store is where the entire application state lives. It is created using createStore() from Redux and is the central place for managing state updates in the app.

# todoApi.js
to handle the api

# App.jsx
-**Authentication**:

1. The app supports login and sign-up functionality. It uses localStorage to store user credentials and authentication status.
* When the user is authenticated, the app shows the Todo component and a logout button. Otherwise, it displays the login or sign-up forms.

-**Sidebar**:

2. A collapsible sidebar is used for navigation, toggled by a button in the top-left corner of the screen. It shifts the main content when opened.

-**State Management**:

3. Uses Redux to handle the authentication state (isAuthenticated) and dispatch login and logout actions.
* The component uses React's useState for managing form inputs (username, password, email) and form visibility (showLoginForm, showSignUpForm).
* It also uses useEffect to check if the user is authenticated upon initial load.


# Conclusion
