Project Name:
Dev Stack Builder

Project Description:
Dev Stack is a responsive technology stack builder website built with React, TypeScript, and Tailwind CSS. It allows users to explore different development technologies, add them to their own stack, and remove them when needed. The technology information is loaded from a JSON file, with React-Toastify used for user notifications.

Technology Used :
React
TypeScript
Tailwind CSS
React-Toastify
Vite
JSON

Main Features:
Technology Stack Builder - Exploration of different technologies and adding them to your own development stack.
Dynamic JSON Data - Technology information is loaded from a JSON file and displayed in responsive cards.
Stack Management & Notifications — Add, remove, or clear technologies from your stack with React-Toastify notifications.


React Questions & Answers
1. What is JSX, and why is it used in React?
JSX means JavaScript XML where we can write codes similar to HTML inside .js or .ts files. Its  used by react it to describe what the user interface should look like.

2. What is the difference between props and state?
Data passed from a parent component to a child component is called props. It can be only read but cant be wrote by child.
State is data managed inside a component. It can change over time, and when state changes, React updates the UI.
in this project, the selected technologies are stored in state:
const [stack, setStack] = useState<string[]>([])

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows a React component to store and update data.I used useState in the Technologies component for:
Storing the technology data
Storing the selected technologies
Tracking the loading state
For example: const [stack, setStack] = useState<string[]>([])
When a technology is added or removed, setStack updates the state and React updates the UI.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is used to perform side effects in a React component.I used it to fetch the technology data from the data.json file when the Technologies component loads.

useEffect(() => {
    fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setTechnologies(data)
            setLoading(false)
        })
}, [])
The empty dependency array [] means the effect runs when the component is first loaded.

5. Why does every item in a .map() list need a unique key prop?
A unique key is required by react to identify each item in a list.
It helps React understand which items we are working with.
In this project, I used the technology ID as the key:

{technologies.map((technology) => (
    <div key={technology.id}>
        ...
    </div>
))}
Since every technology has a unique ID, it is suitable for the key.

6. What is conditional rendering? Show one place you used it.
Conditional rendering is showing different UI for different condition.
In this project, I used conditional rendering to show an empty message when no technology has been selected:

{stack.length === 0 ? (
    <div>
        Your stack is empty.
    </div>
) : (
    <div>
        {/* Selected technologies */}
    </div>
)}
If stack.length is 0, the empty message is shown. Otherwise, the selected technologies are displayed.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from parents to childs using props.

For example: <TechnologyCard technology={technology} 

Here technology data is passed from the parent to the child.
A child can do the same thing by calling a function passed through props.

For example: <TechnologyCard onAdd={addToStack} />

The child can then call: onAdd(technology.id)

This allows the child to communicate with the parent without directly changing the parent's state.