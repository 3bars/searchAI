import { useState, useEffect } from 'preact/hooks';

export function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults([
      {
        title: 'Example Result',
        url: '#',
        snippet: 'This is a mock result from AI search.',
      },
    ]);
  };

  return (
    <div class="flex flex-col items-center min-h-screen py-20 px-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div class="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          class="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-200 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <h1 class="text-5xl font-bold mb-10">AI Search</h1>
      <form onSubmit={handleSearch} class="w-full max-w-2xl">
        <div class="flex border border-gray-300 dark:border-gray-600 rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            class="flex-grow px-6 py-3 text-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none"
            placeholder="Search..."
            value={query}
            onInput={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-6 py-3 font-semibold hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      <div class="mt-10 w-full max-w-2xl">
        {results.map((res, index) => (
          <div key={index} class="mb-6">
            <a
              href={res.url}
              class="text-xl text-blue-600 dark:text-blue-400 hover:underline"
            >
              {res.title}
            </a>
            <p class="text-gray-600 dark:text-gray-300">{res.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

