import React, { useState, useEffect } from "react";
import Newsi from "./newsitems";
import Imagee from "./loading.gif";
import InfiniteScroll from "react-infinite-scroll-component";
// import FallbackImg from "./img.jpg";
import { BsListColumnsReverse } from "react-icons/bs";
import { LuTableOfContents } from "react-icons/lu";




const News = (props) => {
  const [articles, setArticale] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, Settotalpages] = useState(0);

  const [active , setactive] = useState(true);

  
  const { category, Progress } = props;


  



  useEffect(() => {


    const update = async () => {
      Progress(20);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b58ec09a688d48c39a0b9d8451fe8b83&page=1&pageSize=7`;
      let data = await fetch(url);
      Progress(40); 
      let parsedData = await data.json();
  
      Progress(60);
      setArticale(parsedData.articles);
      Settotalpages(parsedData.totalResults);
  
      Progress(100);
    };
  
   
    update();

  }, [ category  || Progress[0]]);  
  

  console.log(totalPages)
  const fetchData = async () => {
    let nextpage = page + 1;
    setPage(nextpage);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b58ec09a688d48c39a0b9d8451fe8b83&page=${nextpage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticale(articles.concat(parsedData.articles));
    setLoading(false);
  };

  const character = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 let filtered ;


  
      
      filtered = articles.filter((elements) => elements.title?.toLowerCase().includes(props.valuesinput.toLowerCase()) )

      

  return (
    <div className="container" style={{ marginTop: "90px", marginBottom: "40px" , fontFamily:'Poppins'}}>
      <h3 className="text-center">
        NewsMonkey - Top {character(props.category)} Headlines
      </h3>
<div className="buttonscontainer">
       <span style={{margin:"0px 20px 0px 0px" , fontSize:"13px", color:"gray"}} >{filtered.length > 0 ?  filtered.length:filtered.length === 0 ? filtered.length : articles.length} News</span>
      <button onClick={() => {props.toggle("column"); setactive(true)}} className="butons" style = {active ? { color:"black"} : {color:"gray", background:"none"} }>
        <BsListColumnsReverse/>
      </button>
      <button
        onClick={() => {props.toggle("table"); setactive(false)}}
        className="ms-2 butonss"  style={ !active ? { color:"black"}:{color:"gray",background:"none"}}>
        <LuTableOfContents/>
      </button>
      </div>
      <div className="container d-flex justify-content-center"></div>

      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={true}
          loader={
            loading && (
              <img
                className="mx-auto "
                src={Imagee}
                alt="loading"
                style={{ width: "20px", height: "20px", display:"flex", alignItems:"center", justifyContent:"center", marginTop:"5px" }}
              />
            )
          }
        >
          <div className="container">
            <div className="row mt-[-10px] ">
            {props.view === "column" ? (
  <>
    {props.valuesinput === "" ? (
      articles.map((elements, index) => (
        <div className="col-lg-4 mt-3" key={index}>
          <Newsi
            title={elements.title ? elements.title.slice(0, 19) : ""}
            description={
              elements.description ? elements.description.slice(0, 20) : ""
            }
            imageUrl={
              elements.urlToImage
                ? elements.urlToImage
                : "./img.jpg"
            }
            url={elements.url}
            author={elements.author}
            date={elements.publishedAt}
            source={elements.source.name}
            view={props.view}
          />
        </div>
      ))
    ) : filtered && filtered.length > 0 ? (

    
    
       
        filtered.map((elements, index) => (
          <div className="col-lg-4 mt-3" key={index}>
            <Newsi
              title={elements.title ? elements.title.slice(0, 19) : ""}
              description={
                elements.description ? elements.description.slice(0, 88) : ""
              }
              imageUrl={
                elements.urlToImage
                  ? elements.urlToImage
                  : "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7"
              }
              url={elements.url}
              author={elements.author}
              date={elements.publishedAt}
              source={elements.source.name}
              view={props.view}
            />
          </div>
        ))


    ) : (null)
      
      
    }
  </>
) : (
  <div className="container-fluid">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Source</th>
          <th scope="col">Description</th>
          <th scope="col">Link</th>

        </tr>
      </thead>
     
      <tbody>
      { props.valuesinput === ""  ? (

        articles.map((elements , index) => 
        
        <Newsi
        
        indexx = {index}
        title={elements.title ? elements.title.slice(0, 19) : ""}
        description={
          elements.description ? elements.description.slice(0, 88) : ""
        }
        imageUrl={
          elements.urlToImage
            ? elements.urlToImage
            : "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7"
        }
        url={elements.url}
        source={elements.source.name}
        
        />
        
        )


      ) :  filtered.length > 0  ? (

        filtered.map((element , index) => 

        <Newsi     
        
        indexx = {index}
        title={element.title ? element.title.slice(0, 19) : ""}
        description={
          element.description ? element.description.slice(0, 88) : ""
        }
        imageUrl={
          element.urlToImage
            ? element.urlToImage
            : "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7"
        }
        url={element.url}
        source={element.source.name}
        />
        
        )
      ) : (null)
    
    }
    
      </tbody>
    </table> 
    </div>
)}

{props.valuesinput !== "" && filtered.length ===  0  && (

     <div style={{display:"flex", alignItems:"center", justifyContent:"center" , marginTop:"10%"}}>
      <p>No Found News</p>
     </div>
)}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default News;
