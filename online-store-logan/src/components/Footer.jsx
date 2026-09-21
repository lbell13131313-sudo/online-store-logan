import './Footer.css' // allows me to use my custom css styles

function Footer({store_name, email, phone, address}) {
    return (
        <div className="footer">
            <div className="store_info">
                <div>{store_name}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{address}</div>
            </div>
            <div className="footer_buttons">
                <div>About</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Footer;