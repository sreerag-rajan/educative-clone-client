
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';

export const Text = ()=>{
    return(
        <div className="CheckoutText">
            <h1>Accelerate your career with a 7‑day Educative trial</h1>
            <div>
                <MenuBookOutlinedIcon sx={{color:"#5553ff"}}/>
                <h2>Access 340+ courses (and counting)</h2>
                <p>Your free trial grants access to some of our most popular courses for front-end, back-end, cloud computing, and security. Please note that our interview prep courses are excluded, but you can enjoy access to hundreds of other courses!</p>
            </div>
            <div>
                <TerminalOutlinedIcon sx={{color:"#5553ff"}}/>
                <h2>Learn by doing</h2>
                <p>Gets your hands dirty with in-browser coding exercises, playgrounds, and assessments. Build real projects you can add to your portfolio.</p>
            </div>
            <div>
            <svg width="48" height="48" fill="#5553ff" xmlns="http://www.w3.org/2000/svg" className="fill-current"><g clipPath="url(#awardIcon)" fillRule="evenodd" clipRule="evenodd" fill="#5553ff"><path d="M24 14a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1116 0 8 8 0 01-16 0z"></path><path d="M27.659 24.889a1 1 0 011.122.86l1.21 9.12a1 1 0 01-1.506.989L24 33.166l-4.485 2.692a1 1 0 01-1.506-.99l1.21-9.11a1 1 0 011.982.264l-.936 7.053 3.22-1.933a1 1 0 011.03 0l3.22 1.933-.936-7.064a1 1 0 01.86-1.122z"></path></g><defs><clipPath id="awardIcon"><path fill="#fff" transform="translate(12 12)" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                <h2>Get completion certificates</h2>
                <p>Built in assessments let you test your skills. Completion certificates let you show them off.</p>
            </div>
            <div>
            {/* <svg width="48" height="48" fill="current" xmlns="http://www.w3.org/2000/svg" className="stroke-current"><path d="M21.333 26.667L24 24l-2.667 2.667zM24 24l2.667-2.667L24 24zm0 0l-2.667-2.667L24 24zm0 0l2.667 2.667L24 24zm12 0a12 12 0 11-24.002 0A12 12 0 0136 24z" stroke="current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                <HighlightOffIcon sx={{color:"#5553ff"}}/>
                <h2>Cancel any time</h2>
                <p>Prefer not to continue? No problem. Cancel any time to stop future charges.</p>
            </div>
            
        </div>
    )
}