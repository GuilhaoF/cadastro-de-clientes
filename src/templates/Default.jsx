import { Header } from "../partials/Header/Header";
import {makeStyles} from '@material-ui/styles';
import Container from '@mui/material/Container';




const useStyles = makeStyles(() => ({
    container: {
        padding:'15px 0',
    }
}))



function Default({ children }) {

    const styles = useStyles()

    return (
        <>
            <Header />
            <Container className={styles.container}>
                {children}
            </Container>
        </>
    )
}

export default Default