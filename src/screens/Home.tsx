import React from "react";

const Home: React.FC = () => {

    const [url, setUrl] = React.useState<string>('')

    React.useEffect(() => {
        const fetchImageOfTheDay = async () => {
            try {
             const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=WP2E9jSNX6gwUM4Avw8XtPyuneDW9Fv6gTv0TfiC')
             const parsedResponse = await response.json()
             setUrl(parsedResponse.hdurl)
            } catch (error) {
                console.error(error)
            }
    }
    fetchImageOfTheDay()
}, []);

return (
    <>
    <h1>Welcome</h1>
    <img src={url} />
    </>
)}

export default Home;
