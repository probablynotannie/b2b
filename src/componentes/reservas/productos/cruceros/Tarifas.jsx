import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// Format price with currency
const formatPrice = (price) => {
  if (price === "-") return "-";
  return `${parseFloat(price).toLocaleString("es-ES")}€`;
};

// Transform raw data into structured categories
const transformTarifas = (tarifas) => {
  const categoriesMap = new Map();

  tarifas.forEach((tarifa) => {
    const categoryKey = tarifa.Camarotes.tipo_camarote;
    const cabinId = tarifa.Camarotes.id_camarote;
    const cabinName = tarifa.Camarotes.name;
    const price = tarifa.precio;
    const date = tarifa.fecha;

    if (!categoriesMap.has(categoryKey)) {
      categoriesMap.set(categoryKey, {
        id: categoryKey,
        title: getCategoryName(categoryKey),
        cabins: [],
      });
    }

    let category = categoriesMap.get(categoryKey);
    let cabin = category.cabins.find((c) => c.id === cabinId);

    if (!cabin) {
      cabin = { id: cabinId, title: cabinName, prices: {} };
      category.cabins.push(cabin);
    }

    cabin.prices[date] = price !== "0.00" ? parseFloat(price) : null;
  });

  return Array.from(categoriesMap.values());
};

// Get category name based on type
const getCategoryName = (tipo) => {
  switch (tipo) {
    case 2:
      return "Cabina Exterior";
    case 3:
      return "Suite con Balcón";
    default:
      return "Cabina Interior";
  }
};

// Get available dates in sorted order
const getAvailableDates = (tarifas) => {
  const dates = new Set();
  tarifas.forEach((tarifa) => dates.add(tarifa.fecha));
  return Array.from(dates).sort();
};

// Get the lowest and highest price for styling
const getPriceHighlights = (cabins, date) => {
  let prices = cabins.flatMap((cabin) => cabin.prices[date] || []);
  prices = prices.filter((p) => p !== null);
  if (prices.length === 0) return {};

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return { minPrice, maxPrice };
};

function Tarifas({ tarifas }) {
  const pricesData = transformTarifas(tarifas);
  const availableDates = getAvailableDates(tarifas);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedCabins, setExpandedCabins] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleCabin = (cabinId) => {
    setExpandedCabins((prev) => ({
      ...prev,
      [cabinId]: !prev[cabinId],
    }));
  };

  return (
    <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6">
      {/* Table Container */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border tw-border-gray-300">
          {/* Table Head */}
          <thead>
            <tr className="tw-bg-gray-100 tw-border-b tw-text-left">
              <th className="tw-py-3 tw-px-4">Cabina</th>
              {availableDates.map((date) => (
                <th key={date} className="tw-py-3 tw-px-4 tw-text-center">
                  {date}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {pricesData.map((category) => {
              const { minPrice, maxPrice } = getPriceHighlights(
                category.cabins,
                availableDates[0]
              );

              return (
                <React.Fragment key={category.id}>
                  <tr
                    className="tw-bg-gray-200 tw-font-bold tw-cursor-pointer"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <td className="tw-py-3 tw-px-4">
                      {expandedCategories[category.id] ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}{" "}
                      {category.title}
                    </td>
                    {availableDates.map((date) => (
                      <td key={date} className="tw-py-3 tw-px-4"></td>
                    ))}
                  </tr>
                  {expandedCategories[category.id] &&
                    category.cabins.map((cabin) => (
                      <tr key={cabin.id} className="tw-border-b">
                        <td className="tw-py-3 tw-px-4 tw-pl-8">
                          {cabin.title}
                        </td>
                        {availableDates.map((date) => {
                          const price = cabin.prices[date];
                          return (
                            <td
                              key={date}
                              className={`tw-py-3 tw-px-4 tw-text-center ${
                                price === minPrice ? "tw-text-green-500" : ""
                              } ${
                                price === maxPrice
                                  ? "tw-text-red-500 tw-font-bold"
                                  : ""
                              }`}
                            >
                              {price ? formatPrice(price) : "-"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tarifas;
