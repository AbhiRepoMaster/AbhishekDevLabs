import Navbar from './components/Navbar';
import UserDetails from './components/userDetails'
import { UserProvider} from './context/UserContext';
import { ThemeProvider } from './context/themeContex';

function App() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                height: "100vh",
                width: "100vw"
            }}>

            <ThemeProvider>
              <UserProvider>
                <Navbar />
                <UserDetails />
              </UserProvider>
            </ThemeProvider> 
        </main>
    );
}

export default App;
