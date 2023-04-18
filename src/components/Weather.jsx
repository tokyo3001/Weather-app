import { ImLocation2 } from 'react-icons/im'
import { HiCalendarDays } from 'react-icons/hi2'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCalendarDate, BsSun, BsSunrise, BsFillCloudsFill, BsSunset} from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const Weather = ({ weatherData }) => {
    return (
        <div className="text-white font-thin">
            <div className="lg:text-5xl text-3xl flex justify-center">
                {weatherData.main.temp}&deg;C
                <button onClick={refresh}>
                    <BiRefresh size={25} className='lg:ml-3 ml-8'/>
                </button>
            </div>
            <div className="flex justify-center mt-4 text-xl lg:text-3xl">
                <ImLocation2 className='mt-1 mr-2' size={30}/>
                {weatherData.name}
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:pl-28 lg:gap-8 lg:text-3xl text-xl mt-20 '>
                <div className='flex'> 
                    <HiCalendarDays className='mr-2 mt-1'/>
                    {moment().format('dddd')}
                </div>
                <div className='flex'>
                    <AiOutlineClockCircle className='mt-1 mr-2'/>
                    {moment().format('LT')}</div>
                <div className='flex'>
                    <BsCalendarDate className='mr-3 mt-1'/>
                    {moment().format('LL')}
                </div>
                <div className='flex'>
                    {(weatherData.weather[0].main === "Clear") ? <BsSun className='mt-1 mr-2'/> : <BsFillCloudsFill className='mt-1 mr-2'/>}
                    {weatherData.weather[0].main}
                </div>
                <div className='flex'>
                    <BsSunrise className='mr-2 mt-1'/>
                    {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                </div>
                <div className='flex'>
                    <BsSunset className='mr-2 mt-1'/>
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                </div>

            </div>
        </div>
    )
}

export default Weather;