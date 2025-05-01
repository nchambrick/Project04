import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllQuestions() {
  const [questionsByCategory, setQuestionsByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/forum/categories')
      .then(async (res) => {
        const categories = res.data;
        const allData = {};

        for (const category of categories) {
          const response = await axios.get(`http://localhost:3001/api/forum/questions/${category}`);
          allData[category] = response.data;
        }

        setQuestionsByCategory(allData);
      })
      .catch(err => {
        console.error('Failed to load all questions:', err);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="container mt-4">
      <h2>All Questions by Category</h2>
      <Link to="/" className="btn btn-primary my-3">← Back to Dashboard</Link>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {Object.keys(questionsByCategory).map((category, idx) => {
        const filteredQuestions = questionsByCategory[category].filter((q) =>
          q.question_text.toLowerCase().includes(searchTerm)
        );

        if (filteredQuestions.length === 0) {
          return null; // hide category if no questions match search
        }

        return (
          <div key={idx} className="mb-5">
            <h4>{category}</h4>
            <ul className="list-group">
              {filteredQuestions.map((q) => (
                <li key={q.id} className="list-group-item">
                  {q.question_text}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default AllQuestions;
