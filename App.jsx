import { useState } from 'react';

const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

const meals = {
  breakfast: "Pieczony łosoś z papryką i cukinią (200g łososia, 100g papryki, 100g cukinii, 1 łyżka oliwy)",
  lunch: "Kurczak z brokułami i kaszą (200g kurczaka, 150g brokułów, 80g kaszy gryczanej)",
  dinner: "Omlet z warzywami i szynką (3 jajka, 100g szynki, 150g pomidora, garść szpinaku)"
};

const supplements = `
Suplementacja:
- Rano: Kreatyna 5g, Omega-3 1g, B12 50µg, L-karnityna 1g, Rhodiola 200mg
- Po treningu: Białko 20g, Witamina C 500mg, BCAA 5g
- Wieczorem: Magnez 200mg
- Antyperspirant: Garnier Mineral – wieczorem
`;

const workouts = {
  training: "Obwód 3x: przysiady 15x, pompki 12x, wykroki 12x, plank 45s, wiosłowanie 15x, brzuch 20x + rozciąganie.",
  rest: "Dzień bez treningu – spacer 30 min lub lekka aktywność."
};

export default function App() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  return (
    <main style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Plan tygodniowy</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        {days.map(day => (
          <button key={day} onClick={() => setCurrentDay(day)} style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', background: currentDay === day ? '#0f172a' : '#fff', color: currentDay === day ? '#fff' : '#000' }}>
            {day}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h2>Śniadanie:</h2>
        <p>{meals.breakfast}</p>
        <h2>Obiad:</h2>
        <p>{meals.lunch}</p>
        <h2>Kolacja:</h2>
        <p>{meals.dinner}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h2>Trening:</h2>
        <p>{days.indexOf(currentDay) % 2 === 0 ? workouts.training : workouts.rest}</p>
      </div>
      <div>
        <h2>Suplementacja:</h2>
        <pre>{supplements}</pre>
      </div>
    </main>
  );
}
