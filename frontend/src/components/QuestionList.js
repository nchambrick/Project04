function QuestionList({ questions }) {
  if (questions.length === 0) {
    return <div className="alert alert-info">No questions yet. Be the first to ask!</div>;
  }

  return (
    <div className="row">
      {questions.map((q) => (
        <div key={q.id} className="col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              {q.question_text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
