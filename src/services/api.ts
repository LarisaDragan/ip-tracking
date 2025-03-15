import axios from "axios";

const apiKey = import.meta.env.API_KEY;

interface apiParams {
  apiKey: string | undefined;
  ipAddress?: string;
  domain?: string;
}

const getIpData = async (ipParam?: string) => {
  const apiParams: apiParams = {
    apiKey,
  };

  if (ipParam) {
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ipParam)) {
      apiParams.ipAddress = ipParam;
    } else {
      apiParams.domain = ipParam;
    }
  }

  try {
    const response = await axios.get(
      "https://geo.ipify.org/api/v2/country,city",
      {
        params: apiParams,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getIpData;
