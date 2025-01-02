
"use client";
import { useState } from "react";

export default function Home() {
  const [giftRecommendations, setGiftRecommendations] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    const name = e.target.name.value; // Get recipient's name
    const interests = e.target.interests.value.toLowerCase(); // Get interests (convert to lowercase)
    const budget = e.target.budget.value; // Get budget

    // Rule-based logic for recommendations
    const giftIdeas = {
      tech: ["Smartwatch", "Wireless Earbuds", "Bluetooth Speaker"],
      sports: ["Yoga Mat", "Running Shoes", "Water Bottle"],
      books: ["Inspirational Book", "Mystery Novel", "Cookbook"],
      default: ["Gift Card", "Personalized Mug", "Photo Frame"], // Default suggestions
    };

    const recommendations = giftIdeas[interests] || giftIdeas.default; // Match interests or use default

    // Set recommendations to state
    setGiftRecommendations({
      name,
      recommendations,
      budget,
    });

    // Clear the form
    e.target.reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Form */}
      <h1 className="text-3xl font-bold mb-6">Gift Recommendation App</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recipient's Name:
          </label>
          <input
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Interests:
          </label>
          <input
            type="text"
            name="interests"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Budget ($):
          </label>
          <input
            type="number"
            name="budget"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Gift Ideas
        </button>
      </form>

      {/* Recommendations Section */}
      {giftRecommendations && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <h2 className="text-2xl font-bold mb-4">
            Gift Ideas for {giftRecommendations.name}:
          </h2>
          <ul className="list-disc ml-5">
            {giftRecommendations.recommendations.map((gift, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {gift}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4">
            Budget: ${giftRecommendations.budget}
          </p>
        </div>
      )}
    </main>
  );
}
