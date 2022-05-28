import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="mx-2 my-10 md:mx-10">
      <h2 className="bg-indigo-200 text-center text-4xl text-indigo-600 py-4">Question and Answer</h2>
      {/* Question and Answer - 01  */}
      <h4 className="mt-5 ms-2">Difference between javascript and node js</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>Javascript</th>
              <th>Node js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <td>
                Javascript can run in any browser engine as like JS core in
                safari and Spidermonkey in Firefox.
              </td>
              <td>
                V8 is the Javascript engine inside of node.js that parses and
                runs Javascript.
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      {/* Question and Answer - 02*/}
      <h4 className="mt-5 ms-2">When should you use nodejs and when should you use mongodb?</h4>
      <p className="ms-2">
        Nodejs : Node.js is an interpreter or runtime / running environment for
        JavaScript. Built on Chrome's V8 JavaScript engine. Responsibilities
        especially make your application effective.
      </p>
      <p className="ms-2">
        MongoDB : A No-SQL database for storing data. When high availability of
        data is required with automatic, fast, and instant data recovery.
      </p>
      {/* Question and Answer - 03*/}
      <h4 className="mt-5 ms-2">Differences between SQL and NoSQL databases.</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have dynamic schema</td>
            </tr>
            <tr>
              <td>
                These databases are not suited for hierarchical data storage.
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <td>Vertically Scalable</td>
              <td>Horizontally scalable</td>
            </tr>
            <tr>
              <td>Follows ACID property</td>
              <td>
                Follows CAP(consistency, availability, partition tolerance)
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Blog;
