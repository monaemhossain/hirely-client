import { useEffect } from "react";
const Blogs = () => {
    useEffect(() => {
        document.title = 'Hirely | Blogs';
    }, []);
    const codeExample1 = `
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
    `
    const codeExample2 = `
        import {Controller, Get} from '@netjs/common';
        import {AppService} from './app.service';
        @Controller()
        export class AppController {
            constructor(private readonly appService: AppService) { }
            @Get()
            getHello(): string {
                return this.appService.getHello();
            }
        }
    `
    return (
        <div className="max-w-screen-lg mx-auto">
            <header className="bg-white p-4 text-center">
                <h1 className="text-3xl font-bold">Understanding Access Tokens and More</h1>
                <p className="text-gray-600 mt-2">Published on November 9, 2023</p>
            </header>

            <article className="p-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-800">Access tokens, refresh tokens, Express.js, and Nest.js are important topics in web development. Access tokens and refresh tokens are used for authentication and authorization. Express.js is a popular Node.js web application framework that provides a robust set of features for web and mobile applications. Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Access Tokens and Refresh Tokens</h2>
                    <p className="text-gray-800">An access token is a string of characters that is used to authenticate a user and provide access to a resource. A refresh token is a string of characters that is used to obtain a new access token after the original access token has expired. Access tokens and refresh tokens are typically used in OAuth 2.0 authentication flows. The typical flow of obtaining and using access tokens and refresh tokens involves the following steps:

                        <li>1. The client sends a request to the authorization server to obtain an access token and a refresh token.</li>
                        <li>2. The authorization server verifies the client&#39;s identity and issues an access token and a refresh token.</li>
                        <li>3. The client stores the access token and the refresh token securely on the client-side.</li>
                        <li>4. The client sends the access token in the header of each HTTPS call to the resource server.</li>
                        <li>5. If the access token has expired, the client sends the refresh token to the authorization server to obtain a new access token.</li>
                    </p>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. Storage of Tokens on the Client-side</h2>
                    <p className="text-gray-800">
                        Access tokens and refresh tokens should be stored on the client-side in a secure manner. One way to store them is to use HTTP-only cookies. This ensures that the tokens are not accessible to JavaScript and are only sent to the server when making requests. Other options for storing tokens include local storage and session storage. However, these options are less secure than HTTP-only cookies because they are accessible to JavaScript.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Introduction to Express.js</h2>
                    <p className="text-gray-800">
                        Express.js is a popular Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the APIs and adds helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects. Here is an example of how to set up a server with Express.js:
                        <pre>
                            <code>
                                {codeExample1}
                            </code>
                        </pre>
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Introduction to Nest.js</h2>
                    <p className="text-gray-800">
                        Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of the widely popular Node.js runtime and leverages its asynchronous, event-driven nature to provide a robust and reliable platform for developing web applications. Nest.js provides a number of key features, including modularity, dependency injection, and support for TypeScript. Here is an example of how to create a basic Nest.js application:

                        <pre>
                            <code>
                                {codeExample2}
                            </code>
                        </pre>
                        
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">6. Conclusion</h2>
                    <p className="text-gray-800">Access tokens, refresh tokens, Express.js, and Nest.js are important</p>
                </section>
            </article>
        </div>
    );
};

export default Blogs;


