# Dev Stack Builder

A responsive technology stack builder web application built with React, TypeScript, and Tailwind CSS. The application allows users to explore different development technologies, add technologies to their personal stack, and manage their selected technologies.

**Live Demo:** https://devstack-nnasif78.netlify.app/

## Project Description

Dev Stack Builder is a technology exploration and stack management application designed to help users create their own development technology stack.

Technology information is loaded dynamically from a JSON file and displayed through responsive technology cards. Users can add technologies to their stack, remove individual technologies, or clear the entire stack. React-Toastify is used to provide notifications for user actions.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React-Toastify
* Vite
* JSON

## Main Features

### Technology Stack Builder

* Explore different development technologies.
* View technology information through responsive cards.
* Add technologies to a personal development stack.
* Remove individual technologies from the stack.
* Clear all selected technologies.

### Dynamic JSON Data

Technology information is stored in a JSON file and loaded dynamically using the Fetch API. The data is then displayed using React components.

### Stack Management and Notifications

Users can manage their selected technologies by adding, removing, or clearing items. React-Toastify provides notifications to give users feedback when stack-related actions are performed.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write syntax similar to HTML inside JavaScript or TypeScript files.

React uses JSX to describe what the user interface should look like.

Example:

```tsx
const element = <h1>Hello World</h1>;
```

JSX makes React components easier to read and write because the UI structure can be written directly inside the component logic.

---

### 2. What is the difference between Props and State?

**Props** are data passed from a parent component to a child component. Props are read-only, so the child component should not directly modify them.

**State** is data managed inside a component. State can change over time, and when the state changes, React updates the UI.

In this project, the selected technologies are stored in state:

```tsx
const [stack, setStack] = useState<string[]>([]);
```

Here:

* `stack` contains the selected technologies.
* `setStack` is used to update the stack.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data.

I used `useState` in the `Technologies` component for:

* Storing technology data.
* Storing selected technologies.
* Tracking the loading state.

For example:

```tsx
const [stack, setStack] = useState<string[]>([]);
```

When a technology is added or removed, `setStack` updates the state, and React automatically updates the UI.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.

In this project, I used `useEffect` to fetch the technology data from `data.json` when the `Technologies` component loads.

```tsx
useEffect(() => {
    fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setTechnologies(data);
            setLoading(false);
        });
}, []);
```

The empty dependency array `[]` means the effect runs when the component is initially loaded.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React requires a unique `key` for each item in a list so that it can identify individual elements efficiently when the list changes.

In this project, I used the technology ID as the key:

```tsx
{technologies.map((technology) => (
    <div key={technology.id}>
        ...
    </div>
))}
```

Since every technology has a unique ID, it is suitable for use as the `key`.

---

### 6. What is Conditional Rendering? Show one place where you used it.

Conditional rendering means displaying different UI elements depending on a condition.

In this project, I used conditional rendering to display an empty-stack message when no technology has been selected:

```tsx
{stack.length === 0 ? (
    <div>
        Your stack is empty.
    </div>
) : (
    <div>
        {/* Selected technologies */}
    </div>
)}
```

If `stack.length` is `0`, the empty message is displayed. Otherwise, the selected technologies are displayed.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using **props**.

For example:

```tsx
<TechnologyCard technology={technology} />
```

Here, the `technology` data is passed from the parent component to the `TechnologyCard` child component.

A child component can communicate with its parent by calling a function passed through props.

For example:

```tsx
<TechnologyCard onAdd={addToStack} />
```

The child component can then call:

```tsx
onAdd(technology.id);
```

This allows the child component to communicate with the parent without directly modifying the parent's state.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nnasif78/DevStack.git
```

### 2. Navigate to the Project

```bash
cd DevStack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Build for Production

```bash
npm run build
```

## Project Structure

```text
DevStack/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   ├── Technologies.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Author

**Nasif Nihan**

GitHub: https://github.com/nnasif78
