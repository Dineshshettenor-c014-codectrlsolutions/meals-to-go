import camelize from "camelize";

// import { locations } from "./location.mock";


export const locationRequest = (searchTerm) => {
    return fetch(
        `http://localhost:5001/mealstogo-b3d1c/us-central1/geocode?city=${searchTerm}`, {
        method: 'GET',
        withCredentials: true,
        crossorigin: true,
        mode: 'no-cors',
    }).then((res) => {
        console.log(res);
        return res.json();
    });
};
// return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//         reject("not found");
//     }
//     resolve(locationMock);
// });
// };

export const locationTransform = (result) => {
    console.log(result)
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
    // for map screen
    // return { lat, lng, viewport: geometry.viewport };

};