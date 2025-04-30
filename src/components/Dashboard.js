import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import QuestionList from './QuestionList';
import AskQuestion from './AskQuestion';

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/forum/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error('Failed to load categories:', err);
      });
  }, []);

  const fetchQuestions = (category) => {
    setSelectedCategory(category);
    axios.get(`http://localhost:3001/api/forum/questions/${category}`)
      .then(res => {
        setQuestions(res.data);
      })
      .catch(err => {
        console.error('Failed to load questions:', err);
      });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '1100px' }}>
      <div className="row justify-content-center">
        {/* Sticky Sidebar */}
        <div className="col-md-3" style={{ position: 'sticky', top: '100px', height: 'fit-content' }} data-aos="fade-right">
          <CategoryList categories={categories} onSelectCategory={fetchQuestions} />
        </div>
  
        {/* Main Content */}
        <div className="col-md-9" data-aos="fade-left">
          <h4>{selectedCategory ? `Questions in "${selectedCategory}"` : 'Select a Category to View Questions'}</h4>
          <AskQuestion categories={categories} onQuestionAdded={() => fetchQuestions(selectedCategory)} />
          <QuestionList questions={questions} />
        </div>
      </div>
    </div>
  );
  
}

export default Dashboard;
