import "./App.css";
import Header from "./components/Header/Header";
import LinkSection from "./components/LinkSection/LinkSection";
import Body from "./components/WorkExp/WorkExp";
import Education from "./components/Education/Education";

function App() {
  // Yes it looks messy, I came across a problem and time was running short, USUALLY you want to keep your logic separate from the code.
  // I did want to show passing props to a child react element.

  const WorkExp = {
    position: "Freelancer",
    role: "Web Developer",
    tasks: {
      taskOne:
        "- Coordinated meetings and Independently designed, researched, and create web applications for clients.",
      taskTwo:
        "- Built websites for clients using HTML, CSS, JavaScript also full-stack web apps with Node JS, Express JS, React JS, and MongoDB.",
      taskThree:
        "- Increased client's SEO (Search Engine Optimization) to product search and sales by 10%.",
      taskFour:
        "- Utilized Agile framework to have successful outcomes. Planning, Development, Testing, and Production.",
      taskFive: "- Active web penetration tester on HackerOne platform.",
      taskSix:
        "- Implemented custom JavaScript code for clients on no-code platforms",
    },
    skills: [
      "JavaScript",
      "Python",
      "Restful API",
      "Git | Github",
      "MySQL | SQL | NoSQL",
      "MongoDB | Mongoose",
      "Object-oriented programming",
      "Kali Linux | Windows Terminal",
      "OWASP Top 10",
      "Web Application Penetration",
      "Fundamental Computer Skills",
      "Self-motivated",
      "Leadership and Collaboration Skills",
    ],
  };

  const education = {
    education: {
      school1: {
        bootCamp: "Web Develpoment Bootcamp",
        teacher: "London App brewery ",
        task1:
          "- Experienced coding Bootcamp with an extensive background in various coding languages",
        task2:
          "- Professional strengths include creative problem-solving, written and verbal communication with a detailed oriented mindset",
        task3:
          "- Develop mobile applications, and built full-stack web apps from the ground up",
        task4:
          "- Planned website development, converting mockups into usable web presence with the newest technologies like MERN ( MongoDB, ExpressJS, ReactJS, NodeJS ) Stack",
      },
      school2: {
        bootCamp: "Ethical Hacking",
        teacher: "zSecurity",
        task1:
          "- Experience in Networking, Ethernet, web security, firewall, web proxies, and VPN",
        task2:
          "- Designed tests and tools to break into security-protected applications and networks to probe for vulnerabilities",
        task3:
          "- Penetration testing Tools: Metasploit, Burp Suite, SqlMap, Aircrack-ng, dirbuster, Nmap, and Wireshark among others",
        task4: "- Crack WEP/WPA/WPA2 encryptions using several hacking methods",
      },
    },
  };

  return (
    <div className="App">
      <Header />
      <LinkSection />
      <Body {...WorkExp} />
      <Education {...education} />
    </div>
  );
}

export default App;
