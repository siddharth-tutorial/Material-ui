import { Container, Grid } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Blogpost from "./Components/Blogpost";
import Footer from "./Components/Footer";
import ProductLists from "./ProductLists";

function App() {
  const products = [
    {id:1, name:'product1', price:10},
    {id:2, name:'product2', price:20},
    {id:3, name:'product3', price:30},
  ]
  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Blogpost title="How to Create a Blog in React" 
            image="https://avatars.mds.yandex.net/i?id=c94035ecd7133453b747305d846d61603e5ec37aff5115f7-12520451-images-thumbs&n=13"
            content="This is a sample content of the blog post. You can add more content here to explain your blog post in detail."
            />
             <Blogpost
              title="Top React Tips and Tricks"
              image="https://avatars.mds.yandex.net/i?id=28d42c65833c4e175ef6901bebd0ac77c4441025-5206243-images-thumbs&n=13"
              content="In this blog, we will discuss some of the best tips and tricks for React development."
            />
          </Grid>
        </Grid>
      </Container>
      <Footer/>

      
      <div style={{margin: "5px"}}>
        <h2 style={{color:"green"}}>Reusable Components</h2>
        <ProductLists products= {products} />
         </div>
    </div>
  );
}

export default App;
