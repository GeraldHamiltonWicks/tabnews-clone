import { useRef, useState, useEffect } from "react";

const getRandomNumber = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const Home = () => {
    const [hasStarted, setHasStarted] = useState(false);
    
    const backgroundList = [
        '#FFF',
        '#FF00FF', 
        '#00FFFF', 
        '#FF1493', 
        '#7B00FF', 
        '#FF5F1F', 
        '#00FF7F', 
        '#FFD300', 
    ];
    const [background, setBackground] = useState(backgroundList[0]);

    const timeoutRef = useRef(null);

    const GAP = 200;

    useEffect(() => {

        const handleMouseMove = () => {
            if (!hasStarted) return;
            if (timeoutRef.current) return;

            const randomIndex = getRandomNumber(0, backgroundList.length);
            setBackground(backgroundList[randomIndex]);

            timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
            }, GAP);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hasStarted]);

    const audioRef = useRef(null);

    const handlePlaySong = () => {
        if (hasStarted) {
            audioRef?.current?.pause();
        } else {
            audioRef?.current?.play();
        }
        setHasStarted((started) => !started);
    }

    return <div className='home' style={{ background , height: '100%', width: '100%' }}>
    <h1 style={{ textAlign: 'center', padding: '64px' }}>Fala galera do curso.dev, ces tão baoo ??</h1>
    <audio id="player" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" ref={audioRef} loop>
    </audio>
    <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Aperte o play na música: 
        <button style={{ height: '72px', width: '72px' }} onClick={handlePlaySong}>
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src="https://cdn-icons-png.flaticon.com/512/2/2337.png"/>
        </button>
    </h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <img src="https://media.tenor.com/TH3--Xt3MgUAAAAM/ai-chinese-cat-dancing.gif" />
        <img src="https://cdn.dicionariopopular.com/imagens/numero-nove.gif" />
        <img src="https://cdn3.emoji.gg/emojis/17334-cat-dance.gif" />
        <img src="https://www.portaldodog.com.br/wp-content/uploads/2013/11/cachorro-engracado-vidro.gif" />
        <img src="https://i.gifer.com/4MY.gif" />
    </div>


    </div>
};

export default Home;