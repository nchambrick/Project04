function QuestionList({ questions }) {
  if (!questions || questions.length === 0) {
    return (
      <div className="alert alert-info mt-3">
        No questions yet. Be the first to ask!
      </div>
    );
  }

  return (
    <div className="list-group mt-3">
      {questions.map((q) => (
        <div key={q.id} className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{q.title || 'Untitled Question'}</h5>
            <small>{q.created_at ? new Date(q.created_at).toLocaleDateString() : ''}</small>
          </div>
          <p className="mb-1">{q.body || q.question_text || 'No description provided.'}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
