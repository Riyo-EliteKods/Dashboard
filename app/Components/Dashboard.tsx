"use client";

import Link from "next/link";
import React from "react";
import { LuArrowUpDown, LuArrowUpRight } from "react-icons/lu";
import CoinSlider from "./CoinSlider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxLoop } from "react-icons/rx";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { CgArrowUp } from "react-icons/cg";
import { TbArrowFork } from "react-icons/tb";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CardLineChart from "./Chart";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      <div className="bg-custom-black pt-9">
        <div className="container m-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="flex  bg-custom-brown p-4 justify-between items-start md:items-center mb-6 rounded-xl">
                <div>
                  <p className="text-2xl mb-2">My Balance</p>
                  <p className="md:text-6xl text-3xl font-bold mb-4">
                    $25,350.52
                  </p>
                  <div className="flex md:flex-row gap-1 mb-1 flex-col">
                    <span>Grow your portfolio</span>{" "}
                    <Link
                      href="#"
                      className="text-orange-500 flex gap-1 items-center"
                    >
                      <span>check lates listed coins </span>
                      <span>
                        <LuArrowUpRight />
                      </span>
                    </Link>
                  </div>
                  <span className="text-xs text-gray-400">
                    All values represnted in USD
                  </span>
                </div>
                <img
                  src="../Images/Dot-img.png"
                  alt=""
                  className="md:w-40 w-20"
                />
              </div>

              <div>
                <CoinSlider />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <h1 className="md:text-3xl text-xl font-bold ">PnL Analysis</h1>
                <p className="flex items-center gap-1 bg-green-950 p-1 rounded-2xl text-custom-green">
                  <span>This Month 5%</span>{" "}
                  <span>
                    <FaArrowTrendUp />
                  </span>
                </p>
              </div>
              <div>
                <CardLineChart />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
            {/* table - 2  */}
            <div>
              <h1 className="text-3xl font-bold mb-5">Your holdings</h1>
              <Table className="text-white text-center mb-3">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow className="bg-custom-brown rounded-tl-2xl ">
                    <TableHead className="text-center ">
                      <div className="flex items-center gap-1 text-white justify-start">
                        <span> Assest</span>
                        <span>
                          <LuArrowUpDown />
                        </span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 text-white justify-center">
                        <span> Balance</span>
                        <span>
                          <LuArrowUpDown />
                        </span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 text-white justify-center">
                        <span> Price</span>
                        <span>
                          <LuArrowUpDown />
                        </span>
                      </div>
                    </TableHead>
                    <TableHead className="text-right">
                      <div className="flex items-center gap-1 text-white justify-center">
                        <span> Value</span>
                        <span>
                          <LuArrowUpDown />
                        </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-1.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Ethereum ETH</span>
                      </div>
                    </TableCell>
                    <TableCell>2.5</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-2.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Wrapped Bitcoin WBTC</span>
                      </div>
                    </TableCell>
                    <TableCell>0.05</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-3.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Frax FRAX</span>
                      </div>
                    </TableCell>
                    <TableCell>350</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-4.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>pepe PEPE</span>
                      </div>
                    </TableCell>
                    <TableCell>1,000.520</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-5.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Maker MKR</span>
                      </div>
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-6.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Uniswap UNI</span>
                      </div>
                    </TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-7.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Chainlink Token UNI</span>
                      </div>
                    </TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-8.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Rinbbon RBN</span>
                      </div>
                    </TableCell>
                    <TableCell>350</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-9.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>INU SHIB</span>
                      </div>
                    </TableCell>
                    <TableCell>3800</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-0">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-10.png"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <span>Token LDO</span>
                      </div>
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right">$8,750</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <nav aria-label="Page navigation example" className="text-center">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-orange-600 border-gray-300 rounded-s-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowLeft />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300  hover:bg-orange-400 hover:text-orange-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600 border-gray-300 rounded-e-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowRight />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* table - 2 */}
            <div>
              <h1 className="text-3xl font-bold mb-5">Recent Activity</h1>
              <Table>
                <TableBody>
                  <TableRow className="border-0 ">
                    <TableCell className="md:w-32">
                      <div className="flex items-end">
                        <img
                          src="../Images/coin-1.png"
                          alt=""
                          className="md:w-10  md:h-10 w-5 h-5 "
                        />
                        <img
                          src="../Images/coin-2.png"
                          alt=""
                          className="md:w-10  md:h-10  w-5 h-5"
                        />
                        <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5">
                          <RxLoop className=" text-orange-600" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center pe-0">
                      <p className="font-bold md:text-xl text-md">Swapped</p>
                      <p className="md:text-md text-xs">
                        20 LINK For 0.1074 ETH
                      </p>
                    </TableCell>
                    <TableCell className="md:w-28">
                      <p className="md:text-lg text-sm">03/19/23</p>
                      <p className="float-end text-orange-500 md:text-xl text-md">
                        <LuArrowUpRight />
                      </p>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="md:w-32">
                      <div className="flex items-end">
                        <img
                          src="../Images/coin-4.png"
                          alt=""
                          className="rounded-full md:w-10  md:h-10  w-5 h-5"
                        />
                        <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5">
                          <HiOutlineArrowNarrowDown className=" text-orange-600" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center pe-0">
                      <p className="font-bold md:text-xl text-md">Received</p>
                      <p className="md:text-md text-xs">NFT From mutant.ens</p>
                    </TableCell>
                    <TableCell className="md:w-28">
                      <p className="md:text-lg text-sm">03/19/23</p>
                      <p className="float-end text-orange-500 md:text-xl text-md">
                        <LuArrowUpRight />
                      </p>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="md:w-32">
                      <div className="flex items-end">
                        <img
                          src="../Images/coin-5.png"
                          alt=""
                          className="rounded-full md:w-10  md:h-10  w-5 h-5"
                        />
                        <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5">
                          <CgArrowUp className=" text-orange-600" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center pe-0">
                      <p className="font-bold md:text-xl text-md">
                        Transferred
                      </p>
                      <p className="md:text-md text-xs">
                        WBTC to 0x6584...BD68
                      </p>
                    </TableCell>
                    <TableCell className="md:w-28">
                      <p className="md:text-lg text-sm">03/19/23</p>
                      <p className="float-end text-orange-500 md:text-xl text-md">
                        <LuArrowUpRight />
                      </p>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="md:w-32">
                      <div className="flex items-end">
                        <img
                          src="../Images/coin-6.png"
                          alt=""
                          className="rounded-full md:w-10  md:h-10  w-5 h-5"
                        />
                        <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5">
                          <TbArrowFork className=" text-orange-600" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center pe-0">
                      <p className="font-bold md:text-xl text-md">Bridged</p>
                      <p className="md:text-md text-xs">Ethereum to polygon</p>
                    </TableCell>
                    <TableCell className="md:w-28">
                      <p className="md:text-lg text-sm">03/19/23</p>
                      <p className="float-end text-orange-500 md:text-xl text-md">
                        <LuArrowUpRight />
                      </p>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="md:w-32">
                      <div className="flex items-end">
                        <img
                          src="../Images/coin-7.png"
                          alt=""
                          className="rounded-full md:w-10  md:h-10  w-5 h-5"
                        />
                        <img
                          src="../Images/coin-8.png"
                          alt=""
                          className="rounded-full md:w-10  md:h-10  w-5 h-5"
                        />
                        <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5">
                          <RxLoop className=" text-orange-600" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center pe-0">
                      <p className="font-bold md:text-xl text-md">Swapped</p>
                      <p className="md:text-md text-xs">1 ETH to 3,500 USDC</p>
                    </TableCell>
                    <TableCell className="md:w-28">
                      <p className="md:text-lg text-sm">03/19/23</p>
                      <p className="float-end text-orange-500 md:text-xl text-md">
                        <LuArrowUpRight />
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <nav aria-label="Page navigation example" className="text-center">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-orange-600 border-gray-300 rounded-s-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowLeft />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300  hover:bg-orange-400 hover:text-orange-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600 border-gray-300 rounded-e-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowRight />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
