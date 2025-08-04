export default function groupAndMergeById(listaPrecios) {
    if (!Array.isArray(listaPrecios)) return [];

    const grouped = Object.values(
        listaPrecios.reduce((acc, item) => {
            if (!item.id) return acc;

            if (!acc[item.id]) {
                acc[item.id] = {
                    ...item,
                    relatedRooms: [item],
                    combinedName: item.Name,
                    AdultosTotal: item.NumAdults || 0,
                    NiniosTotal: item.NumChilds || 0,  // adjust keys if your data uses different names
                };
            } else {
                acc[item.id].relatedRooms.push(item);
                acc[item.id].combinedName = acc[item.id].relatedRooms.map(r => r.Name).join(" + ");
                acc[item.id].AdultosTotal += item.NumAdults || 0;
                acc[item.id].NiniosTotal += item.NumChilds || 0;

                if (parseFloat(item.Price) < parseFloat(acc[item.id].Price)) {
                    acc[item.id].Price = item.Price;
                    acc[item.id].Currency = item.Currency;
                    acc[item.id].NoReembolsable = item.NoReembolsable;
                    acc[item.id].BoardName = item.BoardName;
                }
            }
            return acc;
        }, {})
    );

    return grouped.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
}
