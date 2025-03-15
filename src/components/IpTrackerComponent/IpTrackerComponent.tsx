import React, { useEffect, useState } from "react";
import "./style.css";
import getIpData from "../../services/api";

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

          <button
            type="button"
            id="submit-button"
            onClick={handleSearch}
          ></button>
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
