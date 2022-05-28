// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference={REF}&key={YOUR_API_KEY}

export const API_KEY_GOOGLE_MAPS = "AIzaSyBUhvlsBkMuoNuaFFnIuDur7oNnNesbWOY";

export const PLACE_PHOTO_BASE =
  "https://maps.googleapis.com/maps/api/place/photo";

export const PLACE_PHOTO_PARAMS = "?maxwidth=400&photo_reference=";

export const REF_EXAMPLE =
  "Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT";
export const EXAMPLE = `${
  PLACE_PHOTO_BASE + PLACE_PHOTO_PARAMS + REF_EXAMPLE
}&key=${API_KEY_GOOGLE_MAPS}`;

// console.log(EXAMPLE);
