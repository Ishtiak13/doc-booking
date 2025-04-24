export const getBookedDoctor=()=>{
const bookedDoctorStr = localStorage.getItem('doctorsListId')
if (bookedDoctorStr){
     const bookedDoctor = JSON.parse(bookedDoctorStr)
     return bookedDoctor
}
else{
    return []
}
}

export const addDoctor=(id)=>{
    const bookedDoctor = getBookedDoctor()
    if (bookedDoctor.includes(id)){
        return false
    }
    else{
        bookedDoctor.push(id)
        const data = JSON.stringify(bookedDoctor)
        localStorage.setItem('doctorsListId',data)
        return true
    }
}
export const deleteDocData =(id)=>{
    const bookedDoctor = getBookedDoctor()
    const newBookedDoctor = bookedDoctor.filter(doc => doc!==id) 
    const data = JSON.stringify(newBookedDoctor)
    localStorage.setItem('doctorsListId',data)
}