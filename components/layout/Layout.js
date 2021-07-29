import Header from "./Header";

function Layout(props) {
  return (
    <div className="App">
      <Header />
      <main className="container">{props.children}</main>
    </div>
  );
}

export default Layout;
