function Footer() {
  return (
    <footer className="bg-grey-600 flex flex-col w-full px-4 py-6 gap-y-6">
      <div className="flex flex-wrap text-white justify-center gap-x-6 underline">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQ</a>
        <a href="#">Contact us</a>
      </div>
      <div className="flex items-center flex-col gap-1 text-grey-100 text-sm">
        <span className="justify-self-center">We accept:</span>
        <div className="flex gap-1">
          <a href="#">
            <img src="./img/card1.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card2.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card3.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card4.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card5.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card6.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card7.svg" alt="card" />
          </a>
          <a href="#">
            <img src="./img/card8.svg" alt="card" />
          </a>
        </div>
      </div>
      <div className="text-grey-100 text-sm flex flex-col items-center">
        <span>© 2023 Company, Inc</span>
        <span>Cheap flights, reservations and online booking</span>
      </div>
    </footer>
  );
}

export default Footer;
