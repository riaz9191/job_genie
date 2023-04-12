import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <h5 className='text-center text-4xl '>Questions Answers</h5>
            <div className='mt-6'>
                <h1>Q1. When to use context api?</h1>
                <p><span className='font-bold'>Answer</span>: Context API is used in React applications to manage state that needs to be shared between multiple components without having to pass the state through a long chain of props.Context API is useful when  data needs to be accessible to multiple components at different levels of the component tree, without having to pass it down as props through all the intermediate levels.</p>
            </div>
            <div className='mt-6'>
                <h1>Q2. What is custom hook?</h1>
                <p><span className='font-bold'>Answer</span>: A custom hook is a JavaScript function that starts with the prefix "use" and can use other hooks inside it. It allows to extract some logic from a component and reuse it across multiple components. Custom hooks make code more reusable, readable, and maintainable.</p>
            </div>
            <div className='mt-6'>
                <h1>Q3. What is useRef</h1>
                <p><span className='font-bold'>Answer</span>: useRef is a React Hook that creates a mutable ref object that can be used to store a value that persists across renders. It allows you to access and modify the value of a DOM node or any other value that want to persist between renders.</p>
            </div>
            <div className='mt-6'>
                <h1>Q4. What is useMemo</h1>
                <p><span className='font-bold'>Answer</span>: useMemo is a React Hook that allows to memoize the result of a function. It is used to optimize the performance of application by reducing unnecessary re-rendering of components.</p>
            </div>
        </div>
    );
};

export default Blogs; 