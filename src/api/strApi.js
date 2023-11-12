import axios from "axios";

const API_URL = process.env.REACT_APP_STRAPI;

export const getLocations = async () => {
  const res = await axios
    .get(`${API_URL}locations?sort=id&populate=*`)
    .then((res) => {
      // console.log("strapi locations", res.data.data);
      return res.data.data;
    });

  return res;
};

export const getServiceTypes = () => {
  return axios.get(`${API_URL}service-types?sort=id&populate=*`).then((res) => {
    // console.log("strapi service-types", res.data.data);
    return res.data.data;
  });
};

export const getMassagesList = () => {
  return axios.get(`${API_URL}massages?populate=*`).then((res) => {
    // console.log("strapi mas", res.data.data);
    return res.data.data;
  });
};
export const getSpaList = () => {
  return axios.get(`${API_URL}spa-programs?populate=*`).then((res) => {
    // console.log("strapi spa", res.data.data);
    return res.data.data;
  });
};

export const getBodyList = () => {
  return axios.get(`${API_URL}body-services?populate=*`).then((res) => {
    // console.log("strapi body", res.data.data);
    return res.data.data;
  });
};
export const getGiftcardsList = () => {
  return axios.get(`${API_URL}giftcards?populate=*`).then((res) => {
    // console.log("strapi giftcards", res.data.data);
    return res.data.data;
  });
};

export const getSpecialistsList = (locationId) => {
  return axios
    .get(
      `${API_URL}specialists?filters[locations][id][$eq]=${locationId}&sort=id&populate=*`
    )
    .then((res) => {
      // console.log("strapi specialists", res.data.data);
      return res.data.data;
    });
};

// singular
export const getHeroes = () => {
  return axios.get(`${API_URL}heroes?populate=*`).then((res) => {
    // console.log("strapi heroes", res.data.data);
    return res.data.data;
  });
};

export const getAboutText = () => {
  return axios.get(`${API_URL}sections?populate=*`).then((res) => {
    // console.log("strapi about", res.data.data);
    return res.data.data;
  });
};

export const getDiscount = () => {
  return axios.get(`${API_URL}discount?populate=*`).then((res) => {
    // console.log("strapi discount", res.data.data);
    return res.data.data;
  });
};
