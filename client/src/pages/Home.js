
import './Home.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PropertyList from '../components/PropertyList';
import Explore from '../components/Explore';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
const Home=()=>{
    
    //  const list=[
    // //     {
    // //         city:"Goa",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
    // //     },
    // //     {
    // //         city:"New Delhi",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
    // //     },
        
    // //     {
    // //         city:"Mumbai",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
    // //     },
    // //     {
    // //         city:"Bangalore",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
    // //     },
    // //     {
    // //         city:"Hyderabad",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684653.webp?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
    // //     },
    // //     {
    // //         city:"Pune",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o="
    // //     },
    // //     {
    // //         city:"Jaipur",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
    // //     },
    // //     {
    // //         city:"Lonavala",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o="
    // //     },
    // //     {
    // //         city:"Udaipur",
    // //         places:"123 places",
    // //         images:"https://t-cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
    // //     },
        
        
        
    //    ]
   
    return(
        <div>
            <Navbar/>
            <Header/>
            {/* <Offer/> */}
            <Explore/>
            <PropertyList />
            {/* {list.map((item)=><Inspiration images={item?.images}/>)} */}
            <MailList/>
            <Footer/>
        </div>
    );
}
export default Home;
