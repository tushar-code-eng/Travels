
const LpPassangerDetails = () => {
    return (
        <div className="hidden md:block w-full">
            <div className=" w-[85%] m-auto flex justify-between my-4  min-h-[550px]  ">
                <div className="w-[40%] rounded-lg border-2 shadow-md">
                    <div className="h-[225px] ">
                        <div className="px-4 py-2 border-b-2 text-center text-xl font-semibold">
                            Fare Details
                        </div>
                        <div className=" h-full overflow-auto">
                            <div className="flex justify-between py-2 px-4 font-medium">
                                <div>
                                    Sleeper
                                </div>
                                <div>
                                    Price
                                </div>
                            </div>
                            <div className="flex justify-between py-2 px-4">
                                <div className="">
                                    Sleeper 1
                                </div>
                                <div>
                                    ₹ Price 1
                                </div>
                            </div>
                            <div className="flex justify-between py-2 px-4">
                                <div className="">
                                    Sleeper 2
                                </div>
                                <div>
                                    ₹ Price 2
                                </div>
                            </div>
                            <div className="border-b-2 border-black"></div>
                            <div className=" flex justify-between py-2 px-4">
                                <div>
                                    Amount to be paid
                                </div>
                                <div className="font-bold">
                                    ₹ Total Price
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="px-4 py-2 border-y-2 mt-1 text-center text-xl font-semibold">
                            Booking Details
                        </div>
                        <div className="flex px-4 py-2">
                            <div className="h-40 mt-2 w-2 bg-slate-300 flex flex-col items-center justify-between">
                                <div className="w-2 h-2 bg-black rounded-[50%]">
                                </div>
                                <div className="w-2 h-2 bg-black rounded-[50%]">
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between h-44 px-4">
                                <div>
                                    Pickup location
                                </div>
                                <div>
                                    Dropoff location
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[59%] rounded-lg border-2 shadow-md">
                    <div className="h-[225px]">
                        <div className="px-4 py-2 border-b-2 text-center text-xl font-semibold">
                            Passangers Detail
                        </div>
                        <div className="h-full overflow-auto">
                            <div className="flex px-5 py-2 justify-between items-center gap-2">
                                <div className="border-2 w-[10%]  flex justify-center rounded-lg py-2 px-3">
                                    A-1-2
                                </div>
                                <input className="border-2 w-[45%] py-2 px-3 rounded-lg" type="text" placeholder="Name" />
                                <input className="border-2 py-2  px-3 w-[10%] rounded-lg" type="text" placeholder="age" />
                                <select
                                    id="gender"
                                    name="gender"
                                    className=" border-2 cursor-pointer w-[35%] appearance-none rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="h-[225px]">
                        <div className="px-4 py-2 border-y-2 text-center text-xl mt-1 font-semibold bg-white">
                            Contact Details
                        </div>
                        <div className="w-full flex justify-items-start items-center px-5 py-2 gap-2">
                            <input className="border-2 w-[8%] py-2 px-3 rounded-lg" type="text" placeholder="+91" />
                            <input className="border-2 w-[40%] py-2 px-3 rounded-lg" type="text" placeholder="0987654321" />
                            <input className="border-2 w-[52%] py-2 px-3 rounded-lg" type="email" placeholder="tusahrbajaj10@gmail.com" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <button className="px-6 py-3 font-semibold text-white bg-yellow-500 rounded-lg">
                            Proceed To payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpPassangerDetails
