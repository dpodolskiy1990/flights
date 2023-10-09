export default function Home() {
  return (
    <main className="bg-grey-100 px-4 container py-5">
      <div>
        <h3 className="text-sm font-bold mb-2">Your selected trip</h3>
        <h2 className="font-bold text-2xl">London - Dubai</h2>
        <h4 className="text-sm mb-3">Wed, 13 Sep – Mon, 18 Sep • 4 pax</h4>
      </div>
      <div className="bg-white rounded-2xl px-4 py-2.5 text-gray-600 mb-6">
        <ul>
          <li className="text-sm border-b border-grey-600 container mb-1 py-1 pb-4">
            <div className="flex justify-between mb-1">
              <div className="flex flex-col gap-2">
                <span className="text-black font-bold text-lg">12:55</span>
                <span>LHR • 13 Sep</span>
              </div>
              <div className="flex flex-col grow items-center gap-1">
                <span className="">7h 10m</span>
                <hr className="container" />
                <span>Direct</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-black font-bold text-lg text-right ">
                  23:05
                </span>
                <span className="justify-self-end">13 Sep • DXB</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1">
                <img src="./img/JetStar.svg" alt="air" /> jetStar
              </span>
              <span className="justify-self-end">Economy</span>
            </div>
          </li>
          <li className="text-sm  container mb-1 py-1 pb-4">
            <div className="flex justify-between mb-1">
              <div className="flex flex-col gap-2">
                <span className="text-black font-bold text-lg">12:15</span>
                <span>DXB • 18 Sep</span>
              </div>
              <div className="flex flex-col grow items-center gap-1">
                <span className="">7h 50m</span>
                <hr className="container" />
                <span>Direct</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-black font-bold text-lg text-right">
                  17:05
                </span>
                <span className="justify-self-end">18 Sep • LHR</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1">
                <img src="./img/BritishAirways.svg" alt="air" /> British Airways
              </span>
              <span className="justify-self-end">Economy</span>
            </div>
          </li>
        </ul>
        <div className="border border-primary-700 rounded-lg">
          <div className="mb-2">
            <div className="bg-primary-700 text-white border rounded-lg flex justify-between py-1 px-4">
              <div className="flex text-xs items-center gap-1">
                <img src="./img/TicketFlexible.svg" alt="TicketFlexible" />
                <span className="whitespace-nowrap">Flexible ticket</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-right">$626.53</span>
                <span className="text-xs">Price per person</span>
              </div>
            </div>
            <div className="px-4 py-1">
              <ul>
                <li className="flex gap-2">
                  <img src="./img/Check.svg" alt="Check" className="h-5 w-5" />
                  <span className="text-black text-sm">
                    Adjust ticket date, time and airline up to 24 hours before
                    taking off
                  </span>
                </li>
                <li className="flex gap-2">
                  <img src="./img/Check.svg" alt="Check" className="h-5 w-5" />
                  <span className="text-black text-sm">
                    Change via call 24 hours pre-departure
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-primary-700 px-4 py-1">
              <a href="#" className="text-sm">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="bg-primary-50 text-primary-700 px-4 py-1 rounded-2xl flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <img src="./img/TicketStandart.svg" alt="TicketStandart" />
            <span className="whitespace-nowrap text-xs">Standart ticket</span>
          </div>
          <div className=" flex flex-col">
            <span className="text-lg font-bold text-right">$530.73</span>
            <span className="text-xs"> Price per person</span>
          </div>
        </div>
      </div>
    </main>
  );
}
