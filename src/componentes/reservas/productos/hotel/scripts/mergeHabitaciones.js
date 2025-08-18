export default function groupAndMergeById(listaPrecios) {
    if (!Array.isArray(listaPrecios)) return [];
    const grouped = Object.values(
        listaPrecios.reduce((acc, item) => {
            if (item.id === undefined || item.id === null) return acc;
            const numAdults = Number(item.NumAdults) || 0;
            const numChilds = Number(item.NumChilds) || 0;
            if (!acc[item.id]) {
                acc[item.id] = {
                    ...item,
                    relatedRooms: [item],
                    combinedName: item.Name,
                    adultosTotal: numAdults,
                    niniosTotal: numChilds,
                };
            } else {
                acc[item.id].relatedRooms.push(item);
                acc[item.id].combinedName = acc[item.id].relatedRooms.map(r => r.Name).join(" + ");
                acc[item.id].adultosTotal += numAdults;
                acc[item.id].niniosTotal += numChilds;
                if (parseFloat(item.Price) < parseFloat(acc[item.id].Price)) {
                    acc[item.id].NoReembolsable = item.NoReembolsable;
                    acc[item.id].BoardName = item.BoardName;
                }
            }
            return acc;
        }, {})
    );

    return grouped.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
}
