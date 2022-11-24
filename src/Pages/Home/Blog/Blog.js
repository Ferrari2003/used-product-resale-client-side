import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='m-12'>
                <h3 className='mt-5 bg-red-100 p-4 rounded-xl'>
                    <p className='text-3xl'><strong>Question:</strong>  What are the different ways to manage a state in a react
                        application ?</p>
                    <p className='text-2xl'><strong>Answer:</strong>
                        The Four Kinds of React State to Manage Local state. Global state.
                        Server state. URL state. State represents the value of a dynamic
                        properties of a React component at a given instance. React provides
                        a dynamic data store for each component. The internal data
                        represents the state of a React component and can be accessed using
                        this. state member variable of the component.</p>
                </h3>
                <h3 className='mt-5 bg-orange-100 p-4 rounded-xl'>
                    <p className='text-3xl'><strong>Question:</strong>  How does prototypical inheritance work?</p>
                    <p className='text-2xl'><strong>Answer:</strong>
                        The Prototypal Inheritance is a feature in javascript used to add
                        methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object.
                        Traditionally, in order to get and set the [[Prototype]] of an
                        object, we use Object. getPrototypeOf and Object.</p>
                </h3>
                <h3 className='mt-5 bg-amber-100 p-4 rounded-xl'>
                    <p className='text-3xl'><strong>Question:</strong>  What is a unit test? Why should we write unit tests?</p>
                    <p className='text-2xl'><strong>Answer:</strong>
                        The main objective of unit testing is to isolate written code to
                        test and determine if it works as intended. Unit testing is an
                        important step in the development process, because if done
                        correctly, it can help detect early flaws in code which may be more
                        difficult to find in later testing stages.</p>
                </h3>
                <h3 className='mt-5 bg-lime-100 p-4 rounded-xl'>
                    <p className='text-3xl'><strong>Question:</strong>  React vs Angular vs Vue?</p>
                    <p className='text-2xl'><strong>Answer:</strong>
                        Vue provides higher customizability and hence is easier to learn
                        than Angular or React. Further, Vue has an overlap with Angular and
                        React with respect to their functionality like the use of
                        components. Hence, the transition to Vue from either of the two is
                        an easy option</p>
                </h3>
            </div>
        </div>
    );
};

export default Blog;