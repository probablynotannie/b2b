// Map.js
function Map() {
  return (
    <>
      <iframe
        className="shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9157119463276!2d2.738751015311664!3d41.6420440792395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb21f1f30e2ecb%3A0x34457c4e5d36c7e!2sPasseig%20de%20Llevant%2C%203%2C%2008380%20Malgrat%20de%20Mar%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1603905480409!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        aria-hidden="false"
        tabIndex="0"
        title="Mapa de la calle del hotel, Malgrat de Mar, Barcelona, Spain"
      ></iframe>
    </>
  );
}

export default Map;
