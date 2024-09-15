import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestedQueries, setSuggestedQueries] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false); // New state to track submission

  const handleQuerySubmit = async (query) => {
    setLoading(true); // Show loading when generating response
    setHasSubmitted(true); // Track that the form has been submitted
    const res = await fetch('http://127.0.0.1:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    if (data.suggestedQueries) {
      setSuggestedQueries(data.suggestedQueries);
    }
    setResponse(data.response);
    setLoading(false); // Hide loading when response is ready
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">RAG-based News Summarizer</h1>
        <QueryInput onSubmit={handleQuerySubmit} />
        {loading ? (
          <p className="text-xl text-center mt-4">Generating response, please wait...</p>
        ) : (
          <>
            {hasSubmitted && <ResponseDisplay response={response} />}
            {suggestedQueries.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Suggested Queries:</h2>
                <ul className="list-disc list-inside">
                  {suggestedQueries.map((query, idx) => (
                    <li key={idx}>{query}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;






