import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;