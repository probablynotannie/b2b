function Aside({ hotel, ferry }) {
  console.log("Hotel", hotel);
  console.log("Ferry", ferry);
  return (
    <div>
      <h2 className="text-lg font-bold pb-1 border-b-2 border-slate-100 dark:border-slate-700 dark:text-white">
        Reservando
      </h2>
      <div></div>
    </div>
  );
}

export default Aside;
