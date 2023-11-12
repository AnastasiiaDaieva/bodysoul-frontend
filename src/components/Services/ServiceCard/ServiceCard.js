import { nanoid } from "nanoid";
import placeholder from "img/no-image.jpg";
import s from "./ServiceCard.module.scss";
import Prices from "../MassagePrices/Prices";
import BookingModal from "components/Booking/BookingModal";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ServiceCard({ data, imgObj, setBookingStatus, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();
  const { location: paramsLocation } = useParams();
  const modalOpen = () => {
    setIsOpen(true);
  };

  const htmlTable = data?.prices;

  const extractColumnByValue = (html, value) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const headerRow = tempElement?.querySelector("table tr");

    if (headerRow) {
      const headerCells = headerRow.querySelectorAll("td, th");
      const headers = Array.from(headerCells).map((cell) => cell.textContent);

      const tableData = {};
      headers.forEach((header) => {
        tableData[header] = [];
      });

      const dataRows = Array.from(
        tempElement.querySelectorAll("table tr")
      ).slice(1);

      headers.forEach((header, columnIndex) => {
        dataRows.forEach((row) => {
          const cell = row.children[columnIndex];
          if (cell) {
            tableData[header].push(cell.textContent);
          }
        });
      });

      const extractedColumn = tableData[value];

      const jsxTable = (
        <table>
          <tbody>
            {extractedColumn.map((value, index) => (
              <tr key={index}>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

      return jsxTable;
    } else {
      return;
    }
  };

  const extractedColumnJSX = extractColumnByValue(htmlTable, paramsLocation);
  return (
    <>
      <article className={s.ServiceCard}>
        <img
          src={`${imgObj?.url}`}
          alt={imgObj?.alternativeText}
          className={s.ServiceCard__image}
        />

        <div className={s.ServiceCard__content}>
          <h3 className={s.ServiceCard__heading}>{data.name}</h3>
          {type === "spa" ? (
            <>
              <ul className={s.ServiceCard__bullets}>
                {data.components.map((element) => (
                  <li key={nanoid()}>{element}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{data.description}</p>
          )}
          <div className={s.ServiceCard__divider}></div>

          <ul className={s.ServiceCard__bullets}>
            {data.types?.length > 0 &&
              data.types.map((item) => <li key={nanoid()}>{item}</li>)}
          </ul>
          <div className="divider"></div>

          {data.effect && <p>Ефекти: {data.effect}</p>}
          <div className="divider"></div>

          <Prices
            details={data.details.find(
              (loc) => loc.location === state?.location?.attributes?.value
            )}
          />

          {/* {extractedColumnJSX && extractedColumnJSX} */}

          <div className="divider"></div>
          {isOpen && (
            <BookingModal
              setIsOpen={setIsOpen}
              type="booking"
              address={state.location}
              setBookingStatus={setBookingStatus}
              servicesSelect={data.details
                .find((item) => item.location === paramsLocation)
                .prices.map((item, index) => {
                  return {
                    value: `${data.id}-${index}`,
                    label: `${data.name} ${item.time} (${item.price})`,
                    // locations:
                    //   data?.relatedLocations?.data?.map(
                    //     (location) => location?.id
                    //   ) || [],
                  };
                })}
            />
          )}
          <button
            type="button"
            onClick={() => modalOpen("booking")}
            className={s.ServiceCard__book}
          >
            Записатися
          </button>
        </div>
      </article>
    </>
  );
}

export default ServiceCard;
