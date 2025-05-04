import { useState } from 'react';
import axios from 'axios';

const staticCategories = [
  "Strength Training",
  "Cardio",
  "Nutrition",
  "Flexibility",
  "Recovery",
  "Supplements",
  "Mental Health",
];

function AskQuestion({ categories, onQuestionAdded }) {
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
  
    
    
    const finalCategory = newCategory || category; 

    if (!finalCategory || !questionText) {
      alert('Please fill in both fields.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/forum/questions', {
        userId: 1, // Hardcoded for now
        category: finalCategory,
        questionText,
      });

      alert('Question added successfully!');
      setCategory('');
      setNewCategory('');
      setQuestionText('');
      onQuestionAdded(); // Refresh questions
    } catch (err) {
      console.error('Failed to post question:', err);
      alert('Failed to post question.');
    }
  };

  const allCategories = [...new Set([...staticCategories, ...categories])];

  return (
    <div className="card my-4">
      <div className="card-header">
        <h5>Ask a New Question</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Select an existing category:</label>
            <select
              className="form-select"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">-- Choose Category --</option>
              {allCategories.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label>Or enter a new category:</label>
            <input
              type="text"
              className="form-control"
              placeholder="New Category (optional)"
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Write your question here..."
              value={questionText}
              onChange={e => setQuestionText(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">Submit Question</button>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
