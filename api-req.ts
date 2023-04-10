/**
 * Example Proxy Space API usage
 */
import axios from "axios";

type ApiResponse = {
    asn_number: number,
    asn_organization: string,
    city: string,
    country: string,
    country_code: string,
    ip: string,
    latitude: number,
    longitude: number,
    postal_code: string,
    time_zone: string
}

const req = (ip: string) => {
    let now = performance.now()
    axios.get(`https://geo.proxyspace.pro/ip${ip ? +'/'+ ip : '/'}`, {
        headers: {
            'Content-Type': "application/json"
        }
    }).then((ctx) => {
        if(ctx.status >= 200 && ctx.status <= 399){
            let end = performance.now()
            let bd: ApiResponse = ctx.data

            console.log(ctx.statusText)
            console.log(bd)
            console.log('Speed ' +Number(end - now).toFixed(2) +" MS")

        } else console.log(ctx.statusText)
    })
}
req(process.argv[2])
