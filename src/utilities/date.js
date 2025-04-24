export const getWeekDay =()=>{
    const today = new Date();
const formatWeekDay = today.toLocaleDateString('en-US',{weekday:'long'})
return formatWeekDay
}