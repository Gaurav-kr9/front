import { useStates} from " react";
const Pricing = () => {
  
    const [isYearly, setISYearly] = useState(false);

    const packages = [ 

        {name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common form of lorem ipsum reads: loererm ipsum dolor sit amet, consectetur adipiscing elit"},
        {name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "A common form of lorem ipsum reads: loererm ipsum dolor sit amet , consectetur adipiscing elit"},
        {name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A common form of lorem ipsum reads: loererm ipsum dolor sit amet, consectetur adipiscing elit"},

    ]
    return (
        <div className=" md:px-14 p-4 max-w-s mx-auto py-10">
       <div className="text-center">
        <h2 className=" md:text-5xl text-3xl front-extrabold text-primary mb-2">Here are all our plans</h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">Another smiple paragraph which describes
         the pricing and their benefits</p>
         {/*  toggle pricing*/}
         <div className="mt-16">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                <span className="mr-8 text-2xl font-semibold">Monthly</span>
                <div></div>
                <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>

             </div>
           </div>
        </div>
    );
};

export default Pricing;