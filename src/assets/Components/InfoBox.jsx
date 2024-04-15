import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Wind from '../img/wind.png';
import humidity from '../img/humidity.png';
import cloudIcon from '../img/cloud.png';
import CountryFlag from './CountryFlag';

export default function InfoBox({ info }) {

    let image = "https://images.unsplash.com/photo-1699933486971-bcbc02b03ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D";
    let Rain = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";
    let Cold = "https://images.unsplash.com/photo-1581196607303-95c00f31c676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Hot = "https://images.unsplash.com/photo-1549849171-09f62448709e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VufGVufDB8fDB8fHww";
    return (
        <div className='flex justify-center'>
            <Card sx={{ maxWidth: 900 }}>
                <CardMedia
                    sx={{ height: 200, width: 700 }}
                    image={info.humidity > 80 ? Rain : info.temp > 15 ? Hot : Cold}
                    title="green iguana"
                />
                <CardContent>
                    <div className="flex items-center justify-between">
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <span className='text-[2rem] font-bold flex items-center gap-1'>
                                {info.city}
                                <CountryFlag country={info.country} />
                            </span>
                            <p className='ms-1'>{info.temp}&deg;C</p>
                            <p className='ms-1'>{info.tempMin}&deg;C</p>
                            <p className='ms-1'>{info.tempMax}&deg;C</p>
                        </Typography>
                        <div className="flex justify-evenly gap-4">
                            <Card sx={{ maxWidth: 345, height: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        width="60"
                                        image={Wind}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Wind Speed
                                        </Typography>
                                        <Typography gutterBottom variant="p" component="div">
                                            {info.windSpeed} m/s
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, height: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        width="60"
                                        image={humidity}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {info.humidity}
                                        </Typography>
                                        <Typography gutterBottom variant="p" component="div">
                                            Humidity
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, height: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        width="60"
                                        image={cloudIcon}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Cloud
                                        </Typography>
                                        <Typography gutterBottom variant="p" component="div">
                                            {info.weather}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
