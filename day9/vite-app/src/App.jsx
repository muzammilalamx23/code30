import Card from "./components/Card"
import Counter from "./components/Counter"
import "./App.css"

export default function App() {
	const cards = [
		{
			title: "React",
			description: "A JavaScript library for building user interfaces.",
		},
		{
			title: "Vite",
			description: "A fast development build tool for modern web projects.",
		},
		{
			title: "Components",
			description: "Reusable building blocks in React applications.",
		},
	]

	return (
		<div>
			<h1>Day 9 React Basics Part 2</h1>
			<p>
				Today we are learning about React components and how to use them
				effectively.
			</p>

			<div className="card-container">
				{cards.map((card, index) => (
					<Card key={index} title={card.title} description={card.description} />
				))}
			</div>
      <div>
        <Counter />
      </div>
		</div>
	)
}
