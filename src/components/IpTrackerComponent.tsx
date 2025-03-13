import React, { useEffect, useState } from "react";
import "./style.css";
import getIpData from "./api";

interface Props {
  setIpData: (data: any) => void;
}

const IpTrackerComponent: React.FC<Props> = ({ setIpData }) => {
  const [ipInput, setIpInput] = useState<string>("");

  const [currentIpData, setCurrentIpData] = useState<any>();

  useEffect(() => {
    const getIp = async () => {
      const userIp = await getIpData();
      setCurrentIpData(userIp);
      setIpData(userIp);
    };

    getIp();
  }, []);

  const handleSearch = async (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const data = await getIpData(ipInput);
    if (data?.ip) {
      setIpInput(data.ip);
      setIpData(data);
      setCurrentIpData(data);
    }
  };

  return (
    <>
      <div id="ip-search-and-info">
        <h2 id="header">IP Address Tracker </h2>
        <form id="ip-search">
          <input
            id="ip-input"
            type="text"
            placeholder="Search for any IP address or domain"
            value={ipInput}
            required
            onChange={(event) => setIpInput(event.target.value)}
          />

          <button type="button" id="submit-button" onClick={handleSearch}>
            <svg
              fill="#fff"
              height="15px"
              width="15px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-56.1 -56.1 442.20 442.20"
              stroke="#fff"
              strokeWidth="22.77"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="4.28"
              >
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
            </svg>
          </button>
        </form>
        <div id="ip-info-display">
          {currentIpData && (
            <div id="ip-info-container">
              <div className="ip-info">
                <p>IP ADDRESS</p>
                <p>{currentIpData.ip}</p>
              </div>
              <div className="separator">|</div>
              <div className="ip-info">
                <p>LOCATION</p>
                <p>{currentIpData?.location?.city} </p>
              </div>
              <div className="separator">|</div>
              <div className="ip-info">
                <p>TIMEZONE</p>
                <p>{`UTC ${currentIpData?.location?.timezone}`}</p>
              </div>
              <div className="separator">|</div>
              <div className="ip-info">
                <p>ISP</p>
                <p>{currentIpData.isp ? currentIpData.isp : "-"}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IpTrackerComponent;
