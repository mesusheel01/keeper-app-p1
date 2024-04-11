const Footer = ()=>{
    const d = new Date();
    const year = d.getFullYear();
    return (
        <>
            <div  className="footer">
                <p>Copyright @{year}</p>
            </div>
        </>
    )
}
export default Footer;