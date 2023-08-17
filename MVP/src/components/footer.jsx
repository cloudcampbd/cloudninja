import '../styles/custom.css';

export default function Footer(props) {
    return (
        <footer id="f" className="custom-main-footer" style={{backgroundColor: props?.backgroundColor}}>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                <img className="img" src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="AWS"/>
                <div className="disclaimer">
                  <strong>
                    The RetailStore is a demo application. All content displayed in the RetailStore is fictitious and for demonstration purposes only.<br/>
                    All images shown are from Unsplash.</strong>
                </div>
            </div>
        </footer>
    );
}