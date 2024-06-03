import paitentImage from "../assets/commonProcedure.png"
const CommonProcdure = () => {
    return (
        <div className="bg-[#E1FFDA] flex  max-xs:p-5  max-xs:flex-col-reverse xs:p-10 w-full  max-xs:mt-[50px] sm:mt-[150px] lg:mt-[200px]  lg:h-[550px]  justify-around items-center ">
            <div>
                <h1 className=" text-2xl max-xs:mb-[20px] max-xs:mt-[50px] text-xl xs:mb-10 font-bold font-readex capitalize ">
                    Common Procedure
                </h1>
                <ul className=" text-lg max-xs:text-sm font-readex text-gray-800 list-disc ">
                    <li>Personal care (bathing, dressing, grooming)</li>
                    <li>Mobility assistance (transferring, walking)</li>
                    <li>Medication reminders and administration</li>
                    <li>Meal preparation and feeding</li>
                    <li>Companionship and emotional support</li>
                </ul>
            </div>
            <div className="">
                <img src={paitentImage} className="max-h-[400px]" alt="" />
            </div>
        </div>
    )

}
export default CommonProcdure;