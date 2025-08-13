import { useOptimistic, useState, useRef } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';


const MessageForm = ({ addOptimisticMessage, sendMessage }) => {
  const formRef = useRef(); 
  const formAction = async (formData) => {
    
    addOptimisticMessage(formData.get('message'));

    
    formRef.current.reset();

   
    await sendMessage(formData);
  };

  return (
    <form action={formAction} ref={formRef} className='flex items-center mb-5'>
      <input
        type='text'
        name='message'
        placeholder='Hello!'
        className='border bg-[#1B1D25] text-white rounded py-1 px-2 mr-2 focus:outline-none focus:border-indigo-500'
      />
      <button
        type='submit'
        className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline'
      >
        Send
      </button>
    </form>
  );
};

const Thread = ({ messages, sendMessage }) => {

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className='bg-[#1B1D25] p-6 rounded-2xl'>
      <MessageForm
        addOptimisticMessage={addOptimisticMessage}
        sendMessage={sendMessage}
      />
      <span className='text-white'>Latest Messages:</span>
      {optimisticMessages.map((message, index) => (
        <div key={index} className='flex items-center'>
          <span className="text-white bg-indigo-500 mb-2 py-2 px-4 rounded-2xl max-w-[30ch] break-all">{message.text}</span>
          {message.sending && (
            <small className='ml-1 text-gray-500'>(Sending...)</small>
          )}
        </div>
      ))}
    </div>
  );
};


const deliverMessage = async (message) => {
  await new Promise((res) => setTimeout(res, 1000)); 
  return message; 
};


const MessageBox = () => {
  const [messages, setMessages] = useState([]); 


  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));

    
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return (
    <div className='mx-8 mt-6 relative'>
      <Thread messages={messages} sendMessage={sendMessage} />;

      <CodeSnippet string={CODE_SNIPPETS.useOptimistic} />
    </div>
  )
};

export { MessageBox as UseOptimisticExample };
