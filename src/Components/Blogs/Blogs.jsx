import React from "react";
import useTitle from "../../Hooks/useTitle";
import SqlNosql from "../../Assets/diffrent-sql-nosql.jpg";
import Jwt from "../../Assets/jwt.png";
import Nodejs from "../../Assets/js-nodejs.jpg";
import Node from "../../Assets/useNode.png";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <>
      <section>
        <div className="text-center font-bold text-2xl p-6 text-yellow-400">
          <h1>Blog</h1>
          <div className="divider"></div>
        </div>
        <div className="p-4">
          <div className="card p-6 lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={SqlNosql}
                alt="Diffrent betwine sql nosql"
                style={{ width: "30rem", objectFit: "cover" }}
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">
                  Difference between SQL and NoSQL ?
                </h2>
                <p className="font-bold my-2">Functions of SQL:</p>
                <p>
                  <ul>
                    <li>
                      Perform queries on the database
                      <li>Database Retrieval</li>
                      <li>Set permissions on tables, views</li>
                      <li>Can insert records into the database</li>
                      <li>Update records in a database</li>
                      <li>Delete records from a database</li>
                      <li>Create new databases, or new tables in a database</li>
                      <li>Create stored procedures & views in a database</li>
                    </li>
                  </ul>
                  <p className="font-bold my-">Features of NoSQL</p>
                  <ul>
                    <li>
                      NoSQL has higher scalability than other database
                      management systems
                    </li>
                    <li>
                      Schema Free: You do not need to define the schema of the
                      database before storing the data onto the system.{" "}
                    </li>
                    <li>
                      NoSQL allows the distribution of data on more than just
                      one device.{" "}
                    </li>
                    <li>
                      With NoSQL Database, you do not require specialized or
                      complex hardware or storage solutions.
                    </li>
                    <li>Does not require data normalization</li>
                    <li>Simple API for easy user interfaces</li>
                    <li>
                      Can store unstructured, semi-structured, or structured
                      data.{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl my-4">
            <figure>
              <img src={Jwt} alt="JWT" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">What is JWT, and how does it work?</h2>
              <div>
                <p>
                  JSON stands for JavaScript Object Notation used for data
                  transfer. It is a lightweight format for storing and
                  transporting data, often used when server sends the data to a
                  web page.
                </p>
                <p>
                  Now that we understand JSON, which is the data text format,
                  the token is the string of data that usually represents the
                  sender’s identity. The servers use it to validate the sender’s
                  identity.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={Nodejs}
                alt="What is the difference between javascript and NodeJS?"
                style={{ width: "80%", height: "20rem", objectFit: "contain" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                What is the difference between javascript and NodeJS?
              </h2>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Javascript</th>
                      <th>NodeJs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Javascript is a programming language that is used for
                        writing scripts on the website.{" "}
                      </td>
                      <td>NodeJS is a Javascript runtime environment.</td>
                    </tr>

                    <tr className="hover">
                      <td>Javascript can only be run in the browsers.</td>
                      <td>NodeJS can be run on the server side.</td>
                    </tr>

                    <tr>
                      <td>
                        Javascript is a single-threaded language, which means it
                        can only do one thing at a time.
                      </td>
                      <td>
                        NodeJS is a multi-threaded language, which means it can
                        do multiple things at a time.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl my-4">
            <figure>
              <img src={Node} alt="How to use node" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                How does NodeJS handle multiple requests at the same time?
              </h2>
              <div>
                <p>
                  NodeJS is a single-threaded language, which means it can only
                  do one thing at a time. But it can handle multiple requests at
                  the same time. This is because NodeJS uses an event loop to
                  handle multiple requests at the same time. The event loop is a
                  queue that stores all the incoming requests. When the event
                  loop is empty, it executes the first request in the queue.
                  When the first request is completed, it executes the next
                  request in the queue. This process continues until the queue
                  is empty. This is how NodeJS handles multiple requests at the
                  same time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
