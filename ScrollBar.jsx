import React, { useEffect, useState } from "react";

const ScrollBar = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height = //scrollable height (as it'll not include currently visible area)
      document.documentElement.scrollHeight - //total height of document
      document.documentElement.clientHeight; //visible height of document

    setScrollPercent((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="upper-container fixed top-0 w-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold p-3 ">Scroll Indicator</h1>
        <div className="scroll-bar w-full h-1 bg-red-500">
          <div
            className="scroll-current-progress w-0 bg-green-700 h-1"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="data-constainer mt-12 flex flex-col justify-center items-center">
        {data && data.length ? (
          data.map((dataItem) => (
            <p className="py-1 text-sm">{dataItem.title}</p>
          ))
        ) : (
          <p>no data found</p>
        )}
      </div>
    </div>
  );
};

export default ScrollBar;
