function getHoteles() {
    return new Promise((resolve, reject) => {
        window.devDestinosHotel = (data) => {
            resolve(data);
            delete window.devDestinos;
            document.body.removeChild(script);
        };
        const script = document.createElement("script");
        script.src = "https://devxml-2.vpackage.net/Hoteles/public/destino/inputName/madr/to/reserva_hotel_capitales?callback=devDestinosHotel&_=1755691955585";
        script.onerror = () => {
            reject(new Error("Error"));
            delete window.devDestinos;
            script.remove();
        };

        document.body.appendChild(script);
    });
}

export default getHoteles;
