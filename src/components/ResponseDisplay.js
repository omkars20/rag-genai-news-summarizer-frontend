import React from 'react';

const ResponseDisplay = ({ response }) => {
  const displayResponse = typeof response === 'string' ? [response] : response;

  return (
    <div className="bg-gray-800 p-6 rounded border border-indigo-600 mt-6">
      <h2 className="text-xl font-semibold mb-4">Response:</h2>
      {Array.isArray(displayResponse) && displayResponse.length > 0 ? (
        displayResponse.map((res, idx) => (
          <div key={idx} className="mb-4">
            {typeof res === 'object' ? (
              <>
                <p>{res.summary}</p>
                {res.source && (
                  <a
                    href={res.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Read More
                  </a>
                )}
              </>
            ) : (
              <p>{res}</p>  // If it's just a string, display it directly
            )}
          </div>
        ))
      ) : (
        <p>No relevant articles found. Please try a different query.</p>
      )}
    </div>
  );
};

export default ResponseDisplay;






