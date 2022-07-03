import data from "data/spots.json";
import { nanoid } from "nanoid";

export const BookingError = () => (
  <div styles={{ position: "absolute", top: "20px", right: "20px" }}>
    Щось пішло не так... Зверніться за одним з наступних телефонів:
    <div>
      {data.map(({ name, address, tel, phone }) => (
        <address key={nanoid()}>
          <div>
            <p>{name}</p>
            <p>{address}</p>

            <p style={{ fontWeight: "600", textDecoration: "underline" }}>
              <a href={`tel:${tel}`}>{phone}</a>
            </p>
          </div>
        </address>
      ))}
    </div>
  </div>
);
