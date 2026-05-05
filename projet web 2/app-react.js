const { useState, useEffect, useRef } = React;

const ChatBot = () => {
    const [messages, setMessages] = useState([{ type: 'bot', text: "Hey! 👋 I'm your AI assistant. Ask me anything or pick a quick question." }]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

    const quickQuestions = [
        { q: "Who are you?", a: "I'm a Junior Full-Stack Developer specialized in React & Laravel." },
        { q: "Tell me about your skills", a: "I build responsive, high-performance web apps using modern tech." },
        { q: "What projects?", a: "I've built several apps, from 3D portfolios to E-commerce solutions." }
    ];

    const ask = (txt, reply) => {
        if (!txt.trim()) return;
        setMessages(prev => [...prev, { type: 'user', text: txt }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: reply || "Interesting! That sounds like a cool challenge." }]);
        }, 600);
    };

    return (
        <div className="chat-box" id="chatBox">
            <div className="chat-header"><div style={{fontWeight:700, fontSize:'1rem'}}>Ali Assistant</div></div>
            <div className="chat-messages">
                {messages.map((m, i) => <div key={i} className={`msg ${m.type}`}>{m.text}</div>)}
                <div ref={endRef} />
            </div>
            <div className="quick-questions">
                {quickQuestions.map((qq, i) => (
                    <div key={i} className="q-chip" onClick={() => ask(qq.q, qq.a)}>{qq.q}</div>
                ))}
            </div>
            <div className="chat-footer">
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && ask(input)} placeholder="Pose ta question..." />
                <button onClick={() => ask(input)} style={{background:'var(--primary)', border:'none', borderRadius:'10px', padding:'0 15px'}}><i className="fas fa-paper-plane" style={{color:'#000'}}></i></button>
            </div>
        </div>
    );
};
const ProjectCard = ({ title, desc, tech, link, img }) => {
    const handleVisit = (e) => {
        // كنقولو لـ Swiper ميسوقش لهاد الكليكة
        e.stopPropagation();
        if (link && link !== "#") {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="project-card">
            <div className="project-img-wrapper">
                <img src={img} alt={title} className="project-img" />
                <div className="project-overlay">
                    {/* زدنا onClick هنا وهاد الزر دابا غيخدم بزز من Swiper */}
                   <button 
    onMouseDown={handleVisit} // استعمل onMouseDown هنا
    className="visit-btn" 
    style={{cursor: 'pointer'}}
>
    <i className="fas fa-external-link-alt"></i> View Project
</button>
                </div>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tech">
                    {tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    useEffect(() => {
      
    const swiper = new Swiper(".mySwiper", {

        touchStartPreventDefault: false,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // هاد الجوج مهمين باش الكليك يخدم
    preventClicks: false,
    preventClicksPropagation: false,
    slideToClickedSlide: true, 
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    observer: true,
    observeParents: true,
    watchSlidesProgress: true
});
VanillaTilt.init(document.querySelectorAll(".futuristic-card"), {
    max: 15, // درجة العوجاج القصوى
    speed: 400, // سرعة الحركة
    glare: true, // تفعيل تأثير اللمعان (بحال الدجاج)
    "max-glare": 0.2, // درجة اللمعان
});
        // Particles
        tsParticles.load("tsparticles", {
            particles: { number: { value: 60 }, move: { enable: true, speed: 0.6 }, links: { enable: true, opacity: 0.1 }, size: { value: 1 } }
        });

        // VanillaTilt
        VanillaTilt.init(document.querySelectorAll(".profile-img"), {
            max: 10, speed: 500, glare: true, "max-glare": 0.3
        });
    }, []);

    return (
        <div>
            <section id="about" className="hero">
                <div className="hero-content">
                    <h1>I Build <span>Scalable</span> Web Solutions</h1>
                    <p>Computer Science student (L2). I create modern and visually appealing web interfaces using React and jQuery.</p>
                    <button className="main-btn">MES PROJETS</button>
                    <button className="main-btn"><a href="#contact">Contact</a></button>
                    <p>Email: <a href="mailto:elguena2623@uca.ac.ma">elguena2623@uca.ac.ma <i className="fa-solid fa-envelope"></i></a></p>
                </div>
                <div className="profile-container">
                    <img src="AB.jpeg" className="profile-img" alt="Ali" />
                </div>
            </section>


<section id="skills">
    <h2>My Skills</h2>
    <div className="skills-container-futuristic">
        
        {/* Card 1: React */}
        <div className="futuristic-card" data-tilt>
            <div className="card-number">01</div>
            <div className="card-content">
                <div className="tech-icon-hex">
                    <i className="devicon-react-original colored"></i> {/* أيقونة React */}
                </div>
                <h3>React JS</h3>
                <p>Component-based, Hooks, Context API</p>
                
                <div className="level-container">
                    <span>Level:</span>
                    <span className="percent">85%</span>
                    <div className="progress-bar-futu">
                        <div className="progress-fill-futu" data-per="85%" style={{width: '0%', background: '#61DBFB'}}></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 2: JavaScript & jQuery */}
        <div className="futuristic-card" data-tilt>
            <div className="card-number">02</div>
            <div className="card-content">
                <div className="tech-icon-hex">
                    <i className="devicon-javascript-plain colored"></i> {/* أيقونة JS */}
                </div>
                <h3>JS & jQuery</h3>
                <p>DOM Manipulation, AJX, jQuery Effects</p>
                
                <div className="level-container">
                    <span>Level:</span>
                    <span className="percent">90%</span>
                    <div className="progress-bar-futu">
                        <div className="progress-fill-futu" data-per="90%" style={{width: '0%', background: '#F7DF1E'}}></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 3: HTML & CSS */}
        <div className="futuristic-card" data-tilt>
            <div className="card-number">03</div>
            <div className="card-content">
                <div className="tech-icon-hex">
                    <i className="devicon-html5-plain colored"></i> {/* أيقونة HTML */}
                </div>
                <h3>HTML & CSS</h3>
                <p>Semantic HTML, Flexbox, Grid, RWD</p>
                
                <div className="level-container">
                    <span>Level:</span>
                    <span className="percent">95%</span>
                    <div className="progress-bar-futu">
                        <div className="progress-fill-futu" data-per="95%" style={{width: '0%', background: '#E34F26'}}></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
</section>
<section id="projects">
    <h2 className="section-title">My Projects</h2>
    
    {/* Swiper Container */}
    <div className="swiper mySwiper">
        <div className="swiper-wrapper">
            
            <div className="swiper-slide">
               
                <ProjectCard 
                    title="Ourika Valley" 
                    desc="Site web touristique pour la vallée de l'Ourika" 
                    tech={["HTML", "CSS"]} 
                    link="https://aelguena2623-hue.github.io/ourika/ourika.html" 
                    img="p2.png" 
                />
                
            </div>

            <div className="swiper-slide">
                <ProjectCard 
                    title="Futuristic Portfolio" 
                    desc="Description du projet 2" 
                    tech={["JS", "Three.js"]} 
                    link="" 
                    img="p1.png" 
                />
            </div>

            <div className="swiper-slide">
                <ProjectCard 
                    title="Management System" 
                    desc="Description du projet 3" 
                    tech={["PHP", "MySQL"]} 
                    link="#" 
                    img="project3.jpg" 
                />
            </div>

        </div>

        {/* الأسهم ديال الجناب */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        
        {/* النقط ديال التحت */}
        <div className="swiper-pagination"></div>
    </div>
</section>


<section id="abou">
    <h2>About Me</h2>
    <div className="about-card">
        <p className="about-text">
            Currently a <span className="highlight-with-img">
                Computer Science student (L2)
               
            </span>, my journey began in the mountains of <span className="highlight-with-img">
                Ourika (Setti Fatma)
                <img src="aghbalou.jpeg" alt="Ourika" className="hover-img" /> {/* تصويرة أوريكا */}
            </span>, 
            where I obtained my Baccalaureate. I then moved to Marrakesh to pursue my studies at the 
            <span className="highlight-with-img">
                (FSSM) Faculty of Sciences Semlalia 
                <img src="fssm.jpeg" alt="Semlalia" className="hover-img" /> {/* تصويرة السيملالية */}
            </span>, starting with a rigorous year in 
            <strong> MIP</strong> before specializing in Informatics. 
            
            <br/><br/>
            
            Passionate about modern tech, I now focus on building interactive interfaces using 
            <strong> React</strong> and <strong> jQuery</strong>. My goal is to become a proficient 
            <strong> Full-Stack Developer</strong>, combining my solid scientific background with 
            creative software solutions to solve real-world problems.
        </p>
    </div>
</section>




            <section id="formation">
                <h2>Formation</h2>
                <div className="formation">
                    <div className="item">
                        <h3 className="title"><i className="fa-solid fa-graduation-cap"></i> 2024 : Baccalauréat <span className="arrow">+</span></h3>
                        <div className="content">Obtention du baccalauréat scientifique</div>
                    </div>
                    <div className="item">
                        <h3 className="title"><i className="fa-solid fa-graduation-cap"></i> 2025 - 2026 : L2 Informatique <span className="arrow">+</span></h3>
                        <div className="content">Spécialisation en développement web (React, JS, jQuery)</div>
                    </div>
                </div>
            </section>
            

            <section id="contact">
                <h2>Contact</h2>
                <form style={{background:'var(--glass)', padding:'40px', borderRadius:'24px', border:'1px solid var(--border)', maxWidth:'600px'}}>
                    <input type="email" placeholder="Email" required style={{width:'100%', padding:'15px', marginBottom:'20px', background:'#111', border:'1px solid var(--border)', borderRadius:'12px', color:'#fff'}} />
                    <textarea placeholder="Message" rows="5" required style={{width:'100%', padding:'15px', marginBottom:'20px', background:'#111', border:'1px solid var(--border)', borderRadius:'12px', color:'#fff'}}></textarea>
                    <button type="submit" className="main-btn">ENVOYER</button>
                </form>
            </section>

            

            <div className="chat-button"><i className="fas fa-comment-dots"></i></div>
            <ChatBot />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);