export default function groupAndMergeByCode(listaPrecios) {
    if (!Array.isArray(listaPrecios)) return [];

    const grouped = Object.values(
        listaPrecios.reduce((acc, item) => {
            if (!item.Code) return acc;
            const numAdults = Number(item.NumAdults) || 0;
            const numChilds = Number(item.NumChilds) || 0;
            
            if (!acc[item.Code]) {
                acc[item.Code] = {
                    ...item,
                    relatedRooms: [item],
                    combinedName: item.Name,
                    adultosTotal: numAdults,
                    niniosTotal: numChilds,
                };
            } else {
                acc[item.Code].relatedRooms.push(item);
                acc[item.Code].combinedName = acc[item.Code].relatedRooms
                    .map((r) => r.Name)
                    .join(" + ");
                acc[item.Code].adultosTotal += numAdults;
                acc[item.Code].niniosTotal += numChilds;
                if (parseFloat(item.Price) < parseFloat(acc[item.Code].Price)) {
                    acc[item.Code].NoReembolsable = item.NoReembolsable;
                    acc[item.Code].BoardName = item.BoardName;
                    acc[item.Code].Price = item.Price;
                }
            }

            return acc;
        }, {})
    );

    return grouped.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
}
