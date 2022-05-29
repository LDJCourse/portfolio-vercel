import React, { useState } from "react";

const CryptoTable = ({ currencies }) => {
  const [coins, setCoins] = useState(currencies);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // Get current coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const renderedCoins = currentCoins.map((coin) => (
    <CryptoDataBox
      key={coin.id}
      name={coin.name}
      marketCap={coin.market_cap}
      price={coin.current_price}
      symbol={coin.symbol}
      img={coin.image}
      rank={coin.market_cap_rank}
      priceChangePercent={coin.price_change_percentage_24h}
      volume={coin.total_volume}
    />
  ));

  const headItems = [
    { id: 2, item: "Coin" },
    { id: 3, item: "Price" },
    { id: 4, item: "%" },
  ];

  const tableHeadItems = headItems.map((item) => (
    <TableHeadItem key={item.id} title={item.item} />
  ));

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-80 sm:w-96 my-4 text-red-400 bg-neutral-900">
      <div className="p-2 flex justify-between border-b border-red-400 ">
        {tableHeadItems}
      </div>
      <div className="h-80 overflow-y-scroll scrollbar  text-gray-100 divide-y divide-red-400">
        {renderedCoins}
      </div>
      <div className="py-2  flex flex-col items-center justify-around ">
        <Pagination
          coinsPerPage={coinsPerPage}
          totalCoins={coins.length}
          paginate={paginate}
        />
        <div className="flex items-center shadow-xl">
          <input
            className="p-1 rounded focus:outline-none shadow-inner"
            placeholder="Find coin"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const CryptoDataBox = ({
  rank,
  name,
  img,
  price,
  priceChangePercent,
  marketCap,
  volume,
}) => {
  const priceColor = priceChangePercent > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className=" p-2 text-xs">
      <div className="flex justify-between items-center ">
        <div className=" ">
          <div className="flex items-center  w-32">
            <div className=" w-8 h-8 mr-1 rounded-full ">
              <img
                className="p-1 bg-white object-cover w-full h-full rounded-full"
                src={img}
                alt="Crypto coin"
              />
            </div>
            <div className="px-1">#{rank}</div>

            <div>
              <p className="font-semibold text-left truncate">{name}</p>
            </div>
          </div>
        </div>
        <div className="w-2/5">{price} $</div>
        <div className={` ${priceColor}`}>{priceChangePercent.toFixed(2)}%</div>
      </div>
    </div>
  );
};

const TableHeadItem = ({ title }) => {
  return <div className="">{title}</div>;
};

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full my-2 px-2 py-1 border-t border-b border-red-400">
      <ul className="flex justify-center  z-20 divide-x-2 divide-red-400">
        {pageNumbers.map((number) => (
          <li key={number}>
            <PaginationButton item={number} onClick={() => paginate(number)} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PaginationButton = ({ item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs rounded px-2 sm:px-3 font-bold cursor-pointer hover:text-red-400 hover:text-opacity-30"
    >
      {item}
    </button>
  );
};

export default CryptoTable;
