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
                  <p className="text-1xl mb-2">My Balance</p>
                  <p className="md:text-4xl text-2xl font-bold mb-4">
                    $25,350.52
                  </p>
                  <div className="flex md:flex-row gap-1 mb-1 flex-col">
                    <span>Grow your portfolio</span>{" "}
                    <Link
                      href="#"
                      className="text-orange-500 flex gap-1 items-center"
                    >
                      <span>check latest listed coins </span>
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
                <h1 className="md:text-2xl text-xl font-bold ">PnL Analysis</h1>
                <p className="flex items-center gap-1 bg-green-950 px-4 rounded-2xl text-custom-green">
                  <span className="font-bold ">This Month 5%</span>{" "}
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
              <h1 className="text-2xl font-bold mb-5">Your holdings</h1>
              <Table className="text-white text-center mb-5">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow className="bg-custom-brown rounded-tl-2xl ">
                    <TableHead className="text-center ">
                      <div className="flex items-center gap-1 text-white justify-start">
                        <span> Asset</span>
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
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-1.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Ethereum ETH</span>
                      </div>
                    </TableCell>
                    <TableCell>2.5</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-2.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">
                          Wrapped Bitcoin WBTC
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>0.05</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-3.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Frax FRAX</span>
                      </div>
                    </TableCell>
                    <TableCell>350</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-4.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">pepe PEPE</span>
                      </div>
                    </TableCell>
                    <TableCell>1,000.520</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-5.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Maker MKR</span>
                      </div>
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-6.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Uniswap UNI</span>
                      </div>
                    </TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-7.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">
                          Chainlink Token UNI
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-8.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Ribbon RBN</span>
                      </div>
                    </TableCell>
                    <TableCell>350</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-9.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">INU SHIB</span>
                      </div>
                    </TableCell>
                    <TableCell>3800</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium p-2">
                      <div className="flex gap-1 items-center">
                        <img
                          src="../Images/coin-10.png"
                          alt=""
                          className="md:w-10 md:h-10 rounded-full w-7 h-7"
                        />
                        <span className="md:text-sm text-xs">Token LDO</span>
                      </div>
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell className="text-right text-sm">$8,750</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <nav aria-label="Page navigation example" className="text-center">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-orange-600 border-gray-300 rounded-s-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowLeft />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300  hover:bg-orange-400 hover:text-orange-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600 border-gray-300 rounded-e-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowRight />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* table - 2 */}
            <div>
              <h1 className="text-2xl font-bold mb-5">Recent Activity</h1>
              <div className="overflow-hidden mb-5">
                <Table className="md:w-full w-400 ">
                  <TableBody>
                    <TableRow className="border-0 ">
                      <TableCell className="md:w-32 w-24">
                        <div className="flex items-center relative">
                          <img
                            src="../Images/coin-7.png"
                            alt=""
                            className="md:w-10  md:h-10 w-8 h-7 absolute md:left-0 z-40 rounded-full"
                          />
                          <img
                            src="../Images/coin-1.png"
                            alt=""
                            className="md:w-10  md:h-10  w-8 h-7 absolute md:left-6 left-6 z-30 rounded"
                          />
                          <p className="bg-amber-900 rounded-full p-1 md:h-6 h-5 absolute md:left-14 left-12 z-40  -top-1">
                            <RxLoop className=" text-orange-600 " />
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center pe-0">
                        <p className="font-bold md:text-sm text-xs">Swapped</p>
                        <p className="md:text-sm text-xs">
                          20 LINK For 0.1074 ETH
                        </p>
                      </TableCell>
                      <TableCell className="md:w-28 w-24">
                        <p className="md:text-sm text-xs">03/19/23</p>
                        <p className="float-end text-orange-500 md:text-sm text-xs">
                          <LuArrowUpRight />
                        </p>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-0">
                      <TableCell className="md:w-32">
                        <div className="flex items-center relative">
                          <img
                            src="../Images/coin-11.jfif"
                            alt=""
                            className="rounded-full md:w-10  md:h-10  w-8 h-8  absolute left-0 z-10"
                          />
                          <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5 absolute left-7 z-20 -top-1">
                            <HiOutlineArrowNarrowDown className=" text-orange-600" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center pe-0">
                        <p className="font-bold md:text-sm text-xs">Received</p>
                        <p className="md:text-sm text-xs">
                          NFT From mutant.ens
                        </p>
                      </TableCell>
                      <TableCell className="md:w-28 w-24">
                        <p className="md:text-sm text-xs">03/19/23</p>
                        <p className="float-end text-orange-500 md:text-sm text-xs">
                          <LuArrowUpRight />
                        </p>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-0">
                      <TableCell className="md:w-32">
                        <div className="flex items-center relative">
                          <img
                            src="../Images/coin-2.png"
                            alt=""
                            className="rounded-full md:w-10  md:h-10  w-8 h-8 absolute left-0 z-10"
                          />
                          <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5 absolute left-7 z-20 -top-1">
                            <CgArrowUp className=" text-orange-600" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center pe-0">
                        <p className="font-bold md:text-sm text-xs">
                          Transferred
                        </p>
                        <p className="md:text-sm text-xs">
                          WBTC to 0x6584...BD68
                        </p>
                      </TableCell>
                      <TableCell className="md:w-28 w-24">
                        <p className="md:text-sm text-xs">03/19/23</p>
                        <p className="float-end text-orange-500 md:text-sm text-xs">
                          <LuArrowUpRight />
                        </p>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-0">
                      <TableCell className="md:w-32">
                        <div className="flex items-center relative">
                          <img
                            src="../Images/coin-6.png"
                            alt=""
                            className="rounded-full md:w-10  md:h-10  w-8 h-8  absolute left-0 z-10"
                          />
                          <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5 absolute left-7 z-20 -top-1">
                            <TbArrowFork className=" text-orange-600" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center pe-0">
                        <p className="font-bold md:text-sm text-xs">Bridged</p>
                        <p className="md:text-sm text-xs">
                          Ethereum to polygon
                        </p>
                      </TableCell>
                      <TableCell className="md:w-28 w-24">
                        <p className="md:text-sm text-xs">03/19/23</p>
                        <p className="float-end text-orange-500 md:text-sm text-xs">
                          <LuArrowUpRight />
                        </p>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-0">
                      <TableCell className="md:w-32">
                        <div className="flex items-center relative">
                          <img
                            src="../Images/coin-1.png"
                            alt=""
                            className="rounded-full md:w-10  md:h-10  w-8 h-7 absolute md:left-0 z-40 "
                          />
                          <img
                            src="../Images/coin-12.jfif"
                            alt=""
                            className="rounded-full md:w-10  md:h-10 w-8 h-7 absolute md:left-6 left-6 z-30"
                          />
                          <span className="bg-amber-900 rounded-full p-1 md:h-6 h-5 absolute md:left-14 left-12 z-40  -top-1">
                            <RxLoop className=" text-orange-600" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center pe-0">
                        <p className="font-bold md:text-sm text-xs">Swapped</p>
                        <p className="md:text-sm text-xs">
                          1 ETH to 3,500 USDC
                        </p>
                      </TableCell>
                      <TableCell className="md:w-28 w-24">
                        <p className="md:text-sm text-xs">03/19/23</p>
                        <p className="float-end text-orange-500 md:text-sm text-xs">
                          <LuArrowUpRight />
                        </p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <nav aria-label="Page navigation example" className="text-center">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-orange-600 border-gray-300 rounded-s-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowLeft />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600  border-gray-300 hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300  hover:bg-orange-400 hover:text-orange-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-orange-600 border-gray-300 rounded-e-lg hover:bg-orange-400 hover:text-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <AiOutlineArrowRight />
                    </Link>
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
