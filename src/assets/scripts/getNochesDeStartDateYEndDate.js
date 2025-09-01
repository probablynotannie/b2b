export default function getNoches(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = end - start;
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
}
