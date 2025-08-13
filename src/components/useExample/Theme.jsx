import { createContext, useState, use } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const ThemedCard = () => {
  
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      className={`shadow-md rounded-lg p-6 ${theme === 'light' ? 'bg-white' : 'bg-[#1B1D25]'
        }`}
    >
      
      <h1
        className={`text-2xl mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}
      >
        Themed Card
      </h1>
      <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque
        libero. Nullam mattis metus a sapien tempor, sit amet mollis est
        facilisis. Phasellus nec turpis nec dui venenatis vestibulum. Sed
        dapibus dapibus justo, at rhoncus risus malesuada vel. Proin eget leo id
        mi ullamcorper rhoncus.
      </p>
     
      <button
        onClick={toggleTheme}
        className='mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};


const Theme = () => {
  return (
    <div className='relative mt-6 mx-8'>
      <ThemeProvider>
        <ThemedCard />
      </ThemeProvider>

      <CodeSnippet string={CODE_SNIPPETS.use4} />
    </div>
  );
};

export { Theme as UseExample4 };
