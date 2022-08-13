import './ytbStyles.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YTBsearch = () => {

    const [video, setvideo] = useState([]);
    const [query, setquery] = useState('');

    useEffect(() => {


    }, [])

    const handleSearch = async () => {
        let res = await axios({
            "method": "GET",
            "url": "https://www.googleapis.com/youtube/v3/search",
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyAIxCny9MNGbPOJQEx8yRF1sQ1OsU1EQHY',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createAT = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;
                    result.push(object)

                })


            }
            setvideo(result)
        }

    }

    return (

        <div className="ytb-search-content">

            <h1>YTB Search</h1>
            <input type="text" placeholder='Search' value={query} onChange={(event) => setquery(event.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>

                            <div className='left'>
                                <iframe width="1264" height="480"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="YTB PLAY VIDEO"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                            </div>
                            <div className='right'>
                                <div className='Title'>
                                    {item.title}
                                </div>
                                <div className='creact-at'>
                                    Creact : {moment(item.createAT).format('DD-MM-YYY HH:mm:ss A')}

                                </div>
                                <div className='author'>
                                    Author : {item.author}

                                </div>
                                <div className='description'>
                                    {item.description}
                                </div>

                            </div>
                        </div>

                    )
                })
            }





        </div>

    )



}


export default YTBsearch;