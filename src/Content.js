import { useState, useEffect } from "react";


function Environment(){
    const [datas , setDatas] = useState([])
    useEffect(()=>{
        var timeInterval = setInterval(()=> {
            fetch('https://script.googleusercontent.com/macros/echo?user_content_key=YQK9LtKCqWzfWxEZS4yBHU6oK9vr3jeV9W8hNYqOZaaGY9iZJbfSs36mrtKY21Fj_Apli0u-gdig5_7jBFKRcpG0YtgKgFnam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMh90SE_5ACxeUS-K6Pdx5IMAHTLwtYz_jkuMI23kEhdAlMrSqGUwuaFAkdbhKnImdkkFsls4EtwS7P3LY5o6g2dJoCw8JvXDg&lib=MKLUvnhdo0fK-hVIrxguZTwMAFukrRMww')
            .then(response => response.json())
            .then(newData => {setDatas(newData.data)
            })
            .catch(error => {console.log(error)} )
        } , 60000)
        return ()=>{clearInterval(timeInterval)} 
       
    }, [])

    console.log(datas)
    return <div>{
        datas.map((data) => <p key={data.time}>{data.temperature}</p>)
        }</div>
}

export default Environment


