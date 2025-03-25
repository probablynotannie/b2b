export default function formatearMinutos(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return `${hours}h ${minutes}min`;
}
