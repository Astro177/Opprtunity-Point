import React from "react";

const Blogs = () => {
  return (
    <div className="my-container">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #1: When should you use context API?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: Context API is mainly used to make a certain data accessible to
            many component in many different level. It is an extremely efficient
            method to pass a data. Context API makes it super easy to send a
            data to all of the component.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #2: What is a custom hook?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: Custom hook is reusable is a function which can be used for
            adding specific functionality in react application. A developer can
            make his own hook based on the functionality he needs.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #3: What is useRef?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: The useRef Hook is a built in react hook. It allows you to
            insert values between renders. It can be used to store a mutable
            value that does not cause a re-render when updated
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #4: What is useMemo?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: The useMemo hook is a built in react hook that allows you to
            returns a memoized value of a passed in resource-intensive function.
            It is very useful in optimizing the performance of a React component
            by eliminating repeating heavy computations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
