import Card from "../components/Card";

export default function App() {
  return (
    <div>
      <h1>Day 9 React Basics Part 2</h1>
      <p>Today we are learning about React components and how to use them effectively.</p>
    
    <div className="card-container">
      <Card
        title="React"
        description="A JavaScript library for building user interfaces."
      />

      <Card
        title="Vite"
        description="A fast development build tool for modern web projects."
      />

      <Card
        title="Components"
        description="Reusable building blocks in React applications."
      />
    </div>
    </div>
  );
}
