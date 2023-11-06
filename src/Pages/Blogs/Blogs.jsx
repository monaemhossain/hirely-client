import { useEffect } from "react";

const Blogs = () => {
    useEffect(() => {
        document.title = 'Hirely | Blogs';
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto">
            <header className="bg-white p-4 text-center">
                <h1 className="text-3xl font-bold">Understanding Access Tokens and More</h1>
                <p className="text-gray-600 mt-2">Published on November 10, 2023</p>
            </header>

            <article className="p-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-800">Briefly introduce the topics of access tokens, refresh tokens, Express.js, and Nest.js. Explain why they are important in web development.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Access Tokens and Refresh Tokens</h2>
                    <p className="text-gray-800">Define what an access token and a refresh token are. Explain how they work in the context of authentication and authorization. Describe the typical flow of obtaining and using access tokens and refresh tokens.</p>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. Storage of Tokens on the Client-side</h2>
                    <p className="text-gray-800">
                        Discuss best practices for storing access tokens and refresh tokens securely.
                        Mention options like HTTP cookies, local storage, and session storage, and their pros and cons.
                        Provide code snippets or examples for implementing token storage securely.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Introduction to Express.js</h2>
                    <p className="text-gray-800">
                        Explain what Express.js is and its role in web development.
                        Highlight its features and benefits for building web applications.
                        Provide a basic example of setting up a server with Express.js.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Introduction to Nest.js</h2>
                    <p className="text-gray-800">
                        Introduce Nest.js as a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
                        Mention its key features like modularity, dependency injection, and support for TypeScript.
                        Compare and contrast Nest.js with Express.js.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">6. Explanation of Code</h2>
                    <p className="text-gray-800">Provide code snippets or examples demonstrating the implementation of token handling, Express.js, and Nest.js in a sample application. Explain the code step by step, focusing on important functions, middleware, and security considerations.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">7. Conclusion</h2>
                    <p className="text-gray-800">Summarize the key points discussed in the blog post. Offer any additional tips or considerations related to access tokens, refresh tokens, Express.js, and Nest.js.</p>
                </section>
            </article>
        </div>
    );
};

export default Blogs;