function getDestinos() {
    return new Promise((resolve, reject) => {
        if (window.devDestinos) delete window.devDestinos;

        window.devDestinos = (data) => {
            resolve(data);
            document.body.removeChild(script);
        };
        const script = document.createElement("script");
        script.src = "https://devxml-2.vpackage.net/Hoteles/public/destino/input/madr/to/reserva_hotel_capitales?callback=devDestinos";
        script.async = true;
        script.onerror = () => {
            reject(new Error("JSONP request failed"));
            document.body.removeChild(script);
        };

        document.body.appendChild(script);
    });
}

export default getDestinos;
