import list from'./Content.json';
import Card from './card';
import Footer from './footer';
import './main.css';

const Main = () =>{
    return(
        <>
        <div className="mainContainer">
        {
        list.map((content)=>{
          return<Card
          cotation={content.Details}
          name={content.Name}
          />
        })
      }
      <Footer/>
        </div>
       
        </>
    )
}

export default Main;