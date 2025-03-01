import "./App.css";
import Alert from "./components/Alert/alert";
import Button from "./components/Button/button";
import Input from "./components/Input/input";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import TabItem from "./components/Tabs/tabItem";
import Tabs from "./components/Tabs/tabs";
import "./styles/index.scss";

function App() {
  const style = {
    width: "300px",
  };
  return (
    <div className="App">
      Learn React
      <Button
        onClick={(e) => {
          alert("123W");
        }}
        btnType="primary"
        size="lg"
      >
        {" "}
        primary button{" "}
      </Button>
      <Button disabled btnType="primary" size="sm">
        disabled
      </Button>
      <Button btnType="default"> primary button </Button>
      <Button btnType="link" href="http://localhost:3000/">
        {" "}
        primary button{" "}
      </Button>
      <Alert title="zhehis" description="dsgdrfg" onClose={() => {}}></Alert>
      <Menu>
        <MenuItem>首页</MenuItem>
        <MenuItem>中心</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop1</MenuItem>
        </SubMenu>
      </Menu>
      <div style={style}>
        <Menu mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>首页</MenuItem>
          <MenuItem>中心</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>drop1</MenuItem>
            <MenuItem>drop2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <Tabs type="card">
        <TabItem label="card1">one</TabItem>
        <TabItem label="card1">teo</TabItem>
        <TabItem label="card1">three</TabItem>
      </Tabs>
      <i className="fa" />
      <div style={style}>
      <Input prepend="$" placeholder="sdgfsd"></Input>
      <input type="text" defaultValue="a" />
      </div>
     
    </div>
  );
}

export default App;
