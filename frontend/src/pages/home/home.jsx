/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Top10released from "../../components/Top10Released";
import "./style.css";
import AsyncSearch from "../../components/SearchEngine";
import Top10upcoming from "../../components/Top10upcoming";
import { siteTitile } from "../../../config";
import axios from "axios";
import { apiUrl } from "../../../config";

function Home() {
  const [statas, setStats] = useState({});
  useEffect(() => {
    const getStats = async () => {
      const res = await fetch(`${apiUrl}/api/stats`);
      const data = await res.json();

      setStats(data);
    };
    getStats();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="home__statistics">
          <h2 className="p-4" style={{ fontFamily: "cursive" }}>
            Welcome to <span className="home__site__title">{siteTitile}</span>
            <hr />
            <span className="home__site__text">
              Manage your movies collection
            </span>
          </h2>
        </div>

        <div className="home__search">
          <h2 className="text-center p-4 home__title__grad">
            Search Movie Here....
          </h2>
          <AsyncSearch />
        </div>
        <div className="home__main__wrapper">
          <div className="mx-auto">
            <h2
              className="text-center p-4"
              style={{
                fontFamily: "cursive",
                color: "#000080",
              }}
            >
              <span className="home__title__grad">Top 10 Released Movies</span>
            </h2>
            <div className="row flex justify-content-center">
              <Top10released />
            </div>

            <h2
              className="text-center p-4 home__title__grad"
              style={{
                fontFamily: "cursive",
              }}
            >
              Top 10 Upcoming Movies
            </h2>
            <div className="row felx justify-content-center">
              <Top10upcoming />
            </div>
          </div>
        </div>
        <div className="p-2"></div>
        <div
          style={{
            backgroundColor: "#FFD580",
            borderRadius: "20px",
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <hr />
            <table style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>
                    <i className="bi bi-film p-2"></i>
                  </th>
                  <th>
                    <i className="bi bi-people p-2"></i>
                  </th>
                  <th>
                    <i className="bi bi-star"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h5>{statas.movies}</h5>
                  </td>
                  <td>
                    <h5>{statas.users}</h5>
                  </td>
                  <td>
                    <h5>{statas.reviews}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
