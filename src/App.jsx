import { useGlobalContext } from "./context";

const App = () => {
  const {isSidebarOpen} = useGlobalContext()

  console.log(isSidebarOpen); // true if sidebar
  return <h2>Strapi Starter</h2>;
};
export default App;
